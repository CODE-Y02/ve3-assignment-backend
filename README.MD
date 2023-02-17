# ve3 assignment backend repo

- This is simple backend with node js and express

- [Check Frontend Code Here](https://github.com/CODE-Y02/ve3-assignment-react/)

- [Live App](https://ve3.onrender.com/)

## Backend Setup

1.  Clone Repo and go to folder

    ```bash
    # past link without <> enclosing
    git clone <repo link>


    cd <repo name>
    ```

2.  Dependencies install

    ```bash

     #install all dependencies
     npm install

     #install nodemon globally
     npm install -g nodemon

    ```

3.  create .env in safe folder as server.js

    - setup mogodb cluster
    - in env file

    ```bash
      MongoURI=<Your Mongo URI>

      serverPort=<PORT>
    ```

4.  environments
    ```bash
    #start dev server with nodemon
    npm run dev
    ```

## Endpoints

- "/list" -> list all module (Modules array with their just contain name and id )

- "/modules" -> get all modules with data

- "/module:id" --> get single module with id

- There are also endpoint for creating module
