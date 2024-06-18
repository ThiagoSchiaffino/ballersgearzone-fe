import clienteAxios from "./axios";
import Login from "../partial/register.model";

export const login = async (login: Login, router: any) => {
    try{
        const response = await clienteAxios.post('/login', login);
        console.log(response);
        }
    } catch (error) {
        console.log (error)
    }