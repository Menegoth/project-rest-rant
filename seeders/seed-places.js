const db = require('../models');

db.Place.create([{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: 'http://placekitten.com/400/400',
    founded: 1989
}, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: 'http://placekitten.com/400/400',
    founded: 2020
}])
.then(() => {
    console.log("Success");
    process.exit();
})
.catch(err => {
    console.log("Failure", err);
    process.exit();
})