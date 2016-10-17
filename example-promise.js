function addPromise(a, b){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a === 'number' && typeof b === 'number'){
                resolve(a + b);
            } else {
                reject('A and B must be numbers');
            }
        }, 2000);
    });
}

addPromise(3, 7).then((res) => {
    console.log('result', res);
}, (err) => {
    console.log('error', err);
});

console.log('kocak');

addPromise('asd', 7).then((res) => {
    console.log('result', res);
}, (err) => {
    console.log('error', err);
});
