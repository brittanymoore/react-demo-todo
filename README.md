# React Demo Todo

## Getting Started

### Get the Code

```sh
git clone https://github.com/brittanymoore/react-demo-todo.git
cd react-demo-todo
npm run setup
```

### Run the Application

To run the app in development mode:

```sh
# in separate terminals
npm run start:server
npm run start
```

Open a browser window and navigate to localhost:3000.

### Unit Testing

To run unit tests using Jest and Enzyme: 

```sh
npm run test
```

## Root-level Features

This seed project is set up at two levels: the root, which contains project-wide tooling, and the `app` directory, which contains the React application. I've structured it this way to reflect the variance of React projects I've encountered in the wild. You might only be interested in the React application (the `app` directory); the extra tooling is optional.

### End-to-End Testing

To run end-to-end tests using Cypress:

```sh
# in separate shell terminals
npm run start:server
npm run start
npm run test:e2e
```

### Precommit Formatting

This repository uses `husky`, `lint-staged`, and `prettier` to auto-format code on commit.

### Linting

Run the script `npm run lint` to lint the code using `eslint`.

The current configuration, which can be found in `config/lint`, uses a combination of `jsx-a11y` and `react` rules. `eslint-config-prettier` is included to disable any rules that prettier already handles.