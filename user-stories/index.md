---
layout: default
title:  User Stories
banner : images/hero-wnc.jpg
excerpt: Real stories from the deep — exploring how cutting-edge acoustic communication is powering the next generation of underwater networks.
---

<section class="page-hero md gen4x" style='background-image: url({{site.baseurl}}/{{page.banner}});'>
  <div class="row flex-row">
    <div class="hero-text">
      <h4 class="g4x-tag">User Storeis</h4>
      <h1>User <span class="text-gradient g-blue">Stories</span></h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
    </div>
  </div>
</section>

<section class="g4x-section">
  <div class="g4x-section-head">
    <h2 class="sec-head text-gradient g-orange">User Stories</h2>
    <p class="sec-subhead">Discover how our customers bring the Internet of Oceans to life.</p>
  </div>

  <div class="row" style="padding:2rem 0;">
    <div class="columns large-11 large-centered">
      {% assign stories_sorted = site.userstories | sort: 'date' | reverse %}
      {% for item in stories_sorted %}
      <a href="{{ item.url }}" class="user-story-card">
        <div class="user-logo">
          <img src="{{site.baseurl}}{{item.preview_image}}" alt="{{ item.title }}">
        </div>
        <div class="details">
          <h2>{{ item.sub_title }}</h2>
          <p>{{ item.excerpt }}</p>
          <p class="read-link">Learn More &#8594;</p>
        </div>
      </a>
      {% endfor %}      
    </div>
  </div>
</section>
