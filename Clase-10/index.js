function  suma(nombre, edad){
    if(edad >= 18){
        return `Bienvenido ${nombre}` ;
    }
}

const suma2 = (nombre, edad) => {
    if(edad >= 18) return `Bienvenido ${nombre}` ;
}

let resultado = suma2("PEPE", 20)
console.log(resultado)