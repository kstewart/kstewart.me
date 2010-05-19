---
layout: post
title: LAMP Is Dead. Long Live...DyLAN?
---

I'm sure you think the title of this post is linkbait. Maybe it is, I have an ego like everyone else. However, I've been wondering lately...

> Is the LAMP stack **THE** Web stack still?

Let's take a look at what we have today.

# Linux

I will give credit to [Stack Overflow](http://stackoverflow.com) for pragmatically showcasing the [ASP.NET MVC](http://asp.net/mvc) Web stack. This site is one of many that invalidates the idea that Unix/Linux is the only choice for a server OS. Windows can do just fine, thank you.

That said, the other Web stack components naturally lead many developers down the Open Source path and, inevitably, Linux. Sure, there are many still who think [FreeBSD](http://freebsd.org) is The One True Unix. Or, if you're a [Joyeur](http://joyent.com) then [OpenSolaris](http://hub.opensolaris.org/bin/view/Main/) is the bee's knees. Everyone else is on Linux.

# Apache

[Apache](http://httpd.apache.org/) is still King of The Mountain, but [Nginx](http://wiki.nginx.org/Main) is gaining ground. The more important thing to notice is that in the old days, your Web server was also your application server. Your language binding to the Web server was either *mod_perl* or *mod_php*. This is the primary reason the LAMP stack took off; most Web hosts ran Apache and by then mod_perl and mod_php were default installs.

With the rise of other dynamic languages (see later section), Apache and Nginx have started to be used for more static content serving and as [reverse HTTP proxies](http://httpd.apache.org/docs/2.0/mod/mod_proxy.html) for passing requests to backend servers like [Mongrel](http://github.com/fauna/mongrel), [Thin](http://code.macournoyer.com/thin/) or [Unicorn](http://unicorn.bogomips.org/) (familiar to Ruby developers).

Apache is still widely used and is a robust option. If you know how to manage and configure it, you can make it do awesome things. Nginx is small and fast and has a more sane (to me and several others, at least) configuration syntax. Its number of modules is steadily increasing. In my opinion, Apache and Nginx are two sides of the same coin. [Varnish](http://varnish-cache.org/), on the other hand, is in a league of its own.

# MySQL

Ahh, MySQL. The workhorse. The incumbent. The hammer that makes every problem look like a nail.

I jest...somewhat. Many years ago, there was more diversity in the database world. But, the world was different then. The primary problem was transaction processing and relational databases handled that problem well. Combined with the pseudo-standardization of SQL, victory was *Oracle's*? 

But, in the early days of the Web people persisted their data to flat files or DBM files. I recall people writing CGI applications and worrying about file locking, which opened the door to using relational databases. [MySQL](http://www.mysql.com/), [PostgreSQL](http://www.postgresql.org/), [Oracle](http://www.oracle.com/), [Sybase](http://www.sybase.com/) and sometimes even [SQL Server](http://www.microsoft.com/sqlserver/).

Then, Web 2.0 "happened". And Ajax. And Twitter. The script kiddies who didn't actually understand how RDMSes worked started having **scaling problems**. For some applications, scaling an RDBMS isn't hard...it's *costly*. So, if you're a twenty-something with a hot new Web app and no real funding **costly** is synonymous with **hard** *(especially if you have no business model)*.

Enter **NoSQL**. The new hammer. NoSQL's claim to fame is *easier* scalability via swapping [ACID](http://en.wikipedia.org/wiki/ACID) properties for the [CAP theorem](http://en.wikipedia.org/wiki/CAP_theorem). Simply put, transactions and consistency are less important than availability and partition tolerance (distribution). Most developers end up using object-relational mappers to flatten out objects in order to serialize them to database tables. As APIs became more prevalent and people became disillusioned with XML as a format, developers moved to [JSON](http://www.json.org/). When they looked at JSON, many saw the hash data structure they were already using in their code. Serialize hashes, huh? Old hat to the Perl developers out there. And Amazon S3 is essentially a big-assed distributed hash table in the cloud. 

MySQL is still around and will continue to be used due to familiarity. However, as more developers use less of the relational aspects the door is opening for a NoSQL replacement...the MySQL of NoSQL if you will.

# (Perl|Python|PHP)

As soon as Ruby on Rails hit the scene, the **P** in LAMP grew a tail. Many who know me know that I think Perl is pure evil and PHP is an abomination. Before you start unfollowing me on Twitter, realize that even [Rasmus](http://lerdorf.com/bio.php) knows it's kinda crappy. PHP is more XML bindings to C code than a language. Perl is a write-once, debug many collection of syntactic atrocities. Python is actually a language, and a nice one at that.

As is Ruby, my current favorite. However, it doesn't matter what the language is. The real value is the renaming of **scripting languages** to *dynamic languages*. This slight semantic adjustment ended up highlighting the productivity gains that were lost when everyone went stampeding to Java and C# (like I did). Essentially, a whole generation of developers never learned about [REPL](http://en.wikipedia.org/wiki/Read-eval-print_loop). Luckily, the next generation rediscovered it and all the wonders it brings to bear. Static typing is almost a necessity for desktop applications, but for server-side stuff that is **mostly** processing text, dynamic typing is hard to beat...if not downright invaluable.

This new (old) discovery has spawned a renaissance in programming languages. People are experimenting with a whole set of languages, especially functional ones. [Paul Graham](http://www.paulgraham.com/icad.html) would be proud; everyone is re(inventing|discovering) LISP. Who would have thought that ***Javascript*** would be the new hotness in programming languages? *([Node.js](http://nodejs.org/), by the way, is amazing!)*  

# LAMP is dead (or at least in critical condition)

So, you've built your kick-ass Web 7.0 social media disintermediation geolocation application and subsequently get Dugg, Gruber'ed and Crunch'ed. Now, your sloppily coded and barely designed LAMP app is bursting at the scenes. You trek on over to [High Scalability](http://highscalability.com/) to search for your [Silver Bullet](http://www.virtualschool.edu/mon/SoftwareEngineering/BrooksNoSilverBullet.html). Unfortunately, it's not as easy as when you started slinging your PHP code. Should you use Hadoop or Cassandra? Everyone uses [memcached](http://memcached.org/), but few tell you how to deal with cache invalidation. Is [Tokyo Tyrant](http://1978th.net/tokyotyrant/) really distributed, or does it just support easier replication?

Thing is, it always comes down to understanding your problem and doing some careful and considered design. However, some trends have emerged in the evolution of the LAMP stack:

* Dynamic language
* Linux (still The King, baby!)
* Apache (or Nginx, but this makes my acronym work...)
* NoSQL

LAMP is dead. Long live **DyLAN!!!**

That is, if you still care about servers and all that mess. The ***REAL*** hotshots know to embrace Platform as a Service (Paas) or The Cloud. Get an account on [Google App Engine](http://code.google.com/appengine/), [Engine Yard](http://www.engineyard.com/) or [Heroku](http://heroku.com/). If you have to do more than:

> git push origin master

to deploy your app *you're doing it wrong*. 