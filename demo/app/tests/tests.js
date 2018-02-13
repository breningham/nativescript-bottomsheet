var Bottomsheet = require("nativescript-bottomsheet").Bottomsheet;
var bottomsheet = new Bottomsheet();

describe("greet function", function() {
    it("exists", function() {
        expect(bottomsheet.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(bottomsheet.greet()).toEqual("Hello, NS");
    });
});