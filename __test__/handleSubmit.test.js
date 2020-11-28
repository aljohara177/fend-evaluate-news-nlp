import { handleSubmit } from "../src/client/js/formHandler"
import {getApiKey} from "../src/client/js/formHandler"
import "babel-polyfill"



    // The test() function has two arguments - a string description, and an actual test as a callback function.  
    test("Testing the handleSubmit() function", () => {
        //const button 
        $('.submit').click();

        // Assert that the fetchCurrentUser function was called, and that the
        // #username span's inner text was updated as we'd expect it to.
        expect(handleSubmit).toBeCalled();
        expect(getApiKey).toBeCalled();
           // Define the input for the function, if any, in the form of variables/array
           const formText = "king"
           // Define the expected output, if any, in the form of variables/array
           // The expect() function, in combination with a Jest matcher, is used to check if the function produces the expected output
           // The general syntax is `expect(myFunction(arg1, arg2, ...)).toEqual(expectedValue);`, where `toEqual()` is a matcher
           expect(handleSubmit).toBeDefined();
});