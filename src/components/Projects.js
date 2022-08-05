import React from "react"
import ProjectCard from "./ProjectCard"
import Title from "./Title"

const Projects = ({ projects, title }) => {
  return (
    <section className="section">
      <Title title={title} />
      <div className="section-center projects-page-center">
        {projects.map((project, index) => {
          return <ProjectCard key={project.id} index={index} {...project} />
        })}
      </div>
    </section>
  )
}

export default Projects
