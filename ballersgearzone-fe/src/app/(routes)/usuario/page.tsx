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
  const carrito = () => {
    let carritoActual = JSON.parse(localStorage.getItem('carrito') || '[]');
    if (productosZona2) {
      carritoActual.push(productosZona2);
    }
    localStorage.setItem('carrito', JSON.stringify(carritoActual));
  };
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
              <a href="/carrito" className="btn btn-primary">Ir al Carrito</a>
            </div>
          </a>
        ))}
      </div>
      <div className="minicart" data-action-url="/on/demandware.store/Sites-UnderArmour-Site/es_AR/Cart-MiniCartShow">
        <div className="minicart-total hide-link-med">
    <a className="minicart-link" href="/carrito" title="0 ítems en Carrito" aria-label="0 ítems en Carrito" aria-haspopup="true">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-shopping-bag header-icons"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
        <span className="minicart-quantity">
            0
        </span>
    </a>
</div>

<div className="minicart-total hide-no-link">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-shopping-bag"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
        <span className="minicart-quantity">
            0
        </span>
</div>
<div className="popover popover-bottom"></div>

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
              <a href="/carrito" className="btn btn-primary" onClick={carrito}>Ir al Carrito</a>
            </div>
          </a>
        ))}
      </div>
      </div>
    </>
  );
}


