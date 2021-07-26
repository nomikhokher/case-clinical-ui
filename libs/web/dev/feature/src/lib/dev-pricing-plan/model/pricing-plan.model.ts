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
  planSections?: PlanSection
  cards?: Card[]
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

export interface PlanSection {
  title?: string
  description?: string
  buttons?: Buttons[]
}

interface Buttons {
  label?: string
  bgColor?: string
}

export interface Card {
  cardHeader?: CardHead
  cardBody?: CardBody
}

export interface CardHead {
  heading?: string
  description?: string
  icon?: string
  price?: number
  btnLabel?: string
  btnColor?: string
}

export interface CardBody {
  heading?: string
  points?: Point[]
}

interface Point {
  text?: string
  icon?: string
}
