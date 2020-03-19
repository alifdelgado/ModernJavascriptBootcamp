const getDataCallback = (num, callback) => {
    setTimeout(() => {
        if(typeof num === 'number'){
            callback(undefined, num * 2);
        } else {
            callback('Number must be provided');
        }
    }, 2000);
};

getDataCallback(2, (err, data) => {
    if(err){
        throw new Error('Cannot get the data');
    } else {
        getDataCallback(data, (err, data) => {
            if(err){
                console.log('err');
            } else {
                console.log(data);
            }
        });
    }
});

const getDataPromise = (data) => new Promise((resolve, reject) => {
    setTimeout(() => {
        typeof num === 'number' ? resolve(num * 2) : reject('Number mus be provided');
    }, 2000);
});

getDataPromise(123).then((data) => {
    getDataPromise(data).then((data) => {
        console.log(`Promise data: ${data}`);
    }, (err) => {
        console.log(err);
    });
}, (err) => {
    console.log(err);
});

getDataPromise('10').then((data) => {
    return getDataPromise(data);
}).then((data) => {
    return getDataPromise(data);
}).catch((err) => {
    console.log(err);
});