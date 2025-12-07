---
layout: default
title: Network Development Platform & Simulator
banner : images/unetstack-abstract-02.jpg
thumbnail: images/boxart-unet.png
categories: unet
section_id: products
---

<section class="page-hero md gen4x" style="background-image: url({{site.baseurl}}/{{page.banner}});">
  <div class="row flex-row">
    <div class="hero-text">
      <h4 class="g4x-tag">Network Simulator</h4>
      <h1><span class="text-gradient g-blue">U</span>net<span class="text-gradient g-blue">S</span>im</h1>
      <p>A fast, flexible simulation environment for developing subsea communication protocols without getting wet.</p>
      <div class="g4x-hero-btns">
        {%- include downloadUnetStack.html btnText="Download Community Edition" -%}
      </div>
    </div>
  </div>
</section>

<section class="g4x-section">
  <div class="row large">
    <div class="large-6 columns"> 
      <h3 class="orange text-3xl capitalize-none normal-spacing text-600">Design Your Underwater Network</h3>
      <p>The Unet Simulator runs the same software stack used on our modems, providing full control across physical, MAC, network, transport and application layers.</p>
      <p>It lets users design, test and validate underwater communication and networking solutions on a laptop, then deploy them at sea with zero code changes.</p>
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
    <p class="sec-subhead">Everything you need to validate your protocols before hitting the water.</p>
  </div>
  <div class="row py2">
    <div class="feature-grid col2 capabilities">
      <div class="docs-card uj">
        <div class="card-svg">
          <svg viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M12 21.5a9.5 9.5 0 1 0 0-19a9.5 9.5 0 0 0 0 19"/><path d="M12 21.5c2.332 0 4.222-4.253 4.222-9.5S14.332 2.5 12 2.5S7.778 6.753 7.778 12s1.89 9.5 4.222 9.5M2.5 12h19"/></g></svg>
        </div>
        <div>
          <h5>Large-Scale Simulation</h5>
          <p>Simulate networks with many nodes, including mobile platforms and autonomous vehicles.</p>
        </div>
      </div>
      <div class="docs-card uh">
        <div class="card-svg">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
        </div>
        <div>
          <h5>Real-Time Mode</h5>
          <p>Run interactive simulations for debugging agents and protocols step-by-step.</p>
        </div>
      </div>
      <div class="docs-card vt">
        <div class="card-svg">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
        </div>
        <div>
          <h5>Discrete-Event Mode</h5>
          <p>Execute fast Monte Carlo evaluations to gather statistical performance data.</p>
        </div>
      </div>
      <div class="docs-card fj">
        <div class="card-svg">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><path d="m16 18 6-6-6-6"></path><path d="m8 6-6 6 6 6"></path></svg>
        </div>
        <div>
          <h5>Unified API</h5>
          <p>Uses the exact same programming model (Groovy/Java/Python) as real UnetStack hardware.</p>
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

<!-- Streamlined Workflow -->
<section class="g4x-section" style="background-color:#e8f3ff;">
  <div class="g4x-section-head">
    <h2 class="sec-head lg text-gradient g-orange normal-spacing">Streamlined Workflow</h2>
    <p class="sec-subhead">From idea to ocean in three steps.</p>
  </div>
  <div class="row py2">
    <div class="flow-container sw">
      <div class="step">
        <div class="step-circle">
          <span class="step-number">01</span>
          <div class="step-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 12.5 8 15l2 2.5"></path><path d="m14 12.5 2 2.5-2 2.5"></path></svg>
          </div>
        </div>
        <h3 class="step-title">Prototype</h3>
        <p class="step-desc">Develop your protocol agents in Java or Groovy directly in the simulator.</p>
      </div>
      <div class="step">
        <div class="step-circle">
          <span class="step-number">02</span>
          <div class="step-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 12.5 8 15l2 2.5"></path><path d="m14 12.5 2 2.5-2 2.5"></path></svg>
          </div>
        </div>
        <h3 class="step-title">Validate</h3>
        <p class="step-desc">Run real-time or discrete event simulations to prove robustness and performance metrics.</p>
      </div>
      <div class="step">
        <div class="step-circle">
          <span class="step-number">03</span>
          <div class="step-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 12.5 8 15l2 2.5"></path><path d="m14 12.5 2 2.5-2 2.5"></path></svg>
          </div>
        </div>
        <h3 class="step-title">Deploy</h3>
        <p class="step-desc">Copy the exact same code to your modems. No cross-compilation needed.</p>
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