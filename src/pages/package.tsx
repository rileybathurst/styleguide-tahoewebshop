import * as React from "react"
import { Link } from "gatsby"

const PackagePage = () => {
  return (
    <main className="page">
      <title>Package.json</title>
      <h1>Package.json</h1>
      <p>
        Make sure these have enough info to be useful:

        https://nodejs.dev/learn/the-package-json-guide

      </p>
      <h2>Properties we should always have</h2>
      // TODO this should have an order
      <ul>
        <li key='name'>"name": "test-project"</li>
        <li key='author'>"author"&#58; &#x7b;
          "name" &#x7b; "Joe",
          "email" &#x7b; "joe@whatever.com",
          "url" &#x7b; "https://whatever.com"
          &#x7d;</li>
        <li key='homepage'>"homepage": "https://whatever.com/package"</li>
        <li key='license'>"license": "MIT"<br />
          <a href="https://choosealicense.com/licenses/">choosealicense.com/licenses</a><br />
          https://opensource.org/licenses/ISC - gatsby default</li>
        <li key='description'>"description": "A package to work with strings"</li>
        <li key='repository'>"repository": "github:whatever/testing"</li>
        <li key='private'>"private": true<br />
          if set to true prevents the app/package to be accidentally published on npm
        </li>
      </ul>
      <Link to="/">Go home</Link>.
    </main>
  )
}

export default PackagePage
