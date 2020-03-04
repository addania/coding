import React from "react"
import Layout from "../components/layout.js"
import Header from "../components/header.js"
import { graphql } from "gatsby"
import SEO from "../components/seo.js"
import { Carousel } from "../components/carousel.js"

export default ({ data }) => (
  <Layout>
    <h2 style={{ textAlign: "center" }}>Dev Impressions</h2>
    <p style={{ textAlign: "center" }}>
      infiltrating the dev universe in order to <s>conquer it</s> learn a lot ;)
    </p>
    <p style={{ textAlign: "justify", textJustify: "inter-word" }}>
      <img
        src="https://i.imgur.com/zcYbg1V.jpg"
        alt="Photo by Gereth Davies from Pexels"
      />
      <br />
      <strong>Dev day 0: 02.03.2020</strong>
      <br />
      <blockquote>
        The day to be remembered... My very very <code>1st </code>
        day as a Front-End Developer... The day <code>0</code>, since obviously
        all acceptably decent indices shall start with zero.
      </blockquote>
      <br />A day a bit chaotic as I was settling in my new corner of the
      office.
      <br />
      <br />
      But a day with a <code>MohnKuchen</code> which propheted an excellent day.
      After all, what can go wrong when you have a prospect of a delicious cake
      and warm cup of tea from our CTO (Chief Tea Officer) to combat literally
      ANY challenge in life? They say <code>piece of cake</code> for a reason,
      don't they? :)
      <br />
      <br />A day when I <i>actually</i> talked to <i>actual</i> developers. And
      they
      <i> actually</i> talked BACK :) Thank you <code>MohnKuchen</code> ;)
      <br />
      <br />A day with <code>muscle tomcat</code>. Yes, yes, dear Austrians: ein
      Tag mit Muskelkater :) from previous day(s) of intense training and ...
      let's admit it... carrying that <code>MohnKuchen</code> all the way to the
      office.
      <br />
      <br />A day deeply satisfying as I finally achieved my long desired goal.
      The hard work for past months has finally paid off. Dream turning
      inevitably into reality right in front of my eyes. It seems a bit surreal,
      it seems a bit... well plain even, earthy maybe. But <code>MINE</code>.
      <br />
      <br />A day with a small <code>victory</code> to setup my first
      professional dev environment.
      <br />
      <br />A day which ended up with an intriguing <code>puzzle</code> to look
      forward to solving the next day :)
      <br />
      <br />A day with an after-work <code>hangout</code> which turned out to be
      more pleasant than expected.
      <br />
      <blockquote>Total score: The day freaking ROCKED :)</blockquote>
      <br />
      And yes, the <code>cake</code> was the most important part of it :)
      <br />
      <img
        src="https://i.imgur.com/aRwy8mP.jpg"
        alt="Photo by Antonio Quagliata from Pexels"
      />
      <br />
      <strong>Dev day 1: 03.03.2020</strong>
      <br />
      <blockquote>
        First things first... yes, leftovers from the <code>cake </code>
        are still in the fridge... will be another great day :)
      </blockquote>
      <br />
      And now back to the <code>puzzle</code> from yesterday: how to hack the
      unhackable login to the app on my LOCAL? My wildly lucky guess{" "}
      <code>admin admin</code> did not work. But I got an insider tip that the
      second half of the riddle I have solved already, muhahahaha. So now only
      to get the first one right.
      <br />
      <br />
      Tadaaa! Mission accomplished! Addania +1 Hacker Skills. It is only my
      second day and I am totally pro already :)) ...*cough cough*
      <br />
      <br />
      Another achievement of the day: I made my very first{" "}
      <code>code review</code> today B) It was extremely serious change request:
      correct a typo, haha. One must always start somewhere :) Tough life of
      beginners.
      <br />
      <br />
      And I finally finished setup for the main app thanks to couple of (4)
      people who helped me make it work after we realized that our internal wiki
      is outdated and there are some backend issues.
      <br />
      <br />
      And the highlight of the day was{" "}
      <code>New Starters After-Work Pizza</code>. Technically I am not a new
      starter in the company, however I am new starter in the dev team, so I
      joined the event and it was hilarious to talk to my new team. They are
      simply amazing and super funny. I love those dev jokes. I didn't want to
      leave as I was having lots of fun, but the time was running short for my
      Tuesday's Sports Group. It would suck if the teacher didn't arrive :)) So
      I had to. And the yoga class was actually nice, relaxing, yet challenging.
      Cause without a challenge it would be boring ;)
      <br />
      <img
        src="https://i.imgur.com/aRwy8mP.jpg"
        alt="Photo by Antonio Quagliata from Pexels"
      />
      <br />
      <strong>Dev day 2: 04.03.2020</strong>
      <br />
      <blockquote>
        Excellent, I got an Italian cooking Italian lunch for me today. Life
        cannot be better :) I hope he uses enough of his <code>Pepper</code> to
        make me giggle whole day. Cheers Giulio!
      </blockquote>
      <br />
      Motto of the day: Feed developer, save the world.
      <br />
      const developer = "addania"
      <br />
      <br />
      XXX
    </p>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
