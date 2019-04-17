---
layout: post
title: Underwater modem with a co-processor
banner : images/banner-pulse-standard.jpg
date:  2019-04-17
categories: wnc
---

It is a common need for someone to integrate their own systems with the underwater modems. For example, a customer required a co-processor (NVIDIA Jetson TX1 module) to be connected to the underwater modem using a network interface over which the customer wanted to interact with the modems and develop their own algorithms and applications. Subnero underwater modems provide options for easy customization and extension. We took this customer requirement and provided a solution which is illustrated in the block diagram here:

![Block diagram of the custom modem with co-processor]({{site.baseurl}}/images/block.jpg){: .center-image  }

The custom modem built enclosed a modem along with a co-processor as shown in the figure. The external interface exposed the ethernet and power connectors to the modem. The co-processor was made accessible over SSH over a certain port on the same IP address as the modem. Once logged in to the co-processor, the customer was able to develop their applications and algorithms to run on the modem.

The best part is that the modem can be accessed from the co-processor using any of the standard Unet APIs. In order to be able to use the same APIs, `UnetStack` running on the Subnero underwater modems, provides a `Gateway` class. This class provides the user to communicate with the agents running in `UnetStack` on the modem. This class is utilized and the APIs are developed for the user to build their application upon. The APIs to interact with the modem from any computer (in this case the co-processor) are available in Groovy, C and Python. Interested reader can read more details on basic operations of modem using Gateway in this [blog article](https://blog.unetstack.net/basic-modem-operations-using-unetstack#disqus_thread). 

