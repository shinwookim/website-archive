---
layout: bootstrap
title: "Practice Exam I"
subtitle: "CS 0449 Introduction to Systems Software - Spring 2023"
---

<style>
input{width:auto; margin-right: 1em;}
.task-list-item{list-style:none;}
details{margin-bottom: 2em;}
</style>

## Directions
This exam is **closed book**. You may not use any type of calculator (it is not needed). Put all materials under your desk, including cell/smart phones, smart watches, headphones, calculators, laptops, tablets, etc. All questions are marked with their point value. There should be plenty of workspace provided in the exam booklet, but if you need extra pages, you may use blank pieces of paper.

**Show work**. Be sure to show all work and turn in any extra pages that you use. If you do not show your work, you may not receive full or partial credit for a correct or wrong answer. Write legibly. If your handwriting cannot be read, then you will not receive credit for an answer.

### Variable sizes (unless otherwise stated)

| `type`    | `sizeof(type)` |
| --------- | -------------- |
| `char`    | 1              |
| `short`   | 2              |
| `int`     | 4              |
| `long`    | 8              |
| `pointer` | 8              |

### Files documentation
- `fopen(const char *path, const char *mode);`
- `int fclose(FILE *stream);`
- `size_t fread(void *ptr, size_t size, size_t n_items, FILE *stream);`
- `size_t fwrite(void *ptr, size_t size, size_t n_items, FILE *stream);`
- `int fseek(FILE *stream, long offset, int whence);` where `whence` is one of:
  - `SEEK_SET`: Move relative to the beginning of the file
  - `SEEK_CUR`: Move relative to the current cursor position
  - `SEEK_END`: Move relative to the end of the file

---

## 1. Data Representation [25 points]
**QUESTION 1**. Given a CPU that uses 2’s complement, answer the following questions about C variables and datatypes.  
**PART A**. Mark the **false** statement.
- [ ] `-1 > 0`
- [ ] `-1 > (unsigned)0`
- [ ] `0 == - 0`
- [ ] `-1 == (unsigned)-1`
<details markdown="1">
<summary><strong>Show Solution</strong></summary>
**(3 points)** 
- [ ]`-1 > 0` is **false** for signed numbers.
- `-1 > (unsigned) 0` is **true**. When comparing unsigned and signed numbers, the variables are all converted (*coereced*) into unsigned forms. Therefore, as an unsigned number, `-1` (which is `1111....1111` in binary) becomes the largest unsigned number which is always greater than zero.
- `0 == -0` is **true**. 
- `-1 == (unsigned) -1` is **true** since comparisons between unsigned and signed numbers force all numbers to be unsigned. 

Hence, `-1 > 0` is the only false statement.

For more information on two's complement, review your CS447 notes and see [this calculator](https://www.omnicalculator.com/math/twos-complement/).
</details>

**PART B**. Given the following variables, select **ALL** true statements.
```c
int x = foo();  /* arbitrary value */
int y = bar();  /* arbitrary value */
unsigned ux = x;
unsigned uy = y;
```
- [ ] `x < 0 || -x <= 0`
- [ ] `x+y == uy+ux`
- [ ] `x > 0 || -x >= 0`
- [ ] `(x * x) >= 0`

<details markdown="1">
<summary><strong>Show Solution</strong></summary>
**(3 points) No partial credits were given for this problem.**  
`x < 0 || -x <= 0` is the only true statement.  
</details>

**PART C**. Select ALL strings that get printed by this program.
```c
unsigned char x = 255;
signed char y = x;
if (x > 0) printf("x is positive\n");
if ((x+1) > 0) printf("x+1 is positive\n");
if (y < 0) printf("y is negative\n");
if ((y+1) < 0) printf("y+1 is negative\n");
```
- [ ] `x` is positive
- [ ] `x+1` is positive
- [ ] `y` is negative
- [ ] `y+1` is negative

<details markdown="1">
<summary><strong>Show Solution</strong></summary>
(3 points) No partial credits were given for this problem.  
"`x` is positive" **and** "`y+1` is negative"
</details>

---
**QUESTION 2**. (9 points) Consider a 16-bit machine that uses two’s complement to represent signed integers. An integer is 16-bits long, and a short is 8-bits long. Answer each of the questions below using the correct number of bits!  
E.g.: 8-bit representation of a binary number: `10010011`  
Assume the following code executed:
```c
short a = 127;
short b = a+1;
int c = a+1;
int d = -128;
unsigned u_e = d;
```

