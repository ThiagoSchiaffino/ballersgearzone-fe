"use client"
import { useRouter } from "next/navigation";
import React from "react";



export default function Home() {
  const router = useRouter();   
  const ainiciarsesion = () => {
    router.push('Login')
  }

  const aregistrarse = () => {
    router.push('register')
  }
  return (
    <>
      <div className="paginainicio">
        <h1 className="titulo-inicio">BIENVENIDOS A BALLERS GEAR ZONE</h1>
        <h1 className="titulo-presentacion">Quienes Somos?</h1>
        <img src="tiendabasquet.jpg" alt="tienda basquet" className="foto-tienda" />
        <h3>
          Ballers Gear Zone consiste en una página de venta de camisetas de la NBA en todo el país donde los consumidores puedan comprar su camiseta preferida.
        </h3>
        <h4>
          Objetivos de la Página:
El objetivo que tenemos con “Ballers Gear Zone” es poder introducir a nuestra sitio web dentro del mercado como una nueva página donde los clientes puedan adquirir sus camisetas y no tengan la necesidad de tener que comprar en el exterior.
</h4>
<h4>
Alcance de la Página:
El alcance de nuestra página es envíos dentro del país, ya que para los demás países existen páginas propias donde se pueden conseguir las camisetas.
</h4>
<h5>¡Gracias por visitarnos y elegirnos! att: Equipo de Ballers Gear Zone</h5>
      </div>
      <button className="boton-iniciarsesion" onClick={ainiciarsesion}> Iniciar Sesion </button>
      <button className="boton-registrarse" onClick={aregistrarse}> Registrarse </button>
    </>
  )
}