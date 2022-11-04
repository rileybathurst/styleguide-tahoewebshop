import * as React from "react"
import { Link } from "gatsby";

import Header from "../components/header"

const TitlesPage = () => {
  let title = "Titles";


  return (
    <>
      <Header />
      <main className="page">
        <title>{title}</title>
        <h1>{title}</h1>
        <p>
          Inside of the Gatsby page const<br />
          <code>let title = "Page Title";</code><br />
          for SEO create a /components/title-template.js</p>
        <p><code>const TitleTemplate = ' - Site Title';<br />
          export default TitleTemplate;</code></p>

        <p><code>
          SEO component<br />
          title= `$&#x2774;title&#x2775;$&#x2774;TitleTemplate&#x2775;`
        </code></p>

        {/* // TODO check this works with gatsby head api */}
      </main>
    </>
  )
}

export default TitlesPage
