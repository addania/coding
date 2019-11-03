---
title: "Intro to Ubuntu, Gatsby, NodeJS"
date: "2019-09-29"
---
**Ubuntu:**

General:

It is possible to have Ubuntu on Windows through feature called Windows Subsystem for Linux. Installation will result in having a completely new operational (sub)system (along side with Windows). When using this Windows Subsystem for Ubuntu, it only allows for command line, it doesnt have any user interface. Only interaction with the operational system is via command line (terminal). This system will be then used with Gatsby to create webpages and push my code to Github. Please note, upon first installation of Ubuntu subsystem, it is a completely blank software. It wont have access to my previously installed programms on Windows (like node.js, etc). Therefore we will need to install everything again.

Ubuntu directory on PC:

\\wsl$\Ubuntu-18.04\home\addania

Controls:

Copy/Paste works differently in Ubuntu: ctrl+shift+c for copy, crtl+shift+v for paste
Some commands will start with sudo which means to run as administrator
j and k keys allows navigate up and down
h and l allow to navigate left and right

Commands:

> to show which directory I am currently in we use command pwd (print working directory)

pwd

> to display list of all files in a current directory

ls

> to display list of all files in a current directory including hidden files (those with ., ex: .git)

ls -a

> change directory cd + name of the directory (ex: cd src will go to folder called src in your currnet folder), this is to go one directory down the tree

cd src

> to go one directory up the tree

cd ..

> to create a folder

mkdir

> to create a new file called global.css

touch global.css

___
**Homebrew:**

> see current version of homebrew

brew -v

> update brew

brew update

> installing software hello

brew install hello

> install node

brew install node

> checking version of node

node --version

___
**Git:**

Git is a file versioning system. 


Some Git definitions first:

LOCAL
When we talk about LOCAL we mean anything that is stored locally on your computer harddrive

REMOTE
When we talk about REMOTE we mean anything that is stored and backed-up centrally on some 3rd party service, such as GitHub. Your REMOTE service will be accessible online at any time from any location by anyone who has access to it, meaning you or your colleague who is working on your project together with you.

General Git workflow:
First we need to link our LOCAL and REMOTE repositories using SSH Key.
First we need to generate our LOCAL SSH key which we then paste to REMORE GitHub.


Imagine I work on my project addania.com which is my personal website. I created my project locally on my PC. In order to connect it to Git I first need to create a sub-folder called git with includes initial git setup.
Some softwares like Gatsby create this folder automatically. I can add this folder manually using Ubuntu terminal and providing git init command which will create a subfolder git in my current project folder.
Then I work on my project files and make changes to my website. Firstly I need to add those files manually to the git folder LOCALLY on my PC. Git is not tracking live all the changes done in project. I need to tell to
Git that now is the time when I want to log the changes I made so far. Therefore all my LOCAL files need to be added to LOCAL git repository ( we are not talking about Github yet). In order to to this LOCAL workflow:
git add .
git commit -m "message goes here"

When our LOCAL Git has logged our LOCAL changes we are ready to update our REMOTE repository, such as Github or Gitlab.

Then we need to add our LOCAL git to REMOTE Github. Go to yout Github Repository and at the top of your GitHub repository's Quick Setup page, click  to copy the remote repository URL.
Afterwards we go to Ubuntu command and use following command, where remote repository URL is the URL we copied from Github and origin is the name of our remote repository (origin is just a convention):
git remote add origin remote repository URL
for example:
git remote add origin git@github.com:addania/addania.com.git 

To verify if our new remote was added we can check the git remote -v command. 
Then we are ready to puch our LOCAL git repository to the REMOTE Github repository:
git push origin master

> In order to install git we need to have apt-get updated. To update apt-get

sudo apt-get update

> to install Git

sudo apt-get install git

> to check version of Git

git --version

> to set up username and email

git config --global user.name "addania"

git config --global user.email "mirka.schw@gmail.com"

> to check status of my git in a project (if they are up-to-date with master branch or if I have any staging commits), first navigate to project folder by cd addania.com then executing:

git status

> to see history of commits

git log

> The git init command creates a new Git repository. Executing git init creates a .git subdirectory in the current working directory, which contains all of the necessary Git metadata for the new repository. To create git folder in your project folder:

<code> git init </code>

> in order to commit anything, we first need to add files to staging area by using following command (dot means all files):

git add . 

> to commit files to LOCAL git repository use got commit comand. Please note that only previously staged files can be committed. git commit will open a dialog where we need to type descriptive message for the commit. add the message, press escape and type in Y:

git commit

> to commit files to LOCAL git repository with a message already included in the command:

git commit -m "message goes here"

> to see all REMOTE git repositories (if nothing happens means I dont have one and we need to create it):

git remote -v

