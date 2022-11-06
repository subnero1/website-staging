---
layout: default
title: Products - Subnero
banner : images/banner-products.jpg
excerpt: Subnero's underwater acoustic modems with UnetStack for underwater wireless communication and networking and SWAN for real-time water-quality monitoring.
---
<div class='full tall' style='background-image: url({{site.baseurl}}/{{page.banner}});'>
  <div class='row'>
    <div class='large-12 columns'>
      <!-- {% include section-header.html title=page.title tagline=page.tagline color=page.title_color class="big" %} -->
    </div>
  </div>
  <div class='four spacing'></div>
  <div class='four spacing'></div>
</div>

<div class='full'>
  {% assign product_pages = site.pages | where:"categories","underwatermodem" %}
  {% for page in product_pages %}
  <div class='category-container bg-grey'>
    <div class='category-row'>
        <div class='large-3 columns category-img'>
          <a href='{{site.baseurl}}/products/modem.html?&section=M25Mseries'><img alt="" style="border-radius: 20%" src="{{site.baseurl}}/{{page.thumbnail}}"/></a>
        </div>
        <div class='large-9 columns'>
          <div class='category-content'>
            <a href='{{site.baseurl}}/products/modem.html?&section=M25Mseries'><h1>Wireless Networked Communications</h1></a>
            <a href='{{site.baseurl}}/products/modem.html?&section=M25Mseries'><h3>Software defined underwater acoustic modems for communication, networking, navigation and monitoring.</h3></a>
            <div class='media'>
              <div class='modem-type'>
                <a href='{{site.baseurl}}/products/modem.html?&section=M25Mseries'>
                  <button class='button-outline'>M25M series</button>
                </a>
                <!-- <p>Medium range modems</p>                 -->
              </div>
              <div class='modem-type'>
                <a href='{{site.baseurl}}/brochures/WNC-whitepaper.pdf'>
                  <button class='button-outline'>Whitepaper</button>
                </a>
              </div>
              <div class='modem-type'>
                <a href='{{site.baseurl}}/products/modem.html'>
                  <button class='button-outline'>View all</button>
                </a>
                <!-- <p>All products</p>                 -->
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>
  {% endfor %}
  {% assign product_pages = site.pages | where:"categories","unet" %}
  {% for page in product_pages %}
  <div class='category-container'>
    <div class='category-row'>
      <div class='large-3 columns category-img'>
        <a href='{{site.baseurl}}/products/unet'><img alt="" style="border-radius: 20%" src="{{site.baseurl}}/{{page.thumbnail}}"/></a>
      </div>   
      <div class='large-9 columns'> 
        <div class='category-content'>
          <a href='{{site.baseurl}}/products/unet'><h1>Underwater Network Stack & Simulator</h1></a>
          <a href='{{site.baseurl}}/products/unet'><h3>An agent-based software stack and simulator for underwater networks and protocols.</h3></a>
          <div class='media'>
            <div class='modem-type'>
              <a href='{{site.baseurl}}/products/unet'><button class='button-outline'>View details</button></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {% endfor %}

  <!-- {% assign product_pages = site.pages | where:"categories","water-quality-management" %}
  {% for page in product_pages %}
  <div class ='category-container bg-grey'>
    <div class='category-row'>    
      <div class='large-3 columns category-img'>
        <a href='{{site.baseurl}}/products/swan'><img alt="" style="border-radius: 20%" src="{{site.baseurl}}/{{page.thumbnail}}"/></a>
      </div>
      <div class='large-9 columns'>       
        <div class='category-content'>
          <a href='{{site.baseurl}}/products/swan'><h1>Subnero Water Assessment Network</h1></a>
          <a href='{{site.baseurl}}/products/swan'><h3>Scalable, autonomous network of unmanned surface vehicles for real-time in-situ, water quality measurements.</h3></a>
          <div class='media'>
            <div class='modem-type'>
              <a href='{{site.baseurl}}/products/swan'><button class='button-outline'>View details</button></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    {% endfor %} -->
</div>
