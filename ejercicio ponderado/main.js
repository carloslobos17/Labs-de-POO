class Productos {
    constructor(nombre, precio, cantidad){
        this._nombre = nombre
        this._precio = precio
        this._cantidad = cantidad
    }
    get Nombre(){
        return this._nombre
    }
    get Precio(){
        return this._precio
    }
    get Cantidad(){
        return this._cantidad
    }

}
class Clientes extends Productos {
    constructor(nombre, precio, cantidad,cliente){
        super(nombre, precio, cantidad)
        this._cliente = cliente
    }
    Recibo(){
        let geb = document.getElementById("a14").value
        let geb2 = document.getElementById("i3").value
        let geb3 = document.getElementById("tlc").value
        let geb4 = document.getElementById("ic").value
        let geb5 = document.getElementById("i6").value
        let mul = geb * obj.Precio
        let mul2 = geb2 * obj2.Precio
        let mul3 = geb3 * obj3.Precio
        let mul4 = geb4 * obj4.Precio
        let mul5 = geb5 * obj5.Precio
        let total = mul + mul2 + mul3 + mul4 + mul5
        let resultado = document.getElementById("resultado")

        return resultado.innerText =  `${this._cliente} gasto $ ${total} en ${geb} Samsung, ${geb2} laptops, ${geb3} TVs, ${geb4} cargadores y ${geb5} Iphones`
 
    }
}


const obj=new Clientes("Smarphone Samsung A14",150,300,"Jane Margolis")
const obj2=new Clientes("Laptop Lenovo ideapad 3",300,100)
const obj3=new Clientes("Televisor TLC 2012",99,91)
const obj4=new Clientes("Cargador de telefono Iphone",2.50,100)
const obj5=new Clientes("Smartphone Iphone 6",40,47)


