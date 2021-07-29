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
  bgColor?: string
  textColor?: string
  lists?: Lists[]
  rights?: string
  icons?: Icons[]
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

// define  data types

export interface Lists {
  heading?: string
  items?: Items[]
}

interface Items {
  title?: string
}

interface Icons {
  svg?: string
}
