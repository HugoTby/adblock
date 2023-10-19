// ==UserScript==
// @name         AdBlock YouTube - block pop-up display
// @description  Script de desactivation de la pop up YouTube sur l'utilisation d'AdBlock
// @author       HugoTby
// @match        https://www.youtube.com/
// @icon         https://example.com/favicon.ico
// @version      0.0.1
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    // Ajoute du CSS personnalisé
    GM_addStyle(`
        /* Votre CSS personnalisé ici */
        .style-scope ytd-app, .style-scope ytd-popup-container {
            display: none;
        }
    `);
})();
