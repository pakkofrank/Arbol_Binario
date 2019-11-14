class Bin {
    constructor() {
        this._raiz = null;
    }
    get raiz() {
        return this._raiz;
    }
    set raiz(c) {
        this._raiz = c;
    }

    agregar(nuevo, r = this._raiz) {
        if (r) {
            if (nuevo.codigo < r.codigo) {
                if (r.lI) {
                    this.agregar(nuevo, r.lI);
                } else {
                    r.lI = nuevo;
                }
            } else {
                if (r.lD) {
                    this.agregar(nuevo, r.lD);
                } else {
                    r.lD = nuevo;
                }
            }
        } else {
            this._raiz = nuevo;
        }

    }
    buscar(codigo, r = this._raiz) {
        if (r && codigo != undefined) {
            if (codigo < r.codigo) {
                return this.buscar(codigo, r.lI);
            } else if (codigo > r.codigo) {
                return this.buscar(codigo, r.lD);
            } else {
                return r;
            }
        } else {
            return null;
        }
    }

    preO(r = this._raiz) {
        console.log(r.codigo);
        if (r.lI) {
            this.preO(r.lI);
        }
        if (r.lD) {
            this.preO(r.lD);
        }
    }

    inO(r = this._raiz) {
        if (r.lI) {
            this.inO(r.lI);
        }
        console.log(r.codigo);
        if (r.lD) {
            this.inO(r.lD);
        }
    }

    postO(r = this._raiz) {
        if (r.lI) {
            this.postO(r.lI);
        }
        if (r.lD) {
            this.postO(r.lD);
        }
        console.log(r.codigo);
    }
}