const express = require('express');
const router = express.Router();
const Contestant = require('../models/Contestant');


router.post('/register', async (req, res) => {
    try {
        const {name, regdNo, branch} = req.body;
        const newContestant = new Contestant({
            name, 
            regdNo, 
            branch,
        });
        const contestant = await newContestant.save();
        const payload = {
            payload: {
                name,
                regdNo,
                branch
            }
        }
        res.status(200).json(payload);
    } catch (error) {
        console.log(error);
    }
});

router.get('/contestants', async (req, res) => {
    try {
        const contestants = await Contestant.find();
        res.status(200).json(contestants);
    } catch (error) {
        res.status(500).json({ error: {"message": "Something went wrong!"} });
    }
});

// router.get('/contestants/:regdno', async (req, res) => {
    
// });

module.exports = router;