class Cliente{
    constructor(nombre,numCuenta, saldo){
        this._nombre = nombre
        this._numCuenta = numCuenta
        this._saldo = saldo
    }
getRetiro(cantidad){
    if(cantidad>this._saldo){
        return "saldo insufienciente"
    }else{
        return this._saldo = this._saldo - cantidad
    }
}
abono(cantidad){
    return this._saldo= this._saldo + cantidad
}
}

const btnRetiro = document.getElementById("btnRetiro")
const cliente1 = new Cliente("Jesus", 123123, 0)
const btnAbono = document.getElementById("btnAbono")
btnRetiro.addEventListener("click",()=>{
    const cantidad = document.getElementById("cantidad").value
    const response = document.getElementById("respuesta")

    response.innerText = cliente1.getRetiro(cantidad)
})

btnAbono.addEventListener("click",()=>{
    const cantidad= parseFloat(document.getElementById("cantidad").value)
    const response = document.getElementById("respuesta")
    response.innerText = cliente1.abono(cantidad)    
})