---
layout: page
title:  Contact Us
banner: images/banner-contact.jpg
address: |
    1003 Bukit Merah Central
    #04-05
    Singapore 159836
phone: +65 9819 9552
email: info@subnero.com
directions: 
  mode: BY TRAIN
  steps: |
    ● Alight at Redhill station (EW18).
    ● Walk towards Jln Tiong Rd and turn left to Jln Tiong Rd.
    ● Turn right onto Lengkok Bahru Rd and walk to bus stop in front of Blk 63b (Bus stop no. 10421).
    ● Take bus 139 towards Bukit Merah.
    ● Alight at the 4th Bus Stop, Blk 161 (Bus stop no. 10651).
    ● Cross the road and walk to 1003 Bukit Merah Central.
    ● Subnero office is on level 4, unit-05.
---
<div class='contacts' >
  <div class="large-6 col1">
  	<br>
    <div class="vcard">
    	<p class="distributor-addr">{{ page.address }}</p>
    	<p class="adr">{{ page.phone }}</p>
    	<p class="adr">{{ page.email }}</p>
    </div>
    <img src="{{site.baseurl}}/images/map.png">
    <a href="https://www.google.com/maps/place/21+Heng+Mui+Keng+Terrace,Singapore" target="_blank">View Larger Map</a>
  </div>
  <div class='large-6 col2'>
  <!-- This script is for hiding and showing the directions-->
    <div class='direct'>
      <h2>Directions</h2>
      <div id='toggleText'>
       <h3>{{ page.directions.mode }}</h3>
       <p class="distributor-addr">{{ page.directions.steps }}</p>
      </div>
    </div>
  </div>
</div>
<div class="contacts">
  <div class='col2'>
  <!-- Begin MailChimp Signup Form -->
  <link href="//cdn-images.mailchimp.com/embedcode/classic-081711.css" rel="stylesheet" type="text/css">
  <div id="mc_embed_signup">
    <form action="https://subnero.us7.list-manage.com/subscribe/post?u=811e26d10d9db76f9cb42f9f6&amp;id=d988ad864f" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form">
      <h2>Subscribe to our mailing list</h2>
      <br>
      <div class="mc-field-group">
          <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL" placeholder="Email Address">
      </div>
      <div id="mce-responses" class="clear">
          <div class="response" id="mce-error-response" style="display:none"></div>
          <div class="response" id="mce-success-response" style="display:none"></div>
      </div>
      <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
      <div style="position: absolute; left: -5000px;">
          <input type="text" name="b_811e26d10d9db76f9cb42f9f6_d988ad864f" value="">
      </div>
      <div class="clear">
          <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button" style="margin:0,0,0,0;">
      </div>
    </form>
  </div>
  <script type="text/javascript" src="./contact.js"></script>
  <!--End mc_embed_signup-->
  </div>
</div>

<div class='spacing'></div>
<div class='spacing'></div>
