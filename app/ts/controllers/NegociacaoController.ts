class NecogicaoController{
    
    //declarando variaveis privadas do tipo input 
    private _inputData: HTMLInputElement;
    private _inputQuantidade: HTMLInputElement;
    private _inputValor: HTMLInputElement;
    private _negociacoes =  new Negociacoes();
    private _negociacoesView = new NegociacoesView('#negociacoes_view');

    constructor(){
        //aqui convertemos elas para input element
        this._inputData = <HTMLInputElement>document.querySelector('#data')!;
        this._inputQuantidade = <HTMLInputElement>document.querySelector('#quantidade')!;
        this._inputValor = <HTMLInputElement>document.querySelector('#valor')!;
        this._negociacoesView.update(this._negociacoes);
    }

    adiciona(event: Event){

        event.preventDefault();

        const negociacao = new Negociacao(
            //convertendo a string recebida para date, e trocando o '-' para ',' por meio de regex
            new Date(this._inputData.value.replace(/-/g, ',')),
            parseInt(this._inputQuantidade.value),
            parseFloat(this._inputValor.value)
        );

        this._negociacoes.AddArray(negociacao);
        this._negociacoesView.update(this._negociacoes);
        
    }
}