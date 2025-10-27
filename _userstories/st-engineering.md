---
layout: default
title: ST Engineering
sub_title: Connecting the Ocean&colon; Deployment of an Underwater Cellular Network in Singapore
excerpt: An underwater network deployed in Singapore’s tropical waters demonstrated seamless communication, handovers, and real-time AUV tracking. This user story highlights how Subnero and ST Engineering UIS are shaping the future of subsea connectivity.
preview_image: /images/story-st.jpg
date: 2025-10-21
---

<div class="user-stories">
  <section class="sec-hero" style="background-image: url({{site.baseurl}}/images/hero-solutions.jpg);" >
    <div class="hero-content">
      <h4>User Story</h4>
      <h1>{{ page.sub_title }}</h1>
    </div>
  </section>
  <section class="story-section">
    <h2>Overview</h2>
    <p>The need for reliable underwater communication is growing rapidly as the number of subsea assets increases. From autonomous underwater vehicles (AUVs) performing offshore inspections to divers conducting critical missions, continuous communication and tracking are essential for safety, efficiency, and mission success.</p>
    <p>To address this, Subnero, in collaboration with ST Engineering Unmanned & Integrated Systems (ST UIS), carried out one of the first commercial deployments of underwater networks designed for resource sharing between multiple users from defense, commercial, and research domains, much like the Internet.</p>
    <h2>Key Goals</h2>
    <ul class="list-normal">
      <li><b>Demonstrate the feasibility of underwater cellular networking,</b> adapting terrestrial cellular principles for subsea communication.</li>
      <li><b>Enable continuous two-way communication and tracking</b> of underwater assets such as AUVs across multiple coverage zones.</li>
      <li><b>Validate multi-user network resource sharing,</b> supporting defense, commercial, and research operations within a unified subsea network.</li>
    </ul>
    <h2>Deployment Setup</h2>
    <p>The network was established using navigational buoys instrumented with Subnero’s acoustic smart modems, forming subsea base stations. These buoys created overlapping coverage areas, much like cellular towers on land.</p>
    <ul class="list-normal">
      <li>A three-base-station network was deployed in Singapore waters.</li>
      <li>An AUV equipped with a Subnero modem served as the mobile asset moving between coverage zones.</li>
      <li>A central network controller coordinated the system, enabling communication, handovers, and tracking.</li>
    </ul>
    <p>This setup enabled continuous two-way communication between the AUV and the topside controller, while also providing real-time location tracking whenever the vehicle was within range of three or more base stations.</p>
    <h2>Test Procedure</h2>
    <ol class="list-normal">
      <li>The AUV was instructed to perform a transit between the three buoy-based base stations, simulating operations where an asset moves across multiple coverage zones.</li>
      <li>Subnero’s modems enabled acoustic communication links with each base station, which relayed data back to the controller.</li>
      <li>During the trials, both communication performance (packet transmission, command & control, telemetry) and localization accuracy were monitored.</li>
      <li>The tests were performed jointly by Subnero and ST UIS, demonstrating the system’s ability to maintain seamless connectivity and location awareness.</li>
    </ol>
    <h2>Results</h2>
    <div class="list-styled">
      <div>
        <h4>Continuous Communication</h4>
        <p>The AUV maintained uninterrupted connectivity throughout its transit, even as it crossed from one coverage zone to another. The system showcased smooth handovers, similar to how mobile phones switch between cellular towers.</p>
      </div>
      <div>
        <h4>Continuous Tracking</h4>
        <p>The AUV’s location was successfully estimated with reasonable accuracy, demonstrating the potential for real-time situational awareness in subsea missions.</p>
      </div>
      <div>
        <h4>Scalability</h4>
        <p>The trial confirmed that by deploying additional base stations, the network could be scaled to cover much larger areas, opening new opportunities for subsea operations.</p>
      </div>
    </div>
    <h2>Conclusion</h2>
    <p>The Singapore deployment marks a major milestone in subsea communications, demonstrating one of the first commercial implementations of underwater cellular networking.</p>
    <ul class="list-normal">
      <li>Proved that cellular principles can be adapted underwater, enabling continuous communication and tracking of subsea assets.</li>
      <li>Showcased a joint innovation between Subnero and ST UIS, leveraging acoustic modem technology and network intelligence.</li>
      <li>Paves the way for a new era of subsea operations, where AUVs, divers, and subsea sensors can remain connected at all times—supporting industries from offshore energy to defense and scientific research.</li>
    </ul>
    <h4>Reference</h4>
    <p>For detailed technical insights, see:</p>
    <p> S. Etter, M. Ignatius, C. Pendharkar, E. Tan, M. Chitre, J. Ng, L. Teck, J. Poh, “Design, Development and Deployment of an Underwater Cellular Network,” OCEANS 2024 - Halifax, pp. 1–7. DOI: <a href="https://doi.org/10.1109/OCEANS55160.2024.10754077" target="blank">10.1109/OCEANS55160.2024.10754077</a></p>
    <h2>Perspectives</h2>
    <blockquote class="bquote">
      <p class="quote"><sup>&ldquo;</sup> This collaboration has shown that cellular-style networks can bring real-world value to subsea operations. By validating the concept in Singapore’s demanding shallow-water conditions, we are opening the door to scalable solutions for defense, commercial, and research users alike.</p>
      <div class="author">
        <div class="photo" style="background-color:#e6e6e6;">
        <!-- <img src="{{site.baseurl}}/images/john-gibson.jpg" alt="John Gibson" /> -->
        </div>
        <div class="name">
          <p>John Doe</p>
          <small>ST UIS </small>
        </div>
      </div>
    </blockquote>
    <blockquote class="bquote">
      <p class="quote"><sup>&ldquo;</sup> This deployment demonstrates our vision of making subsea communication networks as seamless and versatile as those on land. By enabling resource sharing and continuous connectivity, we are taking the first step toward building the &#39;Internet of the Oceans.&#39;</p>
      <div class="author">
        <div class="photo"><img src="{{site.baseurl}}/images/manu-ignatius.jpg" alt="Manu Ignatius" /></div>
        <div class="name">
          <p>Manu Ignatius</p>
          <small>Subnero CEO</small>
        </div>
      </div>
    </blockquote>
  </section>
</div>