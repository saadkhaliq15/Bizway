const mongoose = require('mongoose');

// Replace 'mydatabase' with the name of your database
const uri = 'mongodb://localhost:27017/Bizway'; 

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDB Connected…')
    })
    .catch(err => console.log(err));
