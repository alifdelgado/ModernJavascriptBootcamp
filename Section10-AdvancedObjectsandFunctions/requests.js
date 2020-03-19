const getPuzzle = async (wordCount) => {
    const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`);
    if(response.status===200){
        const data = await response.json();
        return data.puzzle;
    } else {
        throw new Error('Unable to get puzzle');
    }
};

const getCountry = async (countryCode) => {
    const response = await fetch('http://restcountries.eu/rest/v2/all');
    if(response.status===200) {
        const data = await response.json();
        return data.find((country) => country.alpha2Code === countryCode).name;
    } else {

    }
};

// const getCountryOld = (countryCode) => {
//     return fetch('http://restcountries.eu/rest/v2/all').then((response) => {
//         if(response.status===200){
//             return response.json();
//         } else {
//             throw new Error('Unable to fetch data');
//         }
//     }).then((data) => {
//         return data.find((country) => country.alpha2Code === countryCode).name;
//     }).catch((error) => {
//         return error;
//     });
// };

// const getPuzzleOld = (wordCount) => {
//     return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response) => {
//         if(response.status===200) {
//             return response.json();
//         } else {
//             throw new Error('Unable to fetch puzzle');
//         }
//     }).then((data) => {
//         return data.puzzle;
//     }).catch((error) => {
//         return error;
//     });
// };

// new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest();
//     request.addEventListener('readystatechange', (e) => {
//         if(e.target.readyState === 4 && e.target.status === 200){
//             const data = JSON.parse(e.target.responseText);
//             resolve(data.puzzle);
//         } else if (e.target.readyState === 4){
//             reject('An error has taken place');
//         }
//     });
//     request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`);
//     request.send();
// });

// new Promise((resolve, reject) => {
//     const countryRequest = new XMLHttpRequest();
//     countryRequest.addEventListener('readystatechange', (e) => {
//         if(e.target.readyState===4 && e.target.status===200){
//             const data = JSON.parse(e.target.responseText);
//             const country = data.find((country) => country.alpha2Code === countryCode);
//             resolve(country.name);
//         } else if(e.target.readyState===4){
//             reject('Unable to fetch data');
//         }
//     });
//     countryRequest.open("GET", "http://restcountries.eu/rest/v2/all");
//     countryRequest.send();
// });