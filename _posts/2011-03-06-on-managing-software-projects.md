---
layout: post
title: On Managing Software Projects
---

**TL;DR**: There is no such thing as *managing a software project.* **Eliminate the management functions.**

Every development manager has a routine that involves a set of different tools. For instance, most mornings I log in and do a scrub for new bugs in our proprietary bug tracking tool. For each of my projects, I look at the state of our ongoing feature development in our feature tracking tools. On one project, we are using an in-house Scrum tool. On the other, we use [Pivotal Tracker](http://pivotaltracker.com). Multiple times during the day, I get email notifications with new git commit messages. I, of course, can ignore these if I want because I can also get the RSS feed for this. No matter the medium, I am interested in the actual content of the commit messages. I also have iChat and my mail client open all day long, since the bulk of my job is about communication. People have questions for me or ask questions of others that I know will open Pandora's Box. So, I need to stay on top of those. I try to keep our wiki up to date, but occasionally I fall behind. Every few weeks I do some wiki gardening to keep the content fresh. Mostly, I use the wiki as an aggregation point to collect data from all the previous systems and make it consumable to all the various interested parties. That way when I am asked for information I can give them the answer and, more importantly, a URL.

All of this is fine, but the thing that has historically driven me insane are the meetings. Not all meetings, of course. Just the inane, redundant and self-important status meetings that are often called by project managers. Often, those meetings are called to educate them (the project managers) about the current state of the project. The irritating aspect of this is that oftentimes it is the project managers that get involved in tool selection because **they** are the ones that need to roll up status information in order to communicate to stakeholders. And yet, even when they get a seat at the table they remain unable to either understand or communicate accurately the state of the project.

Software project management, both tooling and process, is **fundamentally broken**.

# One Size Does Not Fit All

First, let me establish the context. Here are the types of software projects, I am **NOT** talking about in this post:

* In-house, internal applications
* Software developed by consultants/contractors for SMBs or enterprise customers
* Game development
* Embedded systems

Instead, I will focus on commercial software projects intended for consumers and professionals. While it more directly applies to Web-based software, I contend that a lot of the points would also apply to desktop software assuming that one can let go of historical artifacts of the development process.

Earlier, I mentioned that on one of my projects we used an in-house Scrum tool. I was asked to be a stakeholder during the development of this project. I made it very clear that I was against the project, but would give (mostly) constructive criticism. Why was I against the project? Two reasons:

1. There was an abundance of existing Scrum tools, Open Source and commercial, that either had all the features we needed or had APIs/plugins that we could use to extend and integrate with our other systems.
2. One tool cannot work for both *development teams* and *stakeholders*.

Time and time again, internal tools teams would be formed to create a tool or a system that development teams would use in order to generate metrics which project/program managers would then utilize in their reporting. Things to note:

1. Development teams almost never were the ones asking for these tools
2. Project/program managers were almost **always** the ones asking for these tools
3. These projects were almost always unnecessarily complex, expensive and delivered late 
4. Many development teams would either not use the tool or get their project/program manager to do the data entry (*can you say self-reported data is useless?*)

The constructive criticism I offered in the early stages of this tool's development was to *stop trying to force status gathering tools down development teams' throats*. All of these tools try to address two, distinctly different audiences. They target development teams who essentially need a prioritized task tracker, where tasks can be stories, features, issues, bugs, chores, cases, &lt;*insert your terminology here*&gt;, etc. In addition, they target project managers by introducing features like work breakdown structures (WBS), estimating, standard reports, custom reports, reporting engines, etc.

The problem with almost all of these tools is that there is a huge disconnect between the data that the development team works with on a daily basis and the information that a project manager is trying to collect and disseminate. So, these tools end up taking the same failed approach as [knowledge management systems](http://en.wikipedia.org/wiki/Knowledge_Management). They attempt to change or add to a development team's workflow without adding any benefit *for the development team*. Without any real incentive, these systems fall into disuse or become yet another silo of unreliable project information.

The concrete advice I gave was for project/program management to figure out the types of reports and graphs they wanted to create and then define the data that would support them. Since every team worked differently, it made no sense to get them to all use the same tool. However, if you told teams "*Use whatever tool you like, as long as you can export this data for us.*" Essentially, project/program management needed a data warehouse so they could slice and dice metrics till they were blue in the face. Development teams probably generated the bulk of this data in their day to day work anyway, but it wasn't getting captured in a form that was usable to stakeholders. Unfortunately, if teams are forced to use a tool that does nothing for them it doesn't get used and the data is not generated or remains where it originated. If the data can be pushed from developers' existing toolchain into the data warehouse, project/program managers would be happy. If developers had to make minimal, if any, changes to their workflow and could remove mindless status meetings from their lives they would be happy. Win-win.

So, why does the current situation still persist? Precisely because organizations still employ traditional project managers and create hierarchical organizational structures. This breeds a culture where a significant portion of the population is given the job of collecting and spreading information. The fact that this is probably better accomplished by well-designed software is irrelevant. Command and control is still the norm, unfortunately, in many software development shops. I suspect that this is due to a combination of project managers wanting to demonstrate value to the organization as well as a general lack of trust. The Agile movement has tried to address these issues, but I think that all they have done is create an environment in which consultants can peddle shiny, new **Agile tools** to the project managers.

# We're Doing This Ass Backwards

Let's start with one of the core problems in software project management: determining the current state of the project. I propose The Simplest Thing That Could Possibly Work for solving this problem:

1. Give everyone the URL for the latest known working version of the application. This application is continuously built and deployed.
2. For desktop software, see previous step.
This may sound patronizing, but you'd be surprised by how often this isn't done. However, one could follow these steps and still not communicate status effectively. So, let's add a step:
3. Conduct a regular (weekly or bi-weekly) demo meeting to show the latest features of the application.

There is **absolutely, positively no substitute for working software** when it comes to communicating status. Every other approach is more ambiguous, numeric scales, percentage complete, red-yellow-green and so forth are completely subjective. Now, there is ambiguity with working software as well. The team can say that a feature is done, but the demo can surface missing or misunderstood functionality. Still, **that** communicates status more effectively than any scalar value in a status report.

This incredibly simple system has **one fatal flaw**. At least, it appears to be fatal flaw to project/program managers. This type of status does not convey whether or not the software will be ready *on schedule*. I contend that **Schedule-Driven Development** is the fatal flaw at the heart of most software projects. Even though it has pretty much been proven that it is difficult, if not impossible, to predict with sufficient precision when a software project will be done we keep using management methods based on that principle.

Instead of driving towards a date, teams should drive towards a **scope**. This is embodied in the practices of [Lean Software Development](http://oreilly.com/catalog/9780596517311) and [Lean Startups](http://www.startuplessonslearned.com/2008/09/lean-startup.html). Essentially, you should be doing this:

1. Initially, define your Minimum Viable Product (MVP) and create your backlog
2. Incrementally build and deploy the features for your MVP
3. When you've implemented your last MVP feature, **ship it!**
4. Gather feedback and metrics from your MVP launch
5. Add features to your backlog, refine and re-prioritize
6. Implement your next set of features
7. **Ship them!!**
8. Go back to Step 4

Now, of course, there are scenarios where the date is more important. However, that is more the exception than the rule these days. Unless you are targeting the holiday shopping season or tax season, how much does a date on the calendar determine your business success? Schedule-driven development is mostly historical due to the logistics of shipping boxed software. In a network economy, that is less of an issue minus a few outliers. Moving to Scope-Driven Development is a huge cultural shift and not all organizations will make the transition.

# The Other Customer

Now, that I've beaten up on project/program management sufficiently (*actually, I could probably keep going on that subject for a while*) let's look at the other customers of software project management tools and processes. The development team. 

Aside from their editors or IDEs (or design tools...designers are developers, too!), what tools are essential for the development team?

* Email (still. unfortunately.)
* Instant messenger
* Version Control
* Automated tools (e.g. continuous integration tools, monitoring systems, etc.)
* Bug/Issue Tracker

Essentially, these are all *communication tools*. All of these tools are needed because the *what* and the *how* of the communication varies and requires different solutions. That said, they all have the same flaw. Each tool maintains its own **information silo**. The value to individual members of the team and the team as a whole is the ability to **aggregate** and **filter** the information in these various silos using a *single tool*.

Why a single tool? Because as the number of tools that contain relevant information increases, the more difficult it is to get teams to adopt them. There are a handful of tools that a developer will keep running all day long. Those are the ones that are critical to their workflow. Some will always have the focus, while others will be in the background but always easily accessible. An example of this would be a developer's editor and shell (or IDE) and IM client. The editor is the focal point as that's where the code is manipulated and the shell is used to run auxiliary processes surrounding development. The IM client is there for asking quick questions to individuals or the team asynchronously and receiving notifications from automated processes.

Small teams and startups have adopted group chat tools like [Campfire](http://campfirenow.com/) and [HipChat](https://www.hipchat.com/) as essential tools for their workflow. They offer:

* Realtime collaboration
* Persistent chat rooms
* Ad hoc file sharing
* Plug-ins/integration with external tools

These group chat tools can replace email and generic IM for most teams, while acting as the aggregation/filter mechanism by acting as a sink for version control tools, other automated tools and your issue tracker. Still, these tools are intended for generic team collaboration. There is still room for a tool that is designed around the specific needs of a software development team.

# Winning

In my opinion, traditional software project management has been dead for a while. The tools and processes have not kept up primarily because the incentives weren't there. Large software companies try to adopt agile practices, but their very organizational structure and culture prevent real agility from taking hold. Thus, a tool vendor builds and sells the tools that will generate revenue, not change.

The tool I want is designed for **the development team**. It's primary focus should be on the realtime collaboration interface. It should assume little about any individual's or team's workflow. This tool should have a powerful plugin/integration model so as new, powerful tools become available they can be seamlessly integrated into this new "developer's HUD (heads-up display)".

More importantly, the developer's HUD can act as one of many sources for a team-wide data warehouse. The data that flows through it can be selectively funneled to the warehouse where stakeholders can retrieve their *status substitutes* if they so desire. Ideally, they would get what they need from the regular demos but I'll be pragmatic. Change don't come easy.

The data warehouse, though, can be useful for the team as well. Being able to perform analytics on team dynamics and behavior has value. But, it should be optional and possibly even serendipitous. No one wants a prescriptive knowledge management system, but an empirical one might be useful.

I started this post describing my current workflow. It seems obvious to me how a more refined version of Campfire or HipChat could replace 3-5 of those tools. But, that's just the easy part of the problem I want to solve. 

* How do I change the culture at my company? 
* How do I change the culture at other companies?
* How do I redefine or eliminate traditional software project management?
* How do I help teams effectively communicate and successfully build and launch software?

I may have just defined my next side project. Looks like a big one.
 