class Negociacoes {

    private _negociacoes: Negociacao[] = [];

    AddArray(negociacao: Negociacao): void{
        this._negociacoes.push(negociacao);
    }
    getArray(): Negociacao[]{
        return ([] as Negociacao[]).concat(this._negociacoes);
    }
}