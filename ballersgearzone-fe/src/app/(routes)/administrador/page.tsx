"use client"
import Producto from "@/app/partial/model.producto";
import { producto } from "@/app/services/Producto";
import React, { useEffect, useState } from "react";


export default function Home() {
  const [productos, setProductos] = useState<Producto[]>([]);
  useEffect(() => {
    producto().then((data: Producto[]) => {
        setProductos(data);
    })
})
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        {productos
        .map(producto => (
          <a key={producto.productoId} >
        <img src= {producto.foto} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{producto.equipo} {producto.camisetade} </h5>
          <p className="card-text">
            {producto.descripcion}
          </p>
          <h2>$15000</h2>
          <a href="#" className="btn btn-primary">Ir al Carrito</a>
          
        
        </div>
        </a>
        ))}
      </div>
    </>
  );
}