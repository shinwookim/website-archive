---
layout: tufte-fw
title: "Practice Exam I"
subtitle: "CS 0449 Introduction to Systems Software - Spring 2022"
---

## Directions
This exam is **closed book**. You may not use any type of calculator (it is not needed). Put all materials under your desk, including cell/smart phones, smart watches, headphones, calculators, laptops, tablets, etc. All questions are marked with their point value. There should be plenty of workspace provided in the exam booklet, but if you need extra pages, you may use blank pieces of paper.

**Show work**. Be sure to show all work and turn in any extra pages that you use. If you do not show your work, you may not receive full or partial credit for a correct or wrong answer. Write legibly. If your handwriting cannot be read, then you will not receive credit for an answer.

### x86-64 calling conventions

| Convention          | Register Names                     |
| ------------------- | ---------------------------------- |
| Argument registers  | `%rdi, %rsi, %rdx, %rcx, %r8, %r9`   |
| Preserved registers | `%rbp, %rbx, %r12, %r13, %r14, %r15` |
| Return value        | `%rax, %rdx`                         |



### Variable sizes (unless otherwise stated)

| `type`    | `sizeof(type)` |
| ------- | ------------ |
| `char`    | 1            |
| `short`   | 2            |
| `int`     | 4            |
| `long`    | 8            |
| `pointer` | 8            |


## Potpourri of multiple choice [20 points]
These are simple multiple-choice questions; you shouldn't need spend more than a minute or so in each. Fill in the circle corresponding to the right answer; there is only one correct answer.


**QUESTION 1.**	(2 points) Given the following numbers, which is the true statement?
```c
int i1 = 0xF9090000;
unsigned i2 = 0x890506F0;
unsigned i3 = 0x99090000;
int i4 = 0x19090000;
```
- [ ] Exactly four numbers are negative	□
	Exactly three numbers are positive
□
	Exactly two numbers are negative	□
	Exactly one number is positive

2.	(2 points) Read the following program, which is the true statement?
void func( int i ) {
    double d = i;
    float f = i;
    if ( (int)d == i ) printf(“Success\n”);
    if ( (int)f == i ) printf(“Success\n”);
}
□
	Will always print success twice	□
	Will always print at least 1 success
□
	Will sometimes print 1 success	□
	Will never print a success

3.	(2 points) Which of the following operations results in no loss of information?
Given variables f, d, and i declared as follows:
double d;
float f;
int i;
long l;
□
	(float)(double)f	□
	(double)(int)d
□
	(int)(float)i	□
	(long)(double)l


4.	(2 points) Given the two floating point numbers, which statement is true?
float f1 => 0x70010201
float f2 => 0x68753456

□
	They are both negative	□
	Only one is negative
□
	f1 > f2	□
	f1 < f2

5.	(2 points) Which bitwise operation is being implemented in the following function? 
int bitwise(int x, int y) {
    return ~( ~(x|x) | ~(y|y) );
}

□
	AND	□
	NAND
□
	OR	□
	NOR
□
	XOR	□
	XNOR

6.	(2 points) Which string operation is the following function implementing?
int string_operation(char* s) {
  int ss;
  for(ss = 0 ; *(s+ss)!=0 ; ss++);
  return ss;
}

□
	Get last character of a string	□
	Calculate the string length
□
	Determine if the string is terminated	□
	Initializes string elements to 0

7.	(2 points) Which of the following do you NOT expect to find in a function's activation frame?
□
	Local variables	□
	Return address
□
	Function name	□
	Saved registers
 
Read the assembly code and answer the following 3 questions about it.
0000000000000000 <_glurb>:
 0: 55                        pushq  %rbp
 1: 48 89 e5                  movq   %rsp, %rbp
 4: 48 89 7d f8               movq   %rdi, -8(%rbp)
 8: 48 89 75 f0               movq   %rsi, -16(%rbp)
 c: 48 8b 45 f8               movq   -8(%rbp), %rax
