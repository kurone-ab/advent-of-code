import { solve } from './secret-entrance.js';

describe('When solving year 2025 day 1', () => {
  it('Should throw an error with invalid input', () => {
    expect(() => solve('invalid input')).toThrow();
  })

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

    const result = solve(input);

    expect(result).toBe(3);
  });
});
