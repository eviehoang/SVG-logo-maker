// JS for checking which shape was chosen.
const circle = require("./circle");
const square = require("./square");
const triangle = require("./triangle");

function pickShape(response) {

    if (response.shape === 'Square') {
        let chosenShape = new square(response.shapeColor, response.text, response.texColor);
        return chosenShape.render()
    }
    if (response.shape === 'Circle') {
        let chosenShape = new circle(response.shapeColor, response.text, response.texColor);
        return chosenShape.render()
    }
    if (response.shape === 'Triangle') {
        let chosenShape = new triangle(response.shapeColor, response.text, response.texColor);
        return chosenShape.render()
    }
};

module.exports = pickShape;
