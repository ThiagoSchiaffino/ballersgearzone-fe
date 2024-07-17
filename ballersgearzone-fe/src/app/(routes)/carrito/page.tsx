"use client";
import Producto from "@/app/partial/model.producto";
import React, { useEffect, useState } from "react";

export default function Carrito() {
    const [producto, setProducto] = useState <Producto[]>([])
    useEffect(() => {
        const storedProductos = localStorage.getItem('carrito');
        if (storedProductos) {
          const productosRecuperados: Producto[] = JSON.parse(storedProductos);
          setProducto(productosRecuperados);
        }
      }, []);

      useEffect(() => {
        console.log('Productos:', producto);
      }, [producto]);

      const finalizarCompra = () =>{ 
        alert("Compra Finalizada");
    localStorage.removeItem("carrito");
    window.location.reload();
    };

  return (
    <>
    <header>
        <h1 className="headerCarrito">Carrito De Compras</h1>
    </header>
            <div className="carrito">
            {producto.map((producto, index) => (
          <div key={index}>
            <img className='fotoCarrito' src={producto.foto} />
            <div className="contenedorDatos">
            <h1 className='textoProducto'>{producto.equipo}</h1>
            <h1 className="descripcion"> {producto.descripcion}</h1>
            <h1 className='valorproducto'>$ {producto.precio}</h1>
            </div>
          </div>
        ))}
        <div className="linea2"></div>
            <h1 className="total"> Total A Pagar ${producto.reduce((suma, producto) => suma + producto.precio, 0)}</h1>
            </div>
            <button className="botonPagar" onClick={finalizarCompra}>Finalizar Compra</button>
    </> 
  );
}                    