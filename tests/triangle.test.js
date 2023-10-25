// triangle test
const triangle = require("../lib/shapes/triangle");

describe ('this triangl', () =>{
    it('should return the logo with the shape, shape color, and text color the user chose.', () =>{
        const TRIANGLE = new triangle('#000000','PIN', '#FFFFFF');
        expect(TRIANGLE.render()).toEqual(
            `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><polygon points="100 0, 200 200, 0 200" fill="#564545"/><text font-size="large" x="50%" y="60%" class="Rrrrr" fill="#FFFFFF" text-anchor="middle">PIN</text></svg>`
        )
    })
});

module.exports = triangle;
