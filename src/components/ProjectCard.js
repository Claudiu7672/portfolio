import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { FaGithubSquare } from "react-icons/fa"
import { BsHouseFill } from "react-icons/bs"

const Project = ({
  description,
  title,
  github,
  stack,
  url,
  image,
  index,
  slug,
}) => {
  return (
    <article className="single-project">
      <div className="project-container">
        <GatsbyImage
          image={getImage(image.localFile)}
          alt={title}
          className="single-project-img"
        />
        <a href={url} className="project-icon">
          <BsHouseFill></BsHouseFill>
        </a>
      </div>
      <div className="project-details">
        <h4>{title}</h4>
        <p>{description.substring(0, 200)}</p>
        <div className="project-footer">
          <span>
            <FaGithubSquare className="project-page-icon"></FaGithubSquare>
          </span>
          <a href={github}>source code</a>
        </div>
      </div>
    </article>
  )
}

export default Project
