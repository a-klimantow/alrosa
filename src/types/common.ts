import { AxiosResponse } from "axios"

interface FileType {
  id: number
  name: string
  size: string
}

export interface ContractType {
  id: number
  number: string
  description: string
  createDate: string
  completionDate: string
  price: number
  files: FileType[]
}

export interface ContractResponseType {
  items: ContractType[]
  total: number
}

export interface ComplaintType {
  id: number
  number: string
  description: string
  status: string
  createDate: string
}

export interface BidType {
  id: number
  number: string
  description: string
  status: string
  createDate: string
}

export interface BillType {
  id: number
  favorite: boolean
  createDate: string
  number: string
  name: string
  price: number
  paid: boolean
}

export interface ContactType {
  name: string
  phone: string
  email: string
  address: AddresType
}

interface AddresType {
  zip: string
  country: string
  city: string
  street: string
  building: string
  floor: string
}

export interface LoginSuccess extends AxiosResponse {
  data: {
    access_token: string
    token_type: string
  }
}

export interface IResponse<T> {
  total: 0
  items: T[]
}

export type GetResponseType =
  | IResponse<BidType>
  | IResponse<ComplaintType>
  | IResponse<ContractType>
