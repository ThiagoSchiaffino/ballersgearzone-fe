import clienteAxios from "./axios";

export const registroDeVentas= async (): Promise<any[]> => {
    try {
        const response = await clienteAxios.get('/register');
        return response.data;
    } catch (error) {
        console.error("ERROR", error);
        return [];
    }
};