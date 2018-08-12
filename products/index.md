---
layout: page
title: Products
images: "images/products.jpg"
---

<div class='full' style='background: #f5f5f5'>
  <div class='row'>
    <div class='large-12 columns'>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat consectetuer sit amet magna adipiscing. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat consectetuer sit amet magna adipiscing.
      </p>
      <div class='two spacing'></div>
    </div>
  </div>

  {% assign product_pages = site.pages | where:"section_id","products" %}

  <div class='row'>
    {% for page in product_pages %}
      <div class='large-4 medium-4 columns'>
        <div class='mod modBlogPost'>
        	<a href="{{site.url}}/{{page.url}}"><img alt="" src="{{site.url}}/{{page.images[1]}}" /></a>
          <div class='content'>
            <p class='date'>{{page.date | date: "%B %d, %Y" }}</p>
            <h4><a href="#">{{page.title}}</a></h4>
            <p>{{page.excerpt}}</p>
          </div>
        </div>
      </div>
    {% endfor %}
  </div>
</div>
