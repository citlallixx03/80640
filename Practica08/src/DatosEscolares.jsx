import './MiFieldSet'

function DatosEscolares() {
    return(
        <>
            <fieldset>
                <legend>Datos Escolares</legend>
                <label htmlFor="carrera">Carrera:</label>
                <input type="text" id="carrera"></input>
                <label htmlFor="semestre">Semestre:</label>
                <input type="text" id="semestre"></input>
                <label htmlFor="matrícula">Matrícula:</label>
                <input type="text" id="matrícula"></input>
            </fieldset>
        </>
    )
}

export default DatosEscolares 