10: 48 03 45 f0               addq   -16(%rbp), %rax
14: 48 89 45 e8               movq   %rax, -24(%rbp)
18: 48 8b 45 e8               movq   -24(%rbp), %rax
1c: 48 3b 45 f8               cmpq   -8(%rbp), %rax
20: 0f 82 0e 00 00 00         jb     0x100003fa4 <_glurb+0x34>
26: 48 8b 45 e8               movq   -24(%rbp), %rax
2a: 48 3b 45 f0               cmpq   -16(%rbp), %rax
2e: 0f 83 08 00 00 00         jae    0x100003fac <_glurb+0x3c>
34: 48 c7 45 e8 ff ff ff ff   movq   $-1, -24(%rbp)
3c: 48 8b 45 e8               movq   -24(%rbp), %rax
40: 5d                        popq   %rbp
41: c3                        retq
8.	(2 points) Which of the following statements is true about function glurb?
□
	The function has 2 arguments and returns no values	□
	The function has 2 arguments and returns 1 value
□
	The function has 3 arguments and returns 1 value	□
	The function has 1 argument and returns no values

9.	(2 points) How many local variables (not arguments) are declared in function glurb?
□
	0	□
	1
□
	2	□
	3

10.	(2 points) What is the most likely type of the first argument of function glurb?
□
	char	□
	unsigned short
□
	int	□
	unsigned long
Data Representation [20 points]
Consider a 12-bit machine that uses two’s complement to represent signed integers.
An integer is 12-bits long, and a short is 6-bits long. Answer each of the questions below using the correct number of bits! E.g.: 
•	4-bit representation of a binary number: 1001
•	Representation of an unsigned decimal number: 131
•	Representation of a signed positive decimal number: 131
•	Representation of a signed negative decimal number: -131

Assume the following code executed:
short a = -32;
short b = -a;
int c = -a;
int d = -20;
unsigned u_e = d;


11.	(2 points) What is the binary representation of a?




Answer:	



12.	(2 points) What is the decimal representation b?





Answer:	



13.	(2 points) What is the decimal representation of c?




Answer:	


14.	(2 points) What is the binary representation of u_e?




Answer:	



15.	(2 points) What is the decimal representation of a>>1?




Answer:	



16.	(2 points) What is the binary representation of c>>1?





Answer:	



17.	(2 points) What is the 12-bit binary representation of x:
int x = TMin + TMin; // TMin is the smallest negative number




Answer:	




 
Consider the following 9-bit floating point representation based on the IEEE 754. 
•	There is 1 sign bit in the most significant bit.
•	 The next four bits are the exponent, with an exponent bias of 7.
•	The last 4-bits is the fraction.
The rules are like those in the IEEE standard (normalized, denormalized, representation of 0, infinity, and NAN). For the arithmetic expressions, truncate the fraction to fit into the fraction field.
18.	(2 points) Fill in the bitfield with the floating point number immediately before 4.0?



	S	Exp	Frac
Answer:	
		
19.	(2 points) Fill in the bitfield with the largest possible number? (not infinity)


	S	Exp	Frac
Answer:	
		
20.	(2 points) Fill in the bitfield with the representation of the smallest positive number (>0).



	S	Exp	Frac
Answer:	
		
Assembly interpretation [20 points]
21.	(2 points) Write the C code


blargh:
        leal    (%rdi,%rsi), %eax
        retq
int blargh( int x, int y) {

    return _____________________ ;
}

22.	(2 points) Write the C code


ipity:
        movl    (%rdi,%rsi,4), %eax
        retq
int ipity( int* a, unsigned long n) {

    return _____________________ ;
}


 
23.	(16 points) Reverse Engineering x86-64 to C.
Consider the following x86-64 assembly and fill-in the blanks in the C code

func:
        movl    $16, %edx
        xorl    %eax, %eax
.L3:
        movl    %esi, %ecx
        andl    $1, %ecx
        cmpl    $1, %ecx
        jne     .L2
        addl    %edi, %eax
.L2:
        addl    %edi, %edi
        sarl    $1, %esi
        subl    $1, %edx
        cmpl    $0, %edx
        jne     .L3
        ret	int func(int a, int b) {


    int result = _______________________ ;


    int counter = _______________________ ;


    do {


        if ( _______________________ ) {


            result = _______________________ ;


        }


        a = _______________________ ;


        b = _______________________ ;


        counter--;


    } while ( _______________________ );


    return _______________________ ;


}

Memory access [20 points]
For this section assume we are using a 64-bit x86-64 machine (little endian). The current state of the physical main memory (values in hex) is given below:
	Offset
