export type ErrorType = {
  timestamp: Date
  status: number
  error: string
  message: string
  path: string
}

export type LoginDataType = {
  access_token: string
  token_type: string
}

export type DataType = {
  items: {
    id: number
    number: string
    description: string
    createDate: string
    completionDate: string
    price: number
    files: FileType[]
  }[]
}

export type FileType = {
  id: number
  name: string
  size: string
}

export interface IData<T> {
  items: T[]
  total: number
}

// контракты
export type ContractType = {
  id: number
  number: string
  description: string
  createDate: string
  completionDate: string
  price: number
  files: {
    id: number
    name: string
    size: string
  }[]
}

export type ContractDataType = IData<ContractType>

// жалобы
export type ComplaintType = {
  id: number
  number: string
  description: string
  status: string
  createDate: string
}

export type ComplaintDataType = IData<ComplaintType>

// заявки
export type BidType = {
  id: number
  number: string
  description: string
  status: string
  createDate: string
}

export type BidDataType = IData<BidType>

//счета
export type BillType = {
  id: number
  favorite: boolean
  createDate: string
  number: string
  name: string
  price: number
  paid: boolean
}
export type BillDataType = IData<BillType>

//контакты
export type ContactType = {
  name: string
  phone: string
  email: string
  address: {
    zip: string
    country: string
    city: string
    street: string
    building: string
    floor: string
  }
}

//
//
