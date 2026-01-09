---
layout: pulse_post
title: UnetStack Newsletter - April 2021
banner : images/banner-about.jpg
date:  2021-04-26
categories: unetstack press
thumbnail: images/pulse-thumbnail-unet.jpg
---

<div class="post-main" markdown="1">

## Unetstack v3.3 release

The latest version of UnetStack3 is now available for download.


UnetStack 3.3.0 includes the following new features:

- JSON event tracing framework
- Built-in `viztrace` tool to automatically draw sequence diagrams from JSON trace file
- Reporting of ambient noise level and received signal strength indicator (RSSI) in simulated `HalfDuplexModem`
- Capability to write agent in Julia


[Download UnetStack v3.3 now](https://unetstack.net/#downloads){:target="_blank"}


We also took this opportunity to release smaller improvements such as:

- Addition of  `NodeInfo`  for `roll` and simulated `pitch` , allowing AUVs to use orientation information in making intelligent decisions
- Broadcast of  `AboutToSleepNtf` message to enable agents to do housekeeping before taking a nap
- Inclusion of  `eternity`  as an alias for  `forever` for sleep scheduling to avoid any confusion
- Improved communication performance for UdpLink and OFDM links

Check out our [YouTube](https://www.youtube.com/channel/UCnwSva23AuUCFPqgI0kPvdw){:target="_blank"} channel for the [latest video](https://www.youtube.com/watch?v=H1522Aa1UuY){:target="_blank"} about this latest release, as well as our [blog](https://blog.unetstack.net/whats-new-in-UnetStack-3.3){:target="_blank"}.


</div>

<div class="post-sidebar" markdown="1">
  <!-- Add sidebar content here -->
  <div class="static-content">
  {% include postSidebar.html %}
  </div>
</div>
