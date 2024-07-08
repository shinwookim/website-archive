---
layout: post
tufte: true
title: "Introduction to Systems Software"
subtitle: "CS 0449. Fall 2023 (Term 2241)"
---

_Systems_ is a branch of computer science that focuses on the design, implementation, and analysis of complex software, hardware, and their interaction. In this course, we will explore the issues of programming a real computer system by examining the abstractions, interfaces, and design decisions that influence the way that software runs.{% marginfigure 'mf-mem' 'https://imgs.xkcd.com/comics/pointers.png' 'Pointers, [XKCD 138](https://xkcd.com/138/)'%}

## About this Page

This page will provide information regarding the things I go over in recitation. **Check back for updates regularly, especially if you miss a recitation**. For other course materials including lecture slides and lab/project handouts, please see the [**course website**](https://cs0449.gitlab.io/fa2023/){: target="\_blank"}.

<!-- ## Course Description
The purpose of this course is to provide a solid understanding of how computer systems execute programs, store information, and communicate. We will explore systems-level issues from a programmer’s view by examining the abstractions, interfaces, and design decisions that influence the way that software runs on the computer system.

The perspective we will take is one of the life cycle of a program from implementation to execution. The act of compiling and running a program, a sequence of events we often take for granted, is a complex interaction of many different components that work together to manage the computer’s resources and perform the desired task. -->

## Contact Information

**Shinwoo Kim**<br/>
E-mail: [`shinwookim@pitt.edu`](mailto:shiwookim@pitt.edu){% sidenote "office hours" "Happy to meet by appointment. Just send me an E-mail!"%}<br/>
Home Page: [`https://pitt.edu/~shk148/`](https://pitt.edu/~shk148/)<br/>
Office: [Fall 2023 Office Hours](https://pitt.edu/~shk148/teaching/#OH){%sidenote "tutors" "Extra help is available via the CS department's *Peer Tutoring* program. Sign up for an appointment on [**Navigate**](https://pitt.guide.eab.com/)."%}

## Recitations

My recitation sections accompany professor **Luis Oliveira**'s lecture **section 1135** which meets Tuesdays and Thursdays 2:30–3:45pm in the 1501 Wesley W. Posvar Hall. We will meet **every Friday at 4:00 PM in [501 Information Science Building](https://map.concept3d.com/?id=1315#!m/386791)** unless announced otherwise.

You may attend **only** the recitation section you are signed up for unless you have received permission from the course instructor.

<h2 id="handouts">Schedule & Handouts</h2><label for="Additional-Resources" class="margin-toggle">

{%marginnote "extra-resources" "**Additional Resources**<br>[Recommended Books/Resources on *Computer Systems*](books.html)<br>[Recommended Books/Resources on *C Programming*](c-books.html)<br>[The Development of the C Language](CHistory.html)<br>[Pitt Course Recommendations](more-systems.html)<br><br>[*How do computers read code?* (Video)](https://www.youtube.com/watch?v=QXjU9qTsYCc)<br>[*Slab Allocators* (Video)](https://youtu.be/UQVd9mZr-jI)<br>[*The C Programming Language: Brian Kernighan* (Video)](https://youtu.be/de2Hsvxaf8M)<br>[*The Unix Operating System* (Video)](https://youtu.be/tc4ROCJYbm0)<br><br>[*Command Line Help* (Web)](https://cheatography.com/davechild/cheat-sheets/linux-command-line/)<br>[*GDB Cheatsheet* (PDF)](https://darkdust.net/files/GDB%20Cheat%20Sheet.pdf)<br>[*Vim-Adventure: A New Way To Learn Vim* (Web)](https://vim-adventures.com/)" %}

|             Date             | Topic                              | Handouts                                                                                                                 |
| :--------------------------: | ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
|          09/01/2023          | Introduction + Lab0                | [Slides](01-intro.pdf) <br> [Handout](https://cs0449.gitlab.io/fa2023/labs/00/)                                          |
|          09/08/2023          | Bitwise Ops, I/O, Lab 1            | [Slides](02-cprog.pdf) <br> [Handout](https://cs0449.gitlab.io/fa2023/labs/01/)                                          |
|          09/15/2023          | Intermediate C Programming + Lab 2 | [Slides](03-adv-cprog.pdf) <br> [Handout](https://cs0449.gitlab.io/fa2023/labs/02/)                                      |
|          09/22/2023          | Multi-file development             | [Slides](04-makefiles.pdf) <br> [Tutorial](https://cs0449.gitlab.io/fa2023/resources/worksheets/makefiles/makefiles.pdf) |
|          09/29/2023          | Pointer Lab + Project 1 Discussion | [Slides](05-pointers.pdf) <br> [Handout](https://cs0449.gitlab.io/fa2023/labs/03/)                                       |
| 10/06/2023<br>**Fall Break** | Queue Lab                          | [Slides](06-queue.pdf) <br> [Handout](https://cs0449.gitlab.io/fa2023/labs/04/)                                          |
|          10/13/2023          | Mid-Term Review                    | [Study Guide](https://shinwookim.github.io/CS0449-StudyGuide/)                                                           |
|          10/20/2023          | Assembly                           | [Slides](07-asm.pdf)                                                                                                     |
|          10/27/2023          | Valgrind and Memory Leaks          | [Handout](valgrind-lab.html)                                                                                             |
|          11/03/2023          | Project 3 Discussion               | [Slides](09-bomb.pdf)                                                                                                    |
|          11/10/2023          | Process Lab                        | [Slides](10-proc.pdf)                                                                                                    |
|          11/17/2023          | Project 4 Discussion               | [Slides](11-shell.pdf)                                                                                                   |
|          12/01/2023          | Synchronization & Concurrency      | [Slides](12-threads.pdf)                                                                                                 |
|          12/08/2023          | Final Exam Review                  | [Course Recommendations](more-systems.html)                                                                              |
{: .table .table-hover}

<style>
  table tr td, table tr th{
    background-color: rgba(0,0,0, 0) !important;
  }
  td a {
    text-shadow: none !important;
  }
</style>
