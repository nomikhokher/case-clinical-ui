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
  audioList: List[]
}
interface List {
  url?: string
  title?: string
  cover?: string
}

export interface Inputs {
  label?: string
  prop?: string
  description?: string
  dataType?: string
  typeArray?
}

export interface Outputs {
  label?: string
  prop?: string
  description?: string
  dataType?: string
}
