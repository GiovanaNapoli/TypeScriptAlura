import {Negociacao} from './Negociacao';
import {MeuObjeto} from './index';

export class Negociacoes implements MeuObjeto<Negociacoes>{

    private _negociacoes: Negociacao[] = [];

    AddArray(negociacao: Negociacao): void{
        this._negociacoes.push(negociacao);
    }
    getArray(): Negociacao[]{
        return ([] as Negociacao[]).concat(this._negociacoes);
    }
    paraTexto(): void {
        console.log('-- paraTexto --');
        console.log(JSON.stringify(this._negociacoes));
    }

    ehIgualavel(negociacoes: Negociacoes): boolean {

        return JSON.stringify(this._negociacoes) == JSON.stringify(negociacoes.getArray())
    }
}