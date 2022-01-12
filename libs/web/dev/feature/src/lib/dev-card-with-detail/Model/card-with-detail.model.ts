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
  title: string
  subTitle: string
  description: string
  buttons?: Buttons[]
}

export interface Inputs {
  title?: string
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
export interface Buttons {
  text: string
  color: string
  fontColor?: string
  hoverColor?: string
}
