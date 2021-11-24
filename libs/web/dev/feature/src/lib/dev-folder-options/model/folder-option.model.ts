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
  folder: Folder
  download: Download
  width?: string
}

interface Folder {
  title?: string
  description?: string
}
interface Download {
  path?: string
  fileName?: string
}
export interface Inputs {
  label?: string
  prop?: string
  description?: string
  dataType?: string
  typeArray?
  typeObj?
  type?
}

export interface Outputs {
  label?: string
  prop?: string
  description?: string
  dataType?: string
}
