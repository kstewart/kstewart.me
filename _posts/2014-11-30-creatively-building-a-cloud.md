---
layout: post
title: Creatively Building a Cloud
---

*"I **am** the team.""*

Fifty people looked at me quizzically in a sixth floor conference room in Adobe's West Tower in San Jose. They were gathered for a kickoff meeting to discuss a new project to build mobile applications for creative professionals. These applications would be supported by a mobile backend as a service that my team would be build. There was only one little problem. I had just started the week before and had yet to hire a single person.

# Music, Maestro, Please

A month earlier, I was pretty much ready to leave Adobe. After six long years of the large company lifestyle, I was ready to take some risks and go back to the startup/small company world. While I needed to get the experience of working for a large software company, the exercise had taken its toll. Even after a month-long sabbatical, I didn't feel like I would actually be able to work on the types of products I really wanted to build.

I sat staring at my calendar trying to identify the exact date I would give my two weeks notice when a co-worker, another Kevin, knocked on my door.

*"Hey, man. I know you've been thinking about your next move. You should go talk to Lonnie; he's starting up a new project that I think is right up your alley. I don't know all the details, but just go talk to him."*

After looking up the available job reqs, I found the ones assigned to Lonnie and got enough information to pique my curiosity. First, the project involved mobile applications and services which happened to be my area of interest at the time. Secondly, the open position was for a Sr. Engineering Manager and I had been working my way to that level for the past few years. I emailed Lonnie to see if we could have an exploratory conversation.

The conversation ignited a spark. There were actually two opportunities. One was to take over the Adobe CS Review team that was building advanced comment and review capabilities as part of Adobe Creative Suite 5. There was a small team in place with a mostly built product. My challenge would be to help the team get through launch and then iterate on the product.

The next challenge was the new project, codenamed **Adobe Maestro**. Maestro would be the backend to support two mobile apps initially. The first app was Adobe Ideas, a sketching application for iOS. The second was codenamed Veruca and intended to be an app for presenting creative work. While there were teams to build the mobile apps, we would need to build a team to build Maestro at the same time I would be running the CS Review team. This was **exactly** the sort of challenge I was craving and I pitched myself to Lonnie as The Guy&trade; for the job. After a round of internal interviewing, I was offered the position and asked to book a trip to San Jose for the kickoff meeting. Oh, and I needed to start hiring.

# They Are The Best And They Specialize In The Ridiculous

Much like Hannibal Smith, I would need to break my A-Team out of prison. John was pretty easy as our manager knew that once I left, John wouldn't be far behind. John was my first full-time hire at Adobe and was a solid developer and even better operations guy. Perfect.

Steve would be a little more difficult. He was moved to a team working on video transcoding and I knew that team would put up a fight. After following protocol and making him an offer, Steve accepted. However, his management chain tried to block the move by asking to delay it for six months. Pointing out that our project took priority in terms of schedule and business value only caused the situation to escalate. Given the history that Steve and I had with that particular management chain, I stepped aside and let my new VP handle it. Within a matter of days we managed to get the transition time drastically shortened. While it was still longer than I would have liked, I was able to get a percentage of his time sooner which was better than nothing. Steve would drive the frontend development as well as some of the mid-tier work.

Matt, however, threw a wrench in my plans. He was my heavy hitter and I was hoping to have him lead the backend development. However, he was already working on a complex project and wanted to see it through even though he was interested in *getting the band back together*.

> Sidebar: John, Steve and Matt worked with me on my first project at Adobe. Matt was the primary architect of a new installer compiler called the **Robust Installer Build System, or RIBS**. This project was so infamous that I will have to write a separate post just on it. However, the short version is that prior to RIBS, Adobe had people hand-roll installers every cycle that shared little code and was extremely fragile. RIBS created a declarative model that could be used to define the behavior of an installer that could then be compiled for each platform. Furthermore, the model was extensible enough to support individual products as well as suites. RIBS not only reduced the cost to build installers in terms of time and people, but it has been at the core of Adobe installers since CS 3. In a way, RIBS was our first legacy and Creative Cloud is our latest.

I respected Matt's decision to stay with his current team, but it definitely impacted the plan. In the end, you go to war with the army you've got not the one you wish you had. I still had the beginnings of a really good team and had plans to expand it. In the meantime, we needed to get to work.

