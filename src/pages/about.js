import React from "react"
import { graphql } from "gatsby"
import Title from "../components/Title"
import { SEO } from "../components/Seo"
import about from "../assets/images/about.svg"

const About = ({ data }) => {
  const {
    strapiAbout: { title, image, info, stack },
  } = data
  return (
    <>
      <section className="about-page">
        <div className="section-center about-center">
          <img
            // src={image[0].localFile.publicURL}
            src={about}
            alt={title}
            className="about-img-svg"
          />
          <article className="about-text">
            <Title title={title} />
            <p>{info}</p>
            <div className="about-stack">
              {stack.map(item => {
                return <span key={item.id}>{item.title}</span>
              })}
            </div>
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
