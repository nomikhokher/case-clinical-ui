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
  image?: string
  user_rating?: number
  title?: string
  price?: number
  variants?: Variant[]
  btnText?: String
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
interface Variant {
  color?: Values[]
  size?: Values[]
}

interface Values {
  values?: string
}
