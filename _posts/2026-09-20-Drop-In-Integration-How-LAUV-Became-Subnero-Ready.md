---
layout: pulse_post
title: Drop-In Integration - New Case Study on How the LAUV Became Subnero Ready
banner: images/case-study-banner-lauv.jpg
date:  2026-09-10
categories: case-study partnership
thumbnail: images/case-study-thumbnail-lauv.jpg
description: A new case study shows how the Acoustic Research Laboratory at NUS integrated a Subnero smart modem into an OceanScan MST LAUV running Dune, with no changes to the modem, the vehicle, or the software on either side.
---

<div class="post-main" markdown="1">

**Singapore, 20 September 2026**: [Subnero](https://subnero.com/){:target="_blank"} today announced the release of a new case study documenting how the [Acoustic Research Laboratory (ARL)](https://arl.nus.edu.sg/){:target="_blank"} at the National University of Singapore integrated a Subnero smart modem into an [OceanScan MST LAUV](https://www.oceanscan-mst.com/light-autonomous-underwater-vehicle/){:target="_blank"}, with no changes to the modem, the vehicle, or the software on either side. Subnero smart modems are now natively supported in the LAUV.

ARL needed a capable AUV for a range of demanding projects in challenging conditions: shallow tropical waters, the strong currents of the Singapore Strait, and operations close to busy shipping channels. They chose the LAUV, and to give it command and control that could stand up to those conditions, they integrated a Subnero smart modem. The LAUV runs on the Dune software ecosystem, and no integration with Subnero modems existed.

ARL wrote the bridge itself, with no input from Subnero. It is a pair of small UnetStack agents, LAUVModem on the vehicle modem and MantaModem on the topside modem, written in Groovy and running on the modems themselves, so no companion computer or extra hardware went into the vehicle. No source code was modified on either side: Dune was not patched and UnetStack was not touched. On the Dune side there is no new code at all, only a short block of configuration using a task Dune already ships with. The integration code is open source at [github.com/org-arl/unet-dune](https://github.com/org-arl/unet-dune){:target="_blank"}, and includes a two-node simulator and a self-test that verifies the bridge round trips in both directions, so the whole thing can be tried on a laptop without any hardware.

Subnero shipped the modems to [OceanScan MST](https://www.oceanscan-mst.com/){:target="_blank"} along with GA drawings and electrical interface details, and OceanScan MST handled the mechanical and electrical integration and wrote no software at all. The work divided cleanly across the three parties: ARL owned the software, OceanScan MST owned the mechanical and electrical fit, and Subnero supplied an open configuration modem and its specifications. OceanScan MST then validated the result in their own testing environment, and the entire integration and validation took less than a week.

Since the integration, ARL has been operating the vehicle and its acoustic link for more than a year, in precisely the conditions the lab set out to work in, and across that time the link has delivered strong performance and reliable communication in the field.

> "Having a reliable acoustic link changed how we run missions. Instead of launching the vehicle and waiting, we know what it is doing the whole time. In conditions like ours that is the difference between hoping and operating," said _Bharat, ARL, NUS_.

> "On our side, it was a straightforward mechanical and electrical fit, simpler than similar integrations we have carried with other modems. The modem went in, and the team was ready to go to the water," said _Luis Madureira, OceanScan MST_.

> "Because neither side had to be modified, the work was clean. We translated between two interfaces, tested our patch and went to the field. That is the whole story," said _Rajat, ARL, NUS_.

LAUV operators can now fit a Subnero modem as a drop-in, and the LAUV team at OceanScan MST can support Subnero modem integration requests for any customer. ARL carried out the work on its own terms and with its own tools, without depending on Subnero at any step, and the code is open source for anyone to build on.

**About Subnero**  
Subnero builds underwater wireless communication and networking systems: the WNC series of acoustic smart modems, the UnetStack software stack, and the SWIS family of integrated solutions, advancing the Internet-of-the-Oceans.

**About the Acoustic Research Laboratory**  
The Acoustic Research Laboratory (ARL) at the National University of Singapore conducts research in underwater acoustics, communication, and robotics, with a long record of field work in the challenging waters around Singapore.

**About OceanScan MST**  
OceanScan MST is an independent Portuguese company founded in 2008 as a spin-off from the Underwater Systems and Technology Laboratory at University of Porto. Its LAUV is a man-portable autonomous underwater vehicle deployed worldwide with thousands of hours of real world operation.

The full case study, titled [Drop-In Integration: How LAUV Became Subnero Ready]({{site.baseurl}}/user-stories/drop-in-integration-lauv/){:target="_blank"}, is available [here]({{site.baseurl}}/user-stories/drop-in-integration-lauv/){:target="_blank"} or as a [PDF download]({{site.baseurl}}/brochures/case-study-drop-in-integration-lauv.pdf){:target="_blank"}.

</div>

<div class="post-sidebar" markdown="1">

<a href="{{site.baseurl}}/brochures/case-study-drop-in-integration-lauv.pdf" title="Case Study PDF here" target="_blank" rel="noopener noreferrer" class="post-image-link" >
  ![Drop-In Integration: How LAUV Became Subnero Ready case study cover]({{site.baseurl}}/images/case-study-drop-in-integration-lauv-cover.jpg)
  *Download PDF*
</a>

##### Key Outcomes:

- Subnero modems natively supported in the OceanScan MST LAUV
- No changes to the modem, the vehicle, or the software on either side
- Bridge runs on the modems themselves, no companion computer
- Integration and validation completed in less than a week
- Acoustic ranging carried on the same link as the comms
- Open source at github.com/org-arl/unet-dune
- More than a year of reliable field operations in Singapore waters

<div class="static-content">
{% include postSidebar.html %}
</div>
</div>
