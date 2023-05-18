---
title: "T3 APP"
date: "2023-03-28"
category: "knowledge-base"
---

> Reference: https://create.t3.gg/

> T3 was recommended to me by couple of people.

```
npm create t3-app@latest

```

**Prisma**

> Prisma is a tool which helps to interact with relational databases without needing to write SQL queries. It is a helper tool to communicate with databases

> If you go to folder called `prisma`, there will be a file called `schema.prisma`

> `schema.prisma` file declares with which database we will work with.

```
datasource db {
    provider = "sqlite"
    url      = env("DATABASE_URL")
}
```

> In t3 app, prisma works with `sqlite` database.

> The url for the database is written in .env file:

```
DATABASE_URL="file:./db.sqlite"
```

> `sqlite` is a file based database. Its structure resembles a "json" file but it is actually a table.

> `sqlite` is not recommended to be used for production, or to be deployed. But it is very good for experimentation.

> `schema.prisma` declares also all schemas (tables and their columns). Basically the structure of tables and data in it. `Example` is one such table:

```
model Example {
    id        String   @id @default(cuid())
    createdAt DateTime @default(now())
    updatedAt DateTime @updatedAt
    label     String
    name      String
}
```

> The database itself is in this file: `db.sqlite` file. This file does not open well in the VSCode. It can be partially opened in DBeaver. But it contains information about all the tables (schemas) in the database.

> Useful extension for VSCode to work with Prisma is called: `Prisma` - it will color-code and format the files which use Prisma. It adds syntax highlighting, formatting and auto-completion.

**Prisma studio**

> In order to run our database we need to do:

```
npx prisma studio
```

> This gives us a local environment to interact with the database at location: http://localhost:5555/

