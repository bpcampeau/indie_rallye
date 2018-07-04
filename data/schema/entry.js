
var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var EntrySchema   = new Schema({
    indie_zone: Boolean,
    indie_village: Boolean,
    name: String,
    lastName: String,
    phone: String,
    email: String,
    favorite: String,
    email_consent: Boolean,
});

module.exports = mongoose.model('Entry', EntrySchema);