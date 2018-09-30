---
layout: page
title:  Pulse
banner : images/banner-pulse.jpg
title_color : "#E6782F"
---

{% for post in site.posts %}
  {% assign isnews = false %}
  {% if post.external_url != null %}
    {% assign isnews = true %}
  {% endif %}
  <div class='big mod modBlogPost'>
    <div class='images'>
      {% for image in post.images %}
        <div class='image'><img alt="" src="{{site.url}}/{{image}}" /></div>
      {% endfor %}
    </div>
    <div class='content'>
      <p class='info'>
        <span>{{post.date | date: "%B %d, %Y" }}</span>
      </p>
      <h3 style="text-transform: none;"><a {% if isnews %}target="_blank"{% endif %} href="{% if isnews %}{{post.external_url}}{% else %}{{site.baseurl}}{{post.url}}{% endif %}">{{post.title}}</a></h3>
      {% if isnews %}
      <h5 style="text-transform: none;">From <a href="{{post.source}}">{{post.source}}</a> </h5>
      {% else %}
      <p>{{post.excerpt}}</p>
      <a class="button small" href="{{site.baseurl}}{{post.url}}">Read more</a>
      {% endif %}
    </div>
  </div>
{% endfor %}
