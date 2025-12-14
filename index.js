// 02-Challenge — Professional README Generator

// require statements for necessary packages and modules
const fs = require("fs");
const inq = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const { validateHeaderName } = require("http");

// Questions array using the inquirer format
const questions = [
  {
    type: "input",
    name: "github",
    message: "What is your Github username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
  {
    type: "input",
    name: "title",
    message: "Enter the project's title:",
  },
  {
    type: "input",
    name: "description",
    message: "Enter a description for your project:",
  },
  {
    type: "list",
    name: "license",
    message: "Choose a license for your project:",
    choices: ["MIT", "GPLv3", "Apache 2.0", "BSD 3-Clause", "None"],
  },
  {
    type: "input",
    name: "installation",
    message: "Enter the installation command:",
    default: "npm install",
  },
  {
    type: "input",
    name: "test",
    message: "Enter the test command:",
    default: "npm test",
  },
  {
    type: "input",
    name: "usage",
    message: "Provide usage information:",
  },
  {
    type: "input",
    name: "contributing",
    message: "Provide contribution guidelines:",
  },
];

// TODO: Create a function to write the README file.
// It should take a file name and the data to write.
// Use fs.writeFile or fs.writeFileSync inside this function.

function writeToFile(fileName, data) {
  // TODO: Implement this function so it writes "data" to "fileName"
}

// prompt the use for the answers from the qustions list and return a response object
prompt(questions)
  .then((response) => {})
  .catch((error) => {
    console.log("Error: ", error);
  });

// TODO: Create an array of questions for user input.
// Each question should collect part of the README content:
// - GitHub username
// - Email address
// - Project title
// - Project description
// - License (choose from a list)
// - Installation command
// - Test command
// - Usage information
// - Contribution guidelines
