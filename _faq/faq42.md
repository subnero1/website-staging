---
layout: default
title: How can I use the modems to transmit and receive/record my own signals?
search_content: How can I use the modems to transmit and receive/record my own signals?
faq_section: other-features
---

Subnero modems support arbitrary waveform transmission and recording:
- Recording: Use commands like `bbrec` for baseband samples or `bb.record=true` for long-term storage.
- Streaming: Configure continuous waveform data using parameters like `bb.bbscnt`.
- Transmission: Use `bbtx` or `pbtx` commands for custom signal transmission.

Refer to the [Unet Handbook](https://unetstack.net/handbook/unet-handbook_baseband_service.html) or help text for detailed guidance on these commands.
