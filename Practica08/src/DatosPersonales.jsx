import './MiFieldSet'

function DatosPersonales() {
    return(
        <>
            <fieldset>
                <legend>Datos Personales</legend>
                <label htmlFor="nombre">Nombre:</label>
                <input type="text" id="nombre"></input>
                <label htmlFor="paterno">Apellido Paterno:</label>
                <input type="text" id="paterno"></input>
                <label htmlFor="materno">Apellido Materno:</label>
                <input type="text" id="materno"></input>
                <label htmlFor="contraseña">Contraseña:</label>
                <input type="password" id="contraseña"></input>
            </fieldset>
        </>
    )
}

export default DatosPersonales