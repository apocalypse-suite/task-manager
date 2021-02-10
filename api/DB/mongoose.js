const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TaskManager',{useNewUrlParser: true}).then(() =>{
    console.log('connected to mongodb successfully ')
}).catch((error) =>{
    console.log('Error occurred');
    console.log(error);
})
