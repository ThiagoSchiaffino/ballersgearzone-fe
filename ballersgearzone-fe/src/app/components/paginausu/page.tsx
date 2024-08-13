"use client";
import Producto from "@/app/models/model.producto";
import { obtenerProducto } from "@/app/services/Producto";
import Link from "next/link";
import React, { useEffect, useState } from "react";



export default function PaginaUsuario() {
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
    setCarrito([...carrito, nuevoProducto])
    alert("Camiseta Agregada a Carrito")
    console.log(nuevoProducto)
  }

  const irACarrito = () => {
    localStorage.setItem('carrito', JSON.stringify(carrito));

    
  };
  return (
    <>
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
          <select className="talle"
            id={`talle-${producto.productoId}`}
          >
            <option value="">Seleccione un talle</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
          </select>
          <Link href="/components/Carrito" className="btn btn-primary" onClick={irACarrito}>Ir al Carrito</Link>
          <button className="agregarACarrito" onClick={() => agregarACarrito(producto)}>Agregar a Carrito</button>
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
                <select className="talle"
            id={`talle-${producto.productoId}`}
          >
            <option value="">Seleccione un talle</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
          </select>
                <Link href="/components/Carrito" className="btn btn-primary" onClick={irACarrito}>Ir al Carrito</Link>
                <button className="agregarACarrito" onClick={() => { agregarACarrito(producto) }}>Agregar a Carrito</button>
              </div>
            </a>
          </div>
        ))}
      </div>
    </>
  );
}