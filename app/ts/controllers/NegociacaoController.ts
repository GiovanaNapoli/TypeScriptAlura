import {Negociacao, Negociacoes, NegociacaoParcial} from '../models/index';
import {MensagemView, NegociacoesView} from '../views/index';
import {domInjec, throttle} from '../helpers/decorators/index';
import {NegociacaoService} from '../services/index';
import {imprime} from '../helpers/index';

export class NegicaoController{
    
    //declarando variaveis privadas do tipo input
    @domInjec("#data") 
    private _inputData: JQuery;

    @domInjec("#quantidade")
    private _inputQuantidade: JQuery;

    @domInjec("#valor")
    private _inputValor: JQuery;

    private _negociacoes =  new Negociacoes();
    private _negociacoesView = new NegociacoesView('#negociacoes_view', true);
    private _mensagemView = new MensagemView('#mensagemView');

    private _negociacaoService = new NegociacaoService();

    constructor(){
        //aqui convertemos elas para input element
        // this._inputData = $('#data');
        // this._inputQuantidade = $('#quantidade');
        // this._inputValor = $('#valor');
        this._negociacoesView.update(this._negociacoes);
    }

    // @logTempoDeExecucao()
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
        imprime(negociacao, this._negociacoes);
    }

    private _diaUtil(date: Date){
        return date.getDay() != DiaDaSemana.Sabado && date.getDay() != DiaDaSemana.Domingo;
    }

    @throttle()
    async importaDados(){

        try{
            const negociacoesParaImportar = await this._negociacaoService
                .obterNegociacoes(res => {

                    if(res.ok){
                        return res;
                    }else{
                        throw new Error(res.statusText);
                    }
                });
            const negociacoesJaImportadas = this._negociacoes.getArray();
            negociacoesParaImportar
                .filter(negociacao =>
                    !negociacoesJaImportadas.some(jaImportada => 
                        negociacao.ehIgualavel(jaImportada)))
                .forEach(negociacao => 
                    this._negociacoes.AddArray(negociacao))

            this._negociacoesView.update(this._negociacoes);
        }catch(err) {
            this._mensagemView.update(err.message);
        }
            
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