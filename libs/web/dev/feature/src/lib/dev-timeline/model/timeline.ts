export interface Timeline {
  id: string
  timelineColor: string
  icon: string
  status: string
  statusTitle?: string
}

export interface Inputs {
  label?: string
  prop?: string
  description?: string
  dataType?: string
  type?
  typeArray?: any
}
