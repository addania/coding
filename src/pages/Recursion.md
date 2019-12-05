---
title: "Recursion"
date: "2019-11-27"
---


Recusion is a function that calls itself.

Example usage of recursive functions to calculate factorial. Let's say we want to calculate factorial of number <code>n</code>. If <code>n=3</code>, then factorial of <code>n</code> is <code>```3*2*1```=6</code>
```
function factorial(n){
  if (n==1){
    return 1
  }
  if (n>1){
    return n*factorial(n-1);
  }
}

let number=factorial(3);
// result: 3*2*1=6
```

Example usage of recursive functions to calculate number to certain power. Imagine we want to calculate <code>3</code> to the power of <code>2</code>. We would need to multiply <code>```3*3=9```</code>. Let's define that <code>x</code> is our number and <code>n</code> is the power.
```
function power(x, n){
  if (n==1){
    return x
  }else {
    return x* power(x, n-1);
  }
}

power(2,3);
// returns 8

power(3,2);
// returns 9
```

Example usage of recursive functions to calculate salaries in a company in different departments or sub-departments. Imagine we have an object like this:
```
let company={ 
  sales: [{name: "Mia", plat: 1000},{name: "Sam", plat: 1500}], 
  development: {
    onsite: [{name: "Peter", plat: 500}, {name: "Edita", plat: 1200} ],
    remote: [{name: "Lubo", plat: 3000}, {name: "Peta", plat: 800} ]

    }
}
```

Example usage to sum the the numbers <code>1+2+3+...+ n</code>
```
function sumTo(n){
  if (n==1){
   return n
  } else {
  return n+ sumTo(n-1);
  }

}

let result=sumTo(3);
// result is: 6
```

Then we can use a recursive function to calculate the sum of salaries:
```
function salarySum(department){
  if (Array.isArray(department)){

    return department.reduce( (prev, current) => 
    prev + current, 0 )
  } else {
    let sum =0;
    for (let subdep of Object.values(department)){
     sum= sum + salarySum(subdep);
    }
    return sum,
  }

}
```

Lets call the function and see the result:
```
let result= salarySum(company);
// result is: 8000
```