**PART A**. What is the **decimal** representation `b`?
<details markdown="1">
<summary><strong>Show Solution</strong></summary>
**(3 points)** -128
</details>

**PART B**. What is the **decimal** representation of `c`?
<details markdown="1">
<summary><strong>Show Solution</strong></summary>
**(3 points)** 128
</details>

**PART C**. What is the **binary** representation of `u_e`?
<details markdown="1">
<summary><strong>Show Solution</strong></summary>
**(3 points)** 1111 1111 1000 0000
</details>

---
**QUESTION 3**. Answer the following questions about floating point variables.  
**PART A**. Read the following program, which is the true statement?
```c
void func(int i, float f) {
    if ((int)(double)i == i) printf("Success\n");
    if ((float)(int)f == f) printf("Success\n");
}
```
- [ ] Always prints success twice 
- [ ] Always prints success at least once
- [ ] Prints success exactly once 
- [ ] Will never print a success
<details markdown="1">
<summary><strong>Show Solution</strong></summary>
**(3 points)** Always prints success at least once
</details>

**PART B**. (4 points) Given the following program, what is the ouput?
```c
float f1 = 1.0;
float f2 = 0.0;
for (int i = 0; i < 10; i++)
    f2 += 1.0/10.0;
printf("f1 == f2? %s\n", f1 == f2 ? "yes" : "no" );
```
<details markdown="1">
<summary><strong>Show Solution</strong></summary>
**(4 points)** f1 == f2? no
</details>

---
## Memory and complex datatypes [40 points]
**QUESTION 4**. (3 points) What is a pointer in C?
- [ ] A variable that stores a memory address 
- [ ] An operator that can access a struct using its address
- [ ] The same thing as an unsigned long 
- [ ] The same as an array
<details markdown="1">
<summary><strong>Show Solution</strong></summary>
**(4 points)** A variable that stores a memory address 
</details>

---
**QUESTION 5**. (6 points) Pointerspointers. Pointerspointerspointers. 
```c
void main(void) {
    int data = 0x6666;
    int* dataptr = &data;
    int** dataptrptr = &dataptr;
    int*** dataptrptrptr = &dataptrptr;
    printf("%x\n", ***dataptrptrptr);
}
```
Consider the code above and assume:
1. data is at address 0x0010
2. dataptr is at address 0x1550,
3. dataptrptr is at address 0x1440, and
4. dataptrptrptr is at address 0x1330
NOTE: Assume both int and pointers are 32 bits!

**PART A**. (3 points) What is the value printed by the program above?
- [ ] 0x6666 
- [ ] 0x0010 
- [ ] 0x1550
- [ ] 0x1330 
- [ ] 0x1337 
- [ ] 0x1440
<details markdown="1">
<summary><strong>Show Solution</strong></summary>
**(4 points)** 0x6666
</details>

**PART B**. (3 points) What is the value of the expression `**dataptrptrptr+1`?
- [ ] 0x1550 
- [ ] 0x1554 
- [ ] 0x0011
- [ ] 0x1551 
- [ ] 0x0014 
- [ ] 0x0010
<details markdown="1">
<summary><strong>Show Solution</strong></summary>
**(4 points)** 0x0014
</details>

**QUESTION 6**. (6 points) Arrays and strings  
**PART A.** (3 points) What is the output of the code below?
```c
 int main(void) {
    int x = 1;
    int *p = &x;
    *p = 5;
    printf("%d", x);
    return 0;
}
```
<details markdown="1">
<summary><strong>Show Solution</strong></summary>
**(4 points)** 5
</details>

**PART B**. (3 points) What value is printed by the following code?
```c
char string[6] = "Hello";
unsigned long len = strlen(string);
string[len] = 42;
string[4] = '\0';
printf("%lu", strnlen(string, len));
```
- [ ] 0 
- [ ] 4 
- [ ] 5 
- [ ] 6
<details markdown="1">
<summary><strong>Show Solution</strong></summary>
**(4 points)** 4
</details>

---
**QUESTION 7.** (3 points) Given the following code, which of the following statements is true?
```c
typedef struct
{
    int year;
    int semester;
} midterm_t;
midterm_t variable;

variable.year = 2023;
variable.semester = 4;

printf("%p %p\n", &variable.year, &variable.semester);
```

Output: 
```
0x404034
0x404038
```
- [ ] `*(&variable+1) == 4`
- [ ] `&variable.year+1 == 4`
- [ ] `*(&variable.year+1) == 4`
- [ ] `(&variable)->year == 4`
<details markdown="1">
<summary><strong>Show Solution</strong></summary>
**(4 points)** `*(&variable.year+1) == 4`
</details>

