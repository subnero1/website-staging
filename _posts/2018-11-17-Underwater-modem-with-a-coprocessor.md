---
layout: post
title: Unlocking the Power of Edge Processing with Subnero’s Coprocessor
banner : images/banner-pulse-custommodem.jpg
date:  2018-11-17
categories: product-launch feature
thumbnail: images/pulse-thumbnail-modems.jpg
---

In the world of underwater communications, Subnero’s acoustic modems have long been known for their robust performance. However, with the rapid advancement of research and underwater technologies, there is a growing need for more computational power at the edge, especially for complex algorithms and processing. This is where Subnero’s coprocessor option comes into play.

### When Do You Need a Coprocessor?

For many underwater applications, users often find themselves needing to run algorithms or processes directly within the modem, without the need for constant communication with topside systems. This is particularly useful in scenarios where real-time processing is essential, or where acoustic bandwidth is limited.

#### 1. **Acoustic Research with Custom Waveforms**

For acoustic researchers, the ability to implement custom physical layer algorithms is often crucial. Subnero’s modems allow users to define arbitrary waveforms for transmission and reception. With the coprocessor, researchers can take this a step further and implement their own physical layer (PHY) and waveform strategies directly within the modem. Whether it’s testing new transmission protocols or experimenting with unique waveform detection methods, the coprocessor offers the flexibility to transform Subnero’s modem into a custom tool tailored to specific research needs.

#### 2. **Higher Layer Research (MAC, Link, Network, Transport)**

In underwater communications, research doesn’t stop at the physical layer. Often, researchers and developers are looking to create and test algorithms for higher layers such as Media Access Control (MAC), link protocols, network management, or transport protocols. With the coprocessor, users can implement UnetStack agents directly into the modem, turning it into a fully-fledged subsea networking device. This enables the creation of an underwater "Internet," where users can develop, test, and deploy new communication strategies using Subnero's smart modems.

#### 3. **Data Processing at the Edge**

In some applications, the need for efficient data transfer is paramount, but sending all collected data directly to the surface can be both costly and inefficient, especially when acoustic bandwidth is a precious resource. This is particularly true when dealing with large datasets from sensors like ADCPs, temperature, pressure, and other monitoring devices. Users can take advantage of the coprocessor to pre-process this data before transmission, reducing the need for high-bandwidth transmissions and conserving both power and acoustic bandwidth. This is crucial for long-term deployments where conserving resources is key.

### How Does Subnero Achieve This?

Subnero’s coprocessor is a powerful computing unit housed within the same pressure-rated hull as the modem itself. This modular, integrated solution gives users the flexibility to run compute-intensive applications at the edge of the network—directly within the modem. The coprocessor allows for seamless integration and provides users with the ability to access it just like a regular Linux computer over a secure shell (ssh). Whether you are running machine learning models, physical layer algorithms, or data analytics, the coprocessor provides the computing power necessary for modern underwater applications.

![Block diagram of the custom modem with co-processor]({{site.baseurl}}/images/block.jpg){: .center-image  }

### Coprocessor for Machine Learning at the Edge

One of the most compelling applications of the coprocessor is its ability to run machine learning models at the edge. With the power of GPUs integrated into the coprocessor, researchers can implement real-time data analytics, enabling them to make decisions based on sensor data before it even reaches the surface. This is particularly useful in autonomous vehicles and underwater robotics, where onboard decision-making is essential for operational efficiency and safety.

### Why Use a Coprocessor?

**1. Reducing Latency:** By performing edge processing, you can significantly reduce the time it takes to process and act on critical data, allowing for fast decision making in dynamic environments.

**2. Conserving Bandwidth and Power:** Sending processed data instead of raw data reduces the need for high-bandwidth communication, optimizing both power usage and the use of limited acoustic bandwidth.

**3. Customization and Flexibility:** The coprocessor transforms Subnero’s modems into highly customizable systems. Whether you need to implement your own transmission algorithms or create a fully integrated underwater communication network, the coprocessor gives you the flexibility to innovate.

**4. Scalability:** As your applications evolve, so too can the capabilities of your modem. The coprocessor can support a wide variety of applications, from simple data logging to complex real-time analytics, making it a versatile solution for many different use cases.

### Learn More About the Coprocessor

If you’re interested in adding edge processing to your underwater communication system, Subnero’s coprocessor is available as an optional accessory for our modems. With this accessory, you gain access to the full power of the modem's capabilities, including advanced processing, machine learning, and custom algorithm development, all within the robust and pressure-rated housing of Subnero’s acoustic modems.

<a href="{{site.baseurl}}/products/gen4x/co-processors.html">Explore the Coprocessor Accessory Here.</a>
