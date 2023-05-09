#include <stdio.h>
/* Import the C Standard Library to us malloc() and free()*/
#include <stdlib.h>

void foo(long n)
{
    /* Allocate a block of n longs */
    long *p = (long *)malloc(n * sizeof(long)); // malloc() accepts an argument of size bytes
    if (p == NULL)                              // always check return value of malloc()
    {                                           // handle if malloc() returns null
        perror("malloc");                       // here we print error message
        exit(0);                                // and exit
    }
    for (long i = 0; i < n; i++) // Initialize allocated block
        p[i] = i;                // Do something with p
    free(p);                     // Return allocated block to the heap
} // Always free after malloc()
