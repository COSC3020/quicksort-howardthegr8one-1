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

The pivot function in a worst-case would always pick either the smallest or largest unsorted element in the array, which would mean that for every call to pivot only a single element is put in the correct position. Furthmore this behavior would mean that the element is moved to either end of the array taking some $(n - k)$ runtime, $k$ being the correct position for that element, and being a value less than the length of the array.

The while loop in the quicksort function would run either from $lo$ moving toward the end of the array, $hi$ moving toward the beginning of the array, or the two meeting somewhere in the middle, however for just the worst-case we're only considering $lo$ or $hi$ moving toward one end of the array, and in both of these cases the loop iterates $(n - 2)$ times.

Since pivot is nested in the while loop, and if we ignore lower terms and constants we're left with a worst-case runtime of $\Theta(n^2)$
