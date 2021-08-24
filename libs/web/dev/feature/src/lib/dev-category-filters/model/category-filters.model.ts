export interface Product {
  id?: number
  title?: string
  image?: string
  price?: number
  category_id?: number
  color_id?: number
  size_id?: number
}

export interface Color {
  id?: number
  name?: string
}
export interface Category {
  id?: number
  title?: string
}
export interface Size {
  id?: number
  name?: string
}
export interface Input {
  label?: string
  prop?: string
  description?: string
  dataType?: string
  type?
  typeObj?
  typeArray?
}
export interface Output {
  label?: string
  prop?: string
  description?: string
  dataType?: string
}
