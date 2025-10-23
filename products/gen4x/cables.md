---
layout: default
---

<div class="product-details">
  <section class="intro category-container">
    <div class="category-row">
      <div class="large-5 columns">
        <div class="product-images">
          <img id="main-img" class="product-img" src="{{site.baseurl}}/images/gen4x/cable-01.png">
          <div class="thumbs">
            <img class="selected-thumb" src="{{site.baseurl}}/images/gen4x/thumb-cable-01.png">
            <img src="{{site.baseurl}}/images/gen4x/thumb-cable-02.png">
            <img src="{{site.baseurl}}/images/gen4x/thumb-cable-03.png">
            <img src="{{site.baseurl}}/images/gen4x/thumb-cable-04.png">
          </div>
        </div>
      </div>
      <div class="large-7 columns">
        <div class="card-tag gen4x">Gen4x</div>
        <div class="card-tag silver">Silver Edition</div>
        <h1>Subsea Cables</h1>
        <p>A range of cable types and lengths are available to support diverse deployment requirements. Standard cables provide power and Ethernet connectivity, while optional versions add interfaces such as RS232, External Interrupt or PPS, sensor power control directly from the modem and ADCPs. Contact us to discuss custom cable options tailored to your deployment needs.</p>
        <h3>Specifications</h3>
        <table class="specification-table">
          <thead>
            <tr>
              <th>Feature</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Standard Cables</td>
              <td>Power and Ethernet connectivity</td>
            </tr>
            <tr>
              <td>Optional Interfaces:</td>
              <td>RS232 communication support<br />
              External Interrupt or PPS input<br />
              Power output from modem for external sensors</td>
            </tr>
            <tr>
              <td>Additional Cables</td>
              <td>Subsea battery cables<br />
              ADCP Integration Cables</td>
            </tr>
            <tr>
              <td>Length</td>
              <td>5 m, 15 m, 25 m, 30 m</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
  <section class="features category-container">
    <div class="category-row">
      <div class="large-7 columns">
        <h3>Applications</h3>
        <ul>
          <li>General modem deployments.</li>
          <li>Sensor integration with custom interface or power needs.</li>
          <li>Subsea battery connections for standalone or long-term deployments.</li>
          <li>ADCP integrations with Nortek instruments.</li>
        </ul>
      </div>
      <div class="large-5 columns">
        <img src="{{site.baseurl}}/images/gen4x/cable-02.png" />
      </div>
    </div>
  </section>
  <section class="call-to-action category-container">
    {%- include formCTA.html -%}
  </section>
  <div class="quick-links">
    <div class="category-row">
      <h3>Quick LInks</h3>
      {% include quick_links.html %}
    </div>
  </div>
</div>
{%- include imageViewer.html -%}