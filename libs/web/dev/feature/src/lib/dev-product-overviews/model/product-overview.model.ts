export interface Product {
  title?: string
  description?: string
  category?: Category
  price?: number
  is_active?: boolean
  review?: Reviews
  variants?: Variants[]
  specification?: Specification[]
  images?: Images[]
  faqs?: Faqs[]
  license?: License[]
  reviews_customer?: ReviewsCustomer[]
}

type ReviewsCustomer = {
  id: number
  name: string
  url: string
  rating: number
  comment: string
  created_at: string
}

export interface Inputs {
  label?: string
  prop?: string
  description?: string
  dataType?: string
}

interface Category {
  title?: string
}
interface Reviews {
  total_rating?: any
  reviews?: any
}
interface Variants {
  color?: Array<object>
  size?: Array<object>
}
interface Specification {
  show?: boolean
  title?: string
  specification_description?: Array<object>
}
interface Images {
  name?: string
  image?: string
  is_active?: boolean
}
interface Faqs {
  id?: number
  question?: string
  answer?: string
}
interface License {
  id?: number
  heading?: string
  description?: string
  license_detail?: License_Detail[]
  question?: string
  answer?: string
}
interface License_Detail {
  detail?: string
}
