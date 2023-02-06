const arr = [1, 2, 3, 4, 5];

const Hello = arr.reduce((prev, curr) => {
    console.log(prev, curr);
    return prev + curr;
});

console.log("🚀 ~ file: vanila-reduer.js:6 ~ Hello ~ Hello", Hello)
