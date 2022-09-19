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
  const title = 'Compatability';

  return (
    <>

      <main style={pageStyles}>
        <title>{title}</title>
        <h1 style={headingStyles}>{title}</h1>
        <p style={paragraphStyles}>
          Focus on useage to create the best site for the largest number of people without waisting time on deprecated systems.

          <a href="https://gs.statcounter.com/">Stat Counter</a>
          but more specifically, <a href="https://gs.statcounter.com/browser-version-market-share/all/north-america">browser versions in North America</a>
          <a href="https://caniuse.com/">Can I Use</a>

          <section>
            <h2>Chrome / Edge</h2>
            <p>They are on the same engine so generally stay the same and have similar feature sets.</p>
            <h3>Desktop</h3>
            <p>Almost everyone is on the newest version with auto update so we focus on current and previous, I'm sure there is an asterik to this</p>
            <h3>Mobile</h3>
            <p>I belive updates over the playstore and is not tied to android updates but I should find notes on this.</p>

            <a href="https://support.google.com/chrome/a/answer/7100626?hl=en">Chrome Minimum Requirments</a>
            <p>I dont know if the minimum listed here gets the newest chrome</p>
          </section>

          <section>
            <h2>Safari / Apple</h2>
            <p>Support the current and the latest minor version of the previous major release.</p>
            <h3>Desktop</h3>
            <a href="https://endoflife.date/macos" target="_blank">endoflife.date</a>
            <p>Support the releases as long as Apple, MacOS number corresponds to the safari number.</p>

            <blockquote>
              <p>Current and two previous, but not on true documentation. https://discussions.apple.com/thread/7833747</p>
            </blockquote>
            <p>This kind of shows that Safari versions last three years so Safari gets newer on old systems. Almost everyone is on current safari major release.</p>
            <ul>
              <li>https://en.wikipedia.org/wiki/Safari_version_history</li>
              <li>https://en.wikipedia.org/wiki/MacOS_version_history</li>
            </ul>
            <h3>Mobile</h3>
            <a href="https://support.apple.com/guide/iphone/supported-models-iphe3fa5df43/ios">Apple Supported models to the current iOS</a>
            <p>Support only the most recent version of iOS as thats what Apple do, a very small number are on the back version and decide if something needs to be supported</p>
          </section>

          <section>
            <h2>Firefox</h2>
            <p>Support the current and previous major release, plus keep an eye that the ESR is not broken even if not perfect.</p>
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
        <p>Safari 14 shipped with this support on iOS &amp; iPadOS 14 and macOS Big Sur 11. Catalina was previous and is almost certainly end of life in October</p>
        <p>
          <Link to="/">Go home</Link>.
        </p>

        <h3>CSS Cascade Layers</h3>
        <p>These seem to be more functional than they are, they break in Lighthouse which is a really big deal.</p>

        <h3>Logical Properties</h3>
        <p>Don't yet do the work to remove these but use them on new pieces of code.</p>

        <h3>Not</h3>
        <p>as the whole point is Compatability use the most compatible version of this</p>

        <section>
          <h2>Screen Readers</h2>
          <p>{/* // TODO */}</p>
        </section>

        <section>
          <h2>Chinese Based Browsers</h2>
          <p>Unless specifically asked for I do not support these browsers.</p>
          <ul>
            <li>UC Browser for Android</li>
            <li>QQ Browser</li>
            <li>Baidu Browser</li>
            <li>KaiOS Browser</li>
          </ul>
        </section>
      </main>
    </>
  )
}

export default DeprecationsPage
