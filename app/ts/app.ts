import {NegicaoController} from './controllers/NegociacaoController';
const controller = new NegicaoController();

document
    .querySelector('.form') !
    .addEventListener('submit',controller.adiciona.bind(controller));