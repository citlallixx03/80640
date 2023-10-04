const formulario = document.getElementById("envio")

    formulario.addEventListener("click", event =>{
            event.preventDefault()
            let u = document.getElementById("user").value
            let p = document.getElementById("password").value
            alert(u+p)
    })