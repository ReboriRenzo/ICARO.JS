
let user = {
    name: "Renzo" , 
    password: "Renzo123" ,
    rol: "Administrador" 
}

const login = (user) => {
    if(user.name == "Renzo"){
        
        if(user.password.length >= 8 && user.passwor == "Renzo123"){ 
            console.log("Eres administrador, puedes acceder")
        }
        else{ console.log("Contraseña incorrecta")}
    }
    console.log("Usuario Incorrecto")
}

login(user)

