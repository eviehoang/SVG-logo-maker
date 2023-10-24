// JS for all prompts to ask.
// Require Color files to get colors
const colors = require("./colors.js")

const prompts= [
    // Choose Text
    // Check that user only enters 3 values
    {
        name: 'text',
        message: 'Enter 3 letters for your text.',
        type: 'input',
        validate: (text) => {
            if (text.length > 3) {
                return console.log("\n ☹️ Text must be three characters or less!");
            }
            return true;
        }
    },

    // Text Color
    // Hexcode and/or Keyword (Validate)
    {
        name: 'textColor',
        message: 'Enter a Hexcode for the text color starting with a #.',
        type: 'input',
        validate: (textColor) => {
            const hexDex = '^#[A-Fa-f0-9]{6}$'
            if (!textColor.match(hexDex)) {
                return console.log("\n ☹️ Please enter a valid hexcode.");
            }
            return true;
        }
    },
   
    // Shape
    // List Available Shape
    {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape.',
        choices: ['Square', 'Circle', 'Triangle'],
    },

    // Shape Color
    // Color is Hexcode and/or Keyword (Validate)
    {
        name: 'shapeColor',
        message: 'Enter a Hexcode for the shape color starting with a #.',
        type: 'input',
        validate: (shapeColor) => {
            const hexDex = '^#[A-Fa-f0-9]{6}$'
            if (!shapeColor.match(hexDex)) {
                return console.log("\n ☹️ Please enter a valid hexcode.");
            }
            return true;
        }
    },
];

module.exports = prompts;