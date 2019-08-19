const mongoose = require('mongoose');

const shortid = require('shortid');
const Schema = mongoose.Schema;
const purchaseSchema = new Schema({
    _id: {
        type: String,
        default: shortid.generate
    },
    email: {
        type: String
    },
    book_id: {
        type: String
    }

})
let collectionName = 'purchase';
mongoose.model('purchase', purchaseSchema, collectionName);

