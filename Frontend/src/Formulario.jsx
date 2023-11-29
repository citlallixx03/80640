/*import { Button, TextField, Box } from "@mui/material"
import { useState } from "react"
import axios from "axios"

function Formulario (props) {
    const [Cargando, setCargando] = useState(false)
    const [datosFormulario, setDatosFormulario] = useState(
        {nombre: '',
        apellido: ''}
    )

    const hacerPeticion = async () => {
        try {
            const response = await axios.post('http://localhost:4567/ruta2',datosFormulario )
            console.log(response.data)
            return response.data
        } catch (error) {
            throw error
        }
    }

    const procesarFormulario = async (evento) => {
        evento.preventDefault()
        console.log("datos recuperados del formulario: ", datosFormulario)
        setCargando(true)
        try {
            const response = await hacerPeticion()
            console.log("salida",response.nombre)
            setCargando(false)
            
        } catch (error) {
            console.log('error', error)
            setCargando(false)
        }
    }

    const cambiosFomulario = (evento) => {
         //console.log(evento.target)
        const {name, value} = evento.target
        setDatosFormulario( { ...datosFormulario, [name]:value} )
    }

    return (
        <>
            <form onSubmit={ procesarFormulario }>
                <h1>CRUD</h1>
                <Box m={5}>
                    <TextField label="Nombre:" variant="outlined" fullWidth onChange={ cambiosFomulario } name="nombre" value={datosFormulario.nombre} ></TextField>
                </Box>
                <Box m={5}>
                    <TextField label="Apellido:" variant="outlined" fullWidth onChange={ cambiosFomulario } name="password" value={datosFormulario.password} ></TextField>
                </Box>
                <Box m={5}>
                    <Button variant="contained" type="submit" color="primary" fullWidth disabled={Cargando}>Agregar</Button>
                </Box>
                <Box m={5}>
                    <Button variant="contained" type="submit" color="primary" fullWidth disabled={Cargando}>Eliminar</Button>
                </Box>
                <Box m={5}>
                    <Button variant="contained" type="submit" color="primary" fullWidth disabled={Cargando}>Actualizar</Button>
                </Box>
                <Box m={5}>
                    <Button variant="contained" type="submit" color="primary" fullWidth disabled={Cargando}>Leer</Button>
                </Box>
            </form>
        </>
    )
}

export default Formulario*/

import { Box, Button, TextField } from "@mui/material"
import axios from "axios"
import { useState } from "react"

function Formulario(props){
    const [datosUsuario, setDatosUsuario] = useState({
        nombre: '',
        apellido: ''
    })
    const hacerPeticion = async (ex) =>{
        try {
            if(ex==1){
                const res = await axios.get('http://localhost:4567/crear',{params:datosUsuario})
                return res.data
            }
            if(ex==2){
                const res = await axios.post('http://localhost:4567/leer',{params:datosUsuario})
                return res.data
            }
            if(ex==3){
                const res = await axios.get('http://localhost:4567/actualizar',{params:datosUsuario})
                return res.data
            }
            if(ex==4){
                const res = await axios.delete('http://localhost:4567/eliminar',{params:datosUsuario})
                return res.data
            }
        } catch (error) {
            throw error
        }
    }
    const crearU = async (e)=>{
        e.preventDefault()
        try {
            const res = await hacerPeticion(1)
            console.log(res)
            
        } catch (error) {
            console.log(error);
        }
    }
    const leerU = async (e)=>{
        e.preventDefault()
        try {
            const res = await hacerPeticion(2)
            console.log(res)
        } catch (error) {
            console.log(error);
        }
    }
    const actualizarU = async (e)=>{
        e.preventDefault()
        //console.log("datos Recuperados del formulario", datosUsuario)
        try {
            const res = await hacerPeticion(3)
            console.log(res)
        } catch (error) {
            console.log(error);
        }
    }
    const  eliminarU= async (e)=>{
        e.preventDefault()
        try {
            const res = await hacerPeticion(4)
            console.log(res)
        } catch (error) {
            console.log(error);
        }
    }
    const cambiosFormulario = (e)=>{
        const {name, value}= e.target
        setDatosUsuario({
            ...datosUsuario, [name]:value
        })
    }
    return(
        <>
        <h1>CRUD</h1>
        <form>
            <Box m={5}>
                <TextField label="Nombre: " variant="outlined" fullWidth onChange={cambiosFormulario} name="nombre" value={datosUsuario.nombre}></TextField>
            </Box>
            <Box m={5}>
                <TextField label="Apellido: " variant="outlined"  fullWidth onChange={cambiosFormulario} name="apellido" value={datosUsuario.apellido}></TextField>
            </Box>
            <div>
                <Box m={5}>
                    <Button variant="contained" type="submit" color="primary" onClick={crearU}> Agregar</Button>
                </Box>
                <Box m={5}>
                    <Button variant="contained" type="submit" color="primary" onClick={leerU}>Leer</Button>
                </Box>
                <Box m={5}>
                    <Button variant="contained" type="submit" color="primary" onClick={actualizarU}>Actualizar</Button>
                </Box>
                <Box m={5}>
                    <Button variant="contained" type="submit" color="primary" onClick={eliminarU}>Eliminar</Button>
                </Box>
            </div>
        </form>
        </>
    )
}

export default Formulario