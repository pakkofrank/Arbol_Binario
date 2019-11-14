class Nodo{
	constructor(n){
		this._codigo = n;
		this._lI = null;
		this._lD = null;
	}
	get codigo(){return this._codigo;}
	get lI(){return this._lI;}
	get lD(){return this._lD;}

	set lI(v){this._lI = v;}
	set lD(v){this._lD = v;}
}