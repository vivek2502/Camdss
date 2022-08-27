import React, { Component } from 'react';
import './App.css';
import lg from '../lgcam.jpg'

class Main extends Component {

  render() {
    return (
      <div className="container-fluid text-monospace" >
        <br></br>
        &nbsp;
        <br></br>

        <div className="row">

          <div className="col-md-9">
            <div className="embed-responsive eth-card embed-responsive-16by9" style={{ maxHeight: '450px', maxWidth: '950px' }}>
              <video

                src={`https://ipfs.infura.io/ipfs/${this.props.currentHash}`}
                controls

              >
              </video>
            </div>

          </div>

          <div className="eth-card border overflow-scroll text-center" style={{ maxHeight: '448px', minWidth: '300px' }}>
            <h3><b>Store CCTV Data</b></h3>
            <form onSubmit={(event) => {
              {/* Upload Video */ }
              event.preventDefault()
              const title = this.videoTitle.value
              this.props.uploadVideo(title)
            }} >
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input type='file' accept=".mp4, .mkv .ogg .wmv .mov" onChange={this.props.captureFile} style={{ width: '300px' }} />
              <div className="form-group mr-sm-2 ">
                {/* <input
                  id="videoTitle"
                  type="text"
                  ref={(input) => { this.videoTitle = input }}
                  className="form-control-sm"
                  placeholder="DD-MM-YYYY HH:MM:SS"
                  required /> */}


                <div className=" my-4 mr-auto ml-auto text-left" style={{ width: "80%" }}>
                  <select id="videoTitle" ref={(select) => { this.videoTitle = select }} className="form-control" w-80 required >
                    <option defaultValue value="">
                      Choose Room
                    </option>
                    <option value="Server Room 1">Server Room 1</option>
                    <option value="Server Room 2">Server Room 2</option>
                    <option value="Server Room 3">Server Room 3</option>
                    <option value="Office Room 1">Office Room 1</option>
                    <option value="Office Room 2">Office Room 2</option>
                    <option value="Office Room 3">Office Room 3</option>
                    <option value="Data Center 1">Data Center 1</option>
                    <option value="Data Center 2">Data Center 2</option>
                    <option value="Data Center 3">Data Center 3</option>
                    <option value="Living Area 1">Living Area 1</option>
                    <option value="Living Area 2">Living Area 2</option>
                    <option value="Living Area 3">Living Area 3</option>
                    <option value="Office Are 1">Office Area 1</option>
                    <option value="Office Are 2">Office Area 2</option>
                    <option value="Office Are 3">Office Area 3</option>
                  </select>
                  <button type="submit" className="btn btn-primary my-2 sm-2 btn-md w-100">
                    Deploy!
                  </button>
                </div>
                <text class="block2">https://www.dcode.fr/timestamp-converter</text>
              </div>
              {/* { <button type="submit" className="btn btn-primary btn-block btn-sm" >Deploy!</button> } */}

              <img src={lg} width="270" height="150" className="d-inline-block align-centre" alt="" />


              &nbsp;
            </form>
          </div>


        </div>
        <button type="button" class="block">{this.props.currentTitle}&nbsp; &nbsp;{this.props.currentHash}</button>
        


      </div>
    );
  }
}

export default Main;
