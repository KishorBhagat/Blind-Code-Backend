const express = require('express');
const router = express.Router();
const Question = require('../models/Question');

router.post('/', async (req, res) => {
    try {
        const {round, question, minutes} = req.body;
        const data = new Question({round, question, minutes});
        const saveData = await data.save();
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
    }    
});

router.get('/', async (req, res) => {
    try {
        const question = await Question.find();
        res.status(200).json(question);
    } catch (error) {
        console.log(error);
    }
});


module.exports = router;