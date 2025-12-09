import { findInvalidIds, partOne } from './gift-shop.js';

describe('When solving year 2025 day 2', () => {
  it('주어진 범위에서 올바르지 않은 ID가 없을 경우, 빈 배열을 반환한다.', () => {
    const range = '1698522-1698528';

    const result = findInvalidIds(range);

    expect(result).toHaveLength(0);
  });

  it('주어진 범위에서 올바르지 않은 ID가 하나 이상일 경우, 해당하는 값을 모두 반환한다.', () => {
    const range = '11-22';

    const result = findInvalidIds(range);

    expect(result).toStrictEqual([11, 22]);
  });

  it('주어진 예시에 대해 올바른 답을 반환한다.', () => {
    const input = '11-22,95-115,998-1012,1188511880-1188511890,222220-222224,1698522-1698528,446443-446449,38593856-38593862,565653-565659,824824821-824824827,2121212118-2121212124'.split(',');

    const result = partOne(input);

    expect(result).toBe(1227775554);
  });
});
