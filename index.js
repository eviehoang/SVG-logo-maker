const inquirer = require('inquirer');
const fs = require('fs');
const prompts = require('./lib/prompts.js')

// Init prompts
function init() {
    inquirer
        .prompt(prompts)
        .then(answers => {
            console.log(answers);
        })

        .catch(err => {
            console.log(err);
        });
};

init();