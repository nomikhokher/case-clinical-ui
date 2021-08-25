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
  reviews?: Reviews
  customers?: Customer[]
}

export interface Inputs {
  label?: string
  prop?: string
  description?: string
  dataType?: string
  typeArray?
  typeObj?
}

interface Customer {
  id?: number
  name?: string
  img?: string
  review?: number
  comment?: string
}
interface Reviews {
  fiveStar?: number | string
  fourStar?: number | string
  threeStar?: number | string
  twoStar?: number | string
  oneStar?: number | string
}
