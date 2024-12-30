---
layout: default
title: How do I time synchronize the modem?
search_content: How do I time synchronize the modem?
faq_section: other-features
---

Subnero modems feature two types of clocks to support time synchronization: the system clock and the baseband clock.
- System Clock: Provides OS time and retains time during power-off using an RTC. Synchronizable via NTP.
- Baseband Clock: Used for timestamping and ranging, with a drift of ±100 ppb.

Additionally, external synchronization is supported via PPS signals, enabling precise timestamp alignment across modems. An optional OCXO clock (±25 ppb) is available for applications needing extremely low drift. For more details about clock synchronization, contact us at sales@subnero.com.
