export interface Configs {
  headerTitle?: string
  githubURL?: string
  directory?: string
  breadcrumbs?: Crumbs[]
  items?: Item[]
  component_inputs?: Inputs[]
  component_outputs?: Outputs[]
}

export interface Crumbs {
  label?: string
  path?: string
}
export type Item = {
  text: string
  img?: string
  icon?: string
  bgColor?: string
  textColor?: string
  hoverColor?: string
  cross?: Boolean
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
