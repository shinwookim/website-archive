---
layout: post
tufte: true
date: 2022-09-17
title: "Section 1.1 & 1.2 Review Solutions"
subtitle: "Solutions & Commentary to Accompany Section 1.1 & 1.2 Review"
---
<style>.red{color: red !important;}</style>

{%marginnote "copyright" "The questions presented here have been adapted from Kenneth Rosen's [Discrete Mathematics and Its Applications](https://www.amazon.com/Discrete-Mathematics-Applications-Kenneth-author/dp/1260091996/ref=pd_lpo_1?pd_rd_i=1260091996&psc=1), 8th Edition."%}

# Problem 1
Let $p$ be the proposition “*I will do every exercise in the textbook*” and $q$ be the proposition “*I will get an A in CS0441*”.

Express each of these as a combination of $p$ and $q$.

 a) I will get an A in CS0441 only if I do every exercise in the textbook.

 $q \implies p$
{: .red}

 b) I will get an A in CS0441 and I will do every exercise in the textbook.

 $ q \land q$
{: .red}

 c) Either I will not get an A in CS0441 or I will not do every exercise in the textbook.

 $\neg p \lor \neg q$
{: .red}

# Problem 2
Express your answer in terms of $e$: “*You can edit a protected Wikipedia entry*” and $a$: “*You are an administrator*”. 
You cannot edit a protected Wikipedia entry unless you are an administrator. 

 $e \implies a$ {%sidenote "contrapositive" "A student asked if [$\neg a \to \neg e$] would be a valid solution. The answer is YES. [$\neg a \to \neg e$] is the **contrapositive** of [$e \to a$], thus the two statements are logically equivalent. Therefore, either statements would be a valid answer."  %}
{: .red}


# Problem 3
Express your answer in terms of $g$: “*You can graduate*,” $m$: *“You owe money to the university*,” $r$: “*You have completed the requirements of your major*,” and $b$: “*You have an overdue library book*”.
 "You can graduate only if you have completed the requirements of your major and you do not owe money to the university and you do not have an overdue library book."

 $g \to (r \land (\neg m) \land (\neg b))$
{: .red}

# Problem 4
Show that these statements are inconsistent:
 “If Miranda does not take a course in discrete mathematics, then she will not graduate.”

 “If Miranda does not graduate, then she is not qualified for the job.”

 “If Miranda reads this book, then she is qualified for the job.”

 “Miranda does not take a course in discrete mathematics but she reads this book.”

<div class="red" markdown="1">
Let:

| Symbol | Meaning                                        |
| ------ | ---------------------------------------------- |
| t      | Miranda takes a course in discrete mathematics |
| g      | Miranda  graduates                             |
| r      | Miranda reads this book                        |
| q      | Miranda is qualified for the job               |

Translating these statements into symbols, we have:
 ¬ *t* → ¬ *g*, ¬ *g* → ¬ *q*, *r* → *q*, and ¬ *t* ∧ *r*.{%sidenote "methodology" "Previously, we discussed how to use *truth tables* to show that a system is consistent. While that methodology is applicable here (you want to show that there is no case where all the given statements are true), you have to go through all 2<sup>4</sup> cases which can be time-consuming. Instead, we can use a more direct approach and show that there is a contradiction among the statements (thereby concluding that the system is inconsistent). "%}

Suppose the these statements are consistent. The fourth statement tells us that ¬ *t* must be true. Therefore, by **modus ponens** with the first statement, we know that ¬ *g* is true, hence (from the second statement), that ¬ *q* is true. Also, the fourth statement tells us that *r* must be true, and so again modus ponens (third statement) makes *q* true. This is a **contradiction**: *q* ∧¬ *q*. 

Thus, the statements are inconsistent.
</div>

$$ $$