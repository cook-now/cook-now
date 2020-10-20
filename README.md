# cook-now

http://cooknow-app.herokuapp.com/


A web app to promote foodies’ community.

The app make it possible to use the products which you already have in your fridge, matching the recepies with chosen ingredients.

The app is responsive on mobile, tablet and desktop.

Make sure you have node, MongoDB and npm installed.

For the photo upload function, make sure you have an account on Cloudindary.

Installing

Clone the repository and install the dependencies:

cd ./cook-now

npm install

Add a .env file and include the following keys:

PORT=3000

ENV=development

SESSION_SECRET=<It is used for Passport session security, You can use any secret word of your choice.>

Refer to your account details from Cloudinary and include CLOUD_NAME, CLOUD_KEY and CLOUD_SECRET in the .env file.

Running

Building and starting the server for production:

npm start
if you have nodemon installed, you can also use this command to start and run the server:

npm run dev

==============

Built with

Node.js

Express.js

MongoDB

handlebars

axios

Cloudinary

Bootstrap
