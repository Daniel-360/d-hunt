// connecing mongoose db
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/personal', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });



// let mongoDB = 'mongodb://localhost:27017'

// // mongoose.set('useFindAndModify', false);
// mongoose.connect(mongoDB, {useNewUrlParser : true,useUnifiedTopology: true});

// mongoose.connection.on('error', (err) => {
// 	console.log('DB connection error');
// })

// mongoose.connection.on('connected', (err) => {
// 	console.log('DB connected');
// })