---
layout: default
title: Subnero Wireless Networked Communications
banner : images/banner-wnc.jpg
thumbnail: images/boxart-modem.png
excerpt: Subnero Wireless Networked Communications series of products comprising of software defined underwater acoustic modems
categories: wnc
section_id: products
---
<div class='full tall swan' style='background-image: url({{site.baseurl}}/{{page.banner}});'>
  <div class='swan-overlay'></div>
  <div class='large-12 columns'>
    <div class='banner-heading'>
      <h1 class='banner-text'>
        <span class='orange'>S</span>ubnero <span class='orange'>W</span>ireless <span class='orange'>N</span>etworked <span class='orange'>C</span>ommunications
      </h1>
      <h2 class='banner-sub-heading'>WNC Product Series</h2>
    </div>
  </div>
</div>
<div class='four spacing'></div>
<div class='row row-width row-padding-bottom'>
  <div class='large-12 columns swan-flex-col row-padding-bottom'>
    <h2 class='centered-text'>Powered by UnetStack4, the Software-Defined Network Stack for Underwater Applications.</h2>
  </div>
  <div class='large-4 columns swan-flex-col'>
    <p>Subnero's fourth-generation Wireless Networked Communication (<span class='swan-highlight'>WNC</span>) series of underwater acoustic modems is designed to provide best-in-class communication performance, advanced networking and localization capabilities, and developer tools to simplify the development and deployment of underwater wireless networks. Equipped with our new and improved software, UnetStack4, our generation 4 modems are designed to take your underwater communication to the next level.</p>
    <div>
      <a href="mailto:sales@subnero.com" class='centered-text hOXnHC'><button class="button-outline">PURCHASE ENQUIRY</button></a>
    </div>
  </div>
  <div class='large-8 columns'>
  <img class = "align-self-start mr-3" alt="" src="{{site.baseurl}}/images/Gen4WNC-video-thumbnail.jpg"/>
    <!-- <div class="flex-video swan-video">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/a6HHxP9pEzM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div> -->
  </div>
</div>
<div class='bg-grey'>
  <div class='accordion-row'>
  <div class='large-6 columns container accordion-img'>
      <img src='{{site.baseurl}}/images/networkv4.jpg'>
    </div>
    <div class='large-1 columns'></div>
    <div class='large-5 columns'>
      <div class='accordion-container'>
        <div class='accordion-tab'>
          <label class="accordion-label hover-active" id='accordion-label-1' for="rad1">Best in-class performance</label>
          <label class="accordion-label" for="rad2" id='accordion-label-2' >Software-Defined Design</label>
          <label class="accordion-label" for="rad3" id='accordion-label-3' >Advanced Networking Features</label>
          <div class="accordion-content">
            <div class='content-1'>
              <ul>
                <li>Up to <span class='orange'>33 kbps</span> data rate in shallow waters (S60H series).</li>
                <li>More than <span class='orange'>4 km</span> range in challenging conditions (M25M series).</li>
                <li>Robust performance with communication profiles and link tuning.</li>
              </ul>
            </div>
            <div class='content-2'>
              <ul>
                <li>Offering unprecedented flexibility and cross-layer integration using <a href="https://unetstack.net/" target="_blank">UnetStack4</a>.</li>
                <li>Support for multiple computer language APIs and web-based dashboards.</li>
                <li>Data analysis, scientific programming & machine learning ready.</li>
              </ul>
            </div>
            <div class='content-3'>
              <ul>
                <li>Fully functional network stack out-of-the-box.</li>
                <li>Multi-hop links, routing protocols and remote control.</li>
                <li>Support for mesh and centralized networks (e.g. cellular like).</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- Industries -->
<div class='bg-white'>
  <div class='row row-padding-bottom'>
    <h1 class='section-heading'>Industries</h1>
  </div>
  <div class='container row row-width row-padding-bottom'>
    <div class='large-4 columns swan-flex-col row-width row-padding-bottom'>
      <img src='{{site.baseurl}}/images/i-defense.png' width="120" height="120">
      <div class='section-sub-heading'>
        <!-- <i class='fa fa-lg fa-eye'></i> -->
        <h2>Defense</h2>
      </div>
      <p class='auto-margin'>The platinum edition modems are an ideal solution for defense customers, as they offer best-in-class communication performance in harsh environments, are MIL-qualified, reduce complexity by using a single hardware platform for multiple functions, and support advanced features such as extended range and in-field reconfigurability with communication profiles and adaptive link tuning.</p>
    </div>
    <div class='large-4 columns swan-flex-col row-width row-padding-bottom'>
      <img src='{{site.baseurl}}/images/i-commercial.png' width="120" height="120">
      <div class='section-sub-heading'>
        <!-- <i class='fa fa-lg fa-search-location'></i> -->
        <h2>Subsea & Offshore</h2>
      </div>
      <p class='auto-margin'>The Subnero WNC series of devices are the go-to solution for subsea & offshore customers, offering support for a wide variety of sensors and software ecosystems, Content Aware Processing (CAP) engine, deep sleep state for long deployments, and a single hardware platform capable of replacing multiple legacy systems, thereby reducing operational costs and improving reliability and safety.</p>
    </div>
    <div class='large-4 columns swan-flex-col row-width row-padding-bottom'>
    <img src='{{site.baseurl}}/images/i-research.png' width="120" height="120">
      <div class='section-sub-heading'>
        <!-- <i class="fa fa-lg fa-calendar"></i> -->
        <h2>Scientific Research</h2>
      </div>
      <p class='auto-margin'>For scientific research customers, the Subnero WNC series of products offer customizable platform and media agnostic network stack, support for multiple computer languages, versatile hardware with an onboard GPU, full-fledged simulator, arbitrary waveform transmission and reception with the option to deploy your own physical layer, with the added bonus of a free community edition of UnetStack for non-commercial use.</p>
    </div>
  </div>
  <div class='row-padding-bottom'></div>
