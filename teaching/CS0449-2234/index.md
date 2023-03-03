---
layout: tufte
title: "Introduction to Systems Software"
subtitle: "CS 0449 (Spring 2023, Term 2234)"
nav: true
nav-links:
  - title: CS0449
    url: /teaching/CS0449-2234/
  - title: Schedule & Handout
    url: /teaching/CS0449-2234/#handouts
  - title: Student Feedback
    url: /teaching/CS0449-2234/#student-feedback
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
- Students should allow at least 24 business hours before following up{%sidenote "Hours" "Generally, my working hours are between 8AM and 6PM"%}.<span class="endmark"></span>


---

<h2 id="handouts">Schedule <em>&</em> Handout</h2> {% marginnote "video" "If you require access to Zoom, or the recitation recording, please contact me **prior** to the start of recitation"%}

<div class="table-responsive">
<table class="table-hover">
  <thead>
    <tr>
      <th scope="col" class="text-center">Week</th>
      <th scope="col" class="text-center">Date</th>
      <th scope="col">Topic</th>
      <th scope="col" class="text-center">Handout</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td scope="row" class="text-center">00</td>
      <td class="text-center">January 13</td>
      <td>**No Recitation**</td>
      <td class="text-center">n/a</td>
    </tr>
    <tr>
      <td scope="row" class="text-center">01</td>
      <td class="text-center">January 20</td>
      <td>**Hello Lab**<br>Getting up to speed with the environment</td>
      <td class="text-center">[slides](rec01.pptx) <br> [`hello.c`](code/hello.c.html)</td>
    </tr>
    <tr>
      <td scope="row" class="text-center">02</td>
      <td class="text-center">January 27</td>
      <td>**Data & Pointer Lab**<br>Practice with data and input</td>
      <td class="text-center">[slides](rec02.pptx) <br> [VS Code guide](vs_code.pdf) <br> [`scan.c`](code/scan.c.html)</td>
    </tr>
    <tr>
      <td scope="row" class="text-center">03</td>
      <td class="text-center">February 3 </td>
      <td>**Project 1: BMP Steganography**<br>Hiding data and reading files</td>
      <td class="text-center">[slides](rec03.pdf)</td>
    </tr>
    <tr>
      <td scope="row" class="text-center">04</td>
      <td class="text-center">February 10</td>
      <td>**Pointer Lab**<br>Looking at pointers</td>
      <td class="text-center">[slides](rec04.pdf)</td>
    </tr>
    <tr>
      <td scope="row" class="text-center">05</td>
      <td class="text-center">February 17</td>
      <td>**Queue Lab**<br>Linking those nodes</td>
      <td class="text-center">[slides](rec05.pdf)</td>
    </tr>
    <tr>
      <td scope="row" class="text-center">06</td>
      <td class="text-center">**Wednesday, February** 22<br>5:45 PM (5502 SENSQ)</td>
      <td>**Project 2: Implementing a Heap Allocator**<br>Malloc Project Boot Camp</td>
      <td class="text-center">[slides](Project_2_Help_Session.pdf)<br>[malloc_example.c](code/malloc_example.c.html)</td>
    </tr>
    <tr>
      <td scope="row" class="text-center">06</td>
      <td class="text-center">February 24</td>
      <td>**Project 2: Implementing a Heap Allocator**<br>Implementing Phase 2 & 3</td>
      <td class="text-center">[slides](rec06.pdf)</td>
    </tr>
    <tr>
      <td scope="row" class="text-center">07</td>
      <td class="text-center">March 3</td>
      <td>**Assembly Lab**<br>Investigating the code</td>
      <td class="text-center">[slides](rec07.pdf)<br>[Demo code (GitHub)](https://github.com/shinwookim/ASM-demo)<br/>[At&T x86 Syntax](https://en.wikibooks.org/wiki/X86_Assembly/GNU_assembly_syntax)</td>
    </tr> 
    <!--tr>
      <td scope="row" class="text-center">08</td>
      <td class="text-center">March 10</td>
      <td>**Spring Break <br> No Recitation**</td>
      <td class="text-center">-</td>
    </!--tr>
    <tr>
      <td scope="row" class="text-center">09</td>
      <td class="text-center">March 17</td>
      <td>TBA</td>
      <td class="text-center">-</td>
    </tr>
    <tr>
      <td scope="row" class="text-center">10</td>
      <td class="text-center">March 24</td>
      <td>TBA</td>
      <td class="text-center">-</td>
    </tr>
    <tr>
      <td scope="row" class="text-center">11</td>
      <td class="text-center">March 31</td>
      <td>TBA</td>
      <td class="text-center">-</td>
    </tr>
    <tr>
      <td scope="row" class="text-center">12</td>
      <td class="text-center">April 7</td>
      <td>TBA</td>
      <td class="text-center">-</td>
    </tr>
    <tr>
      <td scope="row" class="text-center">13</td>
      <td class="text-center">April 14</td>
      <td>TBA</td>
      <td class="text-center">-</td>
    </tr>
    <tr>
      <td scope="row" class="text-center">14</td>
      <td class="text-center">April 21</td>
      <td>Final Recitation <br> TBA</td>
      <td class="text-center">-</td>
    </tr>
    <tr>
      <td scope="row" class="text-center">14</td>
      <td class="text-center">April 28</td>
      <td>**Finals Week <br> No Recitation**</td>
      <td class="text-center">-</td>
    </tr>
    -->
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
 









