---
title: "Tabula Rasa"
date: "2020-02-29"
---

![](https://i.imgur.com/1GXsIyS.jpg "Photo by picjumbo.com from Pexels")<p style="font-size: 12px; text-align: right">*Photo by picjumbo.com from Pexels*</p>

```
New computer === New Beginning :) 
```
Not only did I just get a brand new computer, for me this also denotes an entirely new chapter in my life. From totally commercial role as a Team Lead Account Manager I jumped right into the abbys of Fron-End Development. Was a complete surprise to many... many who did not know me well enough. Made sense though for those who were close to me and especially made most sense for myself :) I am very much excited to dive into the uncharted waters of 
```
ze dark side
```
as one of my fellow colleagues said :)

Having a new computer is like having a blank slate. So innocently pristine, like any new beginning. Let's then start from the scratch and see what we need to set up in order to kick off this new career adventure :)


![](https://i.imgur.com/ZnEqVOf.jpg "Photo by Pixabay from Pexels")<p style="font-size: 12px; text-align: right">*Photo by Pixabay from Pexels*</p>


Steps we will follow on our journey to new computer configuration with development environment:

- Node.js 
- Git
- Projects folder
- Create React App
- Gatsby
- Github repo
- Git Flow
- Code editor
- Prettier
- Husky

___

<h2>Node.js</h2>

First things first, we will need to install Node.js. Node.js is a JavaScript runtime environment. It allows JavaScript to run outside of a browser creating a localhost environment. It comes with a NPM module (Node Package Manager) which allows to install cool packages. You can read more about [Node.js](https://addania.github.io/coding/Intro_to_NodeJS/).


In order to install Node.js, we will need to firstly install [NVM](https://addania.github.io/coding/NVM/) (Node version Manager) which enables to switch between different Node.js versions.

> Open up your Ubuntu terminal or CLI (Command Line Interface)

![](https://i.imgur.com/DXV0rGZ.jpg "Photo by Addania")<p style="font-size: 12px; text-align: right">*Photo by Addania*</p>

> Update your Linux distribution by running individually:
```
sudo apt update
sudo apt -y upgrade
```

> Install <code>curl</code> which enables you to transfer data and download further dependencies:
```
sudo apt-get install curl
```

> Download latest version of NVM:
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.1/install.sh | bash
```
> Close and Open your terminal

> Make sure that the download ran successfully by checking the version of nvm:
```
nvm --version
```

> Now we will need to set the default version of Node.js. It is good practice to set it to the latest version, which in my case currently is 12.16.1:
```
nvm install 12.16.1
nvm use 12.16.1
```

> Test if the installation was successful:
```
npm --version
node --version
```

Perfect, you have managed to install NVM and Node.js, our main tools to begin with.
___

<h2>Git</h2>

[Git](https://addania.github.io/coding/Intro_to_Git/) is a version control system. Which is a bread and butter for any development project. It will track changes made to your files and make your life way easier when merging different branches to reflect recent updates.

![](https://i.imgur.com/xGqWMmI.jpg "Photo by Pixabay from Pexels")<p style="font-size: 12px; text-align: right">*Photo by Pixabay from Pexels*</p>

> Install Git by running separately:
```
sudo apt-get update
sudo apt-get install git
```

> Verify that the installation ran successfully:
```
git --version
```

> Configure your username and emai address:
```
git config --global user.name "Emma Paris"
git config --global user.email "eparis@atlassian.com”
```

Congrats, Git is now installed :)
____

<h2>Project Folder</h2>

Let's now create a dedicated place for all your future projects. It will be a folder called <code>projects</code> which will be located under the main folder <code>Home</code>.

![](https://i.imgur.com/WIwOGuL.jpg "Photo by Pixabay from Pexels")<p style="font-size: 12px; text-align: right">*Photo by Pixabay from Pexels*</p>

> Open up your terminal. You should be in the folder called Home. But to make sure you are there, simply run <code>cd</code> command:
```
cd
```

> Create a new folder called <code>projects</code>:
```
mkdir projects
```

> Now enter this projects folder with <code>cd</code> (change directory)command:
```
cd projects
```

Yay, our most important folder is created :)

____

<h2>Create React App</h2>

Create React App is an officially supported way to create single page React applications. We will create our very first React project using Create React App.

![](https://i.imgur.com/ovGgKYM.jpg "Photo by Pixabay from Pexels")<p style="font-size: 12px; text-align: right">*Photo by Pixabay from Pexels*</p>

> Install Create React App:
```
npm install -g create-react-app
```

> Make sure you are in your <code>projects</code> folder
```
cd projects
```

> Now create your very first Create React App Project called <code>myFirstProject</code>:
```
npx create-react-app myFirstProject
```

> Navigate to your project folder:
```
cd myFirstProject
```

> Start your local host environment:
```
npm start
```

> Open your browser and paste this address:
```
localhost:3000
```
It should open up your app :) Success!! For more reading about Create React App project, see their official [tutorials](https://reactjs.org/tutorial/tutorial.html). You can also see my article how to [publish](https://addania.github.io/coding/Publish_Create_React_App_on_GithubPages/) your Create React App project on Github pages.

____

<h2>Gatsby</h2>

Gatsby is a React framework which allows easy creations of multiple React pages, making it ideal infrastructure for blogs, etc.

![](https://i.imgur.com/e4IDES5.jpg "Photo by Somya Dinkar from Pexels")<p style="font-size: 12px; text-align: right">*Photo by Somya Dinkar from Pexels*</p>

> Install Gatsby:
```
npm install -g gatsby-cli
```

> Make sure it was done correctly by checking:
```
gatsby --help
```

> Go to your projects folder:
```
cd projects
```

> Install new Gasby project called <code>hello-world</code>:
```
gatsby new hello-world https://github.com/gatsbyjs/gatsby-starter-hello-world
```

> Go to your new project:
```
cd hello-world
```

> Start your project in the local host environment by running:
> :
```
npm start
```

or

```
gatsby develop
```

> Open your browser and paste this address:
```
localhost:8000
```

Great, now you know another way how to create React projects. For more reading about Gatsby, see their official [tutorials](https://www.gatsbyjs.org/tutorial/). You can also see one of my articles on how to [publish](https://addania.github.io/coding/Publish_your_Gatsby_site_to_GitHubpages/) your Gatsby project on Github pages.

____

<h2>Github repo</h2>

So far we have only talked about our LOCAL environment, which is the one on our laptop. But how about we want to have a backup of our project also online somewhere REMOTE, accessible from any place by anyone? Github is a software development plaform which allows you to store, manage and publish your code. 

![](https://i.imgur.com/TnLmNXz.jpg "Photo by Pixabay from Pexels")<p style="font-size: 12px; text-align: right">*Photo by Pixabay from Pexels*</p>

> Firstly create your own Github account navigating to their official website:
```
https://github.com/
```

> Then create your very first repository (or repo for short) by clicking on <code>New</code> button:

![](https://i.imgur.com/P5OEU2v.png "Photo by Addania")<p style="font-size: 12px; text-align: right"></p>

> We will need to link our LOCAL with REMOTE repository by generating [SSH Key](https://addania.github.io/coding/Generate_SSH_Key/).

As soon as you have successfully generated a SSH key, we are good to continue with projects.

____

<h2>Git Flow</h2>

[Git flow](https://addania.github.io/coding/Git_Flow/) is an amazing concept how to manage branches. Make sure you read the [article](https://nvie.com/posts/a-successful-git-branching-model/) which explains it in detail. Git flow needs to be installed.

Install Git flow using following command:
```
sudo apt-get install git-flow
``` 

For more reading refer to nvie [documentation](https://github.com/nvie/gitflow/wiki/Linux). However, you will need to add word <code>sudo</code> in fron the the command.

____

<h2>Code Editor</h2>

We also need to download a good code editor. According to the [polls](https://2019.stateofjs.com/other-tools/) many developers use VCS (Visual Code Studio). Let's install that one then.

![](https://i.imgur.com/SshAdpx.jpg "Photo by Negative Space from Pexels")<p style="font-size: 12px; text-align: right">*Photo by Negative Space from Pexels*</p>

> You can visit their official [website](https://code.visualstudio.com/download) and download the code manually.

> Alternatively you can search for it in the Ubuntu Software App.

> Or use CLI to install it.

> Let's first update the distribution and install dependencies:
```
sudo apt update
sudo apt install software-properties-common apt-transport-https wget
```


> Now we need to import the Microsoft GPG key:
```
wget -q https://packages.microsoft.com/keys/microsoft.asc -O- | sudo apt-key add -
```


> Next we should enable Visual Code studio repository:
```
sudo add-apt-repository "deb [arch=amd64] https://packages.microsoft.com/repos/vscode stable main"
```

```
sudo apt update
sudo apt install code
```

![](https://i.imgur.com/k7kjCMC.jpg "Photo by bongkarn thanyakij from Pexels")<p style="font-size: 12px; text-align: right">*Photo by bongkarn thanyakij from Pexels*</p>
