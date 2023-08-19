---
layout: default
title:  Frequently Asked Questions
banner : images/banner-about.jpg
excerpt: Frequently asked questions about Subnero's offerings
---

<div class ='full tall' style='background-image: url({{site.baseurl}}/{{page.banner}});'>
  <div class='row'>
    <div class='large-12 columns'>
      <!-- {% include section-header.html title=page.title tagline=page.tagline color=page.title_color class="big" %} -->
    </div>
  </div>
  <div class='four spacing'></div>
  <div class='four spacing'></div>
</div>

<div class='section-faq'>
  <h2 class="page-title">{{ page.title }}</h2>
  <div class="faq-row">
    <div class="faq-categories">
      <ul>
        {% for faqcat in site.data.faq-categories %}
          <li><a href="#{{faqcat.link}}">{{ faqcat.name }}</a></li>
        {% endfor %}    
      </ul>
    </div>

    <div class="faq-content">
      <!-- {% assign faq_pages = site.pages | where:"categories","general" %} -->

      {% for faqcat in site.data.faq-categories %}
      <a name="{{ faqcat.link }}"></a>
      <div class="section-head">
        <h3>{{ faqcat.name}}</h3>
      </div>
      <div>
      {% for faq in site.faq %}
      {% if faq.faq_section == faqcat.link %}
        
          <h3>{{ faq.title }}</h3>
          <p>{{ faq.content }}</p>
        
      {% endif %}
      {% endfor %}
      </div>
      {% endfor %}    

    </div>
  </div>
</div>


<!-- 
Frequently asked questions about Subnero's offerings (https://docs.google.com/document/d/1X3tvhAK7__nBliCYVxtVr9aDL5_iso8gzzn5p2tvNok/edit?usp=sharing)
- WNC
  - General
  - Editions & Configurations
  - Hardware (Mechanical, Electrical, Accessories)
  - Performance
  - Other Features
  - Software, UnetStack & Communication Algorithms
- Commercial
- SWIS - ADCP Edition 

-->
