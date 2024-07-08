---
layout: post
tufte: true
title: "Where to Go From Here"
subtitle: "Pitt Courses to Take To Learn More About How Computer Systems Work"
backlink: ./
---
This document provides a list of courses offered at Pitt that focus on the *'systems'* subfield of computer science. If you enjoyed taking CS 0449, and want to learn more about how the software you write interacts with the physical hardware, consider some of these courses the next time you are scheduling.

*Note:* Course descriptions and requirements are based on the course catalogue at the time of writing. Please see the latest [catalogue](https://catalog.upp.pitt.edu/) for the most accurate information. {%marginnote "pittcswiki" "Also, check out PittCSC's [*Course Guide*](https://pittcs.wiki/courses/) and [*Scheduling Guide*](https://pittcs.wiki/academics/scheduling)."%}


## *TL;DR*{: .h4}

| Subfield                          | Courses                                                                                                                    |
| --------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| Architecture                      | [CS 1541](https://courses.sci.pitt.edu/courses/view/CS-1541), [CS 1567](https://courses.sci.pitt.edu/courses/view/CS-1567) |
| Operating Systems                 | [CS 1550](https://courses.sci.pitt.edu/courses/view/CS-1550), [CS 1651](https://courses.sci.pitt.edu/courses/view/CS-1651) |
| Compilers & Programming Languages | [CS 1621](https://courses.sci.pitt.edu/courses/view/CS-1621), [CS 1622](https://courses.sci.pitt.edu/courses/view/CS-1622) |
| Parallel Computing                | [CS 1645](https://courses.sci.pitt.edu/courses/view/CS-1645), [CS 1538](https://courses.sci.pitt.edu/courses/view/CS-1538) |
| Networking                        | [CS 1652](https://courses.sci.pitt.edu/courses/view/CS-1621)                                                               |

---

## Architecture
We spend a lot of time in "systems" on learning how the code you write executes on the underlying hardware. In *Computer Architecture*, you will take a deeper look at how the hardware operates. Topics in this field include: Instruction Set Architecture (ISA), Memory Layout, Input/Output structure, and more.{%sidenote "447-449" "Computer architecture builds up on what you have learned in this course and [CS 447: Computer Organization & Assembly Language](https://courses.sci.pitt.edu/courses/view/CS-447)."%}

### [CS 1541: Introduction to Computer Architecture](https://courses.sci.pitt.edu/courses/view/CS-1541)
- **Description**: This course emphasizes the study of computer architecture and hardware system organization. Topics such as CPU organization, sequential and microprogrammed control, instruction set implementation, memory organizations, input/output structure, peripherals and computer communications will be covered.
- **Requirements**: [CS 445](https://courses.sci.pitt.edu/courses/view/CS-0445), [CS 447](https://courses.sci.pitt.edu/courses/view/CS-0447).

### [CS 1567: Programming and System Design On a Mobile Robot](https://courses.sci.pitt.edu/courses/view/CS-1567){%sidenote "1567-offered" "This course is typically offered only during summer term."%}
- **Description**: In this course, students will be introduced to a variety of programming techniques and paradigms, for implementing medium to large scale software systems. System integration is done on a mobile robot platform rather than a traditional desktop system. However, this is not a course in robotics. It is a course about building systems in a real-world environment. 
- **Requirements**: [CS 441](https://courses.sci.pitt.edu/courses/view/CS-441), [CS 445](https://courses.sci.pitt.edu/courses/view/CS-0445), Minimum GPA: 3.25.

## Operating Systems
An operating system is the most important software that runs on a computer. It manages the computer's memory and processes, as well as all of its software and hardware. It also allows you to communicate with the computer without knowing how to speak the computer's language.{% sidenote "system-call" "In this course, you used  `fork()` and `exec()` to manage processes. These *system calls* (which are provided by the operating system) helps us interface with the hardware in a uniform way, regardless of specific hardware details." %} Courses in category will focus on how certain *abstractions* are used to hide the hardware details from the user and how the operating system *manages* system resources.

### [CS 1550: Introduction to Operating Systems](https://courses.sci.pitt.edu/courses/view/CS-1550) 
- **Description**: This course provides an introduction to basic concepts of operating systems which is a piece of software that interfaces the machine with upper-level programs. This course will introduce processes as processing unit, process management, concurrency, communication, memory management and protection, and file systems.
- **Requirements**: [CS 447](https://courses.sci.pitt.edu/courses/view/CS-0447), [CS 449](https://courses.sci.pitt.edu/courses/view/CS-0449).

### [CS 1651: Advanced Systems Software](https://courses.sci.pitt.edu/courses/view/CS-1651)
- **Description**: The purpose of this course is to discuss advanced features of fundamental importance in the design of operating systems. The subjects discussed include interprocess communication, real-time scheduling, advanced file systems, security and protection mechanisms. The objective of the course is to provide an understanding of these advanced issues, as well as to bring awareness of the known solutions to these problems and to the limitations of these solutions.
- Requires [CS 1550](https://courses.sci.pitt.edu/courses/view/CS-1550) or Instructor Permission.

## Compilers & Programming Languages
As we began our studies using the C programming language, we briefly discussed the various types of programming languages (such as compiled, interpreted, and bytecode){%marginfigure "compiled-interpreted" "https://www.cse.unsw.edu.au/~cs1521/19T2/lectures/week01/Pics/compile/compilation.png" "*Compiling a C Program*. Image from [UNSW syndey](https://www.cse.unsw.edu.au/~cs1521/19T2/lectures/week01/slide036.html)"%}. This category of courses takes a more in-depth approach at how programming languages are designed and how software such as compilers and interpreters are implemented.

### [CS 1621: Structure of Programming Languages](https://courses.sci.pitt.edu/courses/view/CS-1621)
- **Description**: This course takes an analytical examination of modern high-level programming language structures. Topics of design specification and implementation will be covered including advanced forms of data types, expressions, control primitives, and relationship of storage management techniques and language design
- **Requirements**: [CS 441](https://courses.sci.pitt.edu/courses/view/CS-441), [CS 445](https://courses.sci.pitt.edu/courses/view/CS-0445).

### [CS 1622: Introduction to Compiler Design](https://courses.sci.pitt.edu/courses/view/CS-1622)
- **Description**: This course will introduce the basic concepts of compiler design and implementation. Topics include lexical analysis, various types of parsers, intermediate and object code generation and code optimization. The material will be presented from an implementation point of view rather than a formal approach. The impact of language design on compilers will also be examined.
- **Requirements**: [CS 441](https://courses.sci.pitt.edu/courses/view/CS-441), [CS 447](https://courses.sci.pitt.edu/courses/view/CS-0447).

## Parallel Computing
While processors today are quite powerful, some problems are just too big for a single one of them to solve. Parallel computing is a type of computing architecture in which several processors simultaneously execute multiple, smaller calculations broken down from an overall larger, complex problem. {%marginfigure "parallel-compute" "https://assets-global.website-files.com/620d42e86cb8ec4d0839e59d/6230efa95bf3acf0e331afe1_61c9fbbd6ed8551b471954ea_Parallel-Computing-Diagram.gif" " *Parallel Computing*. Image from [Lawrence Livermore National Laboratory](https://www.heavy.ai/technical-glossary/parallel-computing)" %}
### [CS 1645: Introduction To High Performance Computing Systems](https://courses.sci.pitt.edu/courses/view/CS-1645)
- **Description**: This course is an introduction to the architecture of and software techniques for parallel and high performance computing systems. The content includes fundamental aspects of vector processing, shared-memory, and distributed-memory systems. Specific applications in parallel processing paradigms will be covered.
- **Requirements**: [CS 447](https://courses.sci.pitt.edu/courses/view/CS-447), [CS 449](https://courses.sci.pitt.edu/courses/view/CS-0449), [CS 1501](https://courses.sci.pitt.edu/courses/view/CS-1501).

### [CS 1538: Introduction to Simulation](https://courses.sci.pitt.edu/courses/view/CS-1538)
- **Description**: The course introduces students to the concepts, definitions, techniques applicable to the simulation of systems. Both continuous and discrete modeling are covered, with emphasis on the latter. The objective of this course is to familiarize the students with several modern discrete simulation languages, and their use in modeling. Topics include: systems characterization, classification, and modeling; pertinence of probability and statistics theory for stochastic processes and model measurement; discrete systems simulation viewpoints; software modeling techniques.
- **Requirements**: Requires [CS 447](https://courses.sci.pitt.edu/courses/view/CS-447) and a statistics course

## Networking
So far, we have been talking about how the components internal to a single computer work together to solve a problem (or run code). But, how can multiple computers communicate between each other? Networking looks precisely at this issue.

### [CS 1652: Data Communications and Computer Networks](https://courses.sci.pitt.edu/courses/view/CS-1652)
- **Description**: This course will include basic principles and topics of computer communications. An overview of interfaces that interconnect hardware and software components, describing the procedures and rules involved in the communication process and the software which controls computers communication. Discussion on network architectures, design principles, basic protocol suites, and the concept of inter-networking.
- **Requirements**: [CS 447](https://courses.sci.pitt.edu/courses/view/CS-447), [CS 449](https://courses.sci.pitt.edu/courses/view/CS-0449).