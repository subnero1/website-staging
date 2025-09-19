---
layout: default
title: What does the noise in the modem’s UI represent?
search_content: What does the noise in the modem’s UI represent?
faq_section: performance
---

The noise is based on the `bb.noise` value, measured in dB relative to full-scale (0 dB = fully saturated ADC). Typical values range between -80 to -50 dB. This is best interpreted as a relative scale, useful for estimating SNR when compared with RSSI (reported during a reception), rather than as an absolute SPL calibration. The reported RSSI should be at least 10 dB above `bb.noise` for reliable detection. 
