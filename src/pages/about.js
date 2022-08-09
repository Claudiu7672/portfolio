import React from "react"
import { graphql } from "gatsby"
import Title from "../components/Title"
import { SEO } from "../components/Seo"

const About = ({ data }) => {
  const {
    strapiAbout: { title, image, info, stack },
  } = data
  return (
    <>
      <section className="about-page">
        <Title title={title} className="about-title" />
        <div className="section-center about-center">
          <img
            src={image[0].localFile.publicURL}
            alt={title}
            className="about-img-svg"
          />
          <article className="about-text">
            <p>{info}</p>
            {/* <div className="about-stack">
              {stack.map(item => {
                return <span key={item.id}>{item.title}</span>
              })}
            </div> */}
          </article>
        </div>
      </section>
    </>
  )
}

export const query = graphql`
  query {
    strapiAbout {
      title
      info
      stack {
        id
        title
      }
      image {
        localFile {
          publicURL
        }
      }
    }
  }
`

export default About

export const Head = () => <SEO title="About" />
