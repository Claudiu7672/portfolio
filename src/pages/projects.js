import React from "react"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
import { SEO } from "../components/Seo"

const ProjectsPage = ({
  data: {
    allStrapiProject: { nodes: projects },
  },
}) => {
  return (
    <>
      <main>
        <section className="projects-page">
          <Projects
            className="all projects"
            projects={projects}
            title="my projects"
          />
        </section>
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
      totalCount
    }
  }
`

export default ProjectsPage

export const Head = () => <SEO title="Projects" />
