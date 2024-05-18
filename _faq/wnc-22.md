---
layout: default
title: What buffer capacity does your modem handle, and is there software flow control to allow us to manage the data flow efficiently?
search_content: What buffer capacity does your modem handle, and is there software flow control to allow us to manage the data flow efficiently?
faq_section: performance
---

All Gen4 modems are shipped with 32 GB of storage which can be upgraded to 1TB or more depending on the use case. We have two options available for flow control and to manage packet loss, and users can choose dynamically what they prefer. One option uses a batch stop-and-wait style protocol, transferring small batches of data, and ensuring successful transfer using acknowledgments. The second option uses erasure codes for much faster data transfer, with minimal acknowledgment overhead.