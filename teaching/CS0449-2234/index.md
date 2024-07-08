---
layout: post
title: "Introduction to Systems Software"
subtitle: "CS 0449 (Spring 2023, Term 2234)"
nav: true
tufte: true
nav-links:
  - title: CS0449
    url: /teaching/CS0449-2234/
  - title: Schedule & Handout
    url: /teaching/CS0449-2234/#handouts
  - title: Student Feedback
    url: /teaching/CS0449-2234/#student-feedback
---

{% marginfigure 'mf-mem' 'https://imgs.xkcd.com/comics/pointers.png' 'Pointers, [XKCD 138](https://xkcd.com/138/)' %}
This page will provide any information for the class that I go over in recitation. Please check back for updates regularly, especially if you miss a recitation.

## Course Description
A *Computer System* is comprised of both hardware and software working in concert to accomplish useful work. In this course, we will explore the issues of programming a real computer system by examining the abstractions, interfaces, and design decisions that influence the way that software runs. This includes the role the Operating System has in communication and resource management.

The perspective we will take is one of the lifecycle of a program from implementation to execution. The simple act of compiling and running a program, a sequence of events we often take for granted, is a complex interaction of many different components that work together to manage the computer’s resources and perform the desired task. Together, these components form a working computer system.

## Recitation Information

