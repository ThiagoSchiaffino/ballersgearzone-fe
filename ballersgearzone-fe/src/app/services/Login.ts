import clienteAxios from "./axios";
import Login from "../partial/Login/login.model";
import Register from "../partial/register.model";

export const login = async (login: Login, router: any) => {
    try{
        const response = await clienteAxios.post('/login', login);
        console.log(response);
        }
     catch (error) {
        console.log (error)
    }
}
export const register = async (register: Register, router: any) => {
    try{
        const response = await clienteAxios.post('/register', register);
        console.log(response);
        }
     catch (error) {
        console.log (error)
    }
}
