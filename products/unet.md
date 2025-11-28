---
layout: default
title: Software-defined framework for underwater communication networks
banner : images/unetstack-abstract-01.jpg
thumbnail: images/boxart-unet.png
categories: unet
section_id: products
---

<section class="page-hero md" style="background-image: url({{site.baseurl}}/{{page.banner}});">
  <div class="row flex-row">
    <div class="hero-text ">
      <h1>UnetStack</h1>
      <p>The de facto framework for Software-Defined Underwater Networks.</p>
      <p>Design, simulate, and deploy communication networks across subsea and terrestrial domains using a flexible, agent-based architecture.</p>
      <div class="hero-btns">
        <a href="#offerings" class="button form-button">Offerings</a>
        <a href="#downloads" class="button form-button">Downloads</a>
        <a href="#documentation" class="button form-button">Documentation</a>
      </div>
    </div>
  </div>
</section>

<section class="products-page unet" style="padding:4rem 1rem">
  <div class="row large category-content">
    <h1 class="">What is UnetStack?</h1>
    <h3>Software-defined Underwater Networks</h3>
  </div>
  <div class="row large">
    <div class="large-5 columns"> 
      <div class="category-content">
        <p>UnetStack is an extensible software framework designed to support underwater and hybrid communication networks. Its agent-based architecture provides full control across physical, MAC, network, transport and application layers, enabling users to build, test and deploy custom underwater communication and networking solutions.</p>
        <p>UnetStack supports both standalone underwater networks and systems that integrate acoustic, optical, RF or wired terrestrial links. It includes capabilities such as localization, device and sensor management, edge analytics and intelligent communication behaviours — all unified within a single programmable framework.</p>
      </div>
    </div>
    <div class="large-7 columns">
      <img alt="Unetstack" src="{{site.baseurl}}/images/unetstack-all.jpg" style="width:100%; height:auto; border-radius: 12px"/>
    </div>  
  </div>
</section>

<section id="offerings" class="products-page unet" style="padding:4rem 1rem; background-color: rgb(196 231 255 / 20%);">
  <div class="row large category-content">
    <h1 class="">Offerings & Applications</h1>
    <h3>UnetStack provides four structured offerings designed around how users develop, test and deploy underwater communication systems. Each offering links to its own dedicated information page.</h3>
  </div>
  <div class="row offerings">
    {%- include unetOfferings.html -%}
  </div>
</section>

<section class="products-page unet" style="padding:4rem 1rem">
  <div class="row large category-content">
    <h1>Editions</h1>
    <h3>UnetStack is available in three editions tailored to usage requirements.</h3>
  </div>
  <div class="row">
    <div class="feature-grid col3 py2">
      <div class="editions-card">
        <h4 class="text-xl orange">Community Edition</h4>
        <p class="text-blue">A free, non-commercial edition for academic use, prototyping and teaching.</p>
        <!-- <h5 class="text-2xl text-blue">Free</h5> -->
        <ul class="edition-features">
          <li>Unet Simulator (Community)</li>
          <li>Core UnetStack agents</li>
          <li>Documentation & Tutorials</li>
        </ul>
        <a class="button radius m0" href="{{site.baseurl}}/unetstack/unet-simulator">Download Now</a>
      </div>
      <div class="editions-card">
        <h4 class="text-xl orange">Commercial Edition</h4>
        <p class="text-blue">A licensed edition for operational deployments across defense, commercial and industrial domains.</p>
        <!-- <h5 class="text-2xl text-blue">Licensed</h5> -->
        <ul class="edition-features">
          <li>Full UnetStack Runtime</li>
          <li>Advanced Performance Agents</li>
          <li>Commercial-grade Networking</li>
          <li>LTS & Technical Support</li>
        </ul>
        <a class="button radius m0" href="{{site.baseurl}}/unetstack/unet-simulator">Contact Sales</a>
      </div>
      <div class="editions-card">
        <h4 class="text-xl orange">UnetStack OEM Edition (UnetCube)</h4>
        <p class="text-blue">An embedded development platform for hardware in the loop simulation or OEMs building custom underwater modems or hybrid communication nodes.</p>
        <!-- <h5 class="text-2xl text-blue">Custom</h5> -->
        <ul class="edition-features">
          <li>Embedded SBC Runtime</li>
          <li>Custom Analog & DAQ Interfaces</li>
          <li>Hardware-in-the-Loop Support</li>
        </ul>
        <a class="button radius m0" href="{{site.baseurl}}/unetstack/unet-simulator">Request Quote</a>
      </div>
    </div>
  </div>
</section>

