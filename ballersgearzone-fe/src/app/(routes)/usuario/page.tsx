"use client";
import Producto from "@/app/partial/model.producto";
import { producto } from "@/app/services/Producto";
import React, { useEffect, useState } from "react";



export default function Home() {
  const [productosZona1, setProductosZona1] = useState<Producto[]>([]);
  const [productosZona2, setProductosZona2] = useState<Producto[]>([]);
  useEffect(() => {
    producto().then((data: Producto[]) => {
      setProductosZona1(data);
    });
    producto().then((data: Producto[]) => {
      setProductosZona2(data);
    });
  }, []);

  return (
    <>
      <header>
        <h1 className="header">Ballers Gear Zone</h1>
      </header>
<div style={{display:"flex", justifyContent:"space-between"}}>
      <div className="card">
        {productosZona1.map((producto) => (
          <a key={producto.productoId}>
            <img src={producto.foto} className="card-img-top" alt={producto.equipo} />
            <div className="card-body">
              <h5 className="card-title">
                {producto.equipo} {producto.camisetade}
              </h5>
              <p className="card-text">{producto.descripcion}</p>
              <h2>$15000</h2>
              <a href="#" className="btn btn-primary">Ir al Carrito</a>
            </div>
          </a>
        ))}
      </div>
      <div className="card">
        {productosZona2.map((producto) => (
          <a key={producto.productoId}>
            <img src={producto.foto} className="card-img-top" alt={producto.equipo} />
            <div className="card-body">
              <h5 className="card-title">
                {producto.equipo} {producto.camisetade}
              </h5>
              <p className="card-text">{producto.descripcion}</p>
              <h2>$15000</h2>
              <a href="#" className="btn btn-primary">Ir al Carrito</a>
            </div>
          </a>
        ))}
      </div>
      </div>
    </>
  );
}