</div>
<!-- Applications -->
<div class='bg-grey'>
  <div class='row'>
    <h1 class='section-heading'>Applications</h1>
  </div>
  {% for item in site.data.wnc-tabs %}
  {% if item.name ==  "Marine Robotics" %}
  {% assign checked = "checked" %}
  {% else %}
  {% assign checked = "" %}
  {% endif %}
  <input id="{{ item.input_id }}" name='tab-control' type='radio' class='radio' {{checked}}>
  {% endfor %}
  <div class='row row-width type-container bg-grey'>
    {% for item in site.data.wnc-tabs %}
    <label class='type-item' id="{{ item.id }}" for="{{ item.input_id }}">{{ item.name }}</label>
    {% endfor %}
  </div>
  <div class="tab-panels">
    <div class='row features-row'>
      <div class='large-12 columns'>
        {% for item in site.data.wnc-tabs %}
        <div id='{{item.panel_id}}' class='tab-panel'>
          <div class='bg-grey'>
            <div class='row row-width section-margin'>
              <div class='large-6 columns'>
                <div class='swan-flex-col'>
                  <p> {{ item.introduction }}</p>
                  {% for section in item.sections %}
                  <div class='section-sub-heading'>
                    <i class='fa fa-lg fa-{{ section.icon }}'></i>
                    <h4>{{section.name}}</h4>
                  </div>
                  <p>{{section.description}}</p>
                  {% endfor %}
                </div>
              </div>
              <div class='large-5 columns'>
                <img src="{{site.baseurl}}/{{item.thumbnail}}">
              </div>
            </div>
          </div>
        </div>
        {% endfor %}
      </div>
    </div>
  </div>
</div>
<!-- Simple Deployment  -->
<div style='background-image: url({{site.baseurl}}/images/swis-second-banner.jpg);'>
  <div class='swan-position'>
    <div class="swan-overlay"></div>
    <div class='row accordion-row swan-position'>
      <h1 class='section-heading bg-white heading-padding'>Editions and Configurations</h1>
    </div>
    <div class='row row-width row-padding-bottom'>
      <div class='large-6 columns'>
        <div class='swan-flex-col bg-white card-content'>
          <h2>Editions</h2>
          <p>Subnero offers three different editions of underwater modems: the platinum, silver and research editions.</p>
          <img src='{{site.baseurl}}/images/swis-deploy-01.png'>
        </div>
      </div>
      <div class='large-6 columns'>
        <div class='swan-flex-col bg-white card-content'>
          <h2>Configurations</h2>
          <p>Subnero offers various configurations for its underwater modems to enable different deployment scenarios.</p>
          <img src='{{site.baseurl}}/images/swis-deploy-02.png'>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- Brochures -->
{%- include radio-select.html -%}
<div class='bg-grey'>
  <div class='row row-padding-bottom'>
  </div>
  <div class='row row-width row-padding-bottom'>
    <div class='large-12 columns swan-flex-col'>
      <h2>Brochures</h2>
      <div class="brochure-container">
        <a href="{{site.baseurl}}/brochures/Gen4-WNC.pdf" target="_blank"><img class="brochure-thumb" src="{{site.baseurl}}/brochures/wnc.jpg"></a>
        <a href="{{site.baseurl}}/brochures/Gen4-WNC.pdf" target="_blank">Generation 4 Wireless Networked Communications (WNC), Product Series Brief</a>
      </div>
      <div class="brochure-container">
        <a href="{{site.baseurl}}/brochures/Subnero-MF-Modems.pdf" target="_blank"><img class="brochure-thumb" src="{{site.baseurl}}/brochures/modem4.jpg"></a>
        <a href="{{site.baseurl}}/brochures/Subnero-MF-Modems.pdf" target="_blank">Subnero M25M Underwater Modems</a>
      </div>
    </div>
  </div>
</div>
