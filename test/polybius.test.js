const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius tests written by student", () => {
    it("should encore 'i' to 42", () => {
        actual = polybius("i", encode = true);
        expected = "42"
        expect(actual).to.equal(expected);
    })
    it("should encore 'j' to 42", () => {
        actual = polybius("j", encode = true);
        expected = "42"
        expect(actual).to.equal(expected);
    })
    it("should decode 42 to (i/j)", () => {
        actual = polybius("42", encode = false);
        expected = "(i/j)"
        expect(actual).to.equal(expected);
    })
    it("should ignore capital letters", () => {
        actual = polybius("Ii", encode = true);
        expected = "4242"
        expect(actual).to.equal(expected);
    })
    it("should maintain spaces when encoding", () => {
        actual = polybius("i j i", encode = true);
        expected = "42 42 42"
        expect(actual).to.equal(expected);
    })
    it("should maintain spaces when decoding", () => {
        actual = polybius("11 11 11", encode = false);
        expected = "a a a"
        expect(actual).to.equal(expected);
    })
})