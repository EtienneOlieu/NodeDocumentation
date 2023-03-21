import express from 'express';
import templateEngine from './utils/templateEngine.js';

const app = express();
app.use(express.static('public'));

/* pages */
const frontpage = templateEngine.readPage('./public/pages/frontpage/frontpage.html');
const frontpagePage = templateEngine.renderPage(frontpage, {
  tabTitle: 'nJd | welcome'
});

app.get('/', ((req, res) => {
  res.send(frontpagePage);
}));

const variables = templateEngine.readPage('./public/pages/variables/variables.html');
const variablesPage = templateEngine.renderPage(variables, {
  tabTitle: 'nJd | datatypes'
});

app.get('/variables', ((req, res) => {
  res.send(variablesPage);
}));

const designAndStructure = templateEngine.readPage('./public/pages/design-and-structure/design-and-structure.html');
const designAndStructurePage = templateEngine.renderPage(designAndStructure, {
  tabTitle: 'nJd | design-and-structure'
});

app.get('/design-and-structure', ((req, res) => {
  res.send(designAndStructurePage);
}));

/* api */

const PORT = 8080;
app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
  }
  console.log('Server is running on port:', PORT);
});
