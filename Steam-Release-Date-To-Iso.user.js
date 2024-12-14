// ==UserScript==
// @name         Steam Release Date to ISO
// @description  Changes Steam release date to ISO format.
// @version      1.0.0
// @author       tariel36
// @namespace    https://github.com/tariel36/Steam-Release-Date-To-Iso
// @match        https://store.steampowered.com/app/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @updateURL    https://
// @downloadURL  https://
// @license      MIT
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  function execute() {
      const releaseDateDiv = document.querySelector('.release_date');

      if (!releaseDateDiv) {
          return;
      }

      const dateDiv = releaseDateDiv.querySelector('.date');

      if (!dateDiv) {
          return;
      }

      const date = new Date(dateDiv.innerText);
      const isoString = date.toISOString().split('T')[0].split('.')[0];

      dateDiv.innerText = isoString;
  }

  execute();
})();

