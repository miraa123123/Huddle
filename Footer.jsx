import React from "react";
import logo from "../images/logo.svg"


export default function Footer(){
    return(
        <footer class="footer">
        <div class="container">
            <div class="row">
                <div class="footer-col">
                    <img src={logo} alt="logo" />
                    <ul>
                        <li ><a className="lo"  href="#">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quisquam, veniam</a></li>

                        <li ><a className="lo"  href="#">+1-535-383-899</a></li>
                        <li ><a className="lo"  href="#">Example@gmail.com</a></li>

                    </ul>
                </div>
                <div class="footer-col">
                    <ul className="m">
                        <li><a href="#">About us</a></li>
                        <li><a href="#">What we do</a></li>
                        <li><a href="#">FAQ</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <ul className="m">
                        <li><a href="#">Career</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Contact us</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>follow us</h4>
                    <div class="social-links">
                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
        </div>
   </footer>
    )
}