---
layout: page
title: Products
banner : images/products-banner.jpg
---

<div class='full' style='background: #f5f5f5'>
  <div class='row'>
    <div class='large-12 columns'>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat consectetuer sit amet magna adipiscing. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat consectetuer sit amet magna adipiscing.
      </p>
      <div class='two spacing'></div>
    </div>
  </div>

  {% assign product_pages = site.pages | where:"categories","water-quality-management" %}
  {% for page in product_pages %}
  <div class ='product' style='width:98.7%'>
  <a href="{{site.baseurl}}{{page.url}}">
    <img alt="" src="{{site.baseurl}}/{{page.thumbnail}}"/>
    <div class='small-3 columns'>     
    </div>
    <div class='small-8 columns'>
    <div class='content'>
    <h3 style="text-transform: none;">Water Quality Monitoring</h3>
    <p>Scalable automous platforms for in-situ water quality measurements</p>
    </div>
  </div>
  </a>
  </div>
  {% endfor %}

  {% assign product_pages = site.pages | where:"categories","unet" %}
  {% for page in product_pages %}
  <div class ='product' style='background:#F5F5F5;'>
    <a href="{{site.baseurl}}{{page.url}}"> 
    <div class='small-6 columns'>
    <div class='content'>
    <h3 style="text-transform: none;">Underwater Network Stack</h3>
    <p>An Agent-based Software stack and Simulator for Underwater Networks</p>
    </div>
    </div>
    <div class='small-4 columns'>
    <img style='float:right;margin-bottom: 0 auto' alt="" src="{{site.baseurl}}/{{page.thumbnail}}"/>
    </div>
    </a>
  </div> 
  {% endfor %}

  {% assign product_pages = site.pages | where:"categories","underwatermodem" %}
  {% for page in product_pages %}
  <div class ='product' style='width:98.7%;'>
    <a href="{{site.baseurl}}{{page.url}}">
    <img class='img-rounded' alt="" src="{{site.baseurl}}/{{page.thumbnail}}"/>
    <div class='small-3 columns'>      
    </div>
    <div class='small-8 columns'>
    <div class='content'>
    <h3 style="text-transform: none;">Underwater modems</h3>
    <p>Software defined underwater acoustic modems for networking,navigation and sensing</p>
    </div>
    </div>
    </a>
  </div>
    {% endfor %}

  <!--<div class='row'>
    {% for page in product_pages %}
      <div class='large-4 medium-4 columns'>
        <div class='mod modBlogPost'>
        	<a href="{{site.baseurl}}{{page.url}}"><img alt="" src="{{site.baseurl}}/{{page.thumbnail}}" />
          <div class='content'>
            <h3 style="text-transform: none;">{{page.title}}</h3>
            <p>{{page.excerpt}}</p>
          </div></a>
        </div>
      </div>
    {% endfor %}
  </div>-->
</div>
