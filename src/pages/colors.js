import * as React from "react"

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

const ColorsPage = () => {
  return (
    <main style={pageStyles}>
      <title>Color</title>
      <h1 style={headingStyles}>Color</h1>
      <p style={paragraphStyles}>
        <h4><a href="https://twitter.com/Mantia/status/570687359328645120?s=20&t=SDi-mrZULTZkWiXZELXXsA" rel="nofollow norefferer">"This isn't a Louie Mantia color."
          (That means it isn't 5° increment for Hue or ⅛ of 100% increment for Saturation and Brightness.)</a></h4>
        <br /> this is just a base I find it needs tweaks for things such as contrasts and very light and dark mark this with // custom on better comments
      </p>

      louie neutrals
      --black-metal: hsl(0, 0%, 2.5%);
      --black-out: hsl(0, 0%, 12.5%);
      --raven-black: hsl(0, 0%, 25%);
      --industrial-revolution: hsl(0, 0%, 37.5%);
      --grey: grey; // I can not use the variable here
      --cold-grey: hsl(0, 0%, 62.5%);
      --tin-soldier: hsl(0, 0%, 75%);
      --kingly-cloud: hsl(0, 0%, 87.5%);
      --brilliance: hsl(0, 0%, 97.5%);

    </main>
  )
}

export default ColorsPage
