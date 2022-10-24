import * as React from "react"
import { Link } from "gatsby"

const Header = () => {
  return (
    <header >
      <h1>Style Guide</h1>
      <nav>
        <ul>
          {/* // TODO: these could have variables instead of writing things 3 times in a row 
          // if it gets really fancy its in an array with a loop but then nesting gets problematic */}
          <li key="sass"><Link to="/styling/sass">Styling</Link></li>
          <li key="links"><Link to="/links">Links</Link></li>
          <li key="nesting"><Link to="/nesting">Nesting</Link></li>
          <li key="package"><Link to="/package">Package</Link></li>
          <li key="sizes"><Link to="/sizes">Sizes</Link></li>
          <li key="strapi"><Link to="/strapi">Strapi</Link></li>
          <li key="symbols"><Link to="/symbols">Symbols</Link></li>
          <li key="type"><Link to="/type">Type</Link></li>
          <li key="naming"><Link to="/naming">Naming</Link></li>
          <li key="compatability"><Link to="/compatability">Compatability</Link></li>
          <li key="components"><Link to="/components">Components</Link></li>
          <li key="comments"><Link to="/comments">Comments</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
