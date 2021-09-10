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
  featureOverview?: featureOverview
  tabsData?: TabsData[]
  tabs?: Tabs[]
  withTabs?: boolean
}
interface Tabs {
  id?: number
  name?: string
}
interface TabsData {
  id?: number
  title?: string
  description?: string
  productImg?: string
}
interface featureOverview {
  heading?: string
  description?: string
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
