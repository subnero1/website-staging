---
layout: post
title: Software-defined Networking takes a big leap forward in underwater communications
date:  2013-09-01
categories: wireless-networked-communications
---

![right](/images/unet_post.png "UnetStack")

Commonly cited challenges in underwater networks include low bandwidth, long propagation delay, half-duplex nature of the links, high packet loss, and time-variability. To deploy successful networks in the face of such challenges, cross-layer information sharing, low-bandwidth design and accurate transmission/reception timing can be critical. Traditional layered network stacks provide good separation of concern, but result in sub-optimal protocols for underwater networks.

[UnetStack](http://www.unetstack.net/doc/html/index.html){:target="_blank"}, a Java/Groovy-based software-defined underwater network stack, takes a different approach. It consists of a collection of software agents that provide well-defined services to allow good separation of concern while allowing information to be shared, services to be provided, and behaviors to be negotiated between different agents. The resulting solution is flexible and allows software-defined underwater networks to be rapidly designed, simulated, tested and deployed.

UnetStack has been developed over several years, and tested through numerous underwater network experiments at sea.  A community version of UnetStack has recently been made freely available for academic and research use.  This version allows rapid development and simulation of underwater networking protocols.  Once protocols are developed and testing using this framework, they can be deployed without the need for porting in any [UnetStack-compliant underwater modem](/technology) for field use.
