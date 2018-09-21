---
layout: page
title: Underwater Network Technology
banner : images/unetsim-banner.jpg
thumbnail: images/unet.jpg
categories: unet
section_id: products
---
<div class ='product post' >
	<div class='large-12 columns'>
	<div class='content'>
	<h3 style="text-transform: none;">

{% assign product_pages = site.pages | where:"title","Underwater Network Simulator" %}
{% for page in product_pages %}

<a href="{{site.baseurl}}{{page.url}}">Underwater Network Simulator</a>
{% endfor %}
</h3>
<p>The UnetSim underwater network simulator enables a network engineer to simulate an underwater network on a single computer. It allows UnetStack agents and protocols to be simulated in realistic channel conditions, with minimum effort. </p>
<a class="button small" href="/wireless-networked-communications/2017/12/12/Underwater-modem-with-multiple-hydrophones.html">Read more</a>
</div>
</div>
</div>

   <div class='spacing'></div>
   <div class='spacing'></div>

<div class ='product post' >    
    <div class='large-12 columns'>
    	<div class='content'>
	    <h3 style="text-transform: none;">
	    {% assign product_pages = site.pages | where:"title","Underwater Network Stack" %}
		{% for page in product_pages %}
	    <a href="{{site.baseurl}}{{page.url}}">Underwater Network Stack</a>
		{% endfor %}	    
		</h3>
	    <p>UnetStack is a flexible agent-based underwater network stack allows software-defined underwater networks to be rapidly designed, simulated, tested and deployed.  </p>
	    <a class="button small" href="/wireless-networked-communications/2017/12/12/Underwater-modem-with-multiple-hydrophones.html">Read more</a>
		</div>
  	</div>
</div>

	  