> to add a new REMOTE repository, where origin is just a random name of our new REMOTE repository and git@github.com:addania/addania.com.git is a URL from Github repository

git remote add origin git@github.com:addania/addania.com.git

git remote add origin git@github.com:addania/knowledgeBase.git  

> to rename origin with new url if I need to change my repository name:

git remote set-url origin git@github.com:addania/addania.github.io.git

git remote set-url origin git@github.com:addania/addania.com.git

> to check how many branches I have in my repository, if there is only one, the main one will be called usually master:

git branch

> to push files from LOCAL git to REMOTE git on github, where origin is name of REMOTE repository and master is name of the banch in the project, main branch is called master:

git push origin master

> If I dont want to write always git push origin master -force I can create upstream and link local to remote git by -u. After this command then I can use only git push to upload files

git push -u origin master -f

> to overwrite anything on the REMOTE repository in master branch we can force push:

git push origin master --force 

> pulling down files from remote git to local git, where origin is name of my remote git and master is name of branch:

git pull origin master

___

**Gatsby:**

Software to help create static website using react. They provide starter templates, ability to create multiple pages in their pages folder or generating ReactDOM automatically

> to install Gatsby

> to display basic commands in gatsby

gatsby --help

> to create a new Gatsby project, addania.com is a name of new project, gatsby-starter-hello-world is a starter template downloaded from Gatsby website which will setup all initial files to start web development with (similar to creating new react app)

gatsby new addania.com https://github.com/gatsbyjs/gatsby-starter-hello-world

> to start Gatsby react development environment for my new projct I need to navigate to the folder of my project with cd addania.com and then executing gatsby develop

gatsby develop

___

**Github Pages:**

Deploying Website to Github Pages:
https://www.gatsbyjs.org/docs/how-gatsby-works-with-github-pages/

> installing github pages to gatsby

npm install gh-pages --save-dev

> builds website to github page, for example: https://addania.github.io/

npm run deploy

___

**React:**

React is a library/framework of Javascript developed by Facebook. Reach allows to build interactive websites using components and allowing having html css and Javascript in one file. 
React is a closed environmnet and can be run in browser, on your local machine (my pc) or on phones (such as Android, etc).

When I am developing a website in React I need to be able to see what I am building. I can do these:

- A: doubleclick on my html file (index.html) and open it in browser. However, it wont really work. Other pages will not load, because I am only openineg filepath in browser.

- B: run a web server locally on my machine (pc)

In order to run a web server on my machine, I need to install node.js

In order to be able to use React in a BROWSER I need package called reactDOM package if I want to display it in browser. If I dont want to install reactDOM package, I can still use script tags in my html file, like so:

<script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>

<script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>

More on this in official documentation here:https://reactjs.org/docs/add-react-to-a-website.html

These script tags in html are equivalent to a file in my project called package.json which is automatically provided by Gatsby:

"dependencies": {
    "gatsby": "^2.15.28",
    "react": "^16.10.0",
    "react-dom": "^16.10.0"
},

___

**Node.js**

Advantages of Node.js

1) Creates Runtime Environments (local webserver)
Node.js is a JavaScript runtime environment. It allows JavaScript to run outside of a BROWSER, for example I could run it on my local machine as a standalone application (localhost:8000) and play around with my page. Gatsby uses node.js to create the local host. Also create-react-app uses node.js to create the runtime environment.

2) Enables to install cool packages(=libraries=modules)
Node.js comes automatically with npm (node package manager), no need to install it extra! Package manager is included in every programming language. Package manager is a collection of software tools that automates the process of installing, upgrading, configuring, and removing computer programs. In NPM the package manager manages all the cool packages I might actually need. npm I can only install packages which run in browser. Example of packages: 

react - allows access to all react modules/features like React.Component

reactDOM - allows to generate react in the browser (unless I want to use script tags in html), for example: ReactDOM.render()

create-react-app - enables to setup initial react files and create a runtime environment on local machine as localhost:8000. It ALSO automatically includes react and reactDOM packages

gatsby - allows to build websites with multiple pages easier. It ALSO automatically includes react and reactDOM packages

Each package needs to be installed by npm individually.

2 ways how to download a package/any other software:

A) go to webside -> click download -> run installer and install the software

or

B) use package managers - package manager MUST be run in command line

Commands:

> to install your favourite package

npm install react

npm install reactDOM

npm install create-react-app

npm install gatsby

> In order to see which packages=libraries=modules my project is using I search for file called package.json. In the file there wil be an object called dependencies 

  "dependencies": {
    "gatsby": "^2.15.28",
    "react": "^16.10.0",
    "react-dom": "^16.10.0"
  },


> to read a manual npm

man npm

> to read the help of npm

npm help
____________________________________
**Surge:**

Surge is for publishing my website live

