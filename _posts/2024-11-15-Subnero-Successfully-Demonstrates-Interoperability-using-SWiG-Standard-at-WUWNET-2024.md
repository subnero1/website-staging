---
layout: pulse_post
title: Subnero Successfully Demonstrates Interoperability using SWiG Standard at WUWNET 2024
banner: images/banner-pulse-swig-interop.jpg
date:  2024-11-15
categories: event case-study press
thumbnail: images/pulse-thumbnail-swig-interop.jpg
---

<div class="post-main" markdown="1">

Subnero recently participated in an interoperability test at the WUWNET 2024 conference in Šibenik, Croatia. The goal of the event was to demonstrate seamless communication between acoustic modems from various vendors using the Subsea Wireless Group's (SWiG) acoustic Level 1 standard specification. We were thrilled to successfully showcase interoperability alongside EvoLogics GmbH, WSENSE and NORCE (research modem) during an in-water demonstration in the Adriatic Sea.

![SWiG interoperability demonstration setup at WUWNET 2024, Croatia]({{site.baseurl}}/images/swig-interop.png)
*SWiG interoperability demonstration setup at WUWNET 2024, Croatia*
{: .post-image-wrap}

The test setup consisted of one transmitter and four receivers from various participating companies. The transmitting modem broadcasted positioning messages using the SWiG Level 1 standard, while the receivers from various vendors decoded and displayed the information. The shallow water depth and rocky bottom provided a challenging acoustic propagation environment, but it effectively demonstrated the functionality of the SWiG standard in real-world conditions. 

The test day unfolded as follows. The transmitter modem on a moving boat transmitted SL1 messages containing its location every few seconds. The receivers on the pier successfully decoded these messages and displayed the results in real-time on a map. A research modem from NORCE also served as a hydrophone, providing real-time spectrograms of the underwater transmissions.

At the same time, another research modem transmitted High Data Rate Channel (HDC) packets based on the Dual Channel Acoustic Protocol (DCAP), while the transmitter modem on the boat continued to send positioning messages. The receiving modems attempted to simultaneously decode both waveforms. If the HDC packets could not be decoded, the receivers would switch to decoding Simultaneous Multiple Access Channel (SMAC) packets from DCAP. The test successfully demonstrated the flexibility of DCAP for handling different data transmission needs.

We at Subnero are excited by the outcome of this successful interoperability test.  This collaboration between multiple vendors paves the way for more standardized and interoperable subsea acoustic communication solutions in the future.  We look forward to continued innovation and partnerships within the SWiG community.

**Social media highlights:**

* Subnero: "We were thrilled to successfully demonstrate interoperability with other vendors such as EvoLogics GmbH and WSENSE using the hashtag#SWiG standard during an in-water demonstration in the Adriatic Sea." <a href="https://www.linkedin.com/posts/subnero_swig-wuwnet2024-swig-activity-7259144995218075648-7h0F" target="_blank">Link</a>

* EvoLogics GmbH: "Our team has just returned from beautiful Šibenik, Croatia, where EvoLogics, Subnero, and WSENSE collaborated to successfully showcase interoperability among our underwater modems at the SWiG event during the #WUWNet conference." <a href="https://www.linkedin.com/posts/evologics-gmbh_evologics-wuwnet-norce-activity-7259873544346472448-KrE7" target="_blank">Link</a>

* WSENSE:  "Our recent participation in the #SWiG (Subsea Wireless Group) demonstration in Šibenik, Croatia, marked a significant step forward in underwater interoperability!" <a href="https://www.linkedin.com/posts/wsense_swig-wsense-swigacoustic-activity-7261708120257675264-68mq" target="_blank">Link</a>

</div>

<div class="post-sidebar" markdown="1">
  <!-- Add sidebar content here -->
  <div class="static-content">
  {% include postSidebar.html %}
  </div>
</div>
