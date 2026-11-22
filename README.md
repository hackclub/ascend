# Ascend 🚀
![image](https://github.com/user-attachments/assets/3f029d33-77c7-4a53-b3e6-940f91e5e124)

[Ascend](https://ascend.hackclub.com/) was Hack Club’s 15th [Athena](https://athena.hackclub.com/) Event (formerly known as Days of Service), an initiative started to bridge the gender gap in technology. It was also our first-ever summit for girls in tech, our first major collaboration with [Girls Who Code](https://girlswhocode.com/) and [Kode with Klossy](https://www.kodewithklossy.com/), and the biggest hackathon for high school girls in the USA in 2024! 

From November 15th-17th, 50 girls from 6 different countries gathered in Los Angeles, California for an out-of-this-world experience. Teams built amazing technical projects, made lasting friendships and memories, and got to learn from engineers and developers at SpaceX! 🔭💜

***This repo is meant to serve as a point of reference for anyone wanting to host their own Athena Event, as well as a way to celebrate the happy memories that were made at Ascend. If you have any questions or would like to know more, reach out to [@elia](https://hackclub.slack.com/team/U06HPP9GZ3R) on Slack. You can also view the [#ascend](https://hackclub.slack.com/archives/C07T6DEFD7U) channel, where we did a live countdown and shared exciting moments throughout the weekend :)***

![image](https://github.com/user-attachments/assets/4ab4298a-f51f-4eeb-bddc-63087c131a5b)

## Website development

Requires Node.js 22+ and Bun 1.4.5.

```sh
bun install --frozen-lockfile
bun run dev
```

Run `bun run lint`, `bun run typecheck`, and `bun run build` before deploying.
Deploy with `vc --prod --scope hackclub`. Vercel uses the committed Bun lockfile.

Keep secrets in ignored `.env.local` files or Vercel environment variables.
Never prefix an Airtable token with `NEXT_PUBLIC_` or use it in client components,
public assets, or browser requests. This site currently has no Airtable integration;
registration links to the externally hosted Hack Club form. Any future Airtable
integration must use a server-only module or route and return only safe fields.

## Our Goals 🎯

Similar to previous Athena Events such as Blossom, Evergreen, Celestial, and Luna, we had two goals as the basis of our planning. Specifically for this summit, however, we approached it with a third goal that came from how large-scale we wanted this event to be:

1. To support Hack Clubbers to become more technical, become better leaders, and deepen friendships through fun, collaborative coding projects.
2. To grow Hack Club’s community so that it’s inclusive and accessible to teenagers of all backgrounds. This includes active outreach to under-represented, marginalized gender and racial minorities, who lack access to computer science programs and/or professional mentors in their community.
3. To create lasting engagement for gender minorities in the Hack Club community and provide a positive space for them to further their involvement in computer science. One of the major objectives of Ascend was to keep our attendees interested and involved in both technical and creative programs even after the event concluded. 

## Our Pilot Crew 👩🏽‍🚀

| Username    | Role |
| -------- | ------- |
| [@elia](https://github.com/eliasangelss) (Commander) | Event Lead |
| [@andrea](https://github.com/andrearyang) (Lunar Module Pilot) | Breakfast Lead |
| [@phaedra](https://github.com/ph4iry) (Strategic Operator) | Web Developer, Activities |
| [@savina](https://github.com/savinajabbo) (Flight Engineer) | Photographer, Logistics |
| [@jeslyn](https://github.com/se1yu) (Orbital Operator) | Merch, Activities |
| [@zsh](https://github.com/zoya-hussain) (Spacewalker) | Merch, Logistics |
| [@sahiti](https://github.com/sahitid) (Aerospace Engineer) | Activities |
| [@michelle](https://github.com/michelle12349502039) (Shuttle Scientist) | Logistics |


## Our Budget 💵

Ascend started out with $20,000 and increased our funding as necessary to meet the needs of our attendees. By the end, we spent a total of $53,561. Here is an approximate breakdown:

| Item    | Amount ($) |
| -------- | ------- |
| ✈️ Travel  | $30,041  |
| 🖼️ Venue  | $9,200  |
| 🍕 Food | $3,682 |
| 📦 Merch/Supplies | $2,893  |
| 📑 Other | $3,283 |

***Interested in seeing each of our transactions? Our finances are open-sourced through HCB’s transparency mode! You can find our account at this link: https://hcb.hackclub.com/ascend***

## Our Schedule 🗒️

Our team arrived on Thursday night to set up the venue, unpack the swag, and share our hopes for the summit. After the attendees arrived on Friday, we had a jam-packed weekend of project building, exploring the city, and getting ready for Sunday morning's project showcase. Take a look at the exciting Ascend itinerary below! 🪐😍

| Day    | Activities |
| -------- | ------- |
| 💫 Friday | SpaceX panel, attendee arrivals, the opening ceremony, team building, and a mission card scavenger hunt ✨|
| 👩🏽‍💻 Saturday | SpaceX guest speaker and group tours, reinforcement learning workshop, exploring LA, and a midnight surprise! |
| 🍳 Sunday | Breakfast with mentors in tech, the closing ceremony, a project showcase, and attendee departures 💖 |

## Space Storytelling 👾

We ended up going with a space theme to encourage the girls to think more broadly about what was possible. Instead of limiting themselves to what they thought they could achieve, we wanted Ascend to be a place where they could push themselves and reach what they truly wanted to achieve. 

Through a scavenger hunt around our venue, each team got a mission card with an open-ended space prompt; everything from “Build a game that simulates flying and catching a starship booster” to “Build a project to inspire curiosity about the unknown!” 

Some were written by our pilot crew, and others were given to us by the SpaceX engineers that we spent the day with on Saturday. We designed our merch, purchased decorations, and developed a run of show that was based on the idea of “Athena Flight 15;" Truly, the sky was the limit! 🌌 💙

![image](https://github.com/user-attachments/assets/d7c02192-9c8c-43c4-91bd-a37ea3aff359)

## The Hackathon 💻

20 teams of 1-3 girls worked together from Friday night to Sunday morning to complete a technical project based on randomly chosen mission cards (with unique space-themed prompts as mentioned before). Each team had a pilot mentor to aid them with brainstorming and troubleshooting, and got the opportunity to spend most of their work time on Saturday at SpaceX’s Hawthorne facility! ☄️

Teams used a variety of different programming languages to create their projects, such as Python, JavaScript, HTML, and CSS, with the majority of attendees having learned a new language before the weekend ended. From video games and chat bots to software tools and circuit boards, one of the best parts of the hackathon was seeing the creativity of each team get to shine.

You can check out the project gallery with each submission at https://ascend.hackclub.com/launchpad! 

## Project Showcase 🌟

To celebrate the end of the summit, we held a huge breakfast with tech mentors like Yen Tan from Kona, Mariena Quintanilla from Mellonhead, full-stack developer Laura Birek, SpaceX engineers like Sarah Ting and Asher Dunn, and the Libermans. After that was a project showcase to recognize each team for their amazing creations! Each group had a small jar at their table while they presented, and both Hack Clubbers and professionals filled the jars to the top with chocolate kisses to show their appreciation.

Our closing ceremony provided attendees with ways to stay involved with Hack Club after the event concluded, such as participating in [High Seas](https://highseas.hackclub.com/) (Hack Club’s winter collaboration with GitHub) or hosting an Athena Event for their own community in 2025. Each team was awarded with either “Most Creative,” “Best Teamwork,” or the “Innovation Award” with a matching space-themed LEGO set! 🛰️🫶🏽

The most memorable part of our final day together was getting to hear from the attendees about how this event changed their lives. We had many girls who had never traveled before, had never been to a hackathon, or had never attended a Hack Club event, and everyone said that this event had a huge positive impact on them. It was so rewarding to hear that Ascend inspired them to continue pursuing their dreams!

![image](https://github.com/user-attachments/assets/61d9fe24-2e92-413e-a05d-9539b182e869)

## Photography 📸

Want to see the pictures that were taken during the event? You can check them out in our [Google photo album](https://photos.app.goo.gl/ELY3LGQ71ickAw4y6), where all of our attendees have added their photos and memories.

You can also check out [posts](https://www.instagram.com/p/DDN1tnpgCvq/?igsh=NmY3eDhzMjZ0eTkw) and [reels](https://www.instagram.com/reel/DDibKKVS_5w/?igsh=azR4OHcxMzE3ZWp6) from our event at [@starthackclub](https://www.instagram.com/starthackclub?igsh=MWZoaGN1NW0wYjJ6Yw==) on Instagram! 
