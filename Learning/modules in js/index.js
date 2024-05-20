console.clear();
const assert = require('assert').strict;

try {
    assert.deepStrictEqual({a:'5'}, {a:'5'});
    console.log('No error occured');
} catch(error){
    console.log('Error:', error)
}