# Documentation (Zuri HNG Project)

## ApplyForMe App

This project provides the interface and client logic to implement a service that helps software apply engineers apply for jobs without stress. Our system can apply for jobs on behave of the client based on thier professional information provided on our platform and all they need to do is attend interviews.

### Tech Stack

- Reactjs
- Css Modules

## Getting Started

### Installing Dependecies

#### Installing Node and NPM

This project depends on Nodejs and Node Package Manager (NPM). Before continuing, you must download and install Node (the download includes NPM) from [https://nodejs.com/en/download](https://nodejs.org/en/download/).

### Clone project

In the project directory,in your terminal, you can run:

```cmd
 git clone https://github.com/workshopapps/applyforme.web.git
```

```cmd
  cd applyforme.web
```

```cmd
 npm i
```

<br>
In the project directory, you can run:

#### `npm start`

> Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page will reload when you make changes. You may also see any lint errors in the console.

<br>

### Folder Structure

1. These are the folders relevant for the project:

```bash
.
├── src
  ├── components
    ├── landing_page
  ├── App.test.js
├── README.md

```

<br >

### Contribution Guidelines

- Do not push directly to main branch
- Create your working branch and give it a descriptive name like: feature/{feature-name}
- Make micro commits, so the code reviewer can see step by step your changes to the codebase.
- Make sure your PR sumarry is descriptive, in other to make the code reviewer understand what changes you have made.
- Only make changes to section of the codebase assigned to you.
- Please follow the commit message standards below:
  - feat: a new feature
  - fix: a bug fix
  - docs: changes to documentation
  - style: formatting, missing semi-colons,
  - refactor: refactoring production code
  - test: adding tests, refactoring test
  - chore: updating build tasks, package manager configs, etc; no production code change

### GitHub Actions Enforcement

This Action enforcement uses lint: which is process of automatically check your source code for programatic and stylistic errors. Further implementation was done using GitHub Action so as to automatically check your PR (Pull Request) for styling and programatical errors, which will enable us to have maintain coding standards and clean codebase by catching such error as quick as possible.

This GitHub Action is going to run [ESLint](https://eslint.org/) and [Stylelint](https://stylelint.io/) to help you find style and javascript issues, and fix them.

[Stylelint](https://stylelint.io/) is a linter for your stylesheets that helps you avoid errors and enforce conventions.

[ESLint](https://eslint.org/) is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code, with the goal of making code more consistent and avoiding bugs.

**Notes**

- When you open your first pull request you might see the result of the GitHub Actions with errors:

<img width="551" alt="gitaction" src="https://user-images.githubusercontent.com/58771507/202259787-785c13e5-b11a-4a62-ad9e-4668b7b1b40e.png">

- Do not panic, you can Click on the Details link to see the full output and the errors that need to be fixed:

 <img width="551" alt="gitaction" src="https://user-images.githubusercontent.com/58771507/202260184-0dff49e5-3b5f-44bb-81e8-0439367b0c08.png">

- Go your terminal and run the Linter auto-fix command to fix this errors, and you can push the fixed code back to github.

#### Linter auto-fix command

This command is to be run, on the root of your directory of your project in your terminal. to fix linter errors.

##### ESLint

- Run

```
npm run auto-fix-js
```

##### Stylelint

- Run

```
npm run auto-fix-style
```

<br />

### Expected endpoints and behaviors

`GET '/{endpoint-name}'`

- Fetches a dictionary of {endpoint-name} in which the keys are the ids and the value is the corresponding string of the {endpoint name}
- Request Arguments: None
- Returns: An object with...

```json
{
  "example": {
    "exampleName": "Science"
  }
}
```

<br />

## 🤝 Contribute

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/workshopapps/applyforme.web.git/issues)

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments

- Zuri HNG
- Hat tip to anyone whose code was used
- Inspiration

## 📝 License

This project is [MIT](./MIT.md) licensed.
