---
layout: default
title:  Frequently Asked Questions
banner : images/banner-about.jpg
excerpt: Frequently asked questions about Subnero's offerings
---

<div class ='full tall hero' style='background-image: url({{site.baseurl}}/{{page.banner}});'>
  <div class='row'>
    <div class='large-12 columns'>
      <!-- {% include section-header.html title=page.title tagline=page.tagline color=page.title_color class="big" %} -->
    </div>
  </div>
  <div class='four spacing'></div>
  <div class='four spacing'></div>
</div>

<div class="section-faq">

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
      <p class="intro-text">Our Frequently Asked Questions (FAQ) page is designed to address a wide range of inquiries, ensuring you have a seamless experience while exploring our offerings. Whether you're looking for general information, technical details, or assistance with specific tasks, this comprehensive resource is your go-to destination for clarity and insights. If you can't find what you're looking for, don't hesitate to reach out to info@subnero.com</p>
      <!-- {% assign faq_pages = site.pages | where:"categories","general" %} -->

      {% for faqcat in site.data.faq-categories %}
      <div id="{{ faqcat.link }}" class="section-head anchor-link">
        <h3>{{ faqcat.name}}</h3>
      </div>
      <div class="faq-listing">
      {% for faq in site.faq %}
      {% if faq.faq_section == faqcat.link %}
        {% assign filename = faq.url | replace_first: '/', '' | replace: '/', '-'  | replace: '.', '-' %}
        <div class="faq-item">
          <input class="toggle-checkbox" type="checkbox" id="{{ filename }}" />
          <label class="toggle-label" for="{{ filename }}"><span class="faq-q">Q.</span>{{ faq.title }}</label>
          <div class="item-content">
            {{ faq.content }}
          </div>
          <span class="toggle-icon"></span>
        </div>
      {% endif %}
      {% endfor %}
      </div>
      {% endfor %}

    </div>
  </div>

  <div class="print-btn">
  <a href="#" onclick="window.print(); return false; ">
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-printer" viewBox="0 0 16 16">
      <path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"/>
      <path d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2H5zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4V3zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2H5zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1z" />
    </svg>
  </a>
  </div>
</div>
