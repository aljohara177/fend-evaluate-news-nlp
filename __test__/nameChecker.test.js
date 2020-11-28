import { TestScheduler } from "jest";
import {checkForName} from "../src/client/js/nameChecker";

test('nameChecker Function', () => {
    const input =  checkForName('Picard')
    expect(input).toBeCalled();
    //expect(input).toBeDefined();
})