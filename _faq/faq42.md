---
layout: default
title: How can I use the modems to transmit and receive/record my own signals?
search_content: How can I use the modems to transmit and receive/record my own signals?
faq_section: other-features
---

Subnero modems support arbitrary waveform transmission and recording:

- **Recording**: Use the `bbrec` command to capture baseband samples or enable `bb.record=true` to store passband samples directly on the modem's storage.  
- **Streaming**: Configure `bb.bbscnt` or `bb.pbscnt` parameters for continuous baseband or passband data streaming.  
- **Detections**: Set `bbmon.enable=true` to record all detections (`RxBasebandSignalNtf`) from the baseband agent into a file named `signals-<timestamp>.txt`.  
- **Transmission**: Use the `bbtx` or `pbtx` commands to transmit baseband or passband signals.  

Refer to the [Unet Handbook](https://unetstack.net/handbook/unet-handbook_baseband_service.html) or relevant help topics for detailed guidance on these commands.
