import images from './app.js';
import Logo from './img/leaselabs_logo_fullstack_rgb.png'
import { createElementFromHTML } from './utils.js';
import './index.sass';

import Header from './components/header.hbs';
import Sidebar from './components/specials/sidebar.hbs';
import Body from './components/specials/body.hbs';
import NextArticles from './components/specials/next-articles.hbs';

// Static stuff
//const container = document.body.appendChild(document.createElement('div'));
//container.id = 'content';
document.body.appendChild(createElementFromHTML(Header({logoPath: Logo})));
document.body.appendChild(createElementFromHTML(Sidebar()));
document.body.appendChild(createElementFromHTML(Body()));

// Dynamic stuff (probably not a best practice)
let promises = [];
for (const imageName in images) {
  promises.push(import('./' + images[imageName].path).then(function addArticleImage(module) {
    const newArticle = Object.assign(images[imageName], {});
    newArticle.path = module.default;
    return newArticle;
  }));
}
Promise.allSettled(promises).then(results => {
  function didSucceed(result) { return result.status == "fulfilled"; }
  function turnIntoArticle(result) { return result.value; }
  const newArticles = results.filter(didSucceed).map(turnIntoArticle);
  if (newArticles.length > 0)
    document.getElementById('body').appendChild(createElementFromHTML(NextArticles({articles: newArticles})));
});