![](https://i.imgur.com/A2yct9B.png "Photo by  S. Hermann & F. Richter from Pixabay")<p style="font-size: 12px; text-align: right">\_Photo by Addania</p>

> Here we can click on the table we want to see:

![](https://i.imgur.com/Ny6gxgP.png "Photo by  S. Hermann & F. Richter from Pixabay")<p style="font-size: 12px; text-align: right">\_Photo by Addania</p>

> We can add entries to our database by clicking on `Add record` button

> There are these two useful commands:

```
npx prisma db push
npx prisma migrate dev
```

> Use `npx prisma db push` to synchronize your Prisma schema with your database schema. Introspects the database to infer and executes the changes required to make your database schema reflect the state of your Prisma schema. Use this command if you want to quickly prototype and iterate on schema design locally without the need to deploy these changes to other environments such as other developers, or staging and production environments. It is good for prototyping

> So if I do some changes in my `schema.prisma` locally and I want to see the results, I use `npx prisma db push`.

> `npx prisma migrate dev` is when we want to create a migration and we want this to be reflected in other environments without losing data. We use migrations to commit the schema changes and apply these in your other environments.

> In oder words migrate is for storing.

> `npx prisma migrate dev` creates and uses a migration

> All migrations can be see in the migration folder, they are all put on top of each other. Each needs to have a name.

**TRPC**

> Then how to use query what we have in our sqlite database? We use `TRPC` for it.

> Go to this file:

```
src/server/api/routers/example.ts
```

> Add this piece of code to `exampleRouter`:

```
 getAll: publicProcedure.query(async ({ ctx }) => {
    const test = await ctx.prisma.example.findUnique({ where: { id: 123 } });
    console.log("test", test?.createdAt);
    return ctx.prisma.example.findMany();
  }),
```

> Please note, that you need to add asyncto the query function and then await in front of the `ctx.prisma.example`

**UI components**

> It is good to use some external libraryfor components. Good examples:

- https://mantine.dev/
- https://chakra-ui.com/

**Authentication**

> T3 uses Discord login vendor for authentication.

> Other vendors like google can be added.

> Next auth with trpc?

> Follow the steps for authentication here: https://create.t3.gg/en/usage/first-steps

> Summary from the article above:

> You will need a Discord account, so register one if you haven’t already.

> Navigate to https://discord.com/developers/applications↗ and click “New Application” in the top right corner. Give your application a name and agree to the Terms of Service.

> Once your application has been created, navigate to “Settings → OAuth2 → General”.

> Copy the “Client ID” and add it to your .env as DISCORD_CLIENT_ID.

> Click “Reset Secret”, copy the new secret, and add it to your .env as DISCORD_CLIENT_SECRET.

> Click “Add Redirect” and type in http://localhost:3000/api/auth/callback/discord.
> For production deployment, follow the previous steps to create another Discord Application, but this time replace http://localhost:3000 with the URL that you are deploying to.

> Save Changes.

> Set the NEXTAUTH_SECRET in .env. In development any string will work, for production see the note in .env on generating a secure secret.

> Go to this page: http://localhost:3000/api/auth/callback/discord and allow the application access.

> Then you can start your application

**Start the application**

> Use this command:

```
npm run dev
```

> It will run at: http://localhost:3000/

**Step by Steps Guide to chirp project**

**1. Setup**

**1.1 First steps**

> Go to projects folder

```
npm create t3-app@latest
```

> Select typescript, prisma, tailwind, trpc

> Initialize new git repo? yes

> Npm install? yes

> If you get an error for git init, you have to do it manual in the chirp project

```
git init
```

> Then commit:

```
git add .
git commit -m "Getting started"
```

> Go to github and create new repo. Click + and name your project. Make it private/public. Do not check any other options

> It will give you then these commands, which you paste to your terminal:

```
git remote add origin git@github.com:addania/chirp.git
git branch -M main
git push -u origin main
```

> Please note you have to have something git added and git commited before you can execute those.

> Check your github repo if code it there

> Run the local:

```
npm run dev
```

> If it stops make sure you firstly do this:

```
nvm install 16.0.0
```

> Then you should be able to run:

```
npm run dev
```

**1.2 Database**

> Setting up database. At the moment we use sqlite database, wihch is good for experimenting but not for production. We will use planetscale for that.

> Go to https://app.planetscale.com/ and create account. Create there a new database. Give it a name like achievsdb. Choose location same as your Vercel account (where you will be deploying), typically the one closest to your location.

> It will create your database. Click Connect button. Choose `Connect with Prisma`

> This will give you database url which you need to paste to your `.env` file

```
DATABASE_URL='mysql://....'
```

> So go to your chirp project and open `.env` file. Instead of sqlite paste there those credentials:

```
DATABASE_URL='mysql://....'
```

> `.env.example` file is git ignored, should never be commited to the github and should not be shared publically!! If it happens by mistake, you will need to change credentials to your database for security reasons.

> This variable though is now on our local development environment but if we want to deploy it, we also need to provide this variable to the production environment.

> We still need to do a small setup step. Seach on google for planetscale prisma and visit this page:
> https://planetscale.com/docs/tutorials/prisma-quickstart

> Go to `Initialize prisma` section and copy this code from there:

```
datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
  relationMode = "prisma"
}

generator client {
  provider = "prisma-client-js"
}
```

> Then in our project go to: schema.prisma file and remove this code:

```
generator client {
    provider = "prisma-client-js"
}

datasource db {
    provider = "sqlite"
    // NOTE: When using postgresql, mysql or sqlserver, uncomment the @db.Text annotations in model Account below
    // Further reading:
    // https://next-auth.js.org/adapters/prisma#create-the-prisma-schema
    // https://www.prisma.io/docs/reference/api-reference/prisma-schema-reference#string
    url      = env("DATABASE_URL")
}
```

> Instead paste the above there:

```
datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
  relationMode = "prisma"
}

generator client {
  provider = "prisma-client-js"
}
```

> Let's now synchronize our database with schemas that we have in our `schema.prisma` file. We need to tell prisma to take the current state of our prisma schema with one model called Example which expects id, createdAt and updatedAt in our `schema.prisma` file and set it to our local database:

```
npx prisma db push
```

> Let's run our prisma studio:

```
npx prisma studio
```

> Let's open our Example table and see if it works fine.

> Let's also add one entry by clicking on Add entry and Save.

> Now we git add . and git commit and git push our changes to github repo.

> Let's deploy our project. We go to https://vercel.com/ where you need to create an account and click on new project and then click on `import` button from our chirp project.

> There you uncollapse environmental variables and paste there our:

```
DATABASE_URL='mysql://....'
```

> Then you click on Deploy!

> You will get a congrats screen. Then click on Continue to dashbord. Go to Settings -> Environment variables and check if the DATABASE_URL is there and if all boxes are checked: production, development & preview. Save changes if anything needed to be updated. If you needed to be updated maybe you need to redeploy.

> Go back Projects tab and there you should have a deployment url to your app. click on it to check our brand new site: https://chirp-4xlt.vercel.app/

> Also go to Setting options -> Functions and change the Function region to the same as you set it in planetscale: AWS eu-central-1

> New deployment is needed for this to take place. So next time we deploy, it will be reflected.

**1.3 Authentication**

> Last bit we need is authorization. We will use clerk.dev. Visit their website and create an account.

> Click on `create` new application and name is chirp.

> Choose the authentication methods paswordless (without passwords) and using specific providers (google, github, discord) and click on Create application

> Then on the welcome page, click on the next.js guide to set things up correctly.

> Click on "Checkout our new docs" to be redirected to the next docu page.

> Follow the Next.js Stable guide:

> Install clerk:

```
npm install @clerk/nextjs
```

> Then go back to the clerk dashboard -> API Keys and copy the environmental variables:

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_....
CLERK_SECRET_KEY=sk_test_....
```

> Paste those to .env file:

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_....
CLERK_SECRET_KEY=sk_test_....
```

> We also need to go to Vercel (our deployment platform) -> Settings -> Environmental variables and paste those there as well to environmental variables. Click Save

> Then go back to the clerk manual and checkout the part about the clerk provider:

```
import { ClerkProvider } from "@clerk/nextjs";
import type { AppProps } from "next/app";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ClerkProvider {...pageProps}>
      <Component {...pageProps} />
    </ClerkProvider>
  );
}
export default MyApp;
```

> We need to do this in our App as well.

> Go to `_app.tsx` file and paste the provider there:

```
import { ClerkProvider } from "@clerk/nextjs";
import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ClerkProvider {...pageProps}>
      <Component {...pageProps} />
    </ClerkProvider>
  );
};
export default api.withTRPC(MyApp);
```

> Next as per their docu we need to add a middlewear. Copy this code:

```
import { withClerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default withClerkMiddleware((req: NextRequest) => {
  return NextResponse.next();
});

export const config = {
  matcher: [
    "/((?!static|.*\\..*|_next|favicon.ico).*)",
    "/",
  ],
}
```

> In our pass go to `src` folder and add a new file there called `middleware.ts`

> Remove anything that is not needed from the file (req):

```
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default withClerkMiddleware((req: NextRequest) => {
  return NextResponse.next();
});

// Stop Middleware running on static files
export const config = {
  matcher: "/((?!_next/image|_next/static|favicon.ico).*)",
};
```

> If in double, check their documentation: https://clerk.com/docs/nextjs/middleware

> And especially if we get some weird errors in console:

```
tRPC failed on <no-path>: You need to use "withClerkMiddleware" in your Next.js middleware file. You also need to make sure that your middleware matcher is configured correctly and matches this route or page. See https://clerk.com/docs/quickstarts/get-started-with-nextjs
```

> Now middleware.ts will run on every request. We can test it by console.logging:

```
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default withClerkMiddleware((req: NextRequest) => {
  console.log("I am running")
  return NextResponse.next();
});

// Stop Middleware running on static files
export const config = {
  matcher: "/((?!_next/image|_next/static|favicon.ico).*)",
};
```

> And in terminal we will see the console output.

> Next we need to use SignIn component & SingInButton from the Clerk.

```
import { SignIn, SignInButton } from "@clerk/nextjs";
<SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
```

> We go to /src/pages/index.tsx

> Remove most of the content and üaste the component there:

```
import { type NextPage } from "next";
import Head from "next/head";
import { SignIn, SignInButton } from "@clerk/nextjs";
import { api } from "~/utils/api";
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div style={{ color: "white" }}>
          <SignInButton />
        </div>
        <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
      </main>
    </>
  );
};
export default Home;
```

> Now you can see a sign in button and you can click it to sign to your application! You will see there options with which you can sign in, yay!

> If you want to change the settings of the sign-in to your app, you need to go to clerk dashboard -> User & Authentication and you can for example disable username or password in Email user.

> Now lets conditionally display sign in button, if there is no user logged in and if there is, we will show the SignOutButton. For that we will use: useUser hook, which has properties on it like: isSignedIn

```
import { type NextPage } from "next";
import Head from "next/head";
import { SignIn, SignInButton, SignOutButton, useUser } from "@clerk/nextjs";

const Home: NextPage = () => {
  const user = useUser();
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div style={{ color: "white" }}>
          {!user.isSignedIn && <SignInButton />}
          {!!user.isSignedIn && <SignOutButton />}
        </div>
        <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
      </main>
    </>
  );
};
export default Home;
```

> Let's get it on our server:

```
git add .
git commit -m "Add sign in/out"
git push
```

**1.4 Tracking bugs in production**

> We want to know when things go wrong in our produciton. We will use axiom for that. Vercel also has a logging system, but axiom is more thorough.

> Go to: https://axiom.co/ and create an account.

> Go to Vercel to your project -> Settings -> Integrations

> In the section Logging find Axiom -> Click add integration

> Select a Vercel Account to add the Integration to: personal(addania)

> Click on Add integration button -> Sign in (with github) -> Authenticate

> Add new organization name: addania

> Click Connect to Vercel button

> Now in Vercel we have a new tab called Integrations, where we can track things more easily then with Vercel

**2. Building the application**

**2.1 Adding some data to database**

> Let's go to `schema.prisma` file and add a new model/schema called Post:

```
model Post {
id String @id @default(cuid())
createdAt DateTime @default(now())
content String @db.VarChar(255)
authorId String
@@index([authorId])
}
```

> Let's break down what this syntax means (thank you ChatGPT <3)

> `model Post`: This line defines the name of the data model. In this case, it's called "Post". You can think of this as creating a new table in your database called "Post" that will hold data for posts.

> `id String @id @default(cuid())`: This line defines a field in the Post table called "id". The field type is a string, and it is also marked with the Prisma directive "@id", which tells Prisma that this field should be the primary key of the table. The "@default(cuid())" directive sets a default value for this field using the cuid() function, which generates a unique identifier.

> `createdAt DateTime @default(now())`: This line defines another field called "createdAt". This field is of type "DateTime", and it is marked with the "@default(now())" directive, which sets the default value of this field to the current date and time.

> `content String @db.VarChar(255)`: This line defines a field called "content". This field is of type "String", and it is also marked with the "@db.VarChar(255)" directive, which specifies the maximum length of the field in the database as 255 characters.

> `authorId String`: This line defines another field called "authorId", which is a string type. This field will be used to store the ID of the author who wrote the post.

> `@@index([authorId])`: This line defines an index on the "authorId" field. This allows you to quickly search for all posts written by a particular author.

> More about Prisma indexing - a way to speed up the search in database by creating an index on a specific columns: In Prisma, an index is a data structure that helps speed up database queries by allowing the database to quickly search for data based on the values in specific columns. When you define an index on a column in a Prisma schema, it tells the database to create an index on that column.

> In the example schema above, the @@index([authorId]) directive creates an index on the authorId column in the Post table. This means that when you query the database for all posts written by a specific author, the database can use the index to quickly find all posts with the matching authorId value, rather than having to scan through the entire Post table to find them.

> Here's an example of how you might use this index in a Prisma query:

```
const postsByAuthor = await prisma.post.findMany({
  where: {
    authorId: "1234567890" // Replace with the actual author ID you want to search for
  }
});
```

> In this example, the findMany() method is used to search the Post table for all posts written by the author with the ID "1234567890". Because the authorId column has an index, the database can use it to quickly find all matching posts, making the query faster and more efficient.

> Now we can sync our database with and we will see the applied changes:

```
npx prisma db push
```

> Don't forget to run the prisma studio:

```
npx prisma studio
```

> Also we changed the schema, so we also need to tell typescript about it. Because schema.prisma is not in typescript, so we need to generate new typescript files from it. Easy way to do it:

```
npm install
```

> `npm install` will trigger the generation of typescript automatically.

> Or alternatively:

```
npx prisma db generate
```

> Now when we want to go to `src/server/api/routers/example.ts` we will see TS errors, since we no longer have example schema

> We can change example to be post:

```
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const exampleRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.post.findMany();
  }),
});
```

> If TS and ESLint still indicate an error, you can `ctrl+shift+p` and Restart Typescript Server & Restart ESLint Server (both run servers in the background)

**2.2 Accessing data via trpc**

> What is trpc? trpc let's you create server functions (backend functions) which run on a server (in our case on Vercel) which do things like: fetch data from the database, so we can get the data in right shape and authenticated and you provide this data to your user, without your user needing to run the database code themselves. We never want a user to connect directly to a database. For that reason we use Vercel. With trpc it is super easy to access database even if it lives on entirely different server than the computer the user is using.

> All the backend code is in the src/server folder

> In `server/api/routers` we have an example router called `example.ts` but we can add our own as a new file called `post.ts` and adjust it to our needs. Let's add getAll method.

```
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
export const postsRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.post.findMany();
  }),
});
```

> Let's brak down the syntax. #

> `createTRPCRouter`: This is a function provided by TRPC that creates a router for your TRPC server. A router is responsible for defining the API endpoints and the procedures that should be executed when those endpoints are called.

> `{ getAll: publicProcedure.query(...) }`: This is an object that defines a single procedure called getAll, which can be accessed by calling the API endpoint `/posts/getAll`. `publicProcedure` is a method to generate the function that the client calls. The `publicProcedure.query` function is a helper provided by TRPC that creates a procedure that can be called publicly by anyone without being authenticated.

> `({ ctx }) => { return ctx.prisma.post.findMany(); }`: This is the function that defines the behavior of the getAll procedure. When the getAll endpoint is called, this function will be executed. The function takes a single argument, which is an object containing the `ctx` - `context` of the current request. In this case, the context includes a prisma property, which is an instance of the Prisma client that can be used to query the database. The function simply calls the `findMany()` method on the post table in the database using the Prisma client and returns the result.

> So in summary, this example router defines a single API endpoint called `/posts/getAll` that returns all posts from the post table in the database using the Prisma client. When a client makes a request to this endpoint, the TRPC server will execute the getAll procedure, which will query the database using Prisma and return the result.

> Let's take a close look at: `({ ctx }) => { return ctx.prisma.post.findMany(); }`

> In TRPC, the `ctx` object, short for "context", is an object that contains information about the current request being handled by the server. The context object is passed as an argument to the procedure function, which is the function that defines the behavior of a TRPC endpoint.

> In the example router above, the getAll procedure function is defined as follows:

```
publicProcedure.query(({ ctx }) => {
return ctx.prisma.post.findMany();
}),
```

> This procedure function is defined as an arrow function that takes a single argument, which is an object that contains the `ctx` property. In this case, the `publicProcedure.query` function is used to create a public query procedure that can be called by anyone. The `publicProcedure.query` function takes a function that defines the behavior of the procedure when it's called.

> The procedure function defined here simply returns the result of calling `ctx.prisma.post.findMany()`. Here's a breakdown of what that means:

> `ctx`: This is the context object passed to the procedure function by TRPC. The context object contains information about the current request being handled, such as the HTTP request `headers` and any `authentication` information.

> `ctx.prisma`: This is a property of the context object that contains an instance of the Prisma client. The Prisma client is used to query the database.

> `ctx.prisma.post`: This is a property of the Prisma client that represents the post table in the database. It provides methods for querying, updating, and deleting rows in the post table.

> `ctx.prisma.post.findMany()`: This is a method provided by the Prisma client that queries the post table and returns an array of all posts in the table.

> So in summary, the ({ ctx }) => { return ctx.prisma.post.findMany(); } function simply returns all posts from the post table in the database using the Prisma client. The ctx object is passed to the function by TRPC as a parameter, and the Prisma client is accessed through the ctx.prisma property.

> Now in the file: `src/server/api/root.ts` we need to add that postRouter there:

```
import { createTRPCRouter } from "~/server/api/trpc";
import { postRouter } from "~/server/api/routers/post";

export const appRouter = createTRPCRouter({
  posts: postsRouter,
});

export type AppRouter = typeof appRouter;
```

> Now we go to our pages/index.tsx file and we retrieve data from our posts router:

```
import { api } from "~/utils/api";
const { data } = api.posts.getAll.useQuery();
```

> We can then display the data:

```
{data?.map((post) => (
            <div key={post.id} style={{ color: "white" }}>
              {post.content}
            </div>
          ))}
```

> Whole page looks like this `index.ts`:

```
import { type NextPage } from "next";
import Head from "next/head";
import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";

import { api } from "~/utils/api";

const Home: NextPage = () => {
  const user = useUser();
  const { data } = api.posts.getAll.useQuery();
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div style={{ color: "white" }}>
          {!user.isSignedIn && <SignInButton />}
          {!!user.isSignedIn && (
            <>
              <p>Hello {user.user.fullName}</p>
              <SignOutButton />
            </>
          )}
        </div>
        <div>
          {data?.map((post) => (
            <div key={post.id} style={{ color: "white" }}>
              {post.content}
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default Home;

```

> Let's add, commit & push. On each push Vercel makes a new deployment.

**2.3 Adding tailwind styles**

> Let's add some styles. We will use tailwind for it. Here is some official documentation: https://v2.tailwindcss.com/docs

> Especially useful are the colors: https://v2.tailwindcss.com/docs/customizing-colors

> Tailwind is a utility-first CSS framework that provides a set of pre-defined class names that can be used to style your HTML elements. Here are some basic Tailwind class names and what they do:

> `text-*` - Sets the text color and font size. For example, `text-red-500` sets the text color to red and `text-lg` sets the font size to large.

> `bg-*` - Sets the background color. For example, `bg-blue-300` sets the background color to light blue.

> `p-*` and `m-*` - Sets the padding and margin, respectively. For example, `p-4` sets the padding to 4 units (default unit is rem) and `m-2` sets the margin to 2 units.

> `w-*` and `h-*` - Sets the width and height, respectively. For example, `w-1/2` sets the width to 50% and `h-64` sets the height to 64 units.

> `flex` and `flex-*` - Sets the display property to flex and provides additional flexbox properties, respectively. For example, `flex` sets the display to flex and `flex-wrap` sets the flex-wrap property.

> `grid` and `grid-*` - Sets the display property to grid and provides additional grid properties, respectively. For example, `grid` sets the display to grid and `grid-cols-3` sets the number of columns in the grid to 3.

> `rounded-*` - Sets the border radius. For example, `rounded-full` sets a circular border radius and `rounded-md` sets a medium rounded border.

These are just a few examples of the many Tailwind class names available. By using these class names, you can easily style your HTML elements without having to write custom CSS.

> Here is the whole code with styles for our. We will unwrap it later:

```
import { type NextPage } from "next";
import Head from "next/head";
import { SignIn, SignInButton, SignOutButton, useUser } from "@clerk/nextjs";

import { api } from "~/utils/api";

const Home: NextPage = () => {
  const user = useUser();
  const { data, isLoading } = api.posts.getAll.useQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data) {**2.4 Adding tailwind styles**
    return <div>Something went wrong...</div>;
  }
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex h-screen justify-center">
        <div className="h-full w-full border-x border-slate-400 md:max-w-2xl">
          <div className="flex border-b border-slate-400 p-4">
            {!user.isSignedIn && (
              <div className="flex justify-center">
                <SignInButton />
              </div>
            )}
            {!!user.isSignedIn && (
              <>
                <p>Hi {user.user.fullName}</p>
                <SignOutButton />
              </>
            )}
          </div>
          <div className="flex flex-col">
            {data.map((post) => (
              <div key={post.id} className="border-b border-slate-400 p-8">
                {post.content}
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
```

> Let's crack this:

> `flex`: This class is used to set the display property of the main element to flex.

> `h-screen`: This class is used to set the height of the main element to be equal to the height of the screen.

> `justify-center`: This class is used to center the content horizontally within the main element.

> `h-full`: This class is used to set the height of the div element to 100% of its parent element.

> `w-full`: This class is used to set the width of the div element to 100% of its parent element.

> `border-x`: This class is used to set a horizontal border on the div element.

> `border-slate-400`: This class is used to set the border color of the div element to a shade of gray.

> `md:max-w-2xl`: This class is used to set the maximum width of the div element to 2xl (a predefined width in Tailwind).

> `p-4`: This class is used to set the padding of the div element containing the Sign In button to 4 units.

> `border-b`: This class is used to set a bottom border on the div element containing the Sign In button.

**2.5 Add loading checks**

> In case data is still loading we want to display Loading and if there is no data, we want to display Something went wrong

> One convenient thing that queries return is `isLoading`

```
  const { data, isLoading } = api.posts.getAll.useQuery();
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (!data) {**2.4 Adding tailwind styles**
    return <div>Something went wrong...</div>;
  }
```

> Whole code will look like this:

```
import { type NextPage } from "next";
import Head from "next/head";
import { SignIn, SignInButton, SignOutButton, useUser } from "@clerk/nextjs";

import { api } from "~/utils/api";

const Home: NextPage = () => {
  const user = useUser();
  const { data, isLoading } = api.posts.getAll.useQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data) {**2.4 Adding tailwind styles**
    return <div>Something went wrong...</div>;
  }
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex h-screen justify-center">
        <div className="h-full w-full border-x border-slate-400 md:max-w-2xl">
          <div className="flex border-b border-slate-400 p-4">
            {!user.isSignedIn && (
              <div className="flex justify-center">
                <SignInButton />
              </div>
            )}
            {!!user.isSignedIn && (
              <>
                <p>Hi {user.user.fullName}</p>
                <SignOutButton />
              </>
            )}
          </div>
          <div className="flex flex-col">
            {data.map((post) => (
              <div key={post.id} className="border-b border-slate-400 p-8">
                {post.content}
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
```

**2.6 Add User bar**

> Let's create this component:

```
const UserBar = () => {
  const { user } = useUser();

  if (!user) {
    return null;
  }

  return (
    <div className="flex">
      <img
        src={user.profileImageUrl}
        className="h-16 w-16 rounded-full"
        alt="Profile image"
      />
    </div>
  );
};
```

> Let's use it in our main page at the very top:

```
{!!user.isSignedIn && (
   <div className="flex w-full justify-between">
      <div className="flex items-center  space-x-2">
          <UserBar />
          <p>Hi {user.user.fullName}</p>
      </div>
      <SignOutButton />
  </div>
)}
```

> There is a bit of new tailwind syntax:

> `justify-between` - positions items at the opposite edges of container horizontally

> `items-center` - vertically centers items in the container

> `space-x-2` - creates small space between children of the container

**2.7 Create posts**

> Let's create a component where user can type in a post. We will need the profile pic of the user and an input:

```
const CreatePostWizard = () => {
  const { user } = useUser();
  console.log("user", user);

  if (!user) {
    return null;
  }

  return (
    <div className="flex w-full gap-4 space-x-2 p-4">
      <img
        src={user.profileImageUrl}
        className="h-10 w-10  rounded-full"
        alt="Profile image"
      />
      <input
        placeholder="Type some emojis :)"
        className="bg-transparent"
      ></input>
    </div>
  );
};
```

> We can then use `<CreatePostWizard />` in our page.

**2.8 Connecting posts with users**

> User has one of its props and that is called id. We can console.log user and check the current id: `user_2OBaeJj8EI29omUN4LZTUFl7TBh`

> If we have that unique id, we can then adjust our trp calls in file: `posts.ts`:

```
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const postsRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    const posts = await ctx.prisma.post.findMany({
      take: 100,
      where: { authorId: "user_2OBaeJj8EI29omUN4LZTUFl7TBh" },
    });
    return posts;
  }),
});

```

> Script above will only return those posts which belong to user with id: user_2OBaeJj8EI29omUN4LZTUFl7TBh

> `take: 100` limits number of posts to 100

> But we dont want to hard-code the user. We want to get the user from the Clerk.

> For now, lets just see how we can get all the users for the posts that we have:

```
import clerkClient from "@clerk/clerk-sdk-node";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const postsRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    const posts = await ctx.prisma.post.findMany({
      take: 100,
      where: { authorId: "user_2OBaeJj8EI29omUN4LZTUFl7TBh" },
    });

    const users = await clerkClient.users.getUserList({
      userId: posts.map((post) => post.authorId),
      limit: 100,
    });
    console.log("usersss", users);
    return posts;
  }),
});

```

> This will console log it in the terminal! Not in the browser console. But the info it provides is really a lot, we only want the id, username an dprofilePicture, so let's create a filter function.

```
const filterUserForClient = (user: User) => {
  return {
    id: user.id,
    username: user.username,
    profilePicture: user.profileImageUrl,
  };
};
```

> We can then use it in our posts router like this:

```
export const postsRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    const posts = await ctx.prisma.post.findMany({
      take: 100,
      where: { authorId: "user_2OBaeJj8EI29omUN4LZTUFl7TBh" },
    });

    const users = (await clerkClient.users.getUserList({
      userId: posts.map((post) => post.authorId),
      limit: 100,
    })).map(filterUserForClient);
    return posts;
  }),
});
```

> Then instead of just returning the array of posts in our getAll trpc, we will return object with post and author in it:

```
import clerkClient, { User } from "@clerk/clerk-sdk-node";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

const filterUserForClient = (user: User) => {
  return {
    id: user.id,
    username: user.username,
    profilePicture: user.profileImageUrl,
  };
};

export const postsRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    const posts = await ctx.prisma.post.findMany({
      take: 100,
      where: { authorId: "user_2OBaeJj8EI29omUN4LZTUFl7TBh" },
    });

    const users = (
      await clerkClient.users.getUserList({
        userId: posts.map((post) => post.authorId),
        limit: 100,
      })
    ).map(filterUserForClient);
    return posts.map((post) => {
      return { post, author: users.find((user) => user.id === post.authorId) };
    });
  }),
});
```

> We should also make sure that if there are no authors, we throw an error:

```
import clerkClient, { User } from "@clerk/clerk-sdk-node";
import { TRPCError } from "@trpc/server";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

const filterUserForClient = (user: User) => {
  return {
    id: user.id,
    username: user.username,
    profilePicture: user.profileImageUrl,
  };
};

export const postsRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    const posts = await ctx.prisma.post.findMany({
      take: 100,
      where: { authorId: "user_2OBaeJj8EI29omUN4LZTUFl7TBh" },
    });

    const users = (
      await clerkClient.users.getUserList({
        userId: posts.map((post) => post.authorId),
        limit: 100,
      })
    ).map(filterUserForClient);
    return posts.map((post) => {
      const author = users.find((user) => user.id === post.authorId);

      if (!author || !author.username) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Author of the posts not found",
        });
      }
      return { post, author: { ...author, username: author.username } };
    });
  }),
});
```

> We also need to adjust our `index.tsx` cause the response is a bit different.

> Instead of:

```
{data.map(( post ) => (
              <div key={post.id} className="border-b border-slate-400 p-8">
                {post.content}
              </div>
))}
```

> we need:

```
{data.map(({ post, author }) => (
              <div key={post.id} className="border-b border-slate-400 p-8">
                {post.content}
              </div>
))}
```

> We will now create a PostView component which will show user profile with the post

> For that we will certainly need a type. But it is super easy to get the types from the router we create. We will need a RouterOUtputs util and in it we will specify which router and where of its procedures

```
import { RouterOutputs } from "~/utils/api";

type PostWithUser = RouterOutputs["posts"]["getAll"]
```

> Please note that we will have here array or objects with post and author in it.

> But for our PostView component we only need one of them, so the actual type will be:

```
type PostWithUser = RouterOutputs["posts"]["getAll"][number]
```

> The whole component will look like this:

```
type PostWithUser = RouterOutputs["posts"]["getAll"][number];

const PostView = (props: PostWithUser) => {
  const { post, author } = props;
  return (
    <div
      key={post.id}
      className="flex items-center gap-4 border-b border-slate-400 p-8"
    >
      <Image
        src={author.profilePicture}
        alt="Author image"
        className="h-12 w-12  rounded-full"
        width={56}
        height={56}
      />
      <div className="flex flex-col">
        <div className="flex gap-2 text-slate-400">
          <span>{`@${author.username}`}</span>
          <span>{`•  ${dayjs(post.createdAt).fromNow()}`}</span>
        </div>
        <div className="flex">{post.content}</div>
      </div>
    </div>
  );
};
```

> The whole page now:

```
import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import { api } from "~/utils/api";
import type { RouterOutputs } from "~/utils/api";

dayjs.extend(relativeTime);

const CreatePostWizard = () => {
  const { user } = useUser();
  console.log("user", user);

  if (!user) {
    return null;
  }

  return (
    <div className="flex w-full gap-4 space-x-2 p-4">
      <Image
        src={user.profileImageUrl}
        className="h-10 w-10  rounded-full"
        alt="Profile image"
        width={56}
        height={56}
      />
      <input
        placeholder="Type some emojis :)"
        className="bg-transparent"
      ></input>
    </div>
  );
};

const UserBar = () => {
  const { user } = useUser();

  if (!user) {
    return null;
  }

  return (
    <div className="flex">
      <Image
        src={user.profileImageUrl}
        className="h-16 w-16  rounded-full"
        alt="Profile image"
        width={56}
        height={56}
      />
    </div>
  );
};

type PostWithUser = RouterOutputs["posts"]["getAll"][number];

const PostView = (props: PostWithUser) => {
  const { post, author } = props;
  return (
    <div
      key={post.id}
      className="flex items-center gap-4 border-b border-slate-400 p-8"
    >
      <Image
        src={author.profilePicture}
        alt="Author image"
        className="h-12 w-12  rounded-full"
        width={56}
        height={56}
      />
      <div className="flex flex-col">
        <div className="flex gap-2 text-slate-400">
          <span>{`@${author.username}`}</span>
          <span>{`•  ${dayjs(post.createdAt).fromNow()}`}</span>
        </div>
        <div className="flex">{post.content}</div>
      </div>
    </div>
  );
};

const Home: NextPage = () => {
  const user = useUser();
  const { data, isLoading } = api.posts.getAll.useQuery();

  if (isLoading) {
    return <div className="flex w-full justify-center p-8">Loading...</div>;
  }

  if (!data) {
    return (
      <div className="flex w-full justify-center p-8">
        Something went wrong...
      </div>
    );
  }
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex h-screen justify-center">
        <div className="h-full w-full border-x border-slate-400 md:max-w-2xl">
          <div className="flex border-b border-slate-400 p-4">
            {!user.isSignedIn && (
              <div className="flex justify-center">
                <SignInButton />
              </div>
            )}
            {!!user.isSignedIn && (
              <div className="w-full">
                <div className="flex w-full justify-between">
                  <div className="flex items-center  space-x-2">
                    <UserBar />
                    <p>Hi {user.user.fullName}</p>
                  </div>
                  <SignOutButton />
                </div>
                <CreatePostWizard />
              </div>
            )}
          </div>
          <div className="flex flex-col">
            {data.map((fullProps) => (
              <PostView {...fullProps} key={fullProps.post.id} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
```

> You will notice couple of changes. We use dayjs to format our createdAt and calculate how long until now it was posted

> dayjs needs to be installed with:

```
npm install dayjs
```

> It needs to be imported and configured like this:

```
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);
```

> It can then be used like this:

```
dayjs(post.createdAt).fromNow()
```

> Another change is the images optimization

> You will notice that if we use img tag, it will be underlined. Using those tags is not optimal. Instead next.js provides an Image component which is optimized and will load faster. This component will need width, height and alt props.

```
import Image from "next/image";

<Image
        src={user.profileImageUrl}
        className="h-10 w-10  rounded-full"
        alt="Profile image"
        width={56}
        height={56}
/>
```

> But doing just this will break the application with error. We need to go to this file: `next.config.mjs` and extend the trusted image domains:

```
const config = {
  reactStrictMode: true,
  images: {
    domains: ["images.clerk.dev"],
  },
```

**2.9 Adding nicer loading spinners**

> Search for tailwind spinner. Example:
> https://flowbite.com/docs/components/spinner/

> Create a file in src/components called loading.tsx and make a re-usable ocmponent out of it:

```
export const LoadingSpinner = ({ size = 16 }) => (
  <div role="status">
    <svg
      aria-hidden="true"
      className="animate-spin fill-teal-500 text-gray-200 dark:text-gray-600"
      viewBox="0 0 100 101"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      height={size}
      width={size}
    >
      <path
        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
        fill="currentColor"
      />
      <path
        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
        fill="currentFill"
      />
    </svg>
    <span className="sr-only">Loading...</span>
  </div>
);

export const LoadingPage = () => (
  <div className="absolute right-0 top-0 flex h-screen w-screen items-center justify-center">
    <LoadingSpinner size={60} />
  </div>
);
```

**2.10 Extracting posts to Feed component**

> We can also separate osts to their own component called Feed

```
import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import { api } from "~/utils/api";
import type { RouterOutputs } from "~/utils/api";
import { LoadingPage } from "~/components/loading";

dayjs.extend(relativeTime);

const CreatePostWizard = () => {
  const { user } = useUser();

  if (!user) {
    return null;
  }

  return (
    <div className="flex w-full gap-4 space-x-2 p-4">
      <Image
        src={user.profileImageUrl}
        className="h-10 w-10  rounded-full"
        alt="Profile image"
        width={56}
        height={56}
      />
      <input
        placeholder="Type some emojis :)"
        className="bg-transparent"
      ></input>
    </div>
  );
};

const UserBar = () => {
  const { user } = useUser();

  if (!user) {
    return null;
  }

  return (
    <div className="flex">
      <Image
        src={user.profileImageUrl}
        className="h-16 w-16  rounded-full"
        alt="Profile image"
        width={56}
        height={56}
      />
    </div>
  );
};

type PostWithUser = RouterOutputs["posts"]["getAll"][number];

const PostView = (props: PostWithUser) => {
  const { post, author } = props;
  return (
    <div
      key={post.id}
      className="flex items-center gap-4 border-b border-slate-400 p-8"
    >
      <Image
        src={author.profilePicture}
        alt="Author image"
        className="h-12 w-12  rounded-full"
        width={56}
        height={56}
      />
      <div className="flex flex-col">
        <div className="flex gap-2 text-slate-400">
          <span>{`@${author.username}`}</span>
          <span>{`•  ${dayjs(post.createdAt).fromNow()}`}</span>
        </div>
        <div className="flex">{post.content}</div>
      </div>
    </div>
  );
};

const Feed = () => {
  const { data, isLoading: pageLoading } = api.posts.getAll.useQuery();

  if (pageLoading) {
    return (
      <div className="flex w-full justify-center p-8">
        <LoadingPage />
      </div>
    );
  }

  if (!data) {
    return (
      <div className="flex w-full justify-center p-8">
        Something went wrong...
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      {data.map((fullProps) => (
        <PostView {...fullProps} key={fullProps.post.id} />
      ))}
    </div>
  );
};
const Home: NextPage = () => {
  const { user, isLoaded: userLoaded, isSignedIn } = useUser();

  // Start fetching data early - reactQuery will cache it
  api.posts.getAll.useQuery();

  if (!userLoaded) {
    return <div />;
  }

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex h-screen justify-center">
        <div className="h-full w-full border-x border-slate-400 md:max-w-2xl">
          <div className="flex border-b border-slate-400 p-4">
            {!isSignedIn && (
              <div className="flex justify-center">
                <SignInButton />
              </div>
            )}
            {!!isSignedIn && (
              <div className="w-full">
                <div className="flex w-full justify-between">
                  <div className="flex items-center  space-x-2">
                    <UserBar />
                    <p>Hi {user.fullName}</p>
                  </div>
                  <SignOutButton />
                </div>
                <CreatePostWizard />
              </div>
            )}
          </div>
          <Feed />
        </div>
      </main>
    </>
  );
};

export default Home;
```

**2.11 Handling the problem with Auth adding posts**

> Problem here is to know who the user is and if they have permission to create posts. At the moment with trpc we dont have any permission settings because we didnt use create next Auth.

> We will solve this problem by attaching the auth state to the context of trpc inside of each query. By context we mean ctx in file: `src/server/api/routers/posts`.

> A the moment if we look at the ctx itself, we only have access to prisma and nothing else. This is how our context looks like:

```
ctx: {
    prisma: PrismaClient<Prisma.PrismaClientOptions, never, Prisma.RejectOnNotFound | Prisma.RejectPerOperation | undefined>;
}
```

> So in order to attach auth to the trpc context, go to `src/server/api/trpc.ts`

> This file is usually never changed unless we want to modify the context or create new middleware

> We wont be using `createInnerTRPCContext` at all. It is only good for testing. Instead we will return prisma directly in `createTRPCContext`

```
export const createTRPCContext = (_opts: CreateNextContextOptions) => {
  return {
    prisma,
  };
};
```

> And in the createTRPCContext we will need to obtain information about the user.

> Notice that the `_opts` is escaped (has an underscore) because for now we didnt use it in `createTRPCContext`.

> But we will use those opts (options), so let's unescape it:

```
export const createTRPCContext = (opts: CreateNextContextOptions) => {
  return {
    prisma,
  };
};
```

> Those options are an object and has a `req` key. Which is the entire nextJS `request` from an api

```
export const createTRPCContext = (opts: CreateNextContextOptions) => {

  const { req } = opts

  return {
    prisma,
  };
};
```

> This request can be then passed to clerk

> Clerk uses JWT - JSON Web Tokens. Clerk is able to verify on my server whether the user is authenticated or not using the signature of JWT. With this, we will know this is THIS user & provide us a bit info about them - especially signedInAuthObject or signedOutAuthObject which contain behaviour if the user is igned in or not

```
import { getAuth } from "@clerk/nextjs/server";

export const createTRPCContext = (opts: CreateNextContextOptions) => {
  const { req } = opts;
  const session = getAuth(req);
  return {
    prisma,
  };
};
```

> Please note that we wont be using `const user = getUser(req)` cause we dont have that with every request we will be fetching the user from Clerk

> We will now extend the createTRPCContext with auth info about the user

```
export const createTRPCContext = (opts: CreateNextContextOptions) => {
  const { req } = opts;
  const session = getAuth(req);

  const userId = session.userId;
  return {
    prisma,
    userId,
  };
};
```

> We wont necessarily have the auth but we can make a procedure which enforces that we have an authentication

> The easiest way to do it is to extend the public procedure with the middleware. In this context middleware will be a small process that runs before our main request processing. Super helpful for authentications.

> Since we already attached the auth earlier, we can easily then verify at the end of the file:

```
const enforceUserIsAuthed = t.middleware(async ({ ctx, next }) => {
  if (!ctx.userId) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }
  return next({
    ctx: {
      userId: ctx.userId,
    },
  });
});
```

> In above code we use the `t` helper from the TRPC

> Remember to update import:

```
import { TRPCError } from "@trpc/server";
```

> Now we need to use that procedure:

```
export const privateProcedure = t.procedure.use(enforceUserIsAuthed)
```

> Whole file looks like this:

```
/**
 * YOU PROBABLY DON'T NEED TO EDIT THIS FILE, UNLESS:
 * 1. You want to modify request context (see Part 1).
 * 2. You want to create a new middleware or type of procedure (see Part 3).
 *
 * TL;DR - This is where all the tRPC server stuff is created and plugged in. The pieces you will
 * need to use are documented accordingly near the end.
 */

/**
 * 1. CONTEXT
 *
 * This section defines the "contexts" that are available in the backend API.
 *
 * These allow you to access things when processing a request, like the database, the session, etc.
 */
import { type CreateNextContextOptions } from "@trpc/server/adapters/next";

import { prisma } from "~/server/db";

type CreateContextOptions = Record<string, never>;

/**
 * This helper generates the "internals" for a tRPC context. If you need to use it, you can export
 * it from here.
 *
 * Examples of things you may need it for:
 * - testing, so we don't have to mock Next.js' req/res
 * - tRPC's `createSSGHelpers`, where we don't have req/res
 *
 * @see https://create.t3.gg/en/usage/trpc#-serverapitrpcts
 */
const createInnerTRPCContext = (_opts: CreateContextOptions) => {
  return {
    prisma,
  };
};

/**
 * This is the actual context you will use in your router. It will be used to process every request
 * that goes through your tRPC endpoint.
 *
 * @see https://trpc.io/docs/context
 */
export const createTRPCContext = (opts: CreateNextContextOptions) => {
  const { req } = opts;
  const session = getAuth(req);

  const userId = session.userId;
  return {
    prisma,
    userId,
  };
};

/**
 * 2. INITIALIZATION
 *
 * This is where the tRPC API is initialized, connecting the context and transformer. We also parse
 * ZodErrors so that you get typesafety on the frontend if your procedure fails due to validation
 * errors on the backend.
 */
import { initTRPC, TRPCError } from "@trpc/server";
import superjson from "superjson";
import { ZodError } from "zod";
import { getAuth } from "@clerk/nextjs/server";

const t = initTRPC.context<typeof createTRPCContext>().create({
  transformer: superjson,
  errorFormatter({ shape, error }) {
    return {
      ...shape,
      data: {
        ...shape.data,
        zodError:
          error.cause instanceof ZodError ? error.cause.flatten() : null,
      },
    };
  },
});

/**
 * 3. ROUTER & PROCEDURE (THE IMPORTANT BIT)
 *
 * These are the pieces you use to build your tRPC API. You should import these a lot in the
 * "/src/server/api/routers" directory.
 */

/**
 * This is how you create new routers and sub-routers in your tRPC API.
 *
 * @see https://trpc.io/docs/router
 */
export const createTRPCRouter = t.router;

/**
 * Public (unauthenticated) procedure
 *
 * This is the base piece you use to build new queries and mutations on your tRPC API. It does not
 * guarantee that a user querying is authorized, but you can still access user session data if they
 * are logged in.
 */
export const publicProcedure = t.procedure;

const enforceUserIsAuthed = t.middleware(async ({ ctx, next }) => {
  if (!ctx.userId) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }
  return next({
    ctx: {
      userId: ctx.userId,
    },
  });
});

export const privateProcedure = t.procedure.use(enforceUserIsAuthed);

```

> And now we have a private procedure that when used will always have an authentication object

**2.12 Handle adding posts**

> Now we can go to `src/server/api/router/posts.ts`

> We can create here a new protected procedure called `create`:

```
create: privateProcedure.mutation(async ({ ctx }) => {
    const authorId = ctx.userId;

    const post = await ctx.prisma.post.create({
      data: {
        authorId,
      },
    });
  }),
```

> In this privateProcedure, we guarantee that the user is authenticated. If we switched it to publicProcedure, user could be null or undefined

> But TS will scream that we need content as well, not only authorId. Where do we get that from? We get it from the input. We need to tell it what kind of input we want it to be. We will use zod for that as a validator of our form (input). For example it can validate if the string is an emoji: `z.string().emoji()`

> Let's add that input to out trpc procedure:

```
create: privateProcedure
    .input(
      z.object({
        content: z.string().emoji().min(1).max(280),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const authorId = ctx.userId;

      const post = await ctx.prisma.post.create({
        data: {
          authorId,
          content: input.content,
        },
      });
      return post;
    }),
```

> Notice how you squeeze in the input() between privateProcedure and mutation

> Also notice how you can then have access to that input in the mutation, next to ctx

> Your `data` will then have `authorId` and `content`

> And when we do such a mutation, we return the `post`

> The whole file then looks like this:

```
import clerkClient, { User } from "@clerk/clerk-sdk-node";
import { TRPCError } from "@trpc/server";
import { z } from "zod";

import {
  createTRPCRouter,
  privateProcedure,
  publicProcedure,
} from "~/server/api/trpc";

const filterUserForClient = (user: User) => {
  return {
    id: user.id,
    username: user.username,
    profilePicture: user.profileImageUrl,
  };
};

export const postsRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    const posts = await ctx.prisma.post.findMany({
      take: 100,
      where: { authorId: "user_2OBaeJj8EI29omUN4LZTUFl7TBh" },
    });

    const users = (
      await clerkClient.users.getUserList({
        userId: posts.map((post) => post.authorId),
        limit: 100,
      })
    ).map(filterUserForClient);
    return posts.map((post) => {
      const author = users.find((user) => user.id === post.authorId);

      if (!author || !author.username) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Author of the posts not found",
        });
      }
      return { post, author: { ...author, username: author.username } };
    });
  }),
  create: privateProcedure
    .input(
      z.object({
        content: z.string().emoji().min(1).max(280),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const authorId = ctx.userId;

      const post = await ctx.prisma.post.create({
        data: {
          authorId,
          content: input.content,
        },
      });
      return post;
    }),
});

```

> Then we need to go to client (frontend) file: index.tsx and use that new procedure and add posts.

> We will do it in the `CreatePostWizard` component. We will add a react state to handle input and also button to sumbit the posts, which will use the `mutate` from our create procedure: `const { mutate } = api.posts.create.useMutation()`

```
const CreatePostWizard = () => {
  const { user } = useUser();
  console.log("user", user);

  const [input, setInput] = useState("");

  const { mutate } = api.posts.create.useMutation();

  if (!user) {
    return null;
  }

  return (
    <div className="flex w-full gap-4 space-x-2 p-4">
      <Image
        src={user.profileImageUrl}
        className="h-10 w-10  rounded-full"
        alt="Profile image"
        width={56}
        height={56}
      />
      <input
        placeholder="Type some emojis :)"
        className="bg-transparent"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => mutate({ content: input })}>Post</button>
    </div>
  );
};
```

> Now we can run our app and test if it works. Try adding post and refreshing the page.

**2.13 Ordering**

> We can also order our posts by createdAt in a descending manner. Go to `src/server/api/routers/posts.ts` and add the `orderBy` in our `getAll` procedure:

```
orderBy: [
        {
          createdAt: "desc",
        },
      ],
```

> Whole procedure:

```
getAll: publicProcedure.query(async ({ ctx }) => {
    const posts = await ctx.prisma.post.findMany({
      take: 100,
      orderBy: [
        {
          createdAt: "desc",
        },
      ],
      where: { authorId: "user_2OBaeJj8EI29omUN4LZTUFl7TBh" },
    });

    const users = (
      await clerkClient.users.getUserList({
        userId: posts.map((post) => post.authorId),
        limit: 100,
      })
    ).map(filterUserForClient);
    return posts.map((post) => {
      const author = users.find((user) => user.id === post.authorId);

      if (!author || !author.username) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Author of the posts not found",
        });
      }
      return { post, author: { ...author, username: author.username } };
    });
  }),
```

**2.14 Auto-refresh (hot reload) page when adding new post & clearing input**

> We now want to disbaled the input while post is being posted and also we want to auto refresh the page. We will do in in CreatePostWizard:

```
const CreatePostWizard = () => {
  const { user } = useUser();

  const [input, setInput] = useState("");
  const ctx = api.useContext();

  const { mutate, isLoading: isPosting } = api.posts.create.useMutation({
    onSuccess: () => {
      setInput("");
      void ctx.posts.getAll.invalidate();
    },
  });

  if (!user) {
    return null;
  }

  return (
    <div className="flex w-full gap-4 space-x-2 p-4">
      <Image
        src={user.profileImageUrl}
        className="h-10 w-10  rounded-full"
        alt="Profile image"
        width={56}
        height={56}
      />
      <input
        placeholder="Type some emojis :)"
        className="bg-transparent"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        disabled={isPosting}
      />
      <button disabled={isPosting} onClick={() => mutate({ content: input })}>Post</button>
    </div>
  );
};
```

> Notice how we add isLoading: isPosting to the useMutation which we then can use to disable the input & button or add a loading spinner.

> We then also want to invalidate the query. For that we could need the request context, which we can get from `api.useContext()`. This will then help us in the `onSuccess` call of useMutation, which will set the input to be empty and also invalidate the query with `ctx.posts.getAll.invalidate()`. Please note that we use word `void` as theinvalidate expects and asynch function. We just quickly want to fix the TS error, we are not waiting for anyhting, we just want to invalidate the query.

**2.15 Set limit to number of posts**

> We dont want our users to spam the posts, we want to put a limit to how many they can post.

> We will use technology called upstash for that. https://upstash.com/

> They have an awesome package for rate limiting.

> Go to their website and click Console.

> Sign in with your Github.

> CLick create database.

> Give it a name, like: chirp-ratelimiter

> Select `regional` and select your region: eu-central.

> Click create

> Now search for upstash rate limiter on google and visit their github: https://github.com/upstash/ratelimit

> Install it:

```
npm install @upstash/ratelimit
npm install @upstash/redis
```

> There are couple of places where we can do the ratelimit, but we will be doing it in the posts.tsx file. Copy from documentation:

```
import { Ratelimit } from "@upstash/ratelimit"; // for deno: see above
import { Redis } from "@upstash/redis";

// Create a new ratelimiter, that allows 10 requests per 10 seconds
const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(10, "10 s"),
  analytics: true,
  prefix: "@upstash/ratelimit",
});
```

> But this function above requires Redis.fromEnv. This assumes we have UPSTASH_REDIS_REST_URL & UPSTASH_REDIS_REST_TOKEN in our `process.env` file -> which in our case is the `.env` file

> Where do we get those URL & TOKEN? From our console.upstash which we created:`https://console.upstash.com/redis/....`

> In the REST API section, select the .env tab and copy the URLs to the `.env` file. It is the same file where we have our CLERK_SECRET_KEY, NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY & DATABASE_URL

> More over we need ot add those envs to our Vercel.

> By default 10 requests per 10 seconds are allowed in this piece of code: `limiter: Ratelimit.slidingWindow(10, "10 s")`. We want to be more strict and allow 3 per minute: `limiter: Ratelimit.slidingWindow(3, "1 m")`

> How to use it now? We go to our create posts mutation and add this code:

```
const { success } = await ratelimit.limit(authorId);

if (!success){
        throw new TRPCError({code: "TOO_MANY_REQUESTS"})
}
```

> Whole create procedure looks then like this:

```
 create: privateProcedure
    .input(
      z.object({
        content: z.string().emoji().min(1).max(280),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const authorId = ctx.userId;

      const { success } = await ratelimit.limit(authorId);

      if (!success){
        throw new TRPCError({code: "TOO_MANY_REQUESTS"})
      }

      const post = await ctx.prisma.post.create({
        data: {
          authorId,
          content: input.content,
        },
      });
      return post;
    }),
```

> To the `rateLimit.limit` we pass the author id. It returns the promise, so we need to await for it. It returns an object which success property. If we are not successful, then we throw a TRPC error for too many requests

> This adds a special scalability to our little app. This shows that it is production ready, because it cannot be taken down by sheer spamming. It now uses authorId for the limit, but it can be an api address, or other properties.

**2.16 Add client errors when there is no emoji typed in**

> Let's search for `react hot toasts`: https://react-hot-toast.com/

> Install the package:

```
npm install react-hot-toast
```

> Let's now go to `_app.tsx` and add their `<Toaster />` there from the website and import it via:

```
import { Toaster } from "react-hot-toast";
```

> Whole file looks like this:

```
import { ClerkProvider } from "@clerk/nextjs";

import { type AppType } from "next/app";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import { Toaster } from "react-hot-toast";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ClerkProvider {...pageProps}>
      <Toaster />
      <Component {...pageProps} />
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);

```

> We will want to throw an error when we create an toast. so instead of onSuccess mutation, we will use onError and throw a toast there. So go to index.tsx file and in thew `CreatePostWizard` component add `toast.error` for `onError`:

```
 const { mutate, isLoading: isPosting } = api.posts.create.useMutation({
    onSuccess: () => {
      setInput("");
      void ctx.posts.getAll.invalidate();
    },
    onError: () => {
      toast.error("Failed to post! Please try again later.");
    },
  });
```

> If we want to have our toasts in the center-bottom, we need to add the position prop to the `Toaster` in the `_app.tsx`

```
 <Toaster position="bottom-center" />
```

> We can even get the concrete error message from zod using `e` object:

```
onError: (e) => {
      const errorMessage = e.data?.zodError?.fieldErrors.content;
      if (errorMessage && errorMessage[0]) {
        toast.error(errorMessage[0]);
      } else {
        toast.error("Failed to post! Please try again later.");
      }
    },
```

> If we type text instead of emoji, we will get message in the toast: "Invalid emoji"

> We can even customize our error message, when we go back to file posts.tsx in the create procedure, we can add the custom message to the `.emoji()`

```
create: privateProcedure
    .input(
      z.object({
        content: z.string().emoji("Only emojis are allowed").min(1).max(280),
      })
    )
```

**2.17 Fine-tuning**

> We want to make sure if we typed in something, we press `ENTER` key and it posts. Let's add following to the input to `CreatePostWizard`:

```
onKeyDown={(e) => {
          if (e.key === "ENTER") {
            e.preventDefault();
            if (input !== "") {
              mutate({ content: input });
            }
          }
}}
```

> Plus we want to make some final touches to loading spinners and rendering buttons. So the whole code looks like this:

```
const CreatePostWizard = () => {
  const { user } = useUser();

  const [input, setInput] = useState("");
  const ctx = api.useContext();

  const { mutate, isLoading: isPosting } = api.posts.create.useMutation({
    onSuccess: () => {
      setInput("");
      void ctx.posts.getAll.invalidate();
    },
    onError: (e) => {
      const errorMessage = e.data?.zodError?.fieldErrors.content;
      if (errorMessage && errorMessage[0]) {
        toast.error(errorMessage[0]);
      } else {
        toast.error("Failed to post! Please try again later.");
      }
    },
  });

  if (!user) {
    return null;
  }

  return (
    <div className="flex w-full gap-4 space-x-2 p-4">
      <Image
        src={user.profileImageUrl}
        className="h-10 w-10  rounded-full"
        alt="Profile image"
        width={56}
        height={56}
      />
      <input
        placeholder="Type some emojis :)"
        className="bg-transparent"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        disabled={isPosting}
        onKeyDown={(e) => {
          if (e.key === "ENTER") {
            e.preventDefault();
            if (input !== "") {
              mutate({ content: input });
            }
          }
        }}
      />
      {input !== "" && !isPosting && (
        <button onClick={() => mutate({ content: input })}>Post</button>
      )}
      {isPosting && (
        <div className="flex justify-center">
          <LoadingSpinner size={20} />
        </div>
      )}
    </div>
  );
};
```

**2.18 Routing**

> We would like to have separate page for the user profile, when we click user image or the name of author. We wuld also like to have a post page when we click anywhere inside the post area.

> To get started we we will create a new folder in the pages called "post" and in it we will copy paste our index.tsx. We will rename the file to "[id].tsx". When we use next.js router, the `id` is something we will have access to in our routing

> Also next to our index.tsx in pages folder, we will create a new file called: `[slug].tsx`

> Here is the file structure:

![](https://i.imgur.com/ygvXx6d.png "Photo by Addania")<p style="font-size: 12px; text-align: right">_Photo by Addania_</p>

> Now you can replace the content of the `[slug].tsx` and only render <>Profile page</>

> This is the whole page:

```
import { type NextPage } from "next";
import Head from "next/head";

const ProfilePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex h-screen justify-center">
        <>Profile View</>
      </main>
    </>
  );
};

export default ProfilePage;
```

> Now how you can access it? By navigating to the url: `http://localhost:3000/@addania`

> So the slug is the `@` symbol and then the `author`.

> Let's do the same for the [id].tsx file & let's call it `SinglePostPage`:

```
import { type NextPage } from "next";
import Head from "next/head";

const SinglePostPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex h-screen justify-center">
        <>One post page View</>
      </main>
    </>
  );
};

export default SinglePostPage;
```

> Now let's open our `index.tsx` file and let's make the links. We will use next.js `Link` component. When we use `Link` instead of `a` tag, the routing will actually occur and it wont make a full page refresh! So cool and optimized

```
import Link from "next/link";

<Link href={`/@${author.username}`}>
  <span>{`@${author.username}`}</span>
</Link>
```

> Let's link the postpage:

```
import Link from "next/link";

<Link href={`/post/${post.id}`}>
    <span>{`•  ${dayjs(post.createdAt).fromNow()}`}</span>
</Link>
```

**2.18 Meta data**

> Look at our index.tsx and the `Head` tag. Let's give it a name of Chirp and content of thinking emoji.

```
<Head>
  <title>Chirp</title>
  <meta name="description" content="💭" />
  <link rel="icon" href="/favicon.ico" />
</Head>
```

> We also want this to be default to all pages, so we will cut it from this file and add it to `_app.tsx`. If we put it to the `_app` file, it will be the default, and if I add one to another file, it will overwrite what is in the `_app`.

```
import { ClerkProvider } from "@clerk/nextjs";

import { type AppType } from "next/app";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import { Toaster } from "react-hot-toast";
import Head from "next/head";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ClerkProvider {...pageProps}>
      <Head>
        <title>Chirp</title>
        <meta name="description" content="💭" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Toaster position="bottom-center" />
      <Component {...pageProps} />
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);

```

> We can then simplify the `[slug].tsx` file:

```
import { type NextPage } from "next";
import Head from "next/head";

const ProfilePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Profile</title>
      </Head>
      <main className="flex h-screen justify-center">
        <>Profile View</>
      </main>
    </>
  );
};

export default ProfilePage;
```

> We can then simplify the `[id].tsx` file:

```
import { type NextPage } from "next";
import Head from "next/head";

const SinglePostPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Post</title>
      </Head>
      <main className="flex h-screen justify-center">
        <>One post page View</>
      </main>
    </>
  );
};

export default SinglePostPage;
```

> But for the `profile` page, we want the title to be actually the name of the author. We will need to define a trpc query for it. We will need a `subrouter` for it.

> In `server/api/routers` we will create a new file called `profile.ts`

> The content of this file is:

```
import clerkClient from "@clerk/clerk-sdk-node";
import { TRPCError } from "@trpc/server";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const profileRouter = createTRPCRouter({
  getUserByUsername: publicProcedure
    .input(z.object({ username: z.string() }))
    .query(async ({ input }) => {
      const [user] = await clerkClient.users.getUserList({
        username: [input.username],
      });
      if (!user) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "User not found",
        });
      }
      return user;
    }),
});
```

> We need to add this router to our `root.ts`. Content of this file:

```
import { createTRPCRouter } from "~/server/api/trpc";
import { postsRouter } from "~/server/api/routers/posts";
import { profileRouter } from "./routers/profile";

export const appRouter = createTRPCRouter({
  posts: postsRouter,
  profile: profileRouter,
});

export type AppRouter = typeof appRouter;
```

> If we want to use it, go to `[slug].tsx` and make use of this router:

```
import { type NextPage } from "next";
import Head from "next/head";
import { api } from "~/utils/api";

const ProfilePage: NextPage = () => {
  const { data, isLoading } = api.profile.getUserByUsername.useQuery({
    username: "addania",
  });

  if (isLoading) {
    return <div className="flex h-screen justify-center">Loading...</div>;
  }

  if (!data) {
    return <div className="flex h-screen justify-center">404</div>;
  }

  return (
    <>
      <Head>
        <title>Profile</title>
      </Head>
      <main className="flex h-screen justify-center">
        <div>{data.username}</div>
      </main>
    </>
  );
};

export default ProfilePage;
```

> Notice how we use our new router here:

```
 const { data, isLoading } = api.profile.getUserByUsername.useQuery({
    username: "addania",
});
```

> But again when we console.log `data`, we will notice, that we have too much data. We want to filter it.

> Since this is alreday the second time we want to use the filter, we can break out that filter to a separate file.

> Let's make folder in server called `helpers`. And create there a file called: `filterUserForClient.ts`

> Then go to posts and cut out this code:

```
import type { User } from "@clerk/clerk-sdk-node";

export const filterUserForClient = (user: User) => {
  return {
    id: user.id,
    username: user.username,
    profilePicture: user.profileImageUrl,
  };
};

```

> Paste this code to that file: `filterUserForClient.ts`

> We need to update the import of this file in `posts.ts`:

```
import { filterUserForClient } from "~/server/helpers/filterUserForClient";
```

> We will then use `filterUserForClient` in our `profile.ts`

```
import clerkClient from "@clerk/clerk-sdk-node";
import { TRPCError } from "@trpc/server";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { filterUserForClient } from "~/server/helpers/filterUserForClient";

export const profileRouter = createTRPCRouter({
  getUserByUsername: publicProcedure
    .input(z.object({ username: z.string() }))
    .query(async ({ input }) => {
      const [user] = await clerkClient.users.getUserList({
        username: [input.username],
      });
      if (!user) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "User not found",
        });
      }
      return filterUserForClient(user);
    }),
});
```

**2.19 SSG Helper**

> Now we want our meta data to load instantaneously.

> Search for SSG Helper for trpc: https://trpc.io/docs/v9/ssg-helpers

> It will pre-hydrate some data ahead of time.

> In our file: `[slug].tsx` we will create a function called: getStaticProps:

> Firstly we need to create the ssg helper:

```
import { createServerSideHelpers } from "@trpc/react-query/server";
import { appRouter } from "~/server/api/root";
import { prisma } from "~/server/db";
import superjson from "superjson";

export const getStaticProps: GetStaticProps = async (context) => {
  const ssg = createServerSideHelpers({
    router: appRouter,
    ctx: { prisma, userId: null },
    transformer: superjson,
  });

  const slug = context.params?.slug;

  if (typeof slug !== "string") {
    throw new Error("no slug");
  }

  const username = slug.replace("@", "");
  await ssg.profile.getUserByUsername.prefetch({ username });

  return {
    props: {
      trpcState: ssg.dehydrate(),
      username,
    },
  };
};

export const getStaticPaths = () => {
  return { paths: ["/@addania"], fallback: "blocking" };
};
```

> This will make sure that the data is there where the page loads.

> This means that when we go to `[slug].tsx` -> the loading is never there. If we console log isLoading, it wont be there.

> `const ssg` is a helper which makes the magic of pre-fetching data.

> `GetStaticProps` type is provided by next

> `await ssg.profile.getUserByUsername.prefetch({ username });` this is ftching on the server

> `prefetch` is a cool helper which pre-fetches the data ahead of time & hydrates it through server side props.

> `trpcState: ssg.dehydrate(),` - this dehrydrates -> takes everything we fetched, puts it in the shape that can be parsed through next.js server side props (in this case static props) and ensures data is there when we need it and loading state of `[slug].tsx` will never be hit.

> In order for this all to work, we need to tell next.js which paths are valid:

```
export const getStaticPaths = () => {
  return { paths: [], fallback: "blocking" };
};
```

> `const username = slug.replace("@", "")`; our slug contains still `@` and it needs to be removed when we want to pass username

> Now we can tidy up a bit the profile page `[slug].stx`. We no longer hardcode "addania", but we fetch it. We dont need loading state.

> Whole code lloks like this:

```import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { api } from "~/utils/api";

const ProfilePage: NextPage<{ username: string }> = ({ username }) => {
  const { data } = api.profile.getUserByUsername.useQuery({
    username,
  });

  if (!data) {
    return <div className="flex h-screen justify-center">404</div>;
  }

  return (
    <>
      <Head>
        <title>{data.username}</title>
      </Head>
      <main className="flex h-screen justify-center">
        <div>{data.username}</div>
      </main>
    </>
  );
};

import { createServerSideHelpers } from "@trpc/react-query/server";
import { appRouter } from "~/server/api/root";
import { prisma } from "~/server/db";
import superjson from "superjson";

export const getStaticProps: GetStaticProps = async (context) => {
  const ssg = createServerSideHelpers({
    router: appRouter,
    ctx: { prisma, userId: null },
    transformer: superjson,
  });

  const slug = context.params?.slug;

  if (typeof slug !== "string") {
    throw new Error("no slug");
  }

  const username = slug.replace("@", "");
  await ssg.profile.getUserByUsername.prefetch({ username });

  return {
    props: {
      trpcState: ssg.dehydrate(),
      username,
    },
  };
};

export const getStaticPaths = () => {
  return { paths: [], fallback: "blocking" };
};

export default ProfilePage;

```

**2.20 Layouting**

> All pages should have same layout, so in the components folder let's create a file called: `layout.tsx` and paste there code from `index.tsx`

```
import type { PropsWithChildren } from "react";

export const PageLayout = (props: PropsWithChildren) => {
  return (
    <main className="flex h-screen justify-center">
      <div className="overflow-y-scroll h-full w-full border-x border-slate-400 md:max-w-2xl">
          {props.children}
      </div>
    </main>
  );
};

```

> Then index.tsx will look like this:

```
const Home: NextPage = () => {
  const { user, isLoaded: userLoaded, isSignedIn } = useUser();

  // Start fetching data early - reactQuery will cache it
  api.posts.getAll.useQuery();

  if (!userLoaded) {
    return <div />;
  }

  return (
    <>
      <Head>
        <title>Chirp</title>
        <meta name="description" content="💭" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageLayout>
        <div className="flex border-b border-slate-400 p-4">
          {!isSignedIn && (
            <div className="flex justify-center">
              <SignInButton />
            </div>
          )}
          {!!isSignedIn && (
            <div className="w-full">
              <div className="flex w-full justify-between">
                <div className="flex items-center  space-x-2">
                  <UserBar />
                  <p>Hi {user.fullName}</p>
                </div>
                <SignOutButton />
              </div>
              <CreatePostWizard />
            </div>
          )}
        </div>
        <Feed />
      </PageLayout>
    </>
  );
};
```

> We can then make the profile page also use the same Pagelayout:

```
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { api } from "~/utils/api";

const ProfilePage: NextPage<{ username: string }> = ({ username }) => {
  const { data } = api.profile.getUserByUsername.useQuery({
    username,
  });

  if (!data) {
    return <div className="flex h-screen justify-center">404</div>;
  }

  return (
    <>
      <Head>
        <title>{data.username}</title>
      </Head>
      <PageLayout>
        <div>{data.username}</div>
      </PageLayout>
    </>
  );
};
```

**2.21 Finish profile page**

> Let's add profile picture and style it as on Twitter

> Let's make this pretty:

```
const ProfilePage: NextPage<{ username: string }> = ({ username }) => {
  const { data } = api.profile.getUserByUsername.useQuery({
    username,
  });

  if (!data) {
    return <div className="flex h-screen justify-center">404</div>;
  }

  return (
    <>
      <Head>
        <title>{data.username}</title>
      </Head>
      <PageLayout>
        <div className="relative h-36 bg-slate-600">
          <Image
            src={data.profilePicture}
            alt={`@${data.username ?? ""}'s profile pic`}
            width={128}
            height={128}
            className="absolute bottom-0 left-0 -mb-[64px] ml-4 rounded-full border-4 border-black bg-black"
          />
        </div>
        <div className="h-[64px]" />
        <div className="p-4 text-2xl font-bold">{`@${
          data.username ?? ""
        }`}</div>
        <div className="w-full border-b border-slate-400" />
      </PageLayout>
    </>
  );
};
```

> The whole file looks like this:

```
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { api } from "~/utils/api";
import Image from "next/image";

const ProfilePage: NextPage<{ username: string }> = ({ username }) => {
  const { data } = api.profile.getUserByUsername.useQuery({
    username,
  });

  if (!data) {
    return <div className="flex h-screen justify-center">404</div>;
  }

  return (
    <>
      <Head>
        <title>{data.username}</title>
      </Head>
      <PageLayout>
        <div className="relative h-36 bg-slate-600">
          <Image
            src={data.profilePicture}
            alt={`@${data.username ?? ""}'s profile pic`}
            width={128}
            height={128}
            className="absolute bottom-0 left-0 -mb-[64px] ml-4 rounded-full border-4 border-black bg-black"
          />
        </div>
        <div className="h-[64px]" />
        <div className="p-4 text-2xl font-bold">{`@${
          data.username ?? ""
        }`}</div>
        <div className="w-full border-b border-slate-400" />
      </PageLayout>
    </>
  );
};

import { createServerSideHelpers } from "@trpc/react-query/server";
import { appRouter } from "~/server/api/root";
import { prisma } from "~/server/db";
import superjson from "superjson";
import { PageLayout } from "~/components/layout";

export const getStaticProps: GetStaticProps = async (context) => {
  const ssg = createServerSideHelpers({
    router: appRouter,
    ctx: { prisma, userId: null },
    transformer: superjson,
  });

  const slug = context.params?.slug;

  if (typeof slug !== "string") {
    throw new Error("no slug");
  }

  const username = slug.replace("@", "");
  await ssg.profile.getUserByUsername.prefetch({ username });

  return {
    props: {
      trpcState: ssg.dehydrate(),
      username,
    },
  };
};

export const getStaticPaths = () => {
  return { paths: [], fallback: "blocking" };
};

export default ProfilePage;
```

**2.22 Fetch posts for a given user**

> Now we will want to fetch feeds for a given user/profile

> We will need to create a new router for that. Let's go to: `src/server/api/routers/posts.ts`

```
 getPostsByUserId: publicProcedure
    .input(z.object({ userId: z.string() }))
    .query(({ ctx, input }) =>
      ctx.prisma.post.findMany({
        where: {
          authorId: input.userId,
        },
        take: 100,
        orderBy: [{ createdAt: "desc" }],
      })
    ),
```

> Let's use it then. We will create a new component in components folder. File name will be `postview.tsx` and we will copy there the content of the `PostView` from `index.tsx`

```
import Image from "next/image";

import dayjs from "dayjs";

import type { RouterOutputs } from "~/utils/api";
import relativeTime from "dayjs/plugin/relativeTime";
import Link from "next/link";

dayjs.extend(relativeTime);

type PostWithUser = RouterOutputs["posts"]["getAll"][number];

export const PostView = (props: PostWithUser) => {
  const { post, author } = props;
  return (
    <div
      key={post.id}
      className="flex items-center gap-4 border-b border-slate-400 p-8"
    >
      <Image
        src={author.profilePicture}
        alt="Author image"
        className="h-12 w-12  rounded-full"
        width={56}
        height={56}
      />
      <div className="flex flex-col">
        <div className="flex gap-2 text-slate-400">
          <Link href={`/@${author.username}`}>
            <span>{`@${author.username}`}</span>
          </Link>
          <Link href={`/post/${post.id}`}>
            <span>{`•  ${dayjs(post.createdAt).fromNow()}`}</span>
          </Link>
        </div>
        <div className="flex">{post.content}</div>
      </div>
    </div>
  );
};
```

> We will need to also retrieve information about users in our `posts.tsx`, so we will abstract a function called: `addUserDataToPosts`

```
const addUserDataToPosts = async (posts: Post[]) => {
  const users = (
    await clerkClient.users.getUserList({
      userId: posts.map((post) => post.authorId),
      limit: 100,
    })
  ).map(filterUserForClient);

  return posts.map((post) => {
    const author = users.find((user) => user.id === post.authorId);

    if (!author || !author.username) {
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "Author of the posts not found",
      });
    }

    return { post, author: { ...author, username: author.username } };
  });
};
```

> We will then use it in `getAll` and `getPostsByUserId`

> Whole file looks like this:

```
import clerkClient from "@clerk/clerk-sdk-node";
import { TRPCError } from "@trpc/server";
import { z } from "zod";

