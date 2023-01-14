import React from 'react';
import MediaLink from './common/medalink';
import homeImg from "../images/gitprof3.png";
import { Link } from "react-scroll";


const HomeSection = () => {
    return ( 
         <section id="home" className="home-section justify-content-between align-items-center p-5 d-flex">
          <div className="home-text text-white d-flex align-items-start justify-content-start">
            <h3 className="vertical-text" data-aos="fade-down">INTRODUCE</h3>
            <div>
              <h1 className="hello text-bold"  data-aos="fade-right">
              <span className="text-yellow " data-aos="fade-down">HELLO</span> MY NAME IS <br />
              <span className="text-yellow name"> ANDERSON</span>, I AM A <br />
              FULL STACK DEVELOPPER.
            </h1>
            <MediaLink color="white" />
            </div>
          </div>
          <div className="square d-flex justify-content-between" data-aos="fade-down">
            <div className="hire-me d-flex align-items-end">
              <button href="contact" className="black-btn" data-aos="fade-right" type="submit">
                <Link to="contacts">
                Hire me
                
                </Link>
              </button>
              <a href="https://drive.google.com/file/d/1auJRIuuwt9Uw8zLkOxcA54TelgVmndT1/view?usp=sharing" className="" data-aos="fade-left"type="submit">
                Download CV
                <svg stroke="#f3ca2f" fill="#f3ca2f" stroke-width="0" viewBox="0 0 24 24" class="download-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 16L16 11 13 11 13 4 11 4 11 11 8 11z"></path><path d="M20,18H4v-7H2v7c0,1.103,0.897,2,2,2h16c1.103,0,2-0.897,2-2v-7h-2V18z"></path></svg>
              </a>
            </div>
            <div className="experience text-small">
              <div className="dots"></div>
              <div className="years-exp text-bold text-white align-items-end d-flex justify-center w-100">
                <div className="number text-yellow" data-aos="fade-right">3</div>
                <div className="years-text" data-aos="fade-left">
                  YEARS <br /> EXPERIENCE
                </div>
              </div>
            </div>
          </div>
          <div className="home-bg" data-aos="zoom-in">
            <img src={homeImg} alt="home-bg" className="" />
          </div>
        </section>
     );
}
 
export default HomeSection;