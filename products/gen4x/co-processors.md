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
              <img class="main-img" src="{{site.baseurl}}/images/gen4x/accessories-coprocessor-gallery-01.png" alt="Subnero Modem Co-processor Module Gallery View 1">
              <img class="main-img" src="{{site.baseurl}}/images/gen4x/accessories-coprocessor-gallery-02.png" alt="Subnero Modem Co-processor Module Gallery View 2">
              <img class="main-img" src="{{site.baseurl}}/images/gen4x/accessories-coprocessor-gallery-03.png" alt="Subnero Modem Co-processor Module Gallery View 3">
              <img class="main-img" src="{{site.baseurl}}/images/gen4x/accessories-coprocessor-gallery-04.png" alt="Subnero Modem Co-processor Module Gallery View 4">
            </div>
          </div>
          <div class="thumbs">
            <img class="selected-thumb" data-index="0" src="{{site.baseurl}}/images/gen4x/accessories-coprocessor-thumb-01.png" alt="Subnero Modem Co-processor Module Thumbnail 1">
            <img data-index="1" src="{{site.baseurl}}/images/gen4x/accessories-coprocessor-thumb-02.png" alt="Subnero Modem Co-processor Module Thumbnail 2">
            <img data-index="2" src="{{site.baseurl}}/images/gen4x/accessories-coprocessor-thumb-03.png" alt="Subnero Modem Co-processor Module Thumbnail 3">
            <img data-index="3" src="{{site.baseurl}}/images/gen4x/accessories-coprocessor-thumb-04.png" alt="Subnero Modem Co-processor Module Thumbnail 4">
          </div>
        </div>
        <!-- ./slider -->
      </div>
      <div class="large-7 columns">
        <div class="card-tag gen4x">Gen4x</div>
        <div class="card-tag silver">Silver Edition</div>
        <h1>Co-processor</h1>
        <p>The Co-Processor option adds a powerful embedded computing platform directly within the Subnero modem, enabling users to deploy their own applications and algorithms with minimal effort. Designed for close hardware integration, it allows advanced processing, data management, and custom software execution within the modem — without the need for additional casing or mounting.</p>
        <p>For more background on how this capability is used in practice, you can read our blog post on the co-processor and its applications <a href="{{site.baseurl}}/product-launch/feature/2018/11/17/Underwater-modem-with-a-coprocessor.html">here</a>.</p>
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
              <td>Ethernet, accessible via IP network on the same subnet as the modem</td>
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
          <li>Developing and deploying applications directly on the modem without external hardware</li>
          <li>Implementing proprietary physical-layer algorithms and detectors for acoustic research</li>
          <li>Running edge processing and analytics for subsea IoT systems</li>
          <li>Creating autonomous behaviors or mission logic tightly integrated with modem communication</li>
        </ul>
      </div>
      <div class="large-5 columns">
        <img src="{{site.baseurl}}/images/gen4x/accessories-coprocessor-feature.png" alt="Subnero Modem Co-processor Feature Image" />
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