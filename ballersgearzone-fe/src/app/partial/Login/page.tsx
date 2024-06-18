"use client";
import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useRouter } from 'next/navigation';
import Login from './login.model';

export default function Home() {
  const router = useRouter();
  const navegarARegister = () => {
    router.push("/")
  }

  const validate = (values: Login) => {
    const errors: Partial<Login> = {};

    if (!values.email) {
      errors.email = 'Correo obligatorio';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Dirección de correo invalida';
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
        initialValues={{ email: '', contraseña: '' }}
        validate={validate}
        onSubmit={(values, actions) => {
          console.log(values);
          actions.setSubmitting(false); 
        }}
      >
        {formik => (
          <Form>
            <h1 className='titulo'>Iniciar Sesion</h1> 
            <label htmlFor="email">Correo Electronico</label>
            <Field
              id="email"
              name="email"
              type="email"
              placeholder='Email'
            />
            <ErrorMessage name="email" component="div" />

            <label htmlFor="contraseña">Contraseña</label>
            <Field
              id="contraseña"
              name="contraseña"
              type="password"
              placeholder='Contraseña'
            />
            <ErrorMessage name="contraseña" component="div" />

            <button type="submit">Ingresar</button>
            <div>
              <button onClick={() => navegarARegister()} type='button' className="link">Registrarse</button>
            </div>
            
          </Form>
        )}
      </Formik>
    </>
  );
}