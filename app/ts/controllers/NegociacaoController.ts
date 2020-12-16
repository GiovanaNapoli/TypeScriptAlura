import {Negociacao, Negociacoes} from '../models/index';
import {MensagemView, NegociacoesView} from '../views/index';

export class NegicaoController{
    
    //declarando variaveis privadas do tipo input 
    private _inputData: JQuery;
    private _inputQuantidade: JQuery;
    private _inputValor: JQuery;
    private _negociacoes =  new Negociacoes();
    private _negociacoesView = new NegociacoesView('#negociacoes_view', true);
    private _mensagemView = new MensagemView('#mensagemView');

    constructor(){
        //aqui convertemos elas para input element
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._negociacoesView.update(this._negociacoes);
    }

    adiciona(event: Event){
        
        event.preventDefault();

        let date = new Date((this._inputData.val() as string).replace(/-/g, ','));

        if(!this._diaUtil(date)){

            this._mensagemView.update('Somente negociações em dias úteis, por favor!');
            return 
        }

        const negociacao = new Negociacao(
            //convertendo a string recebida para date, e trocando o '-' para ',' por meio de regex
            date,
            parseInt(<string>this._inputQuantidade.val()),
            parseFloat(<string>this._inputValor.val())
        );

        this._negociacoes.AddArray(negociacao);
        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update("Negocição adicionada com sucesso!");
        
    }

    private _diaUtil(date: Date){
        return date.getDay() != DiaDaSemana.Sabado && date.getDay() != DiaDaSemana.Domingo;
    }
}
enum DiaDaSemana{
    Domingo,
    Segunda,
    Terca,
    Quarta,
    Quinta,
    Sexta,
    Sabado
}