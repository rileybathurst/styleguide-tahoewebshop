import * as React from "react"
import { Link } from "gatsby"

import Header from "../components/header";

const CommentsPage = () => {
  const title = 'Comments';

  return (
    <>
      <Header />
      <main>
        <title>{title}</title>
        <h1>{title}</h1>
        <p>
          <a href="https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments" rel="noopener noreferrer">Better Comments</a>
          I currently use Better Comments in VS Code, something like this with being able to search for
        </p>
        <h3>defaults</h3>
        <ul>
          <li>!</li>
          <li>?</li>
          <li>todo</li>
          <li>*</li>
        </ul>
        <h3>custom</h3>
        <ul>
          <li>badname</li>
        </ul>

      </main>
    </>
  )
}

export default CommentsPage
