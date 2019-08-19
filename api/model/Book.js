const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const shortid = require('shortid');
const bookSchema = new Schema({
    _id: {
        type: String,
        default: shortid.generate
    },
    title: {
        type: String

    },
    description: {
        type: String
    },
    price: {
        type: Number,
        minimum: -1.5474250491067253e+26,
        maximum: 1.5474250491067253e+26
    },
    unit: {
        type: Number,
        minimum: -1.5474250491067253e+26,
        maximum: 1.5474250491067253e+26,
        deafult: 1
    }
})
let collectionName = 'books';

mongoose.model('books', bookSchema, collectionName);
