import React from "react"
import { graphql } from "gatsby"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import { SEO } from "../components/seo"

const IndexPage = ({ data }) => {
  const {
    allStrapiProject: { nodes: projects },
  } = data
  return (
    <>
      <main>
        <Hero />
        <Services />
        <Jobs />
        <Projects title="latest works" showLink projects={projects} />
      </main>
    </>
  )
}

export const query = graphql`
  query {
    allStrapiProject {
      nodes {
        description
        featured
        github
        id
        slug
        title
        url
        stack {
          id
          title
        }
        image {
          localFile {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
            }
          }
        }
      }
    }
  }
`

export default IndexPage

export const Head = () => <SEO title="Home" />
