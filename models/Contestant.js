const mongoose = require('mongoose');

const ContestantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    regdNo: {
        type: String,
        required: true,
        unique: true,
        minlength: [10, 'Regd No. must be of 10 digits'],
        maxlength: [10, 'Regd No. must be of 10 digits']
    },
    branch: {
        type: String,
        required: true,
    },
    // code: {
    //     type: String,
    //     default: ""
    // },
    // viewCount: {
    //     type: Number,
    //     default: 0
    // }
}, { timestamps: true});

const Contestant = new mongoose.model('contestant', ContestantSchema);

module.exports = Contestant;