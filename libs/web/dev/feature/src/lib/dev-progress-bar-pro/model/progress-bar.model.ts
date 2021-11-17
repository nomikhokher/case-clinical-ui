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
  statusLevel?: number | string
  barData?: any
  barTitle?: string
}

export interface Inputs {
  label?: string
  prop?: string
  description?: string
  dataType?: string
  typeArray?
  typeObj?
}

export interface Outputs {
  label?: string
  prop?: string
  description?: string
  dataType?: string
}

// define  data types

export interface Button {
  text?: string
  color?: string
  position?: string
  icon?: string
  showHide?: boolean
}
