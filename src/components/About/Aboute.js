import React from 'react';
import {
    FaFacebookF,
    FaTwitter,
    FaPinterest,
    FaInstagram,
    FaPlay,
} from "react-icons/fa";
import Menu from '../Menu/Menu';
import './About.css'

const Aboute = () => {
    const [state] = React.useState({
        title: "I am Jonathan Doe",
        text:
          "i,m Jonathan, professional web developer with long time \ experience in this field​",
        image: "https://i.ibb.co/SBLTcDS/formal.png",
      });
    return (


        <>
        <Menu></Menu>
        <section style={{backgroundColor:'#1f2235' }}>
        <div className="container">
        <div className="row">
            
            <div className="col-6" >
          
                          <img src={state.image} alt="man"  className="img-fluid"/>
                    </div>
                    
                    <div className="col-6 content-left " style={{ color:"white", paddingTop:'235px'}}>
                    <ul className="header__ul">
                                  <li style={{color: "white"}}>
                                    <FaFacebookF className="headerIcon" />
                                  </li>
                                  <li style={{color: "white"}}>
                                    <FaTwitter className="headerIcon" />
                                  </li>
                        <li style={{ color: "white" }}>
                                    <FaPinterest className="headerIcon" />
                                  </li>
                                  <li style={{ color: "white" }} >
                                    <FaInstagram className="headerIcon" />
                                  </li>
                    </ul>
                    <h1>{state.title}</h1>
                                    <p>{state.text}</p>
                                    <div className="header__buttons">
                                      <a href="" className="btn btn-outline">
                                        My Portfolio
                                      </a>
                                      &nbsp;&nbsp;&nbsp;
                                      <a href="" className="btn btn-smart">
                                        <FaPlay className="play" />
                                      </a>
                                    </div>
                </div>
        </div>
        </div>
        </section>
        </>
    );
};

export default Aboute;