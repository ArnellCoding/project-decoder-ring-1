const { expect } = require("chai");
const { caesar } = require("../src/caesar");


describe("caesar false tests written by student", () => {
    it("return false if an invalid shift is given(=0)", () => {
        actual = caesar("thinkful", 0 , encode = true);
        expect(actual).to.be.false;
        })
    it("return false if an invalid shift is given(< -25)", () => {
        actual = caesar("thinkful", -26 , encode = true);
        expect(actual).to.be.false;
        })
    it("return false if an invalid shift is given(> 25)", () => {
        actual = caesar("thinkful", 26 , encode = true);
        expect(actual).to.be.false;
        })
    it("return false if no shift is given", () => {
        actual = caesar("thinkful", null, encode = true);
        expect(actual).to.be.false;
        })
})

describe("caesar tests written by student", () => {
    it("ignores capital letters", () => {
        actual = caesar("AAAAAA", 2, encode = true);
        expected = "cccccc"
        expect(actual).to.equal(expected);
    })
    it("should handle wrapping around the alphabet", () => {
        actual = caesar("zzz", 1, encode = true);
        expected = "aaa";
        expect(actual).to.equal(expected);
    })
    it("maintain spaces and nonalphabetic symbols when encoding", () => {
        actual = caesar("abc! abc!", 1, encode = true);
        expected = "bcd! bcd!";
        expect(actual).to.equal(expected);
    })
    it("maintain spaces and nonalphabetic symbols when decoding", () => {
        actual = caesar("bcd! bcd!", 1, encode = false);
        expected = "abc! abc!";
        expect(actual).to.equal(expected);
    })
})