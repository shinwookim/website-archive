---
title: Using debuggers
subtitle: A Brief Introduction to GDB   
layout: tufte
published: true
---

<center>Adapted from materials developed by Samuel Huang (University of Maryland)</center>



## What is GDB?
The **GNU Debugger**{% sidenote "debugger" "A debugger is a program that is used to run other programs. In a debugger, a program may be executed, debugged, or a combination of both. Further, debuggers provide commands in order that data may be examined."%} (**GDB**) is a portable debugger that runs on many *Unix-like systems* and works for many programming languages, including Ada, **C**, C++, Objective-C, Free Pascal, Fortran, Go, and partially others. It allows us to inspect what the program is doing at a certain point during execution. It's extremely helpful for debugging errors like segmentation faults may be easier to find with the help of GDB.
- Learn more about GDB: [https://www.sourceware.org/gdb](https://www.sourceware.org/gdb)

## Additional steps when compiling
Normally, you would compile a program like:
``` sh
gcc [flags] <SOURCE FILE> -o <OUTPUT FILE>
```
For example:
``` sh
gcc -Wall -Werror -ansi -pedantic-errors prog1.c -o prog1.x
```

However, to use GDB with your program, you need to add a `-g` option to enable built-in debugging support (which gdb needs):
``` sh
gcc [other flags] -g <SOURCE FILE> -o <OUTPUT FILE>
```
For example:
``` sh
gcc -Wall -Werror -ansi -pedantic-errors -g prog1.c -o prog1.x
```

## Starting up GDB
If you try running GDB (`gdb` or `gdb program1`), you’ll get a prompt that looks like this:
``` sh
(gdb)
```

If you didn’t specify a program to debug, you’ll have to load it in now:{%sidenote "load-file" "Here, `prog1.x` is the program executable you want to load, and `file` is the command to load it."%}
``` sh
(gdb) file prog1.x 
```

If you've compiled correctly (using the `-g` flag), you should be able to display your source code within gdb:
``` sh
(gdb) layout src
```

### Before we get any further
`gdb` has an interactive shell, much like the one you use as soon as you log into the linux machines. It can recall history with the
arrow keys, auto-complete words (most of the time) with the `TAB` key, and has other nice features.

If you’re ever confused about a command or just want more information, use the “`help`” command, with or without an argument:
``` sh
(gdb) help [command]
```
You should get a nice description and maybe some more useful tidbits ...

## Running the program
To run the program, just use: {%sidenote "CLI-arg" "You can pass in command line arguments on gdb just as you would in your shell. Simply add your arguments after the `run` command: `run 4 5 +`"%}
``` sh
(gdb) run
```

This runs the program. If it has no serious problems (i.e. the normal program didn’t get a segmentation fault, etc.), the program should run fine here too. If the program did have issues, then you (should) get some useful information like the line number where it crashed, and parameters to the function that caused the error:
``` sh
Program received signal SIGSEGV, Segmentation fault. 0x0000000000400524 in sum array region (arr=0x7fffc902a270, r1=2, c1=5, r2=4, c2=6) at sum-array-region2.c:12
```

### So what if I have bugs?
Okay, so you’ve run it successfully. But you don’t need gdb for that. What if the program isn’t working?
<br /><br />
Chances are if this is the case, you don’t want to run the program without any stopping, breaking, etc. Otherwise, you’ll just rush past the error and never find the root of the issue. So, you’ll want to step through your code a bit at a time, until you arrive upon the error.
This brings us to the next set of commands. . .

#### Setting breakpoints
Breakpoints can be used to stop the program run in the middle, at a designated point. The simplest way is the command “`break`.” This sets a breakpoint at a specified file-line pair:
``` sh
(gdb) break file1.c:6
```
- This sets a breakpoint at line 6, of file1.c. {%sidenote "breakpoint-short" "Since setting breakpoints are so common, there is a shorthand way to do this. Instead of the full `break` command, you can simply use `b 6` to set a break point at line 6. This kind of short hand exists for many other commands including `run` (`r`), `continue`(`c`), etc. "%}

Now, if the program ever reaches that location when running, the program will pause and prompt you for another command.{%sidenote "multiple-breakpoints" "You can set as many breakpoints as you want, and the program should stop execution if it reaches any of them."%}

You can also tell gdb to break at a particular function. Suppose you have a function my func: 
```c
int my func(int a, char *b);
```

You can break anytime this function is called:
``` sh
(gdb) break my func
```

##### Now what?
Once you’ve set a breakpoint, you can try using the `run` command again. This time, it should stop where you tell it to (unless a fatal error occurs before reaching that point). You can proceed onto the next breakpoint by typing "`continue`" {%sidenote "continue" "Typing `run` again would restart the program from the beginning, which isn’t very useful"%}.
``` sh
(gdb) continue
```
You can single-step (execute just the next line of code) by typing `“step`”. This gives you really fine-grained control over how the program proceeds. You can do this a lot...
``` sh
(gdb) step
```
Similar to “`step`,” the “`next`” command single-steps as well, except this one doesn’t execute each line of a sub-routine, it just treats it as one instruction {%sidenote "enter-key" "Typing “`step`” or “`next`” a lot of times can be tedious. If you just press `ENTER`, gdb will repeat the same command you just gave it. You can do this a bunch of times."%}.
``` sh 
(gdb) next
```
##### More about breakpoints
Breakpoints by themselves may seem too tedious. You have to keep stepping, and stepping, and stepping...
<br /><br />
Once we develop an idea for what the error could be (like dereferencing a `NULL` pointer, or going past the bounds of an array), we probably only care if such an event happens; we don’t want to break at each iteration regardless. So ideally, we’d like to condition on a particular requirement (or set
of requirements). Using conditional breakpoints allow us to accomplish this goal.

###### Conditional breakpoints
Conditional breakpoints are just like regular breakpoints, except that you get to specify some criterion that must be met for the breakpoint to trigger. We use the same break command as before:
``` sh
(gdb) break file1.c:6 if i >= ARRAYSIZE
```
This command sets a breakpoint at line 6 of file `file1.c`, which triggers only if the variable `i` is greater than or equal to the size of
the array (which probably is bad if line 6 does something like `arr[i]`). Conditional breakpoints can most likely avoid all the unnecessary stepping, etc.

#### Querying other aspects of the program
So far you’ve learned how to interrupt program flow at fixed, specified points, and how to continue stepping line-by-line. However, sooner or later you’re going to want to see things like the values of variables, etc. This might be useful in debugging. :)
The `print` command prints the value of the variable specified, and `print/x` prints the value in hexadecimal:
``` sh
(gdb) print my var
(gdb) print/x my var
```

