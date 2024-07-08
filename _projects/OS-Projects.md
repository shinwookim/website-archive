---
layout: project
title: "Course Projects for Operating Systems"
featured_image:
    - src: assets/img/projects/OS.png
    - alt: Screenshot of Blackjack Program which tests the device driver
tags: C Kernel&nbsp;Development Linux Operating&nbsp;Systems
year: 2023-2
---

Below are some of my projects for the CS 1550: Operating Systems course that I took in Spring 2022 with Dr. Jon Misurda.

## A Linux Graphics Library
Although printing to the terminal may amount only to a single line of code, beneath the veil of abstractions, it is a rather complex task. The computer, once it receives information on what characters to print, must calculate which pixels on the screen to manipulate by looking at the fonts, screen size, and screen type. This project explores how a computer does this by creating a custom graphics library and driver that can be used to draw and write to the screen.

For this project, no external libraries were used (not even the C standard library) except for the system calls provided by the Linux operating system.

## `/dev/cards`: Virtual Device Driver
This project alters how the Linux operating system interacts with devices by creating a specific implementation of the `read()` system call for a software-emulated device. This project explores the OS's system calls as a device-independent interface that user space programs can use to request the OS to do various tasks that it may not be able to do itself.

Following the Unix ethos of "*Everything is a file*", `cards` device driver can be mounted to the `/dev/` virtual filesystem which represents the hardware devices that are attatched to a system. In a similar manner to the virtual device drivers that are common to Linux (e.g., `/dev/zero` and `/dev/random`), the `/dev/cards` device driver returns a randomly selected playing card simulating a real card deck. As such, each card needs to be tracked to ensure that it is not returned again until all 52 cards have been exhausted.

To test the newly created device driver, a driver program which emulates a simple Blackjack game (User vs. CPU) is implemented.

## Syscalls and Interprocess Communication
Anytime we have shared data between two or more processes or threads, we run the risk of having a *race condition* where our data could become corrupted. In order to avoid these situations, we have discussed various mechanisms to ensure that one program’s critical regions are guarded from another’s.

One place that we might use parallelism is to simulate real-world situations that involve multiple independently acting entities, such as people or automobiles. This project models a common roadway occurrence, where a lane is closed and a flagperson is directing traffic. In addition, to implement this program, we modify the Linux kernel to create *custom system calls* that help us implement custom synchronization primitives.

## Virtual Memory Simulator
One of the most important abstractions provided by the operating system is the notion of exclusive access to memory. A operating system accomplishes this by using a scheme called **virtual memory** (and paging) that allow for allocating chunks of a processes' address space onto physical RAM. Yet, one of the pitfalls of this scheme is the performance loss when a *page-fault* occurs. This project explores how we can optimize the various page replacement algorithms by using a simulation to count and analyze the number of page faults. 

## Custom File System
How does a computer store files and metadata? Using [FUSE](https://github.com/libfuse/libfuse), this project implements various file-related system calls to create a custom file system that is managed via a single file that represents the disk device. Using FUSE and the project's implementation, we can interact with the custom file system using standard UNIX/Linux programs in a transparent way.

**Code Available Upon Request**
{: .text-center}



