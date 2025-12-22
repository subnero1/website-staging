---
layout: default
---

<div class="product-details">
  <section class="intro category-container">
    <div class="category-row">
      <div class="large-5 columns">
        <img src="{{site.baseurl}}/images/gen4x/M25M-bronze-gallery-01.png" alt="S1000-N Underwater Modems" />
      </div>
      <div class="large-7 columns">
          <div class="card-tag bronze">Bronze Edition</div>
          <div class="card-tag mf">MF Band</div>
        <h1>S1000-N</h1>
        <h2>20 - 30 KHz</h2>
        <p>The Bronze Edition modem (S1000-N) offers an affordable and compact platform for enthusiasts and educators exploring underwater communication and networking. Powered by UnetStack, it bridges the gap between simulation and real-world deployment, enabling entry-level users to design, test, and operate underwater networks with practical, meaningful results.</p>
        {%- include formContactUs.html -%}
      </div>
    </div>
  </section>
  <section class="features category-container">
    <div class="category-row">
      <div class="large-7 columns">
        <h3>Key Features</h3>
        <ul>
          <li>The power of Popoto S-series modems.</li>
          <li>Advanced UnetStack networking.</li>
          <li>80 bps with Frequency Hopping FSK.</li>
          <li>10240, 5120, 2560, 1280, 640 bps with PSK.</li>
          <li>1-3 km depending on channel conditions and selected modulation scheme.</li>
          <li>APIs in multiple computer languages.</li>
          <li>Multihop relay and routing.</li>
          <li>Low power operations.</li>
        </ul>
      </div>
      <div class="large-5 columns">
        <img src="{{site.baseurl}}/images/gen4x/M25M-bronze-feature.png" alt="S1000-N Underwater Modems" />
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
          <p>The standalone configuration (SC) features a pressure-rated housing designed for operation at various depths, powered externally via batteries or through a surface power supply. This configuration is ideal for fixed or moored sensor nodes, seabed installations, coastal monitoring stations, or surface-deployed relay systems, where ease of deployment and reliability are critical.</p>
        </div>
        <h3>Brochures</h3>
        <div class=brochures>
          <a class="download-file" href="{{site.baseurl}}/brochures/S1000-N.pdf" target="_blank">
            <img src="{{site.baseurl}}/brochures/s1000n.jpg" alt="S1000-N Underwater Modems brochure">
            <span>S1000-N Underwater Modems</span>
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
              <td>Data rate</td>
              <td>80 bps with Frequency Hopping FSK <br />10240, 5120, 2560, 1280, 640 bps with PSK</td>
            </tr>
            <tr>
              <td>Range</td>
              <td>1-3 km<sup>*</sup></td>
            </tr>
            <tr>
              <td>Frequency band</td>
              <td>20 - 30 KHz</td>
            </tr>
            <tr>
              <td>Storage</td>
              <td>128 GB on included µSD (Expandable)</td>
            </tr>
          </tbody>
        </table>
        <table class="specification-table">
          <caption>Power</caption>
          <thead>
            <tr>
              <th>Feature</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Operating voltage</td>
              <td>12 - 40 VDC</td>
            </tr>
            <tr>
              <td>Power consumption</td>
              <td>
                GPIO Enabled Sleep: &lt; 10µW <br />
                Acoustic Wake-Up Deep Sleep: &lt; 45 mW <br />
                Acoustic Wake-Up Sleep: 150 mW <br />
                Active Receive: 1.5 W
              </td>
            </tr>
            <tr>
              <td>Transmit power</td>
              <td>20 W</td>
            </tr>
            <tr>
              <td>Battery</td>
              <td>22.2V 2500mAh Li-Ion</td>
            </tr>
          </tbody>
        </table>
        <table class="specification-table">
          <caption>Interface</caption>
          <thead>
            <tr>
              <th>Feature</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Data connections</td>
              <td>Ethernet, RS-422, RS-232</td>
            </tr>
            <tr>
              <td>External interface connections</td>
              <td>SPI Bus, I2C Bus, GPIO, Analog</td>
            </tr>
          </tbody>
        </table>
        <table class="specification-table">
          <caption>Hardware</caption>
          <thead>
            <tr>
              <th>Feature</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Dimensions</td>
              <td>376 mm x 49 mm x 49 mm</td>
            </tr>
            <tr>
              <td>Weight</td>
              <td>Dry: 1275g (Nmodel), In Sea Water: 505g</td>
            </tr>
            <tr>
              <td>Depth rating</td>
              <td>1000 m</td>
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
              <td>Software framework</td>
              <td><a href="{{site.baseurl}}/products/unet.html">UnetStack</a></td>
            </tr>
            <tr>
              <td>Software interface</td>
              <td>Java, Groovy, Python, C, Javascript, Julia, web UI, JSON/TCP</td>
            </tr>
            <tr>
              <td>Waveform player</td>
              <td>Transmission and reception, passband and baseband</td>
            </tr>
          </tbody>
        </table>
        * Depending on channel conditions and selected modulation scheme
        <div class="product-faq">
          <h3>Frequently Asked Question</h3>
          <p class="question">Q: What is the S1000-N acoustic smart modem?</p>
          <p class="answer">A: The S1000-N is a new underwater acoustic modem that combines the power of the S1000 series modems from Popoto Modem and UnetStack from Subnero. The modems will have a fully functioning network stack out of the box, and offer a data rate of up to 10240 bps over a range of 3+ km.</p>
          <p class="question">Q: What is the advantage of combining the power of Popoto's S-series modems with the network stack of UnetStack?</p>
          <p class="answer">A: By combining these two technologies, the S1000-N offers a truly advanced underwater acoustic smart modem that is both compact and affordable. The modems are ideal for use in a wide range of underwater applications that need flexibility and affordability.</p>
          <p class="question">Q: What are the key features of the S1000-N modems?</p>
          <p class="answer">A: The S1000-N modems offer a data rate of up to 10240 bps over a range of 3+ km, multihop routing, low power operations, and arbitrary waveform transmission and reception.</p>
          <p class="question">Q: What is multi-hop routing?</p>
          <p class="answer">A: Multihop routing allows the S1000-N modems to communicate over longer distances than traditional acoustic smart modems. This is achieved by using a series of intermediate nodes to relay data between the source and destination.</p>
          <p class="question">Q: What application domains are the S1000-N modems ideal for?</p>
          <p class="answer">A: The S1000-N modems are ideal for use in scientific research applications. They offer a reliable means of communicating underwater, and their low power consumption makes them ideal for use in applications where power is at a premium, all of this with affordable pricing.</p>
          <p class="question">Q: How can I learn more about the S1000-N acoustic smart modem?</p>
          <p class="answer">A: For more information on the S1000-N acoustic smart modem, customers can contact either Subnero or Popoto Modem directly. Both companies will be happy to answer any questions you may have about the S1000-N smart modems and their features. To learn more about UnetStack, you can visit <a href="https://unetstack.net/" target="_blank">www.unetstack.net.</a></p>
          <p class="question">Q: When will the S1000-N modems be available?</p>
          <p class="answer">A: The S1000-N Modems are available now. Customers can contact either Subnero (sales@subnero.com) or Popoto Modem (info@popotomodem.com) for more information on availability and pricing. The S1000-N is available at a starting price of US $6,750.</p>
          <p class="question">Q: Where can I buy the S1000-N acoustic smart modem?</p>
          <p class="answer">A: Customers can contact either Subnero sales@subnero.com or Popoto Modem info@popotomodem.com for purchasing inquiries.</p>
        </div>
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