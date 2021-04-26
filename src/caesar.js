const caesarModule = (function() {
  const alph = 'abcdefghijklmnopqrstuvwxyz'.split('');


  function caesar(input, shift, encode = true) {
      const str = input.toLowerCase().split('');
      let newStr = ''
      // early returns
      if (!shift || shift === 0 || shift < -25 || shift > 25) {
          return false
      }

      for (let s = 0; s < str.length; s++) {
          for (let a = 0; a < alph.length; a++) {
            const curS = str[s];
            const curA = alph[a];
            const isLetter = (curS.charCodeAt(0) >= 97 && curS.charCodeAt(0) <= 122);
              if (!isLetter) {
                newStr += curS
                break;
              }
              // encoding
              if (curA === curS && encode === true) {
                  const newAlphIndex = (a + shift + 26) % 26
                  const newLetter = alph[newAlphIndex];
                  newStr += newLetter
                  break;
              }
              // decoding 
              if (curA === curS && encode === false) {
                  const newAlphIndex = (a - shift + 26) % 26;
                  const newLetter = alph[newAlphIndex];
                  newStr += newLetter
                  break;
              }
          }
      }
    return newStr
  }
  return {
      caesar,
  };
})();

module.exports = {
  caesar: caesarModule.caesar
};