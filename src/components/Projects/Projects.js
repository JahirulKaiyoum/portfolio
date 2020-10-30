import { Button } from "bootstrap";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";


import ProjectCard from "./ProjectCard";

const Projects = () => {


  
  const data = [
    {
      id: 1,
      img: "https://i.ibb.co/30P8Xv0/1.png",
      heading: "CREATIVE AGENCY ( FULL-STACK WEBSITE)",
      text:
        "It is a full-stack single page website created based on service ",
      github: "",
      website: "",
    },

    {
      id: 2,
      img: "https://i.ibb.co/8cX8BJ6/3.png",
      heading: "TRAVEL GURU ( SINGLE PAGE WEBSITE)",
      text:
        "It is a single-page website created based on traveling (Tourist Place Booking)",
      github: "https://github.com/JahirulKaiyoum/Travel-guru",
      website: "https://travel-guru-35412.web.app/",
    },
    {
      id: 3,
      img: "https://i.ibb.co/3fzCx0m/2.png",
      heading: "VOLUNTEER NETWORK ( FULL-STACK WEBSITE)",
      text:
        "It is a full-stack website created based on event management",
      github: "https://github.com/JahirulKaiyoum/volunteer-work-client",
      website: "https://volunteer-work-60904.web.app/",
    },
];  

 
  return (
    <section style={{ backgroundColor: '#1f2235' , paddingTop:'50px', paddingBottom:'50px' }}>
      <div className="container">
        <div className="row">
          <div className="col-6 offset-3 text-center text-white">
          <h4 className="text-center text-white" style={{ marginTop: '50px' }}>Some Of </h4>
            <h1 className="mainHeader" style={{marginBottom:'100px'}}>My Projects</h1>
          </div>
        </div>
        <div className="row">
                  {
                      data.map(project =><ProjectCard project={project} ></ProjectCard>)
        }
        </div>
      </div>
    </section>
  );
};

export default Projects;



 // const [allData, setAllData] = useState([]);

  // useEffect(() => {
  //   const allProject = data.map((project) => project);
  //   setAllData(allProject);
    
  // }, []);