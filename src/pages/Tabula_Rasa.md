---
title: "Tabula Rasa"
date: "2020-02-29"
category: "knowledge-base"
---

![](https://i.imgur.com/1GXsIyS.jpg "Photo by picjumbo.com from Pexels")<p style="font-size: 12px; text-align: right">_Photo by picjumbo.com from Pexels_</p>

```
New computer === New Beginning :)
```

Not only did I just get a brand new computer, for me this also denotes an entirely new chapter in my life. From totally commercial role as a Team Lead Account Manager I jumped right into the abbys of Fron-End Development. Was a complete surprise to many... many who did not know me well enough. Made sense though for those who were close to me and especially made most sense for myself :) I am very much excited to dive into the uncharted waters of

```
ze dark side
```

as one of my fellow colleagues said :)

Having a new computer is like having a blank slate. So innocently pristine, like any new beginning. Let's then start from the scratch and see what we need to set up in order to kick off this new career adventure :)

![](https://i.imgur.com/ZnEqVOf.jpg "Photo by Pixabay from Pexels")<p style="font-size: 12px; text-align: right">_Photo by Pixabay from Pexels_</p>

Steps we will follow on our journey to new computer configuration with development environment:

**General:**

- Node.js
- Git
- Projects folder
- Create React App
- Gatsby
- Github repo
- Code editor
- Prettier
- Flow
- Other useful extensions
- Husky
- Git Flow

**Company specific:**

- Daily memo extension
- Main App: Repo setup
- Main App: Backend - Docker
- Main App: Backend - Docker Compose
- Main App: Backend - Config Overrides
- Main App: Backend - Starting the Back-End
- Main App: Front-End Config
- Main App: Daily Routine
- Handbook: Front-End Config
- Handbook: Daily Routine
- Main Transformer: Front-End Config
- Main Transformer: Daily Routine

---

##GENERAL SETTINGS##
<br>
<br>

<h2>Node.js</h2>

First things first, we will need to install Node.js. Node.js is a JavaScript runtime environment. It allows JavaScript to run outside of a browser creating a localhost environment. It comes with a NPM module (Node Package Manager) which allows to install cool packages. You can read more about [Node.js](https://addania.github.io/coding/Intro_to_NodeJS/).

In order to install Node.js, we will need to firstly install [NVM](https://addania.github.io/coding/NVM/) (Node version Manager) which enables to switch between different Node.js versions.

> Open up your Ubuntu terminal or CLI (Command Line Interface)

![](https://i.imgur.com/DXV0rGZ.jpg "Photo by Addania")<p style="font-size: 12px; text-align: right">_Photo by Addania_</p>

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

> Close and open your terminal

> Make sure that the download ran successfully by checking the version of nvm:

```
nvm --version
```

> Now we will need to set the default version of Node.js. It is good practice to set it to the latest version, which in my case currently is 15.13.0. You can check the latest version here: nodejs.org/en/

```
nvm install 15.13.0
nvm use 15.13.0
```

> Test if the installation was successful:

```
npm --version
node --version
```

Perfect, you have managed to install NVM and Node.js, our main tools to begin with.

---

<h2>Git</h2>

[Git](https://addania.github.io/coding/Intro_to_Git/) is a version control system. Which is a bread and butter for any development project. It will track changes made to your files and make your life way easier when merging different branches to reflect recent updates.

![](https://i.imgur.com/xGqWMmI.jpg "Photo by Pixabay from Pexels")<p style="font-size: 12px; text-align: right">_Photo by Pixabay from Pexels_</p>

> Install Git by running separately:

```
sudo apt-get update
sudo apt-get install git
```

> Verify that the installation ran successfully:

```
git --version
```

> Configure your username and email address:

```
git config --global user.name "addya"
git config --global user.email "addya@guilneas.com”
```

Congrats, Git is now installed :)

---

<h2>Project Folder</h2>

Let's now create a dedicated place for all your future projects. It will be a folder called <code>projects</code> which will be located under the main folder <code>Home</code>.

![](https://i.imgur.com/WIwOGuL.jpg "Photo by Pixabay from Pexels")<p style="font-size: 12px; text-align: right">_Photo by Pixabay from Pexels_</p>

> Open up your terminal. You should be in the folder called Home. But to make sure you are there, simply run <code>cd</code> command:

```
cd
```

> Create a new folder called <code>projects</code>:

```
mkdir projects
```

> Now enter this projects folder with <code>cd</code> (change directory) command:

```
cd projects
```

Yay, our most important folder is created :)

---

<h2>Create React App</h2>

Create React App is an officially supported way to create single page React applications. We will create our very first React project using Create React App.

![](https://i.imgur.com/ovGgKYM.jpg "Photo by Pixabay from Pexels")<p style="font-size: 12px; text-align: right">_Photo by Pixabay from Pexels_</p>

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

---

<h2>Gatsby</h2>

Gatsby is a React framework which allows easy creations of multiple React pages, making it ideal infrastructure for blogs, etc.

![](https://i.imgur.com/e4IDES5.jpg "Photo by Somya Dinkar from Pexels")<p style="font-size: 12px; text-align: right">_Photo by Somya Dinkar from Pexels_</p>

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

---

<h2>Github repo</h2>

So far we have only talked about our LOCAL environment, which is the one on our laptop. But how about we want to have a backup of our project also online somewhere REMOTE, accessible from any place by anyone? Github is a software development plaform which allows you to store, manage and publish your code.

![](https://i.imgur.com/TnLmNXz.jpg "Photo by Pixabay from Pexels")<p style="font-size: 12px; text-align: right">_Photo by Pixabay from Pexels_</p>

> Firstly create your own Github account navigating to their official website:

```
https://github.com/
```

> Then create your very first repository (or repo for short) by clicking on <code>New</code> button:

![](https://i.imgur.com/P5OEU2v.png "Photo by Addania")<p style="font-size: 12px; text-align: right"></p>

> We will need to link our LOCAL with REMOTE repository by generating [SSH Key](https://addania.github.io/coding/Generate_SSH_Key/).

As soon as you have successfully generated a SSH key, we are good to continue with projects.

---

<h2>Code Editor</h2>

We also need to download a good code editor. According to the [polls](https://2019.stateofjs.com/other-tools/) many developers use VSC (Visual Studio Code). Let's install that one then.

![](https://i.imgur.com/SshAdpx.jpg "Photo by Negative Space from Pexels")<p style="font-size: 12px; text-align: right">_Photo by Negative Space from Pexels_</p>

> You can visit their official [website](https://code.visualstudio.com/download) and download the code manually.

> Alternatively you can search for it in the Ubuntu Software App.

> Or use CLI to install it., as I will describe below:

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

> Now we will install the Visual Studio Code:

```
sudo apt update
sudo apt install code
```

> In Visual Studio Code you can install different extensions. From the left navigation bar you click on the last icon called Extensions:

![](https://i.imgur.com/SiyrHY6.png "Photo by bongkarn thanyakij from Pexels")

> You can search there for any name of extension. Particularly useful one is Prettier (see section below)

> You can also always display those extensions which are installed entering <code>@installed</code> to the search field:

```
@installed
```

> When you have some project opened in VSC you can use command <code>CTRL+SHIFT+F</code>. This will allow you to seach for a substring within content of ALL the files which are opened in the VSC (for example your project folder)

```
CTRL + SHIFT + F
```

> To search for the substring in the filename use:

```
CTRL + P
```

---

<h2>Prettier</h2>

![](https://i.imgur.com/DEkKbQ1.jpg "Photo by Richi choraria from Pexels")<p style="font-size: 12px; text-align: right">_Photo by Richi choraria from Pexels_</p>

Prettier helps format your code. We can add it as an extension to Visual Studio Code.

> Open the VCS:

```
code .
```

> In the left vertical menu click on the last icon called Extensions:

![](https://i.imgur.com/SiyrHY6.png "Photo by Addania")

> Search for Prettier - Code Formatter and install it.

> Then go to the Visual Code Studio Settings from the top bottom icon:

![](https://i.imgur.com/4344x8Q.png "Photo by Addania")

> Navigate to Text Editor -> Formatting and tick the box <code>Format on Save</code>

---

<h2>Flow Language Support</h2>

Flow Language Support is also another useful extension for the Visual Studio Code if your projects are using Flow (like Typescript) to define types.

> Open the VCS:

```
code .
```

> In the left vertical menu click on the last icon called Extensions:

![](https://i.imgur.com/SiyrHY6.png "Photo by Addania")

> Search for Flow Language Support and install it.

---

<h2>Other useful extensions</h2>

![](https://i.imgur.com/Ly5LiZx.jpg "Photo by Janko Ferlic from Pexels")<p style="font-size: 12px; text-align: right">_Photo by Janko Ferlic from Pexels_</p>

Here is a list of useful extensions for Visual Studio Code which you might consider:

-     auto-rename-tag	- 	Automatically rename paired HTML/XML tag
-     bracket-pair-colorizer	- 	Colorizes bracket pairs
-     code-groovy	- 	Language support for Groovy
-     setting Synch by Shan	- 	Store your VSC settings on Github and then always synch them when needed with other devices
-     contextualduplicate	- 	Duplicates text based on the context. If text is selected, only the selected text will be duplicated.
-     duplicateselection	-  Adds an action to VSCode to duplicate the current selection.
-     EditorConfig	-  Overrides user/workspace settings with settings found in .editorconfig files.
-     file-icons	- 	Array of icons for most languages and frameworks
-     gitconfig	- 	Syntax highlighting for .gitconfig, .gitattributes, and .gitmodules files.
-     gitlens	- 	Git capabilities built into Visual Studio Code. It helps you to visualize code authorship and Git blame annotations
-     htmltagwrap	- 	Wraps your selection in HTML tags.
-     npm-intellisense	- 	Autocompletes npm modules in import statements
-     partial-diff	- 	Compare text in 2 visible editors
-     path-intellisense	- 	Autocompletes filenames.
-     csstools	- 	Adds support for modern and experimental CSS
-     Prettier - Code formatter
-     quitcontrol-vscode	- 	Stop mistyping keyboard shortctus that close/quit VSCode unintentionally
-     rainbow-csv	- 	Highlight columns in comma (.csv), tab (.tsv), semicolon and pipe - separated files in different colors
-     svg	- 	SVG Language Support Extension
-     typescript-javascript-grammar	- 	Adds TypeScript grammar extension.
-     vscode-docker	- 	Makes it easy to build, manage and deploy containerized applications
-     vscode-eslint	- 	Integrates ESLint into VS Code.
-     vscode-flow-ide	- 	Flowtype extension. Flowtype is a static type checker ment to find errors in Javascript programs.
-     vscode-language-babel	- 	JavaScript syntax highlighting for ES201x, React JSX, Flow and GraphQL.
-     vscode-npm-script	- Supports running npm scripts defined in the package.json file and validating the installed modules against the dependencies defined in the package.json.
-     vscode-pigments	- 	Adds color previews to vscode instantly.

---

<h2>Husky</h2>

Did someone say husky? :)

![](https://i.imgur.com/DcFUuks.jpg?1 "Photo by Ian Turnell from Pexels")<p style="font-size: 12px; text-align: right">_Photo by Ian Turnell from Pexels_</p>

---

<h2>Git Flow</h2>

![](https://i.imgur.com/nB7b3H4.jpg "Photo by Kateryna Babaieva from Pexels")<p style="font-size: 12px; text-align: right">_Photo by Kateryna Babaieva from Pexels_</p>

[Git flow](https://addania.github.io/coding/Git_Flow/) is an amazing concept how to manage branches. Make sure you read the [article](https://nvie.com/posts/a-successful-git-branching-model/) which explains it in detail. Git flow needs to be installed.

> Install Git flow using following command:

```
sudo apt-get install git-flow
```

> For more reading refer to nvie [documentation](https://github.com/nvie/gitflow/wiki/Linux). Please note that you will need to add word <code>sudo</code> in front the the commands.

**NOTES:**

> Please note that later on in your repo you will need to initiate the git flow with:

```
git flow init --defaults
```

> And later on you will be creating branches with

```
git flow feature start <name-of-your-branch>
```

> Create a new branch based on another branch:

```
git flow feature start 11153s-redesign-dashboard-header-action-buttons feature/11117-redesign-Dashboard-Menu
```

---

##COMPANY SPECIFIC SETTINGS##
<br>
<br>

![](https://i.imgur.com/UdGibOh.jpg "Photo by Negative Space from Pexels")<p style="font-size: 12px; text-align: right">_Photo by Negative Space from Pexels_</p>

<h2>Daily memo</h2>

> Use following extension: https://github.com/pmedianetwork/daily-memo-chrome-extension

> Follow the read-me notes

---

<h2>Main App: Repo setup</h2>

> Clone the repo from the Github URL

```
git clone URL
```

---

<h2>Main App: Backend - Docker</h2>

![](https://i.imgur.com/iLSMcLv.jpg "Photo by Pixabay from Pexels")<p style="font-size: 12px; text-align: right">_Photo by Pixabay from Pexels_</p>

Docker will run backend of our application. Docker is a tool that makes it easier to create, deploy & run applications by using containers. Containers allow to package up your code with all the required parts (like libraries or other dependencies) and deploy them all as a single package. Thanks to that we will make sure that our code will run on any machine regardless of custom settings which can be different from the machine that was originally used to writing or testing the application. Docker also acts like a virtual machine, provides performance boost and reduces the size of the app. For more info this is a nice [article](https://opensource.com/resources/what-docker) to read.

Let's now get our hands dirty with installation:

> Update your apt first:

```
sudo apt-get update
```

> Allow apt to use repository:

```
sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg-agent \
    software-properties-common
```

> Add official GPG Key for Docker:

```
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
```

> Double-check if the key is correct. If yes, last 8 digits of fingerprint should be 0EBFCD88:

```
sudo apt-key fingerprint 0EBFCD88
```

> Setup stable repository. Please note that here I had to replace original [documentation](https://docs.docker.com/install/linux/docker-ce/ubuntu/) with the [hack](https://stackoverflow.com/questions/60274857/i-cant-install-docker-because-containerd-io-has-no-installation-candidate) from Stackoverflow :

```
sudo add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
   bionic \
   stable"
```

> Again update the apt:

```
sudo apt-get update
```

> Now you can install Docker Engine:

```
sudo apt-get install docker-ce docker-ce-cli containerd.io
```

> Now check for all available versions of Docker:

```
apt-cache madison docker-ce
```

> Example output will be

```
docker-ce | 5:19.03.6~3-0~ubuntu-eoan | https://download.docker.com/linux/ubuntu eoan/stable amd64 Packages
docker-ce | 5:19.03.6~3-0~ubuntu-bionic | https://download.docker.com/linux/ubuntu bionic/stable amd64 Packages
docker-ce | 5:19.03.5~3-0~ubuntu-bionic | https://download.docker.com/linux/ubuntu bionic/stable amd64 Packages
```

> Pick the version you want (I would opt for latest one):

```
5:19.03.6~3-0~ubuntu-eoan
```

> Then install that specific version but remember to REPLACE <code><VERSION_STRING></code> with your version, in our case <code>5:19.03.6~3-0~ubuntu-eoan</code>:

```
sudo apt-get install docker-ce=<VERSION_STRING> docker-ce-cli=<VERSION_STRING> containerd.io
```

> In above case the final code will look like this:

```
sudo apt-get install docker-ce=5:19.03.6~3-0~ubuntu-eoan docker-ce-cli=5:19.03.6~3-0~ubuntu-eoan containerd.io
```

> Verify if installation was success:

```
sudo docker run hello-world
```

> If it was, you should get a message simialr to this one:

```
Hello from Docker!
This message shows that your installation appears to be working correctly.

To generate this message, Docker took the following steps:
 1. The Docker client contacted the Docker daemon.
 2. The Docker daemon pulled the "hello-world" image from the Docker Hub.
    (amd64)
 3. The Docker daemon created a new container from that image which runs the
    executable that produces the output you are currently reading.
 4. The Docker daemon streamed that output to the Docker client, which sent it
    to your terminal.
```

Above installation steps of Docker can also be found in official [documentation](https://docs.docker.com/install/linux/docker-ce/ubuntu/) together with a small [hack](https://stackoverflow.com/questions/60274857/i-cant-install-docker-because-containerd-io-has-no-installation-candidate).

In order to make our lives easier, we can continue [setting](https://docs.docker.com/install/linux/linux-postinstall/) up Docker, so that we do not need to use <code>sudo</code> every single time with managing Docker as a non-root user.

> We will start with creating a Docker group:

```
sudo groupadd docker
```

> Add your users to the docker group:

```
sudo usermod -aG docker $USER
```

> Log in and out from your profile (or restart your computer)

> Verify if you can run Docker command without <code>sudo</code>

```
docker run hello-world
```

> You should get a message similar to this:

```
Hello from Docker!
This message shows that your installation appears to be working correctly.

To generate this message, Docker took the following steps:
 1. The Docker client contacted the Docker daemon.
 2. The Docker daemon pulled the "hello-world" image from the Docker Hub.
    (amd64)
 3. The Docker daemon created a new container from that image which runs the
    executable that produces the output you are currently reading.
 4. The Docker daemon streamed that output to the Docker client, which sent it
    to your terminal.
```

---

<h2>Main App: Backend - Docker Compose</h2>

![](https://i.imgur.com/tu2hiV9.jpg "Photo by freestocks.org from Pexels")<p style="font-size: 12px; text-align: right">_Photo by freestocks.org from Pexels_</p>

> Download latest version of Docker compose:

```
sudo curl -L "https://github.com/docker/compose/releases/download/1.25.4/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
```

> Apply permissions to binary:

```
sudo chmod +x /usr/local/bin/docker-compose
```

> Check the installation:

```
docker-compose --version
```

> Output on terminal should be:

```
docker-compose version 1.25.4, build 1110ad01
```

---

<h2>Main App: Backend - Config Overrides</h2>

![](https://i.imgur.com/Q6MbuWu.jpg "Photo by Rodolfo Clix from Pexels")<p style="font-size: 12px; text-align: right">_Photo by Rodolfo Clix from Pexels_</p>

> These settings assume that you have already downloaded the repository from Github to your LOCAL machine. If you havent done so, clone the repo first with:

```
git clone <repo url>
```

> Then go to your project root folder

> Create a yml file called <code>adverity-user-overrides-config.yml</code>

```
touch adverity-user-overrides-config.yml
```

> Paste following config to it (where database ulr, username, password, access key id, secret access key need to be requested):

```
dataSource:
  url: "<database url>"
adverity:
  datalake:
    datalakeType: "sftp"
    sftp:
      server: "localhost"
      username: "<username>"
      password: "<password>"
      remoteBaseDir: "/data"
    s3:
      accessKey: "<access key id>"
      secretKey: "<secret access key>"
aws:
  s3:
    accessKey: "<access key id>"
    secretKey: "<secret access key>"

rabbitmq:
  connectionfactory:
    hostname: "localhost"
```

---

<h2>Main App: Backend - Starting the Backend</h2>

![](https://i.imgur.com/p7LQncr.jpg "Photo by Pixabay from Pexels")<p style="font-size: 12px; text-align: right">_Photo by Pixabay from Pexels_</p>

Docker will be starting our back-end environment. In one tab of the terminal we will always start our back-end and in another tab we will start our front end local host.

> Upon the first start we will need to execute command from the root folder of the project:

```
./docker/build
```

> This command will build our entire backend.

> We will need to run this command any time there is any change in the back-end!! For example, database migration or any update to backend.

> To start the Docker local host (backend infrastructure, like database, sftp datalake, import queues like rabbitMQ, etc.) we will use following command from the root folder of the project:

```
docker-compose -f docker/docker-compose-infrastructure.yml up -d
```

> If we use <code>-d</code> in this command this will result in the backend infrastructure to be running forever silently, even if I turn off and on the computer, it will be by default running. I could run it every time manually if I don't use -d:

```
docker-compose -f docker/docker-compose-infrastructure.yml up
```

> If it gets some error that some plugin failed to be downloaded, try to run it again! If it is stuck at 91%, it might be a visual bug, but it can be already running.

> I can check if my Docker container (backend infrastrucure) is running with the command:

```
docker ps
```

> Now we need to start the back-end itself (by backend is meant the Java application which connects my frontend app with the backend infrastructure like data)

> To do it, go to the root folder of the project (all backend stuff is done in root folder):

```
npm run insights-start:backend
```

<!--- just

OLD INFO - INITIAL

> To do it, go to the root folder of the project (all backend stuff is done in root folder):

```
./gradlew bootRun
```


> Alternatively instead of `./gradlew bootRun` is to use:

```
make start
```

> <code>./gradlew bootRun</code> needs to be executed every day.

> Now we will need to import some data to the application (becasue by default it will be empty). We will do this only once at the beginning, later on I do not need to do it. Run following command from root folder:

```
make importQ
```
--->

> Now we are ready to start the front end. You can follow to the <code>Front-End Config</code> section.

<br />

**NOTES & ADDITIONAL COMMANDS FOR DOCKER BACKEND:**

> When I restart the computer, I can check if my Docker container (backend infrastrucure) is running by default with the command:

```
docker ps
```

> Following 3 services should be running:

```
rabbitMQ
sftp
postgres
```

> To stop Docker:

```
CTRL + C
```

and then

```
docker-compose -f docker/docker-compose-infrastructure.yml down
```

> I can also prune any cache if I want to:

```
docker system prune
```

---

<h2>Other configs</h2>

> You will need to install HomeBrew to follow steps below. Go to: [brew.sh](https://brew.sh)

> Install brew:

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

> When it asks you to press RETURN it actually means to press ENTER

> Then follow instructions in the terminal. It will say something liek: Add HomeBrew to your PATH in home/addania/.profile:

```
echo 'eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"' >> /home/addania/.profile
```

> Second instruction will be something like this:

```
eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"
```

> Now check if you can use HomeBrew

```
brew help
```

> Then you can proceed with steps below:

> It is important to set aws and npm registry as mentioned [here](https://handbook.internal.adverity.net/development-environment/general/private-npm-registry/). Instructions are a little bit confusing and useful for MAC users, not Ubuntu, so here are the steps:

> Update your system

```
sudo apt update
```

> Go to this [website](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2-linux.html#cliv2-linux-install) and install aws-cli version 2. It is important that you install version 2 and not version 1 (because it can mess up your setup and then you will have to uninstall the version 1 and install version 2). Command should be following, but confirm with the above page:

```
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
sudo ./aws/install
```

> Last command you will probably have to do separately:

```
sudo ./aws/install
```

> Check if you have the correct version of the aws:

```
aws --version
```

> If above command gives you version, then skip next workaround and move on to installing aws-vault.

> If above command gives you unexpected result like for example not found, then the folder in which the aws resides is probably different from the default. For this scenario, here is the following workaround. Check following path, if your aws is there:

```
/usr/local/aws-cli/v2/current/bin/aws --version
```

> If you found it, then run this command:

```
which aws
```

> It will probably output you something like `/usr/local/bin/aws`. Use that output to link your current aws path `/usr/local/aws-cli/v2/current/bin/aws` to the default one `/usr/local/bin/aws`:

```
ln -s /usr/local/aws-cli/v2/current/bin/aws /usr/local/bin/aws
```

> If this does not work, try it without local:

```
ln -s /usr/local/aws-cli/v2/current/bin/aws /usr/bin/aws
```

> This should work now, you should again confirm with `aws --version` which should output a version

> Then you need to install the aws-vault. Go to this [website](https://github.com/99designs/aws-vault) and in read.me check the latest releases. For example in the time of writing latest release was: https://github.com/99designs/aws-vault/releases/tag/v6.3.1

> Download the file `aws-valut-linux-amd64`

> Then go to the terminal and move it the `/usr/local/bin/aws-vault`

```
sudo mv aws-vault-linux-amd64 /usr/local/bin/aws-vault
```

> Then use this command:

```
sudo chmod +x /usr/local/bin/aws-vault
```

> Test if the vault works:

```
aws-vault --version
```

> Add vault to the adverity-main:

```
aws-vault add adverity-main
```

> Verify if it worked:

```
aws-vault list
```

> Verify access:

```
aws-vault exec adverity-main -- aws sts get-caller-identity
```

> then go to the root folter on you PC (such as Home). Create a `.aws` folder or navigate to it if it already exists. Create a config file there (without any extension).

> /.aws/config file should look like described in the handbook [here](https://handbook.internal.adverity.net/development-environment/general/private-npm-registry/). Here is just a mock with xxx and yyy placeholders:

```
 [profile adverity-main]
 # if you have set up MFA, you should uncomment the line below and update mfa_serial with the ARN of your MFA virtual device
 #mfa_serial= xxxxx
 region=eu-west-1
 source_profile= yyyyy

 [profile codeartifact]
 role_arn = xxxxx
 region=eu-west-1
 source_profile = yyyyy
```

> Test if you have correct access by running:

```
aws-vault exec codeartifact -- aws codeartifact list-domains
```

> Expected outcome should look like this:

```
 {
     "domains": [
         {
             "name": "xx",
             "owner": "yyy",
             "status": "Active",
             "encryptionKey": "zzz"
         }
     ]
 }
```

> Go to the root folder of your computer (Home) and find a file there called: `.bashrc` and paste following snippet into it. Please note, paste it at the end BEFORE the last NVM commands:

```
export ADVERITY_CODEARTIFACT_AUTH_TOKEN=`aws-vault exec codeartifact -- aws codeartifact get-authorization-token --domain adverity --domain-owner 508912190628 --query authorizationToken --output text`
```

> Restart your terminal!

> Then go to terminal and execute:

```
source ~/.bashrc
```

> Verify if your setup works:

```
git clone git@github.com:pmedianetwork/npm-repo-test.git npm-repo-test \
    && cd "$_" \
    && npm install
```

---

<h2>Main App: Front-End Config</h2>

![](https://i.imgur.com/894yf32.jpg?1 "Photo by Pixabay from Pexels")<p style="font-size: 12px; text-align: right">_Photo by Pixabay from Pexels_</p>

This assumes that you have already cloned the repository from the Github URL using <code>git clone URL</code>

Then you can navigate to web-app folder:

```
cd web-app
npm run bootstrap:ci
```

> To start the frontend, open a new tab in your terminal and follow these instructions:

```
cd web-app
npm run insights-start
```

> You will need to open the browser. Where <code>appName</code> is the repo name. App will run under:

```
http://localhost:8080/<appName>
```

> You will need to login to the app. Login credentials can be found in <code>BootStrap.groovy</code> file in the <code>grails-app/init</code> folder

> Then navigate to a Tenant <code>Big client</code>

> Click on your Account -> Admin Pages -> Dev -> Bulk import Big csv files for client Big

> This should load data, data will persist even if we restart the app.

---

<h2>Main App: Daily Routine</h2>

![](https://i.imgur.com/F6TX3fJ.jpg "Photo by Kaboompics.com from Pexels")<p style="font-size: 12px; text-align: right">_Photo by Kaboompics.com from Pexels_</p>

Shortcut to start up everything.

> Backend daily routine:

```
cd projects/<appName>
./gradlew bootRun
```

> Frontend daily routine:

```
cd projects/<appName>/web-app
npm start
```

> Open browser:

```
http://localhost:8080/<appName>
```

> Login

> You are ready to rock :)

---

<h2>Handbook: Front-End Config</h2>

![](https://i.imgur.com/qDy6nQF.jpg "Photo by Kaboompics .com from Pexels")<p style="font-size: 12px; text-align: right">_Photo by Kaboompics .com from Pexels_</p>

This assumes that you have already cloned the repository of the Handbook from the Github URL using <code>git clone URL</code>

> Then you can navigate to project folder:

```
cd handbook
```

> Then initiate git flow

```
git flow init
```

> It will ask you couple of questions:

![](https://i.imgur.com/QdOT2pp.png?1 "Photo by Addania")

> Answer <code>master</code> to the first question and <code>develop</code> to the second question. Then hit enter to confirm all the rest of the questions.

> Then check how your <code>config</code> file in <code>git</code> folder looks like. It should look like this:

```
[core]
	repositoryformatversion = 0
	filemode = true
	bare = false
	logallrefupdates = true
[remote "origin"]
	url = git@github.com:pmedianetwork/handbook.git
	fetch = +refs/heads/*:refs/remotes/origin/*
[branch "develop"]
	remote = origin
	merge = refs/heads/develop
[branch "master"]
	remote = origin
	merge = refs/heads/master
[gitflow "branch"]
	master = master
	develop = develop
[gitflow "prefix"]
	feature = feature/
	bugfix = bugfix/
	release = release/
	hotfix = hotfix/
	support = support/
	versiontag =
[gitflow "path"]
	hooks = /home/addania/projects/handbook/.git/hooks
```

> Great!

> Let's install some <code>prepare-commit-msg</code> git hook:

```
curl https://gist.githubusercontent.com/bartoszmajsak/1396344/raw/bff6973325b159254a3ba13c5cb9ac8fda8e382b/prepare-commit-msg.sh > .git/hooks/prepare-commit-msg && chmod u+x .git/hooks/prepare-commit-msg
```

> Now we can start the backend for the handbook. Pre-requisites are all the steps from the Docker and Docker Compose section including managing Docker as a non-root user (please see corresponding sections above).

> If we have done everything as above, we can now start the backend simply with:

```
docker-compose up
```

> We should check the browser at the URL:

```
localhost:4567
```

> You are also ready to rock the handbook ;)

---

<h2>Handbook: Daily Routine Start-up</h2>

![](https://i.imgur.com/vck5NPy.jpg "Photo by Free Photos.cc from Pexels")<p style="font-size: 12px; text-align: right">_Photo by Free Photos.cc from Pexels_</p>

> Navigate to handbook folder

```
cd projects/handbook
```

> Start the backend:

```
docker-compose up
```

> App is served at the URL:

```
localhost:4567
```

---

<h2>Handbook: Daily Routine Branching and Commits</h2>

![](https://i.imgur.com/kRYW41f.jpg "Photo by Pixabay from Pexels")<p style="font-size: 12px; text-align: right">_Photo by Pixabay from Pexels_</p>

> If you want to create a branch and then PR, go to the handbook folder

```
cd handbook
```

> Make sure you are on develop branch:

```
git status
```

> If not use:

```
git checkout develop
```

> Fetch and pull latest changes:

```
git fetch
git pull
```

> Please note that FETCH is a general command and will update local copies of all remote branches so this is always safe for your local branches. BUT: fetch will not update local branches (which track remote branches); if you want to update your local branches you still need to pull every branch.

> Create a new feature branch from develop using git flow:

```
git flow feature start fix-typos
```

> Please note that we don't have hotfixes on handbook, everything is a feature. IN above example <code>fix-typos</code> is a the name of the branch. Also notice that names of the branches should be kebab-cased:

> Make sure you are on the the newly created branch:

```
git status
```

> Start the backend:

```
docker-compose up
```

> Start the front end:

```
cd web-app
docker-compose up
```

> Code code code FTW

> You cannot forget to do the changesets.

> Navigate to root folder of the project and then to folder called:

```
.changesets
```

> There you will find a file called

```
changeset.md.template
```

> Rename it to your branch name (again kebab-cased)

```
fix-typos.md
```

> Open it. It will look like this:

```
---
label: New|Updated|Removed
---

Add description here...
```

> Select a label and add a description

```
---
label: Updated
---

Correcting minor spelling mistakes, fixing capitalization of names and beginnings of sentences, removing redundant words, adding missing repo

```

> Now you are ready to commit your changes and create a PR.

> Add changes

```
git add .
```

> Commit changes:

```
git commit -m "fix typos in the text

Correcting minor spelling mistakes, capitalization of names and beginnings of sentences"
```

> Push changes to the REMOTE:

```
git push origin feature/fix-typos
```

> Create Pull request

> Announce on communicator that you request code reviews

> Pray for no change requests

> Merge. Merging will also automatically deploy new version of the handbook, close the PR and delete the branch. It will also be announced on the communicator that new version was released.

**IMPORTANT GOOD PRACTICE TIPS**

> If someone requests changes, `DO NOT` resolve the conversation. Requester should do it. Always change things on your LOCAL and then push to REMOTE so that all pre-commit hooks are applied. `DO NOT` commit changes directly in Github (as it will automatically resolve the conversation without requester doing so and no pre-commit hooks will be applied)! When you commit changes also reply to the conversation with the commit link (hash)!!

**PLEASE NOTE:**

> Alternatively, if you forget to add the changesets, push to REMOTE and create PR, jenkins will complain and say it is not possible to merge

![](https://i.imgur.com/1TOqFl6.png "Photo by Addania")

> Then you will need to click on <code>Click here to add a changeset</code>

![](https://i.imgur.com/TcETP39.png "Photo by Addania")

> Select a label and add a description

```
---
label: Updated
---

Correcting minor spelling mistakes, fixing capitalization of names and beginnings of sentences, removing redundant words, adding missing repo

```

> Then press <code>Commit a new file</code>

![](https://i.imgur.com/ertY3xG.png "Photo by Addania")

**UPDATING YOUR BRANCH:**

> It can happen that you create your amazing new branch for the latest version of develop only to realize next day it is already outdated compared to develop. In such scenario, we will start with fetch. Fetch is a general command which is not branch-related. It will update local copies of ALL remote branches so this is always safe for your local branches. Meaning also that you can do it from any branch.

```
git fetch
```

> Switch to develop branch

```
git checkout develop
```

> Pull the latest changes of develop from REMOTE to your LOCAL:

```
git pull
```

> Switch back to my new branch

```
git checkout myBeautifulNewBranch
```

> Merge develop to the new branch

```
git merge develop
```

> Then you can add, commit and push changes to REMOTE.

```
git add .
git commit -m "updating my branch with latest develop"
git push origin myBeautifulNewBranch
```

![](https://i.imgur.com/k7kjCMC.jpg "Photo by bongkarn thanyakij from Pexels")<p style="font-size: 12px; text-align: right">_Photo by bongkarn thanyakij from Pexels_</p>

---

<h2>Main Transformer: Setup</h2>

> Clone repo with:

```
git clone <ULR>
```

> Prerequisites:

- docker
- docker-compose
- nvm

> Go to the root folder of the project and create a .env file:

```
touch .env
```

> Content of the file should be
