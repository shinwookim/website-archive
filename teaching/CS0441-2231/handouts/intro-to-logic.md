---
layout: post
date: 2022-09-01
title: "Intro to Propositional Logic (Notes)"
notes: "-"
---
A ***proposition*** is a declarative sentence that is either true or false.{% sidenote "prop-01" "Note that something like $x+2=11$ is not a proposition. This statement can neither be true or false. It depends on the value of x." %}

The ***negation*** of a proposition *p* is denoted by ¬ *p*.{% sidenote "negation-symbol" "In other courses you may see some instructors use the `~` symbol instead." %}

The ***conjunction***{% sidenote "conjunction" "Logical AND." %} of propositions *p* and *q* is denoted by *p* ∧ *q.*

The ***disjunction***{% sidenote "disjunction" "Logical OR. Note the difference between `OR` and `XOR`." %} of propositions *p* and *q*  is denoted by *p* ∨ *q*.

|: *p* :|: *q* :|: ¬ *p* :|: *p* ∧ *q* :|: *p* ∨ *q* :|
|:-----:|:-----:|:-------:|:-----------:|:-----------:|
|:  T  :|:  T  :|:   F   :|:     T     :|:     T     :|
|:  T  :|:  F  :|:   F   :|:     F     :|:     T     :|
|:  F  :|:  T  :|:   T   :|:     F     :|:     T     :|
|:  F  :|:  F  :|:   T   :|:     F     :|:     F     :|

---

If *p* and *q* are propositions, then *p* → *q* is a ***conditional statement*** or ***implication*** which is read as: **if *p*, then *q***.

| : Different Ways of Expressing p → q                                           :||
| ------------------------------------------------ | ----------------------------- |
| **if** *p*, **then** *q*                         | *p* **implies** *q*           |
| **if** *p*, *q*                                  | *p* **only if** *q*           |
| q **unless** *¬ p*                               | *q* **when** *p*              |
| *q* **if** *p*                                   |                               |
| *q* **whenever** *p*                             | *p* **is sufficient for** *q* |
| *q* **follows from** *p*                         | *q* **is necessary for** *p*  |
| **a necessary condition for** *p* **is** *q*     |                               |
| **a sufficient condition for** *q* **is** *p*    |                               |


q → p is the **converse** of p → q.

¬ q → ¬ p is the **contrapositive** of p → q.

¬ p → ¬ q is the **inverse** of p → q.

---

If *p* and *q* are propositions, then we can form the **biconditional** proposition *p* ↔ *q* , read as "*p* **if and only if** *q* ."

*p* **is necessary and sufficient for** *q*

**if** *p* **then** *q* **,and conversely**

*p **iff** q*{% sidenote "iff" "*if and only if*" %}

---

| Operator | Precedence |
| :------: | :--------: |
|    ¬     |     1      |
|    ∧     |     2      |
|    ∨     |     3      |
|    →     |     4      |
|    ↔     |     5      |