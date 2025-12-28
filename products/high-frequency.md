---
layout: page
title:  S40H series
categories: product-type
tab-id: panel-three
order: 2
---

<h1 class='panel-heading'>S40H SERIES HIGH-SPEED SMART MODEMS</h1>
<!-- <h2 class='panel-sub-heading'>High bandwidth applications</h2> -->
<div class='grey-container'>
    <h2 class='edition'>Silver Edition</h2>
    <ul class="edition-container">
        <li class="modem-container">
            {% assign product_pages = site.pages | where:"categories","modem" %}
            {% for page in product_pages %}
            {% if page.title contains "WNC-S40HSS4" %}
            <div class='mod modBlogPost bg-grey'>
                <a href="{{site.baseurl}}{{page.url}}">
                    <img alt="Subnero WNC-S40HSS4 Standalone High Frequency Modem" src="{{site.baseurl}}/{{page.thumbnail}}"/>
                    <div class='content'>
                        <h2>Standalone Configuration <br>WNC-S40HSS4</h2>
                    </div>
                </a>
            </div>
            {% endif %}
            {% endfor %}
        </li>
        <li class="modem-container">
            {% assign product_pages = site.pages | where:"categories","modem" %}
            {% for page in product_pages %}
            {% if page.title contains "WNC-S40HSO4" %}
            <div class='mod modBlogPost bg-grey'>
                <a href="{{site.baseurl}}{{page.url}}">
                    <img alt="Subnero WNC-S40HSO4 OEM High Frequency Modem" src="{{site.baseurl}}/{{page.thumbnail}}"/>
                    <div class='content'>
                        <h2>OEM Configuration <br>WNC-S40HSO4</h2>
                    </div>
                </a>
            </div>
            {% endif %}
            {% endfor %}
        </li>
        <li class="modem-container">
            {% assign product_pages = site.pages | where:"categories","wnc" %}
            {% for page in product_pages %}
            {% if page.title contains "WNC-S40HSS4+xCh" %}
            <div class='mod modBlogPost bg-grey'>
                <a href="{{site.baseurl}}{{page.url}}">
                    <img alt="Subnero WNC-S40HSS4 Multi-Receiver High Frequency Modem" src="{{site.baseurl}}/{{page.thumbnail}}"/>
                    <div class='content'>
                        <h2>Multi-Receiver Configuration <br>WNC-S40HSS4+xCh</h2>
                    </div>
                </a>
            </div>
            {% endif %}
            {% endfor %}
        </li>
    </ul>
</div>