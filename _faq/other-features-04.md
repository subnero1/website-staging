---
layout: default
title: How do I time synchronize the modem?
faq_section: other-features
---

There are multiple ways to time sync modems. If you are interested in time syncing two modems acoustically, we have a time sync & ranging protocol that’ll do it. The expected accuracy will be about 100 µs. Alternatively, if you want to sync them over a wired network, you can send a command to all modems to sync their time. The accuracy will depend on the wired network latency and connection, but perhaps in the order of 10-100 µs. If you need something more accurate (but wired), sync can be achieved through digital GPIO that can be externally triggered at the same time on various modems. This can achieve <10 µs accuracy.
