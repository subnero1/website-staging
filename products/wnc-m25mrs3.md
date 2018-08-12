---
layout: post
title: WNC-M25MRS3 Research Edition Surface Configuration Modem
banner : images/wnc-m25mrs3.jpg
excerpt:
  Research edition modems aimed directly at academic researchers and underwater technology enthusiasts
categories: modem
section_id: products
---

WNC-M25MRS3 is a reserach edition underwater modem suitable for the academic researchers and underwater technology enthusiasts. These modems provide a flexible platform with a substantial computing power packed into a compact form factor. Our research edition modems are designed to bridge the gap between developing applications using a [simulator]({{ site.baseurl }}{link products/unetsim.md}) and high-end commercial deployments. This modem also provides options for customization and extension at many levels, allowing network protocols as well as physical layer algorithms to be implemented and tested easily. The modem runs the [UnetStack]({{ site.baseurl }}{link products/unetstack.md}) underwater networking stack, and provides a wide-range of functionality such as data transmission, navigation, time synchronization, and networked operations.

## Technical specifications

|  Specification                |  Details                                                                             |
| ------------------------------| -------------------------------------------------------------------------------------|
|  **General**                  |                                                                                      |
|  Data rate                    |  0.5 kbps (Control link) Up to 15 kbps (Data link)                                   |
|  Communication range          |  up to 1 km (nominal, depending on channel conditions)                               |
|  Ranging precision            |  0.1 m                                                                               |
|  Doppler precision            |  up to 4 knots                                                                       |
|  Software framework           |  UnetStack (software-defined), www.unetstack.net                                     |
|  **Physical**                 |                                                                                      |
|  Operating depth              |  up to 100 m                                                                         |
|  Housing                      |  Plastic / Aluminium                                                                 |
|  **Interface**                |                                                                                      |
|  Connectivity                 |  RS232, Ethernet, Acoustic commands                                                  |
|  Software interface           |  UnetStack agents (Java, Groovy, Python), Interactive web UI, Linux sockets, JSON/TCP|
|  **Acoustic**                 |                                                                                      |
|  Carrier frequency            |  24 kHz (typical)                                                                    |
|  Bandwidth                    |  16 kHz (nominal)                                                                    |
|  Source level                 |  max. 180 dB re 1 μPa @ 1 m (rms)                                                    |
|  Modulation (software-defined)|  PSK-OFDM, incoherent OFDM, FH-BFSK, JANUS (subject to operating frequency band)     |
|  **Additional Information**   |                                                                                      |
|  Available configurations     |  Surface (gateway), node (standalone) and embedded (AUV/sensor) configurations       |


Detailed documentation is available on the [UnetStack documentation page](https://www.unetstack.net/docs.html).
