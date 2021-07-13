export interface Configs {
  headerTitle?: string
  githubURL?: string
  directory?: string
  breadcrumbs?: Crumbs[]
  items?: Item[]
  component_inputs?: Inputs[]
  component_outputs?: Outputs[]
}

export interface Crumbs {
  label?: string
  path?: string
}
export interface Item {
  icon?: string
  avatarImg?: string
  name?: string
  title?: string
  closeBtn?: boolean
  show?: boolean
  timeInSec?: number
  background?: string
  leftSectionButton?: ButtonReply[]
  bottomSectionButton?: ButtonReply[]
}

export interface Inputs {
  label?: string
  prop?: string
  description?: string
  dataType?: string
}

export interface Outputs {
  label?: string
  prop?: string
  description?: string
  dataType?: string
}

export interface ButtonReply {
  id?: number
  name: string
  fn?: (x: any) => any
}
