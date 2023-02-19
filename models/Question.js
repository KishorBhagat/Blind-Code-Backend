const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
    round: {
        type: Number,
        default: "1"
    },
    question: {
        type: String,
        default: ""
    },
    minutes: {
        type: Number,
        default: 10
    }
});

const Question = new mongoose.model('question', QuestionSchema);

module.exports = Question;