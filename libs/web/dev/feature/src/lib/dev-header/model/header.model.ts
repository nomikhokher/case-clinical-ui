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
  headernav?: Header[]
  buttons?: Buttons[]
  toggleCard?: String
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

export interface Header {
  id: number
  title: string
  icon?: string
}

export interface Buttons {
  text: string
  backColor?: string
}
