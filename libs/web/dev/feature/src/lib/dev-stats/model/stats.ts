export interface Stats {
  title?: string
  border_none?: string
  values?: Values
  icon: string
  link: string
}

export type Values = {
  type: string
  total: string
  current: string
  previous: string
  difference: Difference
  overwrite: boolean
}

export type Difference = {
  numeric: number
  percentage: string
  type: string
}

export interface ComponentProp {
  label?: string
  description?: string
  dataType?: string
  prop?: string
}
