---
layout: post
title: Frame(work) of Reference
---

A lot of people think that because I like Ruby I must do Web development using Ruby on Rails. They would be wrong. Actually, I tend to prefer [Sinatra](http://www.sinatrarb.com). What?!? I'm not on the bandwagon with everyone else? How could this be?

# Microsoft Foundation Classes (MFC) vs ObjectWindows Library (OWL)

In the early nineties, I was writing code on the Microsoft Windows platform *(shock!)*. I had previously been developing command line applications on DOS and Unix and was trying to learn Windows. My first glance at the Windows API invoked my gag reflex. They reminded me too much of X-Windows' needless complexity. Luckily, many vendors like Whitewater Group were trying to make object-oriented development tools for Windows, such as Actor. I was a budding OO enthusiast and liked C++, but there were few good tools for that language.

Then, Microsoft C/C++ 7.0 came out with the Microsoft Foundation Classes (MFC), soon to be followed by Visual C++ 1.0. MFC looked to be the solution, a class library that encapsulated the Windows API. Unfortunately, MFC was a *thin wrapper* around the Windows API. It was so thin, in fact, that I wondered why Microsoft bothered. It barely abstracted **anything**. What was the point?

Fortunately, Borland International came out with Borland C++ and the ObjectWindows Library (OWL). OWL had much better abstractions, in my opinion, than MFC. For instance, you could write something as simple as:

	TBitmap bitmap = new TBitmap("path to bitmap file on disk")

whereas MFC required half a page of code (at the time) to perform one of the most basic functions anyone working with graphics at the time needed to do.

So, like most developers, I would evangelize my tool selection to all my co-workers. One of my colleagues, who would eventually become my mentor, would push back and tell me to learn MFC and more importantly, the Windows API. Our conversations would tend to go like this:

	Me: OWL!
	Him: MFC!
	Me: OWL!
	Him: Noob!
	Me: Fight!
	
Eventually, he won the argument (he was senior to me) and, of course, I was bummed. *OK, I was pissed*. 

One of our projects was an early entrant in the streaming media race, around the same time Real Networks came out. I was debugging some code for our control protocol when other team members starting reporting playback problems on Win95. Hours of frustrated debugging had us going into the MFC source code. The MFC source code took us down the Windows API route. A few support calls to Microsoft finally uncovered the problem, a discrepancy in the Windows Multimedia APIs between Windows 95 and Windows NT.

This experience allowed me to finally understand the point my mentor had been trying to make. At some point, your problems become complex enough that you need to know how things work **at the lowest levels**.

# Web Frameworks

After that experience, I got pretty serious into Web development. I started with Active Server Pages (ASP) and VBScript since I was still a Microsoft guy at the time. Then, I switched to Java, Java Servlets and Java Server Pages (JSP) for quite some time. During this period, there were tons of frameworks popping up like Velocity, Freemarker and Struts. And, of course, when J2EE hit the scene people lost their damn minds.

I, stubbornly, stuck to servlets and JSP with JDBC for accessing the database. Why? 'Cause they **worked**. The fundamental nature of the Web had not changed with these new frameworks. The HTTP request/response cycle had not changed. You were still getting a request on a socket with some environment variables and a body. You were still setting some headers and returning a body and a response code. When you needed data from the database, you still were generating a SQL statement that had to hit the database.

Fast-forward several years and I was trying to decide between learning Python or Ruby. I had started poking around with Python, but due to all the talk about how awesome Rails was I started playing with it. Ruby was indeed a nice language, but Rails smelled like OWL to me. Nice abstractions, but hiding the bare metal too much.

Not long after, people started talking about Merb. Merb tried to address the performance and modularity problems of Rails at the time. When the time came to select a framework for our Web service, we started prototyping in Rails but immediately switched to Merb. Merb was minimalist and modular (for a while). As Merb evolved, we hit a few frustrations with it as some core features kept changing. But, it eventually hit 1.0 and stabilized a little. Then, the Merb project decided to merge with Rails.

That story is well-documented so I won't rehash it here. However, I was concerned. Merb originally arose out of the inability to get certain things in Rails fixed. This would no longer be the case. However, how many of the features and opinions that we appreciated in Merb would survive the Rails transition? 

More importantly, how much was Merb helping us? A few of the frustrations we had were caused by "magic" that the Merb developers introduced to make the framework more friendly. Ironically, one of the things that the Merb team railed against (pun intended) was Rails extensive use of metaprogarmming "magic".

> Frameworks are very good at generic tasks. They’re meant to be: they abstract away common difficulties. But as applications grow in scale, they need to get more and more domain specific to be able to deal with scale. 
As your site grows, you start to feel a bit of pain, and need to replace some bits of the framework with domain specific bits. This usually isn’t too bad: most frameworks, Django included, are modular enough that you can easily swap out the more common non-scalable bits.
Then one day you become Twitter, and all hell breaks loose. You end up having to essentially ditch the framework and re-write everything, from scratch, in very very specific ways, just to deal with the crazy, mind-boggling amounts of traffic you’ve got.
Frameworks work incredibly well to get you off the ground quickly… and then usually fail miserably when faced with the specific needs of big sites.
Frameworks ought to gracefully fade away as you replace them, bit by bit, with domain-specific code. Right now, they don’t.

> [Jacob Kaplan-Moss, Snakes on the Web](http://jacobian.org/writing/snakes-on-the-web/)

Enter Sinatra. Sinatra is a simple domain-specific language (DSL) for creating Web applications. It is a thin layer over the [Rack](http://rack.rubyforge.org/) specification. Rack, like WSGI in Python which inspired it, is essentially the Common Gateway Interface (CGI) done right. Rack encapsulates a CGI-like approach for interfacing Web servers with applications. Sinatra models a language that is pretty much HTTP. The DSL methods map to the standard HTTP methods and match against URL patterns. The code within the Ruby block executes when there is a match of the incoming HTTP request.

That's it. No magic. A simple Ruby library that implements a DSL that is a thin wrapper for HTTP. You can actually read the code for Sinatra and Rack in an afternoon. Debugging is simpler as you can look at the URL for the part of your application that is misbehaving and pretty easily find the Ruby block that is executing code for that URL.

Sinatra lacks some of the Model-View-Controller niceties that Rails provides. However, frameworks like [Padrino](http://www.padrinorb.com/) puts some of this functionality back while preserving the minimalist nature of Sinatra. This is accomplished through the application of **Rack middleware**. Middleware are just Rack applications that can be chained together, like Unix pipes. Another model of simplicity.

A lot of these opinions hold for **object-relational mappers (ORMs)** as well. At the end of the day, the ORM is generating SQL. If it generates inefficient SQL (as ActiveRecord in Rails used to do) and you don't know SQL, how can you address your problems? Try explaining to your users and/or customers that your site is down because you were afraid to learn a little SQL.

HTTP and SQL are pretty much the **true** foundations of Web application development. As are HTML, CSS and JavaScript. These are the most basic tools you need to have in your toolbox and you need to know them well. Once you do, you can then choose tools that eliminate some of the drudge work, but choose wisely! Your tools should help you *do* the job, not **be** the job.
