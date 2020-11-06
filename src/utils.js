/**
 * Trims, then converts HTML strings into DOM elements or Nodes.
 * Function from https://stackoverflow.com/a/494348
 */
function createElementFromHTML(htmlString, isMulti = false) {
  var div = document.createElement('div');
  div.innerHTML = htmlString.trim();

  // Change this to div.childNodes to support multiple top-level nodes
  return isMulti ? div.childNodes : div.firstChild;
}

export {
  createElementFromHTML
};