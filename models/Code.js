const mongoose = require('mongoose');

const CodeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    regdNo: {
        type: String,
        required: true,
        unique: true,
    },
    branch: {
        type: String,
        required: true,
    },
    round: {
        type: Number
    },
    code: {
        type: String,
        default: ""
    },
    viewCount: {
        type: Number,
        default: 0
    }
}, { timestamps: true});

const Code = new mongoose.model('code', CodeSchema);

module.exports = Code;