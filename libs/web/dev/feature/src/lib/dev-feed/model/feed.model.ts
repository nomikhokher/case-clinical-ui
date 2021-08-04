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
  feedsListing?: FeedsLists[]
}

export interface Inputs {
  label?: string
  prop?: string
  description?: string
  dataType?: string
  typeArray?
}

export interface Outputs {
  label?: string
  prop?: string
  description?: string
  dataType?: string
}

// define  data types

export interface FeedsLists {
  id?: number
  heading?: string
  title?: string
  time?: string
  img?: string
  icon?: string
  size?: string
  iconClass?: string
}
