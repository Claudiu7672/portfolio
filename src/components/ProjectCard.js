import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ProjectCard = ({ title, image, index, slug }) => {
  console.log(index, title)
  return (
    <a href={`/projects/${slug}`} className={`project-${index}`}>
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

export default ProjectCard
