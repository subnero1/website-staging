---
layout: post
title: Platinum Edition Modems
banner : images/banner-platinum.jpg
thumbnail : images/thumbnail-wnc-m25mpn3.jpg
excerpt:
  Platinum edition modems delivering performance under the toughest environmental conditions
categories: modem
section_id: products
---

Delivering performance under the toughest environmental conditions, Subnero's platinum edition modems are designed to meet rigorous quality standards mandated by sectors such as defense, oil & gas and subsea engineering. All devices are subjected to environmental stress screening (PCBA and unit level) before shipment. They also meet IPC class 2 workmanship requirement of PCBA and are conformally coated. This modem also provides options for customization and extension at many levels, allowing network protocols as well as physical layer algorithms to be implemented and tested easily.

<div class='full' style='background: #f5f5f5'>
	<div class ='product' style='width:98.7%'>
		<img alt="" src="{{site.baseurl}}/images/boxart-wnc-m25mpn3.jpg"/>
		<div class='small-3 columns'>     
		</div>
		<div class='small-8 columns'>
			<div class='content'>
				<h3 style="text-transform: none;">Node Configuration</h3>
				<p>A modem in the node configuration operates on batteries and can be deployed in a standalone mode.</p>
			</div>
		</div>
	</div>


  <div class ='product' style='background:#F5F5F5;'>
  		<div class='small-8 columns'>
  			<div class='content'>
  				<h3 style="text-transform: none;">Surface Configuration</h3>
  				<p>A modem in the surface configuration operates on external power source and can be deployed from the surface.</p>
  			</div>
  		</div>
  		<div class='small-3 columns'>
  			<img style='float:right;margin-bottom: 0 auto' alt="" src="{{site.baseurl}}/images/boxart-wnc-m25mps3.png"/>
  		</div>
  </div> 

  <div class ='product' style='width:98.7%;'>
  		<img class='img-rounded' alt="" src="{{site.baseurl}}/images/boxart-wnc-m25mpe3.jpg"/>
  		<div class='small-3 columns'>      
  		</div>
  		<div class='small-8 columns'>
  			<div class='content'>
  				<h3 style="text-transform: none;">Embedded Configuration</h3>
  				<p>Designed with ease of integration and flexibilty as the primary focus, this modem is ideal for integration to underwater platforms (AUVs, ROVs).</p>
  			</div>
  		</div>
  </div>
</div>

The applications can be develeoped using a [simulator]({{ site.baseurl }}{link products/unet.md}) before the commercial deployments. The modem runs the [UnetStack]({{ site.baseurl }}{link products/unetstack.md}) underwater networking stack, and provides a wide-range of functionality such as data transmission, navigation, time synchronization, and networked operations.

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
|  Housing                      |  Aluminium                                                                           |
|  **Qualification tests**      |                                                                                      |
|  Temperature, vibration, salinity, humidity              |  MIL-STD-810G                                             |
|  Air transportation, shock    |  MIL-STD-810E                                                                        |
|  EMI/EMC                      |  MIL-STD-461E                                                                        |
|  **Interface**                |                                                                                      |
|  Connectivity                 |  RS232, Ethernet, Acoustic commands                                                  |
|  Software interface           |  UnetStack agents (Java, Groovy, Python), Interactive web UI, Linux sockets, JSON/TCP|
|  **Acoustic**                 |                                                                                      |
|  Carrier frequency            |  24 kHz (typical)                                                                    |
|  Bandwidth                    |  16 kHz (nominal)                                                                    |
|  Source level                 |  max. 185 dB re 1 μPa @ 1 m (rms)                                                    |
|  Modulation (software-defined)|  PSK-OFDM, incoherent OFDM, FH-BFSK, JANUS (subject to operating frequency band)     |


Detailed documentation is available on the [UnetStack documentation page](https://www.unetstack.net/docs.html).
