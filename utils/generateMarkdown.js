//returns license badge based on user input
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return "[![License: MIT](img.shields.io)](https://www.opensource.org)";
      break;
    case "GPLv3":
      return "[![License: GPL v3](img.shields.io)](https://www.gnu.org)";
      break;
    case "Apache 2.0":
      return "[![License: Apache 2.0](img.shields.io)](https://opensource.org)";
      break;
    case "Mozilla 2.0":
      return "[![License: MPL 2.0](img.shields.io)](https://opensource.org)";
      break;
    case "BSD 3-Clause":
      return "[![License: BSD 3-Clause](img.shields.io)](https://opensource.org)";
      break;
    case "None":
      return "";
      break;
    default:
      return "";
  }
}

function renderLicenseText(license) {
  switch (license) {
    case "MIT":
      return "This project is licensed under the MIT License.";
      break;
    case "GPLv3":
      return "This project is licensed under the GNU GPLv3 License.";
      break;
    case "Apache 2.0":
      return "This project is licensed under the Apache 2.0 License.";
      break;
    case "Mozilla 2.0":
      return "This project is licensed under the Mozilla 2.0 License.";
      break;
    case "BSD 3-Clause":
      return "This project is licensed under the BSD 3-Clause License.";
      break;
    case "None":
      return "This project is not licensed.";
      break;
    default:
      return "This project is not licensed.";
  }
}

// Generates the markdown file for a complete README file
function generateMarkdown(data) {
  return `# ${data.title}

${
  data.license !== "None"
    ? `## License

${renderLicenseBadge(data.license)}`
    : ""
}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

To install necessary dependencies, run the following command: \`\`\`${
    data.installation
  }\`\`\`

## Usage

${data.usage}

## License

${renderLicenseText(data.license)}

## Contributing

${data.contributing}

## Tests

To run tests, run the following command: \`\`\`${data.test}\`\`\`

## Questions

If you have any questions about the repo, open an issue or contact me directly at ${
    data.email
  }.\n
You can find more of my work at [${data.github}](https://github.com/${
    data.github
  })
`;
}

// TODO: Export the generateMarkdown function so index.js can use it.
module.exports = generateMarkdown;

// TODO: Complete this function to generate the README markdown string
// using the data collected from inquirer.
// The generated README should include sections for:
//
// - Title
// - License badge (if any)
// - Description
// - Table of Contents
// - Installation
// - Usage
// - License (if any)
// - Contributing
// - Tests
// - Questions (GitHub + email)
//
// Use the acceptance criteria and the professional README guide as a reference.

// MIT	[![License: MIT](img.shields.io)](opensource.org)
// GPL v3	[![License: GPL v3](img.shields.io)](www.gnu.org)
// Apache 2.0	[![License: Apache 2.0](img.shields.io)](opensource.org)
// Mozilla 2.0	[![License: MPL 2.0](img.shields.io)](opensource.org)
// BSD 3-Clause	[![License: BSD 3-Clause](img.shields.io)](opensource.org)
