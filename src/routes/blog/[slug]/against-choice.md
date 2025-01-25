---
title: Against Choice
subtitle: A Guide to Digital Self-Parenting
slug: against-choice
description: How to claim back your attention with some Linux SysAdmin skills.
date: '2025/01/28'
---

We spend too much time fighting temptations online. Each small decision to resist checking our phone or opening YouTube drains our willpower. Most of us don't notice this drain until we're exhausted at the end of the day.

## Why Willpower Isn't Enough

Our brains use glutamate to help make decisions and control impulses. Like a muscle, this system gets tired with use. Each time we choose not to check social media or play games when we should work, we use up some of this resource.

The problem gets worse because everything is available all the time now. Apps and websites never close. They're built to grab our attention whenever we're bored or tired.

## How Time Used to Work

An Athenian peasant in 500 BC didn't choose how to spend each hour. Their time was set by their community's schedule of festivals and gatherings. While that life had its own problems, they didn't face constant choices about how to spend their attention.

Today we have to structure our own time. As James Clear writes, "you fall to the level of your systems." Without good systems, we default to whatever's easiest – usually whatever Meta or TikTok want us to do.

## Setting Up Your Own Limits

We need parental controls for ourselves. Here's how I've set this up on Linux:

### 1. Lock Away Admin Powers

Make it hard to override your own restrictions:

1. Change your root password (`sudo passwd`) to something random
2. Give the password to friends for emergencies
3. Set sudo to require this password

Example sudo setup (`sudo visudo`):

```
Defaults rootpw
vincent     localhost = (root) NOPASSWD: /usr/bin/dnf install *
```

### 2. Automate Time Limits

Use crontab to create set hours for activities. Here's how I control gaming time:

```
0 20 * * * chmod +x /usr/bin/steam    # Steam works at 8 PM
0 22 * * * chmod -x /usr/bin/steam    # Steam stops at 10 PM
@reboot    chmod -x /usr/bin/steam    # Steam starts off
0 22 * * * pkill steam               # Close Steam at 10 PM
@reboot    pkill steam               # Clear Steam at boot
```

## Better Defaults Matter

Save your willpower for important choices. Don't waste it fighting the same urges every day. Technical barriers help by making certain choices take more work.

It's like having a friend hide your phone while you study, but more reliable. The goal isn't to never play games or use social media. It's to set specific times for these things that match what you really want to do with your time.

## The Point

Companies profit when we can't control our attention. We need systems to protect us from habits we know are bad for us. Yes, it's strange to use tech to solve problems tech created. But maybe that's what we need now: tools that limit our choices instead of multiplying them.
