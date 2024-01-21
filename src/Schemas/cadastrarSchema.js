import { z } from "zod";

export const cadastrarSchema = z.object({
  name_empresa: z
    .string()
    .min(2, { message: "Digite o nome da sua empresa" })
    .toUpperCase(),

  cnpj_empresa: z.string().min(3, { message: "Digite o CNPJ ou CPF" }),

  endereco_empresa: z
    .string()
    .min(3, { message: "Digite seu endereço completo" }),

  telefone_empresa: z.string().min(3, { message: "Telefone inválido" }),

  email_empresa: z.string().email({ message: "E-mail inválido" }).toLowerCase(),

  password_empresa: z.string().min(4, { message: "Mínimo 6 caracteres " }),

  taxa_entrega_empresa: z
    .string()
    .min(0, { message: "Digite o valor da taxa de entrega " }),
});
