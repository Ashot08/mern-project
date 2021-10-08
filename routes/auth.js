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
            return res.status(201).json({ message: 'Errors',  errors: errors.array(), ok: false });
        }
        try{
            const {email, password} = req.body;
            const candidate = await User.findOne({email});
            if(candidate){
                res.status(201).json({message: 'User with this email is already exists', ok: false});
            }
            const user = new User({ email, password });
            await user.save();
            res.status(201).json({message: 'Successful registration', ok: true});
        }catch (e){
            res.status(201).json({message: 'Something wrong at server request', ok: false});
        }
    });
module.exports = router;
