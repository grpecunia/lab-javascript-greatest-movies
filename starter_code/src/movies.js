/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

const orderByYear = (arr) => {
    let newArr = [];
    newArr.push(...arr);
    newArr.sort((a,b) => ( a.year > b.year) ? 1 : -1);
    return newArr
}


// const orderByYear = (arr) => {
//     let sortByYear = (a, b) => { a - b };
//     if (arr.length < 1) return [arr[0]];
//     let newArr = [];
//     for (let i in arr){
//         newArr.push({year: arr[i].year})
//         newArr.sort(sortByYear);
//     }
//     return newArr.sort();
// };

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct


const howManyMovies = (arr) => {
    if (arr.length == 0) { 
        return 0
    } else {
    let newArr = [...arr];
    let stevenMovies = newArr.filter(obj => obj.director == 'Steven Spielberg' && obj.genre.includes('Drama') == 1);
    if (stevenMovies.length > 0){
        return stevenMovies.length;
    } else {
        return 0;
    }

    //** Check the code for debugging */
    // for (let i in stevenMovies) {
    //     if (stevenMovies.length == 0) {
    //         console.log("no movies")
    //         console.log(stevenMovies.length)
    //         return 0;
    //     }
    //     console.log("movies")
    //     console.log(stevenMovies.length)
    //     return stevenMovies.length;
    //     }
    }
}


// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

const orderAlphabetically = (arr) => {
    let newArr = [...arr];
    newArr.sort((a,b) => a.title > b.title ? 1 : -1);
    if (newArr.length > 20) {
    newArr.slice(0,20).map(movies => movies.title)
        }
    return newArr;
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(arrayOfMovies) {
    let averageRate = 0;
    let newArr = arrayOfMovies.filter(obj => Object.keys(obj).includes('rate'))
    if (arrayOfMovies.length == 0) return averageRate;
    newArr.forEach(movies => averageRate += movies.rate);
    return Math.round(100 * averageRate / arrayOfMovies.length)/100;
}


// Iteration 5: Drama movies - Get the average of Drama Movies

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
