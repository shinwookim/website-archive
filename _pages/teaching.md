---
layout: new
title: Teaching
published: true
permalink: /teaching/
---


#### Current Courses

##### (Spring 2023, Term 2234)
- TBA

---

#### Previous Courses
- <i class="pitt-icon"></i>**CS0441:** Discrete Structures for Computer Science <sup><a href="#TA" type="button" onclick='highlight("TA")' class="text-decoration-none text-secondary" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Taught as Recitation Instructor/Teaching Assistant/Course Assistant">TA</a></sup>
  [(Fall 2022)](../CS0441-2231/)
- <i class="pitt-icon"></i> **Bridges to IT:** Jump-Starting a Career in IT <sup><a href="#Instructor" type="button" onclick='highlight("Instructor")'  class="text-decoration-none text-secondary" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Taught as Primary/Lead Instructor">I</a></sup> [(Fall 2021)](bridges-to-it.html)
- <i class="pitt-icon"></i> **CEC STEAM** Saturday Courses <sup><a href="#TA" type="button" onclick='highlight("TA")' class="text-decoration-none text-secondary" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Taught as Recitation Instructor/Teaching Assistant/Course Assistant">TA</a></sup> [(Fall 2021)](https://cec.pitt.edu/calendar/s-t-e-a-m-saturdays/2022-10-08/)

---

<sup id="TA" onclick='highlight_off()'><span class="text-secondary">TA</span>: Taught as Recitation Instructor/Teaching Assistant/Course Assistant</sup><br>
<sup id="Instructor" onclick='highlight_off()'><span class="text-secondary">I</span>: Taught as Primary/Lead Instructor</sup>

<link rel="stylesheet" href='{{"/assets/icons.css" | absolute_url }}'>
<style>
.highlight {
        background-color: #FFFF00;
    }
</style>
<script>
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
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
