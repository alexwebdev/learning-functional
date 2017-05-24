const map = (array, fn) => {
    let results = [];

    for (const value of array) {
        results.push(fn(value));
    }

    return results;
};

const filter = (array, fn) => {
    let results = [];

    for (const value of array) {
        fn(value) ? results.push(value) : undefined;
    }

    return results;
};

const concatAll = (array) => {
    let results = [];

    for (const value of array) {
        results.push.apply(results, value);
    }

    return results;
};

const reduce = (array, fn, initialValue) => {
    let accumulator;

    if (initialValue !== undefined) {
        accumulator = initialValue;
    } else {
        accumulator = array[0];
    }

    if (initialValue === undefined) {
        for (let i=1; i<array.length; i++) {
            accumulator = fn(accumulator, array[i]);
        }
    } else {
        for (const value of array) {
            accumulator = fn(accumulator, value);
        }
    }

    return accumulator;
};

const arrayUtils = {
    map: map,
    filter: filter,
    concatAll: concatAll,
    reduce: reduce
};

export default arrayUtils;