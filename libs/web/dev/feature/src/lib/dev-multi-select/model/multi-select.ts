export interface Configs {
  headerTitle?: string
  githubURL?: string
  directory?: string
  breadcrumbs?: Crumbs[]
  items?: Items
  component_inputs?: Inputs[]
}

export interface Crumbs {
  label?: string
  path?: string
}
interface Items {
  data?: Data[]
}
interface Data {
  id?: number
  value?: string
  selected?: boolean
}
export interface Inputs {
  label?: string
  prop?: string
  description?: string
  dataType?: string
  type?: string
  typeArray?: Array<object | string | number>
  typeObj?: object
}

export interface Outputs {
  label?: string
  prop?: string
  description?: string
  dataType?: string
}