---
For this section assume we are using a 64-bit x86-64 machine (little endian). The current state of the physical main memory (values in hex) is given below:

||||Offset|||
| Address | +0  | +1  | +2  | +3  | +4  | +5  | +6  | +7  |
| ------- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x00    | f7  | 48  | 39  | 65  | a6  | 0a  | f8  | 6f  |
| 0x08    | 21  | 1e  | 02  | 15  | 90  | e9  | f8  | bd  |
| 0x10    | e8  | 63  | 18  | 0c  | b0  | 76  | de  | 31  |
| 0x18    | e5  | cc  | 90  | 1b  | 67  | 01  | e7  | a7  |
| 0x20    | 19  | 6c  | ee  | 0e  | 60  | 06  | 84  | 09  |
| 0x28    | f4  | 76  | db  | 61  | b8  | 14  | 4f  | e9  |
| 0x30    | 3f  | 48  | ca  | db  | 64  | 30  | 6e  | 15  |
| 0x38    | 26  | e8  | 39  | 5d  | 67  | c9  | a2  | 03  |

**QUESTION 8**. (12 points) Based on the memory values shown above and the variable initialization below, write the hex value of each C expression using pointer arithmetic within the commented lines at their respective state in the execution of the given program. Write **n/a** in the blank if the value cannot be determined. **Remember to write enough hex digits to fill up the width of the variable data type.**
```C
char*  cp = 0x10;    // char is 8b 
short* sp = 0x2C;    // short is 16b
int*   ip = 0x24;    // int is 32b
long*  lp = 0x28;    // long AND pointers are 64b
```
1. `*ip`
2. `sp[-2]`
3. `&lp[0]`
4. `cp+16`
5. `(char*********)sp+1`
6. `*( (char*)ip - 3)`
 
---

**QUESTION 9**. (6 points) Give the different memory segments listed below to the left, and the function on the right.
<div class="row">
<div class="col" markdown="1">
```
|—————————|
| STACK   |
|—————————|
|         |
|—————————|
| HEAP    |
|—————————|
| STATIC  |
| DATA    |
|—————————|
| code    |
|—————————|
```
</div>
<div class="col" markdown="1">

```c
int my_number = 42;
void foo(int a, int b) {
    static int c = 2;
    long* v = malloc(8*100);
    const char* str = "Hello";
    int arr[] = {1,2,3};
}
```
</div>
</div>


Fill in each entry on the left with the segment where the address listed on the right is located.
- (A)`&c`
- (B)`&v`
- (C)`v` 
- (D)`&arr`
- (E)`&str[3]`
- (F)`&str`

**QUESTION 10**. We discussed two different techniques to keep track of array/string size. Describe them and discuss the advantages/disadvantages of each one of them.
<details markdown="1">
<summary><strong>Show Solution</strong></summary>
**(4 points)**
1. Keep track of the array/string size explicitly by storing a "**size variable**". This allows us to calculate size very quickly (simply read the size variable), but since this size variable is of a fixed size, there is a maximum value for this variable. For instance, if size was a 4 Byte integer, an array could only hold *2<sup>32</sup>-1* elements at most.
2. Keep track of the array/string implicitly by storing a **sentinel value** (such as `\0`) at the end of the array. This allows us to have infinitely long variables (the issue of fixed size variables are fixed!), but each time we need to search the entire array to calculate the size (*O(n)*).
</details>

## File I/O [15 points]

**QUESTION 11**. (3 points) Which of the following modes opens a file that doesn’t yet exist for reading and writing?
- [ ] "`r+`" 
- [ ] "`w`"
- [ ] "`w+`" 
- [ ] "`r`"

**QUESTION 12**. (12 points) Record Metadata.
I need to store the metadata for my record collection. To do that, I want to create a binary file that contains for each track on a record. To keep the data on the record itself, I’ll include the following header on each file.

| Offset (B) | Size (B) | Field description    |
| ---------- | -------- | -------------------- |
| 0          | 4        | Number of tracks     |
| 4          | 100      | Album title (string) |

Then, for each track on the record, I’ll include the following information in the file.

| Offset (B) | Size (B) | Field description    |
| ---------- | -------- | -------------------- |
| 0          | 2        | Track duration       |
| 2          | 100      | Track title (string) |

