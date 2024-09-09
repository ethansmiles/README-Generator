// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your projet?',
    },
    {
        type: 'input',
        name: 'description',
        message:'Provide a short description of your project.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps to install your project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Give an example for the use of your project.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for the project.',
        choices: ['Apache 2.0', 'BSD 3-Clause', 'None',],
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please provide your github username.',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please provide your associated github email.',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    if (fileName === '') {
        return 'Please enter the file name for your project.';
    }
    if (data === '') {
        return 'Please enter the data for your project.';
    }
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('README.md had been generated!')
);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const markdown = generateMarkdown(answers);
        writeToFile('README.md', markdown);
    });
}

// Function call to initialize app
init(
    function init() {
        inquirer.prompt(quesetions)
        .then((answers) => {
            const markdown = generateMarkdown(answers);
            writeToFile('README.md', markdown);
            console.log('README.md has been generated!');
        });
    }
    );
