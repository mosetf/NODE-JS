console.clear();
const assert = require('assert').strict;
/*
try {
    assert.deepStrictEqual({a:'5'}, {a:'5'});
    console.log('No error occured');
} catch(error){
    console.log('Error:', error)
}
*/

//assert.doesnotthrow()
 try {
    assert.doesNotThrow(
        () => {
            throw new TypeError(' the wrong value error');
        },
        /abcd/,
        'Whoops'
    );
 } catch(error){
    console.log("error", error);
 }

