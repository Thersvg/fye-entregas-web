import axios from "axios";
import Cookies from "js-cookie";

/* const baseURL = "https://api-for-you-entregas.onrender.com"; */
const baseURL = "http://localhost:3000";

export function GetAllPedidos() {
  try {
    const response = axios.get(`${baseURL}/pedido`, {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    });
    return response;
  } catch (error) {
    console.error("Erro ao buscar pedidos da empresa:", error);
    throw error;
  }
}

export function DeletePedido(id) {
  try {
    console.log(`${baseURL}/pedido/`, id);
    const response = axios.delete(`${baseURL}/pedido/${id}`);
    return response;
  } catch (error) {
    console.error("Erro ao deletar pedido da empresa:", error);
    throw error;
  }
}

/* export function GetPedidosAceitos() {
  const response = axios.get(`${baseURL}/pedidos-aceitos-empresa/${id}`);
  return response;
}
 */
