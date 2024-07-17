"use client";
import Producto from "@/app/partial/model.producto";
import { obtenerProducto } from "@/app/services/Producto";
import Link from "next/link";
import React, { useEffect, useState } from "react";



export default function Home() {
  const [productosZona1, setProductosZona1] = useState<Producto[]>([]);
  const [productosZona2, setProductosZona2] = useState<Producto[]>([]);
  const [carrito, setCarrito] = useState<Producto[]>([]);

  useEffect(() => {
    obtenerProducto(1).then((data: Producto[]) => {
      setProductosZona1(data);
    });
    obtenerProducto(2).then((data: Producto[]) => {
      setProductosZona2(data);
    });
  }, []);
  const agregarACarrito = (nuevoProducto: Producto) => {
    setCarrito ([...carrito, nuevoProducto])
    console.log(nuevoProducto)
  }
    
  const irACarrito = () => {
    localStorage.setItem('carrito', JSON.stringify(carrito));
  };
  return (
    <>
      <header>
        <h1 className="header">Ballers Gear Zone</h1>
      </header>
      <h1 className="zonaEste">Zona Este</h1><h1 className="zonaOeste">Zona Oeste</h1>
      
<div style={{display:"flex", justifyContent:"space-between"}}>
      <div className="card">
        {productosZona1.map((producto) => (
          <a key={producto.productoId}>
            <img src={producto.foto} className="card-img-top" height="600" width="200" alt={producto.equipo} />
            <div className="card-body">
              <h5 className="card-title">
                {producto.equipo} {producto.camisetade}
              </h5>
              <p className="card-text">{producto.descripcion}</p>
              <h2>$15000</h2>
              <Link href="/carrito" className="btn btn-primary" onClick={irACarrito}>Ir al Carrito</Link>
              <button className="btn btn-primary" onClick={ ()=> {agregarACarrito(producto)}}>Agregar a Carrito</button>
            </div>
          </a>
        ))}
      </div>

      <div className="linea"></div>
    
      <div className="card"> 
        {productosZona2.map((producto) => (

            <a key={producto.productoId}>
            <img src={producto.foto} className="card-img-top" height="600" width="200" alt={producto.equipo} />
            <div className="card-body">
              <h5 className="card-title">   
                {producto.equipo} {producto.camisetade}
              </h5>
              <p className="card-text">{producto.descripcion}</p>
              <h2>$15000</h2>
              <Link href="/carrito" className="btn btn-primary" onClick={irACarrito}>Ir al Carrito</Link>
              <button className="btn btn-primary" onClick={ ()=> {agregarACarrito(producto)}}>Agregar a Carrito</button>
            </div>
          </a>

        ))}
      </div>
      </div>
    </>
  );
}


