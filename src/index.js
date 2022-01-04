module.exports = function toReadable(number) {
  const dictionary = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
  }
  if (number === 0) {
    return 'zero';
  }
  let result = [];
  let grade = 1;
  while (number > 0) {
    if (grade === 1) {
      let tens = number % 100;
      if (tens === 0) {
        number = Math.floor(number / 100);
      }
      else if (tens < 10) {
        result.push(dictionary[number % 10] + ' ');
        number = Math.floor(number / 100);
      }
      else if (tens >= 10 && tens <= 20) {
        result.push(dictionary[tens] + ' ');
        number = Math.floor(number / 100);
      }
      else {
        let unit = number % 10;
        let dozens = tens - unit;
        if (unit === 0) {
          result.push(dictionary[dozens] + ' ');
        }
        else {
          result.push(dictionary[dozens] + ' ' + dictionary[unit] + ' ');
        }
        number = Math.floor(number / 100);
      }
    }
    if (grade === 2) {
      result.push(dictionary[number % 10] + ' ' + 'hundred' + ' ');
      number = Math.floor(number / 10);
    }
    grade++;
  }
  return result.reverse().join('').trim();
}
