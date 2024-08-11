"use client";
import { useEffect, useState } from "react";
import Venta from "./registro.model";
import { registroVentas } from "@/app/services/registroDeVentas";
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';

export default function RegistroDeVentas() {

  const [venta, setVenta] = useState<Venta[]>([]);

  useEffect(() => {
    registroVentas().then((data: Venta[]) => {
      console.log(data);
      setVenta(data);
    });
  }, []);

  const generarPDF = () => {
    const doc = new jsPDF() as jsPDF & { autoTable: typeof autoTable };
    autoTable(doc, {
      head: [['ID VENTA', 'ID USUARIO', 'CAMISETADE', 'EMAIL', 'EQUIPO', 'FECHA', 'PRECIO']],
      body: venta.map(v => [
        v.ventaID,  // Corrected from venta.ventaId to venta.ventaID
        v.usuarioID,
        v.camisetade,
        v.email,
        v.equipo,
        (new Date(v.fecha)).toLocaleString(),
        v.precio,
      ]),
    });
    doc.save('registro_ventas.pdf');
  };

  return (
    <>
      <h1 className="registro">Registro de Ventas</h1>
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
          {venta.map((v, index) => (
            <tr key={index}>
              <td>{v.ventaID}</td>
              <td>{v.usuarioID}</td>
              <td>{v.camisetade}</td>
              <td>{v.email}</td>
              <td>{v.equipo}</td>
              <td>{(new Date(v.fecha)).toLocaleDateString()}</td>
              <td>{v.precio}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={generarPDF} className="exportar">
        Exportar a PDF
      </button>
    </>
  );
}
