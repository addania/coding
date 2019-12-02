---
title: "NVM"
date: "2019-11-30"
---
Node version manager

This software allows us to switch between different versions of the node. Why to want to switch? Because some capabilities are not supported in certain versions of node. For example, you have a project which has some dependencies on different packages. If you want to <code>npm install</code> them, then you get errors. One of the reasons can be that you are using latest (not yet stable) version of node.

Node in general is installed globally for all projects. To be able to change versions we need to de/install it and only use NVM from now on to switch between versions. Each project can have different node version then. Is used a lot in professional dev life.

> Paste this to command line (it will be installed globally, no matter in which folder I currently am):
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.1/install.sh | bash 
```

> Restart the terminal

> Write this so that nvm uses previous (already installed) SYSTEM version of NODE:
```
nvm use system
```

>If I want to see all shortcuts for nvm
```
nvm
```

> If I want to see current version
```
nvm current
```

> To install a specific version of the node GLOBALLY to be able to use it later on in the project:
```
nvm install 10.0.0
```

> Then we will need to add the different version of node to a specific project. 

> Go to project directory

> In the root location of the project (where package.json is) create a new file with touch command. File will be calle <code>.nvmrc</code>:
```
touch .nvmrc
```

> Then you open that file and paste umber of version in it
```
10.0
```

Alternatively you can combine the above two command in one:
```
echo "10.0" > .nvmrc
```
