---
title: "Running Postgres database in Docker"
date: "2023-05-05"
category: "knowledge-base"
---

![](https://i.imgur.com/NIS6FUU.png "Photo from docker.com")<p style="font-size: 12px; text-align: right">_Photo from docker.com_</p>

**Running Postgres database in Docker**

> If you build a t3app from: https://create.t3.gg/ with this command:

```
npm create t3-app@latest

```

> it will automatically come with the sqlite database

> What if we want to run postgreSQL locally using docker? This would be only a development database and will not polute our production database

> Now how to do it?

**Step 1: Install Docker**

> To install Docker, follow the instructions for your operating system on the Docker website:
> https://docs.docker.com/get-docker/

**Step 2: Create a Docker Compose file**

> Create a new file in the root directory of your project called docker-compose.yml with the following contents:

```
version: '3'

services:
  db:
    image: postgres
    restart: always
    environment:
      POSTGRES_USER: <your_postgres_user>
      POSTGRES_PASSWORD: <your_postgres_password>
      POSTGRES_DB: <your_postgres_database_name>
    ports:
      - "5432:5432"
    volumes:
      - db_data:/var/lib/postgresql/data

volumes:
  db_data:
```

> Replace <your_postgres_user>, <your_postgres_password>, and <your_postgres_database_name> with your own values.

> This file defines a Docker service called db which uses the official PostgreSQL image, exposes the PostgreSQL port (5432) on your host machine, and mounts a named volume to persist the data.

**Step 3: Modify schema.prisma**

> Modify your `schema.prisma` file to use the PostgreSQL datasource. Replace the datasource block with the following:

```
datasource db {
  provider = "postgresql"
  url = "postgresql://<your_postgres_user>:<your_postgres_password>@localhost:5432/<your_postgres_database_name>?schema=public"
}
```

> Replace <your_postgres_user>, <your_postgres_password>, and <your_postgres_database_name> with your own values.

**Step 4: Stop the current t3app**

> Stop the current t3app instance by pressing Ctrl+C in the terminal where it's running.

**Step 5: Start the Docker container**

> Start the PostgreSQL Docker container by running the following command in your project root directory:

```
docker-compose up -d
```

> This will start the PostgreSQL container in the background.

**Step 6: Generate Prisma client**

> Generate a new Prisma client to reflect the changes in your schema and datasource. Run the following command in your project root directory:

```
npx prisma generate
```

> This will regenerate your Prisma client with the updated schema.

**Step 7: Verify the new database connection**

> Verify that the new database connection is working correctly by running the following command in your project root directory:

```
npx prisma studio
```

> This will open Prisma Studio, a web-based tool to view and edit your data. Verify that you can see your data and that you can make changes.

> That's it! You've successfully switched your SQLite database to PostgreSQL and set it up in a Docker container. You can now start your t3app as usual and it will use the new database.

**Troubleshooting**

> If you already had some migration in the sqlite and then switched to new database, in our case Postgres, make sure to delete the whole migrations folder.
> Then run new migrations:

```
npx prisma migrate dev
```

> And then restart the prisma studio

```
npx prisma studio
```
