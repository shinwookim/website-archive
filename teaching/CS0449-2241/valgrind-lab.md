---
layout: post
tufte: true
title: "Valgrind Lab"
meta_title: Valgrind Lab | CS 0449
---



<div class="text-center" markdown="1">
<mark class="h4"><strong>There is no submission for this lab.</strong></mark><br>
Thanks to Dr. Jonathan Misurda and Dr. Wonsun Ahn for providing the lab!
</div>

## Background
The [Valgrind tool suite](https://valgrind.org/) provides a number of debugging and profiling tools that help you make your programs faster and more correct. The most popular of these tools is called `Memcheck`. It can detect many memory-related errors that are common in C and C++ programs and that can lead to crashes and unpredictable behavior. This lab is meant to familiarize you with Valgrind so that you can use it for future projects while debugging.

## Introduction
1. Login via SSH to `thoth.cs.pitt.edu`
2. Change directories to the one we created for the work for this class
3. Follow below directions while reading: [The Valgrind Quick Start Guide](http://valgrind.org/docs/manual/quick-start.html).
    
```sh
cp ~wahn/public/cs449/valgrind/quick-start.c ./
gcc -g quick-start.c -o ./quick-start
valgrind --leak-check=yes ./quick-start
```


## Part 1: Errors detected by Valgrind
{:start="4"}
1. Follow below directions while reading: [http://valgrind.org/docs/manual/mc-manual.html](http://valgrind.org/docs/manual/mc-manual.html).  
Focus on Section 4.2: Explanation of error messages from MemCheck.
    
```sh
cp ~wahn/public/cs449/valgrind/very-buggy.c ./
gcc -g very-buggy.c -o ./very-buggy
valgrind --leak-check=full --track-origins=yes ./very-buggy
```


1. Valgrind should report 7 errors. The URL given above describes 8 types of errors discovered by MemCheck.  
Write how many errors of each type valgrind discovers in the above example code.
<div class="code-box" markdown="1">
        - [ ] Illegal read / Illegal write errors
        - [ ] Use of uninitialised values
        - [ ] Uninitialised values in system calls
        - [ ] Illegal frees
        - [ ] Inappropriate deallocation function
        - [ ] Overlapping source and destination blocks
        - [ ] Fishy argument values
        - [ ] Memory leak detection
</div>

1. Make reasonable modifications to `very-buggy.c` as to remove all memory errors.
  - If buffers overflow, they should be extended.
  - If values are not initialized, they should be initialized to 0.
  - If there is a leak the memory should be freed appropriately, etc.
  - Once you are done, valgrind should not display any errors when run.

## Part 2: Memory Leak Analysis
{:start="7"}
1. Copy over `leak.c` to the work directory and follow below directions
    
```sh
cp ~wahn/public/cs449/valgrind/leak.c ./
gcc -g leak.c -o ./leak
valgrind --leak-check=full --show-reachable=yes ./leak
```


1. Look at the **LEAK SUMMARY** section reported by valgrind.
  - Note that there are 7 blocks leaked in total categorized into: definitely lost, indirectly lost, and still reachable. Those 7 blocks correspond to the 7 nodes in the tree created by leak.c.
  - On a piece of paper, draw a pictorial diagram of the tree. On the diagram, mark nodes that are definitely lost with the letter ‘`D`’, nodes that are indirectly lost with the letter ‘`I`’, and nodes that are still reachable with the letter ‘`S`’.
  - Read Section 4.2.8 of the manual to get a description of each type of leak.

2.  Make modifications to `leak.c` to insert appropriate `free()` calls to remove all direct and indirect memory leaks. Once you are done, valgrind should not display any errors when run.

## What to Hand In
**No submission**