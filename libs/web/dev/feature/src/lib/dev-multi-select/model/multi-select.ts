export interface Configs {
  headerTitle?: string
  githubURL?: string
  directory?: string
  breadcrumbs?: Crumbs[]
  items?
  component_inputs?: Inputs[]
}

export interface Crumbs {
  label?: string
  path?: string
}

export interface Inputs {
  label?: string
  prop?: string
  description?: string
  dataType?: string
  type?: string
  typeArray?: Array<object | string | number>
  typeObj?: object
}

export interface Outputs {
  label?: string
  prop?: string
  description?: string
  dataType?: string
}
