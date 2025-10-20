---
layout: product
title: Gen4x Product Range
category: accessories
order: 4
---

<div class="category-row main-links">
  <header class="products-header" style="padding-bottom:0;">
    <h1>{{ site.data.gen4x_products.accessories.title }}</h1>
    <h2>{{ site.data.gen4x_products.accessories.type }}</h2>
  </header>
</div>
<section class="products-page">
  <div class="row" style="margin-top:0;">
    <div class="large-12 columns"> 
      <div class="category-content text-center">
        <h3 style="font-weight:400;">These accessories and optional upgrades are additional processing module for Subnero underwater modems. While Subnero modems provide flexibility to extend various aspects of the device by the user, there are at times when a customer may want to deploy their applications and algorithms to run with close proximity to the modem hardware.</h3>
      </div>
    </div>  
  </div>
</section>

<section style="padding:1rem;">
  <div class="row text-center">
    <h3 style="color:#E6782F;">Avaialble accessories and optional upgrades:</h3>
  </div>
  <div class="row">
    <div class="card-wrapper">
    {% for product in site.data.gen4x_products.accessories.products %}
      <a class="product-card" href="{{site.baseurl}}{{product.link }}">
        <div class="card-tag {{ product.edition | downcase }}">{{product.edition}} Edition</div>
        <div class="card-title type"></div>
        <div class="card-title name">{{ product.name }}</div>
        <div class="product-img">
          <img src="{{site.baseurl}}{{product.image }}">
        </div>
        <div class="details-link">View Details →</div>
      </a>
    {% endfor %}
    </div>
  </div>
</section>