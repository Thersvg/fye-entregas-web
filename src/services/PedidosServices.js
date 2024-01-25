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

export function GetAllPedidosAceitos(id) {
  try {
    const response = axios.get(`${baseURL}/pedidos-aceito/empresa/${id}`, {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    });
    return response;
  } catch (error) {
    console.error("Erro ao buscar pedidos Aceitos da empresa:", error);
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

export function FindPedidosHistorico(id) {
  try {
    console.log(id);
    const response = axios.get(`${baseURL}/historico-pedido/empresa/${id}`, {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    });
    return response;
  } catch (error) {
    console.error("Erro ao buscar pedidos Aceitos para Historico:", error);
    throw error;
  }
}

export function PedidoEntregue(id) {
  try {
    const response = axios.post(`${baseURL}/historico-pedido/${id}`, {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    });
    return response;
  } catch (error) {
    console.error("Erro ao buscar concluir pedido", error);
    throw error;
  }
}

export async function PedidoFinalizadoFunc(id) {
  try {
    const response = axios.delete(`${baseURL}/historico-pedido/${id}`, {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    });
    return response;
  } catch (error) {
    console.error("Erro ao finalizar pedido", error);
    throw error;
  }
}

export async function CreateNewOrder(DadosEntrega) {
  const body = {
    ...DadosEntrega,
    codigo_pedido: "FRG4TG4",
    taxa_entrega: "6",
  };
  console.log(body);
  try {
    const response = axios.post(`${baseURL}/pedido/`, body, {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    });
    return response;
  } catch (error) {
    console.error("Erro ao criar entrega", error);
    throw error;
  }
}
