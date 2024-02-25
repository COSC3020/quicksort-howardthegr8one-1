[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/ZLHpg3lN)
# Quicksort

Implement an iterative (no recursive calls) version of quicksort. Use the
template I've provided in `code.js`. Test your new function; I've provided some
basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

Hint: To make qicksort iterative, think about the part of the array each
recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.

## Worst-Case Runtime Analysis

The pivot function in a worst-case would start with $lo = 0$ meaning $(lo + 1) = 1$ until the end of the array or $arr.length - 1$, or $(n-2)$ times. 

The while loop in the quicksort function would run either from $lo$ moving toward the end of the array, $hi$ moving toward the beginning of the array, or the two meeting somewhere in the middle, and in either three cases the loop iterates $(n-1)$ times. 

Putting this together gives us:

$T(n) = (n-2) + (n-1)\cdot[(n-2)+(n-2)]$

$= (n-2) + (n-1)(2n-4)$

$= (n-2) + (2n^{2} -4n -2n + 4)$

$= (n-2) + (2n^{2} - 6n + 4)$

$= n - 2 + 2n^{2} -6n + 4$

$= 2n^{2} -5n + 2,  \text{ignoring constanats. . .}$

$= n^{2} - n$

Thus the worst-case runtime for this implementation is $\Theta(n^2)$
