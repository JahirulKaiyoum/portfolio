import { Button } from 'bootstrap';
import React from 'react';
import { FaGithub,VscFileSymlinkFile } from "react-icons/fa";

const ProjectCard = (props) => {

        const {img,heading,text,website,github} =props.project;
    return (


        <div className='col-4'>
        
        <div className="card" style={{width: "18rem" , height: "23rem"}}>
            <img src={img} className="card-img-top" alt="..."></img>
            <div className="card-body">
                <h5 className="card-title">{heading}</h5>
                    <p className="card-text">{text}</p>
                    <button type="button" class="btn btn-danger" style={{marginLeft:'20px'}}>Github</button>
                    <button type="button" class="btn btn-danger">Live Site</button>
                
                </div>
                

        
        </div>
        
        </div>
  
  
    );
};

export default ProjectCard;