import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

import {
  createTRPCRouter,
  privateProcedure,
  publicProcedure,
} from "~/server/api/trpc";
import { filterUserForClient } from "~/server/helpers/filterUserForClient";
import { Post } from "@prisma/client";

const addUserDataToPosts = async (posts: Post[]) => {
  const users = (
    await clerkClient.users.getUserList({
      userId: posts.map((post) => post.authorId),
      limit: 100,
    })
  ).map(filterUserForClient);

  return posts.map((post) => {
    const author = users.find((user) => user.id === post.authorId);

    if (!author || !author.username) {
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "Author of the posts not found",
      });
    }

    return { post, author: { ...author, username: author.username } };
  });
};

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(3, "1 m"),
  analytics: true,
  prefix: "@upstash/ratelimit",
});

export const postsRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    const posts = await ctx.prisma.post.findMany({
      take: 100,
      orderBy: [
        {
          createdAt: "desc",
        },
      ],
      where: { authorId: "user_2OBaeJj8EI29omUN4LZTUFl7TBh" },
    });

    return addUserDataToPosts(posts);
  }),
  getPostsByUserId: publicProcedure
    .input(z.object({ userId: z.string() }))
    .query(({ ctx, input }) =>
      ctx.prisma.post
        .findMany({
          where: {
            authorId: input.userId,
          },
          take: 100,
          orderBy: [{ createdAt: "desc" }],
        })
        .then(addUserDataToPosts)
    ),

  create: privateProcedure
    .input(
      z.object({
        content: z
          .string()
          .emoji({ message: "Contains non-emoji characters" })
          .min(1)
          .max(280),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const authorId = ctx.userId;

      const { success } = await ratelimit.limit(authorId);

      if (!success) {
        throw new TRPCError({ code: "TOO_MANY_REQUESTS" });
      }

      const post = await ctx.prisma.post.create({
        data: {
          authorId,
          content: input.content,
        },
      });
      return post;
    }),
});
```

> Our `[slug].tsx` file will then generate the PostView:

```
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { api } from "~/utils/api";
import Image from "next/image";