Address	+0	+1	+2	+3	+4	+5	+6	+7
0x00	0b	94	be	f1	81	1d	bf	1a
0x08	12	42	89	b8	2a	b8	3a	2b
0x10	17	41	ca	f3	2a	f9	f7	6c
0x18	5f	a1	e0	78	56	a6	03	21
0x20	d8	5f	0b	d3	ef	ae	d7	fd
0x28	40	99	4f	84	9f	99	36	f7
0x30	ee	f3	51	50	e6	95	ef	6c
0x38	1b	81	40	c1	9a	0d	c7	7f

24.	(12 points) Based on the memory values shown above and the variable initialization below, write the hex value of each C expression using pointer arithmetic within the commented lines at their respective state in the execution of the given program. Write n/a in the blank if the value cannot be determined. Remember to write enough hex digits to fill up the width of the variable data type.
char*  cp = 0x10;    // char is 8b 
short* sp = 0x2A;    // short is 16b
int*   ip = 0x34;    // int is 32b
long*  lp;           // long AND pointers are 64b


a.	*(ip-2)	
b.	*sp	
c.	&lp[0]	
d.	(char**)sp + 0x40	
e.	*( (char*)ip + 3)	
lp  =  (long *)sp;
f.	(*lp)++;	


25.	(8 points) Still using the state of memory shown above, determine the values (in hex) stored in each destination register after each x86-64 instruction is executed as shown below. Assume %rdi has value 0x0000 0000 0000 0002 and %rsi has value 0x0000 0000 0000 0004. Write n/a in the blank if the value cannot be determined. 
Remember to use the appropriate bit widths for each register.
a.	mov 0x50(%rsi), %al	
b.	lea 0x50(%rsi), %rbx	
c.	mov (%rdi,%rdi,8), %cx	
d.	lea (,%rdi,4), %rdx	














 
Memory Management [20 points]

26.	(4 points) Analyze table showing the location where each memory segment starts (left), while the function on the right is running.


	stack
Start: 0x500	
	
Start: 0x400	
	heap
Start: 0x300	
	static data
Start: 0x200	
	code
Start: 0x100	
	void foo(int a, int b) {
    int *c = &a;
    long* v = malloc(8*100);
    const char* str = “Hello”;
    int arr[] = {1,2,3};
}

Match each expression on the left to an equivalent expression on the right. Fill in the left column with the letter that best matches. Use each letter only once.

	&v		
A.	&arr
	v		
B.	0x30C
	arr		
C.	0x508
	str		
D.	0x200

27.	(4 points) None of the heap allocation algorithms (first, next, best-fit) can allocate the heap space in an ideal manner. In your own words, explain why?
 
Read the following code carefully and answer the following questions.


/** Dynamic array data structure
      This data structure keeps track of the dynamic array.
      It is similar to how the queue_t in lab 3 keeps track
      Of the linked-list head/tail/size
**/
typedef struct {
    size_t size; // The current size of the array
    int *data;   // Pointer to dynamically allocated array
} varray_t;


/* Handle execution failures by printing a message and exiting. */
static void failure(char *msg) {
    fprintf(stderr, "Error: %s\n", msg);
    exit(1);
}

/* Create a new dynamic array with a size 1 
   and initialize its data to -1.
*/
varray_t *varray_init() {
    /* Allocate space for the data structure */
    varray_t *a = (varray_t*)malloc(sizeof(varray_t));
    if (a == NULL) failure("malloc failed");

    /* Allocate space for data (one integer) */
    a->data = (int*)malloc(1*sizeof(int));
    
    /* Check the allocated  data space to make sure we got memory */
    if (a->data == NULL) { free(a); failure("malloc failed"); }

    /* Initialize data element to -1 */
    a->data[0] = -1;
    a->size = 1;

    /* Return a pointer to the dynamic array */
    return a;
}


 
28.	(4 points) Implement function varray_get that accesses the array. You will be evaluated on the correctness of your implementation, the safety of your implementation, and the conciseness of your solution.
/* 
    Return the value at the specified position. E.g. a->data[pos] 
    If "pos" is higher than we have allocated, return -1.
    Otherwise, return the data in position “pos”.
    Don't forget to check for NULL pointers!
 */
int varray_get(varray_t *a, size_t pos) { ... }














}

29.	(4 points) Implement function varray_deinit that frees all dynamically allocated memory. You will be evaluated on the correctness of your implementation, the safety of your implementation.

/* 
   Free up the memory allocated for the array. 
   Remember to free up ALL the memory that was allocated. 
 */
void varray_deinit(varray_t *a) {





}


















The End!!
You’re done! Congratulations! :D
Now, make sure every sheet contains at least your pitt username!
