import axios from "axios";
import Cookies from "js-cookie";

const baseURL = "https://api-for-you-entregas.onrender.com";   

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
    const response = axios.delete(`${baseURL}/pedido/${id}`);
    return response;
  } catch (error) {
    console.error("Erro ao deletar pedido da empresa:", error);
    throw error;
  }
}

export function FindPedidosHistorico(id) {
  try {
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
    const response = axios.post(`${baseURL}/order-to-backup/${id}`, {
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

export async function CreateNewOrder(DadosEntrega, taxa) {
  const caracteresPermitidos =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let resultado = "";

  for (let i = 0; i < 6; i++) {
    const indiceAleatorio = Math.floor(
      Math.random() * caracteresPermitidos.length
    );
    resultado += caracteresPermitidos.charAt(indiceAleatorio);
  }

  const body = {
    ...DadosEntrega,
    codigo_pedido: resultado,
    taxa_entrega: taxa,
  };

  try {
    const response = axios.post(`${baseURL}/pedido/`, body, {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    });
    axios.post(`${baseURL}/register-device/send`);
    return response;
  } catch (error) {
    console.error("Erro ao criar entrega", error);
    throw error;
  }
}