import { PostView } from "~/components/postview";

const ProfileFeed = (props: { userId: string }) => {
  const { data, isLoading } = api.posts.getPostsByUserId.useQuery({
    userId: props.userId,
  });
  if (isLoading) {
    return <LoadingPage />;
  }
  if (!data || data.length === 0) {
    return <div>User has not posted</div>;
  }
  return (
    <div className="flex flex-col">
      {data.map((fullPost) => (
        <PostView {...fullPost} key={fullPost.post.id} />
      ))}
    </div>
  );
};

const ProfilePage: NextPage<{ username: string }> = ({ username }) => {
  const { data } = api.profile.getUserByUsername.useQuery({
    username,
  });

  if (!data) {
    return <div className="flex h-screen justify-center">404</div>;
  }

  return (
    <>
      <Head>
        <title>{data.username}</title>
      </Head>
      <PageLayout>
        <div className="relative h-36 bg-slate-600">
          <Image
            src={data.profilePicture}
            alt={`@${data.username ?? ""}'s profile pic`}
            width={128}
            height={128}
            className="absolute bottom-0 left-0 -mb-[64px] ml-4 rounded-full border-4 border-black bg-black"
          />
        </div>
        <div className="h-[64px]" />
        <div className="p-4 text-2xl font-bold">{`@${
          data.username ?? ""
        }`}</div>
        <div className="w-full border-b border-slate-400" />
        <ProfileFeed userId={data.id} />
      </PageLayout>
    </>
  );
};

