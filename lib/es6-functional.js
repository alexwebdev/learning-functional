const forEach = (array, fn) => {
    let i;
    for (i=0; i<array.length; i++) {
        fn(array[i]);
    }
};

const times = (times, fn) => {
    let i;
    for (i=0; i<times; i++) {
        fn(i);
    }
};

const every = (array, fn) => {
    let result = true;
    for (const value of array) {
        result = result && fn(value);
    }
    return result;
};

const some = (array, fn) => {
    let result = false;
    for (const value of array) {
        result = result || fn(value);
    }
    return result;
};

const tap = (value) => {
    return (fn) => (
        typeof(fn) === 'function' && fn(value), console.log(value)
    );
};

const memoized = (fn) => {
    const lookupTable = {};

    return (arg) => lookupTable[arg] || (lookupTable[arg] = fn(arg));
};

export { forEach, times, every, some, tap, memoized };