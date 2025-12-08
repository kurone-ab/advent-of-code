import { partOne, partTwo } from './secret-entrance.js';

describe('When solving year 2025 day 1', () => {
  it('Should return the correct answer with example input', () => {
    const input = `L68
L30
R48
L5
R60
L55
L1
L99
R14
L82`.split('\n');

    const result = partOne(input);

    expect(result).toBe(3);
  });

  it('Should return the correct answer with example input using method 0x434C49434B', () => {
    const input = `L68
L30
R48
L5
R60
L55
L1
L99
R14
L82`.split('\n');

    const result = partTwo(input);

    expect(result).toBe(6);
  });
});
