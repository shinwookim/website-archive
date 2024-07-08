---
layout: post
tufte: true
title: "CS 0449 Exam II (Non-Exhaustive) Study Guide"
subtitle: "for Fall 2023 Final Exam"
---

{%marginnote "exam-time" "The second exam is scheduled during **finals week**. Please check PeopleSoft for your scheduled exam time and location. If you have a conflict, please contact your instructor ASAP!" %}

Below is a **non-exhaustive** list of topics that may appear on the final exam. Note that topics not on this document may show up on the exam if it was discussed in lecture, recitation, or in an assignment; similarly, the topics on this list are not guaranteed to be on the exam! This 
document purely serves to motivate students who "do not even know where to begin."

# Overview
Studying for an exam is about gaining a level of familiarity with the material such that you can solve interesting problems that aren't just repetitions of things you've already seen. Some general tips:
- Start early and spread things out over time. Sleep does some sort of magic where things sink in better. More shorter study days is way preferably to a few short ones. One of the reasons we have assignments with deadlines is to exploit this fact.
- Be as active in your studying as possible. Working through problems and developing cheat sheets are "active". Simply rewatching lectures and rereading something you've read is not.
- The often missing component: Reflect on your own problem-solving process. This is much easier through discussion with others, particularly other students.

**There are practice exams (from previous terms) posted on Discord. Please review those as the format of your exam will be similar.**

# Contents
Exam II is **cummulative**, meaning everything since week 1{% sidenote "cs-use-zero" "Or week `0`, since we're computer scientists."%} is eligible for the exam. Emphasis will be placed on topics covered since Exam I, but it is a good idea to review your Exam I grade (accessible via GradeScope) to see what you got wrong, since similar questions may appear on Exam II.

The study guide for the first exam is still available: [https://shinwookim.github.io/CS0449-StudyGuide/](https://shinwookim.github.io/CS0449-StudyGuide/). Use it to give yourself a refresher of the topics covered.

## Contents Since the First Exam

### Memory Management
Be prepared to answer questions about *dynamic* and *static* memory allocation. For Exam I, you were expected to know:
- What is dynamic/static memory allocation?
  - When is it better to use dynamic allocation vs static allocation?
  - When should we not use dynamic allocation vs static allocation?
  - How do we perform dynamic/static memory allocation?{%sidenote "hint-malloc" "Hint: `malloc()`"%}
- What is the heap? What is the stack?

After completing the `malloc` project, you should be able to answer more in-depth questions about *memory management*.
- How does `malloc()` work *under-the-hood*?
- How is `malloc()` implemented?
  - What are some implementation concerns that can arise?
  - How do Linked Lists work (in C)?
  - How do the various search mechanisms work? For each, what are their pros and cons? When should we use which?
  - What are some ways to optimize `malloc()`? {%sidenote "malloc-opt" "What did you do for phase 2 and 3 in the `malloc` project?"%} 
- ***Can you trace through `malloc()` given a memory diagram?***
  - Looking at the before-and-after of the memory diagram, can you figure out which operations occured?{%sidenote "malloc-trace" "See the self-guided [malloc tutorial](https://docs.google.com/presentation/d/e/2PACX-1vS13a5zqohnXl4yYdxrlwlCklfz4XnOAkuaNHhjo9NJKh_-X7QM8TbUPK2qIWfPnbCo_TzxI26z98tz/pub?start=false&loop=false&delayms=60000#slide=id.g25f8eda0d0d_1_0)" %}
  - Can you figure out what search algorithm was used?
  - <mark>Many students miss points on this problem because they do not read the question carefully.</mark>

### x86 Assembly
After completing *bomb project*, you should be familiar with reading and interpreting assembly.
- For instance, can you figure out what `sub $12, %rsp` means? {%sidenote "asm" "Increases the size of the stack"%}
- You should also be able to identify common assembly patterns.
  - Namely, be able to look at `x86` code and identify whether it is a function, if-else, while-loop, etc.
  - For functions, you should be able to use the C ABI to identify what the arguments are, and what the fuction returns.
- While you aren't expected to write an entire program in assembly (on the exam), you may be asked 'fill-in-the-blank' questions where you translate C to assembly (or vice versa).

After completing the *attack project*, you should be familiar with the concept of **buffer overflows**.
- Namely, what they are, how to exploit them, and what you (or the system) can do to prevent them.
  - As the programmer, how do we write 'safe' code?
  - System/compiler mechanisms such as stack canary, and ASLR (Address Space Layout Randomization)

### Compiling, Linking, and Loading
When you write a C program, how is that translated into machine code that runs on your CPU?
- Steps of compilation (including the role of the preprocessor)
  - `X` occurs in what step?
- How are libaries linked?
  - What is a ELF file?
- How are executables generated?
- How can we link other object files?
  - How do we do dynamic linking (as in the shell project)?

## Process Management 
- What is a process?
  - What information is stored in a process metadata?
- How does an executable file begin running?
  - Fork-Exec Model {%marginfigure "Fork-Exec Model" "https://www.it.uu.se/education/course/homepage/os/vt18/images/module-2/fork-exec-exit-wait.png"%}
    - How is `pid` assigned?
  - Given code with `fork()`s, can you trace the possible outputs?
- What is a signal?
  - What are they used for?
  - How do we send them?
  - How do we catch (handle) them?

## Basic OS Concepts 
- What is a System Call?{%sidenote "syscall" "Way for a program to communicate with the OS."%}
  - E.g., `fork()`, `exec()`, etc.
- Scheduling and Interrupts
  - Tracing Round-robin scheduling
  - Given quantum, identify the percentage of time a process runs
  - To ensure a process runs *n*%, find the appropriate quatum.
- Virtual Memory
  - What does it mean by a process's address space?
  - How does virtual memory work with segmentation and paging?
  - Calculation problems regarding VM {%sidenote "VM" "See Lab 7"%}
    - VA → PA, size of physical RAM
    - Given requirements (page size, total memory), can we construct the format of VA/PA? (How many bits to represent `x`?)
  - What is an Inverted Page Table?

## Threads & Synchronization
- Creating, Managing Threads via `Pthread` Library
  - Given code with multiple threads, can you trace the possible outputs?
- Parallel Pitfalls
  - Deadlock, Livelock, Starvation, etc.
    - Given a scenario (code or real-life), can you identify the type of parallel pitfall?{%sidenote "par-pitfal" "E.g., Refrigerator example and Queue example from recitation." %}
- How to fix parallel issues with synchronization primitives:
  - Semaphores, Mutexes, Condition Variables
  




<style>
    li ul li {width: 100% !important;}
</style>