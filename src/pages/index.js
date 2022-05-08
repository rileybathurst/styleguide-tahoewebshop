import * as React from "react"
import { Link } from "gatsby"

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
const headingAccentStyles = {
  color: "#663399",
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

// data
const links = [
  {
    text: "Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial/",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    color: "#E95800",
  },
  {
    text: "How to Guides",
    url: "https://www.gatsbyjs.com/docs/how-to/",
    description:
      "Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
    color: "#1099A8",
  },
  {
    text: "Reference Guides",
    url: "https://www.gatsbyjs.com/docs/reference/",
    description:
      "Nitty-gritty technical descriptions of how Gatsby works. Most useful when you need detailed information about Gatsby's APIs.",
    color: "#BC027F",
  },
  {
    text: "Conceptual Guides",
    url: "https://www.gatsbyjs.com/docs/conceptual/",
    description:
      "Big-picture explanations of higher-level Gatsby concepts. Most useful for building understanding of a particular topic.",
    color: "#0D96F2",
  },
  {
    text: "Plugin Library",
    url: "https://www.gatsbyjs.com/plugins",
    description:
      "Add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
    color: "#8EB814",
  },
  {
    text: "Build and Host",
    url: "https://www.gatsbyjs.com/cloud",
    badge: true,
    description:
      "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
    color: "#663399",
  },
]

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Home Page</title>
      <h1 style={headingStyles}>
        Style Guide
      </h1>
      <p style={paragraphStyles}>
        Building <code style={codeStyles}>code styles so I know how to do things</code>
      </p>

      <Link to="type">Type</Link>

      <h2>CSS</h2>
      <ul style={listStyles}>
        <li style={docLinkStyle}>
          <h3>Titles</h3>
          <code style={codeStyles}>/*------------------------------------*\<br />
            #SECTION-TITLE<br />
            \*------------------------------------*/</code>
        </li>

        <li style={docLinkStyle}>
          <h3>CSS Variables</h3>
          <code style={codeStyles}>
            Use variable instead of <Link to="/sass">SASS</Link> if possible,<br />
            Media Queries have to be sass
          </code>
        </li>

        <li style={docLinkStyle}>
          <h3>Better Comments</h3>
          <a href="https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments" style={linkStyle}>
            VS Code Extension
          </a>
        </li>

        <li style={docLinkStyle}>
          <h3>Emoji 🦄</h3>
          <h4>I use emoji all over my code the color means I find them 100x quicker</h4>
          <p>📣 look back at this it's not breaking but I don't like it</p>
          <p>🚨 It's broken</p>
        </li>

        <h2>SCSS</h2>

        <li style={docLinkStyle}>
          <h3>@extend</h3>
          <h4>Only extend within the file. I always get lost when it's more</h4>
        </li>

        <li style={docLinkStyle}>
          <h3>Icons</h3>
          <h4>Default to Google Icons</h4>
          <a href="https://fonts.google.com/icons" target="_blank" rel="norefferer noopener">Google Icons</a>
        </li>

        <li style={docLinkStyle}>
          <h3>Color</h3>
          <h4><a href="https://twitter.com/Mantia/status/570687359328645120?s=20&t=SDi-mrZULTZkWiXZELXXsA">"This isn't a Louie Mantia color."
            (That means it isn't 5° increment for Hue or ⅛ of 100% increment for Saturation and Brightness.)</a></h4>
          <br /> this is just a base I find it needs tweaks for things such as contrasts and very light and dark mark this with // custom on better comments
        </li>

        <li style={docLinkStyle}>
          <h3>Apostrophe</h3>
          <h4>&#39;</h4>
          <p>When writing an apostrophe in text to make it not get confused write it as ampersand hashtag thirty-nine semicolon</p>
        </li>

        <li style={docLinkStyle}>
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



        {links.map(link => (
          <li key={link.url} style={{ ...listItemStyles, color: link.color }}>
            <span>
              <a
                style={linkStyle}
                href={`${link.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
              >
                {link.text}
              </a>
              {link.badge && (
                <span style={badgeStyle} aria-label="New Badge">
                  NEW!
                </span>
              )}
              <p style={descriptionStyle}>{link.description}</p>
            </span>
          </li>
        ))}
      </ul>
      <img
        alt="Gatsby G Logo"
        src="data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2a10 10 0 110 20 10 10 0 010-20zm0 2c-3.73 0-6.86 2.55-7.75 6L14 19.75c3.45-.89 6-4.02 6-7.75h-5.25v1.5h3.45a6.37 6.37 0 01-3.89 4.44L6.06 9.69C7 7.31 9.3 5.63 12 5.63c2.13 0 4 1.04 5.18 2.65l1.23-1.06A7.959 7.959 0 0012 4zm-8 8a8 8 0 008 8c.04 0 .09 0-8-8z' fill='%23639'/%3E%3C/svg%3E"
      />
    </main>
  )
}

export default IndexPage
