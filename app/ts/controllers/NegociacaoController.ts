class NegicaoController{
    
    //declarando variaveis privadas do tipo input 
    private _inputData: JQuery;
    private _inputQuantidade: JQuery;
    private _inputValor: JQuery;
    private _negociacoes =  new Negociacoes();
    private _negociacoesView = new NegociacoesView('#negociacoes_view');
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

        const negociacao = new Negociacao(
            //convertendo a string recebida para date, e trocando o '-' para ',' por meio de regex
            new Date(this._inputData.val().replace(/-/g, ',')),
            parseInt(this._inputQuantidade.val()),
            parseFloat(this._inputValor.val())
        );

        this._negociacoes.AddArray(negociacao);
        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update("Negocição adicionada com sucesso!");
        
    }
}