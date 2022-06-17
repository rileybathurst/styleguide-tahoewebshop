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
const NamingPage = () => {
  return (
    <main style={pageStyles}>
      <title>Naming</title>
      <h1 style={headingStyles}>Naming</h1>
      <p style={paragraphStyles}>
        This is a really big topic that will be broken up into smaller pieces.
      </p>

      <h2>File Naming Conventions</h2>
      <p>keep them different to be searchable</p>
      <p>Default file index.html or index.js / index.tsx</p>
      <p>Default script <code>app.js</code> or <code>app.tsx</code></p>
      <p>Default css or scss <code>styles.css</code></p>

    </main>
  )
}

export default NamingPage
