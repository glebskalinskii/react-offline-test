import { capitalizeFirstLetter } from './index';

describe('Utils', () => {
  test('capitalizeFirstLetter', () => {
    const testWord = 'test';
    const capitalized = capitalizeFirstLetter(testWord);

    const isCapitalized = testWord[0].toUpperCase() === capitalized[0];

    expect(isCapitalized).toBe(true);
  });
});
