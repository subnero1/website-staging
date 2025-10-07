---
layout: default
title: What is the difference between CONTROL and DATA channels, and when should I use them?
search_content: What is the difference between CONTROL and DATA channels, and when should I use them?
faq_section: performance
---

Subnero modems running UnetStack support at least two logical channels at the physical layer: `CONTROL` and `DATA`. The DATA channel is optimized for transmitting user data using higher-rate modulations such as OFDM. When you send a `DatagramReq()`, UnetStack intelligently chooses how to transmit the data, typically using the `DATA` channel, but leveraging the `CONTROL` channel when needed for added robustness or protocol-level signaling.

The `CONTROL` channel is primarily reserved for internal coordination between modems, such as sending updates or link tuning, and uses low-rate, robust FH-BFSK modulation by default. While users can access this channel at the physical layer, it is not recommended for regular data transmission (except for certain specific use cases). Instead, by using `DatagramReq()`, the stack will automatically make smart decisions on how to split or schedule transmissions across the `CONTROL` and `DATA` channels. This helps ensure reliability and performance based on the message and environment.
