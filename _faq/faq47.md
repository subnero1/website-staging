---
layout: default
title: How do I configure RS232 on Subnero modems?
search_content: How do I configure RS232 on Subnero modems?
faq_section: device-settings
---

RS232 interfaces on Subnero modems can be configured for specific modes (e.g., Groovy shell, AT commands, or UnetStack API). By default, RS232 is not active. To enable the Groovy shell:
1. Access the modem’s web interface and open the script editor.
2. Modify the startup.groovy script by uncommenting the relevant line, e.g.: iface API, '/dev/rs232', 115200, 'N81'
3. Save the changes and reboot the modem.
