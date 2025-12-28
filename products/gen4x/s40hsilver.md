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
              <img class="main-img" src="{{site.baseurl}}/images/gen4x/S40H-silver-gallery-01.png" alt="Subnero S40H Series Silver Edition Modem Gallery View 1">
              <img class="main-img" src="{{site.baseurl}}/images/gen4x/S40H-silver-gallery-02.png" alt="Subnero S40H Series Silver Edition Modem Gallery View 2">
              <img class="main-img" src="{{site.baseurl}}/images/gen4x/S40H-silver-gallery-03.png" alt="Subnero S40H Series Silver Edition Modem Gallery View 3">
              <img class="main-img" src="{{site.baseurl}}/images/gen4x/S40H-silver-gallery-04.png" alt="Subnero S40H Series Silver Edition Modem Gallery View 4">
            </div>
          </div>
          <div class="thumbs">
            <img class="selected-thumb" data-index="0" src="{{site.baseurl}}/images/gen4x/S40H-silver-thumb-01.png" alt="Subnero S40H Series Silver Edition Modem Thumbnail 1">
            <img data-index="1" src="{{site.baseurl}}/images/gen4x/S40H-silver-thumb-02.png" alt="Subnero S40H Series Silver Edition Modem Thumbnail 2">
            <img data-index="2" src="{{site.baseurl}}/images/gen4x/S40H-silver-thumb-03.png" alt="Subnero S40H Series Silver Edition Modem Thumbnail 3">
            <img data-index="3" src="{{site.baseurl}}/images/gen4x/S40H-silver-thumb-04.png" alt="Subnero S40H Series Silver Edition Modem Thumbnail 4">
          </div>
        </div>
        <!-- ./slider -->
      </div>
      <div class="large-7 columns">
        <div class="card-tags">
          <div class="card-tag gen4x">Gen4x</div>
          <div class="card-tag silver">Silver Edition</div>
          <div class="card-tag hf">HF Band</div>
        </div>
        <h1>S40H Series</h1>
        <h2>25 - 50 kHz Band</h2>
        <p>The Silver Edition S40H series modem represents a breakthrough in high-speed underwater acoustic communication. Designed for high-throughput data transfer, it enables applications that were once impractical in the subsea domain — such as wireless camera image transmission, rapid sensor data exchange, and real-time connectivity for marine robotics over short ranges. The S40H series serves as a stepping stone toward true high-speed underwater networks, bringing the performance and flexibility of modern digital communication to the ocean environment.</p>
        <h3>Applications</h3>
        <ul>
          <li>Wireless image transfer for inspection and monitoring systems</li>
          <li>High-speed data offload from subsea instruments, AUVs, or sensor arrays</li>
          <li>Near real-time connectivity for marine and subsea robots</li>
          <li>Short-range underwater IoT and testbed networks for research and development</li>
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
          <li>High-speed data rates up to 33 kbps<sup>*</sup> in shallow tropical waters.</li>
          <li>Communication range up to 1 km (horizontal and vertical).</li>
          <li>Built-in ranging with 0.1 m precision for accurate positioning.</li>
          <li>Doppler resilience of ±4 knots ensuring stable performance in motion.</li>
          <li>Compact and lightweight design for seamless platform integration.</li>
          <li>Fully software-defined architecture using UnetStack.</li>
        </ul>
        <p class="note">* Depending on channel conditions and reliability requirements.</p>
      </div>
      <div class="large-5 columns">
        <img src="{{site.baseurl}}/images/gen4x/S40H-silver-feature.png" alt="Subnero S40H Series Silver Edition Modem Feature Image" />
      </div>
    </div>
  </section>
  <section class="call-to-action category-container">
    {%- include formCTA.html -%}
  </section>
  <section class="configs">
    <header>
      <h2>Flexible Configurations</h2>
      <p>Available in standalone and open configurations to suit a range of deployment needs—from self-contained setups to integrated and high-performance systems.</p>
    </header>
    <div class="card-wrapper">
      <a class="product-card card-dialog" href="javascript:void(0)" data-product="wnc-s40hss4x">
        <h2>WNC-S40HSS4X</h2>
        <div class="product-img">
          <img src="{{site.baseurl}}/images/gen4x/S40H-silver-sc-preview.png" alt="Subnero WNC-S40HSS4X Standalone Configuration Preview">
        </div>
        <h3>Standalone Configuration</h3>
        <p>Self-contained modem powered by an external battery or power supply.</p>
      </a>
      <a class="product-card card-dialog" href="javascript:void(0)" data-product="wnc-s40hso4x">
        <h2>WNC-S40HSO4X</h2>
        <div class="product-img">
          <img src="{{site.baseurl}}/images/gen4x/S40H-silver-oc-preview.png" alt="Subnero WNC-S40HSO4X Open Configuration Preview">
        </div>
        <h3>Open<br />Configuration</h3>
        <p>Integration-ready electronics for AUVs, ROVs, and sensor platforms.</p>
      </a>
    </div>
    <!-- Modal -->
    <dialog id="configModal" class="modal-dialog">
      <div class="modal-content">
        <header>
          <button class="modal-close" type="button" id="closeModal" title="close">&times;</button>
        </header>
        <div class="main">
          <!-- content - WNC-S40HSS4X -->
          <div class="main modal-content-item" data-product="wnc-s40hss4x">
            <h2>Standalone Configuration (SC)</h2>
            <p>The standalone configuration (SC) features a pressure-rated housing designed for operation at various depths, powered externally via batteries or through a surface power supply. This configuration is ideal for fixed or moored sensor nodes, seabed installations, coastal monitoring stations, or surface-deployed relay systems, where ease of deployment and reliability are critical.</p>
          </div>
          <!-- content - WNC-S40HSO4X -->
          <div class="main modal-content-item" data-product="wnc-s40hso4x">
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
          <a class="download-file" href="{{site.baseurl}}/brochures/gen4x-S40H-modems.pdf" target="_blank">
            <img src="{{site.baseurl}}/brochures/gen4x-S40H-modems.jpg" alt="Subnero S40H Series Underwater Modem brochure">
            <span>Subnero S40H Series Underwater Modems</span>
          </a>
        </div>
        <h3>Useful Links</h3>
        <div class="useful-links">
          <a href="{{site.baseurl}}/products/wnc.html">WNC Product Series</a>
        </div>
      </div>
      <div class="large-8 columns">
        <h3>Technical Specifications</h3>
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
              <td>Yes, subject to operating frequency band</td>
            </tr>
            <tr>
              <td>Bandwidth</td>
              <td>25 kHz (25 - 50 kHz)</td>
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
              <td>Aluminum</td>
            </tr>
            <tr>
              <td>Depth rating</td>
              <td>300m</td>
            </tr>
            <tr>
              <td>Dimensions</td>
              <td>SC: ø 100 x 294 mm, OC: ø 88 x 137 mm</td>
            </tr>
            <tr>
              <td>Weight (in air / water)</td>
              <td>SC: 2.0 / 0.8 kg, OC: 0.65 kg / NA</td>
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