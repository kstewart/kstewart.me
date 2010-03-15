---
layout: post
title: 3 Is The Magic Number
---

More or less. At least, when it comes to software development these days. That's not to say it's a hard and fast number, but it is the sweet spot in my experience. But, before people start raking me over the coals asking, *"Do you actually believe only 3 people could write something as complex as Photoshop?"* let me set the context here and now *(Oh, and to answer the previous question, Yes)* :

* A large percentage of software development is in building Web applications and lately smaller, mobile applications for iPhones, Android devices and Blackberrys.
* There is a vibrant community of independent software developers that are building desktop applications with teams as small as **1** and making a good living.
* The majority of large applications did not START as large applications. They were small applications that *GREW* into large applications. And when they started, there were only a few developers (*even Photoshop!*).

# Rethinking Brooks's Law

As often misquoted as [Brooks's Law](http://en.wikipedia.org/wiki/Brooks%27s_law) is, the core tenet is still valid. The communication costs incurred by adding more people to a project can be crippling.
	
> "You won't catch me advocating for 'hard-working average programmers'. What I do believe is: you should stock your team with only rockstars, between 2 and 4 of them. I've worked on teams that only had 3 people. I've worked on teams with about 16. I was a consultant, I've worked on a lot of teams - big and small. My experience was that the smaller teams were much more effective, every time."

***Jay Fields, [Pairing isn't the Solution](http://blog.jayfields.com/2010/03/pairing-isnt-solution.html) via [Zed Shaw](http://twitter.com/zedshaw/status/10356819700)***

The right way to think about Brooks's Law is to pay more attention to how we form teams in the first place. Too many companies think of developers as interchangeable cogs and just throw people onto projects as if what they are working on and who they work with do not matter. **NOTHING** could be farther from the truth.

# Software Development is a Social Activity

Whether you are pair programming on some Java code, chatting in the #mongodb IRC channel on [freenode](http://freenode.net) or typing:
    
    git push github master
    
writing code is a social activity. Developers need to talk to other developers, bounce ideas off each other or just show off. It's a *craft*. That's why the whole idea of software craftsmanship holds so much appeal. We applied Industrial Revolution principles to knowledge work and that's just insane. Unfortunately, many large companies still haven't [gotten the memo](http://www.entertonement.com/clips/pmrmbndcrh--Did-you-see-the-memo-about-thisOffice-Space-Gary-Cole-Bill-Lumbergh-).

Large companies have introduced so much overhead to the process of delivering software it's amazing any gets released at all. Much of this overhead is related to *managing communication between functional teams*. Interesting...

Has any one considered WHY we even have functional teams? Why isn't everyone involved on the project on one team? *Duh! Too many people.* Why do we have so many people? *Because we need specialists, so we break them up into teams, give them managers and then add project managers to facilitate communication...* Which, of course, is absolutely necessary because we all know that engineers don't have [people skills](http://www.break.com/usercontent/2008/4/Office-Space-I-have-people-skills-488721.html).

Except that is a big, fat, honking **LIE**. The real issue is that developers have to hold a ton of information in their heads and attain a high state of concentration. They understandably get a wee bit irritated every time they have to context switch to address the latest issue of **The Institution**. Large teams introduce every possible detriment to a developer:

1. Interruptions
1. Unnecessary communication
1. Low bandwidth communication

How can we turn this around? In my utopian vision of the future, software development teams are comprised of:

1. Developers 
1. Designer

When I say *developers*, I am stating that these people fulfill the roles of developers, testers and operations people. If you had a development manager on the team before I hope s/he can code. Otherwise, we have no need for them. 

I also think there should be a **SINGLE** designer on the team that is both the interaction and visual designer. This, in my mind, helps retain the conceptual integrity of the user experience design. I completely agree with [Elliot Jay Stocks](http://elliotjaystocks.com/blog/web-designers-who-cant-code/) that designers must be able to code in this day and age. More importantly, they should heed at least one part of Ryan Singer's description of the [37signals design process](http://37signals.com/svn/posts/2135-podcast-episode-7-ryan-singer-on-the-37signals-design-process)...work in the code. By writing HTML and CSS, checking templates into version control and running the software locally on their own machines during development designers will have a much more intimate relationship with the final product. In the process, it helps address that whole [designer/developer workflow](http://www.adobe.com/resources/business/rich_internet_apps/workflow/) thing.

# But, That Doesn't Scale&#0153;

Of course it does, just not in the way you've been conditioned to think. Jason Fried gets it:

> "We're going to start working in teams. A team is made of three people: One designer and two programmers. A system administrator will also assist the team when necessary. To start, we will have two dedicated teams plus one slack team. The slack team is available to help either team, or take on other stuff that inevitably comes up. In March we expect to have a third team dedicated to the products."

***Jason Fried, [2010: The year of the products + a new way of working](http://37signals.com/svn/posts/2099-2010-the-year-of-the-products-a-new-way-of-working)***

Microsoft has/had a similar concept called feature teams. Amazon does the two-pizza team thing. It's intrinsic to human nature to prefer small circles. Ever notice at a large party that everyone breaks off into small groups of 4-6 people to have a conversation? Why do you think that is? Seth Godin gives us a hint:

> "Handshakes. How many handshakes do you need to introduce three people? Only three. Ishita, meet Susan. Susan, meet Clay. Clay, meet Ishita. Four people need twice as many, six. And five people? Ten."

***Seth Godin, [Linchpin](http://www.amazon.com/Linchpin-Are-Indispensable-Seth-Godin/dp/1591843162/ref=sr_1_1?ie=UTF8&s=books&qid=1268610473&sr=1-1)***

*Who will talk to the customers, get their requirements, understand the market....?*

You haven't been following along, have you?


