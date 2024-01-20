import axios from "axios";

const baseURL = "https://api-for-you-entregas.onrender.com";

export function GetAllPedidos() {
  const response = axios.get(`${baseURL}/pedido`);
  return response;
}

/* export function GetPedidosAceitos() {
  const response = axios.get(`${baseURL}/pedidos-aceitos-empresa/${id}`);
  return response;
}
 */
