# Notes

## Distribution Code

Download this project's [distribution code](https://cdn.cs50.net/2019/fall/tracks/ios/notes/notes.zip).

## What To Do

* Deleting Notes

## Deleting Notes

So far, our Notes app can add and edit notes. Let’s add the ability for a user to delete a note when they no longer need it.

First, implement a new method called `delete` inside of the `NotesManager` class. This method should use a `DELETE` query on your SQLite database in order to delete a specific note.

Next, add a button to the notes storyboard that we’ll use for deleting notes. Exactly what the UI looks like is up to you! (If you’re feeling ambitious, you can try implementing a UI that allows a user to swipe on a note from the list to delete it, much like many email apps on iOS.)

Finally, wire up your UI to an `@IBAction` that calls your new `delete` method. Depending on your UI, you might find the `popViewController(animated: Bool)` method on `navigationController` useful—this method will pop you from your notes view back to your list view.

## How to Submit

To submit your code with `submit50`, you may either: (1) upload your code to CS50 IDE and run `submit50` from inside of your IDE, or (2) install `submit50` on your own computer by running `pip3 install submit50` (assuming you have [Python 3](https://www.python.org/downloads/) installed).

Execute the below, logging in with your GitHub username and password when prompted. For security, you'll see asterisks (`*`) instead of the actual characters in your password.

```
submit50 cs50/problems/2020/x/tracks/ios/notes
```
