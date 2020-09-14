# Quiz 3

## Question 1 of 3

Recall that pseudocode is an informal, English-like language that describes an algorithm. In Lecture 0, David showed the following pseudocode for finding Mike Smith in a phone book.

```
1  Pick up phone book
2  Open to middle of phone book
3  Look at page
4  If Smith is on page
5      Call Mike
6  Else if Smith is earlier in book
7      Open to middle of left half of book
8      Go back to line 3
9  Else if Smith is later in book
10     Open to middle of right half of book
11     Go back to line 3
12 Else
13     Quit
```

{: style="list-style-type: lower-alpha"}
1. Write pseudocode for an algorithm that would identify the tallest person in a room.
1. What is the running time of your algorithm in Big O notation?
    * *Hint: if your algorithm has one or more loops, how many times do the loops execute if there are N people in the room?*

## Question 2 of 3

Recall from lecture how we implemented a phone book in C using the below `struct`.

```c
typedef struct
{
    string name;
    string number;
}
person;
```

{: style="list-style-type: lower-alpha"}
1. Why was it arguably better design to use one array of `struct`s than to use two arrays, one to store names and one to store phone numbers?
1. Imagine you were to use the above `struct` to implement an app for your contacts, like the one on your mobile phone. What are two additional fields might you want to add to the `struct`, and what should their types be?

## Question 3 of 3

Imagine that you have an unsorted collection of items (maybe they're notes for class, or a collection of old receipts) that you expect you'll need to search. When might it make more sense to sort the collection of items first before searching, and when might it make more sense to leave the collection unsorted?

*Hint: Consider algorithmic efficiency. What's the cost (i.e., running time) of linear search? Of binary search? Of sorting?*
