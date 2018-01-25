const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlayerSchema = new Schema ({
    firstName: { type: String },
    lastName: { type: String },
    birthDate: { type: Date },
});

mongoose.model('player', PlayerSchema);