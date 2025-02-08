/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let arr2 = [];
    for (let index = 0; index < arr.length; index++) {
        arr2.push(fn(arr[index], index)); // Pass both value and index
    }
    return arr2;
};
