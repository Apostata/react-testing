import { getStringByLanguage } from './strings';

const languages = {
    pt_br: {
        submit: 'Enviar'
    },
    en:{
        submit: 'Submit'
    },
    emoji:{
        submit: '🚀'
    },
    orcsh:{}
};

const mockWarn = jest.fn();
const originalWarn = console.warn;


describe('Language', ()=>{
    beforeEach(()=>{
        console.warn = mockWarn;
    });

    afterEach(()=>{
        mockWarn.mockClear();
        console.warn = originalWarn;
    })

    it('Should returs correct submit string from english', ()=>{
        const resultString = getStringByLanguage('en', 'submit', languages);
        expect(resultString).toBe('Submit');
        expect(mockWarn).not.toHaveBeenCalled();
    });

    it('Should returs correct submit string from emoji', ()=>{
        const resultString = getStringByLanguage('emoji', 'submit', languages);
        expect(resultString).toBe('🚀');
        expect(mockWarn).not.toHaveBeenCalled();
    });

    it('Should returs correct submit string from brazilian portuguese', ()=>{
        const resultString = getStringByLanguage('pt_br', 'submit', languages);
        expect(resultString).toBe('Enviar');
        expect(mockWarn).not.toHaveBeenCalled();
    });

    it('Should returs brazilian portuguese submit string when language does not exists', ()=>{
        const resultString = getStringByLanguage('elven', 'submit', languages);
        expect(resultString).toBe('Enviar');
        expect(mockWarn).toHaveBeenCalledTimes(1);
        expect(mockWarn).toHaveBeenCalledWith("Couldn't get string [submit] for [elven]! Fallback to Brasilian Portuguese.");
    });
    it('Should returs brazilian portuguese submit string when key in that language does not exists', ()=>{
        const resultString = getStringByLanguage('orcsh', 'submit', languages);
        expect(resultString).toBe('Enviar');
        expect(mockWarn).toHaveBeenCalledTimes(1);
        expect(mockWarn).toHaveBeenCalledWith("Couldn't get string [submit] for [orcsh]! Fallback to Brasilian Portuguese.");
    });
});