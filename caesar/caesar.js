const caesar = (x, num) => {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let letters = x.split('');

  let arr = [];
  for (let i = 0; i < letters.length; i++) {
    if (alphabet.includes(letters[i])) {
      let final = alphabet.indexOf(letters[i]) + num;
      while (final >= alphabet.length) {
        final -= alphabet.length;
      }
      arr.push(alphabet[final]);
    } else {
      arr.push(letters[i]);
    }
  }
  return arr.join('');
};

module.exports = caesar;
