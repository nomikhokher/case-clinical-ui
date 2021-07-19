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
  classNames?: string
  roundedDividers?: boolean
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
