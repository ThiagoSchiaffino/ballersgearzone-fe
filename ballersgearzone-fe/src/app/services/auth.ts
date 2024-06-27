"use client";

import clienteAxios from "./axios";
export async function login(body: { email: string; contrasenia: string }):Promise<any> {
  try {
    const response = await clienteAxios.post("/login", body );
    const token = response.data.accessToken;
    localStorage.setItem("accessToken", token);
    return response.data;
  } catch (e) {
    return false;
  }
}

export async function register(body: { firstname: string; edad: number; email: string; telefono:number; contasenia: string }):Promise<boolean> {
  try {
    const response = await clienteAxios.post("/register", body );
    return response.data;
  } catch (e) {
    return false;
  }
}

export const getInformacionUsuario = async (): Promise<{ email: string; role: string }> => {
  const response = await clienteAxios.get("/usuarios/info");
  return response.data;
}