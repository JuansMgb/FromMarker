

function capturar() {
    function Persona(nombre, apellido, nameUser, fechaNacimiento){
        this.nombre = nombre,
        this.apellido = apellido,
        this.nameUser = nameUser,
        this.fechaNacimiento = fechaNacimiento;

    }

    let nombre = document.getElementById("name").value;
    let apellido = document.getElementById("surname").value;
    let nameUser = document.getElementById("user").value;
    let fechaNacimiento = document.getElementById("date").value;

    function calcularEdad(fechaNacimiento) {
        var hoy = new Date();
        var cumpleanos = new Date(fechaNacimiento);
        var edad = hoy.getFullYear() - cumpleanos.getFullYear();
        var m = hoy.getMonth() - cumpleanos.getMonth();
    
        if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
            edad--;
        }
    
        return edad;
    }

   var fecha = calcularEdad(fechaNacimiento);


    nuevoSujeto = new Persona( nombre, apellido, nameUser, fecha );
    console.log(nuevoSujeto);
    agregar();
}

var baseDatos = [];

function agregar(){
    
    baseDatos.push(nuevoSujeto)
    console.log(baseDatos)
    document.getElementById("table").innerHTML += `<tbody><td>`+ nuevoSujeto.nombre + `</td><td>`+ nuevoSujeto.apellido + `</td><td>`+ nuevoSujeto.nameUser + `</td><td class="edad">`+ nuevoSujeto.fechaNacimiento + `</td></tbody>`
};



