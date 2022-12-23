---
layout: default
---

![Shinwoo Kim](assets/img/hero-bg.webp){: .figure-img .img-fluid .rounded}

<div class="text-center mb-1">
  <a class="btn btn-outline-dark my-1" href="{{ '/about/' | prepend: site.baseurl }}">About Me</a>
  <a class="btn btn-outline-dark my-1" href="{{ '/resume/' | prepend: site.baseurl }}">Résumé</a>
  <a class="btn btn-outline-dark my-1" href="{{ '/teaching/' | prepend: site.baseurl }}">Courses I'm Teaching</a>
  <a class="btn btn-outline-dark my-1" href="{{ '/contact/' | prepend: site.baseurl }}">Get in touch</a>
</div>

<h1 class="h5">News</h1>
{% for item in site.data.news %}
{% if forloop.index < 4 %}
<div class="row" style="font-size: 0.85rem;">
  <div class="col-2">
    <p markdown="1">**{{item.when}}**</p>
  </div>
  <div class="col-10">
    <p markdown="1">{{item.what}}</p>
  </div>
</div>
{% elsif forloop.index == 4 %}
<div class="text-center">
 <a id="news-btn" data-bs-toggle="collapse" href="#news" role="button" aria-expanded="false" aria-controls="news" style="font-size: 0.85rem;" onclick="document.getElementById('news-btn').style.display = 'none';">
    More News
  </a>
</div>
<div class="collapse" id="news">
  <div class="row" style="font-size: 0.85rem;">
    <div class="col-2">
      <p markdown="1">**{{item.when}}**</p>
    </div>
    <div class="col-10">
      <p markdown="1">{{item.what}}</p>
    </div>
  </div>
</div>
{% else %}
<div class="collapse" id="news">
  <div class="row" style="font-size: 0.85rem;">
    <div class="col-2">
      <p markdown="1">**{{item.when}}**</p>
    </div>
    <div class="col-10">
      <p markdown="1">{{item.what}}</p>
    </div>
  </div>
</div>
{% endif %}
{% endfor %}
