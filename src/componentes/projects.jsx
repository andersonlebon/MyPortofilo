import React from "react";
import Carousel from "react-elastic-carousel";
import Project from "./common/project";
import bg2 from "../images/download.jpg";
import bg1 from "../images/bgbook.jpg";
import bg3 from "../images/download2.jpg";
import pImage from "../images/icinema.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Awesome Books Library",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae animi
      dolorem odio hic perferendis officiis? Doloremque natus, rerum quaerat
      corrupti optio deleniti? Quae consequuntur deserunt quia maxime alias,
      sunt eaque?`,
      image: bg1,
      projImage: pImage,
      projectLink: "github",
      date: "Jun 2021",
      type: "WebSite App",
    },
    {
      id: 2,
      title: "Awesome Books Library",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae animi
      dolorem odio hic perferendis officiis? Doloremque natus, rerum quaerat
      corrupti optio deleniti? Quae consequuntur deserunt quia maxime alias,
      sunt eaque?`,
      image: bg2,
      projectLink: "github",
      date: "Jun 2021",
      type: "WebSite App",
    },
    {
      id: 3,
      title: "Awesome Books Library",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae animi
      dolorem odio hic perferendis officiis? Doloremque natus, rerum quaerat
      corrupti optio deleniti? Quae consequuntur deserunt quia maxime alias,
      sunt eaque?`,
      image: bg3,
      projectLink: "github",
      date: "Jun 2021",
      type: "WebSite App",
    },
  ];
  return (
    <Carousel id="projects">
      {projects.map((item) => (
        <Project key={item.id} project={item} />
      ))}
    </Carousel>
  );
};

export default Projects;
