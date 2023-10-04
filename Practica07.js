const formulario = document.getElementById("formulario")
const miFieldSet = (legend, txt1, txt2) => {
    return `
    <fielset>
        <legend>${legend}</legend>
        <label for=${txt1}:</label>
        <imput type="text" id="01">
        <label for=${txt2}:</label>
        <imput type="text" id="02">
    </fieldset>
    `
}

formulario.innerHTML=miFieldSet("Inf Personal","Nombre","Correo")
formulario.innerHTML=miFieldSet("Inf Dirección","Dirección","Ciudad")