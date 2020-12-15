"use strict";
class Negociacoes {
    constructor() {
        this._negociacoes = [];
    }
    AddArray(negociacao) {
        this._negociacoes.push(negociacao);
    }
    getArray() {
        return [].concat(this._negociacoes);
    }
}
