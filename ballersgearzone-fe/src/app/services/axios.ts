"use client"
import axios from 'axios';
const createCliente = () => {
    const cliente = axios.create({ baseURL: 'http://localhost:8080/', });
    return cliente;
}

const clienteAxios = createCliente();
clienteAxios.interceptors.request.use((request) => {
    if (localStorage.getItem("accessToken")) {
        request.headers.Authorization = 'Bearer ${ localStorage.getItem("accessToken") }';
    }
    return request;
})

export default clienteAxios;