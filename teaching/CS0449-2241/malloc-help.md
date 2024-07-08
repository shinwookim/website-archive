---
layout: post
tufte: true
title: "Supplemental Notes on Malloc Project"
subtitle: "Writing Custom Test Cases (Traces) + Project Hints"
---
Testing software while developing is a crucial and indispensable aspect of the software development process. For this project, you are provided a set of *traces* (found in the `./traces/` directory) which are used to test your heap allocator implementation (`mm_malloc()`) for correctness, space utilization, and throughput. Each *trace file* contains a sequence of allocate and free instructions that direct the driver program (`mdriver.c`) to call your `mm_malloc()` and `mm_free()` functions in some order{%sidenote "grading" "The provided driver and trace files are the same ones we will use when we grade your handin `mm.c` file, although we may change the order in which the traces are used."%}.

However, throughout the development of your malloc implementation, you may find it beneficial to write your own custom *trace files* (especially since the ones provided are rather long). Doing so will (hopefully) help you better understand how the other trace files and the driver program operate.

## Creating a New Trace File
To write your own trace, make a copy of the trace `short1-bal.rep` from the `./traces/` directory and rename it to `custom-trace.rep`, or another name of your choosing.{%sidenote "extension" "A trace file technically does not need to use the `.rep` file extension to be recognized by the driver program. However, it is often wise to follow pre-existing conventions for file names (and also function/variables names, etc.) of your project."%}. If you open this file in your text-editor, you should see somthing like:
<div class="border div-55" markdown="1">

```c
20000
6
12
1
a 0 2040
a 1 2040
/* ... */
f 4
f 5
```
</div>

### Line 1: `20000` (Suggested Heap Size)
The first line in your trace file sets a variable in driver program called the `sugg_heapsize` (*suggested heap size*). However, it turns out, this variable is not actually used and we can ignore it.{%sidenote "sugg_heapsize" "**NOTE**. Although unused, this line must still appear in your trace file." %}


### Line 2: `6` (Number of Allocation IDs)
The next line denotes the number of allocation IDs. In essence, it is asking how many different blocks the trace file will allocate.

### Line 3: `12` (Number of Operations)
The third line sets the number of total operations performed by the trace file. This number should be equal to the number of allocations + number of frees that appear in remained the trace file.

### Line 4: `1` (Weight of Trace)
Before the sequence of allocates (`a`) and frees(`f`) begins, the fourth line of the trace file sets the weight of trace. However, much like the first line, this parameter is not used and can be ignored. (**This  line, however, must still exists in the trace file**)

### Line 5 - N: Allocations and Frees
The remainder of the trace file should contain the sequence of allocations and frees. An allocation is denoted using the `a` keyword and is written like
```c
a 0 16
```
whichinstructs the driver to call `mm_malloc(16)` and assign the resulting pointer to ID `0`. Similarly, a free is denoted using the `f` keyword and is written like
```c
f 0
```
which instructs the driver to call `mm_free()` with the the pointer with ID `0` as the argument. 
Be sure to free all blocks before reaching the end of the trace and only free blocks that have already been allocated.


In summary, your trace file must conform to the following format:

<div class="border div-55" markdown="1">

```
1024100       /* Unused number */
12000         /* Number of IDs (how many allocations?) */
16000         /* Number of operations (# of allocation + # of free) */
1             /* Unused number */
a 0 16        /* allocate 16 bytes. Assign pointer to ID 0 */
a 1 112       /* allocate 112 bytes. Assign pointer to ID 1 */
(...)
```
</div>

## Project Hints
1. During the inital phases of development, using tiny trace file will immensely simply debugging and testing. Use the following commandline to test your implementation on a specific trace:

    ```sh
    $ make
    $ ./mdriver -f <tracefile> # Runs one particular tracefile instead of the 
                            # default set of tracefiles for testing correctness and performance 
    ```
2. Using the `-V` option with the `mdriver` will indicate when each trace file is processed which may help you isolate errors.
3. Using a debugger such as `gdb` will help you easily isolate and identify memory errors. If you are unsure how to use `gdb`, refer back to lab 0. The `watch` command in `gdb` may be useful in figuring out which values changed unexpectedly.
4. C preprocessors macros are provided to help you with pointer arithmetic. Use them! Pointer arithmetic in memory managers is confusing and error-prone because of all the casting that is necessary. You can reduce the complexity significantly by using macros or inline functions.
5. Remember that wre are working with 64-bit machines. Pointers (which store memory addresses) take up 8 bytes of space. Notably, the following fact may be useful: `sizeof(size_t) == 8`.
6. The started code comes with helper functions called `check_heap()` and `examine_heap()`.  A good heap consistency checker will save you hours and hours when debugging your malloc package. You can use your heap checker to find out where exactly things are going wrong in your implementation (hopefully not in too many places!). Every time you change your implementation, one of the first things
you should do is think about how your `check_heap()` will change, what sort of tests need to be performed, and so on.
7. **Keep backups**. Whenever you have a working allocator and are considering making changes to it, keep a backup copy of the last working version. It is very common to make changes that inadvertently break the code and then have trouble undoing them. Better yet, consider adopting a version control system such as git!
8. **Start early!** It is possible to write an efficient malloc package with a few pages of code. However, we can guarantee that it will be some of the most difficult and sophisticated code you have written so far in your career. So start early, and good luck!
