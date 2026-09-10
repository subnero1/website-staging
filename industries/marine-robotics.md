---
layout: default
title: Connected Autonomy for Marine Robotics
banner : images/banner-marine-robotics-connected-autonomy.jpg
excerpt: Reliable acoustic communications and navigation for AUVs, ROVs, and USVs. Subnero gives marine robots a connectivity capability they can trust, from simulation to sea.
description: Reliable acoustic communications and navigation for AUVs, ROVs, and USVs. Connectivity marine robots can trust, from simulation through to sea.
section_id: industries
breadcrumb: Marine Robotics
---

{% include breadcrumbs.html %}

<style>
  .g4x-section.marine-dark { background-color:#0A1B24; }
  .g4x-section.marine-dark p,
  .g4x-section.marine-dark li { color:#C3D4E2; }
  .g4x-section.marine-dark h5 { color:#E6EFF7; }
  .g4x-section.marine-dark a { color:#7FD3EC; }
  .g4x-section.marine-dark .docs-card { background-color:#0F2430; border:1px solid #26485C; box-shadow:none; }
  .stack-section .g4x-section-head,
  .simulate-section .g4x-section-head {
    max-width: 1100px;
  }
  .five-levels-columns {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
  .five-levels-columns .col-figure {
    text-align: center;
  }
  .five-levels-columns .col-figure img {
    max-height: 380px;
    width: auto;
    margin: 0 auto;
    display: block;
  }
  .simulate-section .feature-grid.col3 .docs-card {
    align-items: stretch;
  }
  .simulate-section .feature-grid.col3 .docs-card > div {
    display: flex;
    flex-direction: column;
  }
  .simulate-section .feature-grid.col3 .docs-card > div p:last-child {
    margin-top: auto;
    padding-top: 0.75rem;
    margin-bottom: 0;
  }
  .built-for-integration .docs-card.column-card {
    align-items: stretch;
  }
  .built-for-integration .docs-card.column-card > div:last-child {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
  .built-for-integration .docs-card.column-card > div:last-child p:last-child {
    margin-top: auto;
    padding-top: 0.75rem;
    margin-bottom: 0;
  }
</style>

<section class="page-hero gen4x" style='background-image: url({{site.baseurl}}/{{page.banner}});'>
  <div class="row flex-row">
    <div class="hero-text">
      <h4 class="g4x-tag">Industries / Marine Robotics</h4>
      <h1><span class="text-gradient g-blue">Connected Autonomy</span> for Marine Robotics</h1>
      <p>Every untethered subsea mission depends on the same thing: connectivity the vehicle can trust. Subnero provides it.</p>
      <div class="g4x-hero-btns data-harvesting">
        <a href="{{site.baseurl}}/contact" class="button g-orange-btn">Talk to our engineers</a>
      </div>
    </div>
  </div>
</section>

<section class="g4x-section" style="background-color:#F8FAFC;">
  <div class="g4x-section-head">
    <h2 class="sec-head text-gradient g-orange">More Than a Modem</h2>
    <p>Most vehicle programs start by choosing a modem. But a dependable link underwater depends on more than the hardware at each end. Conditions change through a mission, vehicles carry more than one way to communicate, different data needs different handling, and multiple vehicles have to share a limited channel. Here is what your vehicle actually needs.</p>
  </div>
  <div class="row large py2 relative">
    <div class="feature-grid col2 operational-advantages">
      <div class="docs-card uh">
        <div>
          <h5>Robust and dynamic communications</h5>
          <p>The acoustic channel changes with depth, weather, location, and traffic. Subnero modems adapt to conditions, so the same hardware performs in Singapore's coastal waters, North Sea swells, or deep water in the Gulf of Mexico.</p>
        </div>
      </div>
      <div class="docs-card uh">
        <div>
          <h5>Multi-interface management</h5>
          <p>A vehicle rarely has just one way to communicate: acoustics at depth, radio at the surface over WiFi, cellular, or satellite, and optical links at close range for high rate transfers. UnetStack manages them as one network, so your software sends data without having to choose the path.</p>
        </div>
      </div>
      <div class="docs-card uh">
        <div>
          <h5>Data management</h5>
          <p>Commands, telemetry, and sensor payloads each have their own characteristics: how large they are, how soon they matter, how reliably they must arrive, and what they contain. UnetStack lets your application describe each message on those terms, and handles delivery to match.</p>
        </div>
      </div>
      <div class="docs-card uh">
        <div>
          <h5>Contention-free communication</h5>
          <p>When several vehicles and nodes operate in the same area, their transmissions can collide and data is lost. Subnero networks coordinate access to the channel, so throughput stays predictable as the network grows.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="g4x-section marine-dark stack-section">
  <div class="g4x-section-head">
    <h2 class="sec-head lg text-gradient g-orange normal-spacing">One Stack, From Simulation to Sea</h2>
    <p>Our offerings travel the whole journey with you: design in simulation, validate with hardware-in-the-loop, then deploy, with the same software at every stage. Nothing is rewritten along the way: the protocols you develop in simulation are the ones your vehicle runs at sea. And the same stack scales from a single link to a network of vehicles, buoys, and shore stations, without changing how your software talks to it.</p>
  </div>
  <figure class="section-edge-img">
    <img alt="A marine robotics network with AUVs on acoustic links, gateway buoys with hanging modems, a USV, an optical link to a seabed docking station, and radio backhaul to a shore station, all operating as one network" src="{{site.baseurl}}/images/marine-robotics-network-master.jpg" />
  </figure>
</section>

<section class="g4x-section" style="background-color:#F8FAFC;">
  <div class="g4x-section-head">
    <h2 class="sec-head text-gradient g-orange">Built for Vehicle Integration</h2>
    <p>Everything you need to give your platform a dependable link, in one place.</p>
  </div>
  <div class="row large py2 relative built-for-integration">
    <div class="feature-grid col2 operational-advantages">
      <div class="docs-card uh column-card">
        <div class="img-wrapper">
          <img src="{{site.baseurl}}/images/marine-robotics-integration-hardware.jpg" alt="A Subnero OEM modem open on a lab bench with its transducer beside it, with an autonomous underwater vehicle in the background" />
        </div>
        <div>
          <h5>Hardware</h5>
          <p>OEM form factor modems for tight vehicle envelopes. Remote head configurations with separate transducers for free flooded platforms. Custom connector and harnessing options to match your vehicle's wiring.</p>
          <p><a href="{{site.baseurl}}/products/#smart-modems" target="_blank" rel="noopener">Explore Smart Modems</a></p>
        </div>
      </div>
      <div class="docs-card uh column-card">
        <div class="img-wrapper">
          <img src="{{site.baseurl}}/images/marine-robotics-integration-software.jpg" alt="An engineer working at a laptop terminal on a lab bench, with an autonomous underwater vehicle in the background" />
        </div>
        <div>
          <h5>Software</h5>
          <p>UnetStack is what makes a modem a network node rather than a point to point link, with protocols and delivery behavior you configure for your mission rather than accept as fixed. APIs and ROS bridges make integration with your vehicle software straightforward.</p>
          <p><a href="{{site.baseurl}}/products/wnc/unetstack" target="_blank" rel="noopener">Learn about UnetStack</a></p>
        </div>
      </div>
      <div class="docs-card uh column-card">
        <div class="img-wrapper">
          <img src="{{site.baseurl}}/images/marine-robotics-integration-simulation.jpg" alt="A deployment planning desk with a monitor showing a network simulation map view alongside a bathymetric chart and notebook" />
        </div>
        <div>
          <h5>Simulation and testing</h5>
          <p>Software-in-the-loop simulation with vehicle motion models. Hardware-in-the-loop testing on the bench. UnetCloud for team-based simulation without local setup.</p>
          <p><a href="{{site.baseurl}}/products/wnc/unetstack/unetsim" target="_blank" rel="noopener">Try the simulator</a></p>
        </div>
      </div>
      <div class="docs-card uh column-card">
        <div class="img-wrapper">
          <img src="{{site.baseurl}}/images/marine-robotics-integration-training.jpg" alt="A hands-on training session seen from the back of the room, with a presenter beside a projected technical interface" />
        </div>
        <div>
          <h5>Training and support</h5>
          <p>Hands-on UnetStack training for your engineers, and design guidance to get communications right from the first sketch of your vehicle, from transducer placement to network planning.</p>
          <p><a href="{{site.baseurl}}/support" target="_blank" rel="noopener">Explore support options</a></p>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="g4x-section marine-dark bg-gradient-img simulate-section" style="background-image: url({{site.baseurl}}/images/unetstack-abstract-02.jpg);">
  <div class="g4x-section-head relative">
    <h2 class="sec-head lg text-gradient g-orange normal-spacing">Simulate First, Deploy With Confidence</h2>
    <p>Every Subnero modem supports digital twinning at multiple levels, from network simulation on your desk, through hardware-in-the-loop testing, to a standing digital twin online. The next step is bringing the digital twin onboard, so the vehicle predicts link quality in real time during the mission.*</p>
  </div>
  <figure class="section-edge-img" style="width: 100%; max-width: 1200px; margin: 2rem auto 0;">
    <img alt="Digital twin of a marine robotics network, mirroring a planned deployment in simulation and feeding validated parameters back to the vehicle at sea" src="{{site.baseurl}}/images/marine-robotics-digital-twin-panels.png" />
  </figure>
  <div class="row large py2 relative">
    <div class="feature-grid col3 operational-advantages">
      <div class="docs-card uh">
        <div>
          <h5>UnetSim</h5>
          <p>Simulate the full network, vehicles, protocols, traffic, and environment, before any hardware gets wet.</p>
          <p><a href="{{site.baseurl}}/products/wnc/unetstack/unetsim" target="_blank" rel="noopener">Explore UnetSim</a></p>
        </div>
      </div>
      <div class="docs-card uh">
        <div>
          <h5>Hardware-in-the-Loop Simulation</h5>
          <p>Run your actual vehicle software against real Subnero modems and simulated channels, so what gets tested is exactly what deploys.</p>
          <p><a href="{{site.baseurl}}/products/wnc/unetstack/hilsim" target="_blank" rel="noopener">See how it works</a></p>
        </div>
      </div>
      <div class="docs-card uh">
        <div>
          <h5>UnetCloud</h5>
          <p>The full simulation environment as a standing digital twin for planning, rehearsal, and training.</p>
          <p><a href="{{site.baseurl}}/products/wnc/unetstack/unetcloud" target="_blank" rel="noopener">Try UnetCloud</a></p>
        </div>
      </div>
    </div>
  </div>
  <div class="g4x-section-head relative" style="margin-top: 1.5rem;">
    <p style="font-size: 0.85em; color: #E6EFF7;">*Predictive connectivity: <a href="https://arl.nus.edu.sg/wp-content/uploads/2022/09/Chitre_Physics-informed_UComms-2022.pdf" target="_blank" rel="noopener">M. Chitre and K. Li, Physics-informed Data-driven Communication Performance Prediction for Underwater Vehicles, UComms 2022.</a></p>
  </div>
</section>

<section class="g4x-section" style="background-color:#F8FAFC;">
  <div class="g4x-section-head">
    <h2 class="sec-head lg text-gradient g-orange normal-spacing">Grow With Your Mission</h2>
    <p>Your mission will ask for more over time, and the platform is built to grow with it. The capabilities below extend the standard stack when you need them. And because UnetStack is open, you can build your own agents and protocols on top of what we provide, using the same framework our engineers use.</p>
  </div>
  <div class="row large py2 relative">
    <div class="feature-grid col3 operational-advantages">
      <div class="docs-card uh">
        <div>
          <h5>Coordinated medium access</h5>
          <p>Vehicles, topsides, and repeaters share the channel without collisions, so throughput stays predictable as your network grows.</p>
        </div>
      </div>
      <div class="docs-card uh">
        <div>
          <h5>Relay and routing</h5>
          <p>Data finds its way from vehicle to shore across acoustic, optical, and RF links, over whatever path exists.</p>
        </div>
      </div>
      <div class="docs-card uh">
        <div>
          <h5>Content-aware delivery</h5>
          <p>Smart codecs and per packet priorities help the mission get what it needs now, even when bandwidth is tight.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="g4x-section marine-dark">
  <div class="g4x-section-head">
    <h2 class="sec-head lg text-gradient g-orange normal-spacing">Five Levels of Confidence</h2>
  </div>
  <div class="row large five-levels-columns">
    <div class="large-6 columns">
      <figure class="col-figure no-shadow">
        <img alt="The five level framework for moving from basic technology choices to fully adaptive, mission-critical underwater connectivity" src="{{site.baseurl}}/images/5-levels.jpg" />
      </figure>
    </div>
    <div class="large-6 columns">
      <p>However you build it, capability alone does not make a link dependable, practice does. From years of deployments with vehicle builders and operators, we have distilled that practice into five levels of confidence.</p>
      <p>Read the full framework on the Unet Blog: <a href="https://blog.unetstack.net/acoustic-communication-and-navigation-for-subsea-robotics-part1" target="_blank" rel="noopener">Part 1, Technology, Integration, and Planning</a>, and <a href="https://blog.unetstack.net/acoustic-communication-and-navigation-for-subsea-robotics-part2" target="_blank" rel="noopener">Part 2, Adaptive Systems and Future Ready Missions</a>.</p>
      <p>You do not have to climb these levels alone. Our engineers walk you through them: a hands-on workshop, a configuration built for your use cases, joint rollout on your platforms, and verification in the field. Most requirements resolve to expert configuration, not custom development. You bring the vehicle and the mission. We bring the network.</p>
    </div>
  </div>
</section>

<section class="g4x-section unet">
  <div class="row large">
    <div class="large-6 columns">
      <figure class="col-figure no-shadow">
        <img alt="A Subnero equipped autonomous underwater vehicle being deployed during field trials" src="{{site.baseurl}}/images/marine-robotics-field-proof.jpg" />
      </figure>
    </div>
    <div class="large-6 columns">
      <h2 class="text-3xl text-600 capitalize-none text-gradient g-orange inline-block normal-spacing">Proven Where It Matters</h2>
      <p>With ST Engineering, Subnero deployed one of the world's first commercial underwater cellular networks in Singapore waters.</p>
      <p><a href="{{site.baseurl}}/user-stories/cellular-network/" target="_blank" rel="noopener">Read the Singapore underwater cellular network story.</a></p>
      <p>In the Gulf of Mexico, Subnero modems on Nauticus Robotics' Aquanaut held a continuous acoustic link down to 2,300 meters.</p>
      <p><a href="{{site.baseurl}}/case-study/partnership/2025/09/30/Deployment-Spotlight-Nauticus-Robotics.html" target="_blank" rel="noopener">Read the deep-water testing deployment spotlight.</a></p>
      <p>At the University of Alabama's muNet Laboratory, a Subnero smart modem turned a commercial AUV into a programmable, acoustically controlled platform.</p>
      <p><a href="{{site.baseurl}}/user-stories/smart-modems-smarter-auvs/" target="_blank" rel="noopener">Read the smart modems, smarter AUVs case study.</a></p>
      <p>At the Acoustic Research Laboratory, National University of Singapore, a Subnero modem dropped into an OceanScan MST LAUV with no changes to the modem, the vehicle, or the software on either side.</p>
      <p><a href="{{site.baseurl}}/user-stories/drop-in-integration-lauv/" target="_blank" rel="noopener">Read the drop-in integration case study.</a></p>
    </div>
  </div>
</section>

<!-- TODO: add a white paper download card here once the marine robotics white paper is
     published, following the tech-link pattern from the underwater network page -->

<section class="call-to-action category-container mb2">
  {%- include formCTA.html labelText="Integrating communications into your AUV, ROV, or USV, or planning a multi-vehicle operation?" -%}
</section>
