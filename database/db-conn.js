const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://127.0.0.1:27017/dataEntry', { useNewUrlParser: true, useCreateIndex: true })
    .then(() => console.log('Database connected'))
    .catch((err) => console.log(err));

module.exports = mongoose;
