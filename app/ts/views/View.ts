import {logTempoDeExecucao} from '../helpers/decorators/index';

export abstract class View<T>{
    protected _elemento: JQuery;
    private _escapar: boolean = false;

    constructor(selector: string, escapar: boolean = false) {
        this._elemento = $(selector) !;
    }
    // @logTempoDeExecucao(true)
    update(model: T){
        let template = this.template(model);

        if(this._escapar){
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }

        this._elemento.html(template);
    }

    abstract template(model: T): string;
}