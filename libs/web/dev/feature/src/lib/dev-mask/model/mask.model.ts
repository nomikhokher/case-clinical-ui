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
  bgColor?: string
}
