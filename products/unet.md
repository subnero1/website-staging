---
layout: page
title: Underwater Network Technology
banner : images/banner-unetsim.jpg
thumbnail: images/boxart-unet.jpg
categories: unet
section_id: products
---

Commonly cited challenges in underwater networks include low bandwidth, long propagation delay, half-duplex nature of the links, high packet loss, and time-variability. To deploy successful networks in the face of such challenges, it is important to use highly optimized protocols that are specially designed for use in such networks. Specifically, cross-layer information sharing, low-bandwidth design and accurate transmission/reception timing can be critical in these protocols. Traditional layered network stacks provide good separation of concern, but result in sub-optimum protocols. Cross-layer optimization initiatives address this shortcoming by allowing direct interaction between layers.

## UnetStack : The Underwater Network Stack

UnetStack is a flexible agent-based underwater network stack that allows software-defined underwater networks to be rapidly designed, simulated, tested and deployed. The stack runs on an underwater modem or on a host computer connected to the modem, transforming the modem into a sophisticated network node. UnetStack can also serve as a gateway to private terrestrial or satellite networks, or to the Internet.

![UnetStack]({{site.baseurl}}/images/unetstack3.png){: .center-image  }

UnetStack consists of a collection of software agents that provide [well-defined services](https://unetstack.net/handbook/unet-handbook_services_and_capabilities.html){:target="_blank"}. This framework provides good separation of concern while allowing information to be shared, services to be provided, and behaviors to be negotiated between different agents. The resulting network stack is flexible and allows software-defined underwater networks to be rapidly designed, simulated, tested and deployed.

UnetStack defines commonly needed agents with services, messages, capabilities and parameters. The stack is extensible, allowing agents to provide additional services that may be used by other agents for the development of optimized network protocols. Although the stack focuses on underwater networks, it allows wired and wireless radio links to be included as part of the network.

UnetStack runs on all Subnero modems, but can be easily customized to run on modems from other manufacturers. For licensing information, please [contact us]({{ site.baseurl }}{% link contact/index.md %}).

## UnetSim : The Underwater Network Simulator

The UnetSim underwater network simulator enables a network engineer to simulate an underwater network on a single computer. It allows UnetStack agents and protocols to be simulated in realistic channel conditions, with minimum effort. The simulator was designed with two key goals:

- To be easy to learn and use, and
- To allow agent implementations to be shared between deployment environment and simulation environment (no porting required).

Essentially, once a protocol is developed and tested in simulation, it is ready to be deployed and tested at sea in any UnetStack-compatible modem.

The simulator is available free-of-charge for download from [www.unetstack.net](https://unetstack.net/downloads/){:target="_blank"}.

## How does it work?

A simple script written in a [domain-specific language](https://unetstack.net/handbook/unet-handbook_writing_simulation_scripts.html){:target="_blank"} (DSL) allows users to describe a simulation scenario in a natural way. This significantly reduces the barrier to entry for new users. A sample simulation DSL script is shown below:

```java
channel.soundSpeed = 1500.mps
modem.dataRate     = [800.bps, 2400.bps]
modem.frameLength  = [16.bytes, 64.bytes]
modem.powerLevel   = [0.dB, 0.dB]

simulate 1.hour, {
  def buoy1 = node('Buoy-1', location: [0, 0, 0])
  def buoy2 = node('Buoy-2', location: [1.km, 500.m, 0])
  def auv1  = node('AUV-1', location: [0, 100.m, 0], mobility: true)
  auv1.motionModel = [speed: 1.mps, turnRate: 1.dps]
}
```

The simulator is highly customizable, with the ability to support user-defined modem behavioral models, physics-based channel models, various motion models, customized trace file formats, etc.

Detailed documentation is available on the [UnetStack documentation page](https://www.unetstack.net/docs.html){:target="_blank"}.

<h2>Brochures</h2>
<div class="brochure-container">
  <a href="{{site.baseurl}}/brochures/UnetStack-Brochure-v3.0.pdf"><img class="brochure-thumb" src="{{site.baseurl}}/brochures/unetstack3.jpg"></a>
  <a href="{{site.baseurl}}/brochures/UnetStack-Brochure-v3.0.pdf" target="_blank" style="font-size: 1.2em;">UnetStack3</a>
</div>
