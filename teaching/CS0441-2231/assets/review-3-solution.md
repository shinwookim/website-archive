---
layout: post
tufte: true
title: "Counting (Chapter 6) Review"
subtitle: "Select problems from the text (&copy; McGraw Hill)"
---
<style>.red{color: red !important;}</style>

## Problem 1
How many strings of all the first seven letters of the alphabet (A, B, C, D, E, F, G) are there that contain no repeated letters and begin or end with a vowel (A or E)?

<p class="red" markdown="1">

$$2 \times6!  + 2\times 6! -2\times5!$$  

First, we need to count the number of words that begin with a vowel, plus the number of words that end with a vowel. Then we subtract the number of words that have been counted twice in this process.  

<br />

If the word begins with a vowel, there are two choices, `A` and `E`, for the first letter; once one of these two letters is chosen, there are $6!$ ways to place the remaining six letters. Likewise, if the word ends with a vowel, there are two choices, A and E, for the final letter; once one of these two letters is chosen, there are $6!$ ways to place the remaining six letters. In this process, we have counted strings of the form `A _ _ _ _ _ E` and `E _ _ _ _ _ A` twice. There are $2 \times 5!$ such words, which we subtract to obtain $2 \times6!  + 2\times 6! -2\times5!$.

</p>

## Problem 2
When you buy a Powerball
ticket, you select 5 different white numbers from among the numbers 1 through 59 (order of selection does not matter), and one red number from among the numbers 1 through 35. How many different Powerball tickets can you buy?

You need to select 5 distinct white numbers, meaning there are $C(59, 5) = 5, 006, 386$ ways to do this. Then you can pick the red number $C(35, 1) = 35$ ways. So the total number of tickets is $$C(59, 5) \times P(35, 1) = 5, 006, 386 \times 35 = 175, 223, 510.$$
{: .red}

## Problem 3
How many students, each of whom comes from one of the $50$ states, must be enrolled in a university to guaranteed that there are at least 100 who come from the same state?

Let there by $50$ boxes, one per state. We want to find the minimal $N$ so that $\lceil \frac{N}{50} \rceil=100$. Letting $N=5000$ is too much, since the remainder is $0$. We want a remainder of 1 so that let $N=50\times99+1=4951$.
{: .red}

## Problem 4
What is the coefficient of $x^9$ in $(2 − x)^{19}$?

$-2^{10} {19 \choose 9} = −94,595,072$
{: .red}

## Problem 5
A book publisher has 3000 copies of a textbook. How many ways are there to store these books in their three warehouses if the copies of the book are all the same?


This is the case of indistinguishable objects and distinguishable boxes. Thus, $C(3000+3-1, 3000)= 4,504,501$ ways to store the books.
{: .red}
