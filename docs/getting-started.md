# Getting started

### Installing the application

- Make sure you have [`node`](https://nodejs.org/en) and [`npm`](https://www.npmjs.com/) installed.
- Run `npm install` in a shell located in this repository folder.

### Running the application

- If you want the app running on a specific port, make a copy of `.env.template` and rename it to `.env`. Then choose the values you wish for the environment variables named in the template.

    - `VITE_SERVER_PORT`: the application will run at `http://localhost:<VITE_SERVER_PORT>`. Choose whatever port you want.

- Run `npm run dev` to start the application. It will be accessible at `http://localhost:<VITE_SERVER_PORT>`.


Back to [index](./index.md)