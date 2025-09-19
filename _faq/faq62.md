---
layout: default
title: Can I send a new scheme code and power level to a remote modem?
search_content: Can I send a new scheme code and power level to a remote modem?
faq_section: performance
---

Yes, use a `LinkSchemeReq` via the tuner agent:

`tuner << new LinkSchemeReq(to: <address>, schemecode: "<code>", powerLevel: <level>)`
