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
  tagLine?: string
  formTitle?: string
  background?: string
  showIcon?: boolean
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

export interface Data {
  title?: string
  icon?: string
  value?: string | Array<string>
  type?: string
}
