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
      <br />
      <strong>Dev day 0.5: 02/03.03.2020 23:50</strong>
      <br />
      <blockquote>
        I just had this philosophical and self-critical moment wondering if this
        diary had any added value whatsoever.
      </blockquote>
      <br />I do not know if for you dear reader(s) (assuming there are any
      readers... but according to my sophisticated calculations and AI based
      predictions, there should be precisely at least one: future me), so for me
      personally it certainly makes <code>lots</code> of fun. Especially at
      these most creative moments at 23:50 (like <code>right now</code>) when I
      should have been fast asleep like two hours ago and instead I am totally
      hyped with a waterfall of ideas :))
      <br />
      <br />
      Anyhow, one simple blog = one (sleepless but) happier developer on Earth.
      <br />
      <img
        src="https://i.imgur.com/tH7xZhk.jpg"
        alt="Photo by Pixabay Pexels"
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
        src="https://i.imgur.com/6UF5Rk9.jpg"
        alt="Photo by Creative Vix from Pexels"
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
      Plus as a bonus I got not only 1 (one) achievement, but actually 3 (THREE)
      :) I managed to create my very first PR and as{" "}
      <code> all good things come in threes</code> I also sumbitted the second
      and the third. All got approved and merged, yay!
      <br />
      <br />
      The evening was painfully beautiful. Or.. painful & beautiful? Or both at
      the same time? Only I know... and him.
      <br />
      <img
        src="https://i.imgur.com/aEMHKTi.jpg"
        alt="Photo by Jackson David from Pexels"
      />
      <br />
      <strong>Dev day 3: 05.03.2020</strong>
      <br />
      <blockquote>
        To keep up with the <code>food</code> pattern from the past posts
        (because it makes total sense for a programming blog) I am meeting my
        former team for our AM / Dev Team lunch today. I miss my team especially
        because I hired most of them personally and <code>cherry</code>-picked
        almost each and every one of them :) Hmm, cherries... reminds me that I
        am hungry.
      </blockquote>
      <br />
      Makes me wonder why I am actually writing a dev blog instead of a food
      blog? :) Yeah, because dunno.. why not? :D
      <br />
      <br />
      Everyone tries to be cool and writes a dev blog and guess what? You find{" "}
      <code>dev</code> stuff for <code>dev</code> people in there..{" "}
      <code>dev</code> boring.. ;) Buuut imagine a person who lures you into a
      programming blog only for you to find a <code>golden grail</code> full of
      chocolate and cake and food and did I mention chocolate? :) Surpriiise,
      you are in Heaven ! Haha, I am special (or differently talented).
      <br />
      <br />
      So what is up in the dev world today? Did lots of <code>VIP</code> stuff
      (a.k.a. very important push). I wrote a major article about the initial
      Front-End settup for any future new starter in the company, such a
      charitable work :) I am literally a saint already.
      <br />
      <br />
      And the <code>hallmark</code> of the day was plotting with colleagues how
      to take over the world using robots :D Oh yes, we founded a{" "}
      <code>secret</code> group of underground <code>hackers</code> called{" "}
      <a href="https://www.youtube.com/watch?v=X8Tj5BBW9tM">
        Team Alpha-Super-Awesome-Cool-Dynamite-Wolf-Squadron
      </a>{" "}
      who will be meeting up after work every week and plotting terrible things.
      The very first meeting was .. how to put it.. most interesting. We had..
      hmm.. most interesting ideas which included gloves, VR and toilet sensors
      :D .. Told ya, most interesting.
      <br />
      <img
        src="https://i.imgur.com/rDr9oY2.jpg"
        alt="Photo by Jackson David from Pexels"
      />
      <br />
      <strong>Dev day 4: 06.03.2020</strong>
      <br />
      <blockquote>
        Emergency! There is:
        <br />
        - no cake
        <br />
        - no funny Italian cooking
        <br />
        - no team lunch
        <br />- no choxolate
      </blockquote>
      <br />
      What is only going to happen?
      <br />
      <br />
      Oh, wait! It is <code>Friday</code>! Nothing (else) matters as long as it
      is Friday :) It is a good day by <code>default</code>.
      <br />
      <br />
      const [day, setDay] = useState("good");
      <br />
      <br />
      And therefore this was a (good) day to finally make progress on improving
      my <code>challenge</code>. Even though it was tempting to still continue
      with the handbook, priorities (self-imposed and self-enforced) were clear:{" "}
      <code>"Challenge or nothing!"</code>. Althought Friday was whispering:
      "Pick nothing, pick nothing! Nothing is c-h-ool". But I manged some
      improvements which were IMMEDIATELY approved. Like really? Before I was
      waiting for feedback sometimes for 3 weeks. Now it took like 3 minutes.
      Power of Friday I guess :)
      <br />
      <br />
      After-work afternoon and evening were <code>EPIC</code>:
      <br />
      <br />
      - amazing company
      <br />
      - quality conversation
      <br />
      - Magic
      <br />- lots of fun while dancing because <code>Some like it Hot</code>
      <br />
      - fantastic dinner in the fairyland of Peter Pan
      <br />
      <br />
      What more to wish? Soles of my feet burnt from dancing: L.I.T.E.R.A.L.L.Y.
      <br />
      <br />
      This day was <code>LEGEN..wait for it..DARY</code>
      <br />
      <img
        src="https://i.imgur.com/sxv0av1.jpg"
        alt="Photo by https://estiloswing.es/wp-content/uploads/2018/08/tecnica-lindy-5.jpg"
      />
      <br />
      <br />
      <strong>Dev day 5: 09.03.2020</strong>
      <br />
      <br />
      You know how those <code>lift conversations</code> go.. You have{" "}
      <code>30 seconds</code> to engage your fellow travellers (who happen to be
      your colleagues) in a very serious conversation about very serious topics
      like weather and stuff :) As I find weather topic boring, I usually ask{" "}
      <code>"how are you?"</code> But not out of politeness as most people do
      who never expect or interest themselves in the actual answer. I usually am
      genuinely interested in what they say :) Especially after the weekend, I
      am eager to hear those weekend stories, how people spend their life
      outside of work. But as it happens to be a Monday, the answer to{" "}
      <code>"how are you?"</code> is however typically:{" "}
      <code>"Yeah, you know.. Monday"</code>.
      <blockquote>
        For most work-bound souls, Monday has become an <code>adjective.</code>{" "}
        Monday has become the the <code>state</code> of spirit.
      </blockquote>
      <br />
      But when I ask people how they are, it is also for me a small
      retrospective moment to actually give a brief check on my own emotional
      state. And what I surprisingly found this particular Monday was that I was
      actually <code>looking forward</code> to go to job! Just like entire last
      week. And so unlike so many weeks before. Tracing back to... years even.
      Wow, what a delightful plot twist. What a peaceful feeling that it{" "}
      <code>is</code> actually possible to like the job and to be (at least for
      a brief moment in life)... simply <code>content</code>.
      <br />
      <br />
      The peaceful moment lasted.. for about that lift ride :) As afterwards I
      tried to make another repo work on my local, following very short guide (5
      instructions) and failed on the very last one - installing Docker.. I am
      cursed with this Docker, it keeps resisting my attempts to tame it. Error
      message was quite clear: <code>Low on disc space</code>.. What was not
      clear though was... how on EARTH I can run out of disc space after ["one",
      "ein", "um", "jeden"] week of having brand new pc? Aaaanyhow, seems like
      issue with initial system installation. And... Dom is on holiday. Issue
      will have to wait till Wednesday. Time for progress on studying
      Typescript.
      <br />
      <br />
      Oh and evening was quite interesting. Signed up for a 1 hour meditation
      workshop on Mindvalley. Was really pleasant to silence the thoughts and
      enjoy some peace in my own head :)
      <img
        src="https://i.imgur.com/ZJgxiKI.jpg"
        alt="Photo by Tina Nord from Pexels"
      />
      <br />
      <strong>Dev day 6: 10.03.2020</strong>
      <br />
      <blockquote>
        It is happening.. I cannot believe it..The first real tangible impact of
        Corona on my life.. React Vienna meetup was <code>cancelled</code>!
      </blockquote>
      <br />
      Was really looking forward to it as it was supposed to be my very first
      dev meetup. But it turned out that spontanoues alternative plan was just
      as amazing.
      <br />
      <br />
      Sometimes no matter where you are, what situation surrounds you, if you
      are with the right person, the world turns a better place for that brief
      moment :) So yeah, cinema, dinner and worthwhile conversation all dosed
      just in the perfect balance to flavor the end of the day just right.
      <br />
      <br />
      <img src="https://i.imgur.com/naD9SDf.jpg" alt="Photo from vapiano.com" />
      <br />
      <strong>Dev day 7: 11.03.2020</strong>
      <br />
      <blockquote>
        Great stuff is happening today! I got assigned to my very first{" "}
        <code>pod</code>, yay! Moreover, they already gave me the very first
        <code> issue</code> to look at.
      </blockquote>
      <br />
      And that is not all :) ! Colleague and I finally re-partitioned the disc
      to have enough space for all upcoming devilish projects and for.. Docker
      (gosh why I keep mistyping the Docker with <code>i</code>). Docker beware!
      Here I come again! Full firepower this time! And this time I defeat you!
      And so did I... almost...technically... or at least in theory. Cause...{" "}
      <code>ANOTHER</code> error! So I summoned the Docker Wizard Jan :) and we
      spent entire afternoon figuring it out. Only it turned out it was not the
      Docker issue.
      <br />
      <br />
      It turned out the <code>npm start</code> was completely broken for entire
      frontend team. Then I am thinking ... why NOBODY screamed before? I guess
      the dev world was waiting for a <code>hero</code> to save them.. :) cough*
      cough* (oh no... hero with Corona?)!
      <br />
      <br />
      And yes, today was a big day when I finalized my pro master hipster setup:
      <br />
      <img src="https://i.imgur.com/ZHI8A86.jpg" alt="Photo by Addania" />
      <br />
      Finally 2 huge screens plus the one from laptop. No more compromises with
      1 tiny little screen where I try to cramp 6 small windows next to each
      other. It is time to live in the lap of luxury, where each window has its
      dedicated section! No more <code>alt-tabing</code> endlessly in the{" "}
      <code>inception</code> of windows. Dream of every programmer has become
      real*
      <br />
      <br />
      ____________________________________
      <br />
      <i style={{ fontSize: "10px" }}>
        *Foot note in very tiny font: "Yes.. in practice.. I only use the middle
        one. The rest two are decorations" :){" "}
      </i>
      <br />
      <br />
      Worth mentioning is also my pro master hipster{" "}
      <code>water-->tea-->coffee</code> setup (from left to right). Just in case
      you haven't noticed :)
      <br />
      <br />
      <img
        src="https://i.imgur.com/XssOb7u.jpg?1"
        alt="Photo by Ekrulila from Pexels"
      />
      <strong>Dev day 8: 12.03.2020</strong>
      <blockquote>Today I am dangerous.</blockquote>
      <br />
      All boxes are checked:
      <br />
      <input type="checkbox" checked></input> dangerous sunglasses (as real as
      imaginary) are on
      <br />
      <input type="checkbox" checked></input> dangerous{" "}
      <a href="https://www.youtube.com/watch?v=QRQwZDWz1Pw">track</a> is on
      <br />
      <input type="checkbox" checked></input> I (dangerously) stir in my chair
      to find that perfect subtle (and dangerous) alignment for my dangerous ..{" "}
      <s>butt</s>.. spine!!
      <br />
      <br />
      Today I will work on my very first issue and I will solve it, crack it,
      nail it.. all on my own! Completely alone!! And then I will obviously rule
      the universe.. At least that is the plan.. What can possible stop me? :))
      Hmm, maybe I should take a look at that issue first, maybe :))
      <br />
      <br />2 hours later....
      <blockquote>
        "Doors and corners. That's where they get you"
        <br />
        Det. Josephus Miller (The Expanse)
      </blockquote>
      <img
        src="https://i.imgur.com/QxcOEsn.jpg"
        alt="Photo from https://www.ctvscifi.ca"
      />
      <br />
      Ok, let's not talk about it, just NOT! Hahaha :))
      <br />
      <br />
      But at least I learned a lot today (more on it{" "}
      <a href="https://addania.github.io/coding/Template_Literal/">here</a>).
      Today my head literally exploded with info. I learned more in one day than
      in previous 1.5 weeks. Wohaa. And I was such a good apprentice, so bright
      and fast-learner and uncomplicated, that my mentor totally did NOT HAVE TO
      take his laptop and move to a table right next to me, so that he doesn't
      need to walk all way to my place every few seconds when I had another
      thousand of questions :) Hey, at least I had a neighbour!
      <br />
      <br />
      And as all my new colleagues are so nice to me and help me out, I decided
      to purchase a special treat for them.
      <br />
      <img src="https://i.imgur.com/al6QpWq.jpg" alt="Photo by Addania" />I
      called it a <s>bribe</s>.. thank-you package :)
      <br />
      - the 1st one for the 1st colleagues
      <br />- the 2nd one for <s>the 2nd coll</s>.. ok, for ME.
      <br />
      - the rest of them, yes, for ME as well :)
      <br />
      One of them was already missing in the picture (that was the first one..)
      <br />
      <br />
      The afternoon was rather confusing. I really wanted to concentrate on
      coding, but as my Slovak colleague was bombarding me with latest
      announcements from Slovak government that they are closing borders with
      Austria and everyone coming to the country from abroad will be kept in
      quaranteen, I was slowly starting to be nervous about being even able to
      come home today.
      <br />
      <br />I completely forgot about the German course and we also cancelled
      the{" "}
      <a href="https://www.youtube.com/watch?v=X8Tj5BBW9tM">
        Team Alpha-Super-Awesome-Cool-Dynamite-Wolf-Squadron
      </a>{" "}
      after-work hangout and soon I was rushing to the train station hoping that
      the trains to Slovakia would not be cancelled yet (as some trains to Italy
      and Switzerland had been already for couple of days). And as the company
      announced yesterday that we all would be taking home office from next
      Monday on and after agreement with my own boss to be able to already start
      my home office tomorrow, I was packed with my laptop, with a huge bag with
      all my stuff from the fridge. And seeing all other people also rushing to
      the Bratislava train with also huge bags and some of them even with their{" "}
      <code>monitors</code>... it totally felt like an...{" "}
      <code>evacuation</code>. Which I guess it actually <strong>was</strong>.
      <br />
      <br />
      Brrr... spooky train ride back home. There was such a heavy and somber
      atmosphere hanging (even stuck) in the air. Or was it just me?
      <br />
      <br />
      __________________________
      <br />
      <i>(on the bright) Side (Note):</i>
      <br />
      <br />
      Today I finally got my bath robe back from ... someone. Yeah, because it
      is perfectly fine to have people safe-keeping (and because you can never
      be sure) and/or wearing your bath robes :) Anyhow, it was my favourite
      bath robe (because it was the only one) and for almost a year it was...
      away. So now I finally got it back and brought this treasure home. Only I
      brought it with an uninvited guest. It turned out to be a host of a...{" "}
      <code>Motte</code>!! So annoying, having <code>Motte</code> in my home
      sweet home, my pristine castle, my holy sanctuary??
      <br />
      <br />
      ...Fast-forward to Saturday...
      <br />
      <br />
      Captain's log, stardate 20200314.18:07:
      <pre style={{ color: "white" }}>
        "After two days of hunting and 10 Mottenfallen: <br />
        Human versus Motte: <br />
        1:0"
      </pre>
      <img
        src="https://i.imgur.com/kwERdM2.jpg"
        alt="Photo from https://www.wired.com"
      />
      <br />
      <strong>Dev day 9: 13.03.2020</strong>
      <br />
      <blockquote>It starts to be creepy</blockquote>
      <br />
      I mean the whole Corona situation. I try to focus on my job, but it just
      feels strange. Kind of out of this space. 
      <br />
      <br />
      Ok, decision has been made,
      emergency shopping (just to be on the safe side and prepared for any
      eventuality [of an apocalypse]):
      <br />
      <img src="https://i.imgur.com/F3JevVz.jpg" alt="Photo by Addania" />
      Now whatever happens, I will be fine (dose of chocolate solves every
      problem in the world, does it not?).
      <br />
      <br />
      And I made a tough decision today. I was considering to travel to my
      family in the evening or not. As tempting as it was (even having a
      colleague who would give me a ride), I decided against it. After all I
      have been in Vienna for past weeks where situation is much more severe
      than in Slovakia and where I have been exposed to lots and lots of people
      in trains, U-bahn, job, outside of job.. Which increases probability of
      potential danger even if I do not have any symptoms. So it would not be
      wise and responsible now to pose the same risk to my family. As much as I
      miss them, they and their health are much more important to me than my
      loneliness.
      <br />
      <br />
      Anyway, today I did some QA testing for the issue implemented by my
      colleague and then I literally spent entire day (until midnight) browsing
      the code, playing around, testing some of my hypothesis and trying to
      figure things out. You can tell that it was very interesting that it kept me awake
      for so long. And I think to invest some of my private time now into
      discovering things on my own could make a difference in long run. And
      especially when it actually makes <code>fun</code> :)
      <br />
      <br />
      And here is my <code>home office</code> setup:
      <br />
      <img src="https://i.imgur.com/LE1F5XE.jpg" alt="Photo by Addania" />

      <br />
      <strong>Dev day 10: 16.03.2020</strong>
      <br />
      <blockquote>...</blockquote>
      <br />
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
