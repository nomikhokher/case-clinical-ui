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

export interface Inputs {
  label?: string
  prop?: string
  description?: string
  dataType?: string
  type?
  typeArray?
  typeObj?
}

export interface Item {
  id?: string
  name?: string
  images: Images[]
  imagesForSlider: Images[]
}

export interface Images {
  path: string
}
