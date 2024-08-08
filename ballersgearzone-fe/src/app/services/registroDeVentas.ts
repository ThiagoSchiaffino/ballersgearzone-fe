import Venta from "../(routes)/registroventas/registro.model";
import clienteAxios from "./axios";

export const registroVentas= async (): Promise<any[]> => {
    try {
        const response = await clienteAxios.get('/register');
        return response.data;
    } catch (error) {
        console.error("ERROR", error);
        return [];
    }
};
//crear servicio que recupere todas las ventas. (llamar al registro ventas backend)