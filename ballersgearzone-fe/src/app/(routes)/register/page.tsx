"use client";
import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import Register from '../../partial/register.model';
import { useRouter } from 'next/navigation';
import { register } from '../../services/auth';

export default function Home() {
  const router = useRouter();   
  const aregister = () => {
    router.push('Login')
  }
  const validate = (values: Register) => {
    const errors: Partial<{firstName : string, edad: string, email: string, telefono: string, password: string}> = {};
    if (!values.firstName) {
      errors.firstName = 'Nombre requerido';
    } else if (values.firstName.length > 15) {
      errors.firstName = 'No debe tener mas de 15 letras';
    }

    if (!values.edad) {
      errors.edad = 'Edad obligatoria';
    } else if (values.edad < 18) {
      errors.edad = 'Debes tener mas de 18 años';
    }

    if (!values.email) {
      errors.email = 'Correo obligatorio';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Dirección de correo invalida';
    }

    if (!values.telefono) {
     errors.telefono = 'Se requiere un numero de telefono';
    } else if (values.telefono.toString().length !== 10) {
      errors.telefono = 'Debe tener 10 dígitos';
    }

    if (!values.password) {
      errors.password = 'La contraseña es requerida';
    } else if (values.password.length < 4) {
      errors.password = 'Debe tener al menos 4 caracteres';
    }
    return errors;
  };

  return (
   <>
   
    <Formik
      initialValues={{ firstName: '', edad: 0, email: '', telefono: +54, password: ''}}
      validate={validate}
      onSubmit={ async (values, actions) => {
        await register (values)
        
  const navegarAUsuario = () => {
    router.push("/paginausuario")
  }
navegarAUsuario()
        console.log(values); // Aquí es donde los valores aparecerán en la consola
        actions.setSubmitting(false); // Para terminar la operación de envío
      }}
    >
      {formik => (
        <form onSubmit={formik.handleSubmit}>
          <h1 className='titulo'>Registrarse</h1> 
          <label htmlFor="firstName">Nombre</label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            placeholder='Escribe tu nombre'
            onChange={formik.handleChange}
            value={formik.values.firstName}
          />
          {formik.errors.firstName ? <div className='error'>{formik.errors.firstName}</div> : null}

          <label htmlFor="Edad">Edad</label>
          <input
            id="edad"
            name="edad"
            type="number"
            placeholder='Edad'
            onChange={formik.handleChange}
            value={formik.values.edad}
          />
          {formik.errors.edad ? <div className='error'>{formik.errors.edad}</div> : null}

          <label htmlFor="email">Correo Electronico</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder='Email'
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.errors.email ? <div className='error'>{formik.errors.email}</div> : null}

          <label htmlFor="telefono">Numero de telefono</label>
          <input
            id="telefono"
            name="telefono"
            type="number"
            placeholder='+54 9'
            onChange={formik.handleChange}
            value={formik.values.telefono}
            />
            {formik.errors.telefono ? <div className='error'>{formik.errors.telefono}</div> : null}

            <label htmlFor="password">Contraseña</label>
          <input
            id="password"
            name="password"
            type="string"
            placeholder='Contraseña'
            onChange={formik.handleChange}
            value={formik.values.password}
            />
            {formik.errors.password ? <div className='error'>{formik.errors.password}</div> : null}

            <button type="submit" className='boton-ingresar'>Ingresar</button>
          <button type="button" className="boton-register" onClick={aregister} >
      Iniciar Sesion
    </button>

        </form>
      )}
    </Formik>
    </>
    
  );
}