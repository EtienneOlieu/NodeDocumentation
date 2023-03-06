import express from 'express';
import path from 'path';

const app = express();

/* pages */

app.get('/', ((req, res) => {
  res.sendFile(path.resolve('frontpage/frontpage.html'));
}));

/* api */

const PORT = 8080;
app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
  }
  console.log('Server is running on port:', PORT);
});
