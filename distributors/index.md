---
layout: default
title:  Distributors
banner : images/banner-pulse.jpg
image: images/distributors-grey.jpg
---

<div class ='full tall' style='background-image: url({{site.baseurl}}/{{page.banner}});'>
  <div class='row'>
    <div class='large-12 columns'>
    </div>
  </div>
  <div class='four spacing'></div>
  <div class='four spacing'></div>
</div>

<div class='full'>
  <div class='row'>
    <h1 class="thin">{{page.title}}</h1>
    <div><img alt="Distributors" src="{{site.baseurl}}/{{page.image}}" usemap="#distributor-map"/></div>
    <map name="distributor-map">
    {% for member in site.data.distributors %}
    <area shape='circle' coords="{{ member.coords}}" href="{{member.web}}" target="_blank" alt="{{member.title}}"/>
    {% endfor %}
    </map>
    <p>We have distributors around the world to help you get our products & support locally. See the list of our distributors and their contact information below.</p>
    <div>
      <p>Let us know if you would like to become our distributor.</p>
      <a href='mailto:sales@subnero.com'><button>Become our distributor</button></a>
    </div>
    <div class='four spacing'></div>
  </div>
</div>
