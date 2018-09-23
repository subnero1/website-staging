---
layout: page
title: Products
banner : images/banner-products.jpg
---

<div class='full' style='background: #f5f5f5'>

  {% assign product_pages = site.pages | where:"categories","underwatermodem" %}
  {% for page in product_pages %}
  <div class ='product' style='width:98.7%'>
  <a href="{{site.baseurl}}{{page.url}}">
    <img alt="" src="{{site.baseurl}}/{{page.thumbnail}}"/>
    <div class='small-3 columns'>     
    </div>
    <div class='small-8 columns'>
    <div class='content'>
    <h3 style="text-transform: none;">Wireless Networked Communications</h3>
    <p>Software defined underwater acoustic modems for networking, navigation and sensing.</p>
    </div>
  </div>
  </a>
  </div>
  {% endfor %}

  {% assign product_pages = site.pages | where:"categories","unet" %}
  {% for page in product_pages %}
  <div class ='product' style='background:#F5F5F5;'>
    <a href="{{site.baseurl}}{{page.url}}"> 
    <div class='small-8 columns'>
    <div class='content'>
    <h3 style="text-transform: none;">Underwater Network Stack & Simulator</h3>
    <p>An agent-based software stack and simulator for underwater networks.</p>
    </div>
    </div>
    <div class='small-3 columns'>
    <img style='float:right;margin-bottom: 0 auto' alt="" src="{{site.baseurl}}/{{page.thumbnail}}"/>
    </div>
    </a>
  </div> 
  {% endfor %}

  {% assign product_pages = site.pages | where:"categories","water-quality-management" %}
  {% for page in product_pages %}
  <div class ='product' style='width:98.7%;'>
    <a href="{{site.baseurl}}{{page.url}}">
    <img class='img-rounded' alt="" src="{{site.baseurl}}/{{page.thumbnail}}"/>
    <div class='small-3 columns'>      
    </div>
    <div class='small-8 columns'>
    <div class='content'>
    <h3 style="text-transform: none;">Water Quality Monitoring</h3>
    <p>Scalable automous platforms for in-situ water quality measurements.</p>
    </div>
    </div>
    </a>
  </div>
    {% endfor %}

</div>
