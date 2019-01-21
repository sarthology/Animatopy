'use strict';

const css = require('css');
const animateJson = require('../data/animate.json')

const animationSandbox = document.querySelector('#animationSandbox')
const trigger = document.querySelector('.js--triggerAnimation');
const animation = document.querySelector('.js--animations');

console.log(animateJson);


const testAnim = (x) => {
    animationSandbox.className = " ";
    animationSandbox.classList += x + ' animated';
    animationSandbox.addEventListener('animationend', (e) => {
        e.currentTarget.className = " ";
    }, false);
};

trigger.onclick = (e) => {
    e.preventDefault();
    var anim = animation.value;
    testAnim(anim);
}

animation.onchange = (e) => {
    var anim = animation.value;
    testAnim(anim);
}