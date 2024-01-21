import { z } from "zod";

export const loginSchema = z.object({
  email_empresa: z.string().email({ message: "E-mail inválido" }).toLowerCase(),
  password_empresa: z.string().min(6, { message: "Mínimo 6 caracteres " }),
});
