---
layout: post
title: WNC-M25MPE3 Platinum Edition Embedded Configuration Modem
images: images/wnc-m25mpe3.jpg
excerpt:
  Platinum edition modems delivering performance under the toughest environmental conditions
categories: modem
---

WNC-M25MPE3 is a platinum edition underwater modem in embedded (AUV/sensor) configuration. Designed with ease of integration and flexibilty as the primary focus, this modem is ideal for integration to underwater platforms (AUVs, ROVs). These modems provide a flexible platform with a substantial computing power packed into a compact form factor. Delivering performance under the toughest environmental conditions, Subnero's platinum edition modems are designed to meet rigorous quality standards mandated by sectors such as defense, oil & gas and subsea engineering. All devices are subjected to environmental stress screening (PCBA and unit level) before shipment. They also meet IPC class 2 workmanship requirement of PCBA and are conformally coated. This modem also provides options for customization and extension at many levels, allowing network protocols as well as physical layer algorithms to be implemented and tested easily. The applications can be develeoped using a [simulator]({{ site.baseurl }}{% unetsim %}) before the commercial deployments. The modem runs the [UnetStack]({{ site.baseurl }}{% unetstack %}) underwater networking stack, and provides a wide-range of functionality such as data transmission, navigation, time synchronization, and networked operations.

## Technical specifications

|  Specification                |  Details                                                                             |
| ------------------------------| -------------------------------------------------------------------------------------|
|  **General**                  |                                                                                      |
|  Data rate                    |  0.5 kbps (Control link) Up to 15 kbps (Data link)                                   |
|  Communication range          |  up to 3 km (nominal, depending on channel conditions)                               |
|  Ranging precision            |  0.1 m                                                                               |
|  Doppler precision            |  up to 4 knots                                                                       |
|  Software framework           |  UnetStack (software-defined), www.unetstack.net                                     |
|  **Physical**                 |                                                                                      |
|  Operating depth              |  up to 300 m                                                                         |
|  Dimensions                   |  100 mm ∅, 200 m length (excluding transducer), Cylindrical form factor              |
|  **Qualification tests**      |                                                                                      |
|  Temperature, vibration, salinity, humidity              |  MIL-STD-810G                                             |
|  Air transportation, shock    |  MIL-STD-810E                                                                        |
|  EMI/EMC                      |  MIL-STD-461E                                                                        |
|  **Interface**                |                                                                                      |
|  Connectivity                 |  RS232, Ethernet, Acoustic commands                                                  |
|  Software interface           |  UnetStack agents (Java, Groovy, Python), Interactive web UI, Linux sockets, JSON/TCP|
|  **Power**                    |                                                                                      |
|  Power supply                 |  24 VDC (external)                                                                   |
|  **Acoustic**                 |                                                                                      |
|  Carrier frequency            |  24 kHz (typical)                                                                    |
|  Bandwidth                    |  16 kHz (nominal)                                                                    |
|  Source level                 |  max. 185 dB re 1 μPa @ 1 m (rms)                                                    |
|  Modulation (software-defined)|  PSK-OFDM, incoherent OFDM, FH-BFSK, JANUS (subject to operating frequency band)     |


Detailed documentation is available on the [UnetStack documentation page](https://www.unetstack.net/docs.html).
