const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution tests written by student", () => {
    it("should return false if alphabet's length isn't 26", () => {
        actual = substitution("abc", "short", encode = true);
        expect(actual).to.be.false;
    })
    it("correctly translates the given phrase, based on the alphabet given to the function", () => {
        actual = substitution("message", "plmoknijbuhvygctfxrdzeswaq", encode = true)
        expected = "ykrrpik"
        expect(actual).to.equal(expected);
    })
    it("returns false if there are any duplicate characters in the given alphabet", () => {
        actual = substitution("abc", "plmoknpjbuhvygcpfxrdzspwaq", encode = true);
        expect(actual).to.be.false;
    })
    it("maintains spaces before and after encoding", () => {
        actual = substitution("a message", "plmoknijbuhvygctfxrdzeswaq", encode = true)
        expected = "p ykrrpik"
        expect(actual).to.equal(expected);
    })
    it("maintains spaces before and after decoding", () => {
        actual = substitution("p ykrrpik", "plmoknijbuhvygctfxrdzeswaq", encode = false)
        expected = "a message"
        expect(actual).to.equal(expected);
    })
    it("ignores capital letters", () => {
        actual = substitution("a message A MESSAGE", "plmoknijbuhvygctfxrdzeswaq", encode = true)
        expected = "p ykrrpik p ykrrpik"
        expect(actual).to.equal(expected);
    })
})