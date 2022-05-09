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
const SizesPage = () => {
  return (
    <main style={pageStyles}>
      <title>Sizes</title>
      <h1 style={headingStyles}>Sizes</h1>
      <p style={paragraphStyles}>
        A set of sizes that are not numbers to be able to use for scales and variable names. The key is having them connect to wikipedia for reference and preferably something that will not change.</p>

      <ul>
        <li key='planets'>Planet sizes, great for widths</li>
        <li key='mountains'>Mountain heights - worldwide or tahoe maybe NZ i havent used that yet</li>
        <li key='pencils'>Apple pencils</li>
        <li key=''>forest layers for z-index https://en.wikipedia.org/wiki/Forest
          <ul>

          </ul>
        </li>
        <li key='shaodws'>
        // shadows
        // based on the layers of the atomposhere
        // https://en.wikipedia.org/wiki/Atmosphere_of_Earth
        </li>

      </ul>

      <p>
        <Link to="/">Go home</Link>.
      </p>
    </main>
  )
}

export default SizesPage
