# Welcome to my Dark Mode workshop 🌒

Thanks for attending! There's a few things you'll have to do to get everything up and running.

## Clone the repository to your computer
If you're using GitHub Desktop, click on the green "Code" button and then click "Open with GitHub Desktop". 
GitHub Desktop will take care of the rest!

If you're using the command line, navigate to the folder you want the repo to be stored in, and type in `git clone https://github.com/ryanmohta/darkmodeworkshop.git`.

## Install Node.js and npm if you haven't already
This website is built using React, which is built on the Node.js runtime. You'll need to install Node.js and its package manager, npm, to run the website locally.

Check if you already have Node.js and npm installed by typing `node -v` and `npm -v` into the command line — if version numbers show up for both, you're all set! If not, head over to the [Node.js website](https://nodejs.org/en/) to download it (the LTS version is fine).

## Install the dependencies for the repository
Navigate to the root folder of the repository using the command line, and once there type in `npm install`. This will install React and all of the dependencies React depends on (this may take a minute). Once that's done, ensure a folder called `node_modules` got created and it contains a _lot_ of subfolders (each subfolder is a module that is used by React!).

Additionally, we'll be using a CSS preprocessor called _Sass_ for the workshop (more on that in a bit!). Install it by typing `npm install -g sass` into the command line.

## Run the code
Initialize our CSS files by typing `sass --watch src:src` (also more on what that command does in a bit!). The src folder of the repo should now contain both several `.scss` files and several `.css` files.

Then, open up a separate command line window, navigate to the repository, and type in `npm start`. After a few seconds, the website should open in a browser tab! Keep the process running — now, whenever you make a change to the code and save it, the website should automatically update!
