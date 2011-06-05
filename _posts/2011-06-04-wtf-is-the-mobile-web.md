---
layout: post
title: WTF Is The Mobile Web?
---

**TL;DR: Those who don't know history are destined to repeat it.**

I've been pretty busy on my latest project, so I've only been able to
dip into Twitter here and there. Lately, I've seen a lot of people I
follow *waxing idiotic* over whether or not they should be building
native, hybrid or Mobile Web applications. I like and respect a lot of
these people, but the fact that this is even a discussion topic makes me
shake my head in disgust. I pretty much expect this question from
developers, but when I see designers and entrepreneurs wasting their
time on this it annoys me no end. Let me spell it out for you:

> Who Cares?

Seriously? More importantly, *do your customers care?* THAT should be
your criteria. However, if you really need instruction in this area I'll
be happy to assist you.

1. If your customers care about the platform, **build native**.
1. If you care about the platform, **build native**.
1. If you are going for broad reach and your app fits the Web model,
**build for the Web**.
1. If you built a Web application, but you or your customer need to
   deploy it in an app store for some reason, either **make a hybrid
application** using a tool like [PhoneGap](http://www.phonegap.com/) or
**rewrite it as a native app**.

To be fair, I understand why designers and entrepreneurs can be tricked
into thinking that there is an important decision point here. It's
because developers have an agenda that's different from theirs.
Designers and entrepreneurs are focused on the user experience while
developers are focused on their own productivity, technical merit and
engaging in flamewars. I'm grossly stereotyping both camps, but I think
my points will still be valid.

Most designers and entrepreneurs are technical enough to be dangerous.
However, they are usually **not** technical enough to engage in a
prolonged technical debate with a developer. And, **that** tends to be
their undoing.

# The Developers' Fountain of Youth #

Or, silver bullet or goose that laid the golden egg. Whatever you want
to call it. **I** call it the *fool's errand* that every developer ends
up chasing...

**The ultimate cross-platform development tool.**

For those of us old enough to remember the early days of the Windows vs.
Mac debates, the current battles between Android and iOS seem...quaint.
Let me drop some names on you:

* zApp
* Wind/U
* InterViews
* Visual C++ 2.0 Cross-Platform Edition for Macintosh

These were but **some** of the tools that were sold that purported to
allow a developer to write cross-platform application code. They all
worked to varying degrees. They were expensive and had huge learning
curves. They either took a Least Common Denominator (LCD) or Greatest
Common Multiple (GCM) approach. 

They all failed.

In the end, these tools only served two audiences:

1. Bean counters: looking to save money on costly developers for every
   platform they needed to support
1. Developers: looking to find a way to deal with the **incredibly hard
   work** of developing applications on multiple platforms

Cross-platform development has always been and will always be incredibly
difficult, no matter what your toolset. Platforms are inherently
different. And people are attracted to those platforms because of those
differences. So, when developers try to homogenize platforms by using
cross-platform toolkits, they also alienate potential customers.

Macintosh users may remember the hated Microsoft Word 6.0. There was a
high profile attempt to develop a cross-platform application using a
shared codebase. Unfortunately, while Microsoft successfully achieved
their goal Word 6.0 was a dog. It acted like a Windows application, just
running on the Mac. If Mac users wanted Windows, they'd have been running
Windows on some PC clone! Somehow, the Redmondtonians missed that little detail.

Developers always attempted to save time and effort via cross-platform
development. To support both Windows and the Macintosh was more than an
issue of hardware and superficial UI differences. The differences ran
**deep**. Different languages, toolsets, programming models, windowing
models, networking stacks... the list went on and on. And for corporate
developers especially, they needed to get apps done quickly. For
commercial developers, their major bugaboo was support. Cross-platform
tools to the rescue.

Except they weren't. And people wanted their apps to behave *natively*
on their platform of choice. It mattered. It still does.

# Then, Along Came The Web #

Tim Berners-Lee invented the World Wide Web. Marc Andreessen made NCSA
mosaic, which begat Netscape Navigator. And, a subsequent development
solved the cross-platform development issue once and for all.

If you said *Ajax*, you'd be wrong. It was the Common Gateway
Interface, or **CGI**.

You see, at least for corporate developers, most applications were (and
still are) master-detail views on top of a database. Web browsers had
their own conventions that were simple and functional. As people started
to spend more of their time in browsers, the containing platform became
less of an issue for most people. Forms and CGI led to applications that
ran in the browser, mostly consistently.

This was the true inflection point, though very few noticed. When Google
released GMail and Google Maps, the point was emphasized even more. Many
types of applications could be built on the Web platform instead of the
native one and users could be satisfied. Some apps would still benefit
from being native, either due to a necessarily complex user interface or
demanding CPU and I/O requirements. However, each new generation of
hardware would reduce the number of applications that fit those
criteria. Yet, no matter how capable Web applications have become some
users just **prefer** native applications and how they *feel*.

# Mobile Web, Mobile Context, Mobile First...STFU #

Seriously, shut up. Your ignorance is showing. Listening to all of these
wannabe pundits, intellectuals and *thought leaders* is like listening
to Sarah Palin giving a history lesson about [Paul Revere's ride](http://www.youtube.com/watch?v=oS4C7bvHv2w). It's embarrassing.

The Web is an application on the Internet. Nowehere in the definition of
the Web is any restriction on the type of device or application that can
work with it. There is an application protocol, HyperText Transport
Protocol (HTTP). Using that protocol is the main prerequisite for
participating on the Web. 

If you want to be pedantic, you can also assert that to be on the Web
you must deal with documents and links. I'd even grant you that...that
would be the damn definition of *the Web*. A Web of interconnected
documents (or data). I'm not going to argue about One Web 'cause that's
a stupid argument that took a simple idea out of context. And prefixing
"Web" with modifiers like *One*, *Social*, *Semantic* and *Mobile* just shows that
you don't understand the Web. (*even TBL backed off the Semantic Web and
went with Linked Data to describe what he was trying to achieve*)

I understand that the new generation of browsers have given you even
more powerful implementations of JavaScript and you're finally realizing
how powerful that language truly is. It's great that you can now use
CSS3 to declaratively do things that were once the province of animation
engines. And HTML5 is evolving into a markup language for applications
as well as documents.

But, if you try to use Web technology to faithfully replicate **native**
applications you are making *exactly the same mistake the cross-platform
toolkit vendors made*. The Web is The Web is The Web. Period. Embrace
it. Design for it. Develop for it. Leverage its capabilities no
matter what the client device happens to be. But, respect it as its own
entity.

# We're All Lazy #

When you say *Mobile Web*, I hear *The Web*. When you say *the Cloud*, I
hear *the Internet*. At the end of the day, most applications today are
Internet-enabled applications. We tend to use **the Web** because HTTP
has pretty much become the de facto network protocol. Again, I'll show
my age by name-dropping some more:

* FTP
* Gopher
* z39.50
* Kermit
* NNTP

Heard of any of those? Did you use any of the clients back in the day?
If so, you know that HTTP eventually overtook them all as it provided
the primitives that could satisfy the functions of most of those other
protocols. But, there was a time when developers would actually
**create** application protocols over TCP/IP. However, as the Web became
the preferred choice for users developers did the pragmatic thing and
built their applications atop HTTP. This allowed them to focus on the
value their application could provide instead of getting bogged down in
infrastructure.

The unfortunate side effect of all of this is that developers rarely
venture outside of the constraints of the Web. How often have developers
opted to create a new protocol in order to power a new type of
application. Hardly ever. They tunnel their data over port 80 and bitch
about the results. Or, they bend over backwards trying to make HTML
scroll as smoothly as a UIScrollView. Madness.

# Technology Supports User Experience, Not The Other Way Around #

Native vs. hybrid vs. Web is masturbation for technologists. There's no
polite way to say it. The problem you are trying to solve informs the
user experience you will try and create. That user experience will lend
itself to a particular technology solution. Stop letting developers
compromise user experience to satisfy their technical agenda. *I'm
telling you this as a developer!*

Granted, there will always be some perfectly valid reason for engaging
in this debate:

* Availability of developers
* Cost of development
* Number of platforms
* Inability to predict the future

Thing is, all of the items above are outside your control. If they
prevent you from following the guidelines I provided at the beginning of
this essay then, I hate to say it, **you're screwed**. And, if you're
that screwed, the argument is meaningless. You can't execute so now
you're just navel gazing.

However, if you are actually in the position to develop an application
there is only one Golden Rule...

**Focus on your users' needs, not your own.**

