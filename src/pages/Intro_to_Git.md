---
title: "Intro to Git"
date: "2019-09-25"
---

Git is a file versioning system. 


First things first - some Git definitions:

**LOCAL**

>When we talk about LOCAL we mean anything that is stored locally on your computer harddrive

**REMOTE**

>When we talk about REMOTE we mean anything that is stored and backed-up centrally on some 3rd party service, such as GitHub. Your REMOTE service will be accessible online at any time from any location by anyone who has access to it, meaning you or your colleague who is working on your project together with you.

General Git workflow:

First we need to link our LOCAL and REMOTE repositories using SSH Key.
First we need to generate our LOCAL SSH key which we then paste to REMORE GitHub.


Imagine I work on my project addania.com which is my personal website. I created my project locally on my PC. In order to connect it to Git I first need to create a sub-folder called git with includes initial git setup.
Some softwares like Gatsby create this folder automatically. I can add this folder manually using Ubuntu terminal and providing git init command which will create a subfolder git in my current project folder.
Then I work on my project files and make changes to my website. Firstly I need to add those files manually to the git folder LOCALLY on my PC. Git is not tracking live all the changes done in project. I need to tell to
Git that now is the time when I want to log the changes I made so far. Therefore all my LOCAL files need to be added to LOCAL git repository ( we are not talking about Github yet). In order to to this LOCAL workflow:
```
git add .
git commit -m "message goes here"
```
When our LOCAL Git has logged our LOCAL changes we are ready to update our REMOTE repository, such as Github or Gitlab.

Then we need to add our LOCAL git to REMOTE Github. Go to yout Github Repository and at the top of your GitHub repository's Quick Setup page, click  to copy the remote repository URL.
Afterwards we go to Ubuntu command and use following command, where remote repository URL is the URL we copied from Github and origin is the name of our remote repository (origin is just a convention): <code>git remote add origin remote repository URL</code>

For example:
```
git remote add origin git@github.com:addania/addania.com.git 
```
To verify if our new remote was added we can check the git remote -v command. 
Then we are ready to puch our LOCAL git repository to the REMOTE Github repository:
```
git push origin master
```

> In order to install git we need to have apt-get updated. To update apt-get
```
sudo apt-get update
```
> To install Git
```
sudo apt-get install git
```
> To check version of Git
```
git --version
```
> To set up username and email
```
git config --global user.name "addania"
git config --global user.email "mirka.schw@gmail.com"
```

>Tto check status of my git in a project (if they are up-to-date with master branch or if I have any staging commits), first navigate to project folder by cd addania.com then executing:
```
git status
```
> To see history of commits
```
git log
```
> The git init command creates a new Git repository. Executing git init creates a .git subdirectory in the current working directory, which contains all of the necessary Git metadata for the new repository. To create git folder in your project folder:
```
git init
```
> In order to commit anything, we first need to add files to staging area by using following command (dot means all files):
```
git add . 
```
> To commit files to LOCAL git repository use got commit comand. Please note that only previously staged files can be committed. Git commit will open a dialog where we need to type descriptive message for the commit. add the message, press escape and type in Y:
```
git commit
```
> To commit files to LOCAL git repository with a message already included in the command:
```
git commit -m "message goes here"
```
> To see all REMOTE git repositories (if nothing happens means I dont have one and we need to create it):
```
git remote -v
```
> To add a new REMOTE repository, where origin is just a random name of our new REMOTE repository and git@github.com:addania/addania.com.git is a URL from Github repository
```
git remote add origin git@github.com:addania/addania.com.git
```

> To rename origin with new url if I need to change my repository name:
```
git remote set-url origin git@github.com:addania/addania.github.io.git
```

> To check how many branches I have in my repository, if there is only one, the main one will be called usually master:
```
git branch
```
> To push files from LOCAL git to REMOTE git on github, where origin is name of REMOTE repository and master is name of the btanch in the project, main branch is called master:
```
git push origin master
```
> If I dont want to write always git push origin master -force I can create upstream and link local to remote git by -u. After this command then I can use only git push to upload files
```
git push -u origin master -f
```
> To overwrite anything on the REMOTE repository in master branch we can force push:
```
git push origin master --force 
```
> Pulling down files from remote git to local git, where origin is name of my remote git and master is name of branch:
```
git pull origin master
```