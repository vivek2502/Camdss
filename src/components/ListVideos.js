import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';


class ListVideos extends Component {

    render() {
        return (
            <div className='row'>
                {this.props.videos.map((video, key) => {
                    return (
                        <div className="col-sm-2 eth-card2 border overflow-scroll text-center" >
                            <div className="card mb-4 my-2 text-center bg-secondary mx-auto" style={{ width: '200px' }} key={key} >
                                <div className="card-title bg-dark">
                                    <small className="text-white"><b>{video.lastUpdated}</b></small>
                                </div>
                                <div>
                                    <p onClick={() => this.props.changeVideo(video.hash, video.title)}>
                                        <video
                                            src={`https://ipfs.infura.io/ipfs/${video.hash}`}
                                            style={{ width: '150px', alignContent: 'center' }}
                                        />
                                    </p>
                                </div>
                            </div>

                        </div>
                    )
                })}
            </div>
        );
    }
}

export default ListVideos;