---
title: "Concurrency"
date: "2020-04-11"
---

![](https://i.imgur.com/xdi5UzW.png "Photo by Pixabay from Pexels")

JavaScript Concurrency: Promise then
This course covers concurrency, which means "two or more events happening at the same time." We'll explore a few concurrency models, focusing on those that are used in JavaScript. No experience with concurrency is necessary, but you should know these parts of JavaScript:

null and undefined.
Variable definitions with var, let, and const.
Conditionals (if) and ternary conditionals (a ? y : b).
C-style for loops: for (let i=0; i<10; i++) { ... }.
Regular functions: function f() { ... }.
Arrow functions: const f = () => { ... }.
Passing functions as arguments to other functions ("callback functions").
This course is about JavaScript, but we'll start with some Python code as a contrast to JavaScript. The Python example below shows that network code in Python doesn't look special: it looks like a normal series of function calls. The example reads executeprogram.com using the Requests HTTP library, then prints the first line of text.

(Unlike most code in Execute Program, this example isn't actually executed because it's written in Python, not JavaScript. We'll tell you in the rare cases where code examples aren't executed.)

> 
import requests
r = requests.get('https://www.executeprogram.com')
r.text.split("\n")[0]
'<!doctype html>' 
Each line above waits for the previous line to finish. Python calls requests.get after the "requests" library has been imported, and r.text is only accessed after requests.get has finished getting the data from the server. The usual term for this is "blocking IO": the requests.get function call stops the code's execution until all of the data is retrieved from the server.

With a few exceptions, JavaScript doesn't support blocking IO, so we can't write code that looks simple like the Python code above. Instead, JavaScript provides different, more complex ways to access networks, disks, and other external systems.

(There are some exceptions where JavaScript code does block. Node is a server-side JavaScript runtime, but it provides optional blocking versions of some of its APIs. And browsers' old XMLHttpRequest API can block, though that behavior is now deprecated. But these are unusual exceptions.)

If JavaScript code doesn't block, how do we wait for network requests? Modern JavaScript code often solves this problem with promises, which were designed for exactly this purpose.

To approach promises, we'll temporarily forget about networks and examine some very normal-looking JavaScript code:

> 
let value = 5
value = value * 2
value = value * 3
value = value + 1
value
31 
We can rewrite those assignments as small functions. If we immediately call each function, they'll have the same effect as the assignments above.

> 
let value = 5
value = (n => n * 2)(value)
value = (n => n * 3)(value)
value = (n => n + 1)(value)
value
31 
This is a weird way to write a normal series of data transformations. However, it's also how promises work!

With promises, we write each step as a small (or occasionally large) function. Instead of repeatedly calling the functions ourselves, the promises call them for us. Here's the same example written using promises, followed by an explanation. Make sure to note that each of the small functions here is identical to its equivalent above.

> 
Promise.resolve(5)
  .then(n => n * 2)
  .then(n => n * 3)
  .then(n => n + 1)
31 
The Promise.resolve(5) call creates a promise holding the value 5. We call its then method, providing a small callback function, n => n * 2. The callback receives the previous promise's value, 5, as an argument. It returns a new value, 10. That value is wrapped up in a new promise, which allows us to chain the next then call.

The initial Promise.resolve call returns a promise, and each of the then calls also returns a promise. There are a total of four promises constructed in that example. Each has a then method.

The example's final result is a promise containing the value 31, equivalent to what we'd get by calling Promise.resolve(31). When a code example results in a promise, Execute Program will automatically unwrap it for us. That's why the example above showed a result of 31, rather than showing the complex implementation details of the promise itself.

(Execute Program does that by attaching its own then callback to the promise. That callback receives 31 as its argument. Once Execute Program has that value, it can show it as the result of the code example.)

There's nothing special about the number of thens that we've attached; we can chain as few or as many as we like.

> 
Promise.resolve(5)
  .then(n => n * 2)
  .then(n => n * 3)
  .then(n => n + 1)
  .then(n => n + 200)
231 
There's also nothing special about numbers; a promise can contain any JavaScript value.

> 
Promise.resolve(5)
  .then(n => n * 2)
  .then(n => n.toString())
'10' 
Our then callbacks can return nothing at all, in which case they'll implicitly return undefined.

> 
Promise.resolve(5)
  .then(n => {
    /* Do nothing. */
  })
undefined 
Promise.resolve works in the same way: if we omit its argument, the promise will contain undefined.

> 
Promise.resolve()
undefined 
Here's a code problem for you to complete:

Add another then call to wrap the promise's string value in an array.

> 
Promise.resolve(5)
  .then(n => n * 2)
  .then(n => n.toString())
  .then(n=> [n])

GOAL:	
['10']
YOURS:	
['10'] 
If these examples feel contrived, it's because they are! Each would be simpler if we used regular variable assignment instead of promises. However, they've shown us the basic structure of promises: we build a series of callbacks by repeatedly calling then, and each callback sees the previous callback's result.

In the next lesson, we'll see how promises interact with time. The simple value = (n => n * 2)(value) calls that we started with happened immediately. But promises don't call their then callbacks immediately. Instead, promises schedule code to run in the future, which we can never do with regular variable assignment!

JavaScript Concurrency: Promises are asynchronous
Here's a promise that creates an array, pushes a value into it, and returns it. At the end of the example, Execute Program automatically unwraps the promise to find what's inside: the array returned by the callback.

> 
Promise.resolve(5).then(n => {
  const array = []
  array.push(n)
  return array
})
[5] 
The next example looks similar to the one above, but with a small tweak. We create the array outside the promise, then the promise pushes the value into it, then we return the array at the end.

It does something different! The example below gives [].

> 
const array = []

Promise.resolve(5).then(n => {
  array.push(n)
})

array
[] 
This is our first suggestion that promises are about time. Here's the hidden effect of promises:

When we attach a then callback, we're asking the browser's JavaScript runtime to run that callback at some time in the future.

In the example above, that time never came! We created a promise that said "please call this callback later", then we immediately returned a value without waiting for the callback.

(In most situations, the promise's code would eventually run, pushing the 5 onto the array. But Execute Program only shows the result of the code example at the moment when the code finished. Execute Program will only wait for promises when they're directly returned by the last line in the example.)

To get the array out, we need to ensure that the example returns a promise.

In this example, remember that the last then in a chain "wins": it determines what value the final promise contains. This example's return value is the final promise: the one containing the array. Execute Program automatically unpacks the promise, so the array is the final result of the example.

> 
const array = []

Promise.resolve(5).then(n => {
  array.push(n)
}).then(() => {
  return array
})
[5] 
We can instrument our code to see the exact order of operations in our code. (The verb "instrument" means "attach measurement instruments to". It's a great way to learn how unfamiliar systems work!)

In the next example, we store promises in variables, creating new promises by calling the previous ones' then methods. We push strings onto the array at various times. By looking at the order of the strings in the array, we can see which code ran when.

The "before" and "after" values are pushed first. Then the two thens run in order.

> 
const array = []
array.push('before')

const promise1 = Promise.resolve()
const promise2 = promise1.then(() => {
  array.push('then1')
})
const promise3 = promise2.then(() => {
  array.push('then2')
  return array
})

array.push('after')
promise3
['before', 'after', 'then1', 'then2'] 
Let's break that down. First, the example code runs from top to bottom.

The first promise is created. Promise.resolve doesn't schedule anything, so nothing else happens.
The second promise is created by calling promise1.then. The browser schedules that callback to run at some time in the future. When it runs, it will add "then1" to the array.
The third promise is created by calling promise2.then. The browser schedules that callback as well. It will eventually add "then2" to the array.
None of our then callbacks are called yet; they've only been scheduled to run in the future. That's why 'before' and 'after' show up first in the array, before 'then2' or 'then2'.

Execute Program sees that the example returned a promise, promise3. It attaches yet another then handler to the promise, then stops executing. (It can't do anything else until it finds out what's inside that promise!)

promise1 was never pending because Promise.resolve never schedules code to run in the future. The other two promises, both created with then, are still pending. Execute Program's promise is also pending.

Now the JavaScript runtime begins resolving the promises, one by one:

The first pending callback is promise2's. It pushes 'then1' onto the array and returns undefined.
The next pending callback is promise3's. This callback pushes 'then2' onto the array, then returns the array.
The next pending callback is Execute Program's. You can't see the code for this one because it's inside Execute Program itself. It was created by calling then on promise3, so its callback gets array as an argument. The code in that callback renders the example's result to the browser's DOM, which is how you can see it above.
Here's a code problem for you to complete:

Modify this code to ensure that 'after' is only pushed into the array after 'then' is pushed. You can do that by putting the final array.push call in a promise chained with then: promise2.then(...). Make sure that your new then callback returns the array so our test code can compare it against the expected value.

> 
const array = []
array.push('before')

const promise1 = Promise.resolve(5)
const promise2 = promise1.then(() => {
  array.push('then')
})
const promise3=promise2.then(()=>{
  array.push('after')
  return array
})

promise3
GOAL:	
['before', 'then', 'after']
YOURS:	
['before', 'then', 'after'] 
Promises are a subtle and tricky topic, so there are a lot of details and implications to explore beyond this point. But we've now seen the core idea: promises schedule code to run later, and we can add callback functions that will run after a promise completes.

Reference:

https://docs.npmjs.com/about-semantic-versioning  


JavaScript Concurrency: Review
It's time to review! These examples are all taken from lessons that you've finished. Revisiting them makes sure that you haven't forgotten anything.

Type in what each expression will evaluate to. For example, for the prompt 1 + 1, you would type 2.

In this course, some code examples will intentionally cause errors. You can type error if the code will result in an error.

Here's a code problem for you to complete:

Add another then call to wrap the promise's string value in an array.

> 
Promise.resolve(5)
  .then(n => n * 2)
  .then(n => n.toString())
.then(n => [n])

GOAL:	
['10']
YOURS:	
['10'] 
> 
Promise.resolve(5)
  .then(n => n * 2)
  .then(n => n.toString())
'10' 
> 
const array = []

Promise.resolve(5).then(n => {
  array.push(n)
})

array
[] 
> 
const array = []
array.push('before')

const promise1 = Promise.resolve()
const promise2 = promise1.then(() => {
  array.push('then1')
})
const promise3 = promise2.then(() => {
  array.push('then2')
  return array
})

array.push('after')
promise3
['before', 'after', 'then1', 'then2'] 
Here's a code problem for you to complete:

Modify this code to ensure that 'after' is only pushed into the array after 'then' is pushed. You can do that by putting the final array.push call in a promise chained with then: promise2.then(...). Make sure that your new then callback returns the array so our test code can compare it against the expected value.

> 
const array = []
array.push('before')

const promise1 = Promise.resolve(5)
const promise2 = promise1.then(() => {
  array.push('then')
})
const promise3= promise2.then(()=>{array.push('after') 
                                   return array})

promise3


GOAL:	
['before', 'then', 'after']
YOURS:	
['before', 'then', 'after'] 
JavaScript Concurrency: Promise constructor
So far, we've only created initial promises with Promise.resolve. Then we've attached thens to the promises.

> 
Promise.resolve(5).then(n => n + 1)
6 
We can simplify that by using the new Promise constructor instead.

The constructor takes a callback as an argument, but it's different from the then callbacks that we've seen. A then callback gets the promise's value as its argument. When doing new Promise, there is no existing value.

Instead, our callback will get another function as an argument: resolve. Calling resolve with a value will put a value inside the promise, "fulfilling" it.

> 
new Promise(resolve => resolve(5))
5 
Once we have a promise, we can always call then on it.

> 
new Promise(resolve => resolve(5)).then(n => n * 2)
10 
You might wonder: when we do new Promise(...), passing a callback to the constructor, is our callback called immediately? Or is it scheduled for execution later, like then callbacks are? We can find out by instrumenting the promise using our array push trick.

If the callback is called immediately, we should see a result of ['before', 'resolving', 'after']. If the callback is scheduled, we should see ['before', 'after', 'resolving']. Take a guess at which one it is.

> 
const array = []
array.push('before')

new Promise(resolve => {
  array.push('resolving')
  resolve()
})

array.push('after')
Promise.resolve(array)
['before', 'resolving', 'after'] 
The constructor's callback is called synchronously! Just to be very sure, we can double-check that by doing a different kind of test: don't return a promise from our example. Then there's nothing for Execute Program to wait for, so no scheduled code will run.

Our constructor callback will still run because it's not scheduled. It's called immediately, synchronously, before the constructor completes.

(The next example is the same as the one above, except that it returns the array directly rather than wrapping it in a promise.)

> 
const array = []
array.push('before')

new Promise(resolve => {
  array.push('resolving')
  resolve()
})

array.push('after')
array
['before', 'resolving', 'after'] 
The promise constructor can only take a callback function. We can't pass a value to wrap, like new Promise(5); that will cause an error. To directly wrap a value, we can use the familiar Promise.resolve(5) instead.

(You can type error when a code example will throw an error.)

> 
new Promise(5)
TypeError: Promise resolver 5 is not a function 
Here's a code problem for you to complete:

Build a new promise with new Promise, putting the value 'it worked' inside it. We've included some code that adds a then to convert the string into upper case.

> 
new Promise(resolve => resolve('it worked'))

.then(string => string.toUpperCase())
GOAL:	
'IT WORKED'
YOURS:	
'IT WORKED' 
JavaScript Concurrency: Leaked promises still run
There are many ways to implement promises and other similar features. One implementation decision is: if we create a promise but never use its result, does its code run or not? We can find out by adding instrumentation.

> 
const array = []
array.push('before')

Promise.resolve().then(() => {
  array.push('then')
})

array
['before'] 
It seems like the answer is no: a then isn't called unless we try to use the promise's value. However, that's not true!

The example above returned an array, which isn't a promise, so Execute Program didn't wait for anything. The promise's code was scheduled, but it didn't get a chance to run. We can let the promise run by creating a second promise and returning it, which will make Execute Program wait.

In the next example, note that the second promise doesn't reference the first promise in any way. The first promise is "leaked": we didn't attach a then to it, and we didn't return it or store it anywhere. However, it still runs and modifies the array!

> 
const array = []
array.push('before')

Promise.resolve().then(() => {
  array.push('then')
})

array.push('after')
Promise.resolve().then(() => array)
['before', 'after', 'then'] 
Here's what happened when that code executed:

We push 'before'.
A promise is created with a callback that will push 'then'. The callback doesn't run yet.
Another promise is created with a callback that returns the array. This callback also doesn't run yet.
Execute Program sees that the example returned a promise, so it attaches another then callback that will render the example's results.
No promise callbacks have been called at this point. However, all of them are in a list managed by the JavaScript runtime, waiting to run. The callbacks are stored in the order that they were created: the array.push('then') callback is first, followed by the array callback, followed by Execute Program's "render the finished example" callback.

The JavaScript runtime begins executing those scheduled callbacks in order. The first callback pushes 'then' onto the array, the second callback returns the array, and the third callback (Execute Program's) renders the array as you see it above.

How does the runtime know that it should start calling the scheduled callbacks rather than doing some other kind of work? That's the secret of JavaScript: there is no other kind of work; everything is done by calling scheduled callbacks! At every point, the runtime chooses the next callback in its internal list and calls it.

(As you can probably guess, there are some other subtleties in a system as complex as a web browser. For example, the browser also maintains lists of other kinds of events, like mouse and keyboard events from the user. However, thinking about browsers as always blindly calling the next callback will get you pretty far!)

Let's stress test this a bit. If we create several promises, leaking all of them, will they all run in order?

Here's a code problem for you to complete:

Before modifying this code, try running it to see what it does. The array is empty, which means that none of the promises' callbacks was called.

Wrap the final array in a promise by using Promise.resolve(array). The other five promises are still leaked, but they're also put into the JavaScript runtime's list before your new promise. That means that they'll run before your promise, so each of them will do their push call.

> 
const array = []
for (const i of [1, 2, 3, 4, 5]) {
  Promise.resolve().then(() => array.push(i))
}
Promise.resolve(array)

GOAL:	
[1, 2, 3, 4, 5]
YOURS:	
[1, 2, 3, 4, 5] 
In production systems, it's usually dangerous to leak promises. When we leak a promise, we lose the ability to wait for it, so we're giving up the ability to sequence other actions after it!