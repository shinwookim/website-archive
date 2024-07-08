---
title: Home
notitle: True
layout: page
---

![Image of Shinwoo Kim](./assets/img/hero-bg.webp){: .figure-img .img-fluid .rounded}

## News
{: .h4}
{% for item in site.data.news %}
{% if forloop.index < 4 %}
<div class="row border-bottom my-1 py-2">
    <div class="col-2">
        <span markdown="1" class="fw-bolder">{{item.when}}</span>
    </div>
    <div class="col-10">
        <span markdown="1">{{item.what}}</span>
    </div>
</div>
{% elsif forloop.index == 4 %}
<div class="text-center">
    <a  id="news-btn"
        data-bs-toggle="collapse"
        href="#news-content"
        role="button"
        aria-expanded="false" aria-controls="news-content"
        onclick="document.getElementById('news-btn').style.display = 'none';"><small>More News</small>
    </a>
</div>
<div class="collapse">
    <div class="row border-bottom my-1 py-2">
        <div class="col-2">
            <span markdown="1" class="fw-bolder">{{item.when}}</span>
        </div>
        <div class="col-10">
            <span markdown="1">{{item.what}}</span>
        </div>
    </div>
</div>
<div class="collapse" id="news-content">
{% else %}
<div class="row border-bottom my-1 py-2">
    <div class="col-2">
        <span markdown="1" class="fw-bolder">{{item.when}}</span>
    </div>
    <div class="col-10">
        <span markdown="1">{{item.what}}</span>
    </div>
</div>
{% endif %}
{% endfor %}
</div>