import { createServerSideHelpers } from "@trpc/react-query/server";
import { appRouter } from "~/server/api/root";
import { prisma } from "~/server/db";
import superjson from "superjson";
import { PageLayout } from "~/components/layout";
import { LoadingPage } from "~/components/loading";

export const getStaticProps: GetStaticProps = async (context) => {
  const ssg = createServerSideHelpers({
    router: appRouter,
    ctx: { prisma, userId: null },
    transformer: superjson,
  });

  const slug = context.params?.slug;

  if (typeof slug !== "string") {
    throw new Error("no slug");
  }

  const username = slug.replace("@", "");
  await ssg.profile.getUserByUsername.prefetch({ username });

  return {
    props: {
      trpcState: ssg.dehydrate(),
      username,
    },
  };
};

export const getStaticPaths = () => {
  return { paths: [], fallback: "blocking" };
};

export default ProfilePage;
```

> The same will also be used in the `index.tsx` in `Feed` component.

```
const Feed = () => {
  const { data, isLoading: pageLoading } = api.posts.getAll.useQuery();

  if (pageLoading) {
    return (
      <div className="flex w-full justify-center p-8">
        <LoadingPage />
      </div>
    );
  }

  if (!data) {
    return (
      <div className="flex w-full justify-center p-8">
        Something went wrong...
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      {data.map((fullProps) => (
        <PostView {...fullProps} key={fullProps.post.id} />
      ))}
    </div>
  );
};
```

**2.23 Adding Post View page**

> First let's abstract the ssg to a separate file. In server/helpers, let's create a file called `ssgHelper.tsx`:

```
import { createServerSideHelpers } from "@trpc/react-query/server";
import { appRouter } from "~/server/api/root";
import { prisma } from "~/server/db";
import superjson from "superjson";

export const generateSSGHelper = () =>
  createServerSideHelpers({
    router: appRouter,
    ctx: { prisma, userId: null },
    transformer: superjson,
  });
```

> And we will use it in `[slug].tsx` just like this: `const ssg = generateSSGHelper();`:

```
export const getStaticProps: GetStaticProps = async (context) => {
  const ssg = generateSSGHelper();

  const slug = context.params?.slug;

  if (typeof slug !== "string") {
    throw new Error("no slug");
  }

  const username = slug.replace("@", "");
  await ssg.profile.getUserByUsername.prefetch({ username });

  return {
    props: {
      trpcState: ssg.dehydrate(),
      username,
    },
  };
};
```

> The whole `[slug].tsx` file looks like this:

```
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { api } from "~/utils/api";
import Image from "next/image";

import { PostView } from "~/components/postview";
import { PageLayout } from "~/components/layout";
import { LoadingPage } from "~/components/loading";
import { generateSSGHelper } from "~/server/helpers/ssgHelper";

const ProfileFeed = (props: { userId: string }) => {
  const { data, isLoading } = api.posts.getPostsByUserId.useQuery({
    userId: props.userId,
  });
  if (isLoading) {
    return <LoadingPage />;
  }
  if (!data || data.length === 0) {
    return <div>User has not posted</div>;
  }
  return (
    <div className="flex flex-col">
      {data.map((fullPost) => (
        <PostView {...fullPost} key={fullPost.post.id} />
      ))}
    </div>
  );
};

const ProfilePage: NextPage<{ username: string }> = ({ username }) => {
  const { data } = api.profile.getUserByUsername.useQuery({
    username,
  });

  if (!data) {
    return <div className="flex h-screen justify-center">404</div>;
  }

  return (
    <>
      <Head>
        <title>{data.username}</title>
      </Head>
      <PageLayout>
        <div className="relative h-36 bg-slate-600">
          <Image
            src={data.profilePicture}
            alt={`@${data.username ?? ""}'s profile pic`}
            width={128}
            height={128}
            className="absolute bottom-0 left-0 -mb-[64px] ml-4 rounded-full border-4 border-black bg-black"
          />
        </div>
        <div className="h-[64px]" />
        <div className="p-4 text-2xl font-bold">{`@${
          data.username ?? ""
        }`}</div>
        <div className="w-full border-b border-slate-400" />
        <ProfileFeed userId={data.id} />
      </PageLayout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const ssg = generateSSGHelper();

  const slug = context.params?.slug;

  if (typeof slug !== "string") {
    throw new Error("no slug");
  }

  const username = slug.replace("@", "");
  await ssg.profile.getUserByUsername.prefetch({ username });

  return {
    props: {
      trpcState: ssg.dehydrate(),
      username,
    },
  };
};

export const getStaticPaths = () => {
  return { paths: [], fallback: "blocking" };
};

export default ProfilePage;
```

> Now let's just copy the content of `[slug].tsx` to `[id].tsx` to make our like easier. Rename `ProfilePage` to `SinglePostPage`:

> Let's add a router for single post by id called: `getById`:

```
getById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      const post = await ctx.prisma.post.findUnique({
        where: { id: input.id },
      });
      if (!post) {
        throw new TRPCError({ code: "NOT_FOUND" });
      }
      return (await addUserDataToPosts([post]))[0];
    }),
