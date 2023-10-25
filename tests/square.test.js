// square test
const square = require("../lib/shapes/square");

describe ('this square', () =>{
    it('should return the logo with the shape, shape color, and text color the user chose.', () =>{
        const SQUARE = new square('#000000','PIN', '#FFFFFF');
        expect(SQUARE.render()).toEqual(
            `<svg  viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" fill="#000000"/><text font-size="large" x="50%" y="50%" class="Rrrrr" fill="#FFFFFF" text-anchor="middle">PIN</text></svg>`        )
    })
});

module.exports = square;
