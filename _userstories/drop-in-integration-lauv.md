---
layout: default
title: Drop-In Integration – How LAUV Became Subnero Ready
sub_title: Drop-In Integration – How LAUV Became Subnero Ready
excerpt: How ARL at NUS integrated a Subnero smart modem into a vehicle running Dune, with no changes to the modem, the vehicle, or the software on either side.
banner: images/case-study-banner-lauv.jpg
thumbnail: images/case-study-thumbnail-lauv.jpg
tag: Case Study
date: 2026-09-20
---

<style>
  .bridge-diagram {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    background-color: #F8FAFC;
    border-radius: 8px;
    padding: 2rem 1.5rem;
  }
  .bridge-diagram .bridge-node {
    flex: 1 1 300px;
    min-width: 280px;
  }
  .bridge-diagram .bridge-label {
    font-size: 0.75rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #6B7A88;
    margin: 0 0 0.35rem;
  }
  .bridge-diagram .bridge-title {
    font-size: 1.05rem;
    font-weight: 600;
    color: #1C5D91;
    margin: 0 0 0.5rem;
  }
  .bridge-diagram .bridge-msgs {
    list-style: none;
    margin: 0 0 0.35rem;
    padding: 0;
    font-family: "SFMono-Regular", Menlo, Consolas, monospace;
    font-size: 0.82rem;
    color: #33475B;
  }
  .bridge-diagram .bridge-msgs li { margin: 0 0 0.15rem; }
  .bridge-diagram .bridge-port {
    font-size: 0.78rem;
    color: #6B7A88;
    margin: 0;
    padding-bottom: 0.75rem;
    border-bottom: 1px solid #D6DEE6;
  }
  .bridge-diagram .bridge-agent {
    font-size: 1.05rem;
    font-weight: 600;
    color: #1C5D91;
    margin: 0.75rem 0 0.2rem;
  }
  .bridge-diagram .bridge-agent-sub {
    font-size: 0.8rem;
    color: #6B7A88;
    margin: 0;
  }
  .bridge-diagram .bridge-link {
    flex: 0 0 auto;
    text-align: center;
    padding: 0 0.5rem;
  }
  .bridge-diagram .bridge-link p {
    font-size: 0.72rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #6B7A88;
    margin: 0;
  }
  .bridge-diagram .bridge-link .wave {
    font-size: 1.4rem;
    color: #E8772E;
    letter-spacing: 0.1em;
  }
  .dune-config {
    background-color: #0F2430;
    border-radius: 8px;
    padding: 1.25rem 1.5rem;
    overflow-x: auto;
    margin: 0;
  }
  .dune-config code {
    font-family: "SFMono-Regular", Menlo, Consolas, monospace;
    font-size: 0.82rem;
    line-height: 1.6;
    color: #C3D4E2;
    background: none;
    padding: 0;
    border: none;
    white-space: pre;
  }
  .dune-config .cfg-task { color: #E8772E; }
  .split-line {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
  }
  .split-line > div {
    flex: 1 1 240px;
    border-top: 1px solid #D6DEE6;
    padding-top: 1rem;
  }
  .split-line h4 {
    font-size: 0.78rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #1C5D91;
    margin: 0 0 0.5rem;
  }
  .split-line p { margin: 0; }
  .about-logo {
    margin: 1.25rem 0 0;
    display: flex;
    align-items: flex-end;
    min-height: 60px;
  }
  .about-logo img {
    width: auto;
    max-width: 100%;
  }
  .about-logo.square img { height: 60px; }
  .about-logo.wide img { height: 38px; }
  .case-studies .testimonial-card .photo,
  .case-studies .testimonial-card .photo img { border-radius: 50%; }
  a.cite {
    color: #1C5D91;
    font-weight: 600;
    text-decoration: none;
    white-space: nowrap;
  }
  a.cite:hover { text-decoration: underline; }
  .reference p[id] {
    scroll-margin-top: 120px;
    border-radius: 4px;
    transition: background-color 0.4s ease;
  }
  .reference p[id]:target { background-color: #FFF3D6; }
</style>

<section class="page-hero md gen4x" style="background-image: url({{site.baseurl}}/{{page.banner}});">
  <div class="row flex-row">
    <div class="hero-text">
      <h4 class="g4x-tag">{{ page.tag }}</h4>
      <h1>Drop-In Integration: <span class="text-gradient g-blue">How LAUV Became Subnero Ready</span></h1>
      <p>How ARL at NUS integrated a Subnero smart modem into a vehicle running Dune, with no changes to the modem, the vehicle, or the software on either side.</p>
      <p><small>Acoustic Research Laboratory, National University of Singapore</small></p>
    </div>
  </div>
</section>

<section class="g4x-section case-studies">
  <div class="row large">
    <div class="columns full-header">
      <h2 class="sec-head text-gradient g-orange">Overview</h2>
    </div>
    <div class="large-7 columns">
      <p><b>When a research team puts a multi-hundred thousand or even million dollar AUV in the water, communication is what stands between a controlled mission and an anxious wait. Without a reliable acoustic link, every moment the vehicle is submerged is nerve wracking, the operators left to hope it surfaces where and when it should. Good communication turns those moments into command and control.</b></p>
      <p>The <a class="reference-link" href="https://arl.nus.edu.sg/" target="_blank" rel="noopener">Acoustic Research Laboratory (ARL)</a> at the National University of Singapore needed a capable AUV for a range of demanding projects, often in challenging conditions: shallow tropical waters, the strong currents of the Singapore Strait, and operations close to busy shipping channels. They chose the <a class="reference-link" href="https://www.oceanscan-mst.com/light-autonomous-underwater-vehicle/" target="_blank" rel="noopener">OceanScan MST LAUV</a>. To give it command and control that could stand up to those conditions, they integrated a Subnero smart modem. They did the work as a third party, with no customization to the modem or the vehicle, and only a small amount of fully user-defined software.</p>
      <p>For anyone running an LAUV today, that makes the Subnero modem a true drop-in.</p>
    </div>
    <div class="large-5 columns">
      <a class="pdf-download" href="{{site.baseurl}}/brochures/case-study-drop-in-integration-lauv.pdf" target="_blank" alt="Drop-In Integration: How LAUV Became Subnero Ready" style="width:260px;">
        <div class="pdf-img">
          <img src="{{site.baseurl}}/images/case-study-drop-in-integration-lauv-cover.jpg" alt="Drop-In Integration: How LAUV Became Subnero Ready" />
        </div>
        <p class="download-link">
          <svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 15.575q-.2 0-.375-.062T11.3 15.3l-3.6-3.6q-.3-.3-.288-.7t.288-.7q.3-.3.713-.312t.712.287L11 12.15V5q0-.425.288-.712T12 4t.713.288T13 5v7.15l1.875-1.875q.3-.3.713-.288t.712.313q.275.3.288.7t-.288.7l-3.6 3.6q-.15.15-.325.213t-.375.062M6 20q-.825 0-1.412-.587T4 18v-2q0-.425.288-.712T5 15t.713.288T6 16v2h12v-2q0-.425.288-.712T19 15t.713.288T20 16v2q0 .825-.587 1.413T18 20z"/></svg>
          <span>Download PDF</span>
        </p>
      </a>
    </div>
    <div class="columns">
      <div class="hlight-card">
        <h3>&ldquo;We simply mapped what UnetStack already exposes to what the Dune software already expects, and the console just saw the vehicle.</h3>
        <p style="color:#fff; margin:0; text-align:right;">Rajat, ARL, NUS</p>
      </div>
    </div>
  </div>

  <div class="row large py2">
    <div class="columns">
      <div class="feature-grid col3">
        <div class="unet-card casestudy-card">
          <div>
            <h5 class="text-gradient g-orange capitalize-none text-xl normal-spacing text-600">Problem</h5>
            <p>The LAUV runs on the Dune software ecosystem and no integration with Subnero modems existed.</p>
          </div>
        </div>
        <div class="unet-card casestudy-card">
          <div>
            <h5 class="text-gradient g-blue capitalize-none text-xl normal-spacing text-600">Solution</h5>
            <p>ARL built a small open source software bridge that runs on the modems themselves, while OceanScan MST handled the mechanical and electrical fit.</p>
          </div>
        </div>
        <div class="unet-card casestudy-card">
          <div>
            <h5 class="text-gradient g-green capitalize-none text-xl normal-spacing text-600">Result</h5>
            <p>Subnero modems are natively supported in the LAUV, with more than a year of reliable field operations in challenging waters.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="columns py2" style="text-align:center;">
      <figure>
        <img src="{{site.baseurl}}/images/lauv-arl-modem-fitted.jpg" alt="The OceanScan MST LAUV on its trolley at ARL, with the Subnero modem section fitted forward of the orange hull." />
      </figure>
    </div>
  </div>

  <div class="row large py2">
    <div class="columns full-header">
      <h2 class="sec-head text-gradient g-orange">The Challenge</h2>
      <p>Singapore waters are among the most demanding in the world for underwater acoustic communication.</p>
    </div>
    <div class="large-7 columns">
      <p>Snapping shrimp blanket the warm, shallow soundscape with intense impulsive clicks, at source levels above 190 dB re 1 &micro;Pa at 1 m, producing heavy-tailed, non-Gaussian noise that degrades receivers designed around the usual Gaussian assumptions <a class="cite" href="#ref-1">[1]</a>. The shipping lanes add a second layer. Breaking waves and passing ships inject bubbles into the water column, and while the dense clouds clear within minutes, long-lived microbubbles of around 100 &micro;m and smaller persist for hours and drift with the currents far beyond the lanes. With a ship passing every few minutes, their presence is effectively constant <a class="cite" href="#ref-2">[2]</a>.</p>
      <p>Subnero modems were born in exactly these waters, designed around the true noise statistics rather than the Gaussian ideal, and they bring advanced networking features well suited to AUV operations. The LAUV, however, runs on the Dune software ecosystem, and no integration between the two existed. The open questions were how hard it would be, at what level the work would sit, mechanical, electrical, or software, and who would have to carry it.</p>
    </div>
    <div class="large-5 columns">
      <figure class="m0 p0">
        <img src="{{site.baseurl}}/images/lauv-arl-surfaced.jpg" alt="The LAUV on the surface in Singapore waters, alongside the pier at ARL." />
      </figure>
    </div>
    <div class="columns mt2">
      <div class="hlight-card">
        <h3>Someone had to build the bridge.</h3>
      </div>
    </div>
  </div>

  <div class="row large py2">
    <div class="columns full-header">
      <h2 class="sec-head text-gradient g-orange">The Integration</h2>
      <p>The answer turned out to be: not hard at all, and no one had to carry very much.</p>
    </div>
    <div class="columns">
      <h3 class="sec-head text-gradient g-orange">Software</h3>
    </div>
    <div class="large-6 columns">
      <p>The software bridge between UnetStack, the network stack that runs on every Subnero modem, and Dune was built entirely by ARL and is now open source at <a class="reference-link" href="https://github.com/org-arl/unet-dune" target="_blank" rel="noopener">github.com/org-arl/unet-dune</a>. No source code was modified on either side. Dune was not patched and UnetStack was not touched. The bridge is a pair of small UnetStack agents, LAUVModem on the vehicle modem and MantaModem on the topside modem, written in Groovy and running on the modems themselves, so no companion computer or extra hardware went into the vehicle.</p>
    </div>
    <div class="large-6 columns">
      <p>What made it simple is that Dune already defines a generic abstraction for an underwater acoustic modem, and the bridge implements it. Each agent speaks IMC, Dune's native message protocol, over TCP to its co-located Dune, and forwards traffic acoustically to the peer modem. To Dune, the acoustic link looks like an ordinary TCP transport.</p>
    </div>
    <div class="columns py2">
      <div class="bridge-diagram">
        <div class="bridge-node">
          <p class="bridge-label">In the Vehicle</p>
          <p class="bridge-title">LAUV Dune</p>
          <ul class="bridge-msgs">
            <li>&#9660; UamTxFrame &middot; UamTxRange</li>
            <li>&#9650; UamRxFrame &middot; UamRxRange</li>
          </ul>
          <p class="bridge-port">IMC over TCP &middot; port 9999</p>
          <p class="bridge-agent">LAUVModem agent</p>
          <p class="bridge-agent-sub">UnetStack &middot; runs on the vehicle modem</p>
        </div>
        <div class="bridge-link">
          <p>Acoustic<br />Link</p>
          <p class="wave">((( &#8646; )))</p>
        </div>
        <div class="bridge-node">
          <p class="bridge-label">Topside</p>
          <p class="bridge-title">Topside Dune / Neptus</p>
          <ul class="bridge-msgs">
            <li>&#9660; UamTxFrame &middot; UamTxRange</li>
            <li>&#9650; UamRxFrame &middot; UamRxRange</li>
          </ul>
          <p class="bridge-port">IMC over TCP &middot; port 9998</p>
          <p class="bridge-agent">MantaModem agent</p>
          <p class="bridge-agent-sub">UnetStack &middot; runs on the topside modem, MANTA gateway</p>
        </div>
      </div>
    </div>
    <div class="columns">
      <p>On the Dune side there is no new code at all, only a short block of configuration using the standard Transports.TCP.Client task that Dune already ships with:</p>
    </div>
    <div class="large-6 columns">
      <pre class="dune-config"><code><span class="cfg-task">[Transports.TCP.Client]</span>
Enabled          = Always
Entity Label     = Acoustic Modem
Server - Address = &lt;IP of the co-located Subnero modem&gt;
Server - Port    = 9999
Transports       = UamTxFrame,
                   UamTxRange,
                   VehicleMedium</code></pre>
    </div>
    <div class="large-6 columns">
      <p>A matching block on the topside points at the modem in the MANTA gateway on port 9998. Those few lines are the entire Dune side of the integration. As a bonus, the same link carries acoustic ranging alongside communication, so range to the vehicle comes free with the comms. Deploying the bridge is equally light: the compiled agents are uploaded to the two modems, the modems are rebooted, and the bridge is running.</p>
    </div>
    <div class="columns mt2">
      <div class="hlight-card">
        <h3>The result: the Dune console worked with the vehicle as is. No console changes, no vehicle software changes. The operator saw the LAUV over the acoustic link the same way they would over any other link.</h3>
      </div>
    </div>
  </div>

  <div class="row large py2">
    <div class="columns">
      <h3 class="sec-head text-gradient g-orange">Hardware</h3>
    </div>
    <div class="large-6 columns">
      <p>The physical work was just as contained. Subnero shipped the modems to <a class="reference-link" href="https://www.oceanscan-mst.com/" target="_blank" rel="noopener">OceanScan MST</a> along with GA drawings and electrical interface details, one modem for the vehicle and one for the topside MANTA gateway. OceanScan MST fitted them, handled the mechanical and electrical integration seamlessly, and wrote no software at all.</p>
    </div>
    <div class="large-6 columns">
      <p>Once the fit was done, they placed the software libraries provided by ARL in the appropriate locations, powered the modems on, and the acoustic link was instantly available in the console on both the vehicle and the gateway.</p>
    </div>
    <div class="columns">
      <h3 class="sec-head text-gradient g-orange">Three parties, one clean split of effort.</h3>
      <div class="split-line">
        <div>
          <h4>ARL</h4>
          <p>Owned the software.</p>
        </div>
        <div>
          <h4>OceanScan MST</h4>
          <p>Owned the mechanical and electrical fit.</p>
        </div>
        <div>
          <h4>Subnero</h4>
          <p>Supplied an open configuration modem and its specifications.</p>
        </div>
      </div>
    </div>
    <div class="columns mt2">
      <p>OceanScan MST then validated the result in their own testing environment, and the entire integration and validation took less than a week.</p>
    </div>
  </div>

  <div class="row large py2">
    <div class="columns full-header">
      <h2 class="sec-head text-gradient g-orange">A Year in the Water</h2>
    </div>
    <div class="large-6 columns">
      <p>Since the integration, ARL has been operating the vehicle and its acoustic link for more than a year, in precisely the conditions the lab set out to work in: shallow tropical waters, strong currents, and busy shipping channels. Across that time the link has delivered strong performance and reliable communication in the field.</p>
    </div>
    <div class="large-6 columns">
      <p>For the projects the LAUV serves, that reliability is a game changer. Knowing what the vehicle is doing at all times, rather than launching it and holding your breath until it resurfaces, is a direct boost to operations.</p>
    </div>
    <div class="columns py2" style="text-align:center;">
      <figure>
        <img src="{{site.baseurl}}/images/lauv-oceanscan-dock.jpg" alt="An OceanScan MST LAUV on its stand at the dockside, ready for deployment." />
      </figure>
    </div>
  </div>

  <div class="row large py2">
    <div class="columns full-header">
      <h2 class="sec-head text-gradient g-orange">Why It Matters</h2>
    </div>
    <div class="large-6 columns">
      <p>For LAUV operators, the message is immediate. The Subnero modem is available as a drop-in, and the LAUV team at OceanScan MST can now support Subnero modem integration requests for any customer. Work with Subnero or OceanScan MST to get your vehicle fitted.</p>
    </div>
    <div class="large-6 columns">
      <p>The broader message is about openness. ARL did this integration as a third party, on their own terms, with their own tools, without depending on Subnero to support any step, and the code is open source for anyone to build on. If you are weighing how open a software-defined modem really is, this case study is the answer in practice.</p>
    </div>
  </div>

  <div class="row large py2">
    <div class="columns full-header">
      <h3 class="text-3xl text-600 capitalize-none text-gradient g-orange inline-block normal-spacing">Now Available</h3>
    </div>
    <div class="large-6 columns">
      <p>Subnero smart modems are now natively supported in the OceanScan MST's LAUV. The integration code developed by ARL is open source at <a class="reference-link" href="https://github.com/org-arl/unet-dune" target="_blank" rel="noopener">github.com/org-arl/unet-dune</a> and includes a two-node simulator and a self-test that verifies the bridge round trips in both directions, so the whole thing can be tried on a laptop without any hardware.</p>
    </div>
    <div class="large-6 columns">
      <p>The integration gets even easier going forward. Subnero's latest <a class="reference-link" href="{{site.baseurl}}/products/wnc/gen4x/" target="_blank" rel="noopener">Gen4X modems</a> come in a smaller form factor than the previous generation used in ARL's vehicle, so a new fit takes up even less space inside the LAUV.</p>
    </div>
  </div>

  <div class="row large">
    <div class="g4x-section-head">
      <h2 class="sec-head lg text-gradient g-orange normal-spacing">Perspectives</h2>
    </div>
    <div class="row">
      <div class="feature-grid col2">
        <div class="testimonial-card">
          <blockquote class="testimonial">
            <div class="quote">
              <svg viewBox="0 0 48 48"><path fill="currentColor" fill-rule="evenodd" d="M18.853 9.116Q7.558 16.37 6.303 26.003C5 36 13.94 40.893 18.47 36.497s1.815-9.977-1.465-11.503s-5.286-.994-4.936-3.033s5.016-7.69 9.116-10.322a.75.75 0 0 0 .114-1.02L20.285 9.3c-.44-.572-.862-.55-1.432-.185m19.826.001q-11.295 7.254-12.55 16.887C24.825 36 33.765 40.893 38.295 36.497s1.815-9.977-1.466-11.503s-5.286-.994-4.936-3.033s5.017-7.69 9.117-10.322a.75.75 0 0 0 .113-1.02L40.11 9.3c-.44-.572-.862-.55-1.431-.185" clip-rule="evenodd"/></svg>
            </div>
            <p>Having a reliable acoustic link changed how we run missions. Instead of launching the vehicle and waiting, we know what it is doing the whole time. In conditions like ours that is the difference between hoping and operating.</p>
            <div class="author">
              <div class="photo"><img src="{{site.baseurl}}/images/bharat-arl.jpg" alt="Bharat" /></div>
              <div class="name">
                <p>Bharat</p>
                <small>ARL, NUS</small>
              </div>
            </div>
          </blockquote>
        </div>
        <div class="testimonial-card">
          <blockquote class="testimonial">
            <div class="quote">
              <svg viewBox="0 0 48 48"><path fill="currentColor" fill-rule="evenodd" d="M18.853 9.116Q7.558 16.37 6.303 26.003C5 36 13.94 40.893 18.47 36.497s1.815-9.977-1.465-11.503s-5.286-.994-4.936-3.033s5.016-7.69 9.116-10.322a.75.75 0 0 0 .114-1.02L20.285 9.3c-.44-.572-.862-.55-1.432-.185m19.826.001q-11.295 7.254-12.55 16.887C24.825 36 33.765 40.893 38.295 36.497s1.815-9.977-1.466-11.503s-5.286-.994-4.936-3.033s5.017-7.69 9.117-10.322a.75.75 0 0 0 .113-1.02L40.11 9.3c-.44-.572-.862-.55-1.431-.185" clip-rule="evenodd"/></svg>
            </div>
            <p>On our side, it was a straightforward mechanical and electrical fit, simpler than similar integrations we have carried with other modems. The modem went in, and the team was ready to go to the water.</p>
            <div class="author">
              <div class="photo"><img src="{{site.baseurl}}/images/luis-madureira.jpg" alt="Luis Madureira" /></div>
              <div class="name">
                <p>Luis Madureira</p>
                <small>OceanScan MST</small>
              </div>
            </div>
          </blockquote>
        </div>
        <div class="testimonial-card">
          <blockquote class="testimonial">
            <div class="quote">
              <svg viewBox="0 0 48 48"><path fill="currentColor" fill-rule="evenodd" d="M18.853 9.116Q7.558 16.37 6.303 26.003C5 36 13.94 40.893 18.47 36.497s1.815-9.977-1.465-11.503s-5.286-.994-4.936-3.033s5.016-7.69 9.116-10.322a.75.75 0 0 0 .114-1.02L20.285 9.3c-.44-.572-.862-.55-1.432-.185m19.826.001q-11.295 7.254-12.55 16.887C24.825 36 33.765 40.893 38.295 36.497s1.815-9.977-1.466-11.503s-5.286-.994-4.936-3.033s5.017-7.69 9.117-10.322a.75.75 0 0 0 .113-1.02L40.11 9.3c-.44-.572-.862-.55-1.431-.185" clip-rule="evenodd"/></svg>
            </div>
            <p>Because neither side had to be modified, the work was clean. We translated between two interfaces, tested our patch and went to the field. That is the whole story.</p>
            <div class="author">
              <div class="photo"><img src="{{site.baseurl}}/images/rajat-arl.jpg" alt="Rajat" /></div>
              <div class="name">
                <p>Rajat</p>
                <small>ARL, NUS</small>
              </div>
            </div>
          </blockquote>
        </div>
      </div>
    </div>
  </div>

  <div class="row large py2">
    <div class="columns full-header">
      <h3 class="text-3xl text-600 capitalize-none text-gradient g-orange inline-block normal-spacing">Getting Started</h3>
    </div>
    <div class="columns">
      <p>For any team running an LAUV, or any integrator weighing how open a modem really is, this is the answer in practice. Talk to Subnero or OceanScan MST to get your vehicle fitted, or start from the open source integration at <a class="reference-link" href="https://github.com/org-arl/unet-dune" target="_blank" rel="noopener">github.com/org-arl/unet-dune</a>.</p>
    </div>
    <div class="columns py2">
      <div class="feature-grid col3">
        <div class="unet-card casestudy-card">
          <div>
            <h5 class="text-gradient g-orange capitalize-none text-xl normal-spacing text-600">About the Acoustic Research Laboratory</h5>
            <p>The Acoustic Research Laboratory (ARL) at the National University of Singapore conducts research in underwater acoustics, communication, and robotics, with a long record of field work in the challenging waters around Singapore. <a class="reference-link" href="https://arl.nus.edu.sg/" target="_blank" rel="noopener">arl.nus.edu.sg</a></p>
            <p class="about-logo square"><img src="{{site.baseurl}}/images/logo-arl-nus.png" alt="Acoustic Research Laboratory, National University of Singapore" /></p>
          </div>
        </div>
        <div class="unet-card casestudy-card">
          <div>
            <h5 class="text-gradient g-blue capitalize-none text-xl normal-spacing text-600">About OceanScan MST</h5>
            <p>OceanScan MST is an independent Portuguese company founded in 2008 as a spin-off from the Underwater Systems and Technology Laboratory at University of Porto. Its LAUV is a man-portable autonomous underwater vehicle deployed worldwide with thousands of hours of real world operation. <a class="reference-link" href="https://www.oceanscan-mst.com/" target="_blank" rel="noopener">oceanscan-mst.com</a></p>
            <p class="about-logo wide"><img src="{{site.baseurl}}/images/logo-oceanscan-mst.png" alt="OceanScan Marine Systems &amp; Technology" /></p>
          </div>
        </div>
        <div class="unet-card casestudy-card">
          <div>
            <h5 class="text-gradient g-green capitalize-none text-xl normal-spacing text-600">About Subnero</h5>
            <p>Subnero develops underwater communication and networking technologies that aim to make underwater connectivity as seamless and scalable as connectivity on land, advancing the Internet of the Oceans. It serves defense, offshore energy, subsea, and research sectors worldwide. <a class="reference-link" href="https://subnero.com" target="_blank" rel="noopener">subnero.com</a></p>
            <p class="about-logo square"><img src="{{site.baseurl}}/images/subnero-logo.svg" alt="Subnero" /></p>
          </div>
        </div>
      </div>
    </div>
    <div class="columns py2" style="text-align:center;">
      <figure>
        <img src="{{site.baseurl}}/images/lauv-handcarry.jpg" alt="The LAUV being hand carried at the waterside, a man-portable autonomous underwater vehicle." />
      </figure>
    </div>
    <div class="columns">
      <div class="reference">
        <h5>References</h5>
        <p id="ref-1"><a class="reference-link" href="https://arl.nus.edu.sg/wp-content/publications/Chitre2012ly.pdf" target="_blank" rel="noopener">[1] M. Chitre, M. Legg, and T. B. Koay, "Snapping shrimp dominated natural soundscape in Singapore waters," Contributions to Marine Science, pp. 127 to 134, 2012.</a></p>
        <p id="ref-2"><a class="reference-link" href="https://arl.nus.edu.sg/wp-content/uploads/2020/11/YHChua2020JOE_Long-lived.pdf" target="_blank" rel="noopener">[2] G. Chua, M. Chitre, and G. B. Deane, "Long-Lived Bubbles and Their Impact on Underwater Acoustic Communication," IEEE Journal of Oceanic Engineering, 2021.</a></p>
      </div>
      <div class="reference">
        <h5>Image Credits</h5>
        <p>Photographs courtesy of the Acoustic Research Laboratory, National University of Singapore, and OceanScan Marine Systems &amp; Technology.</p>
      </div>
    </div>
  </div>

  <div class="row large py2">
    <div class="columns">
      <div class="hlight-card">
        <h3>The LAUV is now Subnero ready.</h3>
        <p style="color:#fff; margin:0.75rem 0 0;">Advancing the Internet of the Oceans. Talk to us about software-defined acoustic networking.</p>
      </div>
    </div>
  </div>

  <div class="row large py2" style="text-align:center;">
    <div class="columns">
      <div class="g4x-hero-btns" style="justify-content:center;">
        <a href="{{site.baseurl}}/industries/marine-robotics" class="button g-orange-btn" target="_blank" rel="noopener">Explore Marine Robotics</a>
        <a href="{{site.baseurl}}/contact" class="button g-orange-btn" target="_blank" rel="noopener">Talk to our engineers</a>
      </div>
    </div>
  </div>
</section>
