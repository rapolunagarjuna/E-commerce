import React from 'react';
import { Link } from "react-router-dom";

import './Footer.css';
import fb from '../assets/images/fbimg.png'
import twitter from '../assets/images/twitterimg.png'
import linkedin from '../assets/images/linkedinimg.png'
import insta from '../assets/images/instaimg.png'


export default function Footer(){
    return(
        <div className="Footer">
            <div className="sb__footer section__padding">
             <div className="sb__footer-links">
                <div className="sb__footer-links-div">
                    <h4>For Business</h4>
                        <a href="/employer">
                            <p>Employer</p>
                        </a>
                        <a href="/healthplan">
                            <p>Employer</p>
                        </a>
                        <a href="/individual">
                            <p>Employer</p>
                        </a>
                    </div>
                    <div className="sb__footer-links-div">
                    <h4>Resources</h4>
                    <a href="/employer">
                        <p>Employer</p>
                    </a>
                    <a href="/healthplan">
                        <p>Employer</p>
                    </a>
                    <a href="/individual">
                        <p>Employer</p>
                    </a>
                    </div>
                    <div className="sb__footer-links-div">
                    <h4>Partners</h4>
                    <a href="/employer">
                        <p>Employer</p>
                    </a>
                    </div>
                    <div className="sb__footer-links-div">
                    <h4>Company</h4>
                    <a href="/employer">
                        <p>Employer</p>
                    </a>
                    </div>
                    <div className="sb__footer-links-div">
                        <h4>Socials</h4>
                        <div className="socialmedia">
                            <p><img src={fb} alt=""/></p>
                            <p><img src={twitter} alt=""/></p>
                            <p><img src={linked} alt=""/></p>
                            <p><img src={insta} alt=""/></p>
                        </div>
                    </div>
             </div>

            <hr></hr>

            <div className="sb__footer-below">
                <div className="sb++footer-copyright">
                    <p>
                        @{new Date().getFullYear()} All rights reserved.
                    </p>
                </div>
                <div className="sb__footer-below-links">
                    <a href="/terms"><div><p>Terms & Conditions</p></div></a>
                    <a href="/privacy"><div><p>Privacy</p></div></a>
                    <a href="/security"><div><p>Security</p></div></a>
                    <a href="/cookie"><div><p>Cookie declaration</p></div></a>
                
                </div>
            </div>

            </div>
        </div>        
    )
}