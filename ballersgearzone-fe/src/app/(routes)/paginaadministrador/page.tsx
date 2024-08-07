"use client";
import Producto from "@/app/partial/model.producto";
import { eliminarProducto, obtenerProducto } from "@/app/services/Producto";
import React, { useEffect, useState } from "react";



export default function Home() {
  const [productosZona1, setProductosZona1] = useState<Producto[]>([]);
  const [productosZona2, setProductosZona2] = useState<Producto[]>([]);
  useEffect(() => {
    obtenerProducto(1).then((data: Producto[]) => {
      setProductosZona1(data);
    });
    obtenerProducto(2).then((data: Producto[]) => {
      setProductosZona2(data);
    });
  }, []);
  const  eliminarCamiseta = (productoId: number) => {
    eliminarProducto(productoId);
    window.location.reload();
  }
  return (
    <>
    <a href="/registroventas" className="registroDeVentas">Registro de Ventas</a>
    <div className="titulo-zona1">
        <h1>Conferencia Este</h1>
      </div>
      <div className="card-container">
        {productosZona1.map((producto) => (
          <div key={producto.productoId} className="card">
            <a>
              <img src={producto.foto} className="card-img-top" height="270" width="427" alt={producto.equipo} />
              <div className="card-body">
                <h5 className="card-title">
                  {producto.equipo} {producto.camisetade}
                </h5>
                <p className="card-text">{producto.descripcion}</p>
                <h2>$15000</h2>
                <button className="eliminarProducto" onClick={() => { eliminarCamiseta(producto.productoId) }}>Eliminar Producto</button>
              </div>
            </a>
          </div>
        ))}
      </div>

      <div className="titulo-zona2">
      <h1>Conferencia Oeste</h1>
      </div>
      <div className="card-container">
        {productosZona2.map((producto) => (
          <div key={producto.productoId} className="card">
            <a>
              <img src={producto.foto} className="card-img-top" height="270" width="427" alt={producto.equipo} />
              <div className="card-body">
                <h5 className="card-title">
                  {producto.equipo} {producto.camisetade}
                </h5>
                <p className="card-text">{producto.descripcion}</p>
                <h2>$15000</h2>
                <button className="eliminarProducto" onClick={() => { eliminarCamiseta(producto.productoId) }}>Eliminar Producto</button>
              </div>
            </a>
          </div>
        ))}
      </div>
    </>
  )
}