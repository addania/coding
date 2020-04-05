---
title: "SQL"
date: "2020-04-03"
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