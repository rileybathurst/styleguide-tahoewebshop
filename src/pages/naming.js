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

      <h2>Variable Naming Conventions</h2>
      <p>Try to use wikipedia when possible</p>
      <a href="https://en.wikipedia.org/wiki/List_of_lists_of_lists" target='_blank' rel="nofollow">
        List of Lists of Lists
      </a>

      <h3>Colors</h3>
      <p>Start with a base color, if its not already named a good place to start is
        <a href="https://api.color.pizza/v1/4bb6fd" target='_blank' rel='noreferrer'>
          api.color.pizza/v1/4bb6fd
        </a>
        It should be a louie color
        <a href="https://gist.github.com/rileybathurst/9ea95dce1a82060cb5ca2b959146a093" target='_blank' rel='noreferrer'>
          Louie Colors Gist
        </a>

        Then take the hue and saturation and make that __base.
        Many of the variables are lightness, so just edit the __base and neutral
      </p>

      <h3>Widths of page</h3>
      <p><a href="https://en.wikipedia.org/wiki/Largest_living_flying_birds_by_wingspan">Largest living flying birds by wingspan</a>
        This has a bunch of duplications so the list follows

        <li>
          <li>albatross</li>
          <li>pelican</li>
          <li>condor</li>
          <li>stork</li>
          <li>vulture</li>
          <li>swan</li>
        </li>
      </p>

    </main>
  )
}

export default NamingPage
