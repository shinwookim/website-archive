---
layout: tufte
title: "Introduction to Systems Software"
subtitle: "CS 0449 (Spring 2023, Term 2234)"
nav: true
nav-links:
  - title: CS0449
    url: /teaching/CS0449-2234/
  - title: Schedule & Slides
    url: /teaching/CS0449-2234/#handouts
  - title: Student Feedback
    url: /teaching/CS0449-2234/#student-feedback
  - title: Getting Help
    url: /teaching/CS0449-2234/#getting-help
---

## Course Description

Welcome to **CS 0449**, **Introduction to Systems Software**, for the Fall 2022 term!
{% marginfigure 'mf-mem' 'https://imgs.xkcd.com/comics/pointers.png' 'Pointers, [XKCD 138](https://xkcd.com/138/)' %}

This page will provide any information for the class that I go over in recitation. Please check back for updates regularly, especially if you miss a recitation.

## Recitation Information

_Most up-to-date information is on [Canvas](https://canvas.pitt.edu), and [Course Website](https://cs0449.gitlab.io/sp2023/)_ {%marginnote "Accompany" "Accompanies professor **Luis Oliveira**'s lecture section `1090` which meets **Tue/Thu, 2:30–3:45pm at 405 Information Science Building**"%}  
**CRN:** 23985  
**Meets:** _Fridays 12:00 PM_ at _5502 [Sennott Square](https://map.concept3d.com/?id=1315#!m/376171)_

## TA Information

**TA**: Shinwoo Kim  
**E-mail**: [`shinwookim@pitt.edu`](mailto:shiwookim@pitt.edu)  
**Home Page:** [{{site.url}}{{site.baseurl}}]({{site.url}}{{site.baseurl}}/)  
**TA Office Hours** (See [Canvas](https://canvas.pitt.edu/))
{: .mb-0}

- Monday 1:00PM - 2:30PM in 5712 SENSQ
- Tuesday 3:00PM - 3:45PM in 5712 SENSQ
- Wednesday 1:00PM - 2:30PM in 5710 SENSQ
- Thursday 1:00PM - 3:45PM in 6408 SENSQ
- Friday 11:00AM - 12:00PM in 5806 SENSQ
- By appointment (via Zoom or in-person): message me

**Note when E-mailing:**
{: .mb-0}

- Email{%sidenote "discord" "You will receive a faster reply if you message me via Discord"%} subjects should be prefaced with `[CS0449]`
- For official communication, messages should be sent using your official **Pitt E-Mail**(`ABC123@pitt.edu`).
- Email body should include your **name** and the **section** you're enrolled in.
- Students should allow at least 24 business hours before following up.{%sidenote "Hours" "Generally, my working hours are between 8AM and 6PM"%}

---

<h2 id="handouts">Schedule <em>&</em> Handout</h2> {% marginnote "video" "If you require access to Zoom, or the recitation record, please contact me **prior** to the start of recitation"%}
<div class="table-responsive">
<table class=" table-hover">
  <thead>
    <tr>
      <th scope="col">Week #</th>
      <th scope="col">Date</th>
      <th scope="col">Topic</th>
      <th scope="col">Handout</th>
      
    </tr>
  </thead>
  <tbody>
  {%for REC in site.data.CS0449-2234-schedule %}
    <tr>
      <td scope="row" class="text-center">{{REC.week}}</td>
      <td class="text-center">{{REC.date}}</td>
      <td>{{REC.title}}</td>
      <td style="text-align: center;">{% for handout in REC.handout %}<a href="{{handout[1]}}">{{handout[0]}}</a><br/>{% endfor %}</td>
    </tr>
  {%endfor%}
  </tbody>
</table>
</div>

## Student Feedback

[Please send me your anonymous feedback](https://pitt.co1.qualtrics.com/jfe/form/SV_dd9suL0AkJctj2S)
{: .text-center}

## Helpful Links

- [Sign up for **Peer Tutoring** on Navigate](https://pitt.guide.eab.com/){: target="\_blank"}
- [University of Pittsburgh](https://pitt.edu){: target="\_blank"}
- [Department of Computer Science](https://cs.pitt.edu){: target="\_blank"}

<style>
    th{
        text-align: center;
    }
    .highlight{
        background-color: #FFFF00;
    }
</style>

<script>
    function highlight(id) {
        var already_highlighted = document.getElementsByClassName('highlight');
        if(already_highlighted.length > 0) already_highlighted[0].classList.remove("highlight");
        var toHighlight = document.getElementById(id);
        toHighlight.classList.toggle("highlight");
    }
    function highlight_off() {
        var already_highlighted = document.getElementsByClassName('highlight');
        if(already_highlighted.length > 0) already_highlighted[0].classList.remove("highlight");
    }
</script>
