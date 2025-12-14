//returns license badge based on user input
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/license/mit-0)";
      break;
    case "GPLv3":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://opensource.org/license/gpl-3-0)";
      break;
    case "Apache 2.0":
      return "[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/license/apache-2-0)";
      break;
    case "Mozilla 2.0":
      return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/license/mpl-2-0)";
      break;
    case "BSD 3-Clause":
      return "[![License: BSD 3-Clause](https://img.shields.io/badge/License-BSD_3--Clause-orange.svg)](https://opensource.org/license/bsd-3-clause-open-mpi)";
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

// Export the function to be used by other files
module.exports = generateMarkdown;
