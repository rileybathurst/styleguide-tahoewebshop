import * as React from "react";
// import { Script } from "gatsby";

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

const AnalyticsPage = () => {
  return (
    <main style={pageStyles}>
      <title>Analytics</title>
      <h1 style={headingStyles}>Analytics</h1>
      <p style={paragraphStyles}>
        I think analytics can be really important but not letting the tail wag the dog and this post https://andy-bell.co.uk/most-of-our-users-are-on-desktop/ on https://en.wikipedia.org/wiki/Survivorship_bias</p>

    </main>
  )
}

export default AnalyticsPage
