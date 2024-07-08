---
layout: project
title: Custom Linux Shell
img: assets/img/projects/shell.png
imgtext: Screenshot of custom shell program
tags: HTML CSS JavaScript
year: 2023
---
When we interact with a computer through the command line interface (CLI), we do so by using a program called a *Shell*. This program is a simple, yet extensible, shell program that can be used to run commands on a Linux machine.

This shell supports the usual shell functionalities such as running commands like `ls` and `pwd`. However, it also supports plugins (in the form of `.so` files) which can be loaded using the `load` command. Plugins allow for improving existing functions and extending new ones to the shell.

Since this program is meant to be highly portable, it relies only on the basic C standard library, provided by GNU.[^1] <span class="endmark"></span>


**Code Available Upon Request**
{: .text-center}

---
[^1]: [https://www.gnu.org/software/libc/](https://www.gnu.org/software/libc/)