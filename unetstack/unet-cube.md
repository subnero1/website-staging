---
layout: default
title: OEM Modem Development Platform
banner : images/unetstack-abstract-04.jpg
thumbnail: images/boxart-unet.png
categories: unet
section_id: products
---

<section class="page-hero sm" style="background-image: url({{site.baseurl}}/{{page.banner}});">
  <div class="row flex-row">
    <div class="hero-text ">
      <h1>OEM Modem Development Platform</h1>
      <p>An embedded platform for building custom underwater modems and hybrid communication nodes.</p>
    </div>
  </div>
</section>
<div class="row large" style="padding:8px 1rem 0">
  <a href="javascript:history.back()">&#8592; Back</a>
</div>

<section class="unet" style="padding:4rem 0">
  <div class="row large">
    <div class="large-5 columns"> 
      <h3 class="text-left orange text-3xl m0 capitalize-none">UnetCube</h3>
      <p class="lead">UnetCube is a compact embedded computing platform running UnetStack natively. It acts as the “digital layer” of a modem, allowing developers to connect their own analog electronics and sensor interfaces while relying on UnetStack for communication and networking intelligence. This dramatically reduces development time by eliminating the need to rewrite core PHY, MAC or networking layers while developing your own modem.</p>
      <p>UnetCube provides a powerful, software-defined foundation for OEM developers to create differentiated modems by combining UnetStack with their own analog front-end and sensor interface hardware.</p>
      <div class="include-form">
        {%- include formRequestQuote.html -%}
      </div>
    </div>
    <div class="large-7 columns">
      <img alt="Unetstack" src="{{site.baseurl}}/images/unetstack-vao-01.jpg" style="width:100%; height:auto; border-radius: 12px"/>
    </div>  
  </div>
</section>

<section class="unet" style="padding:4rem 0">
  <div class="row large">
    <div class="large-7 columns">
      <img alt="Unetstack" src="{{site.baseurl}}/images/unetstack-simulator-01.jpg" style="width:100%; height:auto; border-radius: 12px"/>
    </div>  
    <div class="large-5 columns"> 
      <h3 class="text-left orange text-3xl m0 capitalize-none">Key Capabilities</h3>
      <ul>
        <li>Runs UnetStack on embedded SBCs with full agent support</li>
        <li>Supports custom analog/DAQ integration</li>
        <li>Unified development workflow: simulate → HIL → deploy</li>
        <li>Full UnetStack physical layer and complete network stack running on user hardware</li>
        <li>Supports custom analog/DAQ integration</li>
        <li>Complete control over hardware design</li>
        <li>Ability to replace any UnetStack agent with user-defined implementations</li>
        <li>Optimal utilization of hardware capabilities</li>
      </ul>
    </div>
  </div>
</section>

<section class="unet" style="padding:4rem 0">
  <div class="row large">
    <div class="large-5 columns"> 
      <h3 class="text-left orange text-3xl m0 capitalize-none">Who It's For</h3>
      <ul>
        <li>OEMs developing their own underwater acoustic modems</li>
        <li>Researchers needing a flexible modem hardware engine for algorithm validation or modem development</li>
        <li>Companies building hybrid communication nodes with acoustic, optical or RF links</li>
        <li>Users who need hardware for HIL simulation but do not have full Subnero modems</li>
      </ul>
    </div>
    <div class="large-7 columns">
      <img alt="Unetstack" src="{{site.baseurl}}/images/unetstack-simulator-02.jpg" style="width:100%; height:auto; border-radius: 12px"/>
    </div>  
  </div>
</section>

<section class="unet" style="padding:4rem 0">
  <div class="row large">
    <div class="large-7 columns">
      <img alt="Unetstack" src="{{site.baseurl}}/images/unetstack-simulator-03.jpg" style="width:100%; height:auto; border-radius: 12px"/>
    </div>  
    <div class="large-5 columns"> 
      <h3 class="text-left orange text-3xl m0 capitalize-none">Workflow</h3>
      <ol>
        <li>Prototype using Unet Simulator or HIL platform</li>
        <li>Integrate your analog front-end and sensors with UnetCube</li>
        <li>Deploy your custom modem using UnetStack’s full communication stack</li>
      </ol>
    </div>
  </div>
</section>
