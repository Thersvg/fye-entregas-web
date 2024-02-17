import axios from "axios";
import Cookies from "js-cookie";

/* const baseURL = "https://api-for-you-entregas.onrender.com";   */
const baseURL = "http://localhost:4000"; 

export function CriarContaEmpresa(data) {
  const body = {
    ...data,
    logo_empresa: "logo",
    endereco_empresa: "Seu Endereço",
    taxa_entrega_empresa: "6,00"
  }; 

  try {
    const response = axios.post(`${baseURL}/empresa`, body);
    return response;
  } catch (error) {
    console.error("Erro ao criar conta da empresa:", error);
    throw error;
  }
}

export function EmpresaLogged() {
  try {
    const response = axios.get(`${baseURL}/empresa/`, {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    });
    return response;
  } catch (error) {
    console.error("Erro ao Logar na conta da empresa:", error);
    throw error;
  }
}

export async function LoginContaEmpresa(data) {
  try {
    const response = await axios.post(`${baseURL}/autenticacao-empresa`, data);
    return response;
  } catch (error) {
    console.error("Erro ao Logar na conta da empresa:", error);
    throw error;
  }
}

export async function UpdateDataService(Body) {
  try {
    const response = await axios.patch(`${baseURL}/empresa/`, Body, {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    });

    return response;

  } catch (error) {
    console.error("Erro na alteração dos dados", error);
    throw error;
  }
}

export async function UpdatePasswordService(Body) {
  try {
    const response = await axios.patch(`${baseURL}/empresa/recover/`, Body);
    return response;

  } catch (error) {
    console.error("Erro na alteração dos dados", error);
    throw error;
  }
}

export async function SendClientEmail(data){
  try {
    const response = await axios.post(`${baseURL}/empresa/enviar-email`, data);
    return response;
    
  } catch (error) {
    console.error("Erro ao enviar email", error);
    throw error;
  }
}