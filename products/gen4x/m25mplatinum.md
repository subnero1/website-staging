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
              <img class="main-img" src="{{site.baseurl}}/images/gen4x/M25M-platinum-gallery-01.png" alt="Subnero M25M Series Platinum Edition Modem Gallery View 1">
              <img class="main-img" src="{{site.baseurl}}/images/gen4x/M25M-platinum-gallery-02.png" alt="Subnero M25M Series Platinum Edition Modem Gallery View 2">
            </div>
          </div>
          <div class="thumbs">
            <img class="selected-thumb" data-index="0" src="{{site.baseurl}}/images/gen4x/M25M-platinum-thumb-01.png" alt="Subnero M25M Series Platinum Edition Modem Thumbnail 1">
            <img data-index="1" src="{{site.baseurl}}/images/gen4x/M25M-platinum-thumb-02.png" alt="Subnero M25M Series Platinum Edition Modem Thumbnail 2">
          </div>
        </div>
        <!-- ./slider -->
      </div>
      <div class="large-7 columns">
        <div class="card-tag legacy">Legacy</div>
          <div class="card-tag platinum">Platinum Edition</div>
          <div class="card-tag mf">MF Band</div>
        <h1>M25M Series</h1>
        <h2>20 - 32 kHz Band</h2>
        <p>Delivering performance under the toughest environmental conditions, Subnero’s platinum edition modems are designed to meet rigorous quality standards mandated by sectors such as defense, oil & gas and subsea engineering.</p>
        {%- include formRequestQuote.html -%}
      </div>
    </div>
  </section>
  <section class="features category-container">
    <div class="category-row">
      <div class="large-7 columns">
        <h3>Key Features</h3>
        <ul>
          <li>Up to 15 kbps<sup>*</sup> data rate.</li>
          <li>More than 4 km communication range in tropical waters.</li>
          <li>Certified to MIL-STD-810G, 461E, and related environmental standards.</li>
          <li>Ranging functionality with 0.1 m precision.</li>
          <li>Doppler resilience of ±4 knots or better.</li>
          <li>Support for coherent and incoherent communication schemes.</li>
          <li>Support for arbitrary signal transmission and recording (passband, baseband).</li>
        </ul>
        <p class="note">* Depending on channel conditions and reliability requirements.</p>
      </div>
      <div class="large-5 columns">
        <img src="{{site.baseurl}}/images/gen4x/M25M-platinum-feature.png" alt="Subnero M25M Series Platinum Edition Modem Feature Image" />
      </div>
    </div>
  </section>
  <section class="call-to-action category-container">
    {%- include formCTA.html -%}
  </section>

  <section class="configs">
    <header>
      <h2>Flexible Configurations</h2>
      <p>Available in standalone, and embedded configurations to suit a range of deployment needs—from self-contained setups to integrated systems.</p>
    </header>
    <div class="card-wrapper">
      <a class="product-card card-dialog" href="javascript:void(0)" data-product="wnc-m25mps3">
        <h2>WNC-M25MPS3</h2>
        <div class="product-img">
          <img src="{{site.baseurl}}/images/gen4x/M25M-platinum-sc-preview.png" alt="Subnero WNC-M25MPS3 Standalone Configuration Preview">
        </div>
        <h3>Standalone Configuration</h3>
        <p>Self-contained modem powered by an external battery or power supply.</p>
      </a>
      <a class="product-card card-dialog" href="javascript:void(0)" data-product="wnc-m25mpe3">
        <h2>WNC-M25MPE3</h2>
        <div class="product-img">
          <img src="{{site.baseurl}}/images/gen4x/M25M-platinum-ec-preview.png" alt="Subnero WNC-M25MPE3 Embedded Configuration Preview">
        </div>
        <h3>Embedded<br />Configuration</h3>
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
          <!-- content - WNC-M25MPS3 -->
          <div class="main modal-content-item" data-product="wnc-m25mps3">
            <h2>Standalone Configuration (SC)</h2>
            <p>The standalone configuration (SC) features a pressure-rated housing designed for operation at various depths, powered externally via batteries or through a surface power supply. This configuration is ideal for fixed or moored sensor nodes, seabed installations, coastal monitoring stations, or surface-deployed relay systems, where ease of deployment and reliability are critical.</p>
          </div>
          <!-- content - WNC-M25MPE3 -->
          <div class="main modal-content-item" data-product="wnc-m25mpe3">
            <h2>Embedded Configuration (OC)</h2>
            <p>The embedded configuration (EC) streamlines integration and enhances adaptability, making it ideal for incorporation into subsea platforms such as marine robots, autonomous systems, and larger sensors. It supports seamless electrical and software integration for platforms. This configuration is well suited for AUV-based missions, and payload integration within custom subsea assemblies, providing flexibility without compromising performance.</p>
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
          <a class="download-file" href="{{site.baseurl}}/brochures/Subnero-MF-Modems-gen3.pdf" target="_blank">
            <img src="{{site.baseurl}}/brochures/modem3.jpg" alt="Subnero M25M Underwater Modems brochure">
            <span>Subnero M25M Underwater Modems</span>
          </a>
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
              <td>Yes, subject to operating frequency band</td>
            </tr>
            <tr>
              <td>Bandwidth</td>
              <td>12 kHz (20 - 32 kHz)</td>
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
              <td><a href="{{site.baseurl}}/products/unet.html">UnetStack</a></td>
            </tr>
            <tr>
              <td>User Interface</td>
              <td>Interactive web UI</td>
            </tr>
            <tr>
              <td>Software Interfaces</td>
              <td>Java, Groovy, Python, C, JavaScript, Julia</td>
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
              <td>Power supply</td>
              <td>22 - 28 VDC (24 VDC recommended)</td>
            </tr>
            <tr>
              <td>Power consumption</td>
              <td>
                < 4 W (receive mode, nominal) <br />
                < 60 W (transmit mode, avg.) <br />
                < 80 W (transmit mode, max.) <br />
                < 1.5 W (sleep mode)
              </td>
            </tr>
            <tr>
              <td>External interface</td>
              <td>Ethernet (10/100 Mbps), RS232 (115200 bps)</td>
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
              <td>Operating depth</td>
              <td>
                300 m
              </td>
            </tr>
            <tr>
              <td>Dimensions</td>
              <td>
                SC: ⌀ 127 ✕ 400 mm
                EC: 90 ✕ 90 ✕ 180 mm
              </td>
            </tr>
            <tr>
              <td>Operating temperature</td>
              <td>
                SC: 0 to 50 °C
                EC: 0 to 70 °C (Electronics), 0 to 50 °C (Transducer)
              </td>
            </tr>
            <tr>
              <td>Supported MIL standards</td>
              <td>MIL-STD-810G, MIL-STD-810E, MIL-STD-461E</td>
            </tr>
            <tr>
              <td>Workmanship</td>
              <td>
                - IPC class 2A<br />
                - Conformal coating<br />
                - Environmental Stress Screening (ESS)<br />
              </td>
            </tr>
          </tbody>
        </table>
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