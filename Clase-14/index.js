// const neumatico = {
//     medida: "185/60r14",
//     precio: 50000,
//     marca: "Fate"
// };

// const array = ["manzana", "Pera"];

// console.log(neumatico)


//SPREAD OPERATOR

// const originalArray = [1, 2, 3];
// const clonedArray = [...originalArray];

// const arrayNum1 = [1, 2, 3];
// const arrayNum2 = [4, 5, 6];
// const arrayCombinado = [...arrayNum1, ...arrayNum2];

//console.log(arrayCombinado);

//COMBINACION DE OBJETOS

// const obj1 = {a: 1, b: 2}
// const obj2 = {c: 1, d: 2}
// obj1.a = "Pepe";

// const objetocominado = {...obj1, ...obj2};


// console.log(objetocominado)

// const Argentina = {
// lugar: 1,
// poblacion: "5000"
// };

// const Francia = {
//     lugar: 2,
//     comida: "Croissant"
//     };


//SET TIME OUT

const miFuncion = () => {
    console.log("Empieza la Funcion");

    setTimeout(() => {
        console.log("Hola");
    },2000);

    console.log("Termina la Funcion")
};