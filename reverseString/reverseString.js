const reverseString = (str) => {
  let newString = '';

  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }

  return newString;

  //   return str.split('').reverse().join('');
};

module.exports = reverseString;
