---
layout: default
title: Gen4x Product Range
banner: images/banner-products.jpg
---

{% assign products = site.data.gen4x_products %}

<div id="gen4x-products">
  {% comment %}
    Get category from URL param using JS and filter categories client-side.
    By default, show all categories.
  {% endcomment %}
  {% for category in products %}
    {% assign key = category[0] %}
    {% assign value = category[1] %}
    <div class="category-row main-links" data-category="{{ key }}">
      <header class="products-header">
        <h1>{{ value.title | upcase }}</h1>
        <h2>{{ value.type }}</h2>
        <p>{{ value.details }}</p>
      </header>
      {% assign editions = value.products | map: "edition" | uniq %}
      {% for edition in editions %}
        <div class="card-wrapper detailed" data-edition="{{ edition }}">
          {% for product in value.products %}
            {% if product.edition == edition %}
              <a class="product-card" href="{{ product.link }}">
              {% unless key == "Accessories" %}
                <div class="card-tag {{ edition | downcase }}">{{ edition }} Edition</div>
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
            {% endif %}
          {% endfor %}
        </div>
      {% endfor %}
    </div>
  {% endfor %}
</div>

<div class="quick-links">
  <div class="category-row">
    <h3>Quick LInks</h3>
    {% include quick_links.html %}
  </div>
</div>

<script>
// Filter categories by URL param 'category'
(function() {
  function getQueryParam(param) {
    let params = new URLSearchParams(window.location.search);
    return params.get(param);
  }
  let selectedCategory = getQueryParam('category');
  if (selectedCategory) {
    document.querySelectorAll('.main-links').forEach(function(cat) {
      if (cat.getAttribute('data-category') !== selectedCategory) {
        // cat.style.display = 'none';
        cat.classList.add('hidden');
      }
    });
  }
})();
</script>