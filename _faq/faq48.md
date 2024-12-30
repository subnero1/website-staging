---
layout: default
title: How do I use transparent mode in Subnero modems?
search_content: How do I use transparent mode in Subnero modems?
faq_section: device-settings
---

Transparent mode (or Portals) enables direct data transfer between endpoints without modem processing, simplifying integration with external systems. However, it is generally discouraged due to the lack of control over communication performance (e.g., error handling and retransmissions).

To set up a portal over RS232:
1. Use this shell command: container.add 'portal', new org.arl.unet.portal.Portal('/dev/rs232', 9600, 'N81')
2. Customize the baud rate (e.g., 9600) and settings (e.g., N81) as needed.
3. Connect to the modem’s serial port using a terminal application like minicom to send and receive text.

For more information, see the Portals chapter in the Unet Handbook: [https://unetstack.net/handbook/unet-handbook_portals.html](https://unetstack.net/handbook/unet-handbook_portals.html)