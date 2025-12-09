export const allFactorsAbove1 = (n) => {
  const factors = new Set();
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      factors.add(i);
      factors.add(n / i);
    }
  }
  factors.add(n);
  return Array.from(factors);
};

export const partition = (string, part) => {
  const elementLength = Math.ceil(string.length / part);
  return Array.from({ length: part }, (_, idx) => string.slice(idx * elementLength, (idx + 1) * elementLength));
};

export const isInvalidId = (id) => {
  const stringId = String(id);
  for (let i = 2; i < stringId.length + 1; i++) {
    const partitioningArray = partition(stringId, i);
    const first = partitioningArray[0];
    if (partitioningArray.every((it) => it === first)) {
      return true;
    }
  }
  return false;
};

export const findInvalidIds = (range) => {
  const [start, end] = range.split('-');
  return Array.from({ length: Number(end) - Number(start) + 1 }, (_, idx) => Number(start) + idx).filter(isInvalidId);
};

export const solve = (ranges) => {
  return ranges.reduce((acc, range) => {
    const invalidIds = findInvalidIds(range);
    return acc + invalidIds.reduce((sum, id) => sum + id, 0);
  }, 0);
};

const input =
  '119-210,907313-1048019,7272640820-7272795557,6315717352-6315818282,42-65,2234869-2439411,1474-2883,33023-53147,1-15,6151-14081,3068-5955,65808-128089,518490556-518593948,3535333552-3535383752,7340190-7548414,547-889,34283147-34389716,44361695-44519217,607492-669180,7071078-7183353,67-115,969-1469,3636264326-3636424525,762682710-762831570,827113-906870,205757-331544,290-523,86343460-86510016,5536957-5589517,132876-197570,676083-793651,23-41,17920-31734,440069-593347';
console.log(solve(input.split(',')));
