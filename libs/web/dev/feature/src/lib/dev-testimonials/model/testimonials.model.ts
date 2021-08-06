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
  data?: Data[]
}

interface Data {
  title: string
  message?: string
  position?: string
  img?: string
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

export interface Outputs {
  label?: string
  prop?: string
  description?: string
  dataType?: string
}
