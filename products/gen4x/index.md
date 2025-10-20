---
layout: default
title: Gen4x Product Range
banner: images/banner-products.jpg
---

{% assign products = site.data.gen4x_products %}

<div id="gen4x-products">
  {% for category in products %}
    {% assign key = category[0] %}
    {% assign value = category[1] %}
    <div class="category-row main-links" data-category="{{ key }}">
      <header class="products-header">
        <h1>
        {{ value.title | upcase }}
        {% unless key == "Accessories" %}
        <small>({{ value.band }})</small>
        {% endunless %}
        </h1>
        <h2>{{ value.type }}</h2>
        <p>{{ value.description }}</p>
      </header>
      <div class="card-wrapper detailed">
        {% for product in value.products %}
          <a class="product-card" href="{{ product.link }}">
            {% unless key == "Accessories" %}
              <div class="card-tag {{ product.edition | downcase }}">{{ product.edition }} Edition</div>
            {% endunless %}
            {% if product.is_new %}
              <div class="new-badge">New</div>
            {% endif %}
            <div class="card-title type">{{ product.type }}</div>
            <div class="card-title name">{{ product.name }}</div>
            <div class="product-img">
              <img src="{{site.baseurl}}{{ product.image }}">
            </div>
            <div class="details-link">View Details &#8594;</div>
          </a>
        {% endfor %}
      </div>
    </div>
  {% endfor %}
</div>

<div class="quick-links">
  <div class="category-row">
    <h3>Quick Links</h3>
    {% include quick_links.html %}
  </div>
</div>

<script>
// Filter categories by URL param 'category' only if the param is valid
// Valid categories: L12L, M25M, S40H, Accessories
// If no param or invalid param, show all sections
(function() {
  function getQueryParam(param) {
    let params = new URLSearchParams(window.location.search);
    return params.get(param);
  }

  let selectedCategory = getQueryParam('category');
  const validCategories = ['L12L', 'M25M', 'S40H', 'Accessories'];

  if (selectedCategory && validCategories.includes(selectedCategory)) {
    document.querySelectorAll('.main-links').forEach(function(cat) {
      if (cat.getAttribute('data-category') !== selectedCategory) {
        cat.classList.add('hidden');
      }
    });
  }
  // If no param or invalid, do nothing - all sections remain visible
})();
</script>