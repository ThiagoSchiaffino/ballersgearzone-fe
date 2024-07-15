import Producto from "../partial/model.producto";
import clienteAxios from "./axios";

export const producto = async (): Promise<Producto[]> => {
    try{
        const response = await clienteAxios.get('/producto');
        return response.data
        }
     catch (error) {
        console.log (error)
        return []
    }
}