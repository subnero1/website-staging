---
layout: default
title: Hardware-in-the-Loop (HIL) Underwater Communications Simulator
banner : images/unetstack-abstract-03.jpg
thumbnail: images/boxart-unet.png
categories: unet
section_id: products
---

<section class="page-hero md gen4x" style="background-image: url({{site.baseurl}}/{{page.banner}});">
  <div class="row flex-row">
    <div class="hero-text">
      <h4 class="g4x-tag">Hardware-in-the-Loop Simulator</h4>
      <h1><span class="text-gradient g-blue">V</span>irtual <span class="text-gradient g-blue">A</span>coustic <span class="text-gradient g-blue">O</span>cean</h1>
      <p>A high-fidelity underwater acoustic channel model simulator for realistic algorithm evaluation using real hardware.</p>
      <div class="g4x-hero-btns">
        <a href="https://github.com/org-arl/VirtualAcousticOcean.jl" target="blank" class="button g-orange">View on GitHub</a>
      </div>
    </div>
  </div>
</section>

<section class="g4x-section">
  <div class="row large">
    <div class="large-6 columns"> 
      <h3 class="orange text-3xl capitalize-none normal-spacing text-600">Simulate Real Ocean Conditions</h3>
      <p>Virtual Acoustic Ocean (VAO) is an open-source acoustic channel model simulator that works seamlessly with UnetStack and interfaces with industry-standard models such as Bellhop, Kraken, Pekris Ray and Watermark.</p>
      <p>This setup enables you to test PHY, MAC and network-layer algorithms under realistic underwater conditions using real hardware devices—including Subnero modems and UnetCube—without leaving the lab.</p>
    </div>
    <div class="large-6 columns">
      <img alt="Unetstack" src="{{site.baseurl}}/images/networkv4.jpg" style="width:100%; height:auto; border-radius: 12px"/>
    </div>  
  </div>
</section>

<!-- key capabilities -->
<section class="g4x-section" style="background-color:#e8f3ff;">
  <div class="g4x-section-head">
    <h2 class="sec-head lg text-gradient g-orange normal-spacing">Key Capabilities</h2>
    <p class="sec-subhead">Bridge the gap between simulation and sea trials.</p>
  </div>
  <div class="row py2">
    <div class="feature-grid col2 capabilities">
      <div class="docs-card uh">
        <div class="card-svg">
          <svg viewBox="0 0 56 56"><path fill="currentColor" d="M6.215 31.387H16.62q1.583 0 1.898-1.407l3.516-16.148L28.2 50.84c.281 1.687 2.883 1.664 3.211 0l5.977-28.008l1.382 6.96c.211 1.08.82 1.595 1.922 1.595h9.094c.938 0 1.688-.727 1.688-1.64c0-.938-.727-1.665-1.688-1.665h-8.297l-2.695-11.93c-.352-1.617-2.766-1.617-3.164.07l-5.883 26.274l-6.14-37.336c-.258-1.64-2.673-1.687-3.048 0L15.59 28.082H6.215c-.938 0-1.688.75-1.688 1.664s.75 1.64 1.688 1.64"/></svg>
        </div>
        <div>
          <h5>Realistic Propagation</h5>
          <p>Uses Bellhop, Kraken, and Watermark benchmark models for physics-accurate testing.</p>
        </div>
      </div>
      <div class="docs-card fj">
        <div class="card-svg">
          <svg viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066-2.573c-.94-1.543.826-3.31 2.37-2.37c1 .608 2.296.07 2.572-1.065"/><path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0-6 0"/></g></svg>
        </div>
        <div>
          <h5>Flexible Workflows</h5>
          <p>Supports simulation-only, UnetCube-HIL, and Modem-HIL configurations.</p>
        </div>
      </div>
      <div class="docs-card vt">
        <div class="card-svg">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M6 3v12"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/></g></svg>
        </div>
        <div>
          <h5>Open Source</h5>
          <p>Fully open-source, enabling users to build, integrate and test their own algorithms and channel models.</p>
        </div>
      </div>
      <div class="docs-card uj">
        <div class="card-svg">
          <svg viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m3 12l9 5l9-5M3 16l9 5l9-5M3 8l9-5l9 5l-9 5z"/></svg>
        </div>
        <div>
          <h5>Cross-Layer Testing</h5>
          <p>Test PHY, MAC, and Network algorithms simultaneously on real hardware.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Use Cases -->
