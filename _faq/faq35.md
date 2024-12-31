---
layout: default
title: How do I time synchronize the modem?
search_content: How do I time synchronize the modem?
faq_section: other-features
---

Subnero modems feature two types of clocks to support time synchronization: the system clock and the baseband clock.
- The system clock provides OS time and retains time during power-off using an RTC. It is synchronizable via NTP.
- The baseband clock is used for timestamping and ranging, with a drift of ±100 ppb. External synchronization between modems is supported via PPS signal for timestamp alignment across modems. The captured timestamps are available on the baseband agent as `bb.syncSystemTime` and `bb.syncBasebandTime` which can be used for synchronization.

For applications requiring even lower drift, an optional OCXO clock (±25 ppb) is available. For more details about clock synchronization, contact us at sales@subnero.com.
