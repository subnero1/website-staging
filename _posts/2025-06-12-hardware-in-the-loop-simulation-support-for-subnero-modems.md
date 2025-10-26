---
layout: post
title: Hardware-in-the-Loop Simulation Support for Subnero Modems
banner: images/banner-vao.jpg
date:  2025-06-12
categories: feature product-launch press
thumbnail: images/pulse-thumbnail-vao.jpg
---

We’re excited to announce hardware-in-the-loop (HIL) simulation support across our entire range of acoustic smart modems powered by UnetStack. This new capability is being launched at the OCEANS 2025 Conference in Brest, where we’ll also host live demonstrations at our booth.

This capability allows any Subnero modem running UnetStack v5 to be configured to interface with a local simulation environment—enabling early-stage testing and iteration before investing in costly and time-consuming at-sea deployments.

At the core of this simulation framework is the open-source [Virtual Acoustic Ocean (VAO)](https://github.com/org-arl/VirtualAcousticOcean.jl), which acts as the acoustic channel simulator, along with the [UASPv2 protocol](https://github.com/org-arl/VirtualAcousticOcean.jl/blob/main/docs/uasp2-protocol.md) for seamless communication integration. The platform supports industry-standard channel models and allows users to integrate their own channel models for even greater fidelity and customization.

Highlights of the new simulation support include:
* Supports all Subnero modems running UnetStack v5
* Connect multiple modems to a single VAO instance
* Customize propagation models for different environments
* Also compatible with UnetStack OEM Edition on SBCs

This high-fidelity simulation framework provides a cost-effective and scalable way to test underwater network performance, mission planning, and protocol design. Since Subnero’s modems are software-defined and run the exact same UnetStack software in and out of the water, the system behavior in simulation mirrors real-world deployments — contingent only on the accuracy of the chosen channel model.

Visit us at the OCEANS 2025 booth for a live demo featuring Subnero modems and OEM boards operating over simulated underwater channels. For a personalized demonstration or to learn more, contact us at sales@subnero.com or visit www.subnero.com.
