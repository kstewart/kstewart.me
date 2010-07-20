---
layout: post
title: Flip The Script
---

Last month, I had the pleasure of attending O'Reilly's Velocity conference for the second year in a row. Truly awesome and inspiring sessions and people. The emphasis on culture and cooperation was a refreshing change from the usual corporate political mediocrity.

Paul Hammond's session, [Always Ship Trunk](http://www.paulhammond.org/2010/06/trunk/), struck a chord in me as a developer. It ended with a question that I hope sparks a discussion deeper than this thread I found on [Hacker News](http://news.ycombinator.com/item?id=1463751):

> What would a revision control system built for supporting deployed web applications be like?

Huh? What could he mean? Just use Subversion, Git, Mercurial, Bazaar, Perforce, Visual SourceSafe...OK, just kidding on that last one. You'd be better off using numbered folders on a Novell Netware file server than that heinous pile of shit Visual Source(Un)safe. *My recommendation: Use Git or Mercurial if you can, Subversion if you must.*

Anyway, Paul correctly asserts that there are three kinds of software:

1. Installed software (Commercial/Proprietary)
2. Installed software (Open Source)
3. Web applications (Software as a Service)

and that Web applications are not like installed applications and that all existing revision control systems were built by people who build installed software. The implication being that the assumptions that drive the design of all version control systems do not take the deployment process of Web applications into account.

In the world of shrinkwrapped software, it is common to have multiple versions *in the wild* at the same time. You do a release, then possibly a minor update for small features and bug fixes, followed by another major release. All of these are independent versions. Then, you discover a security vulnerability and likely have to produce patches for all of these variants. This is one of the primary use cases for version control systems. The branch model is pretty much the only sane way to handle this scenario.

With Web applications, new releases/upgrades happen only once. Older versions of code do not get redeployed. In Web operations, this is known as **rolling forward** as in *"We don't roll back to a previously known good version of the code. We make a fix and roll forward."* Given this model, managing **versions** is less of an issue than managing releases. Thus, Paul recommends moving version management into the application itself.

[Feature flipping](http://code.flickr.com/blog/2009/12/02/flipping-out/) is the common solution to in-application versioning. It essentially amounts to wrapping your code in **if** blocks with feature flags as the conditionals. The scope of these flags can be environments, pools of servers and/or pools of users. While simple and powerful, the thought of littering my code with if-else statements makes me cringe. However, Paul points out that you have to be disciplined in periodically pruning these flags from your codebase.

[GitHub](http://github.com/blog/677-how-we-deploy-new-features) uses feature flipping as well and goes one step further by using [Redis](http://code.google.com/p/redis/) for configuration management. This is a much cleaner solution than having to manage and deploy a configuration file across all your servers. This also makes it easier to do things like dark launches and A/B tests given Redis' built-in ability to work with sets. 

By using feature flags, the only branch that really matters in your version control system is trunk (*master* for the Git Squad). Paul summarizes it nicely:

* Use branches for early development 
* Merge branches into trunk 
* Use flags for rollout of almost-finished code
* Always deploy trunk to every server on every deploy and manage versions through configuration

I'm not sure I have the answer to Paul's question but I wonder if the beginning of the answer lies in configuration management? Tools like cfengine, Puppet and Chef already integrate with version control systems for deployment. Should merge operations generate feature flag definitions? Teams using distributed version control tend to already adopt the approach of creating *feature branches* which they then merge back into the main branch. Maybe we can extend that operation to wrap the code created in the branch in conditionals as it gets merged back into the mainline, then export the flag definition into the configuration management system. Seems like an idea worth exploring further.










