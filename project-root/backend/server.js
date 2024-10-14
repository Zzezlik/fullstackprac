const express = require('express');
const app = express();

app.get('/api/data', (req, res) => {
  const data = { message: 'Привет, мир!' };
  res.json(data);
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});