```

> And then we can use it in the `[id].tsx`:

```
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { api } from "~/utils/api";

import { PostView } from "~/components/postview";
import { PageLayout } from "~/components/layout";
import { generateSSGHelper } from "~/server/helpers/ssgHelper";

const SinglePostPage: NextPage<{ id: string }> = ({ id }) => {
  const { data } = api.posts.getById.useQuery({
    id,
  });

  if (!data) {
    return <div className="flex h-screen justify-center">404</div>;
  }

  return (
    <>
      <Head>
        <title>{`${data.post.content} - ${data.author.username}`}</title>
      </Head>
      <PageLayout>
        <PostView {...data} />
      </PageLayout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const ssg = generateSSGHelper();

  const id = context.params?.id;

  if (typeof id !== "string") {
    throw new Error("no slug");
  }

  await ssg.posts.getById.prefetch({ id });

  return {
    props: {
      trpcState: ssg.dehydrate(),
      id,
    },
  };
};

export const getStaticPaths = () => {
  return { paths: [], fallback: "blocking" };
};

export default SinglePostPage;
```

> This creates the page for individual post, yay!

**2.24 How to cut the build time on Vercel to halftime - Github CI**

> You should not be checking your types in lint on Vercel builds. There is not reason to because Github CI is free and it is right there. how to use it?

> On Github our code lives and our code validation should happen there.

> The thing that builds and deploys it should be separate. (Vercel)

> Deploying should not be blocked by typecript passes.

> Github's role is to make sure code is correct

> Vercel's role is to deploy the code we give it

> We will use ChatGPT to write yml files for us :P

> Give it this question: `Write me a minimal github ci .yml workflow file that installs node modules, runs typescript typechecking, and also runs lint. This repo uses npm`

> Out put will be:

```
name: CI

on: [push, pull_request]

env:
  DATABASE_URL: "https://fake.com"

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v2

      - name: Install dependencies
        run: npm install

      - name: Run type checking
        run: npm run type-check

      - name: Run linting
        run: npm run lint

```

> We will create a `ci.yml` file in this path: `.github/workflows/`

> Paste that content there.

> Please note we added `env: DATABASE_URL: "https://fake.com"`

> We also need to add `type-check` command to `package.json`

```
"scripts": {
    "build": "next build",
...
    "typecheck": "tsc --noEmit"
  },
```

> Let's now try to commit it and push

> Now go to github and check it out

![](https://i.imgur.com/nyMpL9z.png "Photo by Addania")<p style="font-size: 12px; text-align: right">_Photo by Addania_</p>

> This then means we dont need to run type checking on Vercel, so let's disable it:

> Go to file: n`ext.config-mjs` and paste there following:

```
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  swcMinify: true
```

> Whole file will look like this:

```
!process.env.SKIP_ENV_VALIDATION && (await import("./src/env.mjs"));

const config = {
  reactStrictMode: true,
  images: {
    domains: ["images.clerk.dev"],
  },

  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },

  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  swcMinify: true,
};
export default config;

```

> swcMinifiy will run instead of babel and will speed things up.

**2.25 Real domain**

> Vercel has the option to buy domains when you go to Domains tab

> And it is super easy to add a e-mail server to the domain only with one click on Vercel

> If we have a domain, how do we add it to our project?

> Go to Verce -> Settings -> Domains

> Type in there the domain and click Add.

> If we want to have a subdomain of a domain like `addania.com`, we just pre-fix our domain with something: `chirp.addania.com`

> There you can also add a re-direct.
