---
layout: page
title:  Underwater Network Simulator
banner : images/banner-unetsim.jpg
thumbnail : images/thumbnail-unetsim.jpg
excerpt:
  Simulator for underwater networks of the future
categories: software
section_id: products
---

The UnetSim underwater network simulator enables a network engineer to simulate an underwater network on a single computer. It allows [UnetStack]({{ site.baseurl }}{% link products/unetstack.md %}) agents and protocols to be simulated in realistic channel conditions, with minimum effort. The simulator was designed with two key goals:

- To be easy to learn and use, and
- To allow agent implementations to be shared between deployment environment and simulation environment (no porting required).

Essentially, once a protocol is developed and tested in simulation, it is ready to be deployed and tested at sea in any UnetStack-compatible modem.

The simulator is available free-of-charge for download from [www.unetstack.net](https://unetstack.net/#downloads).

## How does it work?

A simple script written in a [domain-specific language](https://unetstack.net/handbook/unet-handbook_writing_simulation_scripts.html) (DSL) allows users to describe a simulation scenario in a natural way. This significantly reduces the barrier to entry for new users. A sample simulation DSL script is shown below:

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

Detailed documentation is available on the [UnetStack documentation page](https://unetstack.net/index.html#docs).
