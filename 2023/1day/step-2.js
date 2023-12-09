const testString = ``;

const firstNumberPattern = /.*?(zero|one|two|three|four|five|six|seven|eight|nine|\d).*$/gim;
const lastNumberPattern = /.*(zero|one|two|three|four|five|six|seven|eight|nine|\d).*$/gim;

function* extractMatchedGroup(string, regex) {
  let result;
  while ((result = regex.exec(string)) !== null) {
    const [_, group] = result;
    yield group;
  }
}

const numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
const parseNumber = value => {
  const indexOfValue = numbers.indexOf(value);
  if (indexOfValue > 0) return indexOfValue;
  return Number(value);
}

const firstNumbers = [...extractMatchedGroup(testString, firstNumberPattern)].map(parseNumber);
const lastNumbers = [...extractMatchedGroup(testString, lastNumberPattern)].map(parseNumber);

const result = firstNumbers
  .map((it, idx) => parseInt(`${it}${lastNumbers[idx]}`, 10))
  .reduce((acc, cur) => acc + cur, 0);
console.log(result);
