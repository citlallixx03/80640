import DatosPersonales from './DatosPErsonales'
import DatosEscolares from './DatosEscolares'

function Formulario() {
    return (
        <>
         <form action="">
            <DatosPersonales></DatosPersonales>
            <DatosEscolares></DatosEscolares>
            <input type="submit" value="Enviar Datos"/>
         </form>
        </>
    )
}

export default Formulario
