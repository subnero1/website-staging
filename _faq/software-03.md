---
layout: default
title: Have you incorporated a multipath rejection algorithm and if so what does the guard-times look like?
faq_section: software
---

This is tunable. By default, we set multipath resilience to a delay spread of about 21 ms. Depending on expected channel conditions, this can be dynamically adjusted to be larger or smaller, with only a small impact on data rate. 
