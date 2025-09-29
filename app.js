const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
    <h1>Express App</h1>
    <p>Status: <span id="status">Loading...</span></p>
    <script>
      fetch('http://localhost:5000/api/data')
        .then(r => r.json())
        .then(data => {
          document.getElementById('status').innerHTML = 'Connected to Flask API! ✅';
        });
    </script>
  `);
});

app.listen(3000, '0.0.0.0', () => {
  console.log('Express running on port 3000');
});
