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
        <div class='large-3 columns category-img'>
          <img alt="" class='round-border-10' src="{{site.baseurl}}/{{page.thumbnail}}"/>
        </div>
        <div class='large-9 columns'>
          <div class='category-content'>
            <h1>Wireless Networked Communications (WNC)</h1>
            <h3>Software defined underwater acoustic smart modems for communication, networking, navigation and monitoring. <a class="inline-btn" href="{{site.baseurl}}/products/wnc.html">Read More &#8594;</a></h3>

            <div class="card-wrapper">
              <div class="product-card">
                <div class="card-tag">Gen 4X</div>
                <h2>S40H Series</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit repellat esse libero veniam.</p>
                <div class="text-right"><a class="inline-btn" href="{{site.baseurl}}/products/gen4x/index.html?category=S40H">View &#8594;</a></div>
              </div>
              <div class="product-card">
                <div class="card-tag">Gen 4X</div>
                <h2>L12L Series</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit repellat esse libero veniam.</p>
                <div class="text-right"><a class="inline-btn" href="{{site.baseurl}}/products/gen4x/index.html?category=L12L">View &#8594;</a></div>
              </div>
              <div class="product-card">
                <div class="card-tag">Gen 4X</div>
                <h2>M25M Series</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit repellat esse libero veniam.</p>
                <div class="text-right"><a class="inline-btn" href="{{site.baseurl}}/products/gen4x/index.html?category=M25M">View &#8594;</a></div>
              </div>
              <div class="product-card">
                <div class="card-tag">Gen 4X</div>
                <h2>Optional Accessories</h2>
                <p>Hardware accessories to enhance capacity and features.</p>
                <div class="text-right"><a class="inline-btn" href="{{site.baseurl}}/products/gen4x/index.html?category=Accessories">View &#8594;</a></div>
              </div>
              <div class="product-card">
                <div class="card-tag">Gen 4X</div>
                <h2>All Gen4X</h2>
                <p>View our lastest generation - Gen 4X - product series.</p>
                <div class="text-right"><a class="inline-btn" href="{{site.baseurl}}/products/gen4x/">View &#8594;</a></div>
              </div>
              <div class="product-card">
                <div class="card-tag gen4">Gen 4</div>
                <h2>All Gen4</h2>
                <p>View our previous generation products.</p>
                <div class="text-right"><a class="inline-btn" href="{{site.baseurl}}/products/modem.html">View &#8594;</a></div>
              </div>
            </div>
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
