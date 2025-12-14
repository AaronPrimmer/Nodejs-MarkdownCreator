// 02-Challenge — Professional README Generator

// require statements for necessary packages and modules
const fs = require("fs");
const inq = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

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
    choices: [
      "MIT",
      "GPLv3",
      "Apache 2.0",
      "Mozilla 2.0",
      "BSD 3-Clause",
      "None",
    ],
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
  fs.writeFile(fileName, data, (err) => {
    console.log(err ? err : "README.md generated successfully!");
  });
}

// prompt the use for the answers from the qustions list and return a response object
inq
  .prompt(questions)
  .then((response) => {
    writeToFile("README.md", generateMarkdown(response));
  })
  .catch((error) => {
    console.log("Error: ", error);
  });
