import React from "react";
import Carousel from "react-elastic-carousel";
import Project from "./common/project";
import project1 from "../images/icinema.png";
import project2 from "../images/project2.png";
import project3 from "../images/project3.png";
import project4 from "../images/project4.png";
import project5 from "../images/project5.png";
import project6 from "../images/project6.png";
import project7 from "../images/project7.png";
import project8 from "../images/project8.png";

const Projects = () => {
  const projects = [
     {
      id: 0,
      title: "LMS",
      description: `Learning Management System(LMS) Inquiry for developing a mobile app LMS for test practice, offering personalized and adaptive learning to identify weak areas and aid users in achieving desired results efficiently. Subjects include driving, scuba diving, health, hygiene, and first aid.`,
      projImage: "https://github.com/Enning94/OOP-School-Library/assets/65068771/b0ea6715-2b87-48c7-96a5-0b443433cf74",
      githubLink: "https://github.com/Hombre2014/lms",
      demoLink: "https://lms-dashboard-weld.vercel.app/",
      date: "April 2023",
      type: "Mobile App, Dashboard",
      techs: ["Nextjs", "Redux", "Tailwinds",],
      stacks : ["API", "Fullstack", "Frontennd", "Mobile App"],
    },
    {
      id: 1,
      title: "ICinema",
      description: `The iCinema is a single webapp that is based on the TVmaze API. With the use 
       the Involvement API to POST and GET the likes and comments,
        users can comment and like a certain series.`,
      projImage: project1,
      githubLink: "https://github.com/SamanAtashi/JS-Capstone-project/",
      demoLink: "https://samanatashi.github.io/JS-Capstone-project/dist/",
      date: "Jun 2021",
      type: "WebSite",
      techs: ["JavaScript", "HTML", "CSS",],
      stacks : ["API", "Fullstack", "Frontennd"],
    },
    {
      id: 2,
      title: "Awesome Books Library",
      description: `"Awesome books" is a simple website that displays a list of books and allows you to add and remove books from that list`,
      projImage: project2,
      githubLink: "https://github.com/andersonlebon/Awesome-book",
      demoLink: "https://andersonlebon.github.io/Awesome-book/",
      date: "Jun 2021",
      type: "WebSite App",
      techs: ["JavaScript", "HTML", "CSS", "Bootstrap"],
      stacks : ["Fullstack", "Frontennd"],
    },
    {
      id: 3,
      title: "CAR-PARKING",
      description: `We are already using the intelligence of the connected car with companion apps that recognize when the car
is in a paid parking area and later auto-stops when leaving. Creating a simple customer-focused payment solution for parking.`,

      projImage: project3,
      githubLink: "https://github.com/andersonlebon/CAR-PARKING",
      demoLink: "https://car-packing.netlify.app/",
      date: "Feb 2021",
      type: "WebSite App",
      techs: ["React", "Redux", "JavaScript", "HTML", "CSS",],
      stacks : ["Fullstack", "Frontennd", "API"],
    },
    {
      id: 4,
      title: "Charity in the world",
      description: `CHARITY IN THE WORLD is a website that provides the resources and platform to empower families to 
       funds for their adoption and engage their community with the powerful story of 
       why they are choosing adoption. As one of the purest expressions of the love and compassion of the Gospel,
        adoption has always provided the life-altering solution to this need.`,
      projImage: project4,
            githubLink: "https://github.com/andersonlebon/CHARITY-CAPSTON-PROJECT",
      demoLink: "https://andersonlebon.github.io/CHARITY-CAPSTON-PROJECT/",
      date: "Jun 2021",
      type: "WebSite",
      techs: ["JavaScript", "HTML", "CSS",],
      stacks : ["Frontennd"],
    },
    {
      id: 5,
      title: "BookStore",
      description: `This is a simple website build with 'REACT' and 'REDUX' that displays a 
      list of books from an API and allows you to add and remove books in the API store.`,
      projImage: project5,
            githubLink: "https://github.com/andersonlebon/BookStore",
      demoLink: "https://caleb-bookstore.herokuapp.com/books",
      date: "Jul 2021",
      type: "WebSite App",
      techs: ["React", "Redux", "JavaScript", "HTML", "CSS", "Bootstrap", "Saas"],
      stacks : ["Fullstack", "Frontennd", "API"],
    },
    {
      id: 6,
      title: "TODO-LIST",
      description: `ToDo List App is a kind of app that is generally used to maintain our day-to-day tasks or list everything that we have to do,
        We can add more tasks at any time and delete a task that is completed.`,
      projImage: project6,
      githubLink: "https://github.com/andersonlebon/todo-with-react",
      demoLink: "https://andersonlebon.github.io/Portfolio-w2/images/icons/IconExport.svg",
      date: "Aug 2021",
      type: "WebSite App",
      techs: ["React", "Redux", "JavaScript", "HTML", "CSS", "Bootstrap", "Saas"],
      stacks : ["Fullstack", "Frontennd", "API"],
    },
    {
      id: 8,
      title: "Budget App",
      description: `A mobile web application where you can manage your budget: you have a list of transactions associated with 
      a category, so that you can see how much money you spent and on what.
      `,
      projImage: project7,
      githubLink: "ghttps://github.com/andersonlebon/Budget-appithub",
      demoLink: "https://github.com/andersonlebon/Budget-app",
      date: "Nov 2021",
      type: "Mobile webApp",
      techs: [ "Ruby", "Ruby on Rails", "JavaScript", "HTML", "CSS", "Bootstrap", "SaaS"],
      stacks : ["Fullstack", "Frontennd", "API" , "Backend", "Database"],
    },
    {
      id: 7,
      title: "House Bonking",
      description: `I built a house booking application(with discount) where the user has the posibilities to add, reserve and
       delete houses with added advantage to view house details.The application has 
       authentication whereby the logged in user can only delete the houses that he/she added.`,
      projImage: project8,
      githubLink: "https://github.com/andersonlebon/Final-capstone-frontend-",
      demoLink: "https://bookinghouse.netlify.app/",
      date: "Dec 2021",
      type: "WebSite App",
      techs: ["React", "Redux", "JavaScript", "HTML", "CSS", "Bootstrap", "Saas", "Ruby", "Ruby on Rails"],
      stacks : ["Fullstack", "Frontennd", "API"],
    },
  ];
  return (
    <>
    <h4 className="smal-title feature-work-title" data-aos="fade-right">Feature Works</h4>
    <Carousel id="projects">
      {projects.map((item) => (
        <Project key={item.id} project={item} />
      ))}
    </Carousel>
    </>
  );
};

export default Projects;
