import React, { useState } from "react";
import './Formulario.css'

const Formulario = () => {
    const [nombre,setNombre] = useState('')
    const [apellido,setApellido] = useState('')
    const [telefono,setTelefono] = useState('')
    const [seguro,setSeguro] = useState('')
    const [email,setEmail] = useState('')
    const [dni,setDni] = useState('')
    
    const [nombreValida,setNombreValida] = useState(false)
    const [apellidoValida,setApellidoValida] = useState(false)
    const [emailValido, setEmailValido] = useState(true)
    const [dniValido, setDniValido] = useState(true)
    const [telefonoValido, setTelefonoValido] = useState(false)
    const [seguroValido, setSeguroValido] = useState(false)
    const [mostrarDatos,setMostrarDatos] = useState(false)

    
    function seguroActualizado(event){
      setSeguro(event.target.value)
      event.target.value.length<1?setSeguroValido(true):setSeguroValido(false) 
      console.log('Seguro ', event.target.value.length)
   }
  
    function validarNombre(event){
        setNombre(event.target.value)
        console.log(nombre)
        event.target.value.length<3?setNombreValida(true):setNombreValida(false)
    }
    function validarApellido(e){
        setApellido(e.target.value)
        console.log(apellido);
        e.target.value.length<3?setApellidoValida(true):setApellidoValida(false)
    }
    function telefonoActualizado(e) {
       setTelefono(e.target.value)  
       e.target.value.length<3?setTelefonoValido(true):setTelefonoValido(false)
    }
 
    function emailActualizado(e){
      setEmail(e.target.value)
         if (e.target.value.length > 3) { 
          setEmailValido(/^\S+@\S+\.\S+$/.test(e.target.value))
         } 
          console.log('Email Valido',emailValido)
    }
    function dniActualizado (e){
      setDni(e.target.value)
      if (e.target.value.length>2) {
         setDniValido(/^[0-9]*$/.test(e.target.value))
      }
    }

   function enviarForm(e) {
      e.preventDefault()
      if (nombre === '' )   { setNombreValida(true) }
      if (apellido === '' ) { setApellidoValida(true) }
      if (telefono === '' ) { setTelefonoValido(true) }
      if (dni === '' )      { setDniValido(false) }
      if (email === '' )    { setEmailValido(false) }
      if (seguro === '' )    { setSeguroValido(true) }
      console.log('Envio los datos' ) 
      if (nombre && apellido && telefono && dni && email && seguro) {
           setMostrarDatos(true)
      }

   }
    return(
   <div>
   { !mostrarDatos &&
   <div className="Formulario">
   
   <div>
      <legend>Datos personales</legend>
   </div>  
      <div className="form-group">
      <label htmlFor="">Nombre</label>
      <input type="text" value={nombre} onChange={validarNombre} />
      { nombreValida && <div id="muestra">Minimo 3 caracteres</div> }
   </div> 
   <div>
      <label htmlFor="">Apellido</label>
      <input type="text" value={apellido} onChange={validarApellido} />
      { apellidoValida && <div id="muestra">Minimo 3 caracteres</div> }
   </div>  
     <div>
     <label htmlFor="">Dni</label>
      <input type="text" onChange={dniActualizado} />
      { !dniValido && <div id="muestra">Números sin puntos</div> }
     </div>
     <div>
        <label >Email</label>
        <input type="email" onChange={emailActualizado} placeholder="algo@ejemplo.com"/>
        { !emailValido && <div id="muestra">Email Incorrecto </div> }
     </div>
     <div>
       <label>Telefono</label>
        <input type="text" onChange={telefonoActualizado}/>
        { telefonoValido && <div id="muestra">Minimo 3 caracteres</div> }
     </div>
    <div>
       <label>Tipo de seguro</label>
       <select onClick={seguroActualizado}>
           <option value="">Seleccione</option>
           <option value="Basico $500">Basico $500</option>
           <option value="Intermedio $1000">Intermedio $1000</option>
           <option value="Premium $1500">Premium $1500</option>
       </select>
         { seguroValido && <div id="muestra">Seleccione el tipo de seguro</div> }
    </div>
    <div>
       <button type="button">Cancelar</button>
       <button type="submit" onClick={enviarForm}>Enviar</button>
    </div>
    </div> }
     { mostrarDatos &&
     <div id="Mostrar">
      <h4>Datos enviados:</h4>
      <p>Nombre: {nombre} </p>
      <p>Apellido: {apellido} </p>
      <p>Dni: {dni} </p>
      <p>Email: {email} </p>
      <p>Seguro: {seguro} </p>
     </div>
    }
    
   </div>
)
}

export { Formulario }