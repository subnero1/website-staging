---
layout: default
---

<div class="product-details">
  <section class="intro category-container">
    <div class="category-row">
      <div class="large-5 columns">
        <div class="product-images">
          <img id="main-img" class="product-img" src="{{site.baseurl}}/images/gen4x/coprocessor-01.png">
          <div class="thumbs">
            <img class="selected-thumb" src="{{site.baseurl}}/images/gen4x/thumb-coprocessor-01.png">
            <img src="{{site.baseurl}}/images/gen4x/thumb-coprocessor-02.png">
            <img src="{{site.baseurl}}/images/gen4x/thumb-coprocessor-03.png">
            <img src="{{site.baseurl}}/images/gen4x/thumb-coprocessor-04.png">
          </div>
        </div>
      </div>
      <div class="large-7 columns">
        <div class="card-tag gen4x">Gen4x</div>
        <div class="card-tag silver">Silver Edition</div>
        <h1>Co-processor</h1>
        <p>The Co-Processor option adds a powerful embedded computing platform directly alongside the Subnero modem, enabling users to deploy their own applications and algorithms with minimal latency. Designed for close hardware integration, it allows advanced processing, data management, and custom software execution within the modem — without the need for additional subsea computers or loggers.</p>
        <h3>Specifications</h3>
        <table>
          <thead>
            <tr>
              <th>Feature</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Module</td>
              <td>UCM-iMX8M-Plus (NXP i.MX8M Plus System-on-Module)</td>
            </tr>
            <tr>
              <td>Processor</td>
              <td>Quad-core ARM Cortex-A53 CPU</td>
            </tr>
            <tr>
              <td>Memory</td>
              <td>4 GB LPDDR4</td>
            </tr>
            <tr>
              <td>Storage</td>
              <td>64 GB eMMC</td>
            </tr>
            <tr>
              <td>Operating System</td>
              <td>Linux</td>
            </tr>
            <tr>
              <td>Connectivity</td>
              <td>Accessible via IP network on the same subnet as the modem</td>
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
          <li>Developing and deploying custom applications directly on the modem without external hardware</li>
          <li>Implementing proprietary physical-layer algorithms and detectors for acoustic research</li>
          <li>Running edge data processing and analytics for subsea IoT systems</li>
          <li>Creating autonomous behaviors or mission logic tightly integrated with modem communication</li>
        </ul>
      </div>
      <div class="large-5 columns">
        <img src="{{site.baseurl}}/images/gen4x/coprocessor-02.png" />
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