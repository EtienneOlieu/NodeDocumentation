import express from 'express';
import templateEngine from './utils/templateEngine.js';

const app = express();
app.use(express.static('public'));

/* pages */
const frontpage = templateEngine.readPage('./public/pages/frontpage/frontpage.html');
const frontpagePage = templateEngine.renderPage(frontpage, {
  tabTitle: 'nJd | welcome'
});

const datatypes = templateEngine.readPage('./public/pages/datatypes/datatypes.html');
const datatypesPage = templateEngine.renderPage(datatypes, {
  tabTitle: 'nJd | datatypes'
});

app.get('/', ((req, res) => {
  res.send(frontpagePage);
}));

app.get('/datatypes', ((req, res) => {
  res.send(datatypesPage);
}));

/* api */

const PORT = 8080;
app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
  }
  console.log('Server is running on port:', PORT);
});
