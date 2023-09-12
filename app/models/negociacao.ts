export class Negociacao {
    constructor(
        private _data: Date, // private -> o private cria um atributo privado, que após ser criado só pode ser definido através do construtor ou por métodos da própria classe.
        public readonly _quantidade: number, // readonly -> permite acessar os atributos APENAS para leitura.
        public readonly _valor: number
    ) {}

    get data(): Date {
        const data = new Date(this._data.getTime());
        return this.data;
    }

    get volume(): number {
        return this._quantidade * this._valor;
    }
}