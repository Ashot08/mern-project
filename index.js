const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 5000;
const cors = require('cors');

app.use(express.json({extended: true}));

async function start(){
    try{
        await mongoose.connect('mongodb+srv://ashot08:1234qwer@cluster0.upjez.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        app.listen(port, () => {
            console.log(`MERN app listening at http://localhost:${port}`)
        });

    }catch (e){
        console.log('server error', e.message);
        process.exit(1);
    }
}
start();

app.use(cors({
    origin: 'http://localhost:3000',
}));

app.use('/api/auth', require('./routes/auth'));

app.get('/', (req, res) => {
    res.send('Hello World!')
})



