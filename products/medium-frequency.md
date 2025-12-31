---
layout: page
title:  M25M series
categories: product-type
tab-id: panel-three
order: 2
---

<h1 class='panel-heading'>M25M SERIES ACOUSTIC SMART MODEMS</h1>
<!-- <h2 class='panel-sub-heading'>High bandwidth applications</h2> -->
<div class='grey-container'>
    <h2 class='edition'>Silver Edition</h2>
    <ul class="edition-container">
        <li class="modem-container">
            {% assign product_pages = site.pages | where:"categories","modem" %}
            {% for page in product_pages %}
            {% if page.title contains "WNC-M25MSS4" %}
            <div class='mod modBlogPost bg-grey'>
                <a href="{{site.baseurl}}{{page.url}}"><img alt="M25M Series acoustic smart modems" src="{{site.baseurl}}/{{page.thumbnail}}"/>
                <div class='content'>
                <h2>Standalone Configuration <br>WNC-M25MSS4</h2>
              </div></a>
            </div>
            {% endif %}
            {% endfor %}
        </li>
        <li class="modem-container">
            {% assign product_pages = site.pages | where:"categories","modem" %}
            {% for page in product_pages %}
            {% if page.title contains "WNC-M25MSO4" %}
            <div class='mod modBlogPost bg-grey'>
                <a href="{{site.baseurl}}{{page.url}}"><img src="{{site.baseurl}}/{{page.thumbnail}}" alt="OEM Configuration - WNC-M25MSO4"/>
                <div class='content'>
                <h2>OEM Configuration <br>WNC-M25MSO4</h2>
              </div></a>
            </div>
            {% endif %}
            {% endfor %}
        </li>
        <li class="modem-container">
            {% assign product_pages = site.pages | where:"categories","wnc" %}
            {% for page in product_pages %}
            {% if page.title contains "WNC-M25MSS4+xCh" %}
            <div class='mod modBlogPost bg-grey'>
                <a href="{{site.baseurl}}{{page.url}}">
                    <!-- <h2 class="new-tag"> NEW </h2> -->
                    <img alt="Multi-Receiver Configuration - WNC-M25MSS4+xCh" src="{{site.baseurl}}/{{page.thumbnail}}" />
                    <div class='content'>
                        <h2>Multi-Receiver Configuration <br>WNC-M25MSS4+xCh</h2>
                    </div>
                </a>
            </div>
            {% endif %}
            {% endfor %}
        </li>
    </ul>
</div>
