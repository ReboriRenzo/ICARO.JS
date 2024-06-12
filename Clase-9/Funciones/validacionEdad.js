function puedesEntrar(nombre, edad) {
    console.log(`Bienvenido al ${nombre}`);

    if (edad >= 18) {
        console.log("Puedes Entrar :D");
    }else{
        console.log("No Puedes Entrar");
    }
};

module.exports = puedesEntrar;