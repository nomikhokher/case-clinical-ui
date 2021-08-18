export interface ShoppingCart {
  id: number
  name: string
  route: string
  price: string | number
  color: string
  size?: string
  inStock?: boolean
  leadTime?: string
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