**PART A**. (2 points) Fill the blanks with the data type appropriate for each struct member. AlbumInfo is a struct that represents the Album header, and TrackInfo is a struct that represents a track.
```c
#pragma pack(1)
typedef struct {
    __(A)__ n_tracks;
    __(B)__ title[100];
} AlbumInfo;

#pragma pack(1)
typedef struct {
    __(C)__ duration;
    __(D)__ title[100];
} TrackInfo;
```
<details markdown="1">
<summary><strong>Show Solution</strong></summary>
**(2 points)**
- (A) `int`. The number of tracks are 4 bytes. Hence, we need a variable type capable of holding 4 bytes of data.
- (B) `char`. In C, Strings are simply character arrays (or pointers).
- (C) `short`. The track duration is 2 bytes. Hence, we need a variable type capable of holding 2 bytes of data.
- (D) `char`. In C, Strings are simply character arrays (or pointers).
</details>

**PART B**. (10 points) Now, complete the code below that prints the album information contained in file “myalbum”. It should output something like the following output:
```
Album: Great title
Number of tracks: 2
  365:  My Album
  123:  My Album
```
Rubric: 
- 4 points – Read the header into variable ai
- 4 points – Read all tracks information, one at a time, into variable ti
- 2 points – Print the header and track info correctly

```c
int main(void) {
    FILE* f = fopen("myalbum", "r");

    AlbumInfo ai;
    TrackInfo ti;

    // YOUR ANSWER HERE

    fclose(f);

    return 0;
}
```
<details markdown="1">
<summary><strong>Show Solution</strong></summary>
**(10 points)**

```c
int main(void) {
    FILE* f = fopen("myalbum", "r");

    AlbumInfo ai;
    TrackInfo ti;

    /* ---START SOLUTION--- */
    fread(&ai.n_tracks, 4, 1, f);   // Read the first four bytes of the file
                                    // which contains the number of tracks
    
    fread(ai.title, 1, 100, f);     // Read the next 100 bytes of the file
                                    // which contains the album title
                                    // NOTE: calling fread moves the file pointer

    printf("Album: %s\nNumber of tracks: %d\n", ai.title, ai.n_ntracks);

    for(int i=0; i< ai.n_tracks; i++){ // Iterate through the file 0 .. n_tracks
        fread(&ti, sizeof(ti), 1, f);  // while reading the next `sizeof(ti)` bytes
        printf("%d: %s\n", ti.duration, ti.title);
    }
    /* ---END SOLUTION--- */

    fclose(f);
    return 0;

```
</details>

## C code [20 points]
**QUESTION 13**. (2 points) Given the behavior of the C Preprocessor what is the output of this code?
```c
#define MAGIC(x, y) x + y

int main(void) {
    printf("%d", MAGIC(4, 1) * 4);
}
```
<details markdown="1">
<summary><strong>Show Solution</strong></summary>
**(2 points)**

</details>


**QUESTION 14**. (3 points) Call the “program” underneath such that it prints “Success”?
```c
int main(int argc, char *argv[]) {
    if (!(argc-2)) printf(“%s”, argv[1]);
    return 0;
}
```



**QUESTION 15**. (5 points) The following function allocates the int array in the heap, and not in the stack. Could the programmer allocate the array in the stack of the function? Explain why?
```c
int *create_array (int size) {
    int *my_array = malloc(sizeof(int)*size);
    return my_array;
}
```

**QUESTION 16**. (5 points) Read the following code. It compiles without problems, yet, there is a critical issue with it. Describe the issue, why it happens, and how you’d solve it.
```c
typedef struct {
    long a;
    char b;
    int c;
} MyStruct;

int main(void) {
    MyStruct *my_struct;
    my_struct = malloc(sizeof(long)+sizeof(char)+sizeof(int));
    if (!my_struct) return -1; // Failed to malloc
    printf(“Successfully allocated the struct\n”);
    return 0;
}
```
 
**QUESTION 17**. (5 points) Based on a true story. The following code is supposed to print all negative elements of an array, and return immediately if a zero if found:
```c
int main()
{
  int array[] = {1,-54,-34,32,-43,22,-11,12,0,87,-42};
  int n_items = 11, i = 0;
  while ( i<n_items ) {
    
    if ( array[i] != 0 ) {
        if ( array[i] < 0) {
            printf("%d\n", array[i]);
            i++;
        }
    } else {
      return 0;
    }
  }
  return 0;
}
```
However, the code doesn’t print anything. Find the single bug in the program and explain why nothing is printed.

<script>
const checkboxes = document.getElementsByClassName('task-list-item-checkbox');

Array.prototype.forEach.call(checkboxes, function (e) {
  e.removeAttribute('disabled');
});

</script>