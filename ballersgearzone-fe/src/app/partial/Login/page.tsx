"use client";
import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useRouter } from 'next/navigation';
import Login from './login.model';
import {login} from '../../services/auth';

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

    if (!values.contrasenia) {
      errors.contrasenia = 'La contraseña es requerida';
    } else if (values.contrasenia.length < 5) {
      errors.contrasenia = 'Debe tener al menos 5 caracteres';
    }
    return errors;
  };

  return (
    <>
      <div className='title'>Ballers Gear Zone</div>
      <Formik
        initialValues={{ email: '', contrasenia: '' }}
        validate={validate}
        onSubmit={async (body, actions) => {
          console.log(body);
          try {
            const respuesta = await login (body);
            console.log(respuesta);
            console.log(respuesta.rolID);
            if (respuesta.rolID == 1){
              router.push("/administrador")
            }
            else if(respuesta.rolID == 2)
              {
              router.push("/usuario")
              }
          } catch (error) {
            // informar al usuario contraseña incorrecta
            console.log(error);
          }
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
              id="contrasenia"
              name="contrasenia"
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