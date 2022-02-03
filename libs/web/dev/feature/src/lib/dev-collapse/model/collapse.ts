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
  btnText: string
  btnColor: string
  collapse?: Collapse[]
}
export interface Collapse {
  description: string
  show: boolean
  icon?: string
}
export interface Inputs {
  label?: string
  prop?: string
  description?: string
  dataType?: string
  type?
}
