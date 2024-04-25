import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  // const projectItems = projects.map((project) => {
  //   return <ProjectItem key = {project.id}/>
  // })
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
      <li key={projects.id} >{projects.projects}</li>
        </div>
    </div>
  );
}

export default ProjectList;
