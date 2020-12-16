System.register(["../models/index", "../views/index", "../helpers/decorators/index"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var index_1, index_2, index_3, NegicaoController, DiaDaSemana;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            },
            function (index_3_1) {
                index_3 = index_3_1;
            }
        ],
        execute: function () {
            NegicaoController = class NegicaoController {
                constructor() {
                    this._negociacoes = new index_1.Negociacoes();
                    this._negociacoesView = new index_2.NegociacoesView('#negociacoes_view', true);
                    this._mensagemView = new index_2.MensagemView('#mensagemView');
                    this._negociacoesView.update(this._negociacoes);
                }
                adiciona(event) {
                    event.preventDefault();
                    let date = new Date(this._inputData.val().replace(/-/g, ','));
                    if (!this._diaUtil(date)) {
                        this._mensagemView.update('Somente negociações em dias úteis, por favor!');
                        return;
                    }
                    const negociacao = new index_1.Negociacao(date, parseInt(this._inputQuantidade.val()), parseFloat(this._inputValor.val()));
                    this._negociacoes.AddArray(negociacao);
                    this._negociacoesView.update(this._negociacoes);
                    this._mensagemView.update("Negocição adicionada com sucesso!");
                }
                _diaUtil(date) {
                    return date.getDay() != DiaDaSemana.Sabado && date.getDay() != DiaDaSemana.Domingo;
                }
            };
            __decorate([
                index_3.domInjec("#data")
            ], NegicaoController.prototype, "_inputData", void 0);
            __decorate([
                index_3.domInjec("#quantidade")
            ], NegicaoController.prototype, "_inputQuantidade", void 0);
            __decorate([
                index_3.domInjec("#valor")
            ], NegicaoController.prototype, "_inputValor", void 0);
            exports_1("NegicaoController", NegicaoController);
            (function (DiaDaSemana) {
                DiaDaSemana[DiaDaSemana["Domingo"] = 0] = "Domingo";
                DiaDaSemana[DiaDaSemana["Segunda"] = 1] = "Segunda";
                DiaDaSemana[DiaDaSemana["Terca"] = 2] = "Terca";
                DiaDaSemana[DiaDaSemana["Quarta"] = 3] = "Quarta";
                DiaDaSemana[DiaDaSemana["Quinta"] = 4] = "Quinta";
                DiaDaSemana[DiaDaSemana["Sexta"] = 5] = "Sexta";
                DiaDaSemana[DiaDaSemana["Sabado"] = 6] = "Sabado";
            })(DiaDaSemana || (DiaDaSemana = {}));
        }
    };
});
