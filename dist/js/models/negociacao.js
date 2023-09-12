export class Negociacao {
    constructor(_data, // private -> o private cria um atributo privado, que após ser criado só pode ser definido através do construtor ou por métodos da própria classe.
    _quantidade, // readonly -> permite acessar os atributos APENAS para leitura.
    _valor) {
        this._data = _data;
        this._quantidade = _quantidade;
        this._valor = _valor;
    }
    get data() {
        const data = new Date(this._data.getTime());
        return this.data;
    }
    get volume() {
        return this._quantidade * this._valor;
    }
}
