import React from "react";
import Carousel from "react-elastic-carousel";
import Project from "./common/project";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Awesome Books Library",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae animi
      dolorem odio hic perferendis officiis? Doloremque natus, rerum quaerat
      corrupti optio deleniti? Quae consequuntur deserunt quia maxime alias,
      sunt eaque?`,
      Image: "image/name",
      projectLink: "github",
      date: "Jun 2021",
      type: "WebSite App",
    },
  ];
  return (
    <Carousel>
      {projects.map((item) => (
        <Project key={item.id} project={item} />
      ))}
    </Carousel>
  );
};

export default Projects;
