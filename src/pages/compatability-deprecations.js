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
const DeprecationsPage = () => {
  const title = "Compatability and Deprecations"

  return (
    <main style={pageStyles}>
      <title>{title}</title>
      <h1 style={headingStyles}>{title}</h1>
      <p style={paragraphStyles}>
        Focus on useage. Then on supported versions.

        <a href="https://gs.statcounter.com/">Stat Counter</a>
        but more specifically, <a href="https://gs.statcounter.com/browser-version-market-share/all/north-america">browser versions in North America</a>
        <a href="https://caniuse.com/">Can I Use</a>

        <section>
          <h2>Chrome / Edge</h2>
          <p>They are on the same engine so generally stay the same.</p>
          <h3>Desktop</h3>
          <p>Almost everyone is on the newest version with auto update so we focus on current and previous, I'm sure there is an asterik to this</p>
          <h3>Mobile</h3>
          <p>I belive updates over the playstore and is not tied to android updates but I should find notes on this.</p>

          <a href="https://support.google.com/chrome/a/answer/7100626?hl=en">Chrome Minimum Requirments</a>
          <p>I dont know if the minimum listed here gets the newest chrome</p>

        </section>

        <section>
          <h2>Safari / Apple</h2>
          <p>Support the current major release.</p>
          <h3>Desktop</h3>
          <a href="https://endoflife.date/macos" target="_blank">endoflife.date</a>
          <p>Support the releases as long as Apple, MacOS number corresponds to the safari number.</p>
          <h3>Mobile</h3>
          <a href="https://support.apple.com/guide/iphone/supported-models-iphe3fa5df43/ios">Apple Supported models to the current iOS</a>
          <p>Support only the most recent version of iOS as thats what Apple do, a very small number are on the back version and decide if something needs to be supported</p>
        </section>

        <section>
          <h2>Firefox</h2>
          <p>Support the current and previous major release.</p>
        </section>

        Supported version


        <section>
          <h2>Samsung Internet</h2>
          <p>I need a device for testing this.</p>
        </section>


        <a href="https://www.samsung.com/au/support/mobile-devices/update-android-os-version/">Samsung makes the most phones what version of android do they get</a>
      </p>

      <h3>WebP</h3>
      <p>Currently needs support even tho its kinda back as the MacOS it needs is still supported</p>
      <p>
        <Link to="/">Go home</Link>.
      </p>
    </main>
  )
}

export default DeprecationsPage
