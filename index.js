// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
   {  
      type: 'input',
      name: 'title',
      message: `What is the title of the application?`
   },
   {  
      type: 'input',
      name: 'description',
      message: `Explain who the application is for and what it can do.`
   },
   {  
      type: 'input',
      name: 'installation',
      message: `Provide step-by-step instructions for installation.`
   },
   {  
      type: 'input',
      name: 'usage',
      message: `Provide instructions for using the application.`
   },
   {
      type: "input",
      name: "features",
      message: "Explain the features of the application.",
  },
   {
      type: "checkbox", 
      name: "license",
      message: "Which license does your application use?",
      choices: ["none", "Apache License 2.0", "MIT", "Unlicense"],
  },
   {  
      type: 'input',
      name: 'contributors',
      message: `Provide guidelines for how potential contributors to the project.`
   },
   {  
      type: 'input',
      name: 'tests',
      message: `Provide instructions for testing the application.`
   },
   {  
      type: 'input',
      name: 'github',
      message: `What is your GitHub username?`
   },
   {  
      type: 'input',
      name: 'name',
      message: `What is your name?`
   },
   {  
      type: 'input',
      name: 'email',
      message: `What is your email address?`
   },
   {
      type: "input",
      name: "credits",
      message: "List all collaborators",
  }
];


//1.Description, 
//2.Table of Contents, 
//3.Installation, 
//4.Usage, 
//5.License, 
//6.Contributing, 
//7.Tests
//8.Questions

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
   return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
const init = () => {
   inquirer.prompt(questions)
   .then((answers) => {
      writeToFile("./results/README.md", generateMarkdown({...answers}))
   }
   )
}

// Function call to initialize app
init();
