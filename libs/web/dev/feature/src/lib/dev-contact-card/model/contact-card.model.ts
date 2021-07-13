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
  contactCard?: Contact
  buttons?: Buttons[]
  toggleCard?: Boolean
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

export interface Contact {
  id: number
  title: string
  tagLine?: string
  email?: string
  role?: string
  icon?: string
  image?: string
}

export interface Buttons {
  text: string
  icon?: string
}
