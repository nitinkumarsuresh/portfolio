import React from 'react'
import Title from '../layouts/Title'
import {p1,p2,p3,p4,p5,p6 } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="LMS Web"
          des="A Learning Management System (LMS) web application streamlines online education by providing tools for course creation, content delivery, and student management."
          src={p1}
          glink="https://github.com/nitinkumarsuresh/LMS"
        />
        <ProjectsCard
          title="Movie Search Web"
          des="A movie search API web application provides users with a user-friendly platform to search, explore, and retrieve information about movies and related data from an external API source."
          src={p2}
          glink="https://github.com/nitinkumarsuresh/Movies-Search-App"
        />
        <ProjectsCard
          title="Text - Speech App"
          des="A text-to-speech web application converts written text into spoken audio, enhancing accessibility and providing a convenient tool for users with varying needs, from content to language learning."
          src={p3}
          glink="https://github.com/nitinkumarsuresh/Text-Speech-Converter"
        />
        <ProjectsCard
          title="Jump & Race Game"
          des="Jump and Race Web Application is an interactive platform designed for online gaming enthusiasts to compete and test their jumping and racing skills in a virtual environment."
          src={p4}
          glink="https://github.com/nitinkumarsuresh/Jump-Race-Game"
        />
        <ProjectsCard
          title="Weather API"
          des="
          A Weather API web application provides real-time weather information and forecasts for locations worldwide, enhancing user access to crucial meteorological data."
          src={p5}
          glink="https://github.com/nitinkumarsuresh/Weather-App"
        />
        <ProjectsCard
          title="Calculator App"
          des="A Calculator Android Application simplifies mathematical tasks, providing users with an efficient tool for basic arithmetic operations and calculations on their mobile devices."
          src={p6}
          glink="https://github.com/nitinkumarsuresh/Calculator-App-React-Native"
        />
      </div>
    </section>
  );
}

export default Projects