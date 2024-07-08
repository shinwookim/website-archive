---
layout: post
title: "Discrete Structures for Computer Science"
subtitle: "CS 0441. Fall 2022, Term 2231"
tufte: true
---

<center><p class="highlight"><strong>This webpage is no longer maintained, and serves only archival purposes</strong></p></center>

## Course Description

Welcome to **CS 0441**, **Discrete Structures for Computer Science**, for the Fall 2022 term!{%marginnote 'mn-preq' 'Co-Requisite: MATH 0220 or 0230 or 0235 or 0140 or 0221 or 0231 (Minimum grade C or Transfer)'%}

The purpose of this course is to understand and use (abstract) discrete structures that are backbones of computer science. In particular, this class is meant to introduce logic, proofs, sets, relations, functions, counting, and probability, with an emphasis on applications in computer science. {%marginnote 'mn-satisfy' 'This course satisfies one of the core course requirements for computer science majors/minors'%}

This page will provide any information for the class that I go over in recitation. Please check back for updates regularly, especially if you miss a recitation.

## Recitation Information

_Most up-to-date information is on [Canvas](https://canvas.pitt.edu)_
**CRN:** `17064`{%marginnote "Accompany" "Accompanies professor **Donald Bonidie**'s lecture section `1090` which meets **Tue/Thu, 4:30–5:45pm at 5502 Sennott Square**"%}  
**Meets:** _Fridays 4:00 PM_ at _501 [Information Science Building](https://map.concept3d.com/?id=1315#!m/386791)_
{% marginfigure 'mf-textbook' 'https://www.mheducation.com/cover-images/Jpeg_400-high/125967651X.jpeg' '**Course Textbook:** Kenneth H. Rosen. *Discrete Mathematics and Its Applications*, 8th Edition, McGraw Hill. **A copy of the text is required for homework.**' %}

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

## Schedule

Click the date for annoucement slides and see footnotes for important recitation information.
{%marginfigure "meme" "https://external-preview.redd.it/xHBy8Vbc9PPlRIkPmeztTsSwwwqFL9XGd8NgviiqWmQ.jpg?auto=webp&s=4e7586dbcafbb3dca7eed1d171684dfaf30da856"%}


<div class="table-responsive" markdown="1" >
| #      | Date/Slides                                        | Topic                                                                                                                                                                                                                                                                | Handout                                                                                                                                                                                    | Important Announcements                                                                            |
| ------ | -------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------- |
| **1**  | [09/02/2022](assets/01_CS0441R_Administrivia.pptx) | **No Recitation** <br> First Week of Class                                                                                                                                                                                                                           | -                                                                                                                                                                                          |                                                                                                    |
| **2**  | 09/09/2022                                         | Homework #1                                                                                                                                                                                                                                                          | -                                                                                                                                                                                          | Zoom Recitation (Link on Canvas). <br> **Homework 1 Due: 09/12/2022 11:59 PM ET**                  |
| **3**  | 09/16/2022                                         | Chapter 1.1 & 1.2 Review                                                                                                                                                                                                                                             | [Problems](assets/review-1.html)<sup>{% raw %}<a onclick='{{highlight("sch-nt-1")}}' href='#sch-nt-1'>[1]</a>{% endraw %}</sup><br>[Solutions](assets/review-1-solution.html)              |                                                                                                    |
| **4**  | [09/23/2022](assets/20220923.html)                 | Homework #2                                                                                                                                                                                                                                                          | -                                                                                                                                                                                          | **Homework 2 Due: 09/24/2022 11:59 PM ET**                                                         |
| **5**  | [09/30/2022](assets/05_CS0441R_Announcement.pptx)  | Homework #3                                                                                                                                                                                                                                                          | -                                                                                                                                                                                          | **Homework 3 Due: 10/06/2022 11:59 PM ET**                                                         |
| **6**  | [10/07/2022](assets/06_CS0441R_MidTermPrep.pptx)   | Mid-Term Prep (Common Mistakes)<sup>{% raw %}<a onclick='{{highlight("sch-nt-2")}}' href='#sch-nt-2'>[2]</a>{% endraw %}</sup><br>Proof Practice <br> *(Chapter 1.7)*<sup>{% raw %}<a onclick='{{highlight("sch-nt-3")}}' href='#sch-nt-3'>[3]</a>{% endraw %}</sup> | [Problems](assets/review-2.html)<sup markdown="0">{% raw %}<a onclick='{{highlight("sch-nt-1")}}' href='#sch-nt-1'>[1]</a>{% endraw %}</sup><br>[Solutions](assets/review-2-solution.html) | **Homework 4 Due: 10/12/2022 11:59 PM ET**<br> **Homework 5 Due: 10/19/2022 11:59 PM ET**          |
| **7**  | 10/14/2022                                         | **No Recitation** <br> Fall Break                                                                                                                                                                                                                                    | -                                                                                                                                                                                          | **MID-TERM EXAM: 10/19/2022 (During Lecture)**<br> **Reference Sheet Due: 10/17/2022 11:59 PM ET** |
| **8**  | 10/21/2022                                         | Principle of Mathematical Induction<sup>{% raw %}<a onclick='{{highlight("sch-nt-4")}}' href='#sch-nt-4'>[4]</a>{% endraw %}</sup>                                                                                                                                   | [Slides](assets/08_CS0441R_Induction.pptx)                                                                                                                                                 |                                                                                                    |
| **9**  | [10/28/2022](assets/09_CS0441R_Homework6.pptx)     | Homework #6                                                                                                                                                                                                                                                          | -                                                                                                                                                                                          | **Homework 6 Due: 11/04/2022 11:59 PM ET**                                                         |
| **10** | 11/04/2022                                         | Homework #6                                                                                                                                                                                                                                                          | -                                                                                                                                                                                          | **Homework 6 Due: 11/04/2022 11:59 PM ET**                                                         |
| **11** | [11/11/2022](assets/11_CS0441R_Homework7.pptx)     | Chapter 6 Review/Homework 7                                                                                                                                                                                                                                          | [Problems](assets/review-3.html)<sup markdown="0">{% raw %}<a onclick='{{highlight("sch-nt-1")}}' href='#sch-nt-1'>[1]</a>{% endraw %}</sup><br>[Solutions](assets/review-3-solution.html) | **Homework 7 Due: 11/19/2022 11:59 PM ET**                                                         |
| **12** | 11/18/2022                                         | Homework 7                                                                                                                                                                                                                                                           | -                                                                                                                                                                                          | **Homework 7 Due: 11/19/2022 11:59 PM ET**                                                         |
| **13** | 11/25/2022                                         | **No Recitation** <br> Thanksgiving Break                                                                                                                                                                                                                            | -                                                                                                                                                                                          |                                                                                                    |
| **14** | [12/02/2022](assets/14_CS0441R_Homework8.pptx)     | Homework 8                                                                                                                                                                                                                                                           | -                                                                                                                                                                                          | **Homework 8 Due: 12/09/2022 11:59 PM ET**<br />**FINAL EXAM DURING LAST LECTURE**                 |
| **15** | 12/09/2022                                         | **No Recitation**<br>(Final) Office Hours                                                                                                                                                                                                                            | -                                                                                                                                                                                          | **Last Day for Undergraduate Class**<br />**NO MORE OFFICE HOURS PAST THIS POINT**                 |
{: .table-hover}
</div>

<div style="font-size: 55%">
<p id="sch-nt-1" class="my-0" onclick='highlight_off()'>[1] Select problems from Text (&copy; McGraw Hill)</p>
<p id="sch-nt-2" class="my-0" onclick='highlight_off()'>[2] See slides for Common Mistakes in chapter 1, and full document on course Discord</p>
<p id="sch-nt-3" class="my-0" onclick='highlight_off()'>[3] Majority of students voted to spend more time working with Proofs (Chapter 1.7). Thus, we will not be coveing HW#4, HW#5 during recitation. If you have questions, please come to Office Hours.</p>
<p id="sch-nt-4" class="my-0" onclick='highlight_off()'>[4] Induction will not be on the exam, but is a useful concept (that is often covered in a discrete math course) to know for future courses. See <em>Chapter 5</em> of the text for more details.</p>

</div>

---

## Tips for Success

{% epigraph 'If you want to do well in any course, the bare minimum is attending all lectures and doing all homework assignments.' 'Dylan Feehan' "PittCS Wiki" %}
{%marginnote 'tips' '[**Pitt CS Wiki**: How to Succeed in CS0441: Discrete Structures for Computer Science](https://pittcs.wiki/academics/succeed-in-course-x/succeed-in-441/)' %}

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

<span class="endmark"></span>
<style>
    th{
        text-align: center;
    }
</style>
