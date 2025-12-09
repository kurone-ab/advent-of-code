import * as partOne from './gift-shop.part-one.js';
import * as partTwo from './gift-shop.part-two.js';

describe('2025년 2일 차 파트 1을 검증한다.', () => {
  it('올바르지 않은 ID는 true를 반환한다.', () => {
    const id = '11';

    const result = partOne.isInvalidId(id);

    expect(result).toBeTruthy();
  });

  it('올바른 ID는 false를 반환한다.', () => {
    const id = '12';

    const result = partOne.isInvalidId(id);

    expect(result).toBeFalsy();
  });

  it('주어진 범위에서 올바르지 않은 ID가 없을 경우, 빈 배열을 반환한다.', () => {
    const range = '1698522-1698528';

    const result = partOne.findInvalidIds(range);

    expect(result).toHaveLength(0);
  });

  it('주어진 범위에서 올바르지 않은 ID가 하나 이상일 경우, 해당하는 값을 모두 반환한다.', () => {
    const range = '11-22';

    const result = partOne.findInvalidIds(range);

    expect(result).toEqual(expect.arrayContaining([11, 22]));
    expect(result).toHaveLength(2);
  });

  it('주어진 예시에 대해 올바른 답을 반환한다.', () => {
    const input =
      '11-22,95-115,998-1012,1188511880-1188511890,222220-222224,1698522-1698528,446443-446449,38593856-38593862,565653-565659,824824821-824824827,2121212118-2121212124'.split(
        ',',
      );

    const result = partOne.solve(input);

    expect(result).toBe(1227775554);
  });
});

describe('2025년 2일 차 파트 2을 검증한다.', () => {
  it('주어진 수 n의 1을 제외한 모든 약수를 반환한다.', () => {
    const n = 100;

    const result = partTwo.allFactorsAbove1(n);

    expect(result).toEqual(expect.arrayContaining([2, 4, 5, 10, 20, 25, 50, 100]));
  })

  it('문자열을 정해진 갯수로 분리한다.', () => {
    const string = '12345';
    const part = 3;

    const result = partTwo.partition(string, part);

    expect(result).toEqual(['12', '34', '5'])
  })

  it('올바르지 않은 ID는 true를 반환한다.', () => {
    const id = '11';

    const result = partTwo.isInvalidId(id);

    expect(result).toBeTruthy();
  });

  it('올바른 ID는 false를 반환한다.', () => {
    const id = '12';

    const result = partTwo.isInvalidId(id);

    expect(result).toBeFalsy();
  });

  it('주어진 범위에서 올바르지 않은 ID가 없을 경우, 빈 배열을 반환한다.', () => {
    const range = '1698522-1698528';

    const result = partTwo.findInvalidIds(range);

    expect(result).toHaveLength(0);
  });

  it('주어진 범위에서 올바르지 않은 ID가 하나 이상일 경우, 해당하는 값을 모두 반환한다.', () => {
    const range = '11-22';

    const result = partTwo.findInvalidIds(range);

    expect(result).toEqual(expect.arrayContaining([11, 22]));
    expect(result).toHaveLength(2);
  });

  it('주어진 예시에 대해 올바른 답을 반환한다.', () => {
    const input =
      '11-22,95-115,998-1012,1188511880-1188511890,222220-222224,1698522-1698528,446443-446449,38593856-38593862,565653-565659,824824821-824824827,2121212118-2121212124'.split(
        ',',
      );

    const result = partTwo.solve(input);

    expect(result).toBe(4174379265);
  });
});
