import { Address } from "./address"

export interface User
  {
    id?: number,
    cpf: string,
    name: string,
    email: string,
    phone: string,
    password?: string,
    address: Address[],
    token?: string
  }
