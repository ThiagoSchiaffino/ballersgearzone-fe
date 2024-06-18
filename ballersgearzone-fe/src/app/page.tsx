"use client";
import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import Register from './partial/register.model';
import { useRouter } from 'next/navigation';


export default function Home() {
  const router = useRouter();   
  const aregister = () => {
    router.push('Register')
  }
  const validate = (values: Register) => {
    const errors: Partial<Register> = {};
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

    if (!values.contraseña) {
      errors.contraseña = 'La contraseña es requerida';
    } else if (values.contraseña.length < 5) {
      errors.contraseña = 'Debe tener al menos 5 caracteres';
    }
    return errors;
  };

  return (
   <>
   <div className='title'>Ballers Gear Zone</div>
    <Formik
      initialValues={{ firstName: '', edad: 0, email: '', telefono: +54, contraseña: ''}}
      validate={validate}
      onSubmit={(values, actions) => {
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
          {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}

          <label htmlFor="Edad">Edad</label>
          <input
            id="edad"
            name="edad"
            type="number"
            placeholder='Edad'
            onChange={formik.handleChange}
            value={formik.values.edad}
          />
          {formik.errors.edad ? <div>{formik.errors.edad}</div> : null}

          <label htmlFor="email">Correo Electronico</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder='Email'
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.errors.email ? <div>{formik.errors.email}</div> : null}

          <label htmlFor="telefono">Numero de telefono</label>
          <input
            id="telefono"
            name="telefono"
            type="number"
            placeholder='+54 9'
            onChange={formik.handleChange}
            value={formik.values.telefono}
            />
            {formik.errors.telefono ? <div>{formik.errors.telefono}</div> : null}

            <label htmlFor="contraseña">Contraseña</label>
          <input
            id="contraseña"
            name="contraseña"
            type="string"
            placeholder='Contraseña'
            onChange={formik.handleChange}
            value={formik.values.contraseña}
            />
            {formik.errors.contraseña ? <div>{formik.errors.contraseña}</div> : null}

          <button type="submit">Ingresar</button>
          <button type="button" onClick={aregister}>
      Iniciar Sesion
    </button>

        </form>
      )}
    </Formik>
    </>
    
  );
}