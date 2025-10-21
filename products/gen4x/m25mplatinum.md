---
layout: default
---
<div class="product-details">
  <section class="intro category-container">
    <div class="category-row">
      <div class="large-5 columns">
        <img src="{{site.baseurl}}/images/gen4x/WNC-M25MPS3-01.png" />
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
          <li>More than 4 km communication range (horizontal & vertical) in tropical waters.</li>
          <li>Ranging functionality with 0.1 m precision.</li>
          <li>Doppler resilience of ±4 knots or better.</li>
          <li>Support for coherent and incoherent communication schemes.</li>
          <li>Support for arbitrary signal transmission as well as recording (passband, baseband).</li>
          <li>Support for user defined communication schemes using <a href="{{site.baseurl}}/products/unet.html">UnetStack</a>.</li>
          <li>Certified for various MIL standards.</li>
        </ul>
        <p class="note">* Depending on channel conditions and reliability requirements.</p>
      </div>
      <div class="large-5 columns">
        <img src="{{site.baseurl}}/images/gen4x/WNC-M25MPS3-02.png" />
      </div>
    </div>
  </section>
  <section class="call-to-action category-container">
    {%- include formCTA.html -%}
  </section>
  <section class="technical category-container">
    <div class="category-row">
      <div class="large-4 columns">
        <div class="highlight-card">
          <h3>STANDALONE CONFIGURATION</h3>
          <p>A modem in the standalone configuration (SC) operates on external power source such as a battery (for underwater deployments) or a power supply (for deployments from the water surface).</p>
        </div>
        <h3>Brochures</h3>
        <div class=brochures>
          <a class="download-file" href="{{site.baseurl}}/brochures/Subnero-MF-Modems-gen3.pdf" target="_blank">
            <img src="{{site.baseurl}}/brochures/modem3.jpg">
            <span>Subnero M25M Underwater Modems</span>
          </a>
        </div>
      </div>
      <div class="large-8 columns">
        <h3>Technical Specification</h3>
        <table>
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
        <table>
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
        <table>
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
        <table>
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
              <td>Aluminum<sup>*</sup></td>
            </tr>
            <tr>
              <td>Operating depth</td>
              <td>
                Hull: 300 m <br />
                Transducer: 2000 m
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
                - IPC class 2A
                - Conformal coating
                - Environmental Stress Screening (ESS)
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