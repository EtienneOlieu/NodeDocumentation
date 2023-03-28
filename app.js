import express, { urlencoded } from 'express';
import templateEngine from './utils/templateEngine.js';

const app = express();
app.use(express.static('public'));
app.use(urlencoded({extended: true}));

/* pages */

const login = templateEngine.readPage('./public/pages/loginpage/loginpage.html');
const loginPage = templateEngine.renderPage(login, {
  tabTitle: 'nJd | login',
  access: 'logout'
})

app.get('/login', ((req, res) => {
  res.send(loginPage);
}))

const admin = templateEngine.readPage('./public/pages/admin/admin.html');
const adminPage = templateEngine.renderPage(admin, {
  tabTitle: 'nJd | admin'
})

app.get('/admin', ((req, res) => {
  res.send(adminPage);
}))

const frontpage = templateEngine.readPage('./public/pages/frontpage/frontpage.html');
const frontpagePage = templateEngine.renderPage(frontpage, {
  tabTitle: 'nJd | welcome'
});

app.get('/', ((req, res) => {
  res.send(frontpagePage);
}));

const callbackFunctions = templateEngine.readPage('./public/pages/callback-functions/callback-functions.html');
const callbackFunctionsPage = templateEngine.renderPage(callbackFunctions, {
  tabTitle: 'nJd | callback-functions'
});

app.get('/callbackfunctions', ((req, res) => {
  res.send(callbackFunctionsPage);
}));

const codeConventions = templateEngine.readPage('./public/pages/code-conventions/code-conventions.html');
const codeConventionsPage = templateEngine.renderPage(codeConventions, {
  tabTitle: 'nJd | code-conventions'
});

app.get('/codeconventions', ((req, res) => {
  res.send(codeConventionsPage);
}));

const designAndStructure = templateEngine.readPage('./public/pages/design-and-structure/design-and-structure.html');
const designAndStructurePage = templateEngine.renderPage(designAndStructure, {
  tabTitle: 'nJd | design-and-structure'
});

app.get('/designandstructure', ((req, res) => {
  res.send(designAndStructurePage);
}));

const loops = templateEngine.readPage('./public/pages/loops/loops.html');
const loopsPage = templateEngine.renderPage(loops, {
  tabTitle: 'nJd | loops'
});

app.get('/loops', ((req, res) => {
  res.send(loopsPage);
}));

const modules = templateEngine.readPage('./public/pages/modules/modules.html');
const modulesPage = templateEngine.renderPage(modules, {
  tabTitle: 'nJd | modules'
});

app.get('/modules', ((req, res) => {
  res.send(modulesPage);
}));

const packages = templateEngine.readPage('./public/pages/packages/packages.html');
const packagesPage = templateEngine.renderPage(packages, {
  tabTitle: 'nJd | packages'
});

app.get('/packages', ((req, res) => {
  res.send(packagesPage);
}));

const redirection = templateEngine.readPage('./public/pages/redirection/redirection.html');
const redirectionPage = templateEngine.renderPage(redirection, {
  tabTitle: 'nJd | redirection'
});

app.get('/redirection', ((req, res) => {
  res.send(redirectionPage);
}));

const rendering = templateEngine.readPage('./public/pages/rendering/rendering.html');
const renderingPage = templateEngine.renderPage(rendering, {
  tabTitle: 'nJd | rendering'
});

app.get('/rendering', ((req, res) => {
  res.send(renderingPage);
}));

const restapi = templateEngine.readPage('./public/pages/REST-API/REST-API.html');
const restapiPage = templateEngine.renderPage(restapi, {
  tabTitle: 'nJd | rest-api'
});

app.get('/restapi', ((req, res) => {
  res.send(restapiPage);
}));

const terminal = templateEngine.readPage('./public/pages/terminal/terminal.html');
const terminalPage = templateEngine.renderPage(terminal, {
  tabTitle: 'nJd | terminal'
});

app.get('/terminal', ((req, res) => {
  res.send(terminalPage);
}));

const variables = templateEngine.readPage('./public/pages/variables/variables.html');
const variablesPage = templateEngine.renderPage(variables, {
  tabTitle: 'nJd | datatypes'
});

app.get('/variables', ((req, res) => {
  res.send(variablesPage);
}));



/* api */
const users = [{
  username: 'admin',
  password: 'admin'
}]

app.post('/login')

const PORT = 8080;
app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
  }
  console.log('Server is running on port:', PORT);
});
