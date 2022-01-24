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
  label: string
  prop: string
  description: string
  title?: string
  dataType?: string
  type?
  typeObj?
  typeArray?
}
export interface TabsData {
  title: string
  textColor: string
  textAlign: string
  borderColor: string
  rounded: string
  pointer: string
  enabled: boolean
  focus: string
  hover: string
  bgColor: string
}
