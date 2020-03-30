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
      Ok, decision has been made, emergency shopping (just to be on the safe
      side and prepared for any eventuality [of an apocalypse]):
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
      figure things out. You can tell that it was very interesting that it kept
      me awake for so long. And I think to invest some of my private time now
      into discovering things on my own could make a difference in long run. And
      especially when it actually makes <code>fun</code> :)
      <br />
      <br />
      And here is my <code>home office</code> setup:
      <br />
      <img src="https://i.imgur.com/LE1F5XE.jpg" alt="Photo by Addania" />
      <br />
      <strong>Dev day 10: 16.03.2020</strong>
      <br />
      Feels weird when you know that entire crew is working from home office
      today (and who knows how long) due to the emergency situation with the
      Corona virus. Everyone is worried and starts to take the quarantine
      seriously. You find it difficult to actually think about work as at the
      back of your head the whole situation (which feel absurd) plays on repeat.
      And you feel so remote, so alone, so detached from everything and
      everyone. And then suddenly you receive a slack message from a colleague:
      <blockquote>
        "Good morning! Just don't want to lose the habits of the normal life"{" "}
      </blockquote>
      <br />
      <br />
      Yes, one must love their colleagues :)
      <br />
      <br />
      Apart from everything, today I was really motivated to make some{" "}
      <code>serious</code> progress on my <code>very first </code>
      issue. Especially because I had been planning to work on it during the
      weekend, which... somehow... not sure how... actually did <code>
        not
      </code>{" "}
      happen :) So I decided to make up for it today! And.. I failed..
      miserably.
      <br />
      <br />I kinda knew there will be times which will be tough and when I will
      feel stuck. But.. did they have to come, like.. <code>already</code>? Do
      they need to come like.. <code>every 10 minutes</code>? :)
      <br />
      <br />
      Luckily my mentor is a very patient man. But even him after 50 minutes
      call trying to actually explain to me what is expected from me in the
      issue, even he pointed out that he hopes that now I understand since he
      already spent 50 minutes on me :) Yes, well... hmm... felt humbling, but
      come on, I need to understand what I should do before I can even start,
      right? RIGHT?
      <br />
      <br />
      The evening was very pleasant! Spent it playing Age of Empires II online
      with a friend! And of course we won! :) It could not have been any other
      way, we are pros! And at least for a brief moment it did not feel so
      lonely in this apartment. It alomst felt.... normal again.
      <br />
      <br />
      Afterwards I decided to still browse some code, explore things on my own,
      so that I do not feel so dumb all the time. And yes, there was a second
      reason which I did not want to admit to myself that actually was any
      reason... I was kind of nervous about the whole situation and that I was
      adviced by a friend to think about making some small stock of food for
      myself...you know.. just in case. I <code>DO NOT</code> want to admit that
      I might need stuff for <code>just in case</code>. Because then it really
      starts to be scary... But at the same time it is rational! But I better do
      it tomorrow morning right when they open up (which is 6am...gosh). And
      yes, being nervous is a <code>no-go</code> to sleep for me. So I was awake
      till 1 am pretending to be working, while just in reality trying to make
      myself exhausted so that I would fall asleep.
      <br />
      <br />
      Which I did!
      <br />
      <img src="https://i.imgur.com/LE1F5XE.jpg" alt="Photo by Addania" />
      <br />
      <strong>Dev day 11: 17.03.2020</strong>
      <br />
      <blockquote>
        This was a weird day. Since unforgiving alarm clock woke me up at 5:50
        and I actually maybe had fallen asleep after 1 am, the rest of the day
        and the world around me felt like in a haze.{" "}
      </blockquote>
      <br />
      <br />
      The reason for the early-(dammit)-bird was to go to shop when they open to
      be able to buy groceries and make some small personal storage.. just in
      case.. Just thinking about it was freaking me out and actually doing it
      was really strange.. Especially, it was my first time when I decided that
      I should actually use at least a scarf around my face (because obviously I
      did not have any face mask, because where would I even get one??) and that
      turned out to be actually a good decision... Everyone in the streets were
      using them (am I still living in Slovakia?).. and there were even warnings
      on the shop doors and windows that it is prohibited to enter the store
      without a face mask. Wow, world <code>is</code> going crazy. This stuff is
      real! I guess I am not misplaced doing huge shopping for "bad" times. And
      I guess I should really start to look around to get myself a normal mask..
      But how when even on the pharmacy door they had thousand posters: "We do
      NOT have masks"... But I went there nevertheless... at least to ask when
      they might have some for ordinary mortals... And when the woman saw me in
      that huge scarf clumsily wrapped around my mouth and nose.. she actually
      said nothing, just went to the backroom and brought one mask for me. She
      said there was one last mask left, so that I don't suffocate behind that
      scarf... Wow, I was so stunned that I actually got the mask when all my
      hopes were gone... Certainly treasure loot of the day <code>is</code> the
      mask. Funny how our rank of precious items changes under different
      circumstances. A luxury good - a rare epic turns out nowadays to be a
      simple small piece of white cloth and 2 strings...
      <br />
      <br />
      Later on I could not really identify my emotional state. <br />
      <br />
      <code>Nervous </code>
      from the emergency shopping.
      <br />
      <br />
      <code>In awe</code> from the luck I had with the mask.
      <br />
      <br />
      <code>Rage</code> that the pharmacy shop actually <code>lied</code> about
      not having masks, even though apparently that <code>did</code> have some!
      And also the way they are now in the position to decide who gets one and
      who doesn't. Maybe I should not analyze, becasue I got one.. but still..
      if the pharmacist did not feel generous, I could have gone home with empty
      hands. And that bothers me...
      <br />
      <br />
      The rest of the day was very busy with working on my issue. The
      nervousness and haziness did not leave me though. Highlight certainly was
      a virtual lunch with my colleague. It was nice to see a familiar face from
      a fairy tale long time ago...
      <br />
      <br />
      Around afternoon I started to be very <code>very</code> tired. As my
      mentor pointed out.. I should not have been coding till midnight and I
      should have rather rested in the evenings. That was actually true because
      I was starting to feel a headache somewhere attthe back of my
      consciousness, which did not prophet anything good. If this turns into
      migrene, life will be very painful...
      <br />
      <br />
      In the evening I tried to distract myself with a nice conversation with a
      friend. We agreed on a tea-and-cake hangout on Whatsapp. It was actually
      very nice (even without and actual cake), but unfortunatelly my headache
      was intensifying and soon I found myself struggling. So I had to stop the
      ever-interesting call and head to bed... I am screwed...
      <br />
      <br />
      Moral of the story [for my future self]: Adda, gotdammit, seriously, do
      not be so over-ambitious and do <code>not</code> work till 1 am unless you
      really have to. It is not worth a migrene..
      <br />
      <img src="https://i.imgur.com/LE1F5XE.jpg" alt="Photo by Addania" />
      <br />
      <strong>Dev day 12: 18.03.2020</strong>
      <br />
      <blockquote>
        When you wake up and the first thing your consciousness reckognizes is
        that your head is exploding like fireworks, even after a full night
        sleep, you know that this is going to be one very very VERY
        looooooooooong and an utterly miserable day for you...
      </blockquote>
      <br />
      And the only thing you actually wish for right away is the day to be over.
      But guess what... you <code>need</code> to work and you have wonderful 8
      hours ahead of you where you are expected to deliver and perform! Yay! :)
      What is more, being a developer means that those 8 hours will be well
      spent staring at the computer screen (which for a migrene is the worst
      thing imaginable) and trying to make your <code>brain</code> work. Which
      already refuses even to think about having the eyes opened. Will be fun
      times today.
      <br />
      <br />
      Usually nothing helps me for the migrane, apart from suffering for 2-3
      days and sleeping a lot. Nevertheless, I still gave it a try with 2
      anti-migrene pills, the strongest ones I currently had in possession.
      Those ones in particular were the best ones I could obtain in London
      pharmacy months back when I was in similar migrene emergecy.
      <br />
      <br />
      Today was the time to test them again. And guess what? A miracle happened!
      The migrene stopped in around 2 hours and I was actually able to enjoy the
      day and code until 20:40 pm :) And actually, I must say this day was
      awesome! Because I was so happy with my performance. I did a lot of
      progress on my issue, then also on change requests other team mates made.
      Plus I even did a code review of an article a colleague wrote. I am
      usually shy to do code reviews, cause... let's be honest how much relevant
      input a Junior like me can contribute especially to code of people who are
      10+ years experienced? Well, as this was an article about a setup I did
      myself last week, I had some tips, omg, I actually had something to{" "}
      <code>say</code> :) Feels like a queen..ehm, forget queen..{" "}
      <code>goddess</code>!
      <br />
      <br />
      So yes, today I was satisfied with my work and plenty of things which I
      accomplished especially on my (first <code>real</code>) issue. It is
      really a rewarding feeling when you are heading towards the finishing line
      and you see the possibility (far away in the distance still hazy, but
      yet...) of a <code>merge</code> :) Yes, ok, after the QA testing ofc. But
      I already see myself on the winner platform, hugging the imaginary{" "}
      <code>trophy</code> :)
      <br />
      <br />
      Speaking of trophies, time to reward myself aaand ZOCKEN ZOCKEN ZOCKEN :))
      Hell yes, 2 days ago there was an Ubisoft sale on Steam and I finally
      bought Heroes of Might and Magic 5. I had been hunting for this sales for
      months now :) Yes, yes, why to pay 10€, when you can only pay 2,5€? I
      totally made a saving on this one :)
      <br />
      <br />
      So bye bye guys, you won't see me in the next couple of hourZ... ok, ok,
      actually (due to quarantine) in the next couple of months but at least
      there is Internet and there are games :) Time to kill loneliness by being
      <code>totally</code> (un)productive ;)
      <br />
      <strong>Dev day 13: 19.03.2020</strong>
      <br />
      <blockquote>
        There <code>is</code> hope! I see the light at the end of the tunnel
      </blockquote>
      <br />I worked relentlessly on all the change request <code>torture</code>{" "}
      from my mentor and my colleagues. I integrated everything they wanted. And
      now, the big time has come to move my issue to QA testing! I am soooo
      close to having it merge to the main branch.
      <br />
      <br />
      And then it happened... an unforgettable conversation between me and my
      mentor, so deep and full of love, support, understandting, where he
      expressed his undying trust in me and in my work...
      <br />
      <br />
      Mentor: "I will now test your PR 😄 Be prepared 😄"
      <br />
      Addania: "I DARE YOU 😄"
      <br />
      Addnia: "but you only are allowed to test it the way I described in the{" "}
      <code>How to test</code> section 😉"
      <br />
      Addania: "which will purposedly skip all the necessary steps"
      <br />
      Mentor: "the <code>how to test</code> is only a guildeline, i will test
      every file you touched, directly or indirectly 😛"
      <br />
      Addania: "now I am panicking"
      <br />
      Addania: "who cares about Corona, real danger is QA testing!"
      <br />
      Mentor:
      <br />
      <img src="https://i.imgur.com/E9NHDjW.gif" alt="Photo from giphy.com" />
      <br />
      Addania: "by the way, the word from thy Emperor:""
      <blockquote>
        Addania: "one question, how extensive should QA testing reports be?"
        <br />
        Emperor: "not too detailed, as we are doing extensive tests later on.
        the <code>how to test</code> section is usually a good guideline. for
        such an issue, 5 minutes max"
      </blockquote>
      <br />
      Addania: "there you GO Master! You will have 5 minutes for it, have fun
      😄"
      <br />
      Mentor: "i won't need more anyway 😄"
      <br />
      Addania:
      <br />
      <img src="https://i.imgur.com/RRCauMf.jpg" alt="Photo from imgflip.com" />
      <br />
      One minute later... (when I already thought I got away with it...)
      <br />
      <br />
      Mentor: "aaand I found something"
      <br />
      Addania: "I'm crying already"
      <br />
      <br />
      So yeah, that was my day in a nutshell :)
      <br />
      <br />
      What was interesting as well, was the evening. My sports group decided
      that <code>nothing shall stop us</code> (not even a wold-wide pandemic,
      governmental order for total quarantine, social distancing, closure of
      borders.. and other fun stuff) and they organized a virtual training,
      haha. Was really great and it felt almost... normal :) Great when the
      technology is really enabling people in such difficult times (of [virus]
      oppression).
      <br />
      <br />
      And later on... was simply... and to the deepest sense of it...
      B.E.A.U.T.I.F.U.L :) Had a wonderful conversation with a friend. Nothing
      feels better than spending some quality time with quality people
      discussing intriguing things.
      <br />
      <br />
      <img src="  https://i.imgur.com/rbEzohu.jpg" alt="Photo from swapwire.com" />
      <br />
      <strong>Dev day 14: 20.03.2020</strong>
      <br />
      <br />
      Drumroll... Drumroll... Drumroll...
      <br />
      <br />
      Buidling up some tension...
      <br />
      <br />
      Still... :)
      <br />
      <br />I can hear crowds cheering (from safe government-approved quarantine
      distance)...
      <blockquote>
        My very first <code>real</code> PR got merged! Time to celebrate! Time
        for fireworks! Time for wild <code>(LAN)</code> parties! I did it! I
        hacked the dev universe! Now my signature is in <code>there</code>. My
        spirit will remain in <code>code</code>.
      </blockquote>
      <br />
      <br />
      Parties and celebrations lasted for maybe half an hour until I began to
      work on a new issue. Which started great, because it seemed as a very
      similar task to the previous one and I was already starting to feel a bit
      more comfy and tiny fraction more confident, that I actually start to
      understand at least a bit of it.
      <br />
      <br />
      And then I realized what the issue actually <code>is</code> about and how
      extensive my code re-design is supposed to be. I took a break to cry, eat
      (whatever) (...ok all of the) sweets I had at home (which by the way was
      an entire stock of rations for a month time of apocalypse...), then I
      cried a bit again and afterwards on the recommendation of my mentor I took
      the first and the second look at it... and even a <code>bonus</code> third
      one... It still looked the same... so I wrapped the working day up and
      hoped that something magical will happen over the weekend, that on Monday
      I will wake up and everything will be crystal clear and I simply do it...
      Let's see...
      <br />
      <br />
      As a rebellion to that I decided to make progress on meaningful stuff in
      my life... and played Heroes of Might and Magic 5 until 2 am :) And then I
      remembered that some time ago someone mentioned to me that humans should
      actually engage themselves in something called sleep. Fair enough, I
      should give it a try (from time to time). But before I went I randomly
      opened an old chat with my skiing group only to find (completely random)
      meme:
      <br />
      <br />
      <img
        src="https://i.imgur.com/wZABOiR.png"
        alt="Photo by Phabulu1 from Imgur"
        border="5px"
      />
      <br />
      Those coincidences sometimes are <code>epic</code>. If only they knew :)
      <br />
      <strong>Dev day 15: 23.03.2020</strong>
      <br />
      <br />
      <blockquote>
        Nope! Did not happen... No magical enlightment, no Nirvana. I did not
        reach higher consciousness over the weekend.
      </blockquote>
      <br />
      <br />I feel as dumb as I did on Friday (maybe even dumber, as I do not
      even remember what I was doing in the code on Friday). Jupiii, will be
      hell of a day. Literally ;) Maybe my soul will burn, and <code>
        then
      </code>{" "}
      I get enlightened! It would prove that I actually have soul.. now that
      would be <code>interesting</code>... :)
      <br />
      <br />
      Anyhow I had to reach out to wisdoms of my mentor to guide me to the point
      from where I could at least start. The starting point was.... to delete
      around 10 complex files and do everything from scratch.. I shed a tear and
      then made some very nice progress with the design itself. Who care that
      all the functionality is missing :) The looks is important, no?
      Nevertheless, it was fun coding today. Would be a perfect day, if only I
      did not have to do some annoying <code>manual</code> work for my ex-boss
      from my previous team. Who does not like filling out a 1000th spreadsheet
      manually, even though we have the same information spread across 5
      different softwares...? Well in year 2020 manual work FTW... (or not)...
      <br />
      <br />
      I decided that rather then raging over it, I wrap it up for today and then
      I had a great after-work training with my sports group. Love to get
      sweaty!
      <br />
      <br />
      And now time fooooor... wait for it.... gaming :) Another online
      multiplayer appointment is awaiting for me, therefore I better get to it.
      I do not want to get my sweet civilization in year 2070 wait for their
      ruler :)
      <br />
      <strong>Dev day 16: 24.03.2020</strong>
      <br />
      <br />
      <blockquote>
        When initial shock from pandemics subsides, you begin to live your
        ordinary life. Under new circumstanes of course, with new routine, with
        some adjustments and workarounds. But it soon becomes the new usual.
        Which is good. Which means you stopped panicking and start adapting.
        Because all emotions even panic has an expiry date when your body runs
        into emotional exhaustion and that is the breakpoint when you embrace
        your new situation and start acting to the best of your given
        circumstance.
      </blockquote>
      <br />
      <br />
      So yes, days start to pass in a very similar rythm. I certainly do not
      miss travelling 3 hours a day for job. I can sleep longer and still start
      my working day earlier than before. Which feels much more productive.
      Which is certainly great. Also the isolation does not YET feel that
      horrible. Because with modern technology I do feel connected to people
      whom I want to be in contact with. This will probably change very soon,
      because 1,5 week alone is still nothing compared to maybe months... or who
      knows how long this situation is going to take. Prognosis do not look good
      at all.
      <br />
      <br />
      Back to coding. Speaking of general productivity, yes, I certainly work
      more and more efficient. Today my boss re-prioritized my tasks and I had
      to start a new issue, which I was able to also finish today. But the rest
      of the day was very scattered as I still needed to finish some manual work
      for my ex department and some clients decided that TODAY is the perfect
      day to snow me under with emails. So deving was not as good as I wanted it
      to be. But as I am still in dual position, torn apart between two
      departnemnts, I need to grinch my teeth and simply do it. Soon, very soon,
      I can hand over all my clients and focus 101% on programming, yay!!
      <br />
      <br />
      And today I also started to learn about redux, so that I can make progress
      on my issue. Wow, found a great tutorial from the author of redux, great
      stuff... not that great English accent :) I really cannot make myself not
      mentioning it, hahahaha, as I found it so difficult to understand him from
      time to time, but overall the tutorial is absolutely awesome, very
      educative, very insightful! :) So google it, go for it! In case you are
      interested.
      <br />
      <br />
      And evening was really great! Had an upper body training with my friend.
      My legs are still crying from the leg training with him on Sunday. Was
      time to destroy my arms as well. So that the Addania is finished off
      completely :) Now that I am thinking about it, I wonder now what his
      intentions are.. and I even allow him to destroy me.. dammit :)
      <br />
      <strong>Dev day 17: 25.03.2020 - Wednesday</strong>
      <br />
      <br />
      <blockquote>Holy Mother of All Code!!</blockquote>
      <br />
      <br />
      I made it work! The modal - the curse of my life! I made it work! How? No
      clue (ok, maybe a slight clue, or couple of clueS from my mentor)!
      <br />
      <br />
      Just.. don't ask me to do this again.. like <code>never</code> again! Who
      needs modals.. anyway? Everyone hates modals.. anyway. Or at least me
      since 2 days :) And a small victory will not distract me from the path of
      hatred laid out so clearly in front of me :)
      <br />
      <br />
      Anyhow, I implemented one, exactly <code>one</code> tiny lil innocent hack
      to the code. Tiny lil spy, my personal Addania touch, my signature code..
      <br />
      <br />
      They discovered..
      <br />
      <br />
      They didn't approve..
      <br />
      <br />
      They removed it..
      <br />
      <br />
      Horrendous crime!
      <br />
      <br />
      What was it? Glad you <code>asked</code> :) I implemented this:{" "}
      <code>+</code> Yes, you see it right: a plus!
     
      <br />
      <br />
      Why? Glad you <code>asked</code> again :) I needed to convert an index
      which was a string to a number. And I did it in suuuuuch an incredibly
      clever way.. (self-pat on the shoulder): <code>+index</code>
      <br />
      <br />
      It was sooo clever that even my mentor did not know it and he was asking
      me: "What is that plus sign doing there?" My pride shone from the Earth to
      the end of the Universe and then back again.. and then 1 second later he asked me to remove
      it.. Pffff! He asked me to use Number(index).. How lame, how mainstream!
      So there goes my signature. But I will not give up, I will smuggle it
      there one day, when nobody is watching 😈 muhahahaha
      <br />
      <br />
      <strong>Dev day 18: 26.03.2020 - Thursday</strong>
      <br />
      <br />
      <blockquote>
        Now we are talking! A colleague announced a company-wide push-up
        challenge!
      </blockquote>
      <br />
      <br />
      Ow, yes baby. Let's do this! Rules? Post one video a day of yourself doing
      push-ups, each push-up equals one point. At the end we see score-board of
      who is winning.
      <br />
      <br />
      Nice, challenge accepted! And of course as everyone was doing either
      normal push-ups or ladies push-ups, I decided to be a black sheep and I
      did narrow ones :) I did 21, just to beat the guy who announced the
      competition 😈 Was fun!
      <br />
      <br />
      Apart from that, today evening was supposed to be an official deployment
      of the new UI and my PR was still not ready! I mean it would have been
      finished from my side, only if it wasn't for my lovely colleageus, who
      requested 1 billion of changes.. even at 9 pm at night.. Well, as I was so
      dedicated to really make it on time today, I worked till 11 or 12 pm to
      make it happen..
      <br />
      <br />
      It did not happen.. as I still needed some feedback from colleagues, final
      approval and QA testing. There goes my beaituful PR being part of the
      first major deployment.. at least since I'm in dev team - which means since 2,5 weeks
      :)
      <br />
      <br />
      Ok, so I decided that the <code>next</code> deployment will be the <code>major</code> and the <code>most important </code> deployment. And I will make it to <code>that</code> one :)
     
      <br />
      <br />
      <img src="https://i.imgur.com/aNIKTsL.jpg" alt="Photo by Karl Solano from Pexels" />

      <br />
      <strong>Dev day 19: 27.03.2020 - Friday</strong>
      <br />
      <br />
      The day started with a colleague posting his 29 push-ups today. Which was
      already +3 to his company best from yesterday. Challenge accepted Daniel!
      <br />
      <br />
      Thinking it through I decided to go for regular push-ups in order to be
      able to compete with the others (the narrow ones are too tiresome). So in
      order to beat Daniel I needed 34 of em. Hmm, fine, FINE! Let's see what I
      have got!
      <br />
      <br />
      Ok, was not as difficult as I thought! Now, bring it on guys!! 40 push-ups
      here! 😎 +21 from yesterday which means 61 points altogether... :) Who is
      winning now?
      <br />
      <br />
      <blockquote>
      I mean provided my friend and occassional trainer does not join the competition, haha. Then we are all screwed!
      </blockquote>
      <br />
      <br />
      Back to coding - the very last step to finish my PR were final checks.
      <blockquote>
        So I prayed for the successful and merciful PR checks.
      </blockquote>
      <br />
      <br />
      They failed again... and again.. and couple of times more. Dammit! Those
      storyshots.. Why do we even have storyshots? Why not to delete them
      completely? I mean, it makes complete sense. No storyshots, no failed PR
      checks. It's a win-win situation :)
      <br />
      <br />
      Phew, finally I somehow patched it together and got rid of this PR... I
      mean... said a loving farewell to this <s>cursed</s> lovely PR..
      <br />
      <br />
      Time for the new issue! Yay! And this time on a different product.
      Perfect! So let's make it start. I made sure and double-checked 2 weeks ago, that everything
      is set and done on my computer for this product, I tamed the Docker, I
      resolved all its issues, and now it shall bow to me and obey my orders unless...
      <br />
      <br />
      Unless you try to start the Docker again.. Or even better, it DID start..
      but then I could not login to the platform! I mean really? I set my
      credentials myself, they were in the .env file. Just how difficult is it
      to copy paste creds from one file to the app? Incredible, it did NOT work.
      How can it not work? Seriously Docker? Time to screw me up again?
      <br />
      <br />
      So happy times.. spent 3/4 of the day solving Docker issues again.. This
      Docker - such a drama queen. I start to really think it is a female :)
      Just look at the evidence:
      <li>has its moods</li>
      <li>is unpredictable</li>
      <li> never does what you want it to do</li>
      <li>
        and I secretly even think it is vengeful (I mistyped it with "i" couple
        of times)
      </li>
      <br />
      <br />
      So what I needed to do is to stop all the Docker, remove all containers,
      wipe all the volumes, boot it clean all up again.. and of course pray to
      the Almight Docker God.. Now I see that being a programmer will apparently
      convert me to a believer! I already prayed more today than in my entire
      life :)
      <br />
      <br />
      <img src="https://i.imgur.com/xtsndFy.jpg?1" alt="Photo by Sam Kolder from Pexels" />
      <br />
      <strong>Dev day 20: 30.03.2020 - Monday</strong>
      <br />
      <blockquote>
      They brought it on, hahaha :)
      </blockquote>
      <br />
      Interesting how everyone was posting 20
      something push-ups before. But after I posted my 40, people started suddenly posting 50,
      60 or <code>even</code> 70 push-ups.. Pff, those lazy bastards needed some real <code>push</code>, hahaha :)
      <br />
      <br />
      Codewise, today was an <code>epic</code> day! I did not only finish my new PR, I actually finished whole 3 of them. Yes, you hear it, THREE! :) Plus I created I think 6 issues and even reviewed one of my colleague. I was totally on fire today! Careful, else you get burt :)
      <br />
      <br />
      And continuing the fire theme of the day, my friend, his brother and I set some villages on fire :) 

      <br />
      <br />
      In Age of Empires II :) Was a really great day, satisfying, funny, oh and the bonus was a great progress on my handstand!
      <br />
      
      <img src="https://i.imgur.com/5CxYLaE.jpg" alt="Photo by Skitterphoto from Pexels" />
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
