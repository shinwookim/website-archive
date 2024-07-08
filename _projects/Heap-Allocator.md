---
layout: project
title: Custom Heap Allocator
img: assets/img/projects/malloc.png
imgtext: Screenshot of Driver Program for the Custom Heap Allocator
tags: C Systems
year: 2023-1
---
This is a custom implementation of the dynamic storage allocator that can be used for C programs (i.e., a custom version of the `malloc()` and `free()` routines). This heap allocator implementation used a **first-fit** approach and supports coalescing multiple free blocks to minimize memory waste. To boost free block search performance, this implementation kept a separate linked lists of free blocks which lived on top of the list of all blocks. After the allocator was fully implemented, the scores were computed by comparing its performance (`thru` - throughput) and efficiency (`util` - utilization) against that of the GNU standard library's `malloc()` and `free()` routines using predefined trace fioes. Hence a score of 90/100 roughly corresponds to a 90% equivalent performance to the GNU standard library.<span class="endmark"></span>


**Code Available Upon Request**
{: .text-center}