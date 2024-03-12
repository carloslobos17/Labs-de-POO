class Cubos{
    constructor(nombre, textura, nombreImagen, dimension){
        this.nombre = nombre
        this.textura = textura
        this.nombreImagen = nombreImagen
        this.dimension = dimension
    }
    mostrar(){
        return `El cubo de ${this.nombre} da 3 de cubo`
    }
    get NombreImagen (){
        return this.nombreImagen
    }
}

class Diamante extends Cubos{
    mostrar() {
        return `El cubo de ${this.nombre} da 9 de diamante`
    }
}

class Carbon extends Cubos {
    mostrar() {
        return `El cubo de ${this.nombre} da 9 de diamante`
    }
}

class Tierra extends Cubos {
    mostrar() {
        return `El cubo de ${this.nombre} da 1 de tierra`
    }
}

class Madera extends Cubos{
    mostrar() {
        return `El cubo de ${this.nombre} da 1 de madera`
    }
}

const tierra = new Tierra("Tierra", "tierrosa", "https://static.wikia.nocookie.net/minecraft_gamepedia/images/1/15/Grass_Block_JE4.png", "9x9")
const madera = new Madera("Madera", "maderosa", "https://static.wikia.nocookie.net/minecraft_gamepedia/images/c/c1/Oak_Planks.png", "9x9")
const carbon = new Carbon("Carbon", "carbonosa", "https://minecraft.wiki/images/Block_of_Coal_JE3_BE2.png", "9x9")
const diamante = new Diamante("Diamante", "diamantosa", "https://static.wikia.nocookie.net/minecraft_gamepedia/images/c/c8/Block_of_Diamond_JE5_BE3.png", "9x9")

const respuesta = document.getElementById("response")
const imgCubo = document.getElementById("imgCubo")

const btnTierra = document.getElementById("btnTierra")
btnTierra.addEventListener("click", ()=>{
    imgCubo.setAttribute("src", tierra.NombreImagen)
    response.innerText= "el bloque de tierra da uno de tierra"
})
const btnDiamante = document.getElementById("btnDiamante")
btnDiamante.addEventListener("click", ()=>{
    imgCubo.setAttribute("src", diamante.NombreImagen)
    response.innerText= "el bloque de diamante da 9 de diamante"
})
const btnMadera = document.getElementById("btnMadera")
btnMadera.addEventListener("click", ()=>{
    imgCubo.setAttribute("src", madera.NombreImagen)
    response.innerText= "el bloque de madera da uno de madera"
})
const btnCarbon = document.getElementById("btnCarbon")
btnCarbon.addEventListener("click", ()=>{
    imgCubo.setAttribute("src", carbon.NombreImagen)
    response.innerText= "el bloque de carbon da 9 de carbon"
})


imgCubo.setAttribute("src",tierra.NombreImagen)