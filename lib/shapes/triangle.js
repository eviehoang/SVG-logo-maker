// JS for making a triangle
const shape = require('../shape');

class triangle extends shape {
    constructor(shapeColor, text, textColor) {
        super(shapeColor, text, textColor);
    };
    render() {
        return `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><polygon points="100 0, 200 200, 0 200" fill="#564545"/><text font-size="large" x="50%" y="60%" class="Rrrrr" fill="${this.textColor}" text-anchor="middle">${this.text}</text></svg>`

    }
}

module.exports = triangle;