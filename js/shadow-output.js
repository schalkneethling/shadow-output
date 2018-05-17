(function() {
    'use strict';

    function getOutput() {
        return document.getElementById('content_container');
    }

    class ShadowOutput extends HTMLElement {
        constructor() {
            super();

            const shadow = this.attachShadow({ mode: 'open' });
            const outputObj = getOutput();

            shadow.appendChild(document.importNode(getOutput().content, true));
        }

        connectedCallback() {
            ShadyCSS.styleElement(this);
        }
    }

    customElements.define('shadow-output', ShadowOutput);

})();
