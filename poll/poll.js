const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express.Router();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

// Define the poll data
const poll = {
  question: 'What is your favorite color?',
  options: ['Red', 'Green', 'Blue'],
  results: [0, 0, 0],
};


// Render the poll form
app.get('/', (req, res) => {
  res.render('poll', { poll });
});

// Handle form submission
app.post('/', (req, res) => {
  const index = req.body.option;
  poll.results[index]++;
  res.redirect('/results');
});

// Render the poll results
app.get('/results', (req, res) => {
  const totalVotes = poll.results.reduce((a, b) => a + b, 0);
  const percentages = poll.results.map(result => totalVotes > 0 ? Math.round(result / totalVotes * 100) : 0);
  res.render('results', { poll, totalVotes, percentages });
});

// Start the server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
