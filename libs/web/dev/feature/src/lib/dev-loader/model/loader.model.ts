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
  loaderColor?: string
  loadingType?: string
  isLoading?: boolean
  size?: number
}

export interface Inputs {
  label?: string
  prop?: string
  description?: string
  dataType?: string
  typeArray?
  type?
  typeObj?
}

export interface Outputs {
  label?: string
  prop?: string
  description?: string
  dataType?: string
}
