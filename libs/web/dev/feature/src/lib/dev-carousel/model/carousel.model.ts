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
  height?: string
  width?: string
  corners?: string
  images?: Image[]
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
interface Image {
  path?: string
}
