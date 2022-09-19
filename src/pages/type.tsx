import * as React from "react";
import { Link } from "gatsby";

import Header from '../components/header';

const TypePage = () => {
  return (
    <>
      <Header />
      <main>
        <h1>Typography Starter</h1>

        <h2>I know its an absolute mess but I want it here for now</h2>

        body
        font-size: 16px;
        line-height: 1.25rem; /* 20px */


        p
        margin-bottom: 0.625rem; /* 10px */
        /* single line 30px */
        /* two lines 50px */
        /* multi lines + 20px each */


        h1
        margin-top: 0; /* browser reset */
        font-size: 3rem; /* 48px */
        line-height: 3.75rem; /* 60px */
        margin-bottom: 2.5rem; /* 40px */
        /* single line 100px */
        /* two lines 160px */
        /* multi lines + 60px each */


        h2
        font-size: 2.5rem; /* 40px */
        line-height: 3rem; /* 48px */
        margin-bottom: 2rem; /* 32px */
        /* single line 80px */
        /* two lines 128px🚨 */
        /* multi lines + 48px each🚨 */

        /* what if i just do a slightly different base for two lines? as an extra class? */
        /* 96 + x? */


        h3
        font-size: 2rem; /* 32px */
        line-height: 2.5rem; /* 40px */
        margin-bottom: 1.875rem; /* 30px */
        /* single line 70px */
        /* two lines 110px */
        /* multi lines + 40px each */


        h4
        font-size: 1.5rem; /* 24px */
        line-height: 2rem; /* 32px */
        margin-bottom: 1.75rem; /* 28px */
        /* single line 60px */
        /* two lines 92px🚨 */
        /* multi lines + 32px🚨 each */


        h5
        font-size: 1.25rem; /* 20px */
        line-height: 1.875rem; /* 30px */
        margin-bottom: 0.625rem; /* 10px */
        /* single line 40px */
        /* two lines 70px */
        /* multi lines + 30px each */


        h6
        font-size: 1rem; /* 16px */
        line-height: 1.25rem; /* 20px this becomes the vertical rythym */
        margin-bottom: 0.625rem; /* 10px skips some of the lines */
        /* single line 30px */
        /* two lines 50px */
        /* multi lines + 20px each */


        /* start the multi line problem here as itll be worst */
        small
        font-size: 0.75rem; /* 12px */
        line-height: 1rem; /* 16px */
        margin-bottom: 0.875rem; /* 14px */
        /* single line 30px */
        /* two lines 46px🚨 */
        /* multi lines + 16px🚨 each */

        /* options i want 20px if its smaller it can be 10 but thats unrealistic */
        /* 4 is pretty small on a single line that doesnt work it'd have to go to 30 */
        /* two is already fine */
        /* anymore gets super complicated to get it right */


        .two-small-lines
        @extend small;
        margin-bottom: 0.5rem; /* 8px */
        /* two lines 40px */


        .multiple-small-lines
        @extend small;


        load Gatsby fonts the "right" way
        https://www.gatsbyjs.com/docs/how-to/styling/using-web-fonts/

        <h2>Headers, subheaders and eyebrows</h2>
        <p>Google product pages do a good job of eyebrow headers, containing a very short and sweet keyword, this article talks about it, I prefer the the short name of brow,<br />
          <a href="https://uxmovement.com/content/increasing-headline-clicks-with-eyebrow-text/" target='_blank' rel='noopener noreferrer'>https://uxmovement.com/content/increasing-headline-clicks-with-eyebrow-text/</a>
        </p>
        <blockquote>bolder weight on it, all uppercase the letters, or change its color.</blockquote>

        <h3>supra</h3>
        <p>used in academic or legal texts to refer to someone or something mentioned above or earlier, this refers to having the brow above it.</p>

        <p>wrap brows and crest in an hgroup with a ridge class</p>

        <Link to="/"><h3>Home</h3></Link>

      </main >
    </>
  )
}

export default TypePage
