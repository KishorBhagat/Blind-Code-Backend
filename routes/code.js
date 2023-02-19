const express = require('express');
const router = express.Router();
const Code = require('../models/Code');


router.post('/submitcode', async (req, res) => {
    try {
        const { name, regdNo, branch, round, code, viewCount} = req.body;
        const data = new Code({name, regdNo, branch, round, code, viewCount});
        const saveData = await data.save();
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }    
});

router.get('/getcodes', async (req, res) => {
    try {
        const codes = await Code.find();
        res.status(200).json(codes);
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;


// const updatedResponse = await Code.findByIdAndUpdate(
//     req.params.regdNo,
//     {
//         $set: req.body,
//     },
//     { new: true }
// );
// res.status(200).json(updatedResponse);