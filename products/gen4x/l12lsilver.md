---
layout: default
---

<div class="product-details">
  <section class="intro category-container">
    <div class="category-row">
      <div class="large-5 columns">
        <!-- slider -->
        <div class="product-images">
          <div class="main-slider">
            <div class="slider-track">
              <img class="main-img" src="{{site.baseurl}}/images/gen4x/L12L-silver-gallery-01.png" alt="Subnero L12L Series Silver Edition Modem Gallery View 1">
              <img class="main-img" src="{{site.baseurl}}/images/gen4x/L12L-silver-gallery-02.png" alt="Subnero L12L Series Silver Edition Modem Gallery View 2">
              <img class="main-img" src="{{site.baseurl}}/images/gen4x/L12L-silver-gallery-03.png" alt="Subnero L12L Series Silver Edition Modem Gallery View 3">
              <img class="main-img" src="{{site.baseurl}}/images/gen4x/L12L-silver-gallery-04.png" alt="Subnero L12L Series Silver Edition Modem Gallery View 4">
            </div>
          </div>
          <div class="thumbs">
            <img class="selected-thumb" data-index="0" src="{{site.baseurl}}/images/gen4x/L12L-silver-thumb-01.png" alt="Subnero L12L Series Silver Edition Modem Thumbnail 1">
            <img data-index="1" src="{{site.baseurl}}/images/gen4x/L12L-silver-thumb-02.png" alt="Subnero L12L Series Silver Edition Modem Thumbnail 2">
            <img data-index="2" src="{{site.baseurl}}/images/gen4x/L12L-silver-thumb-03.png" alt="Subnero L12L Series Silver Edition Modem Thumbnail 3">
            <img data-index="3" src="{{site.baseurl}}/images/gen4x/L12L-silver-thumb-04.png" alt="Subnero L12L Series Silver Edition Modem Thumbnail 4">
          </div>
        </div>
        <!-- ./slider -->
      </div>
      <div class="large-7 columns">
        <div class="card-tags">
          <div class="card-tag gen4x">Gen4x</div>
          <div class="card-tag silver">Silver Edition</div>
          <div class="card-tag lf">LF Band</div>
        </div>
        <h1>L12L Series</h1>
        <p>Designed for reliable long-range communication in shallow waters, Subnero’s Silver Edition L12L series modem addresses one of the toughest challenges in underwater acoustics — maintaining robust links over extended distances in complex environments.</p>
        <p>Built on decades of research and innovation, the L12L series enables dependable data transfer beyond 10 km, unlocking new possibilities for remote monitoring, tracking, telemetry, and control of subsea assets. Engineered for endurance and stability, it supports mission-critical operations across defense, research, and commercial deployments, where long-range connectivity is essential.</p>
        <h3>Applications</h3>
        <ul>
          <li>Long-range operations in shallow, mid-range and deep waters</li>
          <li>Long-term seabed or sensor node deployments</li>
          <li>Communication and tracking of AUVs and subsea vehicles</li>
          <li>Coastal area monitoring networks</li>
        </ul>
        {%- include formRequestQuote.html -%}
      </div>
    </div>
  </section>
  <section class="features category-container">
    <div class="category-row">
      <div class="large-7 columns">
        <h3>Key Features</h3>
        <ul>
          <li>Communication range exceeding 10 km in littoral waters<sup>*</sup>.</li>
          <li>Up to 8 kbps data rate at shorter ranges.</li>
          <li>Supports NATO JANUS standard.</li>
          <li>Ultra-low power deep sleep mode (< 1 mW) for extended deployments.</li>
          <li>Acoustic ranging functionality.</li>
          <li>Doppler resilience of ±4 knots or better.</li>
          <li>Supports arbitrary waveform transmission and recording.</li>
          <li>Fully programmable using UnetStack for user-defined protocols.</li>
        </ul>
        <p class="note">* Depending on channel conditions and reliability requirements.</p>
      </div>
      <div class="large-5 columns">
        <img src="{{site.baseurl}}/images/gen4x/L12L-silver-feature.png" alt="Subnero L12L Series Silver Edition Modem Feature Image" />
      </div>
    </div>
  </section>
  <section class="call-to-action category-container">
    {%- include formCTA.html -%}
  </section>
  <section class="configs">
    <header>
      <h2>Flexible Configurations</h2>
      <p>Available in standalone, and open configurations to suit a range of deployment needs—from self-contained setups to integrated systems.</p>
    </header>
    <div class="card-wrapper">
      <a class="product-card card-dialog" href="javascript:void(0)" data-product="wnc-l12lss4x">
        <h2>WNC-L12LSS4X</h2>
        <div class="product-img">
          <img src="{{site.baseurl}}/images/gen4x/L12L-silver-sc-preview.png" alt="Subnero WNC-L12LSS4X Standalone Configuration Preview">
        </div>
        <h3>Standalone Configuration</h3>
        <p>Self-contained modem powered by an external battery or supply.</p>
      </a>
      <a class="product-card card-dialog" href="javascript:void(0)" data-product="wnc-l12lhso4x">
        <h2>WNC-L12LSO4X</h2>
        <div class="product-img">
          <img src="{{site.baseurl}}/images/gen4x/L12L-silver-oc-preview.png" alt="Subnero WNC-L12LSO4X Open Configuration Preview">
        </div>
        <h3>Open <br />Configuration</h3>
        <p>Integration-ready design for AUVs, ROVs, and sensor platforms.</p>
      </a>
    </div>
    <!-- Modal -->
    <dialog id="configModal" class="modal-dialog">
      <div class="modal-content">
        <header>
          <button class="modal-close" type="button" id="closeModal" title="close">&times;</button>
        </header>
        <div class="main">
          <!-- content - WNC-L12LSS4X -->
          <div class="main modal-content-item" data-product="wnc-l12lss4x">
            <h2>Standalone Configuration (SC)</h2>
            <p>The standalone configuration (SC) features a pressure-rated housing designed for operation at various depths, powered externally via batteries or through a surface power supply. This configuration is ideal for fixed or moored sensor nodes, seabed installations, coastal monitoring stations, or surface-deployed relay systems, where ease of deployment and reliability are critical.</p>
          </div>
          <!-- content - WNC-L12LHSO4X -->
          <div class="main modal-content-item" data-product="wnc-l12lhso4x">
            <h2>Open Configuration (OC)</h2>
            <p>The open configuration (OC) streamlines integration and enhances adaptability, making it ideal for incorporation into subsea platforms such as marine robots, autonomous systems, and larger sensors. It supports seamless electrical and software integration for platforms. This configuration is well suited for AUV- or USV-based missions, and payload integration within custom subsea assemblies, providing flexibility without compromising performance.</p>
          </div>
        </div>
        <div class="footer"></div>
      </div>
    </dialog>
  </section>
  <section class="technical category-container">
    <div class="category-row">
      <div class="large-4 columns">
        <h3>Brochures</h3>
        <div class=brochures>
          <a class="download-file" href="{{site.baseurl}}/brochures/gen4x-L12L-modems.pdf" target="_blank">
            <img src="{{site.baseurl}}/brochures/gen4x-L12L-modems.jpg" alt="Subnero L12L Series Underwater Modems borchure">
            <span>Subnero L12L Series Underwater Modems</span>
          </a>
        </div>
        <h3>Useful Links</h3>
        <div class="useful-links">
          <a href="{{site.baseurl}}/products/wnc.html">WNC Product Series</a>
        </div>
      </div>
      <div class="large-8 columns">
        <h3>Technical Specification</h3>
        <table class="specification-table">
          <caption>Communication</caption>
          <thead>
            <tr>
              <th>Feature</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Modulation (software defined)</td>
              <td>PSK-OFDM, FH-BFSK</td>
            </tr>
            <tr>
              <td>FEC (Forward Error Correction)</td>
              <td>LDPC, BCH, Convolution code</td>
            </tr>
            <tr>
              <td>JANUS support</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>Bandwidth</td>
              <td>7 kHz (9 - 16 kHz)</td>
            </tr>
          </tbody>
        </table>
        <table class="specification-table">
          <caption>Software</caption>
          <thead>
            <tr>
              <th>Feature</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Framework</td>
              <td>UnetStack</td>
            </tr>
            <tr>
              <td>User Interface</td>
              <td>Interactive web UI</td>
            </tr>
            <tr>
              <td>Software Interfaces</td>
              <td>Java, Groovy, Python, C, Javascript, Julia, JSON/TCP</td>
            </tr>
          </tbody>
        </table>
        <table class="specification-table">
          <caption>Electrical</caption>
          <thead>
            <tr>
              <th>Feature</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Power source</td>
              <td>18 - 30 VDC (24 VDC recommended)</td>
            </tr>
            <tr>
              <td>Power consumption</td>
              <td>
                < 4 W (receive mode, nominal) <br />
                < 45 W (transmit mode, avg.) <br />
                < 150 mW (sleep mode) <br />
                < 1 mW (deep sleep mode)
              </td>
            </tr>
            <tr>
              <td>Wake up modes</td>
              <td>
                Acoustic wakeup, External electrical interrupt, Scheduled wakeup
              </td>
            </tr>
            <tr>
              <td>External interface</td>
              <td>
              Ethernet (10/100 Mbps), RS232<sup>*</sup>
              </td>
            </tr>
            <tr>
              <td>On-board storage</td>
              <td>256 GB, 1 TB</td>
            </tr>
            <tr>
              <td>Receive channels</td>
              <td>1, 2 (configurable at the time of purchase)</td>
            </tr>
          </tbody>
        </table>
        <table class="specification-table">
          <caption>Mechanical</caption>
          <thead>
            <tr>
              <th>Feature</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Hull material</td>
              <td>Aluminum, Stainless steel</td>
            </tr>
            <tr>
              <td>Depth rating</td>
              <td>300m, 2000m</td>
            </tr>
            <tr>
              <td>Dimensions</td>
              <td>SC: ø 100 x 313 mm, OC: ø 88 x 137 mm</td>
            </tr>
            <tr>
              <td>Weight (in air / water)</td>
              <td>SC: 3.8 / 1.5 kg, OC: 0.65 kg / NA</td>
            </tr>
            <tr>
              <td>Operating temperature</td>
              <td>SC: 0 to 40 °C, OC: 0 to 70 °C (electronics) 0 to 40 °C (transducer)</td>
            </tr>
          </tbody>
        </table>
        * Different cable required for RS232 connection.
      </div>
    </div>
  </section>
  <div class="quick-links">
    <div class="category-row">
      <h3>Quick LInks</h3>
      {% include quick_links.html %}
    </div>
  </div>
</div>
{% include productDetailsDialog.html %}
{%- include imageViewer.html -%}