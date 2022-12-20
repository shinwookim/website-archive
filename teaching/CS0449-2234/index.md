---
layout: tufte
title: "Introduction to Systems Software"
subtitle: "CS 0449 (Spring 2023, Term 2234)"
navi: false
---



## Course Description

Welcome to **CS 0441**, **Discrete Structures for Computer Science**, for the Fall 2022 term!{% marginfigure 'mf-mem' 'https://upload.wikimedia.org/wikipedia/commons/6/6e/C-memlayout.svg' 'Memory layout of a typical C program' %}

The purpose of this course is to provide a solid understanding of how computer systems execute programs, store information, and communicate. We will explore systems-level issues from a programmer’s view by examining the abstractions, interfaces, and design decisions that influence the way that software runs on the computer system. The perspective we will take is one of the life cycle of a program from implementation to execution. The act of compiling and running a program, a sequence of events we often take for granted, is a complex interaction of many different components that work together to manage the computer’s resources and perform the desired task.

This page will provide any information for the class that I go over in recitation. Please check back for updates regularly, especially if you miss a recitation.

## Recitation Information

_Most up-to-date information is on [Canvas](https://canvas.pitt.edu)_ {%marginnote "Accompany" "Accompanies professor **Donald Bonidie**'s lecture section `1090` which meets **Tue/Thu, 4:30–5:45pm at 5502 Sennott Square**"%}
**CRN:** `17064`  
**Meets:** _Fridays 4:00 PM_ at _501 [Information Science Building](https://map.concept3d.com/?id=1315#!m/386791)_

---

## TA Information

**TA**: Shinwoo Kim  
**E-mail**: [`shinwookim@pitt.edu`](mailto:shiwookim@pitt.edu)  
**Home Page:** [{{site.url}}{{site.baseurl}}]({{site.url}}{{site.baseurl}}/)  
**TA Office Hours** (See [Canvas](https://canvas.pitt.edu/))
{: .mb-0}

- Monday 10 AM - 12 PM in 5712 Sennott
- Tuesday 10 AM - 11:30 AM in 5712 Sennott
- Wednesday 11 AM - 12 PM Virtual ([**https://pitt.zoom.us/j/3027565812**](https://pitt.zoom.us/j/3027565812))
- By Appointment (In-Person or Virtual): [**Scheduler**](https://outlook.office.com/bookwithme/user/cf9122c6baae489ea2e99400607830e5@pitt.edu?anonymous&ep=pcard) Or E-mail me

**Note when E-mailing:**
{: .mb-0}

- Email subjects should be prefaced with `[CS0441]`
- For official communcation, messages should be sent using your official **Pitt E-Mail**(`ABC123@pitt.edu`), or Canvas message.
- Email body should include the **student name** and the **section** they're enrolled in.
- Students should allow at least 24 business hours before following up.{%sidenote "Hours" "Generally, my working hours are between 8AM and 6PM"%}

---

## Student Feedback

[Please send me your anonymous feedback](https://pitt.co1.qualtrics.com/jfe/form/SV_dd9suL0AkJctj2S)
{: .text-center}

---

## Schedule *&* Handout

<div class="table-responsive" markdown="1" >
| #     | Date/Slides | Topic | Handout | Important Announcements |
| ----- | ----------- | ----- | ------- | ----------------------- |
| **1** |             |       | -       |                         |
| **1** |             |       | -       |                         |
| **1** |             |       | -       |                         |
| **1** |             |       | -       |                         |
| **1** |             |       | -       |                         |
| **1** |             |       | -       |                         |
| **1** |             |       | -       |                         |
| **1** |             |       | -       |                         |
{: .table-hover}

</div>




---

## Tips for Success

{% epigraph 'If you want to do well in any course, the bare minimum is attending all lectures and doing all homework assignments.' 'PittCS Wiki'  %}

- **Attend class and actively participate in class**.<br>The primary introduction to course material is through class lecture. Additionally, we often do exercises during class. Showing up is necessary, but not sufficient to success in the course: ask questions, participate in class discussions and in class activities, and take notes.
- **Read the material before you come to class**.<br>Don't worry about total comprehension, but at least get a feel for what we will be covering that week. If you have some understanding of the material coming into class, it will be easier for you to follow the lecture and to ask questions during class.
- **Start the assignments early**.<br>I realize this one is not always easy to do, but if you can get in the habit of doing this, you will be much better off.
- **Practice, practice, practice**.<br>The only effective way to learn the material and pass the exams is to consistently do the assignments, and to example problems presented in class and in the book. Forming study groups to go over practice problems and to review lecture and reading notes is a great way to prepare for exams.
- **Seek help early and often.**<br>Because course material builds on previous material, it is essential to your success in this class that you keep up with the course material. There are a lot of sources of help: ask questions during lecture; ask your classmates (make sure you have read the "Academic Integrity"); get help during recitation; and come to office hours.

## Getting Help

We expect that all students will need help at some point in this course. If you find yourself needing help, this is not cause for embarrassment: it is completely expected, and our goal is to ensure that you are able to receive the help you need. A good rule of thumb is that if you spend an hour on the assignment without making any progress, seek help! Please be sure to seek help early and often through any (or all!) of the following resources:

- **Your Study Group**: Building a support system of friends with whom you can struggle and work through the challenges you encounter is one of the best ways to seek help. You will quickly learn how much you can figure out working together!

- **Discord**: If you would prefer to have a more informal place to collaborate with your peers, we have created a discord server. You can get help through discord, or just use it to get to know your classmates better. As with any other form of communication, please use discretion and don't broadcast your solution in a way that other students can easily copy it. The invite link for the server is on Canvas.

- **Office Hours**: I am always willing to help you during our office hours. Please make frequent use of these times! Even if you don't have specific questions, you can come to student hours just to work until you do have a question.

- **E-Mail**: Please send me emails as often as you need! But note that in my class, you are never allowed to apologize for sending an email or asking for help, and you are not allowed to dismiss your own questions as "dumb".

## Helpful Links

- [Sign up for **Peer Tutoring** on Navigate](https://pitt.guide.eab.com/){: target="\_blank"}
- [Tips from Previous Students](https://pittcs.wiki/academics/succeed-in-course-x/succeed-in-441/)
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
