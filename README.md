## Software Requirements

-   Node.js **8+**
-   MongoDB **3.6+** (Recommended **4+**)

## How to install

### Using Git (recommended)

1.  Clone the project from github. Change "myproject" to your project name.

```bash
git clone https://github.com/maitraysuthar/rest-api-nodejs-mongodb.git ./myproject
```

### Using manual download ZIP

1.  Download repository
2.  Uncompress to your desired directory

### Install npm dependencies after installing (Git or manual download)

```bash
cd myproject
npm install
```

### Setting up environments

1.  You will find a file named `.env.example` on root directory of project.
2.  Create a new file by copying and pasting the file and then renaming it to just `.env`
    ```bash
    cp .env.example .env
    ```
3.  The file `.env` is already ignored, so you never commit your credentials.
4.  Change the values of the file to your environment. Helpful comments added to `.env.example` file to understand the constants.
## Project  structure
```sh
.
├── app.js
├── package.json
├── bin
│   └── www
├── controllers
│   ├── AuthController.js
│   └── BookController.js
├── models
│   ├── BookModel.js
│   └── UserModel.js
├── routes
│   ├── api.js
│   ├── auth.js
│   └── book.js
├── middlewares
│   ├── jwt.js
├── helpers
│   ├── apiResponse.js
│   ├── constants.js
│   ├── mailer.js
│   └── utility.js
├── test
│   ├── testConfig.js
│   ├── auth.js
│   └── book.js
└── public
    ├── index.html
    └── stylesheets
        └── style.css
```
## How to run

### Running  API server locally

```bash
npm run dev
```

You will know server is running by checking the output of the command `npm run dev`

```bash
Connected to mongodb:YOUR_DB_CONNECTION_STRING
App is running ...

Press CTRL + C to stop the process.
```
**Note:**  `YOUR_DB_CONNECTION_STRING` will be your MongoDB connection string.

### Creating new models

If you need to add more models to the project just create a new file in `/models/` and use them in the controllers.

### Creating new routes

If you need to add more routes to the project just create a new file in `/routes/` and add it in `/routes/api.js` it will be loaded dynamically.

### Creating new controllers

If you need to add more controllers to the project just create a new file in `/controllers/` and use them in the routes.

## Tests

### Running  Test Cases

```bash
npm test
```

You can set custom command for test at `package.json` file inside `scripts` property. You can also change timeout for each assertion with `--timeout` parameter of mocha command.

### Creating new tests

If you need to add more test cases to the project just create a new file in `/test/` and run the command.

## ESLint

### Running  Eslint

```bash
npm run lint
```

You can set custom rules for eslint in `.eslintrc.json` file, Added at project root.

## Bugs or improvements

Every project needs improvements, Feel free to report any bugs or improvements. Pull requests are always welcome.

## License

This project is open-sourced software licensed under the MIT License. See the LICENSE file for more information.