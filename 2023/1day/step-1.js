const testString = ``;

const regex = /(\d)[a-z0-9]*?(\d)?[a-z]*$/gim;
function* extractNumber(string) {
  let result;
  while ((result = regex.exec(string)) !== null) {
    const [_, first, last = first] = result;
    yield parseInt(`${first}${last}`, 10);
  }
}

const sum = [...extractNumber(testString)].reduce((acc, cur) => acc + cur, 0);
console.log(sum);
