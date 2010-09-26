---
layout: post
title: Don't Hate the Playa, Hate the Game
---

Lately, I have been more inclined to use [MongoDB](http://www.mongodb.org/) or [Redis](http://redis.io/) in my day-to-day work than stalwarts such as [MySQL](http://www.mysql.com/) or [PostgreSQL](http://www.postgresql.org/). This is not due to cargo cult fanboyism, but the simple realization that the poorly-named NoSQL databases are the best tool for the job *for early stage, greenfield projects.*

If anything, the folks clinging to their RDBMSes are **more** guilty of treating every problem as a nail, thus they whip out their favorite hammer. Why is it that almost every Web framework assumes we want/need to persist our data in an RDBMS? Even the ones that support pluggable persistence models tend to favor relational databases, specifically MySQL and SQLite. 

I've already given [my thoughts](http://working-code.com/2010/05/18/lamp-is-dead-long-live-dylan.html) on this situation a bit. This time, I want to come at it from a different angle.

The Principle of Most Privilege
===============================

In a relational model, the assumption is that one not only **knows** the shape of their data, but that it is relatively **stable**. For transaction-oriented, business process style applications this is likely to be true. But, if you are trying to create something new then it is even more likely that you *have no idea* what your data looks like which, by definition, means it is unstable.

**THIS** is the actual value proposition of NoSQL databases. The ability to have a flexible schema early in development is a productivity gain. Right now, developers have to commit to a schema and deal with change via tools like [migrations](http://guides.rubyonrails.org/migrations.html). While definitely an elegant solution to the problem, migrations solve the **wrong** problem. Migrations hide the mechanics of altering and dropping tables to make working with an RDBMS *feel* dynamic. That's the problem. The relational model is the **static typing** of persistence models.

As opposed to attacking SQL, developers should articulate their desire to use the most flexible tools possible at the beginning of a project. The reasoning for this is simple...in the beginning, **you don't know what you're doing**. Software development is exploration and your chances for success are higher if you don't have to spend all your time circumnavigating obstacles.

For non-transactional applications (which includes the majority of Web applications), the need is simply to persist and retrieve data. As JSON steadily replaces XML as the preferred serialization format, having a persistence engine that deals with it natively is a boon. Almost every language imaginable has a JSON parser available and if you're a Web developer you're already using JavaScript.

That said, there is one thing that seems weird to me. Why are all these Web developers always reaching for an [ORM](http://en.wikipedia.org/wiki/Object-relational_mapping) to use with these NoSQL databases? First, the **R** kinda tells you what problem is being addressed and we're not in that world. Second, in NoSQL your data is essentially a serialized hash so what exactly are we "mapping"? Finally, why introduce another layer unless it is adding value? 

I think [John Nunemaker](http://twitter.com/jnunemaker) is The Man, but I don't think most [MongoMapper](http://mongomapper.com/) users know **why** they are using it. ORMs for NoSQL mostly bridge the learning gap in moving from an RDBMS to a NoSQL database if you're using a framework like Rails where you spend most of your time fiddling with [ActiveRecord](http://ar.rubyonrails.org/). However, there is a lot less "mapping" with NoSQL as opposed to *un-flattening*. IMNSHO, I think developers would be better served using the raw drivers for NoSQL databases instead of investing time and energy in ORMs.

Instead, I'd challenge developers to consider a different tool. More of a static analysis tool that could bring the benefits of fixed schemas to NoSQL **after** you've solidified your data model. This tool may help indexing or making queries more efficient because now you know what your data looks like for the most part. It would be analogous to proposals for optional typing in languages such as JavaScript. This would, possibly, lead to the best of both worlds.

It Is A Poor Craftsman...
=========================

Of course, developers can be wildly enthusiastic about their latest silver bullet. NoSQL is not a panacea. If you have a problem that is best solved with an RDBMS, then use one dammit! Or, if it doesn't matter whether or not you use an RDBMS for the application but it would make your ops engineers' lives easier, then you should consider that.

What always ends up happening, however, is that people make poor choices for their application then blame *the tools!* This week, [Digg fired](http://techcrunch.com/2010/09/07/digg-struggles-vp-engineering-door/) their VP of Engineering for their continued failures with V4. [Hacker News](http://news.ycombinator.com/item?id=1669645) has been quite active with people armchair-quarterbacking the situation. Most are blaming the decision to use [Cassandra](http://cassandra.apache.org/). I find this as amusing as when people were blaming Ruby on Rails for Twitter's downtime woes.

Digg's issues **might** have something to do with Cassandra, but there is no evidence of that yet. There **IS** evidence of an immature engineering culture and poor planning. A wholesale re-engineering of their core architecture with no ability to revert to the previous version screams of amateur hour. If they at least phased in the new infrastructure under the old interface, Digg would have been able to isolate problems more effectively. By throwing the baby out with the bathwater, they'll be firefighting for months instead of improving their product. Or, in this case, reach parity with the previous version. The worst part is that [their founder was quick to blame the technology](http://techcrunch.com/2010/09/07/kevin-rose-responds-to-digg-criticism-on-diggnation-mostly-tells-users-to-chill/). You know the guy who was an intern on TechTV, drinks beer on Diggnation and is not an engineer? 

I think more developer should read [The Pragmatic Programmer](http://pragprog.com/titles/tpp/the-pragmatic-programmer), especially the parts about choosing tools. Hopefully, this will lead to more of an awareness about **how** to choose tools. Stop depending on *magic* and tools that do everything (including **thinking**) for you. I know it's hard and all, but ummm....that's why it's considered *knowledge work*. You need to have some knowledge to make it work. If you want easy, mindless work...well, I can't help you. Any suggestion I make would be stereotypical and demeaning to the people in those professions. Instead, I recommend you have some respect for **your  profession, your craft** and use the tool that matters most. *Your brain.*
