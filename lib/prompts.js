// JS for all prompts to ask.

const prompts= [
    // Choose Text
    // Check that user only enters 3 values
    {
        name: 'text',
        message: 'Enter 3 letters for your text.',
        type: 'input',
        validate: (response) => {
            if (response.length > 3) {
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
        validate: (response) => {
            const hexDex = '^#[A-Fa-f0-9]{6}$'
            if (!response.match(hexDex)) {
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
        validate: (response) => {
            const hexDex = '^#[A-Fa-f0-9]{6}$'
            if (!response.match(hexDex)) {
                return console.log("\n ☹️ Please enter a valid hexcode.");
            }
            return true;
        }
    },
];

module.exports = prompts;