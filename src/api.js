function availableTimes() {

    let times =
    [

        {id:1,time:"08:00", available: false},
        {id:2,time:"09:00", available: false},
        {id:3,time:"10:00", available: false},
        {id:4,time:"11:00", available: false},
        {id:5,time:"12:00", available: false},
        {id:6,time:"13:00", available: false},
        {id:7,time:"14:00", available: false},
        {id:8,time:"15:00", available: false},
        {id:9,time:"16:00", available: false},
        {id:10,time:"17:00", available: false},
        {id:11,time:"18:00", available: false},
        {id:12,time:"19:00", available: false},
        {id:13,time:"20:00", available: false},
        {id:14,time:"21:00", available: false},
        {id:15,time:"22:00", available: false},
    ];

    return times

}

function getRandom(arr, n) {
    let result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        let x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}

// Shuffle the original array
// let shuffle_array = getRandom(availableTimes(), availableTimes().length);

// // Set randomly the time slots that are not available
// // * Choose a number from 1 to 15 randomly - this will be the number of the slot that will be made unavailable
// let number_slots_available = Math.floor((Math.random() * 7) + 1);

// // Iterate the shuffled array and set the slots that should be available
// for ( let i = 0; i < number_slots_available; i++){
//     shuffle_array[i].available = true;
// }

// //  Return the array sorted according to its ids
// // sort by id
// let result = shuffle_array.sort((a, b) => a.id - b.id);



let fetchAPI = date => {
    let seed;

    if (date) {
        seed = 
            date.split("-")
            .join("")
            .split('')
            .map(Number)
            .reduce((a, b) => a + b)
            .toString()
            .split('')
            .map(Number)
            .reduce((a, b) => a + b)       
    }

    let tt = [...availableTimes()];

    // Shuffle the original array
    let shuffle_array = getRandom(tt, tt.length);

    // for ( let i = 0; i < seed; i++){
    //     tt[i].available = true;
    // }

    // Set randomly the time slots that are not available
    // * Choose a number from 1 to 15 randomly - this will be the number of the slot that will be made unavailable
    let number_slots_available = Math.floor((Math.random() * seed) + 1);

    // Iterate the shuffled array and set the slots that should be available
    let shArr = [...shuffle_array] 
    for ( let i = 0; i < number_slots_available; i++){
        shArr[i].available = true;
    }

    //  Return the array sorted according to its ids
    // sort by id
    let result = shArr.sort((a, b) => a.id - b.id);

    console.log("Seed: ",seed)
    console.log("api date: ",date)
    console.log("api result: ", result)
    return new Promise((resolve, reject) => {
            // resolve(tt)
            resolve(result)
            // resolve(JSON.stringify(result))
        }
    )}

export {fetchAPI}
// console.log(shuffle_array, "\n")
// console.log(number_slots_available, "\n")
// console.log(fetchAPI("2023-12-01"), "\n")

// fetchAPI("2023-01-01");

