---
layout: post
title: Mostly Cloudy
---

In a [previous post](/2010/02/20/mobile-is-the-new-desktop.html), I talked about my preference for developing for the Web as opposed to jumping on the native application bandwagon that is dominating mobile development these days. In this post, I'd like to go deeper on that topic.

At my [day job](http://adobe.com), I spend a good part of my day explaining services to people. Some may say that we don't [get the Web](http://www.mslater.com/2009/12/4/10-years-later-thoughts-on-phototablet-fotiva-adobe) and there is probably some truth to that given [recent events](http://www.apple.com/hotnews/thoughts-on-flash/). Yet, being inside the <strike>sausage</strike> software factory has shown me that it is more a cultural issue; we rose to prominence during the Age of Software as a Product. Combine that with a specialist and generally long-tenured workforce, it is no surprise that we have difficulty adapting to the software as a service era.

One major mind shift for people coming from a desktop application development perspective is the idea that *multi-user* is the rule, not the exception. Also, the fact that since you no longer have the hassle of creating installers that have to deal with wildly varying system configurations, you have more flexibility in the choice of languages, libraries and applications you can use to build your service. You, the software developer, have a lot more freedom.

Of course, there are tradeoffs. As opposed to worrying about the intricacies of your  widget toolkit, keeping your interface responsive and, of course, making it attractive and functional you have to deal with lower-level details. Concurrency. Latency. Throughput. Serialization. *This stuff is really cool, BTW.*

I tend to call this **the iceberg**. Most people see the part that penetrates the water's surface, but never pay attention to the incredible mass that lurks below. Another analogy, soon to be relegated to the historical trash can, is the **dial tone**. Do you ever stop to consider all the engineering that goes behind producing that pleasing tone that informs you that you can press a few buttons and connect with another human being? Of course you don't! *You tweet, just like me. What the hell is a dial tone?*

A [co-worker](http://blog.kevingoldsmith.com/) and I were talking one day and he mentioned a former colleague of his who was a Unix geek before going to Microsoft for many years. When this guy left and went back to hacking Unix, he was (pleasantly) surprised how easy it was for him to jump back into things. Very little had changed in all that time. vi and emacs were still the dominant editors. More importantly, the programming model hadn't changed. Write small programs that do one thing well and connect them via pipes.

My friend and I pondered this. How, after all this time and with the rapid pace of technology, was Unix not only mostly the same but **thriving**? My theory: cause its model works.

Take concurrency. Hard-assed problem, no one will argue that. And, we have all learned the hard way that *threads suck*. And while there are great new constructs like *actors* and *software transactional memory*, they are generally implemented in obscure and academic languages like Scala and Haskell (*here comes the hate mail!*)

Or, you could fall back to the Unix process model. **fork** and **exec** still work well for a lot of cases. Building an asynchronous backend for a service requires long-running processes for message queues and daemon processes for pulling jobs and spinning up workers. This is Mom and apple pie for Unix wonks.

Add to that the complexity of processing large amounts of data or responding in near realtime to requests from multiple clients. As great as the frameworks are that come out of Cupertino, they're not going to wrap up that kind of stuff and make it easy for the Cocoa Touch crowd to deploy highly scalable services. If it happens at all, it will come out of [Seattle](http://aws.amazon.com).

You can't abstract everything. At some point, you have to know how things *work*. Even with amazing cloud platforms like [Amazon EC2](http://aws.amazon.com/ec2/), [Heroku](http://heroku.com) (*LOVE* what these guys are doing!) and [Engine Yard](http://engineyard.com) you need to understand how things interact, how latency will impact you and how to orchestrate multiple cooperating services. You have to internalize that *failure happens, and you need to figure out how to deal with it because you can't prevent it*.

So, how does this relate to the new world of mobile development? Aside from games and a handful of other apps, how many apps do you use that are **NOT** connected to some kind of service? All those location-aware, map intensive, real-time and messaging apps that you couldn't live without are just the [tips of the icebergs](http://en.wikipedia.org/wiki/Icebergs). The services that push data to these apps are amazingly intricate and complex. And like the ice below the surface, most people (including app developers) shy away from understanding how they are designed and implemented. They do realize, however, that they are necessary.

HTTP will be with us for a while, and TCP/IP even longer. The Web may recede behind pay walls, but you'll still use the Internet. Android may overtake iPhone OS or maybe Microsoft will come from behind again and convince people that Windows Phone 364 is for the *social network ready* enterprise. Whatever. No matter the platform, the genie is out of the bottle. People expect to be online and connected to services no matter the device. Amazingly, services today can work with any kind of client that has a network library and a way to parse the data you receive (assuming you designed it correctly).

There are a slew of hard problems to solve on the services side of the new software development landscape. Sure, the front end is what people see and respond to for the most part. But, in reality, people are attracted to the **value** that a well-designed app and its corresponding service provide. While I can appreciate great visual and interaction design, I am not especially skilled at either. My creativity comes out in figuring out how to leverage things like [node.js](http://nodejs.org/), [Redis](http://code.google.com/p/redis/), [Unicorn](http://unicorn.bogomips.org/) and [beanstalkd](http://kr.github.com/beanstalkd/).

If you made it this far, I recommend you read The State of the Internet Operating System, [Part I](http://radar.oreilly.com/2010/03/state-of-internet-operating-system.html) and [Part II](http://radar.oreilly.com/2010/04/handicapping-internet-platform-wars.html). They don't call Tim O'Reilly *The Prophet* for nuthin'!



