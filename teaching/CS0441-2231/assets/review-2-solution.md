---
layout: post
tufte: true
title: "Solutions to More Practice on Proofs"
subtitle: "Solutions & Commentary to Accompany More Practice on Proofs"
---
<style>.red{color: red !important;}</style>

{%marginnote "copyright" "The questions presented here have been adapted from Kenneth Rosen's [Discrete Mathematics and Its Applications](https://www.amazon.com/Discrete-Mathematics-Applications-Kenneth-author/dp/1260091996/ref=pd_lpo_1?pd_rd_i=1260091996&psc=1), 8th Edition and Oscar Levin's Discrete Mathematics:An Open Introduction."%}

# Problem 1
Use a direct proof to show that the sum of two odd integers is even.

Let $n = 2k + 1$ and $m = 2l + 1$ be odd integers. Then $n+m=2k+1+2l+1=2k+2l+2=2(k+l+1)${%sidenote "1a" "To make this more explicit, we can write $2(k+l+1)$ as $2(\alpha)$, where $\alpha = k+l+1$" %} is even. 
{: .red}


# Problem 2
Show that if $n$ is an integer and $n^3 + 5$ is odd, then $n$ is even

<div markdown="1" class="red">

## Proof by Contraposition
Assume that $n$ is odd, so $n = 2k + 1$ for some integer $k$. Then $$n^3 +5 = (2k+1)^3+5=(8k^3+12k^2+6k+1)+5$$$$=8k^3+12k^2+6k+6= 2(4k^3 +6k^2 +3k +3).$$ Because $n^3 + 5$ is two times some integer, it is even. 

## Proof by Contradiction
Suppose that $n^3 + 5$ is odd and $n$ is odd. Because $n$ is odd and the product of two odd numbers is odd, it follows that $n^2$ is odd and then that $n^3$ is odd. But then $5 = (n^3 + 5) − n^3$ would have to be even because it is the difference of two odd numbers. Therefore, the supposition that $n^3 + 5$ and $n$ were both odd is wrong.
</div>


# Problem 3
Prove that if $n$ is an odd integer, then $n^3$ is an odd integer

<div markdown="1" class="red">

$n$ is odd, therefore $n = 2k + 1$ for some integer $k$. Then $$n^3 = (2k+1)^3=(8k^3+12k^2+6k+1)$$$$=8k^3+12k^2+6k+1= 2(4k^3 +6k^2 +3k +1)+1.$$  Since $n^3$ is 1 plus 2 times some integer it is odd.{%sidenote "3a" "To make this more explicit, we can write $2(4k^3 +6k^2 +3k +1)+1$ as $2(\alpha)+1$, where $\alpha = 4k^3 +6k^2 +3k +1$" %}
</div>

# Problem 4
Prove that if $x^3$ is irrational, then $x$ is irrational.

<div markdown="1" class="red">

Let's prove the contrapositive: If $x$ is rational, then $x^3$ is also rational.{%sidenote "4a" "If a number is not irrataional, it is rational"%}

Since $x$ is rational, we can write $x=\frac{p}{q}$ where $p,q$ are **integers** with $q \neq 0$.{%sidenote "4b" "$q \neq 0$ is an important note to make, since division by 0 is undefined."%}$\implies x^3 = (\frac{p}{q})^3=\frac{p^3}{q^3}$ which is irrational (because $p^3$ and $q^3$ are integers).

Therefore by contrapositive, we have show that:if $x^3$ is irrational, then $x$ is irrational.
</div>


# Problem 5
Prove that for all integers $a$ and $b$, if $a + b$ is odd, then $a$ is odd or $b$ is odd.

The problem with trying a direct proof is that it will be hard to separate $a$ and $b$ from knowing something about $a + b$. On the other hand, if we know something about $a$ and $b$ separately, then combining them might give us information about $a+b$. The contrapositive of the statement we are trying to prove is: for all integers $a$ and $b$, if $a$ and $b$ are even, then $a+b$ is even. {%sidenote "5a" "Note that our assumption that $a$ and $b$ are even is really the negation of $a$ is odd or $b$ is odd. We used De Morgan's law here."%}{: .red}
{: .red}
Thus our proof will have the following format:
{: .red}
1. Let $a$ and $b$ be integers. Assume that $a$ and $b$ are both even.
2. Then, $a=2k$ and and $b =2l$ for some integers $k$and $l$.
3. Now, $a+b=2k+2l=2(k+l)$
4. Since $k+l$ is an integer (let's called it $\alpha$), $a+b=2(k+l)=2(\alpha)$ is an even integer $\blacksquare$
{: .red}




