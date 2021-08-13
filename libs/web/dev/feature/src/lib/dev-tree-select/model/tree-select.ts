export interface FlatNode {
  id: number
  expandable: boolean
  name: string
  level: number
  isExpanded?: boolean
}
export interface ComponentProp {
  label?: string
  description?: string
  prop?: string
  dataType?: string
  typeArray?
}
