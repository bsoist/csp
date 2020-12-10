# Quiz 7

## Question 1 of 3

Recall that, in lecture, we introduced SQL databases as a way to organize and manage data. We've previously seen that we can also use CSV (comma-separated values) files to store data as well. Why might we prefer to use a SQL database instead of a CSV file to store data?

## Question 2 of 3

Consider the following SQL code to generate a table for storing data about a music library.

```sql
CREATE TABLE playlists (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT
);

CREATE TABLE songs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    artist TEXT,
    album TEXT,
    year NUMERIC,
    playlist_id INTEGER,
    FOREIGN KEY(playlist_id) REFERENCES playlists(id)
);
```

Critique the design of this database, as by proposing and explaining at least two ways in which its design could be improved.

Hint: Might `songs` end up with (lots of!) duplicate values in some columns?

## Question 3 of 3

Recall that, by creating an index to a column of a SQL table, we can speed up `SELECT` queries on that column. Why, then, should we not just always create indexes on every column in a SQL table?
