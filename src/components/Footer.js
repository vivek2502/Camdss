import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';


class Footer extends Component {

    render() {
        return (
            <footer className="py-4 bg-black">
                {/* <div className="container px-5"><p className="m-0 text-center text-white small">Copyright &copy; Svasth 2022</p></div> */}
                <div class='container-fluid'>
                    <div class="card">
                        <div class="heading text-center">
                            <div class="head1">Powered by Polygon <br />
                                UNFOLD2022
                            </div>
                            <p class="bdr"></p>
                        </div>
                        <div class="card-body">
                            <div class="row m-0 pt-1">
                                <div class="card col-12 col-md-3">
                                    <div class="card-content">
                                        <i class="fas fa-hand-holding-usd fa-3x"></i>
                                        <div class="card-title">
                                            DECENTRALIZED
                                        </div>
                                        <p><small>Save Data' on Decentralized Polygon Network</small></p>
                                        <div class="learn-more">
                                            <p>
                                                <small>
                                                    LEARN MORE
                                                    <label><i class="fas fa-angle-right"></i></label>
                                                </small>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="card col-12 col-md-3">
                                    <div class="card-content">
                                        <i class="far fa-handshake fa-3x"></i>
                                        <div class="card-title">
                                            IMMUTABLITY
                                        </div>
                                        <p><small>Data can't be changed</small></p>
                                        <div class="learn-more">
                                            <p>
                                                <small>
                                                    LEARN MORE
                                                    <label><i class="fas fa-angle-right"></i></label>
                                                </small>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="card col-12 col-md-3">
                                    <div class="card-content">
                                        <i class="fas fa-mobile-alt fa-3x"></i>
                                        <div class="card-title">
                                            NO CENTRAL AUTHORITY
                                        </div>
                                        <p><small>Ownership is in your hand</small></p>
                                        <div class="learn-more">
                                            <p>
                                                <small>
                                                    LEARN MORE
                                                    <label><i class="fas fa-angle-right"></i></label>
                                                </small>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="card col-12 col-md-3">
                                    <div class="card-content">
                                        <i class="fas fa-user-secret fa-3x"></i>
                                        <div class="card-title">
                                            STAY SECURE
                                        </div>
                                        <p><small>Data is more Secure</small></p>
                                        <div class="learn-more">
                                            <p>
                                                <small>
                                                    LEARN MORE
                                                    <label><i class="fas fa-angle-right"></i></label>
                                                </small>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card-footer row m-0">
                            <p>
                                <label>
                                    <i class="fas fa-phone fa-rotate-90 text-primary"></i>
                                </label>
                                Idea by Priyanka Implemented by Vivek</p>
                            <div>
                                <p>
                                    <small class="follow-text">FOLLOW US ON SOCIAL MEDIA</small> <label class="footer-right">
                                        <i class="fab fa-instagram"></i>
                                        <i class="fab fa-facebook-square"></i>
                                        <i class="fab fa-linkedin"></i>
                                        <i class="fab fa-twitter-square"></i>
                                    </label>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;