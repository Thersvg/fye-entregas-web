import axios from "axios";

const baseURL = "http://localhost:3000";

export function GetAllPedidos() {
  const response = axios.get(`${baseURL}/pedido`);
  return response;
}
