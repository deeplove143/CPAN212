const express = require('express');
const router = express.Router();

// /name route
router.get('/name', (req, res) => {
  res.send('Your Name');
});

// /greeting route
router.get('/greeting', (req, res) => {
  res.send('Your Name - Student #123456789');
});

// /add?x=5&y=3
router.get('/add', (req, res) => {
  const x = parseFloat(req.query.x);
  const y = parseFloat(req.query.y);
  res.send(`Result: ${x + y}`);
});

// /calculate?a=5&b=3&operation=+
router.get('/calculate', (req, res) => {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);
  const op = req.query.operation;

  let result;
  if (op === '+') result = a + b;
  else if (op === '-') result = a - b;
  else if (op === '*') result = a * b;
  else if (op === '/') result = b !== 0 ? a / b : 'Cannot divide by zero';
  else if (op === '**') result = a ** b;
  else return res.send('Invalid operation.');

  res.send(`Result: ${result}`);
});

module.exports = router;
