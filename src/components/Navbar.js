import React, { Component } from 'react';
import Identicon from 'identicon.js';
import lg from '../unfold.png'


class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark fixed-top bg-secondary flex-md-nowrap p-0 shadow text-monospace  ">
        <a
          className="navbar-brand col-sm-3 col-md-3 mr-0 text-light  font-weight-bold"
          href="http://localhost:3000/"
          target="_blank"
          rel="noopener noreferrer"
          
        >
          <img src={lg} width="60" height="32" className="d-inline-block align-top " alt="" />
          &nbsp;CCTV Decentralized Data
        </a>
        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
            <small className="text-light font-weight-bold"  >
              <small id="account">{this.props.account}</small>
            </small>
            { this.props.account
              ? <img
                className='ml-2'
                width='30'
                height='30'
                src={`data:image/png;base64,${new Identicon(this.props.account, 30).toString()}`}
                alt=""
              />
              : <span></span>
            }
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;