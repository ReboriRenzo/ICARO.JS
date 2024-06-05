

function filterAdmin(users){
    return users.filter(user => user.rol === "admin")
}
function filterNonAdmins(users) {
    return users.filter(user => user.rol !== 'admin');
}

const ArrayUsers = [
    {
        nombre: "Pedro",
        password: "12345678",
        rol: "user"
    },
    {
        nombre: "Santiago",
        password: "12345678",
        rol: "admin"
    },
    {
        nombre: "Fernando",
        password: "12345678",
        rol: "admin"
    },
    {
        nombre: "Manuel",
        password: "12345678",
        rol: "user"
    },
    {
        nombre: "Renzo",
        password: "12345678",
        rol: "admin"
    },
    {
        nombre: "Joaquin",
        password: "12345678",
        rol: "admin"
    }
];
console.log(ArrayUsers);
console.log("Usuarios Administradores: ");
const admins = filterAdmin(ArrayUsers)
console.log(admins);
console.log("Usuarios Normales: ");
const nonAdmins = filterNonAdmins(ArrayUsers);
console.log(nonAdmins);



