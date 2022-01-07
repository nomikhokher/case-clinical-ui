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
  delay: number
  year: number
  month: number
  days: number
  hours: number
  minutes: number
  seconds: number
  mode: boolean
  timestamp: any
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
