// JS for making a Circle
const shape = require('../shape');

class circle extends shape {
    constructor(shapeColor, text, textColor) {
        super(shapeColor, text, textColor);
    };
    render() {
        return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50" fill="${this.shapeColor}"/><text x="50%" y="50%" class="Rrrrr" fill="${this.textColor}" text-anchor="middle">${this.text}</text></svg>`
    }
}

module.exports = circle;