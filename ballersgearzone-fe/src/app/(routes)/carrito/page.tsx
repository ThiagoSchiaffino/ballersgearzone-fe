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

  return (
    <>
    <div>
        {producto.map((producto, index) => (
          <><div key={index}>
            </div><div className="carrito">
                    <div className="col-sm-5 col-md-4 totals section-summary">
                        <div className="row">
                            <div className="col-12 d-sm-none">
                                <p className="optional-promo">
                                    <span id="toggleCouponIcon" className="fas fa-plus" aria-hidden="false"></span> Agrega un cupón de descuento
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                            </div>
                        </div>

                        <div className="coupons-and-promos"></div>
                        <div className="row shipping-selector">
                            <div className="col-12">
                                <div className="form-group">
                                    <label htmlFor="shippingMethods">Método de Envío</label>
                                    <select
                                        className="custom-select form-control shippingMethods"
                                        id="shippingMethods"
                                        name="shippingMethods"
                                        data-actionurl="/on/demandware.store/Sites-UnderArmour-Site/es_AR/Cart-SelectShippingMethod"
                                    >
                                        <option data-shipping-id="001-1">
                                            Tierra del Fuego (Entre 8 y 10 días hábiles)
                                        </option>
                                        <option selected data-shipping-id="001-1-1">
                                            CABA y GBA (Entre 2 y 4 días hábiles)
                                        </option>
                                        <option data-shipping-id="001-1-1-1">
                                            Interior (Entre 2 y 7 días hábiles)
                                        </option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="cart-summary">
                            <div className="cart-summary-header">
                                <h5>Resumen de Compra: Camiseta NBA</h5>
                                <hr />
                            </div>
                            <div className="row summary section-sub-total">
                                <div className="col-8">
                                    <strong>Subtotal</strong>
                                </div>
                                <div className="col-4">
                                    <p className="text-right sub-total">$0</p>
                                </div>
                            </div>
                            <div className="row section-tax-total">
                                <div className="col-8">
                                    <p>Impuesto</p>
                                </div>
                                <div className="col-4">
                                    <p className="text-right tax-total">Sin impuestos</p>
                                </div>
                            </div>
                            <div className="row section-shipping-cost">
                                <div className="col-8">
                                    <p>Costo de Envío</p>
                                </div>
                                <div className="col-4">
                                    <p className="text-right shipping-cost">Gratis</p>
                                </div>
                            </div>
                            <div className="section-grand-total">
                                <hr className="no-margin-top" />
                                <div className="row">
                                    <div className="col-8">
                                        <strong>Total</strong>
                                    </div>
                                    <div className="col-4">
                                        <p className="text-right grand-total">$15000{producto.descripcion}</p>
                                    </div>
                                </div>
                                <div className="message-tax">
                                    <hr className="no-margin-top" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 checkout-continue">
                                <div className="mb-sm-3">
                                    <a
                                        href="#"
                                        className="btn btn-primary btn-block checkout-btn ga_CTA"
                                        role="button"
                                        data-ctaposition="7"
                                        data-ctatype="LINK"
                                        data-ctatext="Pagar"
                                    >
                                        Pagar
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div></>  
    ))}
      </div>
    </> 
  );
}