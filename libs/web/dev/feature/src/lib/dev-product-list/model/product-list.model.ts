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
  sectionHeading?: String
  products?: Products[]
}

export interface Inputs {
  label?: string
  prop?: string
  description?: string
  dataType?: string
  type?
  typeArray?
  typeObj?
}

export interface Outputs {
  label?: string
  prop?: string
  description?: string
  dataType?: string
}

interface Products {
  title: string
  price: number
  color: string
  image: string
}
