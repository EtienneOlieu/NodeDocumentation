import fs from 'fs';

function readPage(pagePath) {
    return fs.readFileSync(pagePath.toString());
}
  
function renderPage(page, config = {}) {
  const navbar = fs.readFileSync('./public/components/navbar/navbar.html').toString()
    .replace('$TAB_TITLE', config.tabTitle || 'Node JS doc');

  const footer = fs.readFileSync('./public/components/footer/footer.html').toString()
    .replace('$FOOTER_YEAR', `© Etienne Olieu - ${new Date().getFullYear()}`);

  return navbar + page + footer;
}

export default {
  renderPage,
  readPage,
};
