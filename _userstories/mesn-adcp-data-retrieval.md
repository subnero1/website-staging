---
layout: default
title: From Seabed to Shore
sub_title: From Seabed to Shore
excerpt: Subnero deployed SWIS – ADCP Edition at the MESN-UBN buoy off Pulau Ubin, demonstrating end-to-end wireless ADCP data retrieval from the seabed to the researcher's office. This case study shows how a four month deployment in challenging Singapore waters validated manual and automatic data delivery with no divers and no cables.
banner: images/case-study-banner-mesn.jpg
thumbnail: images/case-study-thumbnail-mesn.jpg
tag: Case Study
date: 2026-07-04
---

<section class="page-hero md gen4x" style="background-image: url({{site.baseurl}}/{{page.banner}});">
  <div class="row flex-row">
    <div class="hero-text">
      <h4 class="g4x-tag">{{ page.tag }}</h4>
      <h1>From Seabed <span class="text-gradient g-blue">to Shore</span></h1>
      <p>Demonstrating end-to-end wireless ADCP data retrieval within Singapore&rsquo;s Marine Environment Sensing Network (MESN).</p>
    </div>
  </div>
</section>

<section class="g4x-section case-studies">
  <div class="row large">
    <div class="columns full-header">
      <h2 class="sec-head text-gradient g-orange">Why does MESN need reliable data off the seabed?</h2>
    </div>
    <div class="large-7 columns">
      <p>The Marine Environment Sensing Network (MESN) is a collaboration across several of Singapore&rsquo;s research institutions. It runs three instrumented buoys around the island, each reporting more than thirty environmental parameters in real-time to the shared Ombak data platform.</p>
      <p>Such an observatory is only as good as its weakest link. Surface sensors are easy to reach, but much of the most valuable data sits on the seabed, and getting it to shore reliably and often is the hard part.</p>
      <p>That is the gap the MESN-UBN buoy was chosen to close. The site sits off the eastern coast of Pulau Ubin, an estuarine environment shaped by freshwater runoff and nearby fish farms, representative of many coastal waters across Southeast Asia, and exactly the kind of busy, demanding place a marine link has to survive.</p>
    </div>
    <div class="large-5 columns" style="background-color:#FFFAEA; padding:2rem;">
      <h3 class="sec-head text-gradient g-orange" style="font-size:22px;">At a Glance</h3>
      <ul class="case-study-list">
        <li>Network: Marine Environment Sensing Network (MESN), Singapore</li>
        <li>Site: MESN-UBN (Pulau Ubin), one of three MESN buoys</li>
        <li>Seabed instrument: Nortek Aquadopp Profiler ADCP</li>
        <li>System: SWIS &ndash; ADCP Edition</li>
        <li>Deployment: Four months, Feb to Jun 2026</li>
        <li>Conditions: Tropical coastal channel, heavy shipping, high biological noise</li>
      </ul>
    </div>
  </div>

  <div class="row large py2">
    <div class="large-8 columns">
      <figure>
        <img
          src="{{site.baseurl}}/images/mesn-map.jpg" alt="MESN buoy locations around Singapore" />
        <figcaption>MESN operates three buoys around Singapore: MESN-UBN (Pulau Ubin), MESN-SJI (St John&rsquo;s Island), and MESN-RLH (Raffles Lighthouse). This deployment ran at MESN-UBN. This map is an approximate view of Singapore for illustration purposes only.</figcaption>
      </figure>
    </div>
    <div class="large-4 columns">
      <a class="pdf-download" style="width: 224px;" href="{{site.baseurl}}/brochures/case-study-mesn-adcp.pdf" target="_blank" alt="Case Study" >
        <div class="pdf-img">
          <img src="{{site.baseurl}}/images/mesn-cover.jpg" alt="Case Study" />
        </div>
        <p class="download-link m0">
          <svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 15.575q-.2 0-.375-.062T11.3 15.3l-3.6-3.6q-.3-.3-.288-.7t.288-.7q.3-.3.713-.312t.712.287L11 12.15V5q0-.425.288-.712T12 4t.713.288T13 5v7.15l1.875-1.875q.3-.3.713-.288t.712.313q.275.3.288.7t-.288.7l-3.6 3.6q-.15.15-.325.213t-.375.062M6 20q-.825 0-1.412-.587T4 18v-2q0-.425.288-.712T5 15t.713.288T6 16v2h12v-2q0-.425.288-.712T19 15t.713.288T20 16v2q0 .825-.587 1.413T18 20z"/></svg>
          <span>Download PDF</span>
        </p>
      </a>
    </div>
  </div>

  <div class="row large py2">
    <div class="columns full-header">
      <h2 class="sec-head text-gradient g-orange">Getting seabed data to shore</h2>
    </div>
    <div class="large-6 columns">
      <p>A seabed current profiler can record continuously for months. The difficulty is never the recording, it is data retrieval, and every traditional option carries a penalty. A cable to the surface is expensive and vulnerable in a busy channel. Divers are costly, weather dependent, and raise safety concerns, and the data is weeks old by the time anyone sees it. Even an acoustic link provided by a traditional acoustic modem can suffer reliability or performance issues under challenging conditions like Singapore&rsquo;s, and it often stops at the buoy, leaving someone to build a separate system to move the data onward.</p>
      <p>The goal at MESN-UBN was to demonstrate a single continuous path: from the instrument on the seabed, through the water, to the buoy, and on to a researcher at a desk, with no diver, no cable to the surface, and no separate data plumbing. In short, to validate that the whole chain could work unattended in Singapore waters.</p>
    </div>
    <div class="large-6 columns">
      <figure class="m0 p0" style="max-width: 420px; margin: 0 auto;">
        <img
          src="{{site.baseurl}}/images/mesn-02.jpg" alt="The lander before deployment" />
        <figcaption>The lander before deployment, carrying the Nortek Aquadopp Profiler ADCP and the SWIS acoustic smart modem on its frame.</figcaption>
      </figure>
    </div>
  </div>

  <div class="row large py2">
    <div class="columns full-header">
      <h2 class="sec-head text-gradient g-orange">SWIS &ndash; ADCP Edition, end-to-end</h2>
    </div>
    <div class="columns">
      <p>On the seabed, a lander held the Nortek Aquadopp Profiler ADCP as part of the Subnero Wireless Integrated Suite (SWIS) &ndash; ADCP Edition. The SWIS acoustic smart modem, from the Subnero WNC series, ran on its own external battery, separate from the instrument, so that the instrument&rsquo;s power is independent of the acoustic link&rsquo;s availability and performance. The seabed acoustic smart modem, as part of SWIS, carried data from the lander, through the MESN buoy, to the researcher&rsquo;s office, using an acoustic link from the seabed SWIS modem to the topside SWIS modem on the buoy and a cellular backhaul from there, all seamlessly integrated within SWIS, so users did not have to build any additional infrastructure.</p>
      <p>SWIS, powered by UnetStack, ran the communication layer the whole way, a seamless link from the seabed to the user. Instead of handing data off at the buoy, SWIS presented a single continuous connection, so a researcher on shore could work with the seabed instrument as though it were on the bench in front of them.</p>
      <figure>
        <img
          src="{{site.baseurl}}/images/mesn-architecture.jpg" alt="End-to-end architecture" />
        <figcaption class="text-center">End-to-end architecture: the acoustic link carries data from the seabed SWIS modem to the topside SWIS modem on the MESN buoy, and a cellular backhaul delivers it to the researcher&rsquo;s office.</figcaption>
      </figure>
    </div>
  </div>

  <div class="row large py2">
    <div class="columns full-header">
      <h2 class="sec-head text-gradient g-orange">How it worked in practice?</h2>
    </div>
    <div class="columns">
      <p>The deployment exercised the two ways researchers want to reach their data. In manual mode, a user opens a browser, connects to the topside modem and then to the seabed modem from there, sees the seabed device&rsquo;s status and file list, and pulls down what they need, from the office, at any hour, without a vessel. In automatic mode, the modems wake on a set schedule, transfer data from the lander to the topside modem, and sleep again to save power, building up data on the surface so that users can access the topside modem remotely at any time to download it. The same deployment supported both at once.</p>
      <p>Access was deliberately simple. Through the SWIS interface a file came down in about two clicks, with nothing to install and no specialist training, which is what makes the system usable by researchers rather than only by the engineers who built it.</p>
      <p>The deployment also exercised something less common: control of the seabed setup after it was deployed. Working from shore, the team changed the lander&rsquo;s configuration in the water, adjusting data collection frequency and switching modes, without recovering or revisiting the lander. This was validated as an experimental capability. Both modes worked.</p>
      <figure>
        <img
          src="{{site.baseurl}}/images/mesn-dashboard.png" alt="The SWIS – ADCP Edition interface" />
        <figcaption class="text-center">The SWIS &ndash; ADCP Edition interface, showing the topside modem connected to the seabed modem, with the file listing.</figcaption>
      </figure>
    </div>
  </div>

  <div class="row large py2">
    <div class="columns full-header">
      <h2 class="sec-head text-gradient g-orange">Operating in challenging Singapore waters</h2>
    </div>
    <div class="columns">
      <p>The MESN-UBN site tested the link rigorously. Ambient noise is typically high in tropical waters: shipping fills these waters, and the biological background is just as loud, with snapping shrimp adding sharp, broadband noise across the modems&rsquo; band.</p>
      <p>The water is also heavily turbid and biofouling builds up fast, one more reason a reliable acoustic link matters where optical methods struggle, and a reminder that a sustained observatory is an operational commitment. The modem&rsquo;s independent battery and multiple stored copies of each file added redundancy, so a single point of trouble did not put the data at risk.</p>
    </div>
    <div class="large-6 columns">
      <figure class="m0 p0" style="max-width: 420px; margin: 0 auto;">
        <img
          src="{{site.baseurl}}/images/mesn-03.jpg" alt="The lander on the seabed in turbid water" />
        <figcaption>The lander on the seabed, seen from close above. The dense green water shows how low visibility is here.</figcaption>
      </figure>
    </div>
    <div class="large-6 columns">
      <figure class="m0 p0" style="max-width: 420px; margin: 0 auto;">
        <img
          src="{{site.baseurl}}/images/mesn-04.jpg" alt="The lander on recovery" />
        <figcaption>The lander on recovery, showing the extent of biofouling after four months in the water.</figcaption>
      </figure>
    </div>
  </div>

  <div class="row large py2">
    <div class="columns full-header">
      <h2 class="sec-head text-gradient g-orange">What the deployment validated</h2>
      <p>Across four months (Feb to Jun 2026):</p>
    </div>
    <div class="large-6 columns">
      <ul class="case-study-list">
        <li>A single end-to-end path from the seabed instrument to a researcher on shore, with no cable and no diver.</li>
        <li>Remote access by distributed researchers, anytime and anywhere.</li>
        <li>Remote reconfiguration of the lander after deployment, validated as experimental.</li>
      </ul>
    </div>
    <div class="large-6 columns">
      <ul class="case-study-list">
        <li>Both manual and automatic retrieval in one deployment.</li>
        <li>Simple operation, with downloads in about two clicks and no specialist training.</li>
        <li>Resilience to high noise, with an independent modem battery and redundant copies.</li>
      </ul>
    </div>
  </div>

  <div class="row large py2">
    <div class="columns full-header">
      <h2 class="sec-head text-gradient g-orange">Where this goes next?</h2>
    </div>
    <div class="columns">
      <p>The approach scales well beyond a research buoy. SWIS &ndash; ADCP Edition is already deployed around the world, each deployment with its own concept of operation. The needs differ from site to site, but the common thread is the one demonstrated at Pulau Ubin: data delivered from the seabed to the user as a single connected path.</p>
      <div class="feature-grid col3">
        <div class="unet-card casestudy-card">
          <div>
            <h4 class="capitalize-none text-xl normal-spacing text-600">Offshore Energy: Between vessel visits</h4>
            <p>Retrieve seabed data on demand instead of sending a boat for every download.</p>
          </div>
        </div>
        <div class="unet-card casestudy-card">
          <div>
            <h4 class="capitalize-none text-xl normal-spacing text-600">Uncrewed Vehicles: A mobile gateway</h4>
            <p>Pair the topside node with a USV, so it no longer has to stay in one place.</p>
          </div>
        </div>
        <div class="unet-card casestudy-card">
          <div>
            <h4 class="capitalize-none text-xl normal-spacing text-600">Observatories: Low-touch delivery</h4>
            <p>On demand data access from long-running networks like MESN, with minimal field work.</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="row large py2">
    <div class="large-6 columns">
      <div class="testimonial-card">
        <blockquote class="testimonial" style="background-color:#FFFAEA;">
          <div class="quote">
            <svg viewBox="0 0 48 48"><path fill="currentColor" fill-rule="evenodd" d="M18.853 9.116Q7.558 16.37 6.303 26.003C5 36 13.94 40.893 18.47 36.497s1.815-9.977-1.465-11.503s-5.286-.994-4.936-3.033s5.016-7.69 9.116-10.322a.75.75 0 0 0 .114-1.02L20.285 9.3c-.44-.572-.862-.55-1.432-.185m19.826.001q-11.295 7.254-12.55 16.887C24.825 36 33.765 40.893 38.295 36.497s1.815-9.977-1.466-11.503s-5.286-.994-4.936-3.033s5.017-7.69 9.117-10.322a.75.75 0 0 0 .113-1.02L40.11 9.3c-.44-.572-.862-.55-1.431-.185" clip-rule="evenodd"/></svg>
          </div>
          <p>It is great to see our collaborators validate their systems on MESN infrastructure, and good to be able to reach assets on the seabed from the comfort of our office.</p>
          <div class="author">
            <div class="photo"><img src="{{site.baseurl}}/images/koay-teong-beng.jpg" alt="Koay Teong Beng, Lead PI, Acoustic Research Laboratory (ARL)" /></div>
            <div class="name">
              <p>Koay Teong Beng</p>
              <small>Lead PI, Acoustic Research Laboratory (ARL)</small>
            </div>
          </div>
        </blockquote>
      </div>
    </div>
    <div class="large-6 columns">
      <div class="testimonial-card">
        <blockquote class="testimonial" style="background-color:#FFFAEA;">
          <div class="quote">
            <svg viewBox="0 0 48 48"><path fill="currentColor" fill-rule="evenodd" d="M18.853 9.116Q7.558 16.37 6.303 26.003C5 36 13.94 40.893 18.47 36.497s1.815-9.977-1.465-11.503s-5.286-.994-4.936-3.033s5.016-7.69 9.116-10.322a.75.75 0 0 0 .114-1.02L20.285 9.3c-.44-.572-.862-.55-1.432-.185m19.826.001q-11.295 7.254-12.55 16.887C24.825 36 33.765 40.893 38.295 36.497s1.815-9.977-1.466-11.503s-5.286-.994-4.936-3.033s5.017-7.69 9.117-10.322a.75.75 0 0 0 .113-1.02L40.11 9.3c-.44-.572-.862-.55-1.431-.185" clip-rule="evenodd"/></svg>
          </div>
          <p>Being able to download data from the office whenever we want makes our customers&rsquo; work much easier. They can focus on using the data instead of worrying about how to collect it.</p>
          <div class="author">
            <div class="photo"><img src="{{site.baseurl}}/images/veronica-tan.jpg" alt="Veronica Tan, Subsea IoT Engineer, Subnero" /></div>
            <div class="name">
              <p>Veronica Tan</p>
              <small>Subsea IoT Engineer, Subnero</small>
            </div>
          </div>
        </blockquote>
      </div>
    </div>
  </div>

  <div class="row large hlight-row ">
    <div class="columns full-header">
      <h3 class="text-3xl text-600 capitalize-none text-gradient g-orange inline-block normal-spacing">One connected path, demonstrated in the water.</h3>
    </div>
    <div class="large-7 columns">
      <p>The same end-to-end path is ready to adapt to your concept of operation, from a single lander to a network of sites.</p>
      <h4 class="capitalize-none text-xl normal-spacing text-600">About Subnero</h4>
      <p>Subnero builds underwater wireless communication and networking systems: the WNC series of smart modems, the UnetStack software stack, and the SWIS family of integrated solutions.</p>
      <h4 class="capitalize-none text-xl normal-spacing text-600">About MESN</h4>
      <p>Marine Environment Sensing Network (MESN) establishes instrumented buoys around Singapore for sustained, real-time marine observation, with data shared through the Ombak platform.</p>
      <p><a href="{{site.baseurl}}/contact">Talk to us about wireless data retrieval for your deployment.</a></p>
      <p><small>Acknowledgements. This deployment was hosted on MESN infrastructure, in collaboration with the MESN team.</small></p>
    </div>
    <div class="large-5 columns">
      <figure class="casestudy-img" style="max-width: 320px" >
        <img
          src="{{site.baseurl}}/images/mesn-subnero-modem.jpg" alt="Subnero WNC series modem"/>
        <figcaption class="text-center">Subnero WNC series acoustic smart modem</figcaption>
      </figure>
    </div>
  </div>
</section>
