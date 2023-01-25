

function capturar() {
    function Persona(nombre, apellido, nameUser, fechaNacimiento){
        this.nombre = nombre,
        this.apellido = apellido,
        this.nameUser = nameUser,
        this.ano = fechaNacimiento;

    }

    let nombre = document.getElementById("name").value;
    let apellido = document.getElementById("surname").value;
    let nameUser = document.getElementById("user").value;
    let fechaNacimiento = document.getElementById("date").value;
    let edad = document.getElementById("edad")
    

    calcularEdad = (fechaNacimiento) => {
        const fechaActual = new Date();
        const anoActal = parseInt(fechaActual.getFullYear())
        const mesActual = parseInt(fechaActual.getMonth()) + 1;
        const diaActual = parseInt(fechaActual.getDate());
    
        const anoNacimiento = parseInt(String(fechaNacimiento).substring(0, 4));
        const mesNacimiento = parseInt(String(fechaNacimiento).substring(5, 7));
        const diaNacimiento = parseInt(String(fechaNacimiento).substring(8, 10));
    
        let edad = anoActal - anoNacimiento;
        if(mesActual < mesNacimiento){
            edad--;
        }else if(mesActual === mesNacimiento){
            if(diaActual < diaNacimiento){
                edad--;
            }
        }
        return edad
    }

    nuevoSujeto = new Persona( nombre, apellido, nameUser, fechaNacimiento );
    console.log(nuevoSujeto);
    agregar();
}

var baseDatos = [];

function agregar(){
    
    baseDatos.push(nuevoSujeto)
    console.log(baseDatos)


    document.getElementById("table").innerHTML += `<tbody><td>`+ nuevoSujeto.nombre + `</td><td>`+ nuevoSujeto.apellido + `</td><td>`+ nuevoSujeto.nameUser + `</td><td class="edad">`+ calcularEdad(this.value) + `</td></tbody>`
};



