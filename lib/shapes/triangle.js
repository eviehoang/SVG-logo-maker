// JS for making a triangle
const shape = require('../shape');

class triangle extends shape {
    constructor(shapeColor, text, textColor) {
        super(shapeColor, text, textColor);
    };
    render() {
        return `<svg id="triangle" viewBox="0 0 100 100"><polygon points="50 15, 100 100, 0 100" fill="${this.shapeColor}"/><text x="50%" y="50%" class="Rrrrr" fill="${this.textColor}" text-anchor="middle">${this.text}</text></svg>`

    }
}

module.exports = triangle;