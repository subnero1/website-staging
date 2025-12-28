---
layout: page
title:  L12L series
categories: product-type
tab-id: panel-three
order: 2
---

<h1 class='panel-heading'>L12L SERIES LONG-RANGE SMART MODEMS</h1>
<div class='grey-container'>
    <h2 class='edition'>Silver Edition</h2>
    <ul class="edition-container">
        <li class="modem-container">
            {% assign product_pages = site.pages | where:"categories","modem" %}
            {% for page in product_pages %}
            {% if page.title contains "WNC-L12LSS4" %}
            <div class='mod modBlogPost bg-grey'>
                <a href="{{site.baseurl}}{{page.url}}">
                    <img alt="Subnero L12L Series Long-Range Smart Underwater Modems - Standalone Configuration" src="{{site.baseurl}}/{{page.thumbnail}}"/>
                    <div class='content'>
                        <h2>Standalone Configuration <br>WNC-L12LSS4</h2>
                    </div>
                </a>
            </div>
            {% endif %}
            {% endfor %}
        </li>
        <li class="modem-container">
            {% assign product_pages = site.pages | where:"categories","modem" %}
            {% for page in product_pages %}
            {% if page.title contains "WNC-L12LSO4" %}
            <div class='mod modBlogPost bg-grey'>
                <a href="{{site.baseurl}}{{page.url}}">
                    <img alt="Subnero L12L Series Long-Range Smart Underwater Modems - OEM Configuration" src="{{site.baseurl}}/{{page.thumbnail}}"/>
                    <div class='content'>
                        <h2>OEM Configuration <br>WNC-L12LHSO4</h2>
                    </div>
                </a>
            </div>
            {% endif %}
            {% endfor %}
        </li>
    </ul>
</div>