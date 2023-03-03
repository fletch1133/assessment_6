const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test('The shuffled array and the original array should have the same exact length', () => {
        const array = [1, 2, 3, 4, 5];
        const shuffledArray = shuffleArray(array);
        expect(shuffledArray).toHaveLength(array.length);
      });
    
     
      test('The shuffled array should not be the same as the original array', () => {
        const array = [1, 2, 3, 4, 5];
        const shuffledArray = shuffleArray(array);
        expect(shuffledArray).not.toEqual(array);
      });
})



