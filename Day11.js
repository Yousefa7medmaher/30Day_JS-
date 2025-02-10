/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    let cache = {}; // Store previous results

    return function (...args) {
        let key = JSON.stringify(args); // Convert arguments to string for object key
        if (key in cache) {
            return cache[key]; // Return cached result
        }
        let result = fn(...args);
        cache[key] = result; // Store new result in cache
        return result;
    };
}
