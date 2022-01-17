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
  tabsData?: TabsData[]
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
interface featureOverview {
  heading?: string
  description?: string
}
interface TabsData {
  id?: number
  icon?: string
  title?: string
  bgColor?: string
  textColor?: string
}
