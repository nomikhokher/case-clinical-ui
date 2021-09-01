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
  products?: Products[]
  tabs?: Tabs[]
  currencies?: Currency[]
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
interface Products {
  tab_id?: number
  title?: String
  image?: String
}

interface Tabs {
  id?: number
  title?: String
}

interface Currency {
  id?: number
  title?: String
}
