// circle test
const circle = require("../lib/shapes/circle");

describe ('this circle', () =>{
    it('should return the logo with the shape, shape color, and text color the user chose.', () =>{
        const CIRCLE = new circle('#000000','PIN', '#FFFFFF');
        expect(CIRCLE.render()).toEqual(
            `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50" fill="#000000"/><text x="50%" y="50%" class="Rrrrr" fill="#FFFFFF" text-anchor="middle">PIN</text></svg>`
        )
    })
});