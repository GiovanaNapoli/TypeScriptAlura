"use strict";
class NegicaoController {
    constructor() {
        this._negociacoes = new Negociacoes();
        this._negociacoesView = new NegociacoesView('#negociacoes_view');
        this._mensagemView = new MensagemView('#mensagemView');
        //aqui convertemos elas para input element
        this._inputData = document.querySelector('#data');
        this._inputQuantidade = document.querySelector('#quantidade');
        this._inputValor = document.querySelector('#valor');
        this._negociacoesView.update(this._negociacoes);
    }
    adiciona(event) {
        event.preventDefault();
        const negociacao = new Negociacao(
        //convertendo a string recebida para date, e trocando o '-' para ',' por meio de regex
        new Date(this._inputData.value.replace(/-/g, ',')), parseInt(this._inputQuantidade.value), parseFloat(this._inputValor.value));
        this._negociacoes.AddArray(negociacao);
        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update("Negocição adicionada com sucesso!");
    }
}
