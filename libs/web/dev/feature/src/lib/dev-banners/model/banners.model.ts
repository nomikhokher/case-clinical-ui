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
  text?: string
  bgColor?: string
  icon?: string
  position?: string
  buttons?: Button[]
}
export interface Inputs {
  label?: string
  prop?: string
  description?: string
  dataType?: string
}
interface Button {
  text?: string
  bgColor?: string
  textColor?: string
}
