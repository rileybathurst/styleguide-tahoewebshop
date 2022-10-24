import * as React from "react"
import { Link } from "gatsby"

import Header from "../components/header";

// styles
const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}

const ComponentsPage = () => {
  return (
    <>
      <Header />
      <main style={pageStyles}>
        <title>Components</title>
        <h1 style={headingStyles}>Components</h1>
        <p style={paragraphStyles}>
          When reusining code it should be built in components to be reusable.
        </p>
        <p style={paragraphStyles}>
          The way to work work through this is to have <a href="https://storybook.js.org/" target='_blank' rel='noreferrer'>storybooks</a>
        </p>
      </main>
    </>
  )
}

export default ComponentsPage
