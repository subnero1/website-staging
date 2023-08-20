---
layout: default
title: How are you handling the challenges which present themselves if the transmitter is submerged in waters with a depth of only 2m?
faq_section: performance
---

The key challenge in such shallow depths is Lloyd’s mirror and multipath. At 2 m water depth and 200 m range, simple geometrical calculations show that Lloyd’s mirror only becomes a serious problem below 10 kHz. We operate at the 20-32 kHz band, and so don’t expect this to be a major challenge. The multipath will be quite long, depending on the seabed conditions. We can deal with that by adjusting the modulation scheme to be robust to the expected multipath. Unless we know the bottom type, etc in detail, it is hard to predict what the multipath spread would be. But the trade off of adjusting the modulation scheme is data rate. To make it easier, UnetStack4 onwards, we support communication profiles that the user can select to vary the level of throughput to achieve robust communication performance.