#### Setting watchpoints
Whereas breakpoints interrupt the program at a particular line or function, watch points act on variables. They pause the program whenever a watched variable’s value is modified. For example, when we run the following command:

``` sh
(gdb) watch my var
```
the program will interrupt and print out the old and new values `my var`’s value is modified. {%sidenote "watchpoint" "
You may wonder how gdb determines which variable named my var to watch if there is more than one declared in your program. The answer (perhaps unfortunately) is that it relies upon the variable’s scope, relative to where you are in the program at the time of the watch. This just means that you have to remember the tricky nuances of scope and extent :(."%}

#### Other useful commands
- `backtrace` - produces a stack trace of the function calls that lead to a seg fault (should remind you of Java exceptions)
- `where` - same as `backtrace`; you can think of this version as working even when you’re still in the middle of the program
- `finish` - runs until the current function is finished
- `delete` - deletes a specified breakpoint
- `info breakpoints` - shows information about all declared breakpoints

### Fun with pointers
Who doesn’t have fun with pointers? First, let’s assume we have the following structure defined:
``` c
struct entry {
    int key;
    char *name;
    float price;
    long serial_number;
};
```
Maybe this struct is used in some sort of hash table as part of a catalog for products, or something related.
<br />
<br />
Now, let’s assume we’re in gdb, and are at some point in the execution after a line that looks like:

``` c
struct entry * e1 = <something>;
```
We can do a lot of stuff with pointer operations, just like we could in C.
- See the value (memory address) of the pointer:
``` sh
(gdb) print e1
```
- See a particular field of the struct the pointer is referencing:
``` sh
(gdb) print e1->key
(gdb) print e1->name
(gdb) print e1->price
(gdb) print e1->serial number
```

You can also use the dereference (`*`) and dot (`.`) operators in place of the arrow operator (`->`):
``` sh
(gdb) print (*e1).key
(gdb) print (*e1).name
(gdb) print (*e1).price
(gdb) print (*e1).serial number
```
See the entire contents of the struct the pointer references (you can’t do this as easily in C!):
``` sh
(gdb) print *e1
```
You can also follow pointers iteratively, like in a linked list:
``` sh
(gdb) print list prt->next->next->next->data
```

