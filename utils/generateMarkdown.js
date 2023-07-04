// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
   switch (license) {
       case "Apache License 2.0":
         licenseBadge = "https://img.shields.io/badge/License-Apache_2.0-blue.svg";
           break;
       case "MIT":
         licenseBadge = "https://img.shields.io/badge/License-MIT-yellow.svg";
           break;
       case "Unlicense":
         licenseBadge = "https://img.shields.io/badge/license-Unlicense-blue.svg";
           break;
       case "none":
         licenseBadge = "";
       default:
         licenseBadge = "";
   }
   return licenseBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
   switch (license) {
      case "Apache License 2.0":
        licenseLink = "https://www.apache.org/licenses/LICENSE-2.0";
          break;
      case "MIT":
        licenseLink = "https://opensource.org/license/mit/";
          break;
      case "Unlicense":
        licenseLink = "http://unlicense.org/";
          break;
      case "none":
        licenseLink = "";
      default:
        licenseLink = "";
  }
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
   if (license !== "none") {
      licenseSection = `
       This application is licensed with the ${license} license.
       `;
   } else {
      licenseSection = "";
   }
   return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
   return `# ${data.title}
 ${renderLicenseBadge(data.license)}
 ## Table of Contents
 * [Description](#description)
 * [Installation](#installation)
 * [Usage](#usage)
 * [Contact-Me](#contact-me)
 * [Credits](#credits)
 * [Features](#features)
 * [Contributors](#contributors)
 * [test](#test)
 ${renderLicenseLink(data.license)}
 ## Description
 ${data.description}
 ## Installation
 ${data.installation}
 ## Usage
 ${data.usage}
 ## Contact-me
 * Name - ${data.name}
 * Email - ${data.email}
 * GitHub - [${data.github}](https://github.com/${data.github}/)
 ## Credits
 ${data.credits}
 ## Features
 ${data.features}
 ## Contributors
 ${data.contributors}
 ## Test
 ${data.tests}
 ${renderLicenseSection(data.license)}
 `;
 }

module.exports = generateMarkdown;
