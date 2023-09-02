---
layout: default
title: Are we bound to use the features enabled by the API or is it possible to get access to lower level functionality of the modems?
search_content: Are we bound to use the features enabled by the API or is it possible to get access to lower level functionality of the modems?
faq_section: hardware
---

The main processing unit is available to the user for development of Java/Groovy agents. The modem can also be accessed over other APIs (Python/C etc), but from an external processor. If you require native C or Python code to run within the modem, we can provide a co-processor (which is an ARM CPU with GPU support) along with the modem as an option. This co-processor will be located inside the modem and a user will be able to access it through ssh.
