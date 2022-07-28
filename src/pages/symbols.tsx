import * as React from "react"
import { Link } from "gatsby"

const SymbolsPage = () => {
  return (
    <main>
      <title>Symbols</title>
      <h1>Symbols</h1>
      <p>
        <a
          href="https://www.w3.org/wiki/Common_HTML_entities_used_for_typography"
          target="blank"
          rel="noopener noreffer"
        >W3C Common HTML entities used for typography
        </a>
        <ul>
          <li><code>&thinsp; & thinsp; - thin space</code></li>
        </ul>
        backup <br />
        https://www.toptal.com/designers/htmlarrows/
      </p>
      <Link to="/">Go home</Link>.
    </main>
  )
}

export default SymbolsPage
