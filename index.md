---
layout: default
---

<img alt="Shinwoo Kim" src="./assets/img/hero-bg_small.webp" data-echo="./assets/img/hero-bg.webp" class="figure-img img-fluid rounded" loading="lazy" >

##### What's New?
{% for item in site.data.news %}
{% if forloop.index < 4 %}
<div class="row font-85">
  <div class="col-2" markdown="1">
###### {{item.when}}
  </div>
  <div class="col-10">
    <p markdown="1">{{item.what}}</p>
  </div>
</div>
{% elsif forloop.index == 4 %}
<div class="text-center">
 <a id="news-btn" data-bs-toggle="collapse" href="#news-content" role="button" aria-expanded="false" aria-controls="news-content" style="font-size: 0.85rem;" onclick="document.getElementById('news-btn').style.display = 'none';">
    More News
  </a>
</div>
<div class="collapse">
  <div class="row font-85">
  <div class="col-2" markdown="1">
###### {{item.when}}
  </div>
    <div class="col-10">
      <p markdown="1">{{item.what}}</p>
    </div>
  </div>
</div>
<div class="collapse" id="news-content">
{% else %}
  <div class="row font-85">
     <div class="col-2" markdown="1">
###### {{item.when}}
  </div>
    <div class="col-10">
      <p markdown="1">{{item.what}}</p>
    </div>
  </div>
{% endif %}
{% endfor %}
</div>

<style>
h6{font-size: 0.85rem; font-weight: bold;}
.font-85{font-size: 0.85rem;}
</style>

{% include lazyload.html %}

