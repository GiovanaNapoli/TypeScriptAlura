"use strict";
const controller = new NecogicaoController();
document
    .querySelector('.form')
    .addEventListener('submit', controller.adiciona.bind(controller));
