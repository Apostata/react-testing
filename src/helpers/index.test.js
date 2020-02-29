import { getLetterMatchCount } from './index';

describe('getLetterMatchCount functionality', () => {
    const secretWord = 'party';

    it('Should return correct count when there are no matching letters', () => {
        const matchedCount = getLetterMatchCount(secretWord, 'bones');
        expect(matchedCount).toBe(0);
    });

    it('Should return correct count when are 3 matching letters', () => {
        const matchedCount = getLetterMatchCount(secretWord, 'train');
        expect(matchedCount).toBe(3);
    });

    it('Should return correct count when are duplicated matching letters', () => {
        const matchedCount = getLetterMatchCount(secretWord, 'parka');
        expect(matchedCount).toBe(3);
    });
});