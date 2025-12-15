---
layout: default
title: Insights from Beneath the Surface
banner : images/banner-pulse.jpg
title_color : "#E6782F"
---

<section class="page-hero md gen4x" style="background-image: url({{site.baseurl}}/{{page.banner}});">
  <div class="row flex-row">
    <div class="hero-text">
      <h4 class="g4x-tag">Pulse</h4>
      <h1>Insights from <span class="text-gradient g-blue">Beneath the Surface</span></h1>
      <p>Updates, stories, and announcements shaping Subnero’s journey in underwater communication.</p>
    </div>
  </div>
</section>

<section class="g4x-section posts-list">
  <div class="row large">
    <div class="pulse-grid" id="pulsepage">
      {% for post in site.posts %}
      {% assign isnews = false %}
      {% assign isimage = false %}
      {% if post.external_url != null %}
        {% assign isnews = true %}
      {% endif %}
      {% if post.thumbnail != null %}
        {% assign isimage = true %}
      {% endif %}
      <div class="pulse-card">
        <div class='images'>
          {% for image in post.images %}
          <div class='image'>
            <img alt="" src="{{site.url}}/{{image}}" />
          </div>
          {% endfor %}
        </div>
        <div class='image'>
          <a {% if isnews %}target="_blank"{% endif %} href="{% if isnews %}{{post.external_url}}{% else %}{{site.baseurl}}{{post.url}}{% endif %}">
            <img alt="" src="{% if isimage %}{{site.url}}/{{post.thumbnail}}{% else %}{{site.url}}/{{ site.default_image }}{% endif %}" />
          </a>
        </div>
        <p class='info'>
          <span>{{post.date | date: "%B %d, %Y" }}</span>
        </p>
        <h3>
          <a {% if isnews %}target="_blank"{% endif %} href="{% if isnews %}{{post.external_url}}{% else %}{{site.baseurl}}{{post.url}}{% endif %}">{{post.title}}</a>
        </h3>
        <div class="tags">
          {% for tag in post.categories %}
            {% capture tag_name %}{{ tag }}{% endcapture %}
            <div class="pulse-tag" >
              <svg viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.583 8.445h.01M10.86 19.71l-6.573-6.63a.993.993 0 0 1 0-1.4l7.329-7.394A.98.98 0 0 1 12.31 4l5.734.007A1.97 1.97 0 0 1 20 5.983v5.5a1 1 0 0 1-.316.727l-7.44 7.5a.974.974 0 0 1-1.384.001Z"/></svg>
              <a href="/tag/{{ tag_name }}">{{ tag_name }}</a>
            </div>
          {% endfor %}
        </div>
      </div>
      {% endfor %}
    </div>
  </div>
</section>
