// This library will hold functions that can be used to test other modules.
// sut stands for "system/subject under test"
export const it = function(description, sut) {
    console.log(`Test: ${description}`);
    try {
        sut(); // call the function I want to test
        console.log('Passed!');
    } catch (error) {
        console.error('Failed!', error);
    }
}
