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
  createDate: Date
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
