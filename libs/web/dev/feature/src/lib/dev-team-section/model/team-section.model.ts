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
  contactCard?: Contact[]
}

export interface Inputs {
  label?: string
  prop?: string
  description?: string
  dataType?: string
  type?
  typeArray?
  typeObj?
}

export interface Outputs {
  label?: string
  prop?: string
  description?: string
  dataType?: string
}

export interface Contact {
  id: number
  title: String
  role?: string
  image?: string
}

export interface Buttons {
  text: string
  icon?: string
}
