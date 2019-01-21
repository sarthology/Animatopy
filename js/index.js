'use strict';

const css = require('css');
const animateJson = require('../data/animate.json')

const animationSandbox = document.querySelector('#animationSandbox')
const trigger = document.querySelector('.js--triggerAnimation');
const animation = document.querySelector('.js--animations');

require("../css/animate.min.css");
require("../css/style.css");

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
    
    animateJson.stylesheet.rules = animateJson.stylesheet.rules.map((e) => {
        if (e.name === x) {
            return e
        }
        if (e.selectors && e.selectors.indexOf("." + x) > -1) {
            return e
        }
    }).filter((e) => e != undefined)
    
    document.getElementById("cssCode").innerHTML = css.stringify(animateJson);
}