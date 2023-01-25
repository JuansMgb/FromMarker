

function capturar() {
    function User(nombre, edad, apellido, nameUser){
        this.nombre = nombre,
        this.edad = edad,
        this.apellido = apellido,
        this.nameUser = nameUser;

    }

    let nombre = document.querySelector("#name").value,
    surname = document.querySelector("#surname").value,
    user = document.querySelector("#user").value,
    date = document.querySelector("#date").value;

    console.log({nombre, surname, user, date})
}



