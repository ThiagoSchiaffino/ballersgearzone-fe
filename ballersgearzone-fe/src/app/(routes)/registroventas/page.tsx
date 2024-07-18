"use client"
import { useEffect, useState } from "react"
import Venta from "./registro.model";


export default function registroDeVentas() {

    const [venta, setVenta] = useState<Venta[]>([]);
  useEffect(() => {
    //registroDeVentas().then((data: Venta[]) => {
      //console.log(data)
      //setVenta(data);
    //})
  }, [])
    
    
    return (
        <>
   <table>
        <thead>
          <tr>
            <th>ID COMPRA</th>
            <th>ID CLIENTE</th>
            <th>CLIENTE</th>
            <th>EMAIL</th>
            <th>FECHA</th>
            <th>ID PRODUCTO</th>
            <th>MODELO</th>
            <th>PRECIO</th>
          </tr>
        </thead>
        <tbody>
        {venta.map((venta, index) => (
            <tr key={index}>
              <td>{venta.ventaID}</td>
              <td>{venta.usuarioID}</td>
              <td>{venta.camisetade}</td>
              <td>{venta.email}</td>
              <td>{venta.equipo}</td>
              <td>{venta.fecha}</td>
              <td>{venta.precio}</td>
            </tr>
          ))}

        </tbody>
      </table>
</>
    );
}