import * as React from "react"
import { Link } from "gatsby"

import Header from "../components/header"

const SassPage = () => {
  return (
    <main>
      <Header />

      <title>Styling</title>
      <h1>Styling</h1>
      <p>I need some names for basic styles,
        a flex thats in half etc,
        I know this is what frameworks are for but I more want a naming idea and its sometime hard with bem as its not a block

      </p>

      <h2>appearance: none;</h2>
      <p>// TODO: write notes on how I like this as I find none heavy handed but its nice to change some, although it can get way over the top</p>

      <p><Link to="/styling/sass">sass</Link></p>
      <Link to="/">Home</Link>
    </main >
  )
}

export default SassPage
