// JS for making a square// JS for making a square
const shape = require('../shape');

class square extends shape {
    constructor(shapeColor, text, textColor) {
        super(shapeColor, text, textColor);
    };
    render() {
        return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="100" fill="${this.shapeColor}"/><text x="50%" y="50%" class="Rrrrr" fill="${this.textColor}" text-anchor="middle">${this.text}</text></svg>`
    }
}

module.exports = square;





