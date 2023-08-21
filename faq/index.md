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
  <p>Our Frequently Asked Questions (FAQ) page is designed to address a wide range of inquiries, ensuring you have a seamless experience while exploring our offerings. Whether you're looking for general information, technical details, or assistance with specific tasks, this comprehensive resource is your go-to destination for clarity and insights. If you can't find what you're looking for, don't hesitate to reach out to info@subnero.com</p>
      <!-- {% assign faq_pages = site.pages | where:"categories","general" %} -->

      {% for faqcat in site.data.faq-categories %}
      <div id="{{ faqcat.link }}" class="section-head">
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
</div>
