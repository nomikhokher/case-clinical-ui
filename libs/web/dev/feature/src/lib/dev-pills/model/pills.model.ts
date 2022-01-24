export interface Configs {
  headerTitle?: string
  githubURL?: string
  directory?: string
  breadcrumbs?: Crumbs[]
  items?: Item[]
  component_inputs?: Inputs[]
}
export interface Crumbs {
  label?: string
  path?: string
}
export interface Item {
  id: number
  pillsActive?: boolean
  pillsTitle: string
  pillsDetails: string
}
export interface Inputs {
  label?: string
  description?: string
  prop?: string
  dataType?: string
  type?: boolean
  typeObj?
  typeArray?
}
