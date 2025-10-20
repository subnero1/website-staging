---
layout: default
title: Gen4x Product Range
banner: images/banner-products.jpg
---

{% assign sorted_items = site.gen4x | sort: 'order' %}
{% for item in sorted_items %}
  <div>
    {{ item.content }}
  </div>
  {% unless item.category == "accessories" %}
  <hr style="max-width:90rem;" />
  {% endunless %}
{% endfor %}

<div class="quick-links">
  <div class="category-row">
    <h3>Quick Links</h3>
    {% include quick_links.html %}
  </div>
</div>