<section class="g4x-section" style="background-color:#F8FAFC;">
  <div class="g4x-section-head">
    <h2 class="sec-head lg text-gradient g-orange">Use Cases</h2>
    <p class="sec-subhead">Enabling reliable underwater communication and seamless connectivity for ocean industries and subsea assets.</p>
  </div>
  <div class="row usecase-wrap">
    <div class="usecase">
      <div class="usecase-img">
        <img src="{{site.baseurl}}/images/thumbnail-defense.png" alt="Defense">
      </div>
      <div class="usecase-content">
        <h3 class="text-gradient g-orange">Rapid Protocol Development</h3>
        <p>Researchers can develop custom MAC and Routing protocols using the UnetStack API in Groovy, Java, or Python. By running these protocols in the simulator, logic can be verified against discrete-event simulations of large networks before a single line of code is deployed to expensive hardware.</p>
      </div>
    </div>
  </div>
</section>

<!-- HIL Workflow -->
<section class="g4x-section">
  <div class="g4x-section-head">
    <h2 class="sec-head lg text-gradient g-orange normal-spacing">HIL Workflow</h2>
    <p class="sec-subhead">Connect real hardware to a virtual ocean.</p>
  </div>
  <div class="row py2">
    <div class="flow-container hs">
      <div class="step">
        <div class="step-circle">
          <span class="step-number">01</span>
          <div class="step-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 12.5 8 15l2 2.5"></path><path d="m14 12.5 2 2.5-2 2.5"></path></svg>
          </div>
        </div>
        <h3 class="step-title">Connect</h3>
        <p class="step-desc">Attach UnetCube or Modems to a computer running VAO.</p>
      </div>
      <div class="step">
        <div class="step-circle">
          <span class="step-number">02</span>
          <div class="step-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 12.5 8 15l2 2.5"></path><path d="m14 12.5 2 2.5-2 2.5"></path></svg>
          </div>
        </div>
        <h3 class="step-title">Run</h3>
        <p class="step-desc">Use hardware normally — VAO applies the ocean conditions.</p>
      </div>
      <div class="step">
        <div class="step-circle">
          <span class="step-number">03</span>
          <div class="step-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 12.5 8 15l2 2.5"></path><path d="m14 12.5 2 2.5-2 2.5"></path></svg>
          </div>
        </div>
        <h3 class="step-title">Measure</h3>
        <p class="step-desc">Analyze performance metrics.</p>
      </div>
    </div>
  </div>
</section>

<!-- Technical Resources -->
<section class="g4x-section">
  <div class="g4x-section-head">
    <h2 class="sec-head lg text-gradient g-orange normal-spacing">Technical Resources</h2>
  </div>
  <div class="row py2">
    <div class="resources">
      <a href="https://blog.unetstack.net/" class="resource-link blog" target="_blank">
        <div class="resource-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"/><path d="m18 13l-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18M2.3 2.3l7.286 7.286"/><circle cx="11" cy="11" r="2"/></g></svg>
        </div>
        <span>Blog</span>
      </a>
      <a href="https://contrib.unetstack.net/" class="resource-link contrib" target="_blank">
        <div class="resource-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M6 3v12"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/></g></svg>
        </div>
        <span>Contributions</span>
      </a>
      <a href="https://support.unetstack.net/" class="resource-link support" target="_blank">
        <div class="resource-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"/><path d="m18 6l-3.525 3.525M6 18l3.525-3.525M6 6l3.525 3.525M18 18l-3.525-3.525m-4.95 0c-1.348-1.348-1.348-3.601 0-4.95m0 4.95c1.348 1.348 3.601 1.348 4.95 0m0 0c1.348-1.348 1.348-3.601 0-4.95m0 0c-1.348-1.348-3.601-1.348-4.95 0"/></g></svg>
        </div>
        <span>Support</span>
      </a>
      <a href="{{site.baseurl}}/technical-resources/#whitepaper" class="resource-link whitepaper">
        <div class="resource-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M9 2H1v19h1c2.944 0 5.14.245 6.586.486c.723.12 1.26.24 1.609.328a11 11 0 0 1 .472.13l.017.005h.002l.152.051h2.324l.152-.05l.002-.001l.017-.006l.088-.026q.122-.037.384-.103c.35-.087.886-.207 1.61-.328C16.86 21.246 19.054 21 22 21h1V2h-8a4 4 0 0 0-3 1.354A4 4 0 0 0 9 2M3 19.01V4h6a2 2 0 0 1 2 2v13.958l-.32-.084c-.4-.1-.989-.23-1.766-.36c-1.379-.23-3.35-.457-5.914-.505M19 10h-4V8h4zm0 3h-4v-2h4z"/></svg>
        </div>
        <span>Whitepapers</span>
      </a>
      <a href="{{site.baseurl}}/technical-resources/#unetstack" class="resource-link brochure">
        <div class="resource-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm0 2h7v5h5v11H6zm2 8v2h8v-2zm0 4v2h5v-2z"/></svg>
        </div>
        <span>Brochure</span>
      </a>
    </div>
  </div>
</section>