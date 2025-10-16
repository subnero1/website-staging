---
layout: default
---
<div class="product-details">
  <section class="intro category-container">
    <div class="category-row">
      <div class="large-5 columns">
        <img src="{{site.baseurl}}/images/gen4x/WNC-L12LHSO4X-01.png" />
      </div>
      <div class="large-7 columns">
        <div class="card-tag">Gen4x</div>
        <h1>WNC-L12LHSO4X</h1>
        <h2>STANDALONE CONFIGURATION MODEM</h2>
        <small>Silver Edition</small>
        <p>Designed as a versatile workhorse, Subnero’s silver edition smart modem offers unparalleled flexibility, featuring customizable options and extensibility across various levels. From network protocols to physical layer algorithms, users can effortlessly implement and test modifications, ensuring seamless integration into diverse underwater communication ecosystems.</p>
        <h3>Applications</h3>
        <ul>
          <li>High-speed data transfer for underwater IoT sensors</li>
          <li>On-demand image transfer</li>
          <li>Large sensor payload data transfer for marine robotics</li>
          <li>Underwater networks</li>
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
          <li>Up to 33 kbps data rate*.</li>
          <li>Up to 1 km communication range (horizontal & vertical) in tropical waters.</li>
          <li>Ranging functionality with 0.1 m precision.</li>
          <li>Doppler resilience of ±4 knots or better.</li>
          <li>Support for coherent and incoherent communication schemes.</li>
          <li>Support for arbitrary signal transmission as well as recording (passband, baseband).</li>
          <li>Support for user defined communication schemes using UnetStack.</li>
          <li>Support for multiple receiving channels for a variety of applications.</li>
        </ul>
        <p class="note">* Depending on channel conditions and reliability requirements.</p>
      </div>
      <div class="large-5 columns">
        <img src="{{site.baseurl}}/images/gen4x/WNC-L12LHSO4X-02.png" />
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
          <p>The standalone configuration (SC) features a pressure housing tailored to accommodate various deployment depths and operate on external power sources, whether underwater with batteries or from the water's surface with a power supply. Engineered for unparalleled versatility and dependability across diverse deployment scenarios, this configuration ensures robust data transmission, even in the most demanding environments, guaranteeing seamless and uninterrupted operations.</p>
        </div>
        <h3>Brochures</h3>
        <div class=brochures>
          <a class="download-file" href="{{site.baseurl}}/brochures/Subnero-HF-Modems.pdf" target="_blank">
            <img src="{{site.baseurl}}/brochures/modem6.jpg">
            <span>Subnero S40H Underwater Modems</span>
          </a>
          <a class="download-file" href="{{site.baseurl}}/brochures/Gen4-WNC.pdf" target="_blank">
            <img src="{{site.baseurl}}/brochures/wnc.jpg">
            <span>Generation 4 Wireless Networked Communications (WNC), Product Series Brief</span>
          </a>
        </div>
        <h3>Useful Links</h3>
        <div class="useful-links">
          <a href="{{site.baseurl}}/products/wnc.html">WNC Product Series</a>
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
              <td>Bandwidth</td>
              <td>25 kHz (25 - 50 kHz)</td>
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
              <td>UnetStack</td>
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
                < 45 W (transmit mode, avg.) <br />
                < 1 mW (deep sleep mode)
              </td>
            </tr>
            <tr>
              <td>External interface</td>
              <td>Ethernet (10/100 Mbps)*</td>
            </tr>
            <tr>
              <td>On-board storage</td>
              <td>32 GB<sup>*</sup></td>
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
              <td>300 m*</td>
            </tr>
            <tr>
              <td>Dimensions</td>
              <td>⌀ 127 ✕ 316 mm</td>
            </tr>
            <tr>
              <td>Operating temperature</td>
              <td>0 to 40 °C</td>
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