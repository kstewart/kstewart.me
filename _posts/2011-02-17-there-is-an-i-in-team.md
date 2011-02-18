---
layout: post
title: There IS an "I" in Team
---

A little over a week ago the team at [Datagraph](http://datagraph.org) launched [Dydra](http://dydra.com), an RDF cloud service. I immediately congratulated [Arto](http://twitter.com/bendiken) via Twitter. You see, his small team launched exactly what I had been building at Adobe for a couple of years. In fact, that's how I "met" Arto. We had been neck deep in the world of metadata and came across [RDF.rb](http://rdf.rubyforge.org), a **fantastic** Ruby library. One of my engineers, [John](http://twitter.com/seacycle) forked it and submitted a few patches to it as we were going to replace our existing Ruby RDF library with it. Since then, I've followed Datagraph's work and GitHub projects even though they were in stealth mode. I suspected all along that they were building the same thing we were, but who cares? We're not playing a zero-sum game here; there's room for everyone at this party.

While I was (and still am) completely excited and happy for Arto and crew, I was also a little annoyed. My team spent about 2 years building this service. So, did Datagraph. The only difference is *we were a year ahead of them*. Looking through their site, we had pretty much all the same features they had at launch (plus one or two features they **don't** have). We had roughly the same size team as they did and our technology stacks were similar. The only difference? I worked at a large company. They didn't.

This post details the history of my project and the lessons I learned. While this is mostly cathartic for me, I am hoping that others get some benefit from this war story.

# "What Do We Work On Next?"

This was the question that what was left of my team asked me after the train wreck that was our component of Creative Suite 3. THAT story will be the subject of a separate blog post. So here I was with only 2 engineers, John and [Steve](http://twitter.com/stevebalo) and not much to do. We helped fix bugs in Acrobat for a couple of months, but that was just busywork.

I was tired of desktop software (again) and wanted to get back into Web applications and Web services. At the time, we were in Adobe's Core Technology group. However, we were pretty much outcasts. That group prided itself on working on "high science" problems and we were just a bunch of generalists who liked to play with cutting edge technology. The CoreTech team mostly delivered C++ libraries for integration in the point products and Suites.

Given that model, I proposed that CoreTech move into services. We should take our delivery model and apply it to services in addition to libraries. In fact, I suggested that we review our portfolio of components and see what made sense as a service. Since no one on my team was a graphics or text layout expert, we settled on metadata. We all understood what metadata was and how it could be applied. In the context of a Web service, we decided to build a multi-tenant metadata repository on top of Adobe's [Extensible Metadata Platform (XMP)](http://www.adobe.com/products/xmp) libraries. As we were building atop XMP, we initially codenamed our service **xmplary**.

# "I Don't Want To Wear A Beeper"

That's what our VP said. He had worked at Real Networks and didn't want to deal with servers and on-call rotations. Never mind the fact that the company was moving in this direction and that our organization was having a harder and harder time securing funding. My proposal was that we become an internal version of [Amazon Web Services](http://aws.amazon.com), but providing Web services that leveraged Adobe's intellectual property for use by Adobe teams and third-party developers.

We basically got the go-ahead to prototype or *play-to-learn*. Primarily, it was a decision made to shut us up, keep us busy and out of the way. That was fine by us. We moved up to the third floor of the Seattle office behind a conference room. Out of sight, out of mind. 

We started simple at first. Steve created a Ruby wrapper around the XMP library. John set up our infrastructure and wrote the low-level persistence code. I designed and wrote the initial API. We learned Ruby, RSpec, Git and a host of other technologies. It was great.

# "You Need To Get A Customer"

My manager told me that he had met with our VP who seemed to be going on the warpath and looking to kill all unfunded projects (the very ones he approved). Luckily, I had kept my ear to the ground and knew there was a project that needed the very service we were building. My plan was to approach them once we were further along. However, my survival instincts were kicking in and I guessed (correctly) that if I didn't align with them **now** there would be no *later*.

I pitched the service to this team and the idea that we work together. The director running the project loved the idea. Unfortunately, we were brought on as virtual team members and were "forced" to give up our identity. Goodbye, xmplary.

For the next few months, we continued to work on the service. We realized the limitations with using XMP as our canonical format and made the transition to Resource Description Format (RDF). XMP was based, erroneously, on the RDF/XML serialization format instead of the RDF data model. John worked to implement round-trip support for XMP to RDF. I revised the API accordingly and Steve started to build a Web application that would be the frontend for the service.

# Our Data Is Very Meta

As we made the transition to RDF, we realized the value of our service was purely as infrastructure. We could only guess what kinds of applications could be built with it. Our primary focus was metadata search, particularly for rich media. Adobe's tools are used for the majority of content creation and generate a ton of metadata. Most of that data gets discarded in the rendering process for final assets. Search engines like Google couldn't index those assets without help.

Our goal was to encourage content creators to preserve and enhance that metadata for use downstream. By creating better metadata editing facilities within the Suite that was linked to our cloud-based metadata repository, we would be able to offer a pipeline to search engines and offer metadata that would enrich their indexes (for a price of course). So, when you search for *Ezekiel 25:17* you would get a video clip in your search results that would start playing at one of my favorite scenes from **Pulp Fiction**.

We also decided to focus primarily on our API. Inspired by [Alex Payne's](http://al3x.net) work at Twitter, we saw that there was more value to be created by providing a simple but powerful API. In fact, our API was a **meta-API**. RDF and the SPARQL query language was the foundation and we would provide support and tools for Adobe teams to build APIs that were wrappers around our RDF core. They would define their data and we would model it with RDF and create SPARQL queries that would map to their custom APIs. Over time, we would have added tools to make this a self-service operation.

# If Three People Are Good, Thirty Must Be Better

It never ceases to amaze me that software companies tend to be the most unfamiliar with Brooks' Law (both the real version and the misquoted one). A constant refrain was *"We can't build this with just 3 guys from CoreTech"*. A funny statement considering the fact that that's exactly what was happening. We just shook our heads and kept working.

Around month 5, we were told that we were going to get "help" from one of our non-US teams. They had no familiarity with metadata or our technology choices. They were all good engineers, just inexperienced. While we mostly enjoyed working with them, we lost 3 months essentially training them when we could have been finishing features.

Right about the time our stakeholders realized that the non-US team might not have been helping us move the ball forward, another US team just had their project cancelled. Surprise! **THEY** got added to our project as well. By Christmas, we had an overall team of over 30 people and was incredibly management heavy. Our product vision was all over the place. We were going to solve every problem under the sun, including world hunger. It was a mess.

With a bunch of new people, leaders needed to be identified. I was asked if I wanted to lead the overall engineering effort. I said **no**. I suspected that the project would eventually get into trouble and since I was from an external, shared technology group I would be the obvious scapegoat. In fact, given the management involved on the stakeholder team I was *sure* that would be the case. Instead, I said I would just focus on the core metadata repository and not the overall product. This was a mistake on my part and, ultimately, would contribute to the project's failure.

# "What Exactly Are We Building Again?"

The next year was both exhilarating and frustrating. We cleaned up our API, added support for four different persistence engines, added Web hooks, supported OAuth, wrote tons of documentation and examples and evolved our continuous deployment infrastructure. We moved from Merb to Sinatra, Mongrel to Unicorn, ActiveMQ to beanstalk and RubyRDF to RDF.rb. On the engineering front, we were having a great time and always had working software that was ready to ship. We evangelized RDF internally, found some supporters and started to make some headway. As part of all of this, we re-asserted our identity separate from our client's project. We codenamed our service Triad. RDF geeks will get the joke, as will Chinese gangsters.

Unfortunately, our internal clients were frequently changing the message about which of the many problems we were trying to solve. With over 30 people on the "team", everyone had a different idea as to what we were building. It didn't help that *metadata* was a particularly ambiguous term and could've have had vastly different meetings depending on who you were talking to at that moment in time. No one really knew what we were building. At one point, we were one of the most important projects in the company. At another point, we were a punchline.

After multiple resets and changes in our Product Management, our clients **finally** came around to what they believed to be the value proposition for our service. Metadata search. The domain area we had started with almost 2 years earlier. The feature that was powering part of another Adobe service that was launching with Creative Suite 5. All this time and energy wasted to settle back on the simple principle we started with all along. Metadata search.

A month later, our client's project was cancelled.

# "We Come To Bury Triad, Not To Praise It"

The project cancellation happened to coincide with a company "realignment" (layoffs). Luckily, we weren't affected but we **were** reorganized. We were still in CoreTech, but not in the emerging technologies team. We were back with the high science practitioners. No one was happy, especially since given the new reorg we were a lateral move away from a group that actually **was** evolving into Adobe's internal AWS. After much lobbying, I got what I asked for...a move into this new services group. Without Steve.

Yep, Steve (and 2 other developers I managed to snag along the way) were reassigned to other groups. John and I were transferred (that's the polite way to put it) to the services team. I was now a **Manager of One**.

John and I spent the next few months scoping out a new service we were asked to build. I had a month-long sabbatical coming up, so I was slightly checked out. OK, I was **completely** checked out. After my sabbatical, I spent the next few months decommissioning Triad. It was painful, but necessary. We had no executive support to continue the project even though all we wanted to do at that point was release it on [Adobe Labs](http://labs.adobe.com) and get feedback from third-party developers on what they wanted to see from the service. By December 2010, Triad was no more.

# "Dude, I'm Getting The Band Back Together"

The silver lining to this story came in October 2010, though. I pretty much had one foot out the door when a colleague told me about an internal opportunity that seemed to too good to be true. A domain area that I actually was passionate about, a good team to work with that had a shipping service that I would take over and a promotion to Senior Engineering Manager. Two weeks of interviews and the position was mine. 

Two weeks after that, John joined the team.

A month later, Steve did too.

I am really lucky. And happy.

# Intrapreneurship

Earlier, I said it was a mistake for me not to lead the overall engineering effort for my client's project. Previous experience (that **other** blog post I have to write) had made me gun shy about being the front man for Big, Hairy, Audacious Goals. While I had proven multiple times that I could assemble good teams, deliver working software that met requirements on time and under ridiculous conditions I often ended up drawing the short straw.

The thing is, I was suppressing my strength. I **am** an intrapreneur. I *like* taking on huge challenges with small teams. I don't care about the money or the titles. I'm in it for the glory.

By not leading the whole project, I could not move the ball forward. I lacked the leverage and influence to make things happen. Some organizations are driven by titles and roles and if you don't have them, your sphere of influence can be so small as to be non-existent. More importantly, I did not contribute in the way that would have most helped my team. I let my fears suppress my more useful attributes: tech lead, evangelist, bullshit artist. 

The break between Triad and my current project allowed me to gain some perspective. I rediscovered my passion for developing products and realized that I needed to be in the part of the organization that *did that*. Shared technology is often necessary, but poorly executed in a lot of organizations.

My strengths lie in taking a germ of an idea, blowing it up several orders of magnitude, assembling the talent and then **pulling it off**. To some people, that may sound pretty arrogant. Maybe it is, maybe it isn't. All I know is that I am not the type to "climb the corporate ladder". I am definitely **not** a 9-to-5 wage slave. I'm also not an entrepreneur...yet. I'm a change agent. A radical. A revolutionary. A professional pain in the ass.

There **is** an "I" in team. The "I" is for intrapreneur.
