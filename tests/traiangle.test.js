// triangle test
const triangle = require("../lib/shapes/triangle");

describe ('this triangl', () =>{
    it('should return the logo with the shape, shape color, and text color the user chose.', () =>{
        const TRIANGLE = new triangle('#000000','PIN', '#FFFFFF');
        expect(TRIANGLE.render()).toEqual(
            `<svg id="triangle" viewBox="0 0 100 100"><polygon points="50 15, 100 100, 0 100" fill="#000000"/><text x="50%" y="50%" class="Rrrrr" fill="#FFFFFF" text-anchor="middle">PIN</text></svg>`
        )
    })
});

module.exports = triangle;
