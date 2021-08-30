export interface Products {
  id: number
  name: string
  href: string
  price: string
  color: string
  size: string
  imageSrc: string
  imageAlt: string
  qty: number
}

export interface OrderAttributes {
  id: number
  label: string
  value: string
  code?: string
}

export interface Input {
  label?: string
  prop?: string
  description?: string
  dataType?: string
  typeArray?: any
}
