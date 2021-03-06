---
youtubeId: NAs4FIWkJ4s
---
# Mario

## World 1-1

Toward the end of World 1-1 in Nintendo's Super Mario Brothers, Mario must ascend right-aligned pyramid of blocks, a la the below.

![screenshot of Mario jumping up a right-aligned pyramid](pyramid.png)

Let's recreate that pyramid in C, albeit in text, using hashes (`#`) for bricks, a la the below. Each hash is a bit taller than it is wide, so the pyramid itself is also be taller than it is wide.

```
       #
      ##
     ###
    ####
   #####
  ######
 #######
########
```

The program we'll write will be called `mario`. And let's allow the user to decide just how tall the pyramid should be by first prompting them for a positive integer between, say, 1 and 8, inclusive.

Here's how the program might work if the user inputs `8` when prompted:

```
$ ./mario
Height: 8
       #
      ##
     ###
    ####
   #####
  ######
 #######
########
```

Here's how the program might work if the user inputs `4` when prompted:

```
$ ./mario
Height: 4
   #
  ##
 ###
####
```

Here's how the program might work if the user inputs `2` when prompted:

```
$ ./mario
Height: 2
 #
##
```

And here's how the program might work if the user inputs `1` when prompted:

```
$ ./mario
Height: 1
#
```

If the user doesn't, in fact, input a positive integer between 1 and 8, inclusive, when prompted, the program should re-prompt the user until they cooperate:

```
$ ./mario
Height: -1
Height: 0
Height: 42
Height: 50
Height: 4
   #
  ##
 ###
####
```

How to begin? Let's approach this problem one step at a time.

{% include youtubePlayer.html id=page.youtubeId %}

## Pseudocode

First, create a new directory (i.e., folder) called `mario` inside of your `pset1` directory by executing

```
~/ $ mkdir ~/pset1/mario
```

Add a new file called `pseudocode.txt` inside of your `mario` directory.

Write in `pseudocode.txt` some pseudocode that implements this program, even if not (yet!) sure how to write it in code. There's no one right way to write pseudocode, but short English sentences suffice. Recall how we wrote pseudocode for [finding Mike Smith](https://docs.google.com/presentation/d/17wRd8ksO6QkUq906SUgm17AqcI-Jan42jkY-EmufxnE/edit?usp=sharing). Odds are your pseudocode will use (or imply using!) one or more functions, conditions, Boolean expressions, loops, and/or variables.

<details><summary>Spoiler</summary>

<p>There's more than one way to do this, so here's just one!</p>
<ol>
<li>Prompt user for height</li>
<li>If height is less than 1 or greater than 8 (or not an integer at all), go back one step</li>
<li>Iterate from 1 through height:
<ol>
    <li>On iteration <b>i</b>, print <b>i</b> hashes and then a newline</li>
</ol>
</li>
</ol>

<p>It's okay to edit your own after seeing this pseudocode here, but don't simply copy/paste ours into your own!</p>

</details>

## Prompting for Input

Whatever your pseudocode, let's first write only the C code that prompts (and re-prompts, as needed) the user for input. Create a new file called `mario.c` inside of your `mario` directory.

Now, modify `mario.c` in such a way that it prompts the user for the pyramid's height, storing their input in a variable, re-prompting the user again and again as needed if their input is not a positive integer between 1 and 8, inclusive. Then, simply print the value of that variable, thereby confirming (for yourself) that you've indeed stored the user's input successfully, a la the below.

```
$ ./mario
Height: -1
Height: 0
Height: 42
Height: 50
Height: 4
Stored: 4
```

<details><summary>Hints</summary>
<ul>
<li>Recall that you can compile your program with <code>make</code>.</li>
<li>Recall that you can print an <code>int</code> with <code>printf</code> using <code>%i</code>.</li>
<li>Recall that you can get an integer from the user with <code>get_int</code>.</li>
<li>Recall that <code>get_int</code> is declared in <code>cs50.h</code>.</li>
<li>Recall that we prompted the user for a positive integer in class via <code>positive.c</code>.</li>
</ul>

</details>

## Building the Opposite

Now that your program is (hopefully!) accepting input as prescribed, it's time for another step.

It turns out it's a bit easier to build a left-aligned pyramid than right-, a la the below.

```
#
##
###
####
#####
######
#######
########
```

So let's build a left-aligned pyramid first and then, once that's working, right-align it instead!

Modify `mario.c` at right such that it no longer simply prints the user's input but instead prints a left-aligned pyramid of that height.

<details><summary>Hints</summary>
<ul>
<li>Keep in mind that a hash is just a character like any other, so you can print it with <code>printf</code>.</li>
<li>Just as Scratch has a <a target="_blank" href="https://docs.google.com/presentation/d/17wRd8ksO6QkUq906SUgm17AqcI-Jan42jkY-EmufxnE/edit?usp=sharing">Repeat</a> block, so does C have a <a target="_blank" href="https://docs.google.com/presentation/d/191XW0DHWlW6WmAhYuFUYnZKUlDx0N4u4Fp81AeW-uNs/edit?usp=sharing"><code>for</code></a> loop, via which you can iterate some number times. Perhaps on each iteration, <b>i</b>, you could print that many hashes?</li>
<li>You can actually "nest" loops, iterating with one variable (e.g., <code>i</code>) in the "outer" loop and another (e.g., <code>j</code>) in the "inner" loop. For instance, here's how you might print a square of height and width <code>n</code>, below. Of course, it's not a square that you want to print!

<pre><code>
    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < n; j++)
        {
            printf("#");
        }
        printf("\n");
    }
</code></pre>
</li>
</ul>
</details>

## Right-Aligning with Dots

Let's now right-align that pyramid by pushing its hashes to the right by prefixing them with dots (i.e., periods), a la the below.

```
.......#
......##
.....###
....####
...#####
..######
.#######
########
```

Modify `mario.c` in such a way that it does exactly that!

<details><summary>Hints</summary>

<p>Notice how the number of dots needed on each line is the "opposite" of the number of that line's hashes. For a pyramid of height 8, like the above, the first line has but 1 hash and thus 7 dots. The bottom line, meanwhile, has 8 hashes and thus 0 dots. Via what formula (or arithmetic, really) could you print that many dots?</p>

</details>

### How to Test Your Code

Does your code work as prescribed when you input

* `-1` (or other negative numbers)?
* `0`?
* `1` through `8`?
* `9` or other positive numbers?
* letters or words?
* no input at all, when you only hit Enter?

## Removing the Dots

All that remains now is a finishing flourish! Modify `mario.c` in such a way that it prints spaces instead of those dots!

### How to Test Your Code

Execute the below to evaluate the correctness of your code using `check50`. But be sure to compile and test it yourself as well!

```
check50 cs50/problems/2020/x/mario/less
```

Execute the below to evaluate the style of your code using `style50`.

```
style50 mario.c
```

<details><summary>Hints</summary>

<p>A space is just a press of your space bar, just as a period is just a press of its key! Just remember that <code>printf</code> requires that you surround both with double quotes!</p>

</details>

## How to Submit

Execute the below, logging in with your GitHub username and password when prompted. For security, you'll see asterisks (`*`) instead of the actual characters in your password.

```
submit50 cs50/problems/2020/x/mario/less
```
