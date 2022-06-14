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

const SassPage = () => {
  return (
    <main style={pageStyles}>
      <title>Sass</title>
      <h1 style={headingStyles}>Sass</h1>
      <p style={paragraphStyles}>
        I'm trying to get away from Sass and think that will eventually happen.
        As for now there are a few places I need to use it.

        <ul>
          <li key='nesting'>Nesting is close and that will happen first but not yet at May 2022</li>
          <li key='media-queries'>Media query variables</li>
          <li key='extend'>@extend this has a smaller issue that using @extend for a :hoevr so build the first style as a BEM--hover and @extend that</li>
          <li key='ampersands'>
            <a href="https://css-tricks.com/the-sass-ampersand/"
              target="_blank"
              rel="noopener noreferrer">
              Ampersands
            </a>
          </li>
        </ul>

        <Link to="/">Go home</Link>.
      </p>
    </main>
  )
}

export default SassPage
