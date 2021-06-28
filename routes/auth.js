const {Router} = require('express');
const router = Router();
const User = require('../models/User');

router.post('/register', async (req, res)=>{
    try{
        const {email, password} = res.body;
        const candidate = await User.findOne({email});
        if(candidate){
            return res.sendStatus(400).json({message: 'User with this email is already exists'});
        }
        const user = new User({ email, password });
        await user.save();
        res.sendStatus(201).json({message: 'Successful registration'});
    }catch (e){
        res.sendStatus(500).json({message: 'Something wrong at server request'});
    }
});