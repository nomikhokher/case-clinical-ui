export interface Configs {
  headerTitle?: string
  githubURL?: string
  directory?: string
  breadcrumbs?: Crumbs[]
  items?: Item[]
  component_inputs?: Inputs[]
}

export interface Crumbs {
  label?: string
  path?: string
}
export interface Item {
  directionToolbar?: string
  toolbar: boolean
  icons?: Array<string>
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

export interface Divider {
  id: string
  label?: string
  title?: boolean
  toolbar?: boolean
  icon?: string
  directionIcon?: string
}
