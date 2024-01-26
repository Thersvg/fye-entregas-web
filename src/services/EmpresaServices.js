import axios from "axios";
import Cookies from "js-cookie";

/* const baseURL = "https://api-for-you-entregas.onrender.com"; */
const baseURL = "http://localhost:3000";

export function CriarContaEmpresa(data) {
  const body = {
    ...data,
    logo_empresa: "C:/Users/Rodrigo/Desktop/fye/mamute.png",
  };
  console.log(body);

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

export async function UpdateDataService(data) {
  const body = {
    ...data,
  };

  console.log(body);

  try {
    const response = await axios.patch(`${baseURL}/empresa/`, body, {
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
