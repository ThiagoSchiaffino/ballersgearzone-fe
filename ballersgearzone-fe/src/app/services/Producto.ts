import Producto from "../partial/model.producto";
import clienteAxios from "./axios";

export const obtenerProducto = async (zona: number): Promise<Producto[]> => {
    try{
        const response = await clienteAxios.get('/producto/' + zona);
        return response.data
        }
     catch (error) {
        console.log (error)
        return []
    }
}
//export const eliminarProducto = async (productoID: number): Promise<Producto[]> => {
    //try{
        //const response = await clienteAxios.get('/producto/id');
        //return response.data
        //}
     //catch (error) {
        //console.log (error)
        //return []
    //}
//}