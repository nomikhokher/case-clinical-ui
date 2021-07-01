export interface NavLink {
  title?: string
  subTitle?: string
  label?: string
  route?: string
  icon?: string
  badge?: string | number
  children?: NavLink[]
}
