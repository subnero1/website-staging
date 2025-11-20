---
layout: default
title:  User Stories
excerpt: Real stories from the deep — exploring how cutting-edge acoustic communication is powering the next generation of underwater networks.
---

<section class="products-page" style="min-height:calc(100vh - 300px); padding:4rem 0;">
  <div class="row">
      <div class="large-12 columns">
        <div class="category-content">
          <h1 style="text-transform:uppercase;">User Stories</h1>
          <h3>Discover how our customers bring the Internet of Oceans to life</h3>
        </div>
      </div>
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
