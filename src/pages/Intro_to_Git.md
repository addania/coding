---
title: "Intro to Git"
date: "2019-09-25"
---

![](https://i.imgur.com/ZVeInG0.png "Git Logo")

**GETTING STARTED**

Git is a file versioning system (or in other words version control system).

> In order to install Git we need to have apt-get updated. To update apt-get
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

**DEFINITIONS**

![](https://i.imgur.com/ba3JFiY.jpg "Photo by Pixabay from Pexels")

**Local**
>When we talk about LOCAL we mean anything that is stored locally on your computer hard drive.

**Remote**
>When we talk about REMOTE we mean anything that is stored and backed-up centrally on some 3rd party service, such as GitHub. Your REMOTE service will be accessible online at any time from any location by anyone who has access to it, meaning you or your colleague who is working on your project together with you.


**GIT WORKFLOW**:

![](https://i.imgur.com/cHDGtUJ.jpg "Photo by Startup Stock Photos from Pexels")

First we need to link our LOCAL and REMOTE repositories using SSH Key.

We need to generate our LOCAL SSH key which we then paste to REMORE GitHub.


Imagine I work on my project addania.com which is my personal website. I created my project locally on my PC. In order to connect it to Git I first need to create a sub-folder called git with includes initial git setup.

Some softwares like Gatsby create this folder automatically. I can add this folder manually using Ubuntu terminal and providing <code>git init</code> command which will create a subfolder git in my current project folder.

```
git init
```

Then I work on my project files and make changes to my website. Firstly, I need to add those files manually to the git folder LOCALLY on my PC. Git is not tracking live all the changes done in project. I need to tell to
Git that now is the time when I want to log the changes I made so far. Therefore all my LOCAL files need to be added to LOCAL git repository ( we are not talking about Github yet). In order to to this LOCAL workflow:
```
git add .
git commit -m "message goes here"
```
When our LOCAL Git has logged our LOCAL changes we are ready to update our REMOTE repository, such as Github or Gitlab.

Then we need to add our LOCAL git to REMOTE Github. Go to yout Github Repository and at the top of your GitHub repository's Quick Setup page, click  to copy the remote repository URL.
Afterwards we go to Ubuntu command and use following command, where remote repository URL is the URL we copied from Github and origin is the name of our remote repository (origin is just a convention): <code>git remote add origin remoteRepositoryURL</code>

For example:
```
git remote add origin git@github.com:addania/addania.com.git 
```
To verify if our new remote was added we can check the:
```
git remote -v 
```

Then we are ready to push our LOCAL git repository to the REMOTE Github repository:
```
git push origin master
```

>To check status of my Git in a project (if they are up-to-date with master branch or if I have any staging commits), first navigate to project folder by cd addania.com then executing:
```
git status
```
> To see history of commits
```
git log
```
> The git init command creates a new Git repository. Executing <code>git init</code> creates a <code>.git</code> subdirectory in the current working directory, which contains all of the necessary Git metadata for the new repository. To create git folder in your project folder:
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
> To push files from LOCAL git to REMOTE git on github, where origin is name of REMOTE repository and master is name of the branch in the project, main branch is called master:
```
git push origin master
```
> If I don't want to write always <code>git push origin master -force</code> I can create upstream and link local to remote git by <code>-u</code>. After this command then I can use only git push to upload files
```
git push -u origin master -f
```
> To overwrite anything on the REMOTE repository in master branch we can <code>force</code> push:
```
git push origin master --force 
```
> Pulling down files from REMOTE Git to local Git, where origin is name of my REMOTE Git and master is name of my branch:
```
git pull origin master
```

>To create new branch on the LOCAL machine:
```
git checkout -b [name_of_your_new_branch]
```

>For example, where convention is that 1 is number of issue on Github:
```
git checkout -b Github1AddDay05Task02
```

>To create a new branch taking MASTER as a base for the code (it could be any other name of the branch):
```
git checkout -b Github1AddDay05Task02 master
```

>To create a new branch taking Github2AddDay06 as a base for the code (it could be any othr name of the branch):
```
git checkout -b Github1AddDay05Task02 Github2AddDay06
```

>This will switch from your current branch to the new branch.

> You can always use <code>git status</code> to check on which branch you currently work.
```
git status
```

> Push the branch <code>gh-pages</code> to Github :
```
git push origin gh-pages
```

> To see Git log (historical commits):
```
git log
```

> It only shows one page by default:

>In order to see new line press <code>ENTER</code>.

>In order to see new page press <code>SPACE</code>.

>In order to see new page press <code>Q</code>.

> Here is an example log of latest commit:
```
commit 29d6a97075b71993ca66b67a04ed9e038f4330ed (HEAD -> Github1AddDay05Task02, origin/gh-pages, gh-pages)
Author: addania <mirka.schw@gmail.com>
Date:   Sat Dec 14 17:10:03 2019 +0100
adding day 4 tast 2
```

> Commit ID is <code>29d6a97075b71993ca66b67a04ed9e038f4330ed</code>

> <code>HEAD</code> means that this is the commit on which I currently work, this is the latest commit which I did

> After <code>-></code> we have all branches which are on this commit, they are also called tags (or marks).

>It means my commit 29d6a97075b71993ca66b67a04ed9e038f4330ed is on branch <code>Github1AddDay05Task02</code>, <code>origin/gh-pages</code> and <code>gh-pages</code>.

1// **gh-pages** is my LOCAL version of the branch

2// **origin/gh-pages** is my REMOTE version of the branch

3// **Github1AddDay05Task02** is my new branch which I created with <code>git checkout -b Github1AddDay05Task02</code>

> As soon as I create a new branch with <code>git checkout -b Github1AddDay05Task02</code> my latest commit will be on that branch.

> Then I need to push my LOCAL branch to the REMOTE:
```
git push origin Github1AddDay05Task02
```

> I can now go to Github and check if new branch was created.

> How to switch branches to master branch:
```
git checkout master
```

> How to switch branches to gh-pages branch:
```
git checkout gh-pages
```

> How to switch branches to Github1AddDay05Task02 branch - how to change branch:
```
git checkout Github1AddDay05Task02
```

> Then if I have couple of branches I always need to pay attention which branch I am on and from which branch I do <code>npm start</code> and which files I am then working on.

> I can check on which branch I currently am by:
```
git status
```

> Then when I am on correct branch then I can start my local development:
```
npm start
```

> Then I can make changes to code on my new branch Github1AddDay05Task02

> Afterwards I add the changes to local git:
```
git add .
```

> Then I commit those changes:
```
git commit -m "fixing issue Github1"
```

> And now I can push those changes to my REMOTE branch:
```
git push origin Github1AddDay05Task02
```
> You can go to Github and see that our latest commit is present on branch: Github1AddDay05Task02 but is not present on other branches like the gh-pages branch.

**MERGE**

![](https://i.imgur.com/cZzbzhC.jpg "Photo by Pixabay from Pexels")

> In order to merge this branch with the branch on which you have your main code (usually master, but in my case gh-pages branch), we can go to -> Pull Requests and click on <code>Create a new Pull Request</code>

> Then it will show the <code>Compare changes</code> page

1// <code>Base</code> is the main branch TO WHICH I want to merge my code to. In my case gh-pages (but usually will be master)

2// <code>Compare</code> is the branch FROM WHICH I want to put data to the base. In my case Github1AddDay05Task02

> Here I can see all changes that were made.

> Next I can click <code>Create Pull Request</code>

> I will be redirected to <code>Open Pull Request</code> page where I add title and description of the pull request. 

> I can assign someone, add reviewers, labels and projects to this Pull Request.

> Then click <code>Create Pull Request</code>

> Then someone will comment on the code, review changes, request change of the code or approve changes.

> If it is approved I can click on <code>Merge pull request</code>.

> Then click <code>Confirm Merge</code>.

> I should get the message:
```
Pull request successfully merged and closed
```
> Now gh-pages branch on the REMOTE has CHANGED!!! We need to now download those latest changes to my LOCAL!!! We can use <code>git pull</code> or <code>git fetch</code>:
```
git fetch
```

```
git pull
```

> <code>Git pull</code> will make <code>git fetch</code> plus it will also merge REMOTE changes with my LOCAL changes (which I made meanwhile but did not put on REMOTE). <code>Git fetch</code> will only fetch data, and will not merge in case I did some changes meanwhile on LOCAL which were not on REMOTE. Fetch will always work. Pull can fail if changes on my LOCAL are not compatible with changes on REMOTE.

> It does not matter on which branch I make the pull or fetch, it will take all the data from all branches. However, you might get an error:
```
There is no tracking information for the current branch.
```

It means that Git is not able to match LOCAL and REMOTE branch names automatically. Therefore you might need to use pull for a specific branch instead, to get all the updates:
```
git pull origin master
```

or

```
git pull origin master Github1AddDay05Task02
```

> My branch Github1AddDay05Task02 still exists. If we want to delete this branch I can do following:

1// go to the pull request from where we merged it and at the end there will be button: <code>Delete branch</code>

or

2// I can go to <code>Branches</code> and click on the trash icon to delete it

> To delete this branch on REMOTE from terminal:
```
git push <remote_name> --delete <branch_name>
```

> In our case the code will be:
```
git push origin --delete Github1AddDay05Task02
```

>To delete this branch on LOCAL we can do it by these 2 commands:
```
git branch -d branch_name
git branch -D branch_name
```
One is with <code>‘d’</code> and one with <code>‘D’</code>.

1// The <code>-d</code> option stands for --delete, which would delete the local branch, only if you have already pushed and merged it with your remote branches.

2// The <code>-D</code> option stands for --delete --force, which deletes the branch regardless of its push and merge status, so careful with this one!

> We can merge branch into another one also in terminal. For example I want to merge my PR1 branch into master branch. First we run <code>git checkout master</code> to change the active branch back to master. 
```
git checkout master
```
> Then we run the command <code>git merge PR1</code> to merge the new feature into the master branch.
```
git merge PR1
```
> Note that <code>git merge</code> merges the specified branch into the <code>currently active</code> branch. So we need to be on the branch that we are merging into.

> Note also that this only merged the branches LOCALLY. We still need to push changes to REMOTE.
```
git push origin master
```

> Performing this might not necessarily automatically close the PR on Github (if the PRs base was NOT master) but it can close it automatically (if the PRs base was master). Weird stuff, kinda.

**RESOLVING CONFLICTS**

![](https://i.imgur.com/EN9pOyE.jpg "Photo by Steve Johnson from Pexels")

> Imagine you want to merge branch PR2 to your master branch. However, you notice on Github, that there are some conflicts and automatic merge cannot happen. In such cases you need to manually resolve the conflicts. How to do it? Basically we will first merge master to our PR2 branch (yes, exactly, it is vise versa of what you might have thought.. or was it just me? :) ). Then we resolve the conflicts on our PR2 branch, then we commit changes to PR2 and we are ready to merge PR2 to master. Detailled steps are described below:

> First we go to our terminal.

> We go to our PR2 branch using checkout command:
```
git checkout PR2
```

> As we are now on PR2 branch we can merge master to our PR2 by <code>git merge</code>.
```
git merge master
```

>Above command will merge master to our PR2 branch (our currently active branch on which we are now).

> As you do the merge you will most likely get an error, that merge could not be done manually and you will get a conflicted file. Please note, that we are still on our PR2 branch, but partially it was merged already with code from master, except for the conflicts. Let's assume that conflicting file is <code>App.js</code>.

> We need to go to the <code>App.js</code> and this file will contain weird characters, HEAD and master:
```
<<<<<<< HEAD
code1
=======
code2
>>>>>>> master
```

> This basically points you to what exactly the conflict is. 

> <code>HEAD</code> means what is on your current branch (in our case branch PR2). This is basically **code1**, which is between
```
<<<<<<< HEAD
```

and 
```
=======
```

> Above **code1** is in conflict with its equivalnt **code2** on master branch. In file it will be code between:
```
=======
```
and 
```
>>>>>>> master
```

> At this point you need to decide if **code1** or **code2** is the correct one that should be kept.

> In our case let's assume that **code1** is the correct one. Therefore, we will remove everything except for **code1**:
```
code1
```
> **code1** stays in our file

> We need to remove everything else. Also HEAD and master and all other characters:

```
<<<<<<< HEAD
=======
code2
>>>>>>> master
```

> Here I would recommend to double-check if our code is still working! Run your local server:
```
npm start
```

>and check if merge and conflict resolution was correct and your app is still working. In my case for example, there was an error that one function which should be deleted was still imported in my file. Therefore, I can assume it is always necessary to check the app and run your tests after merge:
```
npm run test
```

> Now it is time to commit and push the changes on PR2 branch from our LOCAL to REMOTE:
```
git add .
```

```
git commit -m "merging master to PR2, resolving conflicts"
```

```
git push origin PR2
```

> We can check Github now. PR2 should now contain all code from master and its updates (additions) to master. We should be good to go and merge PR2 to master without conflicts. Yay :)

**UNDO CHANGES**

> To undo changes in a specific file without staging them use git <code>checkout</code> and a file path to the file which we want to revert changes done:
```
git checkout src/functions/myFunction.js
```
**CODE STATISTICS**

![](https://i.imgur.com/ydhaIIE.jpg "Photo by Timur Saglambilek from Pexels")

> Display number of rows of code for each file - code statistics:
```
git ls-files | xargs wc -l
```

> It will result in something like this:
```
38 src/App.css
99 src/App.js
36 src/components/Button.css
23 src/components/Button.js
24 src/components/Chart.js
14 src/components/Filter.js
27 src/components/Header.js
```

> Get statistics about users, number of changed files, how many insertions, how many deletions and net:
```
git log --shortstat --pretty="%cE" | sed 's/\(.*\)@.*/\1/' | grep -v "^$" | awk 'BEGIN { line=""; } !/^ / { if (line=="" || !match(line, $0)) {line = $0 "," line }} /^ / { print line " # " $0; line=""}' | sort | sed -E 's/# //;s/ files? changed,//;s/([0-9]+) ([0-9]+ deletion)/\1 0 insertions\(+\), \2/;s/\(\+\)$/\(\+\), 0 deletions\(-\)/;s/insertions?\(\+\), //;s/ deletions?\(-\)//' | awk 'BEGIN {name=""; files=0; insertions=0; deletions=0;} {if ($1 != name && name != "") { print name ": " files " files changed, " insertions " insertions(+), " deletions " deletions(-), " insertions-deletions " net"; files=0; insertions=0; deletions=0; name=$1; } name=$1; files+=$2; insertions+=$3; deletions+=$4} END {print name ": " files " files changed, " insertions " insertions(+), " deletions " deletions(-), " insertions-deletions " net";}'
```
> It will result it something like this:
```
mirka.schw,: 311 files changed, 370168 insertions(+), 99040 deletions(-), 271128 net
```

> How to install new version of npm 
```
npm install -g npm
```

> Search content of all your commit messages:
```
git log --grep=´xxxx´
```

> Search content of all your code changes:
```
git log -S ´xxxx´
```

> Search where each line of code was last changed
```
git blame
```

> See status of commits
```
git log --shortstat
```

> See all commit titles nicely as a one-liners
```
git log --pretty=oneline
```

> To move or delete files:
```
git mv
```

> Good practice is to first rename or move file, then commit! Only then do more changes to the file. Reason is, that if you rename or move file AND make changes to it, in the change history it will be shown as if entire file was removed and new on was added. You will not be able to track and compare changes within the file.

```
git mv oldfile newfile
git commit -m "moved oldfile to newfile"
```

> To remove, reorder, edit, merge and split commits. You should review the development history and tell meaningful stories from it, rather than having a scatterplot of all commits
```
git rebase --interactive
```

> To rename a branch, first go to that branch:
```
git checkout <old_name>
```

> and then rename the branch
```
git branch -m <new_name>
```
> Example:
```
git checkout 20-colocation
git branch -m 20p-colocation
```
> To change node version:
```
nvm use 8.10.0
```


**VISUALS**

![](https://i.imgur.com/qvRNfBN.png  "Smart Git logo")
> Good visual Git software is called Smart Git(it is paid however):
```
Smart Git
```