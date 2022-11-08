---
layout: default
title:  Solutions
banner : images/banner-solutions.jpg
excerpt: Subnero's solutions for marine robots and underwater sensors.
---

<div class='full tall' style='background-image: url({{site.baseurl}}/{{page.banner}});'>
  <div class='row'>
    <div class='large-12 columns'>
    </div>
  </div>
  <div class='four spacing'></div>
  <div class='four spacing'></div>
</div>

<div class='full'>
  {% assign soln_pages = site.pages | where:"categories","swis" %}
  {% for page in soln_pages %}
  <div class ='category-container bg-white'>
    <div class='category-row'>    
      <div class='large-3 columns category-img'>
        <a href='{{site.baseurl}}/solutions/swis'><img alt="" style="border-radius: 20%" src="{{site.baseurl}}/{{page.thumbnail}}"/></a>
      </div>
      <div class='large-9 columns'>       
        <div class='category-content'>
          <a href='{{site.baseurl}}/solutions/swis'><h1>Subnero Wireless Integrated Suite</h1></a>
          <a href='{{site.baseurl}}/solutions/swis'><h3>ADCP Edition</h3></a>
          <div class='media'>
            <div class='modem-type'>
              <a href='{{site.baseurl}}/solutions/swis'><button class='button-outline'>View details</button></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    {% endfor %}
  {% assign soln_pages = site.pages | where:"categories","water-quality-management" %}
  {% for page in soln_pages %}
  <div class ='category-container bg-grey'>
    <div class='category-row'>    
      <div class='large-3 columns category-img'>
        <a href='{{site.baseurl}}/solutions/swan'><img alt="" style="border-radius: 20%" src="{{site.baseurl}}/{{page.thumbnail}}"/></a>
      </div>
      <div class='large-9 columns'>       
        <div class='category-content'>
          <a href='{{site.baseurl}}/solutions/swan'><h1>Subnero Water Assessment Network</h1></a>
          <a href='{{site.baseurl}}/solutions/swan'><h3>Scalable, autonomous network of unmanned surface vehicles for real-time in-situ, water quality measurements.</h3></a>
          <div class='media'>
            <div class='modem-type'>
              <a href='{{site.baseurl}}/solutions/swan'><button class='button-outline'>View details</button></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    {% endfor %}
</div>
