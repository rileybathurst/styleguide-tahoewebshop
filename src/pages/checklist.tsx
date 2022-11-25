import * as React from "react"

import Header from "../components/header"

const ChecklistPage = () => {
  return (
    <main>
      <Header />

      {/* // TODO: actually make this page its kinda the checks and balances apple note I have */}
      <title>Checklist</title>
      <h1>Checklist</h1>
      {/* // TODO there needs to be warnings and errors maybe other levels */}
      <form>
        <label>
          <input type="checkbox" id="npmstart" name="npmstart" />
          npm no warnings or errors
        </label>

        <label>
          <input type="checkbox" id="npmaudit" name="npmaudit" />
          npm audit
        </label>

        <h2>Web.dev</h2>
        <label>
          <input type="checkbox" id="performance" name="performance" />
          {/* Web.dev */}
          Performance &gt; 90
        </label>
        <br />
        <label>
          <input type="checkbox" id="accessibility" name="accessibility" />
          {/* Web.dev */}
          Accessibility &gt; 90
        </label>
      </form>

      <h2>Validators / Automated</h2>
      https://www.a11yproject.com/checklist/
      https://validator.w3.org/nu/
      https://developer.chrome.com/docs/devtools/css-overview/
      https://cssstats.com/
      https://www.smashingmagazine.com/2021/01/front-end-performance-2021-free-pdf-checklist/

      <h3>SSG</h3>


      <h3>Wordpress</h3>

      <h3>Other</h3>

      <h4>Checks & Balances Notes that I had this needs to be reformatted</h4>
      No single check is perfect and sometimes it may be necessary to be outside of some guidelines to produce a function that otherwise wouldn’t be possible
      - https://validator.w3.org - source info checker
      - https://jigsaw.w3.org/css-validator/ - style check
      - https://github.com/thedaviddias/Front-End-Checklist
      - https://web.dev/measure/
      - http://www.webpagetest.org - performance test
      - https://www.thinkwithgoogle.com/feature/testmysite - similar to lighthouse
      - Starbucks speed test - it’s real and it’s honest
      https://developers.facebook.com/tools/debug/ - don’t worry about the fb:app_id https://yoast.com/help/fb-app-id-warnings/
      - https://cards-dev.twitter.com/validator
      - https://webhint.io/
      - https://observatory.mozilla.org/
      - https://www.deadlinkchecker.com/website-dead-link-checker.asp
      - https://khan.github.io/tota11y/
      - VisBug chrome extension
      - https://whatdoesmysitecost.com
      - https://webaim.org/resources/designers/
      - https://website.grader.com/
      - https://wave.webaim.org/
      - https://search.google.com/search-console

      Safari now has an audit tab in the console
      Screen reader modes are important

      - https://developers.facebook.com/docs/sharing/webmasters
      - https://developer.twitter.com/en/docs/tweets/optimize-with-cards/guides/getting-started

      Wordpress
      - https://wordpress.org/plugins/theme-check/ - theme checker for wordpress standards
      - https://wordpress.org/plugins/health-check/ - wordpress checks
      - https://codex.wordpress.org/Debugging_in_WordPress - hard coded built in wordpress checking

      $lighthouse url —view
      saves and opens a files from the current terminal location

      https://webaim.org
      http://wave.webaim.org
      https://make.wordpress.org/themes/handbook/review/required/theme-tags/

      if woo commerce - https://example.com/wp-admin/admin.php?page=wc-status

      Contrast-grid.eightshapes.com - I need to explore this

      https://support.google.com/webmasters/answer/35769/?hl=en - webmaster guidelines
      https://www.google.com/webmasters/tools/home?hl=en - webmaster tools

      https://developers.google.com/web/
      https://www.sitemaps.org/protocol.html
      https://support.google.com/webmasters/answer/7451184?hl=en&visit_id=1-636692599210106375-1737379475&rd=1

      Best Practices
      https://github.com/h5bp/html5-boilerplate
      has a good .htacess file which can always use more learning

      https://www.smashingmagazine.com/2020/01/front-end-performance-checklist-2020-pdf-pages/

      https://a11yproject.com

      Start putting a checklist in a new .md file

      https://rozgonyiova.com/posts/website-checklist/
      Competitive Analysis, Marketing Mix, and Website Traffic
      CSS Stats
      Checklist
      Identify potential CSS improvements - Chrome Developers

      Search all in code for // !
      Search all in code for // TODO:

    </main >
  )
}

export default ChecklistPage
