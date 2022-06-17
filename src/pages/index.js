import * as React from "react"
import { Link } from "gatsby"

import "../styles/styles.scss"

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
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
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24,
}

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}

const docLink = {
  text: "Documentation",
  url: "https://www.gatsbyjs.com/docs/",
  color: "#8954A8",
}

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
}

// markup
const IndexPage = () => {
  return (
    <>
      <nav>
        <ul>
          <li key="sass"><Link to="/styling/sass">Styling</Link></li>
          <li key="links"><Link to="/links">Links</Link></li>
          <li key="nesting"><Link to="/nesting">Nesting</Link></li>
          <li key="package"><Link to="/package">Package</Link></li>
          <li key="sizes"><Link to="/sizes">Sizes</Link></li>
          <li key="strapi"><Link to="/strapi">Strapi</Link></li>
          <li key="symbols"><Link to="/symbols">Symbols</Link></li>
          <li key="type"><Link to="/type">Type</Link></li>
          <li key="naming"><Link to="/naming">Naming</Link></li>
        </ul>
      </nav>
      <main>
        <title>Home Page</title>
        <h1>Style Guide</h1>
        <p>Building
          <code>code styles so I know how to do things</code>
        </p>

        <Link to="/type">Type</Link>

        <h2>CSS</h2>
        <ul>
          <li>
            <h3>Titles</h3>
            <code>
            /*------------------------------------*\<br />
              #SECTION-TITLE<br />
              \*------------------------------------*/
            </code>
            {/* // TODO I think this is from css guidelines */}
          </li>

          <li>
            <h3>CSS Variables</h3>
            <code>
              Use variable instead of <Link to="/sass">SASS</Link> if possible,<br />
              Media Queries have to be sass
            </code>
          </li>

          <li>
            <h3>Better Comments</h3>
            <a href="https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments" style={linkStyle}>
              VS Code Extension
            </a>
          </li>

          <li>
            <h3>Emoji 🦄</h3>
            <h4>I use emoji all over my code the color means I find them 100x quicker</h4>
            <p>📣 look back at this it's not breaking but I don't like it</p>
            <p>🚨 It's broken</p>
            <p>span role="img" aria-label="Party popper emojis" 🎉🎉🎉 /span</p>
          </li>

          <h2>SCSS</h2>

          <li>
            <h3>Multi-line padding</h3>
            <p>When text needs a backgroundColor but spans multiple lines</p>
            <p>This is on css-tricks in a few ways the one I am working on currently doesnt work in firefox
              but does in safari and chrome</p>
            <code>
              working on this in JSWC but having issues update this note later
            </code>
          </li>

          <li>
            <h3>@extend</h3>
            <h4>Only extend within the file. I always get lost when it's more</h4>
          </li>

          <li>
            <h3>Icons</h3>
            <h4>Default to Google Icons</h4>
            <a href="https://fonts.google.com/icons" target="_blank" rel="norefferer noopener">Google Icons</a>
          </li>

          <li>
            <h3>Color</h3>
            <h4><a href="https://twitter.com/Mantia/status/570687359328645120?s=20&t=SDi-mrZULTZkWiXZELXXsA">"This isn't a Louie Mantia color."
              (That means it isn't 5° increment for Hue or ⅛ of 100% increment for Saturation and Brightness.)</a></h4>
            <br /> this is just a base I find it needs tweaks for things such as contrasts and very light and dark mark this with // custom on better comments
          </li>

          <li>
            <h3>Apostrophe</h3>
            <h4>&#39;</h4>
            <p>When writing an apostrophe in text to make it not get confused write it as ampersand hashtag thirty-nine semicolon</p>
          </li>

          <li>
            <h3>Quotes</h3>
            <h4>&#39;</h4>
            <p>When writing in javascript or typescript use single quotes</p>
          </li>

          <li>
            <h3>Import Order</h3>
            <p>Group like with like and have a line between</p>
          </li>

          <li>
            <h3>Z Index</h3>
            <p>// forest layers for z-index
              // https://en.wikipedia.org/wiki/Forest
              --floor: 1;
              --understory: 2;
              --canopy: 3;
              --emergent: 4;</p></li>

          <li>
            <h3>Shadows</h3>
            <h4><a href="https://en.wikipedia.org/wiki/Umbra,_penumbra_and_antumbra">Umbra, penumbra and antumbra wiki
              Distinct parts of a shadow, this style sheet is basic, light mode</a></h4>
            <ul>
              <li>Umbra is direct light - dark - for active down clicks</li>
              <li>Antumbra is eclipsed - medium - for hover</li>
              <li>Penumbra is obscured - light - for layering but waiting</li>
            </ul>
            <code>
              0 3px 6px hsla(0, 0%, 0%, 0.12),
              0 2px 4px hsla(0, 0%, 0%, 0.10);
            </code>
            <code>
              0 14px 24px hsla(0, 0%, 0%, 0.16),
              0 4px 12px hsla(0, 0%, 0%, 0.12);
            </code>
            <code>
              box-shadow:
              0 5px 12px hsla(0, 0%, 0%, 0.4) /* Ambient light shadow */,
              0 18px 32px hsla(0, 0%, 0%, 0.16) /* Direct light shadow */;
            </code>
          </li>
        </ul>
        <img
          alt="Gatsby G Logo"
          src="data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2a10 10 0 110 20 10 10 0 010-20zm0 2c-3.73 0-6.86 2.55-7.75 6L14 19.75c3.45-.89 6-4.02 6-7.75h-5.25v1.5h3.45a6.37 6.37 0 01-3.89 4.44L6.06 9.69C7 7.31 9.3 5.63 12 5.63c2.13 0 4 1.04 5.18 2.65l1.23-1.06A7.959 7.959 0 0012 4zm-8 8a8 8 0 008 8c.04 0 .09 0-8-8z' fill='%23639'/%3E%3C/svg%3E"
        />
      </main>
    </>
  )
}

export default IndexPage