In between CS Review duties, I met with John and Steve in my office regularly to hash out architecture issues. Lonnie had given us a constraint we didn't really like; we had to use the acrobat.com platform for Maestro. This was the same platform that CS Review used as well as some other CS Live (the umbrella brand at the time for CS-related sevices) services were built upon. For teams that came from a desktop application background, using acrobat.com as a platform made sense. The frontend of one's service would be built using ActionScript and Flex and talk to endpoints specific to the service within the acrobat.com container. Unfortunately, this led to a monolithic implementation that would force us to use Flash which none of us wanted to do. We were iOS and HTML people. Additionally, we really wanted to build this on top of Amazon Web Sevices (AWS). We had previously implemented and hosted a service at Adobe using their internal managed hosting and we felt AWS was a much better option. The acrobat.com constraint, however, made AWS a non-starter.

Knowing that the mobile apps were targeting iOS, we made a case for not going all-in on acrobat.com as we wanted the site to be accessible on Mobile Safari. Our solution was to plan on building an API **and** a Web application. We would design our own API that talked to acrobat.com for storage, but implement our own functionality in our own stack. The frontend would be a Single Page Application (SPA) that would consume the API. We hashed out the rough API on my whiteboard over the course of a week. Steve started work on the frontend and John worked on provisioning our servers and writing our deployment tools. We set a goal to have a prototype built in a few weeks. Luckily, we had a lot of code [from our previous project](http://kstewart.me/2011/02/17/there-is-an-i-in-team.html) that saved us a ton of time getting up and running. We chose to skip the API initially and focus on being able to deploy the frontend and demonstrate the basic workflow of uploading assets and navigating to the detail view. By mid-January 2011, the prototype was up and running and the overall Maestro team was ecstatic. If they only knew...

# Enter The Presidio

*"Read this memo and book a trip to San Francisco."*

The memo was titled **Adobe Touch Apps and the Creative Cloud**. Huh? Lonnie called me into his office and told me about a summit he attended. Essentially, the company wanted to make a bigger push into mobile apps and services. There was a whole new strategy being devised.

Uh oh.

First, there was a strong belief that we could have more ability to innovate on an open platform like Android and use our AIR platform. While many made the (correct) argument that all our potential customers were on iOS and that Android tablets had yet to make any real impact, we were all overruled. This was our [Strategy Tax](http://scripting.com/davenet/2001/04/30/strategyTax.html). The mobile teams had to put their iOS apps on hold and begin the laborious task of rebuilding their applications on a development platform that was not fully ready for mobile (Adobe Ideas, by the way, was already in the App Store and getting pretty good reviews). The list of apps increased from 2 to 6 and new teams would be added to build them. There was talk of working with a hardware vendor that would have the apps pre-installed. The mobile teams were not amused.

Next, we needed to get this "Creative Cloud" thing built in time for the Adobe MAX conference in October. Additionally, we needed to have a demo ready for this meeting at The San Francisco Film Centre at The Presidio by the end of February. Related, we were being **mandated** to use Amazon Web Services. OK, twist my arm. I **love it** when a plan comes together...or, I get lucky. We wasted no time updating our demo. We added in the bones of the API by adding it as an intermediary layer between the frontend and the acrobat.com platform. Once we verified that we had feature parity, Steve and John refactored the code to talk to AWS services like S3. John also updated our deployment tools to target Amazon's EC2 instead of our managed hosting infrastructure. Since we were using [Puppet](http://puppetlabs.com/) as a key component in our pipeline, this was pretty much trivial. In a week, we were up and running.

We arrived at The San Francisco Film Centre to find a rather large group in attendance. Multiple teams that were identified as doing work that could contribute to the new strategy would be presenting their projects. And, of course, there would be the obligatory jockeying for position by each team. Adversaries old and new made small talk while keeping a wary eye on who was doing what.  

Every team that would be part of this effort received Motorola Xoom tablets to get familiar with the Android platform and I planned on using it as part of my demo. I briefly explained what Maestro was and how we got it bootstrapped. I showed off the latest feature, color swatch extraction based on our Adobe Kuler (now [Adobe Color CC](http://www.adobe.com/products/color.html)) service. To wrap up, I pulled out my Xoom tablet and opened up the Web application. I tapped **Upload** and used the camera to take a picture of the attendees. Within a minute, the photo was uploaded and being displayed on the site. *Hey, we were on crappy venue Wi-fi! What do you want from me?*

At that point, a senior VP who was busy checking his email at the back of the room got a sudden case of whiplash. He started sputtering:

*"Wait a minute. We need to make sure that this is coordinated and can't have teams going off building their own Web applications. Lonnie, isn't your team slated to build the Web experience for this?"*

I smiled. Obviously, he thought I was still in Adobe's Core Technology organization and pitching a competing implementation. I looked at Lonnie as he turned around to face the confused SVP.

Lonnie replied, *"He **is** my team."*

# Marching Towards MAX

The successful demo at The Presidio was not without casualties. Adobe CS Review and the rest of the CS Live services were being sacrificed at the altar of the Strategy Tax. Some executives thought it better to cannibalize CS Review in order to have additional resources applied to Creative Cloud. There was just one problem. The CS Review team wasn't really a services team.

Remember how I said that the acrobat.com solution made sense for **desktop application teams**? Well, that's what we had...people who had spent a lot of time building features for desktop apps now being tasked with building hosted applications. While CS Review **was** a hosted application, the bulk of the service was abstracted by acrobat.com. The developers on the team didn't really know anything about HTTP, statelessness, scalability or databases. Furthermore, our entire technology stack was foreign to them: Ruby, Sinatra, Redis, MongoDB. They knew none of this stuff.

Essentially, I had bootstrapped the prototype of the Creative Cloud service and now I would have to further bootstrap the team who would help build the service *while building the service.* My approach was much like drizzling extra-virgin olive oil in a blender when making salad dressing. I slowly pulled developers, two at a time, off of CS Review and paired them up with Steve and John so that they could learn what they needed in order to start contributing code. While this slowed Steve and John down a bit, it was necessary. Luckily, the prototype had essentially provided the scaffolding for the full service. We were able to iterate and refactor a working application as opposed to starting completely from scratch.

We also had other issues. A team in our Hamburg office had positioned themselves as the infrastructure layer that Creative Cloud would be built upon. We did not want this at all. The last thing we needed was another dependency from a remote team. Worse, they did not have a working platform at the time but they **did** have the buy-in from our CTO. Much time was spent playing defense against them while trying to build the service up. Inevitably, we would have to use them but we held out as long as we could.

The summer of 2011 was hectic and intense. By the time we had a mid-summer summit in San Jose, the team was in the zone. I was continually giving demos of the refined site. The mobile apps teams were integrating our API in order to store on-device content. One app, Adobe Proto, integrated with us to generate live HTML previews of their content in our Web application. We had switched over to the shared infrastructure layer from the Hamburg team simply my modifying our underlying API implementation. APIs FTW!

Still, the pressure was on. By September, as we were finalizing features and doing deep testing our hardware partnership fell apart due to a variety of issues. The mobile teams struggled using AIR but managed to get things running. However, the combination of flaky hardware and Android caused endless issues. In the end, the hardware partner would not be able to deliver the tablet on time with the desired quality level. One of the major pillars of the MAX launch crumbled a month before launch. What else could go wrong?

# Live From The Convention Center

*"We're trying to get a signal. Please stop calling!"*

The Day 1 Keynote has just ended and the team was elated. Our CTO, Kevin Lynch, has unveiled Creative Cloud to the world. We were all sitting front and center in the LA Convention Center watching this new direction for Adobe being unveiled. The demos of all the mobile apps were amazing. Our hearts stopped as our Web application was being demoed **live on production**. There was only one minor glitch which few people noticed. Kevin announced the acquisitions of [Typekit](https://typekit.com/) and [PhoneGap](http://phonegap.com/). Unbelievable! I kept checking reactions on Twitter...all positive.

Until, they tried to go to our site.

We made a conscious effort to be secure from day one and had immediately ordered SSL certificates so that all site traffic would be encrypted, even in our staging environment. What we **forgot** is that people would see the address bar during the demo and **not** notice that it was HTTPS as opposed to HTTP. So, of course, people would type http://creative.adobe.com in their browser to view the site they just saw on stage.

We forgot to put in an HTTP to HTTPS redirect.

Shit.

Before the keynote ended, my phone started buzzing. Lonnie was getting calls because press and other folks were trying to get to the site and getting errors. Our SVP was *losing his shit* to put it mildly. John, Steve and I fought the crowd to get back to the conference rooms and try to pick up a decent Wi-fi signal. My phone kept buzzing as John tried to lookup online documentation for the load balancers in order to modify their configuration. Did I mention that we were doing this in a hallway on the floor while thousands of people were walking by us? No pressure.

After what seemed to be an eternity, John finally got the right HAproxy magic worked out and deployed. I wandered around the convention center for a bit before heading back to my hotel to freshen up a bit. We had a night of serious drinking ahead of us. To say that much tequila was consumed would be an understatement. By this time, I was the undisputed King of Patron. We were having dinner at the second stop of the night when our SVP, CEO and the respective teams from Typekit and PhoneGap walked in. Still smarting from the HTTP redirect incident, I ordered a huge Patron margarita and offered it to our SVP.

*"My bad."*

All was forgiven and the partying that night seemed like it would never end.

Two days later, on the last day of Adobe MAX 2011, I was sitting in my hotel room when I saw the news that Steve Jobs had died. My childhood hero and inspiration for me getting into the technology industry had died days after I had achieved the biggest accomplishment of my career.

I cried.

# Redesign. Rebuild. Rebirth.

Present day. It is October 2014 and I am **not** in LA for MAX. Still, there is a sense of excitement amongst the team. A lot has changed in the last 3 years.

In 2012, Adobe decided to step on the gas and change our entire business to move towards a subscription model. Our team helped to add membership features to the site to allow subscribers to download our applications.

2013 was the year of multiple rebuilds. A desktop syncing application that was acquired was bringing our service to its knees as it wasn't designed to work with our API. We rebuilt the service using [Node.js](http://nodejs.org/) to eliminate the bottlenecks in the Ruby stack. This alleviated some of the problems, but the sync application still had the potential for knocking our Web application over. The fundamental problem was the impedance mismatch between their application and our API; it wasn't designed to support their access patterns. A new API, designed for syncing, was required. Another team was spun up to build that sync API while we refocused our API on collaboration features and deprecated its older features. This involved a second rebuild that impacted morale as no new features could be built. We thought that the light at the end of the tunnel was an oncoming train.

After surviving the sync debacle, we all agreed to make 2014 the turnaround year and get back to what we all cared about for the service; making it the hub for collaborating on creative assets. Once again, we targeted [Adobe MAX](http://max.adobe.com/) as the deadline and  planned to rebrand and relaunch the site.

First, the site would get a visual overhaul. The old design was getting long in the tooth and we were all tired of it as it reminded us of how long it had been since we had done anything that was user-facing. So, the designers on the team made some improvements to the navigational model and some of the design language. Nothing too revolutionary as we had a short window to pull this off.

Second, we implemented a plugin model to allow other teams inside Adobe to build interactive features for the content types that they are the domain experts in. We worked with one team extensively on a showcase plugin for MAX: [Creative Cloud Extract](http://www.adobe.com/creativecloud/extract.html). Extract simplifies the comp-to-code workflow used by Web designers and developers and makes it so much easier to share Photoshop files and extract the relevant components from them.

Next, we jumped on a new effort that intersected with our original mission. From the beginning, Creative Cloud was about streamlining round-trip workflows between desktop and mobile applications via a cloud service. The cloud would be the connective tissue that enabled new ways for creative professionals to collaborate and work with their assets in a way that transcends the usual file-and-folder metaphor. The first step towards this goal was realized with [Creative Cloud Libraries](http://www.adobe.com/creativecloud/libraries.html). Libraries provide a simple way to organize creative content, make it accessible from anywhere and share with anyone. Our API would power the collaboration features. And while the primary interaction with Libraries would be inside the desktop and mobile apps, our Web interface would be the universally accessible interface.

So, as 2014 draws to a close Adobe MAX provided us a bit of a rebirth. The plugin architecture opens the door for a ton of new capabilities. Extract has been well-received and there is more to come on that front. Libraries are but the first example of the types of collaborative tools for creatives we plan to build. The site redesign returns us to our originally planned direction of browsing, filtering and searching as the main navigational metaphors as opposed to file-and-folder organizing. We never wanted to be just about files. Files are a commodity. We are focused on creative content which will increasingly be cloud-based and not tied to the restrictions of a file system. Even more importantly, storage is a commodity. The true value of our service will be the collaboration workflows we enable **around** your content. Given all of that, [Creative Cloud Assets](https://assets.adobe.com) is more aligned with our place and purpose in the Creative Cloud ecosystem. Feel free to [check out all that we can do](https://helpx.adobe.com/creative-cloud/how-to/assets-get-started.html).

The past three years was a long, but fulfilling journey. I have no idea what the future holds. Things can always change, for the better or for worse. I am choosing to focus on the positive as so much has happened in the past 3 years. Matt eventually joined the team and is now an Engineering Manager (and John works for **him**). Steve made the management jump a few years back. My inner circle is intact. The team has grown and we have so many talented people working with us. The challenge for me now is to grow **both** the team and the service in 2015 and beyond.

**Bring it.**
