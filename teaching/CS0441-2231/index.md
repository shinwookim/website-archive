---
layout: docs
title: CS0441 Discrete Structures for Computer Science (Fall 2022/3)
published: true
---

Welcome to **CS 0441**, Discrete Structures for Computer Science, for the Fall 2022/3 term!

---
<!--
## Annonucements

| Date         | Announcements       |
| ------------ | ------------------- |
| `2022-09-01` | First day of Class! |
---
-->
## Course Information

**Lectures:** Tue/Thu, 4:00–5:15pm  
**Classroom:** Lawrence 107  
**Section:** `1090/1095` (**CRN:** `17064`)  
**Instructor:** Donald Bonidie  
_See most accurate information on [Canvas](https://canvas.pitt.edu)_  
**Course Description**

> The purpose of this course is to understand and use (abstract) discrete structures that are backbones of computer science. In particular, this class is meant to introduce logic, proofs, sets, relations, functions, counting, and probability, with an emphasis on applications in computer science.

**Prerequisites:** C *or above* in <u>ONE</u> of: MATH 0220, 0230, 0235, 0140, 0221, or 0231

---

### Recitation Instructor Information

- TA: Shinwoo Kim
- Email: [`shinwookim@pitt.edu`](mailto:shiwookim@pitt.edu)
- TA Office Hours
  - Time: TBD; By Appointment
  - Location: TBD

> **When Emailing:**  
> See E-mail guidelines [here](../email-policy/).  
> Append `[CS0441]` to ALL E-mail communication subject lines. I will lose track of emails that do not include that in the subject.

---

## Recitation Schedule & Handouts

| Date                        | Topic            | Handouts                                        | Remarks |
| --------------------------- | ---------------- | ----------------------------------------------- | ------- |
| Monday, September 1st, 2022 | 1. Administrivia | [[CS0441-2231] (1)  Administrivia](handouts/01) | N/A     |

---

## Other Information
<details markdown="1">
<summary class='h3'>Diversity Statement</summary>
At Pitt, we are always striving to improve our commitment to diversity and inclusion, and that includes promoting the most inclusive learning environmennt possible. I view diversity as a resource and a strength of our community, and I want to make this course work for students of all identities. It is my intent to teach in a way that is as respectful and inclusive as possible with regard to: race, gender/gender identity, sexual orientation, socioeconomic status, age, cultural background, as well as any other identities that I have unintentionally missed. I am always open to your suggestions, comments, concerns, and constructive criticism on how I carry out this ethos.  
At Pitt we have stringent community standards for the treatment of others. I will not tolerate any hate speech, bullying, or harassment of any kind, and I will report any violations of our code of conduct to the [Title IX office](https://www.diversity.pitt.edu/civil-rights-title-ix-compliance).  
Please feel free to let me know what name and pronouns you prefer to go by, and/or how you want your name to be pronounced, and I will make sure to address you how you want to be addressed.
</details>

<details markdown="1">
<summary class='h3'>Religious Observances</summary>
In order to accommodate the observance of religious holidays, students should inform the instructor (by email, within the first two weeks of the term) of any such days which conflict with scheduled class activities.
</details>

<details markdown="1">
<summary class='h3'>Students with Disabilities</summary>
If you have a disability for which you are or may be requesting an accommodation, you are encouraged to contact both your instructor and Disability Resources and Services (DRS), 140 William Pitt Union, (412) 648-7890, drsrecep@pitt.edu, (412) 228-5347, as early as possible in the term. DRS will verify your disability and determine whether reasonable accommodation(s) for this course are warranted. It is the responsibility of any student seeking accommodation(s) for this course to present any necessary documentation to the instructor by the start of the term.
</details>

---

## Helpful Links
[Email Policy](../email-policy/)  
[University of Pittsburgh](https://pitt.edu)  
[Department of Computer Science](https://cs.pitt.edu)  

---

**Disclaimer.**
All materials provided for this course are protected by copyright. United States copyright law, 17 USC § 101, et seq., in addition to University policy and procedures, prohibit unauthorized duplication or retransmission of course materials. This applies to all class notes, slides, assignments, solutions, project descriptions, quiz and exam materials, etc. You are allowed (and indeed, expected) to use all provided material for personal academic use. However, you are strictly prohibited from sharing any materials with others in general and from posting the material on the Web or other file-sharing venues in particular.  

---
<script>
    
    var elements = document.querySelectorAll('p');
    Array.prototype.forEach.call(elements, function(el, i){
        if(el.innerHTML=='[expand]') {
            var parentcontent = el.parentNode.innerHTML.replace('<p>[expand]</p>','<div class="expand" style="display: none; height: 0; overflow: hidden;">').replace('<p>[/expand]</p>','</div>');
            el.parentNode.innerHTML = parentcontent;
        }
    });

    var elements = document.querySelectorAll('div.expand');
    Array.prototype.forEach.call(elements, function(el, i){
        el.previousElementSibling.innerHTML = el.previousElementSibling.innerHTML + '<span>..&nbsp; <a href="#" style="cursor: pointer;" onclick="this.parentNode.parentNode.nextElementSibling.style.display = \'block\'; this.parentNode.parentNode.nextElementSibling.style.height = \'auto\'; this.parentNode.style.display = \'none\';">read&nbsp;more&nbsp;&rarr;</a></span>';
    });

</script>