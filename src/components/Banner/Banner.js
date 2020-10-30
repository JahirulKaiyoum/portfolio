import React from 'react';
import {
    FaFacebookF,
    FaTwitter,
    FaPinterest,
    FaInstagram,
    FaPlay,
} from "react-icons/fa";
import './Banner.css'

const Banner = () => {

    const [state] = React.useState({
        title: "I am Jonathan Doe",
        text:
          "i,m Jonathan, professional web developer with long time \
        experience in this field​",
        image: "https://i.ibb.co/SBLTcDS/formal.png",
      });
    return (
        <section style={{backgroundColor:'#1f2235' }}>
        <div className="container">
        <div className="row">
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
            <div className="col-6" >
          
                          <img src={state.image} alt="man"  className="img-fluid"/>
            </div>
        </div>
        </div>
        </section>
        
    );
};

export default Banner;

// <header className="header">
//       <div className="container">
//         <div className="row">
//           <div className="col-6">
//             <div className="header__content">
//               <div className="header__section">
//                 <ul className="header__ul">
//                   <li>
//                     <FaFacebookF className="headerIcon" />
//                   </li>
//                   <li>
//                     <FaTwitter className="headerIcon" />
//                   </li>
//                   <li>
//                     <FaPinterest className="headerIcon" />
//                   </li>
//                   <li>
//                     <FaInstagram className="headerIcon" />
//                   </li>
//                 </ul>
//                 <h1>{state.title}</h1>
//                 <p>{state.text}</p>
//                 <div className="header__buttons">
//                   <a href="" className="btn btn-outline">
//                     My Portfolio
//                   </a>
//                   &nbsp;&nbsp;&nbsp;
//                   <a href="" className="btn btn-smart">
//                     <FaPlay className="play" />
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="col-6">
//             <div className="banner__img  ">
//               <img src={state.image} alt="man"  className="img-fluid"/>
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>