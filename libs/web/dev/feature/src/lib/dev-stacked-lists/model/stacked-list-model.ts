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
  twoColumnStackedList: boolean
  id: number
  name: string
  email: string
  img?: string
  date: string
  status: string
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
