---
title: "Generate SSH Key for GitHub"
date: "2019-12-06"
---

![](https://i.imgur.com/wOgHAU7.jpg "Photo by Ylanite Koppens from Pexels")

How to generate SSH key and add to SSH agent?

> First check if you have existing ssh keys by pasting this to command line:
```
ls -al ~/.ssh
```

> Also check in your folders to see if you already have a public SSH key. By default, the filenames of the public keys are one of the following:
```
id_rsa.pub
id_ecdsa.pub
id_ed25519.pub
```

> If you found no SSH keys, follow next steps:

> Open command line and paste the following code. Please note that <code>your_email@example.com</code> is your email address :
```
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```

> You will be prompted following message, then just press **ENTER**:
```
Enter a file in which to save the key (/c/Users/you/.ssh/id_rsa):
```

> You will be asked to enter your passphrase:
```
Enter passphrase (empty for no passphrase):
```

> And to confirm it again:
```
Enter same passphrase again:
```

> Key has been generated now

> We need to tell our computer we want to use this key

> First we start our SSH agent
```
eval $(ssh-agent -s)
```

> We will get agent pid

> Now we need to add the key to our home folder (default location)
```
ssh-add ~/.ssh/id_rsa
```

> Enter the pass phrase

> The identity has been added

> Now we need to copy the **PUBLIC** key to our clipboard, so that we can paste it into Github.

> To do it, we can find the file and open it. It will be in the /C/Users/Mia/.ssh/id_rsa.pub and we can copy it

> Alternatively you can use the command line to copy the ssh key to clipboard:
```
clip < ~/.ssh/id_rsa.pub
```
> Now it was copied to the clipboard

> We can go to our Github

> Click on Profile picture -> Settings -> SSH and GPG keys -> New SSH Key

> Give it a title like: "private pc" or "home desktop" or anything

> Paste the SSH key to the Key box

> Click the button <code>Add SSH Key</code>

> We are **DONE** :)

References:

https://help.github.com/en/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent
https://www.youtube.com/watch?v=WgZIv5HI44o

![](https://i.imgur.com/LyXt5ub.jpg "Photo by Pixabay from Pexels")