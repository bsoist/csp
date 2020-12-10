# Mario: The Goal Update

## Objectives

* Read and understand all of the Mario source code from the last track lesson.
* Add a pyramid of blocks to the generated level.
* Add a flag at the end of the level that either loads a new level or simply displays a victory message to the screen.

## Distribution Code

Download this project's [distribution code](https://cdn.cs50.net/2019/fall/tracks/games/mario/mario.zip).

## It's Game Time

Your second assignment in this track will be a step more difficult than the last, but charmingly tied back into an earlier problem set in the course; this time, rather than constructing a pyramid using hash marks, you'll be creating a pyramid of tiles in a procedurally generated level. Additionally, you'll create the characteristic end-of-level flag that delineates one level from another, choosing to either end the level with a message or transition to a brand new one!

Your goal:

1. Add a pyramid of blocks to the generated level. Taking into consideration the column-based generation we discussed in the track, find a way to generate a Mario-style pyramid like the below, placed directly atop the ground (ASCII flag to the right shown as well):

             #      ~
            ##      |
           ###      |
          ####      |
        ###############

    You may choose to alter the pyramid such that it is symmetrical, but avoid a pyramid going the opposite direction, for Mario therefore won't be able to climb it! Also be careful to avoid starting the generation too close to the end of the level :)

2. Add a flag at the end of the level that either loads a new level or simply displays a victory message to the screen. Also tied to generation, this time take the flag and flagpole sprites included in the distro's sprite sheet and create a flagpole at the end of the level that, upon Mario's collision, triggers either a victory message or a reloading of a brand new procedurally generated level.

## How to Submit

To submit your code with `submit50`, you may either: (1) upload your code to CS50 IDE and run `submit50` from inside of your IDE, or (2) install `submit50` on your own computer by running `pip3 install submit50` (assuming you have [Python 3](https://www.python.org/downloads/) installed).

Execute the below, logging in with your GitHub username and password when prompted. For security, you'll see asterisks (`*`) instead of the actual characters in your password.

```
submit50 cs50/problems/2020/x/tracks/games/mario
```
