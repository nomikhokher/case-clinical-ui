export interface Configs {
  headerTitle?: string
  githubURL?: string
  directory?: string
  breadcrumbs?: Crumbs[]
  items?: Item
  component_inputs?: Inputs[]
}

export interface Crumbs {
  label?: string
  path?: string
}
export interface Item {
  paymentDetails?: PaymentDetail
  productDetail?: ProductDetail[]
  productOverview?: ProductOverview
}
interface PaymentDetail {
  billingAdress?: string
  cardNumber?: string
  cardExpiry?: string
  subTotal?: number
  shippingCost?: number
  tax?: number
}
interface ProductDetail {
  id?: number
  productName?: string
  productPrice?: string
  productDescription?: string
  productAdress?: string
  buyerEmail?: string
  buyerPhone?: string
  deliveryDate?: string
  deliveryStatusLevel?: number
}
interface ProductOverview {
  heading?: string
  orderNum?: string
  date?: string
}

export interface Inputs {
  label?: string
  prop?: string
  description?: string
  dataType?: string
  type?
  typeObj?
  typeArray?
}
