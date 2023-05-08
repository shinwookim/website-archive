---
layout: project
title: "Course Projects for Operating Systems"
img: assets/img/projects/OS.png
imgtext: Screenshot of Blackjack Program which tests the device driver
tags: C Kernel&nbsp;Development Linux Systems
year: 2023-2
---


## `/dev/cards`: Virtual Device Driver
This project alters how the Linux operating system interacts with devices by creating a specific implementation of the `read()` system call for a software-emulated device. This project explores the OS's system calls as a device-independent interface that user space programs can use to request the OS to do varioous tasks that it may not be able to do itself.

Following the Unix ethos of "*Everything is a file*", `cards` device driver can be mounted to the `/dev/` virtual filesystem which represents the hardware devices that are attatched to a system. In a similar manner to the virtual device drivers that are common to Linux (e.g., `/dev/zero` and `/dev/random`), the `/dev/cards` device driver returns a randomly selected playing card simulating a real card deck. As such, each card needs to be tracked to ensure that it is not returned again until all 52 cards have been exhausted.

To test the newly created device driver, a driver program which emulates a simple Blackjack game (User vs. CPU) is implemented.



