---
title: "Tabula Rasa"
date: "2020-02-29"
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
- Husky

**Company specific:**

- Git Flow
- Docker
- Docker Compose
- Starting the Back-End
- Repo Dev Setup

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

> Configure your username and emai address:

```
git config --global user.name "Emma Paris"
git config --global user.email "eparis@atlassian.com”
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

> Now enter this projects folder with <code>cd</code> (change directory)command:

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

We also need to download a good code editor. According to the [polls](https://2019.stateofjs.com/other-tools/) many developers use VCS (Visual Code Studio). Let's install that one then.

![](https://i.imgur.com/SshAdpx.jpg "Photo by Negative Space from Pexels")<p style="font-size: 12px; text-align: right">_Photo by Negative Space from Pexels_</p>

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

> In Visual Code Studio you can install different extensions. From the left navigation bar you click on the last icon called Extensions:

![](https://i.imgur.com/SiyrHY6.png "Photo by bongkarn thanyakij from Pexels")<p style="font-size: 12px; text-align: right">_Photo by bongkarn thanyakij from Pexels_</p>

> You can search there for any name of extension. Particularly useful one is Prettier

> You can also always display those extensions which are installed entering <code>@installed</code> to the search field:

```
@installed
```

---

<h2>Prettier</h2>

Prettier helps to format your code. We can add it as an extension to Visual Code Studio.

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

Flow Language Support is alos another useful extension for the Visual Code Studio if your projects are using Flow (like Typescript) to define types.

> Open the VCS:

```
code .
```

> In the left vertical menu click on the last icon called Extensions:

![](https://i.imgur.com/SiyrHY6.png "Photo by Addania")

> Search for Flow Language Support and install it.

---

##COMPANY SPECIFIC SETTINGS##
<br>
<br>

<h2>Repo Setup</h2>

> Clone the repo from the Github URL

```
git clone URL
```

---

<h2>Docker</h2>

Docker will run back-end of our application. Docker is a tool that makes it easier to create, deploy & run applications by using containers. Containers allow to package up your code with all the required parts (like libraries or other dependencies) and deploy them all as a single package. Thanks to that we will make sure that our code will run on any machine regardless of custom settings which can be different from the machine that was originally used to writing or testing the application. Docker also acts like a virtual machine, provides performance boost and reduces the size of the app. For more info this is a nice [article](https://opensource.com/resources/what-docker) to read.

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

> And pick the one you want (I would opt for latest one):

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

> Verify if installation was a success:

```
sudo docker run hello-world
```

> If it was, you should get a message simialr to this one:

```
Unable to find image 'hello-world:latest' locally
latest: Pulling from library/hello-world
1b930d010525: Pull complete
Digest: sha256:fc6a51919cfeb2e6763f62b6d9e8815acbf7cd2e476ea353743570610737b752
Status: Downloaded newer image for hello-world:latest

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

To try something more ambitious, you can run an Ubuntu container with:
 $ docker run -it ubuntu bash

Share images, automate workflows, and more with a free Docker ID:
 https://hub.docker.com/

For more examples and ideas, visit:
 https://docs.docker.com/get-started/

```

Above installation steps of Docker can also be found in official [documentation](https://docs.docker.com/install/linux/docker-ce/ubuntu/) together with a small [hack](https://stackoverflow.com/questions/60274857/i-cant-install-docker-because-containerd-io-has-no-installation-candidate).

In order to make our lives easier, we can continue [setting](https://docs.docker.com/install/linux/linux-postinstall/) up Docker, so that we do not need to use <code>sudo</code> every single time.

> We will start with creating a Docker group:

```
sudo groupadd docker
```

> Add your users to the docker group:

```
sudo usermod -aG docker $USER
```

> Log in and Out from your profile

> Verify if you can run Docker command without <code>sudo</code>

```
docker run hello-world
```

> You should get a message simialr to this:

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

To try something more ambitious, you can run an Ubuntu container with:
 $ docker run -it ubuntu bash

Share images, automate workflows, and more with a free Docker ID:
 https://hub.docker.com/

For more examples and ideas, visit:
 https://docs.docker.com/get-started/
```

---

<h2>Docker Compose</h2>

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

https://github.com/pmedianetwork/adverity/wiki/Backend:-Setup-for-frontend-engineers

---

<h2>Config Overrides</h2>

> These settings assume that you have already downloaded the repository from Github to your LOCAL machine. If you havent done so, clone the repo first with:

```
git clone <repo url>
```

> Then go to your project root folder

> Create a yml file called

```
touch adverity-user-overrides-config.yml
```

> Paste following config to it (where database ulr, access key id, secret access key and host name need to be requested):

```
dataSource:
  url: "<database url>"
adverity:
  datalake:
    s3:
      accessKey: <access key id>
      secretKey: <secret access key>
aws:
  s3:
    accessKey: <access key id>
    secretKey: <secret access key>

rabbitmq:
  connectionfactory:
    hostname: '<host name>'
```

> We will also need to add a new configuration file called <code>shared-config.dev.json</code>

> Go to your project folder <code>./grails-app/conf</code>

> Create a new file there called <code>shared-config.dev.json</code>

> Add this to the file:

```
{
  "webpackHost": "172.20.0.1"
}
```

---

<h2>Starting the Back-End</h2>

Docker will be starting our back-end environment. In one tab of the terminal we will be always starting our back-end with Docker and in another tab we will be starting our front end local host.

> Upon the first start we will need to execute command from the root folder of the project:

```
./docker/build
```

> This command will build our entire backend.

> We will need to run this command any time there is any change in the back-end!! For example, database migration or any update to backend.

> To start the Docker local host we will use following command from the root folder of the project:

```
docker-compose -f docker/docker-compose.yml up
```

---

<h2>Front-End Config</h2>

This assumes that you have already cloned the repository from the Github URL using <code>git clone URL</code>

Then you can navigate to web-app folder:

```
cd web-app
npm install
npm run bootstrap
```

> To start the front-end, open a new tab in your terminal and follow these instructions:

```
cd web-app
npm start
```

---

<h2>Git Flow</h2>

[Git flow](https://addania.github.io/coding/Git_Flow/) is an amazing concept how to manage branches. Make sure you read the [article](https://nvie.com/posts/a-successful-git-branching-model/) which explains it in detail. Git flow needs to be installed.

Install Git flow using following command:

```
sudo apt-get install git-flow
```

For more reading refer to nvie [documentation](https://github.com/nvie/gitflow/wiki/Linux). However, you will need to add word <code>sudo</code> in fron the the command.

---

![](https://i.imgur.com/k7kjCMC.jpg "Photo by bongkarn thanyakij from Pexels")<p style="font-size: 12px; text-align: right">_Photo by bongkarn thanyakij from Pexels_</p>

> :

```

```

> :

```

```

> :

```

```
