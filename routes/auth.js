const {Router} = require('express');
const router = Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');

router.post('/register',
    body('email').isEmail(),
    body('password').isLength({ min: 5 }),
    async (req, res)=>{
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ message: 'Errors',  errors: errors.array() });
        }
        try{
            const {email, password} = req.body;
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
module.exports = router;
