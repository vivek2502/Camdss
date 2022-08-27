import React, { Component } from 'react';
import DVideo from '../abis/polygon/DVideo.json'
import Navbar from './Navbar'
import Footer from './Footer'

import Main from './Main'
import Web3 from 'web3';
import './App.css';
import ListVideos from './ListVideos';



//Declare IPFS
const ipfsClient = require('ipfs-http-client')
const ipfs = ipfsClient({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' }) // leaving out the arguments will default to these values

class App extends Component {

  //componentWillMount() method allows us to execute the React code synchronously 
  //when the component/window gets loaded or mounted in the DOM
  async componentWillMount() {
    console.log("componentWillMount() : component/window gets loaded and calling ")
    await this.loadWeb3()
    await this.loadBlockchainData()
  }

  async loadWeb3() {
    //MetaMask injects a global API into websites visited by its users at window.ethereum 
    console.log("loadWeb3 : MetaMask injecting a global API into websites visited by its users at window.ethereum ")
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    }
    //(Also available at window.web3.currentProvider for legacy reasons)
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }
  }

  async loadBlockchainData() {
    console.log("loadBlockchainData() : with the help of metamask calling smart contract methods.")
    const web3 = window.web3

    // Load account from metamask
    const accounts = await web3.eth.getAccounts()
    console.log("Metamask Account : ", accounts)
    this.setState({ account: accounts[0] })
    // package allows you to interact with an Ethereum node’s network properties. Ganache/Mainet/Testnet
    const networkId = await web3.eth.net.getId()
    console.log("network id :", networkId)
    //Gives smart contract Address & block address of smart contract
    const networkData = DVideo.networks[networkId]
    console.log("network Data -> smart contract Address & block address of smart contract :", networkData)
    if (networkData) {

      //https://web3js.readthedocs.io/en/v1.2.11/web3-eth-contract.html
      //Here we will get object of Smart Contract
      //dvideo allows to interact with smart contracts as if they were JavaScript objects
      const dvideo = new web3.eth.Contract(DVideo.abi, networkData.address)
      console.log('dvideo object of smart contract : ', dvideo)

      this.setState({ dvideo })
      //Will call a “constant” method total no of video uploaded and execute its smart contract method in the EVM without sending any transaction. 
      //Note calling cannot alter the smart contract state.
      const videosCount = await dvideo.methods.videoCount().call()
      console.log("toatal no of video available : ", videosCount)
      this.setState({ videosCount })

      // Load videos, sort by newest
      console.log("Displaying video available in blockchain")
      for (var i = videosCount; i >= 1; i--) {
        const video = await dvideo.methods.videos(i).call()
        console.log(video)
        this.setState({
          videoHash: [...this.state.videoHash, video.hash]

        })
        //Set all video in videos
        this.setState({
          videos: [...this.state.videos, video]
        })
      }

      //Set latest video with title to view as default 

      const latest = await dvideo.methods.videos(videosCount).call()
      console.log("Also saving lastest video details :", latest)

      this.setState({
        currentHash: latest.hash,
        currentTitle: latest.title
      })

      this.setState({ loading: false })
    } else {
      window.alert('DVideo contract not deployed to detected network.')
    }
  }

  captureFile = event => {
    event.preventDefault()
    const file = event.target.files[0]
    const reader = new window.FileReader()
    reader.readAsArrayBuffer(file)

    reader.onloadend = () => {
      this.setState({ buffer: Buffer(reader.result) })
      console.log('Video loaded in buffer :', this.state.buffer)
    }
  }


  uploadVideo = title => {
    console.log("Submitting file to IPFS...")

    //adding file to the IPFS
    ipfs.add(this.state.buffer, (error, result) => {
      this.setState({ 'result': result });
      console.log('IPFS result : ', result)
      console.log("Size of video is : ", result[0].size)
      console.log("hash of video is : ", result[0].hash)
      if (error) {
        console.error(error)
        return
      }

      if (this.state.videoHash.includes(result[0].hash)) {
        window.alert("This Video is already deployed.")
      }
      else {
        console.log("dvideo: object of smart contract calling uploadVideo method to upload video")
        window.alert("Confirm the transaction")
        this.setState({ loading: true })


        //send a transaction to the smart contract and execute its method. 
        //Note this can alter the smart contract state.
        //https://web3js.readthedocs.io/en/v1.2.11/web3-eth-contract.html

        // using the event emitter
        // this.state.dvideo.methods.uploadVideo(result[0].hash, title).send({ from: this.state.account }).on('transactionHash', (hash) => {
        //   this.setState({ loading: false })
        // })

        //Or using the promise
        this.state.dvideo.methods.uploadVideo(result[0].hash, title).send({ from: this.state.account }).then(function (receipt) {
          console.log(receipt)
          console.log("confirmation : Video Uploaded to blockchain")
        })

      }
    })
  }

  changeVideo = (hash, title) => {
    window.scrollTo(0, 0)
    this.setState({ 'currentHash': hash });
    this.setState({ 'currentTitle': title });
  }

  constructor(props) {
    super(props)
    this.state = {
      buffer: null,
      account: '',
      dvideo: null,
      videos: [],
      videoHash: [],
      loading: true,
      title: null,
      currentHash: null,
      currentTitle: null
    }

    this.uploadVideo = this.uploadVideo.bind(this)
    this.captureFile = this.captureFile.bind(this)
    this.changeVideo = this.changeVideo.bind(this)
  }

  render() {
    return (
      <div>
        <Navbar
          account={this.state.account}
        />
        {this.state.loading
          ? <div id="loader" className="text-center mt-5"><p>Loading...</p></div>
          : <Main
            uploadVideo={this.uploadVideo}
            captureFile={this.captureFile}
            currentHash={this.state.currentHash}
            currentTitle={this.state.currentTitle}
          />
        }
        <ListVideos
          changeVideo={this.changeVideo}
          videos={this.state.videos}
        />
        <Footer />
      </div>
    );
  }
}

export default App;