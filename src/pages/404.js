import React from "react"
import { Link } from "gatsby"
import { SEO } from "../components/Seo"

const Error = () => {
  return (
    <>
      <main className="error-page">
        <div className="error-container">
          <h1>ooops, it's a dead end</h1>
          <Link to="/" className="btn">
            back home
          </Link>
        </div>
      </main>
    </>
  )
}

export default Error

export const Head = () => <SEO title="Not Found" />
