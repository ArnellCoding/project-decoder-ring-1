const polybiusModule = (function () {
  const codeByLetter = {
    "a": 11,
    "b": 21,
    "c": 31,
    "d": 41,
    "e": 51,
    "f": 12,
    "g": 22,
    "h": 32,
    "i": 42,
    "j": 42,
    "k": 52,
    "l": 13,
    "m": 23,
    "n": 33,
    "o": 43,
    "p": 53,
    "q": 14,
    "r": 24,
    "s": 34,
    "t": 44,
    "u": 54,
    "v": 15,
    "w": 25,
    "x": 35,
    "y": 45,
    "z": 55,
}

const letterByCode = {
  "11": "a",
  "21": "b",
  "31": "c",
  "41": "d",
  "51": "e",
  "12": "f",
  "22": "g",
  "32": "h",
  "42": "(i/j)",
  "52": "k",
  "13": "l",
  "23": "m",
  "33": "n",
  "43": "o",
  "53": "p",
  "14": "q",
  "24": "r",
  "34": "s",
  "44": "t",
  "54": "u",
  "15": "v",
  "25": "w",
  "35": "x",
  "45": "y",
  "55": "z",
}

function polybius(input, encode = true) {
  const str = input.toLowerCase().split('');
  let newStr = '';

  // encoding
  if (encode === true) {
      for (let s = 0; s < str.length; s++) {
          curS = str[s];
          if (curS === " ") {
              newStr += curS
          }
          if (codeByLetter[curS]) {
              newStr += codeByLetter[curS];
          }
      }
  }

  // decoding
  if (encode === false) {

      let pairAry = [];
      let currentPair = "";
      for (let s = 0; s < str.length; s++) {
          curS = str[s];
          const isNumber = (curS.charCodeAt(0) >= 48 && curS.charCodeAt(0) <= 57);

          if (!isNumber) {
              pairAry.push(curS);
              currentPair = "";
              continue;
          }
          if (currentPair.length < 2) {
              currentPair += curS;
          }
          if (currentPair.length === 2) {
              pairAry.push(currentPair);
              currentPair = "";
          }
      }
      if(currentPair) {
        return false
      }
      for (pair of pairAry) {
          if (pair.length === 1) {
              newStr += pair;
          } else {
              newStr += letterByCode[pair];
          }
      }
  }

  return newStr;
}

return {
  polybius,
};
})();

module.exports = {
  polybius: polybiusModule.polybius
};