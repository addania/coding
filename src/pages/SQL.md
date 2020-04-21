---
title: "SQL"
date: "2020-04-03"
category: "knowledge-base"
---
![](https://i.imgur.com/ETtwNWY.jpg "Photo from wallpapersafari.com")<p style="font-size: 12px; text-align: right">_Photo from wallpapersafari.com_</p>


> SQL stands for Structured Query Language. SQL is used to communicate with a database. 

> SQL manages data well. In SQL, data is stored in tables made up of columns.

> You can try running your sql statements online here: https://www.w3schools.com/sql/trysql.asp?filename=trysql_op_in

>Please note that in general: You can't execute a query using Javascript because Javascript can't connect directly with your database, but you can use AJAX. With this technology you'll be able to send a request to a PHP (or other server side language) page where resides the code that can execute a query to your db and get back the result of this query.

> Creating a table called <code>users</code> which contains columns email and name. Both email and name will be a text field. exec in this case is just a custom JS function
```SQL
exec(`CREATE TABLE users (email TEXT, name TEXT)`)
```

> In the online tool of w3schools we write those statements without <code>exec(``)</code>
```
CREATE TABLE users (email TEXT, name TEXT)
```

>Now creating a row/data entry in our users table:
```SQL
exec(`INSERT INTO users (email, name) VALUES ('adda@example.com', 'Adda')`)
```

> Then we can access data from this table with following code:
```SQL
exec(`SELECT * FROM users`)
```

> `*` means all the columns!!

> Select always returns an array of objects:
```
[{email: 'adda@example.com', name: 'Adda'}] 
```

> Once again: Select returns an array of objects which we are selecting

> Other SQL methods like create table, insert, delete, alter or begin return empty arrays and alter the table
```SQL
exec(`INSERT INTO users (email, name) VALUES ('adda@example.com', 'Adda')`)
[]
```

> SQL keywords like INSERT and SELECT ignore case, so INSERT and InSeRt mean the same thing. Table and column names also ignore case, so users and USErs refer to the same table. However convention is: SQL keywords in UPPERCASE, like CREATE and INSERT and names of tables and columns will be lower_snake_case, like user_name

>If we try to insert into or select form a column that doesn't exist, the database system will error.

> NUmbers are stored as REAL (with decimal) or as INTEGER (without decimal)
```
exec(`CREATE TABLE rectangles (width REAL, height REAL`)
```

> There are many more times. Example for Postgress database: https://www.postgresql.org/docs/11/datatype.html

> Instead of always selecting all columns with SELECT * we can define columns we only want to see
```
exec(`SELECT name FROM users`)
```

> We can select multiple columns by separating them with comma
```
exec(`SELECT age, name FROM users`)
```

>Now how to select only given rows? We use SELECT * WHERE
> Here is the table:
```
exec(`CREATE TABLE users (email TEXT NOT NULL, name TEXT NOT NULL)`)
exec(`INSERT INTO users (email, name) VALUES ('betty.j@example.com', 'Betty')`)
exec(`INSERT INTO users (email, name) VALUES ('betty.k@example.com', 'Betty')`)
exec(`INSERT INTO users (email, name) VALUES ('cindy@example.com', 'Cindy')`)

```
> Here we only select oen row:
```
exec(`SELECT * FROM users where name = 'Cindy'`)
[{email: 'cindy@example.com', name: 'Cindy'}]
```

>When we use both a WHERE and a SELECT, they can reference different columns.
```
exec(`SELECT email FROM users WHERE name = 'Cindy'`)
[{email: 'cindy@example.com'}] 
```
> You can also use lless than < or bigger than > or not equal to != or another way how to write not equal to <>

```
exec(`SELECT name FROM cats WHERE age > 4 `)
```

> We can also have multiple conditions connected with logical AND or OR:
``` 

exec(`
  SELECT email FROM users
  WHERE name = 'Betty' AND email = 'betty.j@example.com';
`)
```

>WHERE clauses can call functions. For example, SQLite defines a length function that works on strings.
```
exec(`SELECT name FROM users WHERE length(name) > 4`)
```

> Here are examples of postgress database functions: https://www.postgresql.org/docs/12/functions.html

> We can also define our own

> Like most programming languages, SQL supports "null", which indicates the absence of a value. For example, a user's login_count might be null if they've never logged in.

> When a column is allowed to be null, we say that it's "nullable". 
```
exec(`CREATE TABLE users (name TEXT, login_count INTEGER)`)
exec(`INSERT INTO users (name, login_count) VALUES(NULL, NULL)`)
exec(`SELECT * FROM users`)
[{login_count: null, name: null}]
```

> We'll explicitly mark columns as either NULL or NOT NULL.We can tell the database to disallow null values by adding NOT NULL to a column declaration. Trying to insert a null value into a NOT NULL column is an error.

> it's best to make columns NOT NULL unless you have a very good reason not to. When you do make a column nullable, it's best to explicitly mark it as NULL by defining it as phone_number TEXT NULL. 
```
exec(`CREATE TABLE cats (name TEST NOT NULL, age INTEGER NULL)`)
```

>Updating value for each row for a given column:
```

exec(`CREATE TABLE cats (name TEXT, age INTEGER)`)
exec(`INSERT INTO cats (name, age) VALUES ('Ms. Fluff', 3)`)
exec(`INSERT INTO cats (name, age) VALUES ('Keanu', 2)`)
exec(`UPDATE cats SET name = 'Cat'`)
exec(`SELECT name FROM cats`)
[{name: 'Cat'}, {name: 'Cat'}]
```

> Changing value only for specific row:
```
exec(`CREATE TABLE cats (name TEXT, age INTEGER)`)
exec(`INSERT INTO cats (name, age) VALUES ('Ms. Fluff', 3)`)
exec(`INSERT INTO cats (name, age) VALUES ('Keanu', 2)`)
exec(`UPDATE cats SET name = 'Mr. Reeves' WHERE name = 'Keanu'`)
exec(`SELECT name FROM cats`)
[{name: 'Ms. Fluff'}, {name: 'Mr. Reeves'}] 
```
>If our UPDATE's WHERE clause matches multiple rows, then all of those rows will be updated. This makes UPDATE potentially dangerous. Be very careful that your UPDATE only affects the rows that you expected it to update!

```
exec(`CREATE TABLE rects (kind TEXT, width REAL, height REAL)`)
exec(`INSERT INTO rects (kind, width, height) VALUES ('tall', 1.1, 2.7)`)
exec(`INSERT INTO rects (kind, width, height) VALUES ('tall', 4.4, 4.3)`)
exec(`INSERT INTO rects (kind, width, height) VALUES ('tall', 0.4, 8.9)`)
exec(`INSERT INTO rects (kind, width, height) VALUES ('tall', 100, 0.1)`)
exec(`UPDATE rects SET kind ='wide' WHERE width > height`)
```

> It is possible to insert multiple rows. When we insert many rows with separate INSERT statements, we're putting heavy load on the database. The database has to parse each insert statement, execute it safely by acquiring and releasing locks, and store its result on disk. All of those processes happen for every insert. There are many ways to mitigate those costs, but there's one way that reduces them all at once: multi-row inserts. 

>The syntax is straightforward: we write an insert statement as normal, but with multiple rows of data after VALUES. Each one becomes a separate row in the database. Now, the database only has to parse, lock, execute, and store data once. The amount of data stored is the same, but the overhead is much smaller.
```
exec(`CREATE TABLE cats (name TEXT NOT NULL)`)
exec(`
  INSERT INTO cats (name) VALUES 
    ('Ms. Fluff'), 
    ('Keanu')
    
`)
exec(`SELECT * FROM cats`)
GOAL:	
[{name: 'Ms. Fluff'}, {name: 'Keanu'}]
```
```
exec(`CREATE TABLE users (name TEXT NOT NULL)`)
exec(`
  INSERT INTO users (name) VALUES
    ('Amir'),
    ('Betty'),
    ('Cindy')
`)
exec(`SELECT * FROM users`)
[{name: 'Amir'}, {name: 'Betty'}, {name: 'Cindy'}]
```

>Selecting expressions
We can SELECT many kinds of expressions: columns, like we've seen already; but also constants, mathematical expressions, and function calls. For example, if we SELECT 1, we get 1 back. If we SELECT 1 + 1, we get 2 back.

```
exec(`SELECT 1`)
[{'1': 1}] 
```
```
exec(`SELECT 1 + 1`)
[{'1 + 1': 2}] 
```

>The output here is the same as ever: an array of objects. But now, there are no column names. Instead, the properties on the "row" object are the expressions that we queried.

``` 
exec(`SELECT 2 * 3`)
[{'2 * 3': 6}] 

``` 
We can also query functions that return values dynamically. For example, the current date is written as DATE('now') in SQLite. This query asks: is the current date after DATE(0), which was January 1, 1970?

``` 
exec(`SELECT DATE('now') > DATE(0)`)
[{"DATE('now') > DATE(0)": 1}] 

``` 

>Select the number 17.
``` 
exec(`SELECT 17`)
[{'17': 17}]
``` 

> we can enforce a column to have unique valueswith work UNIQUE.  Inserting a duplicate value into a UNIQUE column is an error.
```
exec(`CREATE TABLE users (email TEXT UNIQUE, name TEXT)`)
exec(`INSERT INTO users (email, name) VALUES ('amir@example.com', 'Amir')`)
exec(`SELECT email FROM users`)
[{email: 'amir@example.com'}] 
```
```
exec(`CREATE TABLE users (email TEXT UNIQUE, name TEXT)`)
exec(`INSERT INTO users (email, name) VALUES ('amir@example.com', 'Amir')`)
exec(`INSERT INTO users (email, name) VALUES ('amir@example.com', 'Amir')`)
exec(`SELECT * FROM users`)
Error: UNIQUE constraint failed: users.email

```
>What if we store email in 2 comuns? as username and domain? How can we mae sure that both usrname and domain need to be unique??
```
exec(`
  CREATE TABLE emails (
    username TEXT,
    domain TEXT,
    UNIQUE (username, domain)
  )
`)
```
>We can UPDATE our new emails table as much as we like. But if we try to update it in a way that results in two rows with the same username and the same domain, that's an error.

> We can delete data with the DELETE statement. Like UPDATE, it will delete every row by default. You'll want to be very careful with DELETE!

```

exec(`CREATE TABLE users (email TEXT, name TEXT)`)
exec(`INSERT INTO users (email, name) VALUES ('amir@example.com', 'Amir')`)
exec(`INSERT INTO users (email, name) VALUES ('betty.j@example.com', 'Betty')`)
exec(`DELETE FROM users`)
exec(`SELECT name FROM users`)
[]
```
>We can be more specific what we are deleting:
```
exec(`DELETE FROM users WHERE name = 'Betty' OR name = 'Amir'`)
```


Defaults
Normally, we have to specify all of the columns when inserting a row. But that quickly becomes tedious because many real-world tables have dozens of columns. We can eliminate some of that tedium by defining default values for columns.

For example, if our users have a login_count, then 0 is a good default value. When a user is created, they've never logged in. Defining that default value during table creation saves us from specifying a login_count when INSERTing a user.

```
exec(`
  CREATE TABLE users (
    name TEXT,
    login_count INTEGER NOT NULL DEFAULT 0
  );
`)
exec(`INSERT INTO users (name) VALUES ('Amir')`)
exec(`SELECT * FROM users`)
[{login_count: 0, name: 'Amir'}] 
``` 

f we specify a value when inserting, it will override the default.
```
exec(`
  CREATE TABLE users (
    name TEXT,
    login_count INTEGER NOT NULL DEFAULT 0
  );
`)
exec(`INSERT INTO users (name, login_count) VALUES ('Amir', 1)`)
exec(`SELECT * FROM users`)

```
Column aliases
We can rename columns when needed using AS. The result object's properties will use our column aliases instead of the original column names. In this example, we rename the age column, but we leave the name alone.


```
exec(`CREATE TABLE cats (name TEXT, age INTEGER)`)
exec(`INSERT INTO cats (name, age) VALUES ('Keanu', 2)`)
exec(`SELECT name, age AS oldness FROM cats`)
[{name: 'Keanu', oldness: 2}]
```

Column aliases become useful in complex queries that involve multiple tables. However, they're also useful for something much simpler: querying mathematical expressions and functions. Now we can clean up the results of those queries!

```
exec(`SELECT 1 + 1`)
[{'1 + 1': 2}] 
```
```
exec(`SELECT 1 + 1 AS sum`)
[{sum: 2}]
```

``` 
exec(`CREATE TABLE cats (name TEXT, age INTEGER)`)
exec(`INSERT INTO cats (name, age) VALUES ('Keanu', 2)`)
exec(`SELECT name AS cat_name, age AS cat_age from cats`)

[{cat_age: 2, cat_name: 'Keanu'}]
```

>In order to differentiate people with same naem we can use ids:
```
xec(`CREATE TABLE people (id INTEGER NOT NULL, name TEXT NOT NULL)`)
exec(`INSERT INTO people (id, name) VALUES (1, 'Amir')`)
exec(`INSERT INTO people (id, name) VALUES (2, 'Amir')`)
exec(`SELECT * FROM people where ID = 1`)
[{id: 1, name: 'Amir'}]
```

>But doing ids manually is tedious. It's much better to let the database choose IDs for us. In SQLite, we can do that by making the ID column a PRIMARY KEY.In databases, "key" means "a column or set of columns that is always unique". We've already seen keys in the form of uniqueness constraints. If we put a uniqueness constraint on one column, that makes it a key. If the constraint requires two columns together to be unique, then those two columns together are a key. Database systems themselves don't usually care about keys; they're more useful for humans as a shorthand for "a set of columns that's always unique".However, databases do care very much about primary keys. The primary key is a key that we've declared to be special: it's the main (primary) key for the table. In most real-world databases, the primary key is an integer column, often named id. When we tell the database that a column is the primary key, it does several things. First, the primary key column is automatically UNIQUE, so it can never have duplicate values. Second, in most databases, the primary key is also NOT NULL. This isn't true in SQLite, but let's ignore that for a moment. If we create a PRIMARY KEY column, then we won't be allowed to insert duplicates.

```

exec(`CREATE TABLE people (id INTEGER PRIMARY KEY, name TEXT NOT NULL)`)
exec(`INSERT INTO people (id, name) VALUES (1, 'Amir')`)
exec(`SELECT * FROM people`)
[{id: 1, name: 'Amir'}]
```
> always make your primary keys NOT NULL!

```
exec(`CREATE TABLE people (name TEXT PRIMARY KEY NOT NULL)`)
```
>Most primary keys are auto-incrementing integer IDs. "Auto-incrementing" means that each new ID increases by 1 automatically. When we insert a record, we don't have to specify the ID. The first record inserted will get an ID of 1. After that, the database will always automatically choose the next unused integer. It's kind of like a default value, except it automatically changes with every new record.

```
exec(`CREATE TABLE people (id INTEGER PRIMARY KEY NOT NULL, name TEXT)`)
exec(`INSERT INTO people (name) VALUES ('Amir')`)
exec(`INSERT INTO people (name) VALUES ('Betty')`)
exec(`SELECT * FROM people`)
[{id: 1, name: 'Amir'}, {id: 2, name: 'Betty'}] 
``` 

>One last detail about primary keys. A table can have only one primary key. If we try to create two primary keys in the same table, the database will error.

>Primary keys in a nutshell:

Each table can only have one primary key.
Primary key values must be unique.
Primary key values can't be NULL (but SQLite will allow NULL in some situations for backwards compatibility).
Primary key columns can have any type, but most are automatically-incrementing integers starting at 1. In SQLite, an INTEGER PRIMARY KEY will automatically increment.
Primary keys combine a lot of complicated ideas, but using them is relatively simple. Except in rare situations, your tables should always have an auto-incrementing integer primary key. You never need to include it in your inserts; the database will do it for you. Just by typing INTEGER PRIMARY KEY, you get an easy-to-use, automatically-managed ID column.

>
>Dropping tables and columns
>Sometimes an entire table is no longer needed. We could DELETE all data in it, but the table would still exist. Over time, we'd end up with many unused, empty tables in our database. It's better to completely destroy the table.

>We remove tables by DROPing them. If we DROP a table, trying to access it in any way is an error because it no longer exists.

```
exec(`CREATE TABLE users (email TEXT, name TEXT)`)
exec(`DROP TABLE users`)
exec(`SELECT * FROM users`)
Error: no such table: users 

```
>Drop the cats table.

```
exec(`CREATE TABLE cats (name TEXT, age INTEGER)`)
exec(`DROP TABLE cats`)

exec(`
  INSERT INTO cats (name, age)
  VALUES ('Ms. Fluff', 3);
`)
	
Error: no such table: cats
```
>What's the difference between deleting and dropping? Deleting is always about data: it removes rows. Dropping is always about database structure: it removes tables. In most database systems, we can also drop a single column from a table. Later in this course, we'll see examples of dropping other structures as well.


SQL: Bind parameters
SQL isn't very useful in isolation. In real systems, it will always be combined with a general-purpose language like JavaScript.

Throughout this course, we've seen query results like [{name: 'Amir'}, {name: 'Betty'}]. Now we'll write JavaScript code to work with those query results.

The simplest case is: we INSERT some rows, then access parts of them.

> 
exec(`CREATE TABLE users (name TEXT);`)
exec(`INSERT INTO users (name) VALUES ('Amir');`)
exec(`INSERT INTO users (name) VALUES ('Betty');`)
[] 
> 
exec(`SELECT * FROM users`)
[{name: 'Amir'}, {name: 'Betty'}] 
> 
const users = exec(`SELECT * FROM users`)
const amir = users[0]
amir.name
'Amir' 
The most common type of query is "find me the record with this ID". We want to say SELECT * FROM users WHERE id = ?. But what goes in place of the "?"?

The answer is that ? is actually the correct thing to put there! A ? tells SQLite "I (the programmer) will provide a parameter for you to insert here." We provide the parameter values as the second value to our exec function.

> 
exec(`CREATE TABLE users (id INTEGER NOT NULL, name TEXT);`)
exec(`INSERT INTO users (id, name) VALUES (1, 'Amir');`)
exec(`INSERT INTO users (id, name) VALUES (2, 'Betty');`)
exec(`INSERT INTO users (id, name) VALUES (3, 'Betty');`)
[] 
> 
const users = exec(`SELECT name FROM users WHERE id = ?`, [1])
const amir = users[0]
amir.name
'Amir' 
We can use more than one ? if needed. Each one is a different parameter. If we have two ? parameters in our query, we have to provide two values to fill those parameters.

> 
exec(
  "SELECT * FROM users WHERE id = ? AND name = ?",
  [1, 'Amir']
)
[{id: 1, name: 'Amir'}] 
> 
exec(
  "SELECT * FROM users WHERE id = ? AND name = ?",
  [2, 'Amir']
)
[] 
Here's a code problem for you to complete:

Write a findUser function that finds a user by their ID, returning the result (an array of objects) that comes back from the database. Use a bind parameter (?) to provide the ID to the query. Remember that the ID needs to be passed in an array!

> 
exec(`CREATE TABLE users (id INTEGER NOT NULL, name TEXT);`)
exec(`INSERT INTO users (id, name) VALUES (1, 'Amir');`)
exec(`INSERT INTO users (id, name) VALUES (2, 'Betty');`)
exec(`INSERT INTO users (id, name) VALUES (3, 'Betty');`)
function findUser(id) {
  return exec(`SELECT * FROM users WHERE id= ?`, [id])
}



[findUser(1), findUser(2), findUser(100)]
GOAL:	
[[{id: 1, name: 'Amir'}], [{id: 2, name: 'Betty'}], []]
YOURS:	
[[{id: 1, name: 'Amir'}], [{id: 2, name: 'Betty'}], []] 
That findUser function works, but it's annoying to use. By directly returning what it gets from the database, it always returns the user wrapped in an array. It also returns [] when the user isn't found. A better version would return just the user object, and null when the user doesn't exist.

Here's a code problem for you to complete:

Write a findUser function that finds a user by their ID. Return the user object itself, not the full query result array. If no user is found, return JavaScript's null. (You can check for whether the query returned no results with if (queryResult.length === 0) { ... }.)

> 
exec(`CREATE TABLE users (id INTEGER NOT NULL, name TEXT);`)
exec(`INSERT INTO users (id, name) VALUES (1, 'Amir');`)
exec(`INSERT INTO users (id, name) VALUES (2, 'Betty');`)
exec(`INSERT INTO users (id, name) VALUES (3, 'Betty');`)
function findUser(id) {
  const queryResult = exec(`SELECT * FROM users WHERE id= ?`, [id])
  if (queryResult.length === 0) { return null }
  return queryResult[0]
  
}



[findUser(1), findUser(2), findUser(100)]
GOAL:	
[{id: 1, name: 'Amir'}, {id: 2, name: 'Betty'}, null]
YOURS:	
[{id: 1, name: 'Amir'}, {id: 2, name: 'Betty'}, null] 
When we do exec(`SELECT ... ?`, [1, 2]), the 1 and 2 are called "bind parameters". The query contains some holes marked with ?, and the parameters get bound to those holes.

What if we want to reference a bind parameter multiple times in the query? Instead of ?, we can reference ?1, ?2, etc. Parameter numbers start at 1, so ?1 refers to the bind parameter at index 0. Here's an example of ?1 in action:

To find all cats whose name matches their owner's name, we can compare them in a WHERE.

> 
exec(`CREATE TABLE cats (name TEXT, owner_name TEXT)`)
exec(`INSERT INTO cats (name, owner_name) VALUES ('Amir', 'Ms. Fluff')`)
exec(`INSERT INTO cats (name, owner_name) VALUES ('Wilford', 'Wilford')`)
exec(`SELECT name FROM cats WHERE name = owner_name`)
[{name: 'Wilford'}] 
If we only care about one particular matching cat and owner (like Wilford and Wilford), then we can also find them using a bind parameter. We'll pass 'Wilford' in as the bind parameter, then reference it twice with ?1.

> 
exec(`CREATE TABLE cats (name TEXT, owner_name TEXT)`)
exec(`INSERT INTO cats (name, owner_name) VALUES ('Amir', 'Ms. Fluff')`)
exec(`INSERT INTO cats (name, owner_name) VALUES ('Wilford', 'Wilford')`)
exec(`SELECT name FROM cats WHERE name = ?1 AND owner_name = ?1`, ['Wilford'])
[{name: 'Wilford'}] 
The syntax for these parameters varies by database. For example, PostgreSQL's bind parameters are referenced with $1, $2, etc.

The query execution function also varies between different databases. In this course, we execute queries with exec(query, bindParameters), which is a function that we (the course authors) defined while writing the course. In Node's PostgreSQL API, the equivalent function is called query. In Python's SQLite API, it's called execute.

No matter the syntax, all SQL databases support bind parameters in some form. They wouldn't be very useful without it!

SQL: Comments
In SQL, comments begin with --. This is an unusual syntax for comments, although it is shared with some other programming languages, like Ada and Haskell. Anything from the -- until the end of the line gets ignored.

> 
exec(`
  CREATE TABLE cats (
    name TEXT
    -- owner_name TEXT
  )
`)
exec(`INSERT INTO cats (name, owner_name) VALUES ('Wilford', 'Wilford')`)
Error: table cats has no column named owner_name 
SQL databases also support C-style comments /* like this */, which can span multiple lines.

> 
exec(`
  CREATE TABLE cats (
    id INTEGER PRIMARY KEY
    /*
    name TEXT,
    owner_name TEXT
    */
  )
`)
exec(`INSERT INTO cats (name, owner_name) VALUES ('Wilford', 'Wilford')`)
Error: table cats has no column named name 


SQL: Comparing with null
NULL in SQL databases has some sharp edges. For example, mathematical operations on NULL give another NULL (which comes back to us as JavaScript's null).

> 
exec(`SELECT NULL + 0 AS result`)
[{result: null}] 
> 
exec(`SELECT NULL + 1 AS result`)
[{result: null}] 
> 
exec(`SELECT NULL * 5 AS result`)
[{result: null}] 
When we use = to compare anything with NULL, we get another NULL. That's even true when comparing NULL = NULL.

> 
exec(`SELECT NULL = NULL AS result`)
[{result: null}] 
> 
exec(`SELECT NULL = 1 AS result`)
[{result: null}] 
> 
exec(`SELECT 'cat' = NULL AS result`)
[{result: null}] 
Fortunately, SQL also has IS NULL and IS NOT NULL comparisons that properly check for NULL values. (As usual, SQLite uses 1 and 0 to represent true and false.)

> 
exec(`SELECT NULL IS NULL AS result`)
[{result: 1}] 
> 
exec(`SELECT NULL IS NOT NULL AS result`)
[{result: 0}] 
> 
exec(`SELECT 5 IS NULL AS result`)
[{result: 0}] 
> 
exec(`SELECT 5 IS NOT NULL AS result`)
[{result: 1}] 
> 
exec(`SELECT (NULL = NULL) IS NULL AS result`)
[{result: 1}] 
Usually, you'll see IS NULL and IS NOT NULL as conditions in WHERE queries.

For example, suppose that we have a database where only some users have emails. We want to email all of our users. To do that, we need to select all users who have an email address.

> 
exec(`CREATE TABLE users (name TEXT NOT NULL, email TEXT NULL)`)
exec(`INSERT INTO users (name, email) VALUES ('Amir', 'amir@example.com')`)
exec(`INSERT INTO users (name, email) VALUES ('Cindy', NULL)`)
exec(`SELECT * FROM users WHERE email IS NOT NULL`)
[{email: 'amir@example.com', name: 'Amir'}] 
Here's a code problem for you to complete:

Here's a table where some users have a cat, and some don't. Select all users that have a cat.

> 
exec(`CREATE TABLE users (name TEXT NOT NULL, cat_name TEXT NULL)`)
exec(`INSERT INTO users (name, cat_name) VALUES ('Amir', 'Ms. Fluff')`)
exec(`INSERT INTO users (name, cat_name) VALUES ('Betty', 'Keanu')`)
exec(`INSERT INTO users (name, cat_name) VALUES ('Cindy', NULL)`)
exec(`INSERT INTO users (name, cat_name) VALUES ('Dalili', NULL)`)
exec(`INSERT INTO users (name, cat_name) VALUES ('Wilford', 'Wilford')`)
exec(`SELECT * FROM users WHERE cat_name IS NOT NULL`)

GOAL:	
[{cat_name: 'Ms. Fluff', name: 'Amir'}, {cat_name: 'Keanu', name: 'Betty'}, {cat_name: 'Wilford', name: 'Wilford'}]
YOURS:	
[{cat_name: 'Ms. Fluff', name: 'Amir'}, {cat_name: 'Keanu', name: 'Betty'}, {cat_name: 'Wilford', name: 'Wilford'}] 
The specific details of null handling vary from database to database. Fortunately, SQLite's NULL behavior was designed to be similar to other SQL databases, so the specifics above apply to most databases.

SQL: Selecting expressions from tables
When SELECTing from a table, we can SELECT expressions computed from the table's columns.

> 
exec(`CREATE TABLE cats (name TEXT, age INTEGER)`)
exec(`INSERT INTO cats (name, age) VALUES ('Ms. Fluff', 3)`)
exec(`SELECT age, age + 1 AS age_next_year FROM cats`)
[{age: 3, age_next_year: 4}] 
In JavaScript, we can concatenate strings like "a" + "b". In SQLite, we concatenate with "a" || "b". This syntax is unfortunate because || means "or" in most other languages. (In SQL, "or" is simply OR.)

> 
exec(`CREATE TABLE cats (name TEXT)`)
exec(`INSERT INTO cats (name) VALUES ('Ms. Fluff')`)
exec(`SELECT name || ' the cat' AS name FROM cats`)
[{name: 'Ms. Fluff the cat'}] 
This doesn't change Ms. Fluff because SELECT never changes tables. That makes it safer to hack away at SELECTs when exploring the data.

SQL dialects tend to have more built-in operators than other programming languages. For example, most programming languages have >, <, >=, and <=. SQL has those too.

But most SQL dialects also have a special BETWEEN operator. In SQL, instead of x >= y and x <= z, we can say x BETWEEN y AND z. (Remember that SQLite represents true as 1 and false as 0.)

> 
exec(`CREATE TABLE cats (name TEXT, age INTEGER)`)
exec(`INSERT INTO cats (name, age) VALUES ('Ms. Fluff', 3)`)
exec(`INSERT INTO cats (name, age) VALUES ('Katy Purry', 5)`)
exec(`SELECT name, age BETWEEN 2 AND 3 AS is_2_or_3 FROM cats`)
[{is_2_or_3: 1, name: 'Ms. Fluff'}, {is_2_or_3: 0, name: 'Katy Purry'}] 
The AND in x BETWEEN y AND z is an interesting example of SQL syntax. Normally, AND in SQL is a "logical and", like && in most programming languages. SELECT 1 AND 1 returns 1, SELECT 1 AND 0 returns 0, etc.

SQL often reuses keywords, which is happening here. When we select x BETWEEN y AND z, the AND is part of BETWEEN. It has nothing to do with the logical AND of SELECT x AND y.

We can think of this by analogy to JavaScript's syntax. In JavaScript objects like {a: 1}, : separates the property from its value. In JavaScript switch statements, we say case x:, with the : marking the case clause. Both of these use the same : character, but it means something different in each context. A similar thing is happening with AND: in SQL, it can be either a "logical and" or it can be part of BETWEEN.

SQL is making a trade-off here that doesn't exist in any popular language created since the 90s: it's using huge numbers of language keywords instead of providing functions.

In JavaScript, most functions are required or imported from third-party NPM modules. In Python or Java, which have larger standard libraries, a lot of functions come with the language. In SQL, many "functions" aren't functions at all; they're syntax of the language itself, like x BETWEEN y AND z. This is why JavaScript has 64 keywords, but PostgreSQL's SQL dialect has 760.

Here's a code problem for you to complete:

Select two values from the cats table. First: the cats' names, with " the cat" appended to each. Second: is_3_years_old, a boolean (represented as 0 or 1 in SQLite). Remember that equality comparison in SQL is =, not == or ===.

> 
exec(`CREATE TABLE cats (name TEXT, age INTEGER)`)
exec(`INSERT INTO cats (name, age) VALUES ('Ms. Fluff', 3)`)
exec(`INSERT INTO cats (name, age) VALUES ('Keanu', 2)`)
exec(`SELECT name || ' the cat' as name, age = 3 AS is_3_years_old FROM cats `)

GOAL:	
[{is_3_years_old: 1, name: 'Ms. Fluff the cat'}, {is_3_years_old: 0, name: 'Keanu the cat'}]
YOURS:	
[{is_3_years_old: 1, name: 'Ms. Fluff the cat'}, {is_3_years_old: 0, name: 'Keanu the cat'}] 

SQL: Multiple statements
SQL allows us to separate statements with ;. When we do that, only the data from the final statement will be returned.

> 
exec(`SELECT 1; SELECT 2 AS two`)
[{two: 2}] 
Here's a code problem for you to complete:

Use SQL's ; syntax to:

Create a users table with a text name.
Insert a user named "Amir".
Select the user back out.
> 
exec(`
  CREATE TABLE users (name TEXT); INSERT INTO users (name) VALUES ('Amir'); SELECT * FROM users



`)
GOAL:	
[{name: 'Amir'}]
YOURS:	
[{name: 'Amir'}] 
When using multiple statements, later statements will always see changes made by earlier statements. That's true for INSERT, UPDATE, DELETE, and any other kind of change.

Here's a code problem for you to complete:

Use ; to update Amir's name to "Amir A", then select all of the users.

> 
exec(`CREATE TABLE users (name TEXT)`)
exec(`INSERT INTO users (name) VALUES ('Amir')`)
exec(`
  UPDATE users SET name = 'Amir A';SELECT * FROM users

`)
GOAL:	
[{name: 'Amir A'}]
YOURS:	
[{name: 'Amir A'}] 
Usually, ; will work like you'd expect: it's like you're calling exec multiple times. However, there's one notable exception.

Many database APIs don't let us use ; with bind parameters. Our database API has that constraint: if we use both of these API features at the same time, it will cause an error. Unlike most errors in this course, this one comes from Execute Program itself, not from SQLite.

> 
// Bind parameters can't be used with multiple statements.
// (Many database libraries have this limitation.)
exec(`SELECT 1; SELECT ? AS two`, [1])
Error: It looks like you tried to execute multiple statements with ";" while also using bind parameters. Many database APIs, including Execute Program's, don't allow you to do both of those at the same time. Try executing each statement in a separate call to "exec" instead of using semicolons. (This error is specific to Execute Program; it doesn't come from SQLite.) 
> 
exec(`SELECT ?; SELECT ? AS two`, [1, 2])
Error: It looks like you tried to execute multiple statements with ";" while also using bind parameters. Many database APIs, including Execute Program's, don't allow you to do both of those at the same time. Try executing each statement in a separate call to "exec" instead of using semicolons. (This error is specific to Execute Program; it doesn't come from SQLite.) 
Finish Lesson


SQL: Null in unique constraints
What happens if there are NULLs in a column with a UNIQUE constraint? At first glance, here's what you might expect: one NULL is allowed, but multiple NULLs will violate the UNIQUE constraint. But that would make some things very difficult in practice. Here's an example:

Suppose that we have a users table with an email column, which has a UNIQUE constraint. Some users will register with a third-party authentication system like Google's, Twitter's, or GitHub's. Those users will have a NULL email address column.

If a UNIQUE constraint only allowed one NULL, then only one user would be allowed to register with those third-party authentication systems. After that, all further registration attempts would violate the UNIQUE constraint.

For exactly this reason, UNIQUE has special behavior for NULL. NULL values are effectively ignored by a UNIQUE constraint.

(In the following examples, you can answer with error if a query will result in an error. Queries like INSERT and CREATE that return no rows will have a return value of [].)

Each of these example uses this table. Each example is separate, and each starts with the table empty.

> 
exec(`CREATE TABLE users (email TEXT NULL UNIQUE)`)
[] 
> 
exec(`INSERT INTO users (email) VALUES ('amir@example.com')`)
exec(`INSERT INTO users (email) VALUES ('betty@example.com')`)
[] 
> 
exec(`INSERT INTO users (email) VALUES (NULL)`)
exec(`SELECT * FROM users`)
[{email: null}] 
> 
exec(`INSERT INTO users (email) VALUES ('amir@example.com')`)
exec(`INSERT INTO users (email) VALUES ('amir@example.com')`)
Error: UNIQUE constraint failed: users.email 
> 
exec(`INSERT INTO users (email) VALUES (NULL)`)
exec(`INSERT INTO users (email) VALUES (NULL)`)
exec(`SELECT * FROM users`)
[{email: null}, {email: null}] 
Sometimes, language quirks are mistakes: a language designer might not anticipate problems with the language they've designed. This NULL/UNIQUE behavior is a quirk, but it's not a language design mistake. It's an intentional choice that allows us to build databases like the one above.

SQL: Referencing other tables
Until this lesson, every table in the course has been an island: it hasn't related to other tables. In real systems, data relates to other data. To start with a simple example: people can own cats.

In a general-purpose programming language like JavaScript, we might represent that as: {name: 'Amir', cats: [{name: 'Ms. Fluff'}]}. The cats are stored as part of the person. Many SQL databases will allow us to store cats "inside" people in this way. However, if we use that style then we give up much of SQL's value.

Instead, we'll create two separate tables. Each person will have an integer ID. Each cat will have an integer owner_id holding the owner's ID. (Remember that execing an INSERT, CREATE, etc. returns [].)

> 
exec(`
  CREATE TABLE people (id INTEGER PRIMARY KEY, name TEXT NOT NULL);
  CREATE TABLE cats (owner_id INTEGER NOT NULL, name TEXT NOT NULL);
  INSERT INTO people (id, name) VALUES (100, 'Amir');
  INSERT INTO cats (owner_id, name) VALUES (100, 'Ms. Fluff');
`)
[] 
> 
exec(`SELECT id FROM people WHERE name = 'Amir';`)
[{id: 100}] 
> 
exec(`SELECT name FROM cats WHERE owner_id = 100;`)
[{name: 'Ms. Fluff'}] 
> 
exec(`SELECT name FROM cats WHERE owner_id = 101;`)
[] 
We can combine the person and cat queries in a JavaScript function.

> 
function findCatNames(personName) {
  const allCatNames = []
  const people = exec(`SELECT id FROM people WHERE name = ?`, [personName])
  for (const person of people) {
    const cats = exec(`SELECT name FROM cats WHERE owner_id = ?`, [person.id])
    for (const cat of cats) {
      allCatNames.push(cat.name)
    }
  }
  return allCatNames
}
findCatNames('Amir')
['Ms. Fluff'] 
One important note about tables that reference each other. We would never create separate tables named amir_cats, betty_cats, etc. Instead, we leave all of the cats in one table. When we need to find a certain person's cats, we let the ID columns guide us.

That's part of a more general rule of SQL databases: the application itself never changes the database's structure. The application doesn't create or drop tables or change columns. We set the database schema up in advance. Then the application creates, updates, and deletes rows.

Having only one cats table doesn't limit us. We can select a person's cats by owner_id, even when there are multiple people with different cats:

> 
exec(`
  CREATE TABLE people (id INTEGER PRIMARY KEY, name TEXT NOT NULL);
  CREATE TABLE cats (owner_id INTEGER NOT NULL, name TEXT NOT NULL);

  -- Amir owns Ms. Fluff.
  INSERT INTO people (id, name) VALUES (100, 'Amir');
  INSERT INTO cats (owner_id, name) VALUES (100, 'Ms. Fluff');

  -- Betty owns Keanu.
  INSERT INTO people (id, name) VALUES (101, 'Betty');
  INSERT INTO cats (owner_id, name) VALUES (101, 'Keanu');
`)

// The database holds both Amir's and Betty's cats.
// Selecting by owner ID lets us distinguish between them.
exec(`SELECT name FROM cats WHERE owner_id = ?`, [100])
[{name: 'Ms. Fluff'}] 
Here's a code problem for you to complete:

Write a function to find the names of all toys owned by a certain cat.

> 
exec(`
  CREATE TABLE cats (id INTEGER PRIMARY KEY, name TEXT NOT NULL);
  CREATE TABLE toys (cat_id INTEGER NOT NULL, name TEXT NOT NULL);
  INSERT INTO cats (name) VALUES ('Ms. Fluff');
  INSERT INTO cats (name) VALUES ('Keanu');
  INSERT INTO toys (cat_id, name) VALUES (1, 'Birdo');
  INSERT INTO toys (cat_id, name) VALUES (2, 'Mouser');
`)
function findToys(catName) {
  const allToyNames = []
  
  const cats = exec(`SELECT id FROM cats WHERE name =?`, [catName])
  for (let i=0; i<cats.length; i++){
    const toys = exec(`SELECT name FROM toys WHERE cat_id =?`, [cats[i].id])
    for (let j=0; j<toys.length;j++){
    allToyNames.push(toys[j].name)
  }
  }
  return allToyNames
}
findToys('Ms. Fluff')
GOAL:	
['Birdo']
YOURS:	
['Birdo'] 
SQL: SQL injection
At first glance, SQL databases' bind parameters seem unnecessary. (Bind parameters are the ? in SELECT * FROM users WHERE id = ?.) Can't we just use string concatenation instead?

Imagine that we're writing an account registration form for a web app. The user enters their email address into our form. Then we insert the email address into our database.

In the next example, look at how we build the INSERT statement. We're concatenating strings to build the SQL rather than using bind parameters.

> 
exec(`CREATE TABLE users (email TEXT UNIQUE)`)

function register(email) {
  exec(`INSERT INTO users (email) VALUES ('` + email + `')`)
}

register('amir@example.com')
exec(`SELECT * FROM users`)
[{email: 'amir@example.com'}] 
That code example will technically work... if all of our users are very nice people who don't know about SQL injection attacks!

In any real-world system, that code is very, very bad. It's the worst code in this course! It contains a security hole that will allow an attacker to execute any SQL that they want. They can pull data out of our database, or change it, or delete it. All they have to do is enter a carefully built string into the account registration form.

Let's start by examining the way that we build the query: by combining strings with +. We'll forget about the database itself for a moment and just focus on the SQL.

Be careful with the next few code examples; it's easy to make a mistake with the quotes. You may find it useful to copy and paste the strings together, emulating what JavaScript will do.

> 
const email = "amir@example.com"
"INSERT INTO users (email) VALUES ('" + email + "')"
"INSERT INTO users (email) VALUES ('amir@example.com')" 
> 
const email = "' oh no '"
"INSERT INTO users (email) VALUES ('" + email + "')"
"INSERT INTO users (email) VALUES ('' oh no '')" 
> 
const email = "'); DROP TABLE users; --"
"INSERT INTO users (email) VALUES ('" + email + "')"
"INSERT INTO users (email) VALUES (''); DROP TABLE users; --')" 
What will happen if the user types that last email string into our registration form's email field? It won't result in a user with an email column of ''); DROP TABLE users; --. Instead, the combined string shown above will be executed as SQL... including the DROP TABLE after the semicolon. It will actually drop the entire users table in our production database!

Let's see the SQL injection run for real, deleting the table. (Remember that you can type error if the code will error.)

> 
exec(`CREATE TABLE users (email TEXT UNIQUE)`)
exec(`INSERT INTO users (email) VALUES (''); DROP TABLE users; --')`)
exec(`SELECT * FROM users`)
Error: no such table: users 
And here's a more complete version, using our original register function:

> 
exec(`CREATE TABLE users (email TEXT UNIQUE)`)

function register(email) {
  exec(`INSERT INTO users (email) VALUES ('` + email + `')`)
}

register("'); DROP TABLE users; --")

exec(`SELECT * FROM users`)
Error: no such table: users 
The key to this attack is the quote (') that closes the string in our INSERT. After that point, the rest of the user's "email address" string is executed as SQL code.

This technique is one of the most common security exploits on the Internet. It's called a "SQL injection attack" because the attacker injects their own SQL code into our database query. That makes this the most important lesson in this SQL course!

SQL injection is still a huge real-world problem "that will never go away". Some people keep lists of data leaks caused by SQL injection attacks. When this lesson was written, the four most recent entries in the list included: data stolen from the government of India, patient records from a medical company, and users' financial data.

One interesting question about the attack string: why is there a comment (--) at the end? Because otherwise there would be a dangling ') at the end of the combined SQL string, causing a syntax error in the SQL. The attacker adds the comment to prevent that syntax error, which would stop their attack code from running.

(For the next two examples, remember that successful CREATEs and INSERTs return no rows: []. And you can answer "error" if the code will result in an error.)

This is valid SQL:

> 
exec(`CREATE TABLE users (email TEXT UNIQUE)`)
exec(`INSERT INTO users (email) VALUES (''); DROP TABLE users; --')`)
[] 
But this is not, because of the mismatched single quote (') at the end:

> 
exec(`CREATE TABLE users (email TEXT UNIQUE)`)
exec(`INSERT INTO users (email) VALUES (''); DROP TABLE users;')`)
Error: unrecognized token: "')" 
This form of SQL injection has been made even more famous by an XKCD comic about it. Take a look at the code in that comic: it's exactly the kind of attack that we just saw! It closes off a string, uses a semicolon to start a new statement, drops a table, and has a comment to avoid a syntax error.

Here's a code problem for you to complete:

Drop the students table by executing a "Bobby Tables" SQL injection attack, as made famous by XKCD. (If you get stuck, try using a text editor to manually combine your attack string with the other strings in the register function. Make sure that that combined SQL string looks right.)

> 
exec(`CREATE TABLE students (name TEXT)`)

function register(name) {
  exec(`INSERT INTO students (name) VALUES ('` + name + `')`)
}

register(
  "Robert');DROP TABLE students; --"

)

exec(`SELECT * FROM students`)
GOAL:	
Error: no such table: students
YOURS:	
Error: no such table: students 
We've used DROP TABLE to show that an attacker can run SQL maliciously. However, deleting data isn't their only option. For example, they might UPDATE our database to become an administrator without us noticing.

Like before, let's start by seeing how the attack SQL is constructed. (And like before, you may want to copy and paste the pieces of this string together.)

> 
const email = "attacker@example.com'); UPDATE users SET admin = 1 WHERE email = 'attacker@example.com';--"
"INSERT INTO users (email) VALUES ('" + email + "')"
"INSERT INTO users (email) VALUES ('attacker@example.com'); UPDATE users SET admin = 1 WHERE email = 'attacker@example.com';--')" 
Here's a code problem for you to complete:

Use a SQL injection attack to make attacker@example.com an administrator. (Note: our code here also inserts an innocent user. After the attack is executed, the innocent user shouldn't be an admin, so you'll need a WHERE on your UPDATE. The final SELECT here will return both users: attacker and innocent.)

> 
exec(`CREATE TABLE users (email TEXT, admin INTEGER NOT NULL DEFAULT 0)`)
exec(`INSERT INTO users (email) VALUES ('innocent@example.com')`)

function register(email) {
  exec(`INSERT INTO users (email) VALUES ('` + email + `')`)
}

register(
  "attacker@example.com'); UPDATE users SET admin = 1 WHERE email = 'attacker@example.com'; UPDATE users SET admin = 0 WHERE email = 'innocent@example.com';--'"

)

exec(`SELECT * FROM users`)
GOAL:	
[{admin: 0, email: 'innocent@example.com'}, {admin: 1, email: 'attacker@example.com'}]
YOURS:	
[{admin: 0, email: 'innocent@example.com'}, {admin: 1, email: 'attacker@example.com'}] 
Great! Now please never do that to anyone else's web app!

SQL injection attacks are subtle, but the practical takeaway from this lesson is simple. Never concatenate SQL strings, even if it seems safe. Write your SQL in a single, self-contained string. If you need to pass dynamic data to your INSERTs, SELECTs, etc., use bind parameters. Bind parameters are carefully implemented by the database authors to inject values securely.

Please don't let the direness of this warning scare you away from SQL! Avoiding SQL injection is relatively easy if you never concatenate SQL strings. And in practice, most projects use object-relational mappers or other higher-level libraries that generate SQL. When using those libraries, you'll still need to understand the concepts in this course. But the library will help you to avoid SQL injection vulnerabilities.

A final note: this kind of attack can happen in other languages, too; it's not specific to SQL. If your application ever executes user input as code, then there's a potential security vulnerability. This is why most teams' linter configurations disallow the eval function. Always treat user input with care!

Finish Lesson
Brag…


SQL: Foreign keys
One big selling point of SQL databases is correctness: the database lets us set up constraints that should never be violated. Then it makes sure that we don't accidentally violate them.

We can't insert into columns that don't exist.
We can't insert or update nulls into NOT NULL columns.
We can't insert or update duplicate values in UNIQUE columns.
In most databases, we can't insert the wrong data type into columns. (SQLite is an anomaly here; it allows us to make this mistake.)
We've seen tables referencing other tables, like a cat's owner_id referencing a person's id. What if we make a mistake with those IDs? What if we insert a cat whose owner_id doesn't reference any actual person? So far, we haven't seen a way to prevent that.

(Remember that statements like CREATE and INSERT return [].)

> 
exec(`
  CREATE TABLE people (id INTEGER PRIMARY KEY, name TEXT NOT NULL);
  -- Remember that INTEGER PRIMARY KEYs start at 1.
  INSERT INTO people (name) VALUES ('Amir');
  
  CREATE TABLE cats (owner_id INTEGER NOT NULL, name TEXT NOT NULL);
  INSERT INTO cats (owner_id, name) VALUES (2170, 'Ms. Fluff');
`)
[] 
> 
exec(`SELECT id FROM people`)
[{id: 1}] 
> 
exec(`SELECT owner_id FROM cats WHERE name = 'Ms. Fluff'`)
[{owner_id: 2170}] 
> 
exec(`SELECT name FROM people WHERE id = 2170`)
[] 
This is a problem! The cat has an owner_id, but there's no person with that ID.

Suppose that this database is being used by a cat groomer. Ms. Fluff is dropped off, gets her grooming, looks great... and the database says that her owner is person 2170, who doesn't exist. Who do we call to pick her up? The database is wrong; cats are supposed to have owners who actually exist!

We can prevent this mistake with a foreign key: a column whose value must equal a value in another table. In our case, we want the database to ensure that every cat's owner_id equals some person's id.

Note the new REFERENCES syntax in the cats table below.

> 
exec(`
  CREATE TABLE people (id INTEGER PRIMARY KEY, name TEXT NOT NULL);
  CREATE TABLE cats (
    owner_id INTEGER REFERENCES people(id),
    name TEXT NOT NULL
  );
`)
[] 
The database won't let us violate this foreign key in any way.

We can't insert a cat whose owner_id references a person ID that doesn't exist.
We can't change an existing cat's owner_id to one that doesn't match some person.
If some cats reference a person, then we can't change the person's ID. That would leave the cats referencing a person ID that doesn't exist.
For the same reason, we can't delete a person referenced by some cats.
(All of the following examples use the two tables above. Each example is separate, and each starts with the tables empty. Remember that you can type error to indicate an error.)

> 
exec(`
  INSERT INTO people (id, name) VALUES (100, 'Amir');
  INSERT INTO cats (owner_id, name) VALUES (100, 'Ms. Fluff');
`)
[] 
> 
exec(`INSERT INTO cats (owner_id, name) VALUES (200, 'Keanu')`)
Error: FOREIGN KEY constraint failed 
> 
exec(`
  INSERT INTO people (id, name) VALUES (100, 'Amir');
  INSERT INTO cats (owner_id, name) VALUES (100, 'Ms. Fluff');
  UPDATE people SET id = 101 WHERE name = 'Amir';
`)
Error: FOREIGN KEY constraint failed 
> 
exec(`
  INSERT INTO people (id, name) VALUES (100, 'Amir');
  INSERT INTO cats (owner_id, name) VALUES (100, 'Ms. Fluff');
  UPDATE cats SET owner_id = 101 WHERE name = 'Ms. Fluff';
`)
Error: FOREIGN KEY constraint failed 
> 
exec(`
  INSERT INTO people (id, name) VALUES (200, 'Betty');
  INSERT INTO cats (owner_id, name) VALUES (200, 'Keanu');
  DELETE FROM people WHERE name = 'Betty';
`)
Error: FOREIGN KEY constraint failed 
> 
exec(`
  INSERT INTO people (id, name) VALUES (200, 'Betty');
  INSERT INTO cats (owner_id, name) VALUES (200, 'Keanu');
  DELETE FROM cats WHERE name = 'Keanu';
  DELETE FROM people WHERE name = 'Betty';
`)
[] 
All of this safety comes from that one little REFERENCES in our table definition. This shows us the power of SQL's declarative constraints. We don't have to write separate code to say "a person can't be deleted if they still have cats", "a cat can't be updated to have an owner ID who doesn't exist", etc. That one REFERENCES clause prevents many kinds of mistakes.

We have a nice phrase that describes preventing all of those mistakes: referential integrity. Referential as in "concerning references from one table to another"; and integrity as in "the references are guaranteed to be correct".

Here's a code problem for you to complete:

Create a cats table with a TEXT name and an owner_id INTEGER foreign key that references the id column of the people table.

> 
exec(`CREATE TABLE people (id INTEGER PRIMARY KEY, name TEXT NOT NULL);`)
exec(`
  CREATE TABLE cats (name TEXT, owner_id INTEGER REFERENCES people(id))




`)
exec(`INSERT INTO cats (owner_id, name) VALUES (200, 'Keanu')`)
GOAL:	
Error: FOREIGN KEY constraint failed
YOURS:	
Error: FOREIGN KEY constraint failed 
We're still allowed to UPDATE and DELETE rows in any way that satisfies the foreign key constraint. For example, we can update Keanu's owner_id to reference Amir instead of Betty. Then Betty can be deleted because no cats reference her any more.

> 
exec(`
  -- Ms. Fluff belongs to Amir (user 100)
  INSERT INTO people (id, name) VALUES (100, 'Amir');
  INSERT INTO cats (owner_id, name) VALUES (100, 'Ms. Fluff');

  -- Keanu belongs to Betty (user 200)
  INSERT INTO people (id, name) VALUES (200, 'Betty');
  INSERT INTO cats (owner_id, name) VALUES (200, 'Keanu');
  
  -- Keanu belongs to Amir instead of Betty
  UPDATE cats SET owner_id = 100 WHERE name = 'Keanu';
  
  -- Delete Betty, who is no longer referenced by any cats
  DELETE FROM people WHERE name = 'Betty';
  SELECT name, owner_id FROM cats;
`)
[{name: 'Ms. Fluff', owner_id: 100}, {name: 'Keanu', owner_id: 100}] 
The foreign keys were respected at every step of that change:

Initially, both cats' owner_ids reference different people.
We update Keanu's owner_id to be 100, which is Amir's ID. Now both cats are owned by Amir.
Then we delete Betty, which is OK because no cats reference her any more.
Setting up these constraints takes effort. It's more work than throwing all of our data into a schemaless database with no foreign keys. However, we do this work because it saves us from other work that's more annoying, more difficult, and more error-prone.

Carefully creating a schema now means that we're less likely to end up with invalid data in our production database. Our foreign key means that we'll never find "orphaned" cats whose owner_id references an owner who doesn't exist. If PostgreSQL ever allows us to orphan a cat, that's a bug in PostgreSQL!

You may also hear people talk about "leaked" records, by analog to memory leaks. That means the same thing as "orphaned": a row that's referencing another row that no longer exists, because we didn't add a foreign key constraint.

Finally, a note about terminology. Why are these called foreign keys? A key is a column that uniquely identifies a row. We've seen several tables with a numeric key called id. But we could have other types of keys. For example, users tables often have an email column that's a key: no two users ever have the same email.

A cat's owner_id references the person's id key. From the cat's perspective, owner_id is referencing something "foreign": the id column of the people table. That's why it's a "foreign key".

Quiz: "Two foreign keys"
Let's write some code. You can solve this problem using only what you've learned in this course so far. If you need a reminder, there's a cheat sheet for all of the lessons that you've finished at the bottom-right of the page.

Each test below shows some code and its result. Your goal is to get each test's actual result to match the expected result.

Edit the code below until all tests pass. If you get stuck, try getting each test to pass individually.

Create three tables:

People have an id and a name.
Cats have an id, an owner_id, and a name.
Toys have a cat_id and a name.
Both IDs are integer primary keys.
>
exec(`
  -- Deleting a person with cats fails.
  INSERT INTO people (id, name) VALUES (100, 'Amir');
  INSERT INTO cats (id, owner_id, name) VALUES (1000, 100, 'Ms. Fluff');
  INSERT INTO toys (cat_id, name) VALUES (1000, 'Birdo');
  DELETE FROM people WHERE name = 'Amir';
`)
Expected: Error: FOREIGN KEY constraint failed OK!
>
exec(`
  -- Deleting a cat with toys fails.
  INSERT INTO people (id, name) VALUES (100, 'Amir');
  INSERT INTO cats (id, owner_id, name) VALUES (1000, 100, 'Ms. Fluff');
  INSERT INTO toys (cat_id, name) VALUES (1000, 'Birdo');
  DELETE FROM cats WHERE name = 'Ms. Fluff';
`)
Expected: Error: FOREIGN KEY constraint failed OK!
>
exec(`
  -- Changing a toy's cat_id fails.
  INSERT INTO people (id, name) VALUES (100, 'Amir');
  INSERT INTO cats (id, owner_id, name) VALUES (1000, 100, 'Ms. Fluff');
  INSERT INTO toys (cat_id, name) VALUES (1000, 'Birdo');
  UPDATE toys SET cat_id = 1001 WHERE name = 'Birdo';
`)
Expected: Error: FOREIGN KEY constraint failed OK!
3 tests, 0 failures
exec(`
CREATE TABLE people (name TEXT, id INTEGER UNIQUE);
CREATE TABLE cats (name TEXT, id INTEGER UNIQUE, owner_id REFERENCES people(id));
CREATE TABLE toys (name TEXT, cat_id INTEGER REFERENCES cats(id));

`)



const email = "'); DROP TABLE users; --"
"INSERT INTO users (email) VALUES ('" + email + "')"
"INSERT INTO users (email) VALUES (''); DROP TABLE users; --')"  

SQL: On conflict do nothing
Suppose that we want to track whether the cats have been vaccinated. Vaccination only needs to happen once, so we don't need to track a vaccination count. If a cat exists in the vaccinations table, then they've been vaccinated.

> 
exec(`CREATE TABLE vaccinations (cat_name TEXT UNIQUE NOT NULL)`)
exec(`INSERT INTO vaccinations (cat_name) VALUES ('Ms. Fluff')`)
exec(`SELECT * FROM vaccinations`)
[{cat_name: 'Ms. Fluff'}] 
The fact that Ms. Fluff is in the vaccinations table tells us that she's been vaccinated. But what if she's accidentally vaccinated a second time, and we try to insert her again? (Remember that the cat_name column has a UNIQUE constraint.)

> 
exec(`CREATE TABLE vaccinations (cat_name TEXT UNIQUE NOT NULL)`)
exec(`INSERT INTO vaccinations (cat_name) VALUES ('Ms. Fluff')`)
exec(`INSERT INTO vaccinations (cat_name) VALUES ('Ms. Fluff')`)
Error: UNIQUE constraint failed: vaccinations.cat_name 
This isn't what we want! She was already vaccinated, so vaccinating her again shouldn't change this table.

We could use JavaScript's catch to catch the error, but there's a better way. SQL allows us to specify what happens when there's a conflict (that is, when a constraint is violated).

The simplest thing that we can do is nothing at all: when there's a conflict, we ignore it. In SQL terms, we tell the database ON CONFLICT, the column that might conflict (cat_name), and what to do (DO NOTHING). The insert is aborted, so nothing in the database changes.

> 
exec(`CREATE TABLE vaccinations (cat_name TEXT UNIQUE NOT NULL)`)
exec(`INSERT INTO vaccinations (cat_name) VALUES ('Ms. Fluff')`)
exec(`
  INSERT INTO vaccinations (cat_name) VALUES ('Ms. Fluff')
  ON CONFLICT (cat_name) DO NOTHING
`)
exec(`SELECT * FROM vaccinations`)
[{cat_name: 'Ms. Fluff'}] 
ON CONFLICT ... DO NOTHING is useful whenever you want to make sure that a certain row exists, but don't need to do anything if it already exists.

Imagine that we allow users to request deactivation of their accounts. To do that, they email support, and the support representative deactivates the account for them. We track the date that the account was deactivated.

Sometimes, a user will request account deactivation again because they forget that they're already deactivated. When that happens, we don't create another deactivation record, and we don't change the deactivation date. The support representative still tells our system to deactivate the account, but the system uses ON CONFLICT (...) DO NOTHING to ignore the request.

Here's a code problem for you to complete:

Amir requested account deactivation on 2025-10-03. We deactivated his account as requested. Then they requested deactivation again on 2025-10-22. We want that request to be ignored, and it shouldn't change the deactivation date. Finish the final INSERT here to use ON CONFLICT to ignore the deactivation request if the account is already deactivated.

> 
exec(`
  CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL
  )
`)
exec(`
  CREATE TABLE deactivations (
    user_id UNIQUE REFERENCES users(id),
    date TEXT NOT NULL
  )
`)
exec(`INSERT INTO users (name) VALUES ('Amir')`)
exec(`INSERT INTO deactivations (user_id, date) VALUES (1, '2025-10-03')`)
exec(`
  INSERT INTO deactivations (user_id, date) VALUES (1, '2025-10-22')
  ON CONFLICT (user_id) DO NOTHING

`)
exec(`SELECT * FROM deactivations`)
GOAL:	
[{date: '2025-10-03', user_id: 1}]
YOURS:	
[{date: '2025-10-03', user_id: 1}] 

SQL: Constraint analysis
What if a foreign key column is null? By default, that's allowed. A cat with a null owner_id means "this cat has no owner".

> 
exec(`
  CREATE TABLE people (id INTEGER PRIMARY KEY, name TEXT NOT NULL);
  CREATE TABLE cats (
    owner_id INTEGER REFERENCES people(id),
    name TEXT NOT NULL
  );
  INSERT INTO cats (owner_id, name) VALUES (null, 'Ms. Fluff');
  SELECT * FROM cats;
`)
[{name: 'Ms. Fluff', owner_id: null}] 
The database lets us do this because we might want it! For example, imagine that we're building a site where users can register with discount codes. Some users register with a discount code, but others don't. We want to track which users registered with which discount codes.

This sounds simple, but there are a few subtle decisions to be made. Let's do some analysis to come up with appropriate database constraints.

Our database will have two tables, discounts (id, discount_code) and users (id, discount_id, name). We'll analyze the three most common types of constraints: foreign keys, nullability, and uniqueness.

First: should users' discount_id be a foreign key to discounts? Yes! Otherwise users could reference discounts that don't exist, which doesn't make sense.
Second: should every user have a discount_id, or is it OK for some of them to be null? Some users will register without using a discount code. For those users, discount_id should be null. So discount_id should be nullable.
Third: can two users reference the same discount? This is a more subtle decision.
In some systems, discount codes can be used many times; in others, they can only be used once. We'll decide that discount codes can only be used once. We can guarantee that by making users' discount_id unique. If no two users can have the same discount_id, then no discount code can be used twice.

That gives us three constraint decisions:

Users' discount_id is a foreign key to discounts.
Users' discount_id is nullable.
Users' discount_id is unique.
> 
exec(`
  CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    discount_id INTEGER REFERENCES discounts(id) NULL UNIQUE
  );
  CREATE TABLE discounts (id INTEGER PRIMARY KEY, discount_code TEXT NOT NULL);
`)
[] 
Now let's make sure that these tables work as intended. We'll run four different checks.

(Each of these examples uses the tables above, but the tables always begin empty. If you think that a statement will cause an error, you can type error as its output. Remember that executing a successful INSERT returns [].)

First, users can't reference discounts that don't exist.

> 
exec(`
  INSERT INTO users (name, discount_id) VALUES ('Amir', 1234)
`)
Error: FOREIGN KEY constraint failed 
Second, users can register with no discount at all (discount_id can be null).

> 
exec(`
  INSERT INTO users (name, discount_id) VALUES ('Amir', null)
`)
[] 
Third, users can reference discounts that do exist.

> 
exec(`
  INSERT INTO discounts (id, discount_code) VALUES (1, 'one-time-use-a1b2c3');
  INSERT INTO users (name, discount_id) VALUES ('Amir', 1);
`)
[] 
Fourth, two users can't reference the same discount. (Amir uses the discount, then shares it with Betty, who tries to use it.)

> 
exec(`
  INSERT INTO discounts (id, discount_code) VALUES (1, 'one-time-use-a1b2c3');
  INSERT INTO users (name, discount_id)
    VALUES
      ('Amir', 1),
      ('Betty', 1);
`)
Error: UNIQUE constraint failed: users.discount_id 
As you gain experience with SQL, you'll learn patterns about when certain constraints are appropriate. For example, users' email addresses are usually TEXT NOT NULL UNIQUE. An is_admin flag will usually be BOOLEAN NOT NULL DEFAULT FALSE. And so on.

Foreign keys are more tricky. For foreign keys, it's a good idea to always slow down and explicitly ask the questions that we asked above:

"Is it OK for a row to have no value for this foreign key?"
"Is it OK for two rows to have the same value for this foreign key?"
Here's another example where we ask the same questions, but get very different answers. Users can post comments. Each comment has a user_id referencing the user who posted it. Now, the analysis questions:

First: should user_id be a foreign key to users? Yes! We don't want the database to think that a comment was posted by someone who doesn't exist.
Second: should every comment have a user_id, or is it OK for some of them to have a null user_id? Every comment is posted by someone (unless the computer is haunted by ghosts). So comments' user_id should be NOT NULL.
Third: can two comments reference the same user? Like before, this one is more subtle.
If only one comment can reference a given user, then trying to insert a second comment by the same user will error. A system with that constraint would only allow each user to post exactly one comment, ever. We want users to post multiple comments, so the comments' user_id foreign key should not be unique.

Again, we have three constraint decisions. But when compared to the user/discount example, we've made opposite decisions about nullability and uniqueness:

Comments' user_id is a foreign key to users (the same as user/discount).
Comments' user_id is not nullable (the opposite of user/discount).
Comments' user_id is not unique (the opposite of user/discount).
> 
exec(`
  CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL
  );
  CREATE TABLE comments (
    user_id REFERENCES users(id) NOT NULL,
    comment_text TEXT NOT NULL
  );
`)
[] 
Now let's check each of those constraints, like we did for the user/discount example. (Each of these examples uses the tables above, but the tables always begin empty.)

First, comments can't reference users that don't exist.

> 
exec(`
  INSERT INTO comments (user_id, comment_text)
    VALUES (1, 'Ms. Fluff needs a bath!');
`)
Error: FOREIGN KEY constraint failed 
Second, comments must reference a user (user_id can't be null).

> 
exec(`
  INSERT INTO comments (user_id, comment_text)
    VALUES (null, 'Ms. Fluff needs a bath!');
`)
Error: NOT NULL constraint failed: comments.user_id 
Third, comments can reference users that exist.

> 
exec(`
  INSERT INTO users (id, name) VALUES (1, 'Amir');
  INSERT INTO comments (user_id, comment_text)
    VALUES (1, 'Ms. Fluff needs a bath!');
`)
[] 
Fourth, two comments can reference the same user.

> 
exec(`
  INSERT INTO users (id, name) VALUES (1, 'Amir');
  INSERT INTO comments (user_id, comment_text)
    VALUES
      (1, 'Ms. Fluff needs a bath!'),
      (1, 'Ms. Fluff strongly dislikes water.');
`)
[] 
Our user/discount example is what's often called a "one-to-one" relationship. Each user relates to zero or one discounts, and each discount relates to zero or one users. A user never has multiple discounts, and a discount is never used by multiple users.

The user/comment example is a "one-to-many" relationship. One user can have many comments, but a comment is only related to one user.

Shorthand terms like one-to-one and one-to-many are useful for talking to other developers, but the database doesn't know what they mean. The database only knows about constraints. Even if you use shorthand with other humans, you have to make decisions about the individual constraints in your tables:

Should this column be a foreign key?
Can this column be null?
Can multiple rows have the same value for this column?


Quiz: "Discounts and users and comments"
Let's write some code. You can solve this problem using only what you've learned in this course so far. If you need a reminder, there's a cheat sheet for all of the lessons that you've finished at the bottom-right of the page.

Each test below shows some code and its result. Your goal is to get each test's actual result to match the expected result.

Edit the code below until all tests pass. If you get stuck, try getting each test to pass individually.

Create users, discounts, and comments tables. A user can have one discount (but may have no discount at all). Many comments can belong to the same user.

We've given you the basic table structure. However, the constraints are missing (foreign keys, nullability, and uniqueness). Insert the appropriate constraints, using the tests as a guide.

>
// Users can't reference discounts that don't exist.
exec(`INSERT INTO users (name, discount_id) VALUES ('Amir', 1234)`)
Expected: Error: FOREIGN KEY constraint failed OK!
>
// Users can have no discount.
exec(`INSERT INTO users (name, discount_id) VALUES ('Amir', null)`)
Expected: [] OK!
>
// Two users can't reference the same discount.
exec(`INSERT INTO discounts (id, discount_code) VALUES (1, 'one-time-use-a1b2c3')`)
exec(`INSERT INTO users (name, discount_id) VALUES ('Amir', 1)`)
exec(`INSERT INTO users (name, discount_id) VALUES ('Betty', 1)`)
Expected: Error: UNIQUE constraint failed: users.discount_id OK!
>
// Comments can't reference users that don't exist.
exec(`INSERT INTO comments (user_id, comment_text) VALUES (1, 'Ms. Fluff needs a bath!')`)
Expected: Error: FOREIGN KEY constraint failed OK!
>
// Comments can't have a null user reference.
exec(`INSERT INTO comments (user_id, comment_text) VALUES (null, 'Ms. Fluff needs a bath!')`)
Expected: Error: NOT NULL constraint failed: comments.user_id OK!
>
// Comments can reference a user.
exec(`INSERT INTO users (id, name) VALUES (1, 'Amir')`)
exec(`INSERT INTO comments (user_id, comment_text) VALUES (1, 'Ms. Fluff needs a bath!')`)
Expected: [] OK!
>
// Comments can reference users which themselves reference discounts.
exec(`INSERT INTO discounts (id, discount_code) VALUES (1, 'one-time-use-a1b2c3')`)
exec(`INSERT INTO users (id, name, discount_id) VALUES (1, 'Amir', 1)`)
exec(`INSERT INTO comments (user_id, comment_text) VALUES (1, 'Ms. Fluff strongly dislikes water.')`)
Expected: [] OK!
7 tests, 0 failures
exec(`
  CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    discount_id INTEGER UNIQUE REFERENCES discounts(id),
    name TEXT NOT NULL
  );
  CREATE TABLE discounts (
    id INTEGER PRIMARY KEY,
    discount_code TEXT NULL
  );
  CREATE TABLE comments (
    user_id INTEGER NOT NULL REFERENCES users(id),
    comment_text TEXT NOT NULL
  );
`)



SQL: Review
It's time to review! These examples are all taken from lessons that you've finished. Revisiting them makes sure that you haven't forgotten anything.

Type in what each expression will evaluate to. For example, for the prompt 1 + 1, you would type 2.

In this course, the exec function runs SQL code. It returns database rows as arrays of objects like [{name: 'Amir'}]. When you execute SQL statements that don't return data, like INSERT and UPDATE, exec returns []. You can type error if the code will result in an error.

> 
exec(`CREATE TABLE vaccinations (cat_name TEXT UNIQUE NOT NULL)`)
exec(`INSERT INTO vaccinations (cat_name) VALUES ('Ms. Fluff')`)
exec(`
  INSERT INTO vaccinations (cat_name) VALUES ('Ms. Fluff')
  ON CONFLICT (cat_name) DO NOTHING
`)
exec(`SELECT * FROM vaccinations`)
[{cat_name: 'Ms. Fluff'}] 
> 
exec(`
  CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL
  );
  CREATE TABLE comments (
    user_id REFERENCES users(id) NOT NULL,
    comment_text TEXT NOT NULL
  );
`)
exec(`
  INSERT INTO comments (user_id, comment_text)
    VALUES (null, 'Ms. Fluff needs a bath!');
`)
error 
> 
const email = "'); DROP TABLE users; --"
"INSERT INTO users (email) VALUES ('" + email + "')"
"INSERT INTO users (email) VALUES (''); DROP TABLE users; --')" 
> 
exec(`
  CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL
  );
  CREATE TABLE comments (
    user_id REFERENCES users(id) NOT NULL,
    comment_text TEXT NOT NULL
  );
`)
exec(`
  INSERT INTO users (id, name) VALUES (1, 'Amir');
  INSERT INTO comments (user_id, comment_text)
    VALUES
      (1, 'Ms. Fluff needs a bath!'),
      (1, 'Ms. Fluff strongly dislikes water.');
`)
[] 
> 
exec(`
  CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    discount_id INTEGER REFERENCES discounts(id) NULL UNIQUE
  );
  CREATE TABLE discounts (id INTEGER PRIMARY KEY, discount_code TEXT NOT NULL);
`)
exec(`
  INSERT INTO users (name, discount_id) VALUES ('Amir', null)
`)
[] 
Here's a code problem for you to complete:

Amir requested account deactivation on 2025-10-03. We deactivated his account as requested. Then they requested deactivation again on 2025-10-22. We want that request to be ignored, and it shouldn't change the deactivation date. Finish the final INSERT here to use ON CONFLICT to ignore the deactivation request if the account is already deactivated.

> 
exec(`
  CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL
  )
`)
exec(`
  CREATE TABLE deactivations (
    user_id UNIQUE REFERENCES users(id),
    date TEXT NOT NULL
  )
`)
exec(`INSERT INTO users (name) VALUES ('Amir')`)
exec(`INSERT INTO deactivations (user_id, date) VALUES (1, '2025-10-03')`)
exec(`
  INSERT INTO deactivations (user_id, date) VALUES (1, '2025-10-22')
  ON CONFLICT (user_id) DO NOTHING

`)
exec(`SELECT * FROM deactivations`)
GOAL:	
[{date: '2025-10-03', user_id: 1}]
YOURS:	
[{date: '2025-10-03', user_id: 1}] 
> 
exec(`
  CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    discount_id INTEGER REFERENCES discounts(id) NULL UNIQUE
  );
  CREATE TABLE discounts (id INTEGER PRIMARY KEY, discount_code TEXT NOT NULL);
`)
exec(`
  INSERT INTO discounts (id, discount_code) VALUES (1, 'one-time-use-a1b2c3');
  INSERT INTO users (name, discount_id)
    VALUES
      ('Amir', 1),
      ('Betty', 1);
`)
error 

SQL: Simple joins
Foreign keys let us guarantee that rows in one table correctly reference rows in another table. With that guarantee in place, we can ask the database system to combine the tables' data for us.

In this lesson, our goal is to produce a list of every cat's name, along with their owner's name. We could write that code in JavaScript, using a nested loop that executes one cat query per person. But that would be inefficient. SQL can do it in one query!

Here's our cats-and-owners database. (We'll use this database throughout this lesson, but it will always begin empty in each code example.)

> 
exec(`
  CREATE TABLE people (
    id INTEGER PRIMARY KEY NOT NULL,
    first_name TEXT NOT NULL
  );
  CREATE TABLE cats (
    id INTEGER PRIMARY KEY NOT NULL,
    owner_id INTEGER NOT NULL REFERENCES people(id),
    name TEXT NOT NULL
  );

  -- Amir has a cat named Ms. Fluff.
  INSERT INTO people (id, first_name) VALUES (100, 'Amir');
  INSERT INTO cats (owner_id, name) VALUES (100, 'Ms. Fluff');

  -- Betty has a cat named Keanu.
  INSERT INTO people (id, first_name) VALUES (200, 'Betty');
  INSERT INTO cats (owner_id, name) VALUES (200, 'Keanu');
`)
[] 
We can build our cats-and-owners list by JOINing the two tables together into one. First, we'll do the simplest possible join: people JOIN cats, giving us combinations of every person with every cat. (It will look strange, so we don't recommend dwelling on it; we'll improve it soon.)

> 
exec(`SELECT * FROM people JOIN cats`)
[{first_name: 'Amir', id: 1, name: 'Ms. Fluff', owner_id: 100}, {first_name: 'Amir', id: 2, name: 'Keanu', owner_id: 200}, {first_name: 'Betty', id: 1, name: 'Ms. Fluff', owner_id: 100}, {first_name: 'Betty', id: 2, name: 'Keanu', owner_id: 200}] 
The join gave us every combination of a person and a cat, whether or not they're related via owner_id. There are 2 people and 2 cats, so the join gave us 4 rows (2 * 2):

Amir and Ms. Fluff
Amir and Keanu
Betty and Ms. Fluff
Betty and Keanu
If we had 100 people and 100 cats then this join would give us 10,000 rows: each of the 100 people would be independently combined with each of the 100 cats. You can think of it like this:

For each person in the people table:
For each cat in the cats table:
Return a row with the columns from that person and this cat.
The join has all of the columns from people (id and first_name) and all of the columns from cats (id, name, and owner_id). Both tables have an id column, which is awkward because we can't have two columns with the same name. The cats' ids are "winning" here, so we see them rather than the peoples' ids. We'll address the issue of conflicting column names in more detail later.

To make our join more useful, we can add an ON clause. ON is like WHERE, but it applies specifically to joins. We "select where", but we "join on". For our cats-and-owners list, we want all pairs of people and cats where people.id equals cats.owner_id:

> 
exec(`SELECT * FROM people JOIN cats ON people.id = cats.owner_id`)
[{first_name: 'Amir', id: 1, name: 'Ms. Fluff', owner_id: 100}, {first_name: 'Betty', id: 2, name: 'Keanu', owner_id: 200}] 
This is much better! Our condition was people.id = cats.owner_id, so people and cats get matched up. For example, the cat with owner_id 100 gets joined with person 100: Amir gets matched with Ms. Fluff. Because our cats table has a FOREIGN KEY that associates cats.owner_id to people.id, we know our cats will always be matched with their correct owner!

There's a simple rule for thinking about what a join will do. It's always correct to think about basic JOINs as two nested loops with a filter, like this:

For each person in the people table:
For each cat in the cats table:
If the ON condition is true for this person and this cat:
Return a row with the columns from this person and this cat.
Here's a code problem for you to complete:

Write a JOIN that joins people and cats on cats.owner_id = people.id. Make sure that you join people to cats, in that order.

> 
exec(`
  CREATE TABLE people (
    id INTEGER PRIMARY KEY NOT NULL,
    first_name TEXT NOT NULL
  );
  CREATE TABLE cats (
    id INTEGER PRIMARY KEY NOT NULL,
    owner_id INTEGER NOT NULL REFERENCES people(id),
    name TEXT NOT NULL
  );

  -- Amir owns Ms. Fluff
  INSERT INTO people (id, first_name) VALUES (100, 'Amir');
  INSERT INTO cats (owner_id, name) VALUES (100, 'Ms. Fluff');

  -- Betty owns Keanu
  INSERT INTO people (id, first_name) VALUES (200, 'Betty');
  INSERT INTO cats (owner_id, name) VALUES (200, 'Keanu');
`)
exec(`
  SELECT * FROM people JOIN cats ON cats.owner_id = people.id

`)
GOAL:	
[{first_name: 'Amir', id: 1, name: 'Ms. Fluff', owner_id: 100}, {first_name: 'Betty', id: 2, name: 'Keanu', owner_id: 200}]
YOURS:	
[{first_name: 'Amir', id: 1, name: 'Ms. Fluff', owner_id: 100}, {first_name: 'Betty', id: 2, name: 'Keanu', owner_id: 200}] 
With our cats and owners matched, we can pick the columns that we want with AS, like we've done for more basic SELECTs. (For example, SELECT name AS person, age AS oldness FROM some_table.) In a JOIN, data is identified by the table it comes from, like people.first_name AS person.

Here's a code problem for you to complete:

Write a JOIN that joins people and cats on cats.owner_id = people.id. Using AS, return data in the form of [{person: 'Amir', cat: 'Ms. Fluff'}]

> 
exec(`
  CREATE TABLE people (
    id INTEGER PRIMARY KEY NOT NULL,
    first_name TEXT NOT NULL
  );
  CREATE TABLE cats (
    id INTEGER PRIMARY KEY NOT NULL,
    owner_id INTEGER NOT NULL REFERENCES people(id),
    name TEXT NOT NULL
  );

  INSERT INTO people (id, first_name) VALUES (100, 'Amir');
  INSERT INTO cats (id, owner_id, name) VALUES (1, 100, 'Ms. Fluff');
  INSERT INTO people (id, first_name) VALUES (200, 'Betty');
  INSERT INTO cats (id, owner_id, name) VALUES (2, 200, 'Keanu');
`)
exec(`
  SELECT people.first_name AS person, cats.name AS cat FROM people JOIN cats ON cats.owner_id = people.id




`)
GOAL:	
[{cat: 'Ms. Fluff', person: 'Amir'}, {cat: 'Keanu', person: 'Betty'}]
YOURS:	
[{cat: 'Ms. Fluff', person: 'Amir'}, {cat: 'Keanu', person: 'Betty'}] 
Usually, the order of tables in a join doesn't matter: cats JOIN people is the same as people JOIN cats. There are two cases where join order may matter, though, depending on your database system.

The first case is query optimization. In rare cases, your database engine may optimize a complex join badly, causing it to be slower than it could be. Reordering the join may help.

The second case is when there are duplicate column names. When the joined tables have duplicate column names, the last table in the JOIN wins. Here's an example from earlier in the lesson: we select from people JOIN cats with no AS to alias the column names.

> 
exec(`SELECT * FROM people JOIN cats ON people.id = cats.owner_id`)
[{first_name: 'Amir', id: 1, name: 'Ms. Fluff', owner_id: 100}, {first_name: 'Betty', id: 2, name: 'Keanu', owner_id: 200}] 
Notice that the id columns returned are the cats' IDs: 1 and 2. If we reverse the order and select cats JOIN people, the id column will be the people's IDs, 100 and 200.

> 
exec(`SELECT * FROM cats JOIN people ON people.id = cats.owner_id`)
[{first_name: 'Amir', id: 100, name: 'Ms. Fluff', owner_id: 100}, {first_name: 'Betty', id: 200, name: 'Keanu', owner_id: 200}] 
It's common for tables to have the same column names, especially for id columns. This can get very confusing, so it's best to use AS to explicitly alias every joined column, rather than blindly selecting *. That will make your SQL code more clear to other programmers. We recommend writing those aliases on their own lines, indented inside the SELECT.

> 
exec(`
  SELECT
    cats.id AS cat_id,
    people.id AS person_id
  FROM people JOIN cats ON people.id = cats.owner_id
`)
[{cat_id: 1, person_id: 100}, {cat_id: 2, person_id: 200}] 
We've been treating JOIN as if it returns a table. The proper term is "relation", which means: "it has rows and columns and supports operations like WHERE, AS, JOIN, etc."

(If a join combines two relations into a new relation, does that mean that we can join on the result of a join? Yes! We'll see that in a later lesson.)

Relations are the core concept in SQL databases. We've called them "SQL databases" so far, but "relational databases" is a more correct term. SQL is just the most popular relational query language.

There are many kind of relations. A table is a relation stored on the disk. A join gives us a relation that the database constructs on the fly based on our join condition.

Even SELECT 1 gives us a relation: it has one row with one column named 1. That's why execing that statement gives us an array of objects, as if we were selecting from a table: [{'1': 1}]. We could join a table against SELECT 1 if we wanted to!

When querying relations, we can use all of the query operations that we've already seen on tables: AS, WHERE, etc. In the example above, we already did that with AS.

When we use WHERE with joins, it filters the rows, just like it does with a normal table. The WHERE can see columns from both of the joined tables.

> 
exec(`
  SELECT people.first_name AS person, cats.name AS cat
  FROM people
  JOIN cats
    ON people.id = cats.owner_id
  WHERE people.first_name = 'Amir'
`)
[{cat: 'Ms. Fluff', person: 'Amir'}] 
> 
exec(`
  SELECT people.first_name AS person, cats.name AS cat
  FROM people
  JOIN cats
    ON people.id = cats.owner_id
  WHERE people.first_name = 'Betty'
`)
[{cat: 'Keanu', person: 'Betty'}] 
What if we join people and cats, but some people have no cats? They won't show up in the results because ON people.id = cats.owner_id is never true for a person with no cats.

For example: Betty's id is 200. If no cat's owner_id is 200, then no cat can be paired with Betty in our JOIN. Betty won't show up at all in the results. Amir and Ms. Fluff will still show up because they're still related.

> 
exec(`
  -- Delete Keanu, so Betty now has no cats.
  DELETE FROM cats WHERE owner_id = 200;

  SELECT people.first_name AS person, cats.name AS cat
  FROM people
  JOIN cats
    ON people.id = cats.owner_id
`)
[{cat: 'Ms. Fluff', person: 'Amir'}] 
When a person has multiple cats, the JOIN will find them all.

One important note, though. Suppose that Betty owns two cats, Keanu and Kim. The query will NOT combine the cats' names into an array like [{person: 'Betty', cat: ['Keanu', 'Kim']}]. Instead, the join returns two separate rows:

{person: 'Betty', cat: 'Keanu'}
{person: 'Betty', cat: 'Kim'}
> 
exec(`
  -- Betty also has a cat named Kim
  INSERT INTO cats (owner_id, name) VALUES (200, 'Kim');

  SELECT
    people.first_name AS person,
    cats.name AS cat
  FROM people
  JOIN cats
    ON people.id = cats.owner_id
  WHERE people.first_name = 'Betty'
`)
[{cat: 'Keanu', person: 'Betty'}, {cat: 'Kim', person: 'Betty'}] 
Here's a code problem for you to complete:

Use a join to find cats and their toys. The join should return two columns aliased with AS: cat (the cat's name) and toy (the toy's name).

> 
exec(`
  CREATE TABLE cats (
    id INTEGER PRIMARY KEY NOT NULL,
    name TEXT NOT NULL
  );
  CREATE TABLE toys (
    cat_id INTEGER REFERENCES cats(id) NOT NULL,
    name TEXT NOT NULL
  );

  INSERT INTO cats (id, name) VALUES (1, 'Ms. Fluff');
  INSERT INTO cats (id, name) VALUES (2, 'Keanu');
  INSERT INTO toys (cat_id, name) VALUES (1, 'Birdo');
  INSERT INTO toys (cat_id, name) VALUES (2, 'Mouser');
  INSERT INTO toys (cat_id, name) VALUES (2, 'Shy Guy');
`)
exec(`
  SELECT cats.name AS cat, toys.name AS toy FROM cats JOIN toys ON cats.id = toys.cat_id






`)
GOAL:	
[{cat: 'Ms. Fluff', toy: 'Birdo'}, {cat: 'Keanu', toy: 'Mouser'}, {cat: 'Keanu', toy: 'Shy Guy'}]
YOURS:	
[{cat: 'Ms. Fluff', toy: 'Birdo'}, {cat: 'Keanu', toy: 'Mouser'}, {cat: 'Keanu', toy: 'Shy Guy'}] 
You'll sometimes see the "simple" joins from this lesson called "inner joins", which is the full technical term for them. We can even write cats INNER JOIN toys if we like. However, that does exactly the same thing, so it's not necessary.

The existence of "inner" joins implies that there are also "outer" joins, and it's true! They're much less common, so we won't look at them in detail. We will see one type of outer join in a later lesson, though.

SQL: On conflict update
Imagine that we want to track how many times someone has visited our website. If a person has never visited, no row exists for them. When a person visits, a row is created or updated to reflect how many times they've visited.

The SQL features that we've learned so far aren't sufficient to directly express this kind of "create-or-update" logic. We'll have to do it in JavaScript instead. First, we query the table to see whether any visits row exists for this person's email address. If a row exists then we update it. Otherwise, we create a new row.

In this example, our first call to the visit() will create the visits row. Then the second call will notice that existing row and update it.

> 
exec(`
  CREATE TABLE visits (
    id INTEGER PRIMARY KEY,
    -- email is unique because we only want one row per person
    email TEXT UNIQUE NOT NULL,
    count INTEGER NOT NULL
  )
`)

function visit(email) {
  const visits = exec(
    "SELECT * FROM visits WHERE email = ?",
    [email]
  )

  if (visits.length === 0) {
    exec(
      "INSERT INTO visits (email, count) VALUES (?, ?)",
      [email, 1]
    )
  } else {
    const visit = visits[0]
    exec(
      "UPDATE visits SET count = ? WHERE id = ?",
      [visit.count + 1, visit.id]
    )
  }
}

visit('amir@example.com')
visit('amir@example.com')
exec(`SELECT email, count FROM visits`)
[{count: 2, email: 'amir@example.com'}] 
That worked, but there's a subtle problem that will bite us in practice. We need to make two observations to see it:

First: imagine that a user hits the refresh button while a page is loading. That causes two requests to our servers with very little time between them. If our luck is bad, the two requests will end up running at the same time on two different physical servers.

Second: our SELECT and INSERT queries are executed separately, so there's always a small delay between them. It's possible for server 2 to execute its SELECT after server 1's SELECT, but before server 1's INSERT.

Here's a step-by-step view of the problem:

Server 1 does its SELECT and sees nothing.
Server 2 does its SELECT and sees nothing.
Server 1 does its INSERT.
Server 2 does its INSERT. But there's already a record for this email address, so this insert violates the UNIQUE constraint on email. An exception is thrown!
These bugs are called "race conditions": the two servers are "racing" to complete their write, and the slower server "loses" the race. This may seem like a nitpick: how likely is it that this will actually happen?

It's relatively unlikely for any given request. However, unlikely problems become likely at scale. If our site gets 1,000,000 requests per month, then one-in-a-million situations will happen once per month. This happens in practice: recently, two Execute Program users saw error pages caused by a UNIQUE constraint violation, which in turn was caused by exactly this kind of race condition!

Fortunately, SQL gives us a way to shorten this code while simultaneously fixing the bug. There's already a UNIQUE constraint on visits' email column, because we only want to maintain one row per visitor. If we try to insert two rows for the same person, it will be an error. This is the same constraint violation error that showed up in our race condition bug.

(When you think that code in this course will cause an error, you can type error as its output.)

> 
exec(`
  CREATE TABLE visits (
    id INTEGER PRIMARY KEY,
    -- email is unique because we only want one row per person
    email TEXT UNIQUE NOT NULL,
    count INTEGER NOT NULL
  )
`)
exec(`INSERT INTO visits (email, count) VALUES ('amir@example.com', 1)`)
exec(`INSERT INTO visits (email, count) VALUES ('amir@example.com', 1)`)
Error: UNIQUE constraint failed: visits.email 
That error is good: it shows that the UNIQUE constraint is working! We can use this error to our advantage with SQL's ON CONFLICT clause.

We've already seen ON CONFLICT (column_name) DO NOTHING, which would leave our record unchanged. But there's also ON CONFLICT (column_name) DO UPDATE [...]. We'll tell the database "if the insert conflicts with an existing record's email, increment that row's count instead of erroring".

Here's an isolated example of that. Look closely at the ON CONFLICT (email) DO UPDATE SET count = count + 1. It means:

If our insert violates the email column's uniqueness constraint,
Update that existing row by incrementing its count by 1.
> 
exec(`
  CREATE TABLE visits (
    id INTEGER PRIMARY KEY,
    -- email is unique because we only want one row per person
    email TEXT UNIQUE NOT NULL,
    count INTEGER NOT NULL
  )
`)
exec(`
  INSERT INTO visits (email, count) VALUES ('amir@example.com', 1)
`)
exec(`
  INSERT INTO visits (email, count) VALUES ('amir@example.com', 1)
  ON CONFLICT (email) DO UPDATE SET count = count + 1
`)
exec(`SELECT email, count FROM visits`)
[{count: 2, email: 'amir@example.com'}] 
Now we can write a better version of our visit function. Instead of retrieving the row and using if to decide what to do, we'll use an ON CONFLICT. That way the database already knows what to do if the row exists!

Here's a code problem for you to complete:

Write a visit function that:

INSERTs a row for the given email when one doesn't exist.
UPDATEs the row if the given email already exists.
Uses an ON CONFLICT (...) DO UPDATE ... to do both of the above at once.
> 
exec(`
  CREATE TABLE visits (
    id INTEGER PRIMARY KEY,
    -- email is unique because we only want one row per person
    email TEXT UNIQUE NOT NULL,
    count INTEGER NOT NULL
  )
`)

function visit(email) {
  exec(
    `
      INSERT INTO visits (email, count) VALUES (?, 1)
      ON CONFLICT (email) DO UPDATE SET count = count + 1

    `,
    [email]
  )
}
visit('amir@example.com')
visit('amir@example.com')
exec(`SELECT email, count FROM visits`)
GOAL:	
[{count: 2, email: 'amir@example.com'}]
YOURS:	
[{count: 2, email: 'amir@example.com'}] 
The new version of visit fixes the race condition bug while being simpler than the original. There's no conditional in the JavaScript, and we've replaced a trio of SELECT/INSERT/UPDATE statements with a single INSERT ... ON CONFLICT statement.

The new version is also more efficient. Our original version had to retrieve the visits count from the database, then make a decision, then go back to the database again to create or update the visits row. The new version is a single statement that hits the database only once.

SQL: Join performance
In a previous lesson, we used JOIN to list all pairs of people and their cats. We could have done that by looping in JavaScript, querying to find each person's cats. In this lesson, we'll see why we chose to write a JOIN instead of using JavaScript.

(In this lesson, our database will always be set up with a people table and a cats table. The cats table has an owner_id, which is a foreign key to a person. Amir has a cat named Ms. Fluff, and Betty has a cat named Keanu. You'll see this in the setup for each example, but it's always the same, so you can skip reading it.)

First, let's get every person-and-cat pair using JavaScript.

Here's a code problem for you to complete:

Finish the function peopleAndCats() so that it creates a list of each pair of cat and person. For every cat, call results.push({person: person.name, cat: cat.name}) to build up a list of results.

> 
exec(`
  CREATE TABLE people (
    id INTEGER PRIMARY KEY NOT NULL,
    name TEXT NOT NULL
  );
  CREATE TABLE cats (
    owner_id INTEGER REFERENCES people(id) NOT NULL,
    name TEXT NOT NULL
  );

  INSERT INTO people (id, name) VALUES (100, 'Amir');
  INSERT INTO cats (owner_id, name) VALUES (100, 'Ms. Fluff');
  INSERT INTO people (id, name) VALUES (200, 'Betty');
  INSERT INTO cats (owner_id, name) VALUES (200, 'Keanu');
`)

function peopleAndCats() {
  const results = []
  const people = exec(`SELECT * FROM people`)
  for (const person of people) {
    const catsOwnedByPerson = exec(`
      SELECT * FROM cats WHERE cats.owner_id = ?
    `, [person.id])
    for (const cat of catsOwnedByPerson) {
       results.push({person: person.name, cat: cat.name})}


  }
  return results
}
peopleAndCats()
GOAL:	
[{cat: 'Ms. Fluff', person: 'Amir'}, {cat: 'Keanu', person: 'Betty'}]
YOURS:	
[{cat: 'Ms. Fluff', person: 'Amir'}, {cat: 'Keanu', person: 'Betty'}] 
This is correct, in the sense that it will return the right results. But it has a big problem: its performance is terrible!

What happens if we have 10,000 people? Our outer loop for (const person of people) will run 10,000 times! We'll do a total of 10,001 queries: one query to find all of the people, then a separate cat query for each of the 10,000 people.

This is a very common problem when querying any kind of database, SQL or otherwise. It's called an "N+1 problem": we do 1 person query, then N (10,000) cat queries. That's too many queries; we can't afford to put that much load on the database for a single pageview on our site.

We'll fix this in stages. First, let's reduce the number of queries. We'll get all of the people, then get all of the cats. Then we'll write a nested loop:

For each person:
For each cat:
If this person is this cat's owner:
Add the cat to the results.
Here's a code problem for you to complete:

Add an entry to the results array for each person and cat where cat.owner_id equals person.id. (You can use results.push({person: person.name, cat: cat.name}) to add an entry to the results.) You won't need to add any more database queries.

> 
exec(`
  CREATE TABLE people (
    id INTEGER PRIMARY KEY NOT NULL,
    name TEXT NOT NULL
  );
  CREATE TABLE cats (
    owner_id INTEGER REFERENCES people(id) NOT NULL,
    name TEXT NOT NULL
  );
  
  INSERT INTO people (id, name) VALUES (100, 'Amir');
  INSERT INTO cats (owner_id, name) VALUES (100, 'Ms. Fluff');
  INSERT INTO people (id, name) VALUES (200, 'Betty');
  INSERT INTO cats (owner_id, name) VALUES (200, 'Keanu');
`)

function peopleAndCats() {
  const results = []
  const people = exec(`SELECT * FROM people`)
  const cats = exec(`SELECT * FROM cats`)
  for (const person of people) {
    for (const cat of cats) {
      if (cat.owner_id === person.id){
        results.push({person: person.name, cat: cat.name})}


    }
  }
  return results
}
peopleAndCats()
GOAL:	
[{cat: 'Ms. Fluff', person: 'Amir'}, {cat: 'Keanu', person: 'Betty'}]
YOURS:	
[{cat: 'Ms. Fluff', person: 'Amir'}, {cat: 'Keanu', person: 'Betty'}] 
We reduced the number of queries to 2!

But this still has a performance problem. What if we have 10,000 people and 10,000 cats, but we only want to retrieve Amir and his cat Ms. Fluff? We could do it by calling our peopleAndCats function, then filtering its results. But we'll end up retrieving a total of 20,000 rows from the database even though we only need 2.

Also, even though we've reduced the number of queries, we've made our JavaScript very slow. The inner loop that looks at each cat runs 10,000 times for every iteration of the outer loop. With 10,000 people and 10,000 cats, the comparison of owner_id to person.id will run a total of 100,000,000 times (10,000 * 10,000). All of that just to find out that Amir owns Ms. Fluff. This method does not work in real systems.

Here's where relational databases show their usefulness. We can use a JOIN to get the same result.

Here's a code problem for you to complete:

Write a SELECT ... FROM ... JOIN ... ON ... query to get a list of all cats and people. Remember to select people.name AS person, cats.name AS cat to get the right column names.

> 
exec(`
  CREATE TABLE people (
    id INTEGER PRIMARY KEY NOT NULL,
    name TEXT NOT NULL
  );
  CREATE TABLE cats (
    owner_id INTEGER REFERENCES people(id) NOT NULL,
    name TEXT NOT NULL
  );

  INSERT INTO people (id, name) VALUES (100, 'Amir');
  INSERT INTO cats (owner_id, name) VALUES (100, 'Ms. Fluff');
  INSERT INTO people (id, name) VALUES (200, 'Betty');
  INSERT INTO cats (owner_id, name) VALUES (200, 'Keanu');
`)
exec(`
  SELECT 
    cats.name AS cat, people.name AS person FROM people JOIN cats ON cats.owner_id = people.id





`)
GOAL:	
[{cat: 'Ms. Fluff', person: 'Amir'}, {cat: 'Keanu', person: 'Betty'}]
YOURS:	
[{cat: 'Ms. Fluff', person: 'Amir'}, {cat: 'Keanu', person: 'Betty'}] 
We got the same result in a single database query! This fixes the two performance problems we've talked about so far: it requires only one query, and it doesn't have any nested loops.

What's really going on in the JOIN, though? So far, we've been thinking about JOINs as nested loops, similar to the ones that we wrote in JavaScript above. Aren't we just asking the database to do 100,000,000 (10,000 * 10,000) iterations, which will be slow?

Fortunately, no! Nested loops are a perfect mental model for how JOIN works, but they're only a mental model. In reality, the database will optimize the query, rebuilding it to be more efficient while still giving the same results.

Here's a concrete example. (Your answer here should be identical to the one above, with an extra WHERE added.)

Here's a code problem for you to complete:

Write a JOIN query to find all cats that are owned by a person with a name of "Amir".

> 
exec(`
  CREATE TABLE people (
    id INTEGER PRIMARY KEY NOT NULL,
    name TEXT NOT NULL
  );
  CREATE TABLE cats (
    owner_id INTEGER REFERENCES people(id) NOT NULL,
    name TEXT NOT NULL
  );

  INSERT INTO people (id, name) VALUES (100, 'Amir');
  INSERT INTO cats (owner_id, name) VALUES (100, 'Ms. Fluff');
  INSERT INTO people (id, name) VALUES (200, 'Betty');
  INSERT INTO cats (owner_id, name) VALUES (200, 'Keanu');
`)
exec(`
  SELECT people.name AS person, cats.name AS cat FROM people JOIN cats ON cats.owner_id = people.id WHERE people.name = 'Amir'







`)
GOAL:	
[{cat: 'Ms. Fluff', person: 'Amir'}]
YOURS:	
[{cat: 'Ms. Fluff', person: 'Amir'}] 
In the example above, WHERE people.name = ... tells the database that only one person matters. Then ON people.id = cats.owner_id tells it that it only needs to consider cats owned by that person. By understanding both of those limitations, the database can execute the query more intelligently. It will do something similar to exec(`SELECT * FROM cats WHERE owner_id = ?`, [amir.id]), selecting only the cats that are relevant.

This is impressive, but it's still a simple example. The bigger the query gets, the harder it is for a human to optimize manually. But the database has no such limitation; it will happily optimize any query that we come up with.

Imagine that we we're joining across 8 different tables instead of just 2. (That's not extremely common, but it does happen.)

Each table has 10,000 records. With 8 nested loops, we'd require 10,000,000,000,000,000,000,000,000,000,0000 iterations (10,000 to the 8th power). That would take something like 3,170,979,198,376,458,752 years.

If our database is set up properly, an 8-table join with a WHERE that matches only one row will execute in less than a millisecond. That lets us have our cake while eating it! We get to think about joins using a simple conceptual model: nested loops with an if inside. But the query actually executes in a much more intelligent way.

(Full disclosure: database optimizers aren't perfect. In real databases, we give them certain kinds of manual hints that we'll learn about in later lessons. In rare cases, the optimizer does a bad job and we have to change our queries significantly to work around it. But in 99.9% of cases, the optimizer will do what you want!)


SQL: Left and right joins
In an earlier lesson, we saw an example where users can register with discount codes. The discount codes were optional: some users register with a code, so they have a foreign key to the discount. Other users register without a code, so the foreign key is null.

Suppose that we want to produce a report listing our users and what discount codes they used. The report should include all users, whether they used a discount code or not.

We could write a loop in JavaScript: loop over each user, selecting any discounts for that user. That would cause an N+1 query problem: we'd query all of the users, followed by N individual queries to get each user's discount, if any. (Imagine that N is 10,000,000, to see why this is a problem: too many queries!)

As usual, SQL has an answer. In this case, it's a join. However, the type of join that we've seen so far doesn't help us. If we select from users JOIN discounts ON users.id = discounts.user_id, we'll only get results for users who have corresponding discounts. (The users.id = discounts.user_id will never be true for a user who has no corresponding discount row.)

That doesn't solve our problem because we want to include all users, even if they have no discount. Here's an example of that solution, even though it doesn't solve our problem:

> 
exec(`
  CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    discount_id INTEGER REFERENCES discounts(id) NULL UNIQUE
  );
  CREATE TABLE discounts (id INTEGER PRIMARY KEY, discount_code TEXT NOT NULL);

  -- Amir registered with a discount (both Amir and the discount get ID 1).
  INSERT INTO discounts (discount_code) VALUES ('free-month');
  INSERT INTO users (name, discount_id) VALUES ('Amir', 1);

  -- Betty registered with no discount.
  INSERT INTO users (name, discount_id) VALUES ('Betty', NULL);

  SELECT
    users.name AS name,
    discounts.discount_code AS discount_code
  FROM users JOIN discounts
    ON users.discount_id = discounts.id
`)
[{discount_code: 'free-month', name: 'Amir'}] 
Betty existed, but she wasn't in our query's results. To fix that, we can tell the database to include users in the report even when there's no matching discount. This is called a left join: users LEFT JOIN discounts. The "left" means "include rows from the left table (users), even if there's no corresponding row from the right table (discounts).

With a LEFT JOIN, both Amir and Betty will show up in the results. Amir will have his discount_code, but Betty's discount_code will be NULL (which will be represented as JavaScript's null).

> 
exec(`
  CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    discount_id INTEGER REFERENCES discounts(id) NULL UNIQUE
  );
  CREATE TABLE discounts (id INTEGER PRIMARY KEY, discount_code TEXT NOT NULL);

  -- Amir registered with a discount (both Amir and the discount get ID 1).
  INSERT INTO discounts (discount_code) VALUES ('free-month');
  INSERT INTO users (name, discount_id) VALUES ('Amir', 1);

  -- Betty registered with no discount.
  INSERT INTO users (name, discount_id) VALUES ('Betty', NULL);

  SELECT
    users.name AS name,
    discounts.discount_code AS discount_code
  FROM users LEFT JOIN discounts
    ON users.discount_id = discounts.id
`)
[{discount_code: 'free-month', name: 'Amir'}, {discount_code: null, name: 'Betty'}] 
LEFT JOIN adds one small tweak to our mental model of joins. Inner joins (the simple kind that we've seen without LEFT) still work in the same way. But here's how the database executes a left join (the new part is the "If no discounts matched this user" section):

For each user:
For each discount:
If this user's discount_id matches this discount's id:
Return a row with all of the user's columns and all of the discount's columns.
If no discounts matched this user:
Return a row with all of the user's columns, and NULLs in all of the missing discount's columns.
As usual, this is only a mental model, but it's a correct one. In reality, the database will use a more efficient method that gives exactly the same result.

You might wonder whether LEFT JOIN implies that there's also a RIGHT JOIN. There is! In a RIGHT JOIN, rows from the right table are always included, even if there's no corresponding row from the left table.

Left and right joins are much less common than the basic inner joins that we've seen before, where every row must exactly match the ON. But when you need a left or right join, you'll be glad that it's available. They're useful when you want a list of records (like users) along with other corresponding records (like discounts) that may or may not exist.

(As is often the case, SQLite is a bit weird here. It supports left joins, but not right joins. Fortunately, we can convert right joins into left joins by flipping the order of the tables.)

Like with basic inner joins, left and right joins will produce any combination of rows that match. For example, suppose that we select from users LEFT JOIN comments ON users.id = comments.user_id.

Every comment in the database will show up in the results. If Amir has written 100 comments, he'll show up 100 times: once with each of his comments. But because it's a LEFT JOIN, every user is guaranteed to show up at least once. Betty will show up even if she's never written a comment.

Here's a code problem for you to complete:

Use a join to get a list of usernames and comment texts for every comment in the system. Make it a left join so that it also includes users who have never written a comment. (They'll have a null comment text.) Select only the name and comment_text columns.

> 
exec(`
  CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL
  );
  CREATE TABLE comments (
    user_id REFERENCES users(id) NOT NULL,
    comment_text TEXT NOT NULL
  );

  -- Amir has written two comments.
  INSERT INTO users (name) VALUES ('Amir');
  INSERT INTO comments (
    user_id,
    comment_text
  ) VALUES (1, 'Ms. Fluff needs a bath!');
  INSERT INTO comments (
    user_id,
    comment_text
  ) VALUES (1, 'Ms. Fluff strongly dislikes water.');

  -- Betty has written no comments.
  INSERT INTO users (name) VALUES ('Betty');
  SELECT users.name, comments.comment_text FROM users LEFT JOIN comments ON users.id = comments.user_id





`)
GOAL:	
[{comment_text: 'Ms. Fluff needs a bath!', name: 'Amir'}, {comment_text: 'Ms. Fluff strongly dislikes water.', name: 'Amir'}, {comment_text: null, name: 'Betty'}]
YOURS:	
[{comment_text: 'Ms. Fluff needs a bath!', name: 'Amir'}, {comment_text: 'Ms. Fluff strongly dislikes water.', name: 'Amir'}, {comment_text: null, name: 'Betty'}] 
You'll sometimes see left and right joins called LEFT OUTER JOINs and RIGHT OUTER JOINs. Fortunately, "outer" doesn't change the meaning; it's just a more precise name for the same idea.

In this course, we only address inner ("simple") joins and left joins. However, there's a surprising array of additional join types. For 99% of your practical work, inner joins will be sufficient. Left joins will probably get you through the final 1%.

We don't recommend focusing on other join types until you've spent a lot of time using SQL databases on projects. However, if you'd like a taste of how deep the join rabbit hole goes, we think that this article is thorough and understandable without belaboring the point.