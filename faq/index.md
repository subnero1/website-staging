---
layout: default
title:  Frequently Asked Questions
banner : images/banner-about.jpg
excerpt: Frequently asked questions about Subnero's offerings
---

<div class ='full tall hero' style='background-image: url({{site.baseurl}}/{{page.banner}});'>
  <div class='row'>
    <div class='large-12 columns'>
      <!-- {% include section-header.html title=page.title tagline=page.tagline color=page.title_color class="big" %} -->
    </div>
  </div>
  <div class='four spacing'></div>
  <div class='four spacing'></div>
</div>

<div class="section-faq">

  <style id="search-style"></style>

  <h2 class="page-title">{{ page.title }}</h2>
  <div class="faq-row">
    <div class="faq-categories">
      <div class="field-wrapper">            
        
        <ul class="section-list">
          {% for faqcat in site.data.faq-categories %}
            <li><a href="#{{faqcat.link}}">{{ faqcat.name }}</a>
              {% if faqcat.submenu %}
                <ul class="sub-links">
                {% for entry in faqcat.submenu %}
                  <li><a href="#{{entry.link}}">{{ entry.name }}</a></li>
                {% endfor %}
                </ul>
              {% endif %}
            </li>
          {% endfor %}    
        </ul>

      </div>  
    </div>

    <div class="faq-content">
      <p class="intro-text">Our Frequently Asked Questions (FAQ) page is designed to address a wide range of inquiries, ensuring you have a seamless experience while exploring our offerings. Whether you're looking for general information, technical details, or assistance with specific tasks, this comprehensive resource is your go-to destination for clarity and insights.</p>
      <p class="hlight">If you can't find what you're looking for, don't hesitate to reach out to info@subnero.com.</p>

      <div class="faq-actions">

        <div class="search-field">
          <input type="search" name="search" id="search" placeholder="search" />
          <i class="fa fa-search"></i>
        </div>

        <div class="toggle-btn">
          <label for="toggle-switch">Expand All</label>
          <input type="checkbox" id="toggle-switch" name="toggle-switch" />
        </div>
      
        <div class="print-btn">
          <a href="#" onclick="window.print(); return false; ">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-printer" viewBox="0 0 16 16">
              <path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"/>
              <path d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2H5zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4V3zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2H5zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1z" />
            </svg>
          </a>
        </div>

      </div>

        {% assign allSections = "" | split: ',' %}
        {% for faqcat in site.data.faq-categories %}

          {% unless faqcat.submenu %}
            {% assign allSections = allSections | push: faqcat %}
          {% endunless %}

          {% if faqcat.submenu %}
            {% for item in faqcat.submenu %}
              {% assign allSections = allSections | push: item %}
            {% endfor %}
          {% endif %}
        {% endfor %}


      {% for faqcat in allSections %}
      <section class="faq-section">
        <div id="{{ faqcat.link }}" class="section-head anchor-link">
          <h3>{{ faqcat.name}}</h3>
        </div>
        <div class="faq-listing">
          {% for faq in site.faq %}
          {% if faq.faq_section == faqcat.link %}
            {% assign filename = faq.url | replace_first: '/faq/', '' | replace: '.html', '' %}
            <div id="faq-{{ filename }}" class="faq-item" data-index="{{ faq.search_content }}">
              <input class="toggle-checkbox" type="checkbox" id="{{ filename }}" />
              <label class="toggle-label" for="{{ filename }}">
                {{ faq.title }}
                <a href="#faq-{{ filename }}" class="quick-link-anchor"><i class="fa fa-link"></i></a>
              </label>
              <div class="item-content">
                {{ faq.content }}
              </div>
              
            </div>
          {% endif %}
          {% endfor %}
        </div>
      </section>
      {% endfor %}

      <div class="filter-empty">
        <p>If you still can't find what you're looking for, feel free to contact us (info@subnero.com) for assistance. Our friendly team is here to help.</p>
      </div>

    </div>
  </div>

<script>
let searchStyle = document.getElementById('search-style')
let urlParams = new URLSearchParams(window.location.search)
let searchEl = document.getElementById('search')
let searchParamValue = urlParams.get('search')
// let faqSection = document.querySelectorAll('.faq-section');
let faqListing = document.querySelectorAll('.faq-listing');

if (urlParams.get('search')) {
  searchEl.value = searchParamValue
  displayResults(searchParamValue)
} else {
  clearURLparams()
}

searchEl.addEventListener('input', function() {

  if (!this.value) {
    searchStyle.innerHTML = ""
    clearURLparams()
    return
  }

  displayResults(this.value)
  this.value ? addURLParams(this.value) : clearURLparams()
})

function clearURLparams() {
  if (history.pushState) {
    var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname
    window.history.pushState({path:newurl},'',newurl)
  }
  checkDisplayNone();
}

function addURLParams(params) {
  if (history.pushState) {
    var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?search=' + params
    window.history.pushState({path:newurl},'',newurl)
  }
}

function displayResults(searchTerm) {
  searchStyle.innerHTML = ".faq-item:not([data-index*=\"" + searchTerm.toLowerCase() + "\"]) { display: none; }";
  checkDisplayNone();
}

function checkDisplayNone() {
  faqListing.forEach(item => {
    let faqitem = item.querySelectorAll('.faq-item');
    let findEle = Array.from(faqitem).find(ele => {
      const cssObj = window.getComputedStyle(ele, null);
      let visible = cssObj.getPropertyValue("display");
      return visible == 'block';     
    });
    if(!findEle) {
      item.classList.add('faq-hidden')
    }else{
      if(item.classList.contains('faq-hidden')) {
        item.classList.remove('faq-hidden');
      }
    }
  });
  showMessageOnFilterNone();
}
function showMessageOnFilterNone() {
  let faqListing = document.querySelectorAll('.faq-listing');
  let faqHidden = document.querySelectorAll('.faq-listing.faq-hidden');
  let messageBox = document.querySelector('.filter-empty');

  if(faqListing.length == faqHidden.length) {
    messageBox.setAttribute('style', 'display:block');
  }else{
    messageBox.removeAttribute('style');
  }
}


//toggle switch
let toggleSwitch = document.querySelector('#toggle-switch');
// let faqContent = document.querySelector('.faq-content');
let toggleCheckbox = document.querySelectorAll('.toggle-checkbox');
toggleSwitch.addEventListener('change', function() {
  
  if(this.checked) {
    toggleCheckbox.forEach(item => {
      item.checked = true;
    })
  }else{
    toggleCheckbox.forEach(item => {
      item.checked = false;
    })
  }
})

</script>
</div>
