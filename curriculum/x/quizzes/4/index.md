# Quiz 4

## Question 1 of 3

{: style="list-style-type: lower-alpha"}
1. In your own words, what is a pointer?
1. If `s` is of type `string`, in what sense is `s` a pointer?
1. If `s` and `t` are of type `string`, why can we not use `s == t` to check whether `s` and `t` contain the same characters?

## Question 2 of 3

Recall [this video](https://www.youtube.com/watch?v=i3gv2zOmJiA) from lecture, which shows an image being "enhanced" to reveal additional details in the reflection of a person's sunglasses. Why is that process likely unrealistic?

## Question 3 of 3

Recall that, in lecture, we saw how every time we call a function in C, some memory is allocated on the stack to store that function's variables. Consider the following C program, which attempts to take a number and print out its square.

```
1  #include <stdio.h>
2
3  void square(int x);
4
5  int main(void)
6  {
7      int x = 5;
8      square(x);
9      printf("%i\n", x);
10 }
11
12 void square(int n)
13 {
14     n = n * n;
15 }
```

But when compiled and run, this program prints out the number 5, instead of 25 (the square of 5).

{: style="list-style-type: lower-alpha"}
1. Why does the program not print `25`?
1. What change could we make to this program to fix the bug?
