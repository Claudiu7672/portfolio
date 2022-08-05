import React from "react"
import Title from "./Title"
import ProjectCardHome from "./ProjectCardHome"
import { Link } from "gatsby"

const ProjectsHome = ({ projects, title, showLink }) => {
  return (
    <section className="section projects">
      <Title title={title} />
      <div className="section-center projects-center">
        {projects.map((project, index) => {
          return <ProjectCardHome key={project.id} index={index} {...project} />
        })}
      </div>
      {showLink && (
        <Link to="/projects" className="btn center-btn">
          projects
        </Link>
      )}
    </section>
  )
}

export default ProjectsHome
