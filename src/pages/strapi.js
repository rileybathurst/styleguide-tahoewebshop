import * as React from "react"
import { Link } from "gatsby"

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

// markup
const StrapiPage = () => {
  return (
    <main style={pageStyles}>
      <title>Strapi</title>
      <h1 style={headingStyles}>Strapi</h1>
      <p style={paragraphStyles}>
        Slug
        Capitalize breakdown to -capitalize
        This regex means you can only have lowercase and numbers with spaces
        ^[a-z0-9\-]*$<br />
        if needed \-<br />

        dont allow double spaces. or a space to start or finish the string
        ^\S((?!.*  ).*\S)?$<br />

        <br />
        there might be a way to combine these two regexes

        <Link to="/">Go home</Link>.
      </p>
    </main>
  )
}

export default StrapiPage
