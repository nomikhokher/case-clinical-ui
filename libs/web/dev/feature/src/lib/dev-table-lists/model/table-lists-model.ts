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
  columns?: Columns[]
  dataList?: Data[]
  width?: string
  background?: string
}
export interface Columns {
  title?: string
}
export interface Data {
  title?: string
  jobTitle?: string
  role?: string
  button?: string
  tagLine?: string
  jobTagLine?: string
}

export interface Inputs {
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
