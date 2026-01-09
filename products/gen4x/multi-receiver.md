---
layout: default
---

<div class="product-details">
  <section class="intro category-container">
    <div class="category-row">
      <div class="large-5 columns">
        <div class="product-images">
            <div class="main-slider">
              <div class="slider-track">
                <img class="main-img" src="{{site.baseurl}}/images/gen4x/M25M-silver-mr-gallery-01.png" alt="Subnero Multi-Receiver Modem Gallery View 1">
                <img class="main-img" src="{{site.baseurl}}/images/gen4x/M25M-silver-mr-gallery-02.png" alt="Subnero Multi-Receiver Modem Gallery View 2">
                <img class="main-img" src="{{site.baseurl}}/images/gen4x/M25M-silver-mr-gallery-03.png" alt="Subnero Multi-Receiver Modem Gallery View 3">
                <img class="main-img" src="{{site.baseurl}}/images/gen4x/M25M-silver-mr-gallery-04.png" alt="Subnero Multi-Receiver Modem Gallery View 4">
              </div>
            </div>
            <div class="thumbs">
              <img class="selected-thumb" data-index="0" src="{{site.baseurl}}/images/gen4x/M25M-silver-mr-thumb-01.png" alt="Subnero Multi-Receiver Modem Thumbnail 1">
              <img data-index="1" src="{{site.baseurl}}/images/gen4x/M25M-silver-mr-thumb-02.png" alt="Subnero Multi-Receiver Modem Thumbnail 2">
              <img data-index="2" src="{{site.baseurl}}/images/gen4x/M25M-silver-mr-thumb-03.png" alt="Subnero Multi-Receiver Modem Thumbnail 3">
              <img data-index="3" src="{{site.baseurl}}/images/gen4x/M25M-silver-mr-thumb-04.png" alt="Subnero Multi-Receiver Modem Thumbnail 4">
            </div>
          </div>
      </div>
      <div class="large-7 columns">
        <div class="card-tags">
          <div class="card-tag silver">Silver Edition</div>
        </div>
        <h1>Additional Receiving Channels</h1>
        <p>Adding extra receiving channels enhances the modem’s capability by incorporating multiple hydrophones for improved signal processing. This upgrade enables spatial diversity combining, helping maintain reliable communication links in challenging environments while extending effective range. It also unlocks advanced functions such as localization and high-fidelity acoustic monitoring. For research users, the additional channels provide access to raw multi-channel data, making the modem a suitable platform for developing custom navigation and tracking algorithms for AUVs.</p>
        <p>Learn how multi-receiver modems enable robust links and novel research use cases <a href="{{site.baseurl}}/feature/2025/11/13/Improving-Underwater-Communication-with-Multi-Receiver-Modems.html">here</a>.</p>
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
              <td>Receive channels</td>
              <td>1, 2</td>
            </tr>
            <tr>
              <td>Supported configurations</td>
              <td>Standalone Configuration (SC), Open Configuration (OC)</td>
            </tr>
            <tr>
              <td>Waveform streaming</td>
              <td>Supported (all receivers)</td>
            </tr>
            <tr>
              <td>Programmable gain</td>
              <td>36 dB</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
  <section class="features category-container">
    <div class="category-row">
      <div class="large-7 columns">
        <h3>Features</h3>
        <h4>Enhanced communication performance</h4>
        <p>Uses spatial diversity combining to maintain strong and reliable links in challenging acoustic environments.</p>
        <h4>Research-ready signal access for underwater communication and localization research</h4>
        <p>Provides access to raw, multi-channel acoustic data streams, offering an ideal platform for researchers developing custom communication (SIMO), navigation, tracking, and signal-processing algorithms for AUVs.</p>
        <!-- TODO: Add a link to Roee's user story once ready -->
        <h4>Flexible device roles for advanced underwater IoT networks</h4>
        <p>Supports use as a high-performance communication modem, a positioning aid, or a versatile acoustic recorder for rapid environmental assessment.</p>
        <h4>3D positioning and tracking</h4>
        <p>Enables three-dimensional localization and tracking using multi-hydrophone signal processing.</p>
      </div>
      <div class="large-5 columns">
        <img src="{{site.baseurl}}/images/gen4x/M25M-silver-mr-feature.png" alt="Subnero Multi-Receiver Modem Feature Image" />
      </div>
    </div>
  </section>
  <section class="technical category-container">
    <div class="category-row">
      <div class="large-4 columns">
        <h3>Brochures</h3>
        <div class=brochures>
          <a class="download-file" href="{{site.baseurl}}/brochures/gen4x-MR-Modems.pdf" target="_blank">
            <img src="{{site.baseurl}}/brochures/gen4x-MR-Modems.jpg" alt="Subnero Multi-Receiver Modems Brochure Thumbnail" >
            <span>Subnero Multi-Receiver Modems</span>
          </a>
        </div>
      </div>
      <div class="large-8 columns">
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