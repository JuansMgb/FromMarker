

const from = document.querySelector("#from")


from.addEventListener("submit", validarFrom );

function validarFrom(e){
    e.preventDefault()

    const nombre = document.querySelector("#name").value
    const surname = document.querySelector("#surname").value
    const user = document.querySelector("#user").value
    const fechaNacimiento = document.querySelector("#date").value
    const rest = document.querySelector("#rest")

   
    rest.textContent = `hola ${nombre} apellido ${surname} ${user} ${fechaNacimiento}`

       
    console.log({nombre, surname, user, fechaNacimiento})

    console.log(arrayUsers)
}






