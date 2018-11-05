const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = mongoose.model('Product', new Schema({
    name: String, 
    detail: Array,
    info: Object,
    type: String
}), 'products');