---
title: "Npm"
date: "2019-11-26"
---

<code>npm start</code> will look into package.json in the script section under command <code>start</code>. It will execute whatever is in there. For applications created by create-react-app, there will be:
```
"start": "react-scripts start",
```

><code>react-scripts start</code> will start local host environment under port number: 3000

> If I have gatsby project, I can also write
```
npm start
```

> <code>npm run develop</code> will also execute whatever is in package.json, in scripts under <code>start</code>
```
"npm run develop",
```

> This is then equivalent to
```
gatsby develop
```

> When I have command:
```
npm run develop
```

> <code>npm run</code> means it will look into package.json under scripts and select script called
```
"develop"
```

> Then under develop we have:
```
"develop": "gatsby develop",
```

> <code>"gatsby develop"</code> is the FINAL thing FINALLY
```
phew
```

> I should always use 
```
npm run ....
```

> For example:
```
npm run start
```

or
```
npm run develop
```

or 
```
npm run test
```

> But because start and test are such used and common, you can skip word <code>run</code> they can be abbreviated to
```
npm start
```

or
```
npm test
```

> However, you CANNOT abbreviate npm develop, it needs to include run
```
npm run develop
```
