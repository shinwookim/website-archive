---
layout: tufte
title: hello.c
---
[Back](index.html)  
Below is the syntax highlighted version of [`hello.c`](hello.c). {%marginnote "lab-link" "Code from [Lab 0](https://cs0449.gitlab.io/sp2023/labs/00/)"%}
``` c
#include <stdio.h>
int main (int argc, char* argv[]){
    // Declare a variable
    int x;
    // Assign a variable
    x = 2;
    // Print a string and a variable
    printf("Hello world! x is currently %d \n", x);  
    return 0;
}
```

<style>pre{border:solid}</style>