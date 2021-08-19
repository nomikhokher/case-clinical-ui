export interface OrderHistory {
  number: string
  date: string
  datetime: string
  href: string
  invoiceHref: string
  total: string
  products: Array<Products>
}

type Products = {
  id: number
  name: string
  description: string
  href: string
  price: string
  status: string
  date: string
  datetime: string
  imageSrc: string
  imageAlt: string
}

export interface Inputs {
  label?: string
  prop?: string
  description?: string
  dataType?: string
  type?
}
