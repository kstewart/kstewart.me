---
layout: post
title: Urban Planning
---

> An organic build approach says plant a seed, watch it grow.  First, a sprout appears, with roots a stem and leaves.  The stem gets thicker, the roots grow deeper, and more leaves sprout. Branches grow. Flowers bud and fruit appears. When requirements change some pruning and grafting is required, but you don't have to tear down the tree and plan a new one from scratch or start a new tree on the side. The tree will grow around power lines and rocks and other trees as needed.

> [Paul Boal, Growing a Tree versus Building a House](http://walkingoncoals.blogspot.com/2010/08/growing-tree-versus-building-house.html)

The construction metaphor for software development has been around seemingly since the beginning of time. With the advent of agile, more organic memes have taken root (pun intended). As much as I identify with the idea of <em>growing software</em>, we shouldn't dismiss all aspects of the construction metaphor.

As I've been working on my latest project, a multitenant Web application, the construction metaphor became evident. However, it was on a much larger scale than it's usually applied. Most people who compare developing software to erecting buildings tend to scope the discussion to a single structure. In my not particularly original opinion, building Web applications is a lot like <strong>urban planning</strong>.

> To developers, the most conspicuous difference between Web-based and desktop software is that a Web-based application is not a single piece of code. It will be a collection of programs of different types rather than a single big binary. And so designing Web-based software is like designing a city rather than a building: as well as buildings you need roads, street signs, utilities, police and fire departments, and plans for both growth and various kinds of disasters.

> [Paul Graham, The Other Road Ahead](http://paulgraham.com/road.html)

Much of my design process has involved this sort of thinking. One of the first decisions was splitting up the main site/administrative application from the multitenant application. That decision led to the idea of deploying to 2 different clouds, Heroku (which sits atop Amazon's EC2) and the Rackspace Cloud. This split affords a bit of fault tolerance as well as the ability to scale portions of the application independently. In the event of an outage on one cloud, it should be possible to redeploy to the other, thanks to the power of tools like [Puppet](http://www.puppetlabs.com/) and [Chef](http://opscode.com/chef/).

A Web application without an API is a eunuch. So, I'll be providing one. One school of thought is to build the API first and then make the Web app a client of the API. I favor this approach as it reflects the <em>eat your own dogfood</em> mentality. The other school of thought is to build the API adjacent to the Web app, usually starting with a read-only version, then adding write capability. As the API is really for the application's tenants, I am considering a hybrid approach: build the overall API infrastructure but only expose the read-only functionality initially. How am I going to do it? Job queues to the [Resque](http://github.com/defunkt/resque)!

Outsourcing is not just for call centers. It works for subsystems as well. I COULD set up [MongoDB](http://www.mongodb.org/) and [Redis](http://code.google.com/p/redis/) myself. Or, I could subcontract that work to [MongoHQ](https://mongohq.com/home) and [Redis To Go](http://redistogo.com/), respectively. And, every city needs workers so I'm sure I'll have at least half a dozen daemons running around autonomously taking care of sundry tasks.

Blogs. Forums. Issue Trackers. Chat Systems. Each of these is like a small park or shared garden. Their placement can be integral to the overall experience you are trying to create. Your Web application is a living, vibrant city. Be the mayor.