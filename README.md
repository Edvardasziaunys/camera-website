# Introduction

I wanted to create a portfolio website, where freelancers could upload their camera gear and shot photos,
so that when they search for work, they could basically send this "portfolio website" to the interested person,
and see what gear the freelancer uses and check out the gallery to see if they like the style of photos, that the
photographer takes.

In the future the plan would be for this website to have logins and account creation possiblity, so that all the users would have their dedicated space, and users could interact with one another, by sending messages, maybe selling some gear that they don't use anymore.

# Getting Started

1. Installation process

Download the ZIP file from https://github.com/Edvardasziaunys/camera-website, once unzipped open the the myreactapp folder in "VS Code"
open the folder in the integrated terminal so that the example path would look like " C:\Users\edwax\Downloads\code academy\Baigiamasis codeacademy\myreactapp" once you are there run "npm install" this would download all the needed modules for the project.

Repeat the same steps for the backend folder.

Once you have the moduels for both folders installed, you can run the command "npm run dev" for both of them, this will activate the
front-end and the back-end which will allow you to make all the API calls and fetch informaton for the front-end to display.

Once both are started, open: http://localhost:5173/ in your browser and you'll be able to view and interact with the website.

2. Software dependencies

Front-End:
"dependencies": {
"@fortawesome/free-solid-svg-icons": "^6.5.2",
"@fortawesome/react-fontawesome": "^0.2.2",
"react": "^18.2.0",
"react-dom": "^18.2.0",
"react-router-dom": "^6.23.1",
"styled-components": "^6.1.11"
},
"devDependencies": {
"@types/react": "^18.2.66",
"@types/react-dom": "^18.2.22",
"@vitejs/plugin-react": "^4.2.1",
"eslint": "^8.57.0",
"eslint-plugin-react": "^7.34.1",
"eslint-plugin-react-hooks": "^4.6.0",
"eslint-plugin-react-refresh": "^0.4.6",
"vite": "^5.2.0"
},

Back-End:
"dependencies": {
"cors": "^2.8.5",
"dotenv": "^16.4.5",
"express": "^4.19.2",
"mongodb": "^6.7.0"
},
"devDependencies": {
"nodemon": "^3.1.3"
}

Regarding device software, you'll need to have Node and Visual Studio Code, Postman installed:

https://nodejs.org/en/download/package-manager
https://code.visualstudio.com/
https://www.postman.com/downloads/

3. API references

GET Calls( Used for fetching information ):

GET(/gallery) fetch gallery data objects
GET(/gallery/limit) fetch a certain number of gallery data objects
GET(/cameras) fetch camera data objects
GET(/cameras/filter) fetch filtered camera data objects

POST Calls( Used for adding object information to db/array ):

POST(/gallery) add gallery data object
POST(/cameras) add camera data object

DELETE Calls( Used for deleting an object from db/array )

DELETE(/gallery/:id) delete gallery data object
DELETE(/cameras/:id) delete camera data object

# Build

In order to start the build you'll need a parent folder where your project is going to reside in, once you have the folder you
can open it in VS code terminal and then create a "backend" folder, while in the parent folder terminal run:

npx create-vite myreactapp --template react

This will create your front-end react folder "myreactapp", once you have both these folders, you can open the "backend" folder in the terminal to start of your backend setup, while in the terminal run:

npm init

This will create a package.json file, once you have this you can start runing other commands to install needed modules like:

npm i express
npm i cors
npm i nodemon
npm i dotenv

With this the backend should have all the needed modules installed, let's do the same for the Front-End, open the myreactapp again in the terminal and install the bellow modules, since Vite already provided us with some modules, there will be only a few missing:

npm i react-router-dom@6
npm i styled-components
npm install @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icon

With this the setup is completed for both back-end and front-end, they should have all the needed modules for the project, we can move forward to the back-end to setup the needed calls.

1. Create a server.js file and start the setup there
2. Start by adding all the requirements, you can grab a line of code from express docs like below

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
res.send('Hello World!');
});

app.listen(port, () => {
console.log(`Example app listening at http://localhost:${port}`);
});

To test out if it works, you can run it with the command node index.js, if the the url http://localhost:3000 opens in you browser and you can see hellow world, the express application works.

3. Next move forward with creating the data objects that you'll need for your project.
4. when you have the object create simple GET and POST calls, once you have these created, you can run the application and test it out in postman to see if you can fetch the data and post new data to the objects.
5. Once, you confirm that the basic calls work you can start by adding additional calls like a delete endpoint or a filter endpoint, this depends on what functionalities are going to be needed in the website.
6. When all the endpoints are setup, you can start moving to the Front-End part, open myreactapp in the terminal and run npm run dev
7. This will start the application and you'l be able to all the changes made in real time.
8. Start out by creating a pages folder and create all the pages that will be needed for the project, once you have the pages,
   you can go to app.js import all the created pages and react-router-dom.
9. Create all the routes for the pages, at the same time you can create a "Navigation" component and create a .jsx and .css files for it, there you can create the navigation for the website and add it also to the app.jsx at the top so that it would be on every page.
10. Once you have the app.jsx setup with all the routes and navigation, you can start off creating components for the Home.jsx page,
    you seperate the different sections that you want for the Home page to different components, and then import them to the Home page to make them visible.
11. Try making as many components as possible and make them re-usable in order to save time and data space to make it more efficient.
12. When you complete all the sections for the Home page, you can start of by doing the same for the other pages also, by making a concrete plan of what functionalities you want for the page and what sections shoould be included, when you have a plan you can start implementing it and trying to think what can be re-used, for example like in this website the contact form is a re-usable component that is used in 2 different pages.
13. If you have a section that requires fetching form the backend, first make sure that you have both the Front-end and Back-end runnng, you an run them by being in the terminal for the seperately and running npm run dev, once both are runnng you can use "useEffect" to fetch the data from the backend and then map it to display it as cards on the Front-end.
14. By implementing these functions and making use of various created componenets it should help with the effectivnes of the website and easy to find specific section or function, code.
15. With this you should have a working website using both Front-End React and Back-End Node, website.
