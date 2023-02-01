const mongoose = require("mongoose");

const catScheme = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        min: 0,
        max: 30
    },
    color: {
        type: String,
        required: false
    },
    weight: {
        type: Number,
        min: 1,
        max: 25,
        required: false
    }    
})

const Cat = mongoose.model('Cat', catScheme);
//module.exports = Cat;