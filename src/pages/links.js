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
const LinksPage = () => {
  return (
    <main style={pageStyles}>
      <title>Links</title>
      <h1 style={headingStyles}>Links</h1>
      <p style={paragraphStyles}>
        This is a starting point for how I am dealing with links, colors, underlines, buttons, hover, focus etc etc etc
        <br />
        Default a tag. I think should be outside of the paragraph color but not the site color but I also like the default underline to hover remove the underline
        <br />
        footer and header I dont think need to be visibly links so maybe we go the

      </p>
    </main>
  )
}

export default LinksPage
