import { Logger, Utils as _u } from './modules/utils.js';

/* Define a convenience method and use it
var ready = (callback) => {
  if (document.readyState != "loading") callback();
  else document.addEventListener("DOMContentLoaded", callback);
}

ready(() => {
  // Do things after DOM has fully loaded
});*/
window.addEventListener('DOMContentLoaded', (event) =>
{
    Logger('Dom ready...', 0);
});
