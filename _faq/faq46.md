---
layout: default
title: How do I configure a static IP on Subnero modems?
search_content: How do I configure a static IP on Subnero modems?
faq_section: device-settings
---

To configure a static IP:
1. Locate the modem’s pre-assigned static IP address (default range: 192.168.42.2-254) on its label.
2. Connect the modem by plugging in the modem cable’s Ethernet connector to the user’s computer.
3. Access the modem’s web interface:
   - Assign a static IP (e.g., 192.168.42.1) to your computer on the same subnet.
   - Open a browser and navigate to the modem’s IP.
4. Use the shell to set or update the static IP:
   - `staticIP '192.168.1.214'` to assign a new IP.
   - `staticIP none` to remove the static IP.
   - `statcIP auto` to revert to the factory-assigned IP.
