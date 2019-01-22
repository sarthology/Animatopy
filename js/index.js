'use strict';

const css = require('css');
const Prism = require('prismjs');

require("../css/animate.min.css");
require("../css/style.css");
require("prismjs/themes/prism-tomorrow.css");

const animateJson = require('../data/animate.json');

const animationSandbox = document.querySelector('#animationSandbox');
const trigger = document.querySelector('.js--triggerAnimation');
const animation = document.querySelector('.js--animations');
const codeSection = document.querySelector('.code-section');
const cssBlock = document.getElementById("formattedBlockCss");
const htmlBlock = document.getElementById("formattedBlockHtml");

document.onreadystatechange = function () {
    var state = document.readyState;
    if (state === 'interactive') {
        document.body.style.display = "none";
    } else if (state === 'complete') {
        setTimeout(function () {
            document.body.style.display = "block";
        }, 1000);
    }
}

trigger.onclick = (e) => {
    e.preventDefault();
    var anim = animation.value;
    testAnim(anim);
    showCss(anim);
}

animation.onchange = (e) => {
    var anim = animation.value;
    testAnim(anim);
    showCss(anim);
}
const testAnim = (x) => {
    animationSandbox.className = " ";
    animationSandbox.classList += x + ' animated';
    animationSandbox.addEventListener('animationend', (e) => {
        e.currentTarget.className = " ";
    }, false);
};

const showCss = (x) => {
    let cssObject = JSON.parse(JSON.stringify(animateJson));
    codeSection.setAttribute("style", "opacity:1");
    cssObject.stylesheet.rules = cssObject.stylesheet.rules.map((e) => {
        if (e.name === x) {
            return e
        }
        if (e.selectors && e.selectors.indexOf("." + x) > -1) {
            return e
        }
        if (e.selectors && e.selectors.indexOf(".animated") > -1) {
            return e
        }
    }).filter((e) => e != undefined)

    cssBlock.innerHTML = Prism.highlight(css.stringify(cssObject), Prism.languages.css, 'css');
    htmlBlock.innerHTML = Prism.highlight(`<div class="animated ${x}">Example</div>`, Prism.languages.css, 'css');
}