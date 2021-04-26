const substitutionModule = (function () {
  const alpha = 'abcdefghijklmnopqrstuvwxyz';
  
  function substitution(input, alphabet, encode = true) {
    const str = input.toLowerCase()
    let uniqueCheck = {};
    let newStr = "";

    // Early false returns
    if (!alphabet) {
        return false
    }
    if (alphabet.length !== 26) {
        return false
    }
    for (character of alphabet) {
        if (!uniqueCheck[character]) {
            uniqueCheck[character] = 1
            continue;
        }
        if (uniqueCheck[character]) {
            return false;
        }
        uniqueCheck = {};
    }


    // encoding
    if (encode === true) {
        for (character of str) {
            if (character === " ") {
                newStr += " "
                continue;
            }
            let alphabetIndex = alpha.indexOf(character);
            let newCharacter = alphabet[alphabetIndex];
            newStr += newCharacter;
        }
    }

    // decoding
    if (encode === false) {
        for (character of str) {
            if (character === " ") {
                newStr += " "
                continue;
            }
            let alphabetIndex = alphabet.indexOf(character);
            let newCharacter = alpha[alphabetIndex];
            newStr += newCharacter;
        }
    }
    return newStr;
}

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
