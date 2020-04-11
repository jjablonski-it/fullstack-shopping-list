# Shopping list

Very simple shopping list web application created for demonstration purposes.

![App](https://media.giphy.com/media/S3zt0opmr3urIZbkZh/giphy.gif)

# Demo

### Important!

> App is connected to database and ANYONE can add whatever they want.

You can find working heroku app demo [here](https://shopping-list-demo-jj.herokuapp.com/).

# Installation

To run the app locally you will need your own MongoDB cluster and following .env file in the root directory:

     PORT=8000
     URI=mongodb+srv://<user>:<password>@<cluster>

#### Package installation

Root folder - server dependencies
Client folder - client dependencies

    $ npm install
    $ cd client
    $ npm install

#### Run

Running whole application:

    $ npm run dev

Running only client:

    $ npm run client

Running only API:

    $ npm start