_Most up-to-date information is on [Canvas](https://canvas.pitt.edu), and [Course Website](https://cs0449.gitlab.io/sp2023/)_ {%marginnote "Accompany" "Accompanies professor **Luis Oliveira**'s lecture section `1090` which meets **Tue/Thu, 2:30–3:45pm at 405 Information Science Building**"%}  
**CRN:** 23985  
**Meets:** _Fridays 12:00 PM_ at _5502 [Sennott Square](https://map.concept3d.com/?id=1315#!m/376171)_

## TA Information

**TA**: Shinwoo Kim  
**E-mail**: [`shinwookim@pitt.edu`](mailto:shiwookim@pitt.edu)  
**Home Page:** [{{site.url}}{{site.baseurl}}]({{site.url}}{{site.baseurl}}/)  
**TA Office Hours:** [Spring 2023 Office Hours]({{ "/teaching/#OH" | absolute_url}})

**Note when E-mailing:**
{: .mb-0}

- Email{%sidenote "discord" "You will receive a faster reply if you message me via Discord"%} subjects should be prefaced with `[CS0449]`
- For official communication, messages should be sent using your official **Pitt E-Mail**(`ABC123@pitt.edu`).
- Email body should include your **name** and the **section** you're enrolled in.
- Students should allow at least 24 business hours before following up{%sidenote "Hours" "Generally, my working hours are between 8AM and 6PM"%}.<span class="endmark"></span>


---

<h2 id="handouts">Schedule <em>&</em> Handout</h2> {% marginnote "video" "If you require access to Zoom, or the recitation recording, please contact me **prior** to the start of recitation"%}
<style>
  table tr td, table tr th{
    background-color: rgba(0,0,0, 0) !important;
  }
  td a {
    text-shadow: none !important;
  }
</style>
<div class="table-responsive">
<table class="table table-hover bg-none">
  <thead>
<tr>
<th class="text-center">Week</th>
<th class="text-center">Date</th>
<th>Topic</th>
<th class="text-center">Handout</th>
</tr>
</thead>
<tbody>
<tr>
<td class="text-center">00</td>
<td class="text-center">January 13</td>
<td>**No Recitation**</td>
<td class="text-center">n/a</td>
</tr>
<tr>
<td class="text-center">01</td>
<td class="text-center">January 20</td>
<td>**Hello Lab**<br>Getting up to speed with the environment</td>
<td class="text-center">[slides](rec01.pptx) <br> [hello.c](code/hello.c)</td>
</tr>
<tr>
<td class="text-center">02</td>
<td class="text-center">January 27</td>
      <td>**Data & Pointer Lab**<br>Practice with data and input</td>
      <td class="text-center">[slides](rec02.pptx) <br> [VS Code guide](vs_code.pdf) <br> [scan.c](code/scan.c)</td>
    </tr>
    <tr>
      <td class="text-center">03</td>
      <td class="text-center">February 3 </td>
      <td>**Project 1: BMP Steganography**<br>Hiding data and reading files</td>
      <td class="text-center">[slides](rec03.pdf)</td>
    </tr>
    <tr>
      <td class="text-center">04</td>
      <td class="text-center">February 10</td>
      <td>**Pointer Lab**<br>Looking at pointers</td>
      <td class="text-center">[slides](rec04.pdf)</td>
    </tr>
    <tr>
      <td class="text-center">05</td>
      <td class="text-center">February 17</td>
      <td>**Queue Lab**<br>Linking those nodes</td>
      <td class="text-center">[slides](rec05.pdf)</td>
    </tr>
    <tr>
      <td class="text-center">06</td>
      <td class="text-center">**Wednesday**<br/>February 22 5:45 PM<br/>(5502 SENSQ)</td>
      <td>**Project 2: Implementing a Heap Allocator**<br>Malloc Project Boot Camp</td>
      <td class="text-center">[slides](Project_2_Help_Session.pdf)<br>[malloc_example.c](code/malloc_example.c)</td>
    </tr>
    <tr>
      <td class="text-center">06</td>
      <td class="text-center">February 24</td>
      <td>**Project 2: Implementing a Heap Allocator**<br>Implementing Phase 2 & 3</td>
      <td class="text-center">[slides](rec06.pdf)</td>
    </tr>
    <tr>
      <td class="text-center">07</td>
      <td class="text-center">March 3</td>
      <td>**Assembly Lab**<br>Investigating the code</td>
      <td class="text-center">[slides](rec07.pdf)<br>[Demo code (GitHub)](https://github.com/shinwookim/ASM-demo)<br/>[AT&T x86 Syntax](https://en.wikibooks.org/wiki/X86_Assembly/GNU_assembly_syntax)</td>
    </tr> 
    <tr>
      <td class="text-center">08</td>
      <td class="text-center">March 10</td>
      <td>**Spring Break <br> No Recitation**</td>
      <td class="text-center">n/a</td>
    </tr>
    <tr>
      <td class="text-center">09</td>
      <td class="text-center">March 17</td>
      <td>**Project 3: Assembly bombs and attack** <br />Understanding the assembly</td>
      <td class="text-center">[slides](rec08.pdf)</td>
    </tr>
    <tr>
      <td class="text-center">10</td>
      <td class="text-center">March 24</td>
	    <td>**Process Lab**<br />The fork-exec model & Process management</td>
      <td class="text-center">[slides](rec09.pdf)<br />[Solutions to In-class Problems](rec09-soln.html)</td>
    </tr>
    <tr>
      <td class="text-center">11</td>
      <td class="text-center">March 31</td>
      <td>**Project 4**: The Shell<br>After the bomb, shell shock!</td>
      <td class="text-center">[slides](rec10.pdf)<br/>[strtok.c](code/strtok.c)</td>
    </tr>
    <tr>
      <td class="text-center">12</td>
      <td class="text-center">April 7</td>
      <td>**Multi-file Development:**<br/>Writing Makefiles
</td>
      <td class="text-center">[lab handout](Makefile-lab.html)<br/>[slides](rec11.pdf)</td>
    </tr>
    <tr>
      <td class="text-center">13</td>
      <td class="text-center">April 14</td>
      <td>Multithreading & Synchronization</td>
      <td class="text-center">[slides](https://docs.google.com/presentation/d/e/2PACX-1vQRY_WALXixyTeEOCF6g--PUvhuEui7H6si2SMGct2gDzqkqjkwbMEwDdk0U7OvlNTMuP01-eiMfn_W/pub?start=false&loop=false&delayms=60000)</td>
    </tr>
    <tr>
      <td class="text-center">14</td>
      <td class="text-center">April 21</td>
      <td>Final Recitation <br>Final Exam Review + Course Review</td>
      <td class="text-center">[slides](rec12.pdf)</td>
    </tr>
    <tr>
      <td class="text-center">15</td>
      <td class="text-center">April 28</td>
      <td>**Finals Week <br> No Recitation**</td>
      <td class="text-center">-</td>
    </tr>
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
 









