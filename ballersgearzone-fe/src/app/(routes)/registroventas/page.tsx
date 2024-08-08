"use client"
import { useEffect, useState } from "react"
import Venta from "./registro.model";
import { registroVentas } from "@/app/services/registroDeVentas";


export default function registroDeVentas() {

    const [venta, setVenta] = useState<Venta[]>([]);
  useEffect(() => {
    registroVentas().then((data: Venta[]) => {
      console.log(data)
      setVenta(data);
    })
    
  }, [])
    
    //llamar al servicio registro de ventas. guardar el arreglo de ventas en setVentas.
    return (
        <>
   <table className="registroVentas">
        <thead>
          <tr>
            <th>Venta ID</th>
            <th>Usuario Id</th>
            <th>Camiseta de</th>
            <th>Email</th>
            <th>Equipo</th>
            <th>Fecha</th>
            <th>Precio</th>
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