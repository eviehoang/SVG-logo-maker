const inquirer = require('inquirer');
const fs = require('fs');
const prompts = require('./lib/prompts.js')
const pickShape = require('./lib/shapes/pickShape.js')
const svgImages = "./images/image.svg"

// Function to make the SVG File and add it to the folder.
function makeSVG(response) {
    const svg = pickShape(response);
    fs.writeFile(svgImages, svg, () =>
        console.log('Making Logo')
    );
}

// Init prompts
function init() {
    inquirer
        .prompt(prompts)
        .then(response => {
            console.log(response);
            makeSVG(response);
        })

        .catch(err => {
            console.log(err);
        });
};

init();