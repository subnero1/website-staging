---
layout: default
title: Is the UnetSocket API thread-safe?
search_content: Is the UnetSocket API thread-safe?
faq_section: unetstack
---

Yes, it supports safe concurrent usage similar to Unix-style sockets. You can transmit from one thread and receive from another. However, simultaneous transmissions from multiple threads may interfere with each other unless properly synchronized. Using standard mutex/locking mechanisms is recommended.
