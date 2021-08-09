export interface Configs {
  headerTitle?: string
  githubURL?: string
  directory?: string
  breadcrumbs?: Crumbs[]
  items?: Item
  component_inputs?: Inputs[]
  component_outputs?: Outputs[]
}

export interface Crumbs {
  label?: string
  path?: string
}
export interface Item {
  crumbs?: Crumb[]
  alignment?: string
}

export interface Crumb {
  label?: string
  isactive?: boolean
  icon?: string
  content?: string
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
