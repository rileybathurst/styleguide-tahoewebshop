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

const NestingPage = () => {
  return (
    <main style={pageStyles}>
      <title>Nesting</title>
      <h1 style={headingStyles}>Nesting</h1>
      <p style={paragraphStyles}>
        Maybe this is ordering I'm just trying to figure it out.<br />

        Never go more than 3 deep aka the inception rule.<br />

        <ol>
          <li key='max'>max width sizes</li>
          <li key='styles'>styles</li>
          <li key='dark'>dark</li>
          <li key='sizes'>min width sizes</li>
          <li key='nested'>nested</li>
        </ol>

        <Link to="/">Go home</Link>.
      </p>
    </main>
  )
}

export default NestingPage
