import {checkForName} from "../src/client/js/nameChecker";
window.alert = jest.fn();

test('nameChecker Function', () => {

    const input =  checkForName('Picard')

    window.alert.mockClear();
})