<section class="products-page unet" style="padding:4rem 1rem; background-color: rgb(196 231 255 / 20%);">
  <div class="row category-content">
    <h1 class="">Components of UnetStack</h1>
    <h3>UnetStack is built on a powerful foundation that combines the open-source, agent-based messaging fabric fjåge with the Unet framework to enable flexible and scalable underwater communication systems.</h3>
  </div>
  <div class="row large">
    <div class="feature-grid col2 py2">
      <div>
      <img alt="Unetstack" src="{{site.baseurl}}/images/unetstack-components.jpg" style="width:100%; height:auto; border-radius: 12px"/>
      </div>
      <div>
        <h4 class="text-xl orange">01. Core Components</h4>
        <p class="">UnetStack combines the fjåge messaging fabric, the core Unet framework, and specialized agents offering communication, networking, localization, and analytics features to support diverse underwater applications, from basic connectivity to advanced marine robotics.</p>
        <h4 class="text-xl orange">02. UnetStack Agents</h4>
        <p class="">UnetStack provides basic agents for core underwater networking needs and premium agents with enhanced, application-specific capabilities. These can be mixed as needed, enabling efficient, high-performance communication for deployments ranging from simple networks to advanced marine robotics.</p>
        <h4 class="text-xl orange">03. Additional Components</h4>
        <p class="">UnetStack includes additional components like the Unet Simulator for testing protocols and channel models, Unet audio for educational, sound-card-based modem development, and versatile Unet interfaces offering dashboards, shells, scripting, and multi-language integration for diverse workflows.</p>
      </div>
    </div>
  </div>
</section>

<section id="downloads" class="products-page unet" style="padding:4rem 1rem;">
  <div class="row category-content">
    <h1 class="">Downloads</h1>
    <h3>Download UnetStack community edition</h3>
  </div>
  <div class="row">
    <div class="feature-grid col2 py2">
      <div>
        <h4 class="text-xl orange">Prerequisites</h4>
        <ul>
          <li>OS X / Linux (x86_64) / Windows*</li>
          <li>Java 8 runtime environment</li>
          <li>Chrome 61+ / Firefox 60+ / Safari 10.1+</li>
          <li>PortAudio** (on OS X and Linux)</li>
        </ul>
        <p class="text-sm m0">* Unet audio is currently not supported on the Windows platform</p>
        <p class="text-sm m0">** Only required for Unet audio</p>
      </div>
      <div>
        <h4 class="text-xl orange">Terms of Use</h4>
        <p>UnetStack community edition may be freely used only for academic teaching and research purposes (commercial use requires licensing)</p>
        <button class="round">Download</button><br />
        <small class="text-sm">[ UnetStack 3.4.4 community edition ]</small>
        <p>Start experimenting with your underwater networks today!</p>
      </div>
    </div>
  </div>
</section>

<section id="documentation" class="products-page unet" style="padding:4rem 1rem; background-color: rgb(196 231 255 / 20%);">
  <div class="row large category-content">
    <h1 class="">Documentation</h1>
    <h3>Everything you ever need to know about UnetStack.</h3>
  </div>
  <div class="row">
    <div class="feature-grid col3 py2">
      <a class="docs-card" href="#">
        <div class="icon-wrap">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Material Symbols by Google - https://github.com/google/material-design-icons/blob/master/LICENSE --><path fill="currentColor" d="M9 13h6q.425 0 .713-.288T16 12t-.288-.712T15 11H9q-.425 0-.712.288T8 12t.288.713T9 13m0 3h6q.425 0 .713-.288T16 15t-.288-.712T15 14H9q-.425 0-.712.288T8 15t.288.713T9 16m0 3h3q.425 0 .713-.288T13 18t-.288-.712T12 17H9q-.425 0-.712.288T8 18t.288.713T9 19m-3 3q-.825 0-1.412-.587T4 20V4q0-.825.588-1.412T6 2h7.175q.4 0 .763.15t.637.425l4.85 4.85q.275.275.425.638t.15.762V20q0 .825-.587 1.413T18 22zM18 9h-3.5q-.625 0-1.062-.437T13 7.5V4H6v16h12zM6 4v5zv16z"/></svg>
        </div>
        <h4>UnetStack 3.4.0 javadoc</h4>
        <p>UnetStack programmer's reference (archived: v3.0.2 javadoc, v3.1.0 javadoc, v3.2.0 javadoc, v3.3.0 javadoc)</p>
      </a>
      <a class="docs-card" href="#">
        <div class="icon-wrap">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Material Symbols by Google - https://github.com/google/material-design-icons/blob/master/LICENSE --><path fill="currentColor" d="M6 15.325q.35-.175.725-.25T7.5 15H8V4h-.5q-.625 0-1.062.438T6 5.5zM10 15h8V4h-8zm-4 .325V4zM7.5 22q-1.45 0-2.475-1.025T4 18.5v-13q0-1.45 1.025-2.475T7.5 2H18q.825 0 1.413.587T20 4v12.525q0 .2-.162.363t-.588.362q-.35.175-.55.5t-.2.75t.2.763t.55.487t.55.413t.2.562v.25q0 .425-.288.725T19 22zm0-2h9.325q-.15-.35-.237-.712T16.5 18.5q0-.4.075-.775t.25-.725H7.5q-.65 0-1.075.438T6 18.5q0 .65.425 1.075T7.5 20"/></svg>
        </div>
        <h4>Unet handbook</h4>
        <p>Learn to design, simulate and deploy underwater networks with UnetStack3</p>
      </a>
      <a class="docs-card" href="#">
        <div class="icon-wrap">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Google Material Icons by Material Design Authors - https://github.com/material-icons/material-icons/blob/master/LICENSE --><path fill="currentColor" d="M21 3H3c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5a2 2 0 0 0-2-2m0 14H3V5h18zm-5-6l-7 4V7z"/></svg>
        </div>
        <h4>Video tutorials</h4>
        <p>Prefer to watch rather than read?</p>
      </a>
      <a class="docs-card" href="#">
        <div class="icon-wrap">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Material Symbols by Google - https://github.com/google/material-design-icons/blob/master/LICENSE --><path fill="currentColor" d="M9.5 14H11v-3h4.5L14 9l1.5-2h-6zM5 21V5q0-.825.588-1.412T7 3h10q.825 0 1.413.588T19 5v16l-7-3zm2-3.05l5-2.15l5 2.15V5H7zM7 5h10z"/></svg>
        </div>
        <h4>fjåge javadoc</h4>
        <p>fjåge programmer's reference</p>
      </a>
      <a class="docs-card" href="#">
        <div class="icon-wrap">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Material Symbols by Google - https://github.com/google/material-design-icons/blob/master/LICENSE --><path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zM5 5v14h14V5h-2v6.125q0 .3-.25.438t-.5-.013l-1.225-.75q-.25-.15-.525-.15t-.525.15l-1.225.75q-.25.15-.5.013t-.25-.438V5zm0 14V5z"/></svg>
        </div>
        <h4>fjåge developer's guide</h4>
        <p>UnetStack is based on the fjåge agent-based framework</p>
      </a>
      <a class="docs-card" href="#">
        <div class="icon-wrap">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from TDesign Icons by TDesign - https://github.com/Tencent/tdesign-icons/blob/main/LICENSE --><path fill="none" stroke="currentColor" stroke-linecap="square" stroke-width="2" d="m15 5l-3-3l-3 3m10 10l3-3l-3-3M9 19l3 3l3-3M5 9l-3 3l3 3m6.998-3.002h.004v.004h-.004z"/></svg>
        </div>
        <h4>Language APIs</h4>
        <p>Groovy, Java, Python, Javascript, Julia, C</p>
      </a>
    </div>
  </div>
</section>

<section class="products-page unet" style="padding:4rem 1rem;">
  <div class="row large category-content">
    <h1 class="">Technical Resources</h1>
    <h3>Explore technical guides, whitepapers, contribution channels, and support tools to advance your UnetStack development.</h3>
  </div>
  <div class="row">
    <div class="resource-wrap">
      <a class="download-file" href="{{site.baseurl}}/brochures/unlocking-underwater-connectivity.pdf" target="_blank" title="UnetStack Whitepaper">
        <img class="" src="{{site.baseurl}}/brochures/unetstack-whitepaper.jpg">
        <span>[Whitepaper] Unlocking Underwater Connectivity</span>
      </a>
      <a class="download-file" href="{{site.baseurl}}/brochures/UnetStack-Brochure.pdf" target="_blank" title="UnetStack Whitepaper">
        <img class="" src="{{site.baseurl}}/brochures/unetstack-brochure.jpg">
        <span>UnetStack Brochure</span>
      </a>
      <a class="download-file" href="https://blog.unetstack.net/" target="_blank" title="Unet Blog">
        <img class="" src="{{site.baseurl}}/images/unetstack-blog.jpg">
        <span>Unet Blog</span>
      </a>
      <a class="download-file" href="https://github.com/org-arl/unet-support/discussions" target="_blank" title="Unet Support">
        <img class="" src="{{site.baseurl}}/images/unetstack-support.jpg">
        <span>Unet Support</span>
      </a>
      <a class="download-file" href="https://github.com/org-arl/unet-contrib" target="_blank" title="Unet Contribute">
        <img class="" src="{{site.baseurl}}/images/unetstack-contribute.jpg">
        <span>Unet Contribute</span>
      </a>
    </div>
  </div>
</section>
