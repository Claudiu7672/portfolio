import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ProjectCardHome = ({ title, image, index, slug }) => {
  return (
    <a href="/projects" className={`project-${index}`}>
      <article className="project">
        <GatsbyImage
          image={getImage(image.localFile)}
          className="project-img"
          alt={title}
        />
        <div className="project-info">
          <h3>{title}</h3>
        </div>
      </article>
    </a>
  )
}

export default ProjectCardHome
