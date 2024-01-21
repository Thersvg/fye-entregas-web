import { z } from "zod";

export const cadastrarSchema = z.object({
  empresa: z
    .string()
    .min(2, { message: "Digite o nome da sua empresa" })
    .toUpperCase(),

  cnpj: z.string().min(8, { message: "Digite o CNPJ ou CPF" }),

  Endereço: z.string().min(3, { message: "Digite seu endereço completo" }),

  Telefone: z.string().min(3, { message: "Telefone inválido" }),

  email: z.string().email({ message: "E-mail inválido" }).toLowerCase(),

  password: z.string().min(6, { message: "Mínimo 6 caracteres " }),

  taxaentrega: z
    .string()
    .min(0, { message: "Digite o valor da taxa de entrega " }),
});
