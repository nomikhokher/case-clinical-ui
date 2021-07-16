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
  icons?: Icon[]
  title?: string
  image?: string
}
interface Icon {
  icon?: string
}

export interface Inputs {
  label?: string
  prop?: string
  description?: string
  dataType?: string
}

export interface Outputs {
  label?: string
  prop?: string
  description?: string
  dataType?: string
}
