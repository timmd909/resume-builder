const express = require('express');
const app = express();

const DEFAULT_PORT = 8888;
const PORT = process.env.PDF_PORT || DEFAULT_PORT;

app.get('/', (request, response) => {
  response.send('This should be a PDF!');
});

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
