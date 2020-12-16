export class Negociacao{

    constructor(private _data: Date, private _quantidade: number, private _valor: number){}

    get data (){
        return this._data;
    }
    set data(data){
        this._data = data;
    }
    get quantidade (){
        return this._quantidade;
    }
    set quantidade(quantidade){
        this._quantidade = quantidade;
    }
    get valor (){
        return this._valor;
    }
    set valor(valor){
        this._valor = valor;
    }
    get volume (){
        return this._quantidade * this._valor;
    }
}