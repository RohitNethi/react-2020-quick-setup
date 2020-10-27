const express = require('express');

const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'dist')));
app.use('/public', express.static(`${__dirname}/public`));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`listening on port: ${process.env.PORT}` || 3000);
});
