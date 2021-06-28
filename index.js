const express = require('express')
const mongoose = require('mongoose');
const app = express()
const port = 3000

async function start(){
    try{
        await mongoose.connect('mongodb+srv://ashot08:1234qwer@cluster0.upjez.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
            useNewUrlParser: true, useUnifiedTopology: true
        });
        app.listen(port, () => {
            console.log(`Example app listening at http://localhost:${port}`)
        });

    }catch (e){
        console.log('server error', e.message);
        process.exit(1);
    }
}
start();

app.use('/api/auth', require('./routes/auth'))
const Cat = mongoose.model('Cat', { name: String });
//const kitty = new Cat({ name: 'Zildjian' });
//kitty.save().then(() => console.log('meow'));


app.get('/', (req, res) => {
    res.send('Hello World!')
})



