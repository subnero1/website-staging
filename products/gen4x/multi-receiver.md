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
                <img class="main-img" src="{{site.baseurl}}/images/gen4x/M25M-silver-mr-gallery-01.png" alt="Product Image 1">
                <img class="main-img" src="{{site.baseurl}}/images/gen4x/M25M-silver-mr-gallery-02.png" alt="Product Image 2">
                <img class="main-img" src="{{site.baseurl}}/images/gen4x/M25M-silver-mr-gallery-03.png" alt="Product Image 3">
              </div>
            </div>
            <div class="thumbs">
              <img class="selected-thumb" data-index="0" src="{{site.baseurl}}/images/gen4x/M25M-silver-mr-thumb-01.png" alt="Thumbnail 1">
              <img data-index="1" src="{{site.baseurl}}/images/gen4x/M25M-silver-mr-thumb-02.png" alt="Thumbnail 2">
              <img data-index="2" src="{{site.baseurl}}/images/gen4x/M25M-silver-mr-thumb-03.png" alt="Thumbnail 3">
            </div>
          </div>
      </div>
      <div class="large-7 columns">
        <div class="card-tags">
          <div class="card-tag silver">Silver Edition</div>
        </div>
        <h1>Multi-receiver Configuration</h1>
        <p>Subnero’s multi-receiver configuration enhances communication reliability and performance by combining signals from multiple hydrophones. This approach leverages spatial diversity to improve robustness, extend range, and enable advanced capabilities such as 3D positioning and high-fidelity acoustic sensing. It also provides a strong platform for researchers, offering access to raw multi-channel data for developing and testing custom navigation and tracking algorithms for AUVs.</p>
        <h3>Applications</h3>
        <ul>
          <li>Underwater positioning and tracking research</li>
          <li>High-performance subsea communications</li>
          <li>Rapid environmental assessment</li>
          <li>Underwater IoT networks</li>
        </ul>
      </div>
    </div>
  </section>
  <section class="features category-container">
    <div class="category-row">
      <div class="large-7 columns">
        <h3>Features</h3>
        <h4>Enhanced communication performance</h4>
        <p>Uses spatial diversity combining to maintain strong and reliable links in challenging acoustic environments.</p>
        <h4>Research-ready signal access</h4>
        <p>Provides access to raw, multi-channel acoustic data streams, offering an ideal platform for researchers developing custom communication (SIMO), navigation, tracking, and signal-processing algorithms for AUVs.</p>
        <!-- TODO: Add a link to Roee's user story once ready -->
        <h4>Flexible device roles</h4>
        <p>Supports use as a high-performance communication modem, a positioning aid, or a versatile acoustic recorder.</p>
        <h4>3D positioning and tracking</h4>
        <p>Enables three-dimensional localization and tracking using multi-hydrophone signal processing.</p>
      </div>
      <div class="large-5 columns">
        <img src="{{site.baseurl}}/images/gen4x/M25M-silver-mr-feature.png" />
      </div>
    </div>
  </section>
  <section class="technical category-container">
    <div class="category-row">
      <div class="large-4 columns">
        <h3>Brochures</h3>
        <div class=brochures>
          <a class="download-file" href="{{site.baseurl}}/brochures/Subnero-MR-Modems.pdf" target="_blank">
            <img src="{{site.baseurl}}/brochures/modem5.jpg">
            <span>Subnero Multi-Receiver Configuration Modems</span>
          </a>
        </div>
      </div>
      <div class="large-8 columns">
        <h3>Technical Specification</h3>
        <table class="specification-table">
          <thead>
            <tr>
              <th>Feature</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Modem</td>
              <td>Subnero WNC Series Smart Modems</td>
            </tr>
            <tr>
              <td>Additional receiving hydrophones</td>
              <td>Up to 4</td>
            </tr>
            <tr>
              <td>Additional sensors (optional)</td>
              <td>GPS</td>
            </tr>
            <tr>
              <td>Waveform streaming</td>
              <td>Supported (all receivers)</td>
            </tr>
            <tr>
              <td>Programmable gain</td>
              <td>36 dB</td>
            </tr>
            <tr>
              <td>Dimensions</td>
              <td>⌀ 127 ✕ 416 mm</td>
            </tr>
            <tr>
              <td>Weight (in air / water)</td>
              <td>8.0 / 3.0 kg</td>
            </tr>
            <tr>
              <td>Power consumption</td>
              <td>
                &lt; 7 W (receive mode, nominal) <br />
                &lt; 45 W (transmit mode, average)
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</div>
{%- include imageViewer.html -%}