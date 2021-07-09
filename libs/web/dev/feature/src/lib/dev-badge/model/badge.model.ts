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
  color?: string
  size?: string
  rounded?: string
  icon?: string
  position?: string
}
export interface Inputs {
  label?: string
  prop?: string
  description?: string
  dataType?: string
}
