---
layout: default
title: Deep-Water Testing of Subnero Modems in the Gulf of Mexico
sub_title: Deep-Water Testing of Subnero Modems in the Gulf of Mexico
excerpt: Subnero’s deep-rated modems maintained reliable communication down to 2.5 km in Gulf of Mexico trials, achieving over 80% packet success. This user story shows how Subnero technology enables robust connectivity in ultra-deep subsea environments.
preview_image: /images/story-nauticus.jpg
date: 2025-10-20
---

<div class="user-stories">
  <section class="sec-hero" style="background-image: url({{site.baseurl}}/images/nauticus.jpg);" >
    <div class="hero-content">
      <h4>Deployment Spotlight</h4>
      <h1>{{ page.sub_title }}</h1>
    </div>
  </section>
  <section class="story-section">
    <h2>Overview</h2>
    <div class="download-pdf">
      <img src="{{site.baseurl}}/images/deployment-spotlight-cover.jpg" />
      <div class="pdf-link"><a href="{{site.baseurl}}/brochures/deployment-spotlight.pdf" target="_blank" alt="Deployment spotlight"><i class="icon-download"></i> Download PDF</a></div>
    </div>
    <p>Subnero modems are designed to excel in the challenging conditions of tropical shallow waters, where dynamic environments and high noise levels often limit performance. However, thanks to their adaptable architecture and advanced algorithms, Subnero modems deliver equally strong results across diverse environments worldwide.</p>
    <p>This article highlights deep-water tests in the Gulf of Mexico conducted by Nauticus Robotics, a close collaborator and customer of Subnero, to evaluate modem performance during missions at depths of more than 2000 meters in vertical channels.</p>
    <h2 class="clear-float">Objectives</h2>
    <p>The primary goal was to validate reliable communications between a mothership-deployed topside modem and a subsea modem mounted on the Aquanaut robot during deep-water operations.</p>
    <ul class="list-normal">
      <li>The test measured communication performance at ranges of more than 2000 m in a vertical channel.</li>
      <li>Subnero’s deep-rated acoustic modems were selected for their robust design and advanced software capabilities.</li>
      <li>To establish consistency, tests were performed first with an ROV (where both nodes were accessible) and then replicated with the Aquanaut over two separate days.</li>
    </ul>
    <figure>
      <img
        src="{{site.baseurl}}/images/nauticus-aquanaut.jpg" alt="Aquanaut robot" />
      <figcaption>Aquanaut robot</figcaption>
    </figure>
    <img  />
    <h2>Test Procedure</h2>
    <ol class="list-normal">
      <li>The topside modem was lowered from the mothership into the water column.</li>
      <li>The subsea modem, mounted on the Aquanaut, maintained the subsea link while descending more than 2300 m depth.</li>
      <li>Communication statistics were continuously logged, including total packets transmitted, received, and failed at each of the prespecified depths.</li>
      <li>Telemetry, command and control, and payload data were exchanged between the topside and subsea modems at regular intervals.</li>
    </ol>
    <figure>
      <img
        src="{{site.baseurl}}/images/story-nauticus-deployment.jpg" alt="Test procedure" />
      <figcaption>Test procedure setup</figcaption>
    </figure>
    <h2>Results</h2>
    <div class="list-styled">
      <div class="result-card">
        <div class="result-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12h1m8-9v1m8 8h1M5.6 5.6l.7.7m12.1-.7l-.7.7M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0-1 3a2 2 0 0 1-4 0a3.5 3.5 0 0 0-1-3m.7 1h4.6"/></svg>
        </div>
        <h4>Reliable performance across all depths</h4>
        <p>Subnero modems maintained communication links from the surface down to 2,300 m.</p>
      </div>
      <div class="result-card">
        <div class="result-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 12 12"><path fill="currentColor" d="M4.954.433a1.48 1.48 0 0 1 1.98-.101l.112.101l.89.89l1.26.001a1.48 1.48 0 0 1 1.453 1.198l.02.138l.007.143l-.002 1.259l.893.892a1.48 1.48 0 0 1 .19 1.86l-.089.12l-.101.112l-.893.891l.001 1.258c0 .659-.432 1.224-1.056 1.415l-.136.035l-.142.023l-.144.007h-1.26l-.891.892a1.48 1.48 0 0 1-1.86.19l-.12-.089l-.112-.101l-.892-.893l-1.258.001A1.48 1.48 0 0 1 1.35 9.48l-.02-.139l-.006-.142V7.936l-.89-.89a1.48 1.48 0 0 1-.19-1.86l.088-.12l.101-.112l.89-.891l.001-1.26c0-.72.516-1.32 1.198-1.452l.139-.02l.142-.007h1.26l.891-.89zm1.394.711a.49.49 0 0 0-.618-.063l-.078.063L4.476 2.32H2.812a.49.49 0 0 0-.484.404l-.008.088v1.664L1.144 5.652a.49.49 0 0 0-.063.618l.063.078L2.32 7.524v1.674l.008.078a.49.49 0 0 0 .312.372l.083.023l.089.008l1.662-.001l1.178 1.178a.49.49 0 0 0 .618.063l.078-.063l1.178-1.178h1.633l.087-.002a.49.49 0 0 0 .407-.33l.02-.077l.006-.082l-.001-1.661l1.178-1.178a.49.49 0 0 0 .063-.618l-.063-.078l-1.178-1.178V2.812a.49.49 0 0 0-.402-.484l-.088-.008H7.524zm2.256 3.002a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L5.25 6.793l2.646-2.647a.5.5 0 0 1 .708 0"/></svg>
        </div>
        <h4>&lt; 70% packet success rates</h4>
        <p>Achieved consistently, with no major performance drop-off at depth or distance.</p>
      </div>
      <div class="result-card">
        <div class="result-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M9.75.75a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0zm4.03 2.53a.75.75 0 1 0-1.06-1.06l-1.5 1.5a.75.75 0 1 0 1.06 1.06zM8.293 4.646a1 1 0 0 1 1.414 0l1.647 1.647a1 1 0 0 1 0 1.414l-7.99 7.99a1 1 0 0 1-1.415 0L.303 14.051a1 1 0 0 1 0-1.414l7.99-7.99ZM9 6.061L7.06 8l.94.94L9.94 7L9 6.06Zm-7.283 7.283L6 9.06l.94.939l-4.284 4.283l-.94-.94ZM13 7a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5h-1.5A.75.75 0 0 1 13 7m.78 4.78a.75.75 0 0 0 0-1.06l-1.5-1.5a.75.75 0 0 0-1.06 1.06l1.5 1.5a.75.75 0 0 0 1.06 0m-9.56-8.5a.75.75 0 0 1 1.06-1.06l1.5 1.5a.75.75 0 0 1-1.06 1.06z" clip-rule="evenodd"/></svg>
        </div>
        <h4>Enhanced throughput with software features</h4>
        <p>Smart file transfer, priority handling, mailbox, etc. were tested and demonstrated during tests.</p>
      </div>
    </div>
    <h2>Conclusion</h2>
    <figure class="float-img">
      <img
        src="{{site.baseurl}}/images/user-story-modems.jpg" alt="Subnero Modems" />
      <figcaption>Subnero Modems</figcaption>
    </figure>
    <p>The Gulf of Mexico tests show that Subnero modems:</p>
    <ul class="list-normal">
      <li>Deliver consistent performance in deep-water conditions in addition to proven shallow water performance.</li>
      <li>Enable critical subsea communication for autonomous operations without significant degradation across ranges and depths.</li>
      <li>Unlock new possibilities for the offshore oil and gas, offshore wind, environmental, fiber cable, and defense sectors, supporting a shift towards autonomous, efficient, and sustainable subsea technologies.</li>
    </ul>
    <h2>Perspectives</h2>
    <blockquote class="bquote">
      <p class="quote"><sup>&ldquo;</sup> The Aquanaut represents the future of subsea robotics, and Subnero’s modems are a critical enabler of our vision. These tests proved that reliable underwater communication can be achieved at ultra deep-water operational depths, giving us the confidence to expand autonomous operations globally.</p>
      <div class="author">
        <div class="photo"><img src="{{site.baseurl}}/images/john-gibson.jpg" alt="John Gibson" /></div>
        <div class="name">
          <p>John Gibson</p>
          <small>Nauticus Robotics President and CEO</small>
        </div>
      </div>
    </blockquote>
    <blockquote class="bquote">
      <p class="quote"><sup>&ldquo;</sup> We are proud to see Subnero modems perform beyond expectations in deep-water Gulf of Mexico tests. This demonstrates our mission to provide underwater communication solutions that work everywhere — from shallow tropical waters to deep offshore fields.</p>
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