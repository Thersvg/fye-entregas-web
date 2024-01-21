import axios from "axios";

const baseURL = "https://api-for-you-entregas.onrender.com";

export function CriarContaEmpresa(data) {
  const body = { ...data };

  console.log(body);

  const response = axios.post(`${baseURL}/empresa/`, body);

  return response;
}
