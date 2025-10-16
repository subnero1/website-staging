---
layout: default
title: Products - Subnero
banner : images/banner-products.jpg
excerpt: Subnero's underwater acoustic smart modems with UnetStack for underwater wireless communication and networking.
---
<div class='page-hero' style='background-image: url({{site.baseurl}}/{{page.banner}});'>
  <!-- hero section -->
</div>

<div>
  {% assign product_pages = site.pages | where:"categories","underwatermodem" %}
  {% for page in product_pages %}
  <div class='category-container bg-white'>
    <div class='category-row'>
        <!-- <div class='large-3 columns category-img'>
          <img alt="" class='round-border-10' src="{{site.baseurl}}/{{page.thumbnail}}"/>
        </div> -->
        <div class='large-12 columns'>
          <div class='category-content wnc-products'>
            <h1>Wireless Networked Communications (WNC)</h1>
            <h3>Software defined underwater acoustic smart modems for communication, networking, navigation and monitoring. <a class="inline-btn" href="{{site.baseurl}}/products/wnc.html">Read More &#8594;</a></h3>
            {% include quick_links.html show_details=true %}
          </div>
      </div>
    </div>
  </div>
  {% endfor %}
  {% assign product_pages = site.pages | where:"categories","unet" %}
  {% for page in product_pages %}
  <hr style="max-width:90rem;" />
  <div class='category-container'>
    <div class='category-row'>
      <div class='large-3 columns category-img'>
        <a href='{{site.baseurl}}/products/unet'><img alt="" class='round-border-10' src="{{site.baseurl}}/{{page.thumbnail}}"/></a>
      </div>   
      <div class='large-9 columns'> 
        <div class='category-content'>
          <h1>Underwater Network Stack & Simulator</h1>
          <h3>An agent-based software stack and simulator for underwater wireless networks and protocols. <a class="inline-btn" href="{{site.baseurl}}/products/unet">Read More &#8594;</a></h3>
          <h3>Explore our whitepaper to learn how our underwater network solutions enhance the effectiveness of underwater communication. <a class="inline-btn" href="{{site.baseurl}}/brochures/unlocking-underwater-connectivity.pdf">Read More &#8594;</a></h3>
        </div>
      </div>
    </div>
  </div>
  {% endfor %}
</div>
