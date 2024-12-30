---
layout: default
title: How do I configure a static IP on Subnero modems?
search_content: How do I configure a static IP on Subnero modems?
faq_section: device-settings
---

To configure a static IP:
1. Locate the modem’s pre-assigned static IP address (default range: 192.168.42.x) on its label.
2. Access the modem’s web interface:
   1. Assign a static IP (e.g., 192.168.42.1) to your computer on the same subnet.
   2. Open a browser and navigate to the modem’s IP.
3. Use the shell to set or update the static IP:
   1. staticIP '192.168.1.214' to assign a new IP.
   2. staticIP none to remove the static IP.
   3. statcIP auto to revert to the factory-assigned IP.
4. Save the settings with the savestate command to make them persistent after reboot.

Refer to the user manual for more details.