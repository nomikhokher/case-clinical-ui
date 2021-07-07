export interface Configs {
  headerTitle?: string
  githubURL?: string
  directory?: string
  breadcrumbs?: Crumbs[]
  items?: Item[]
}

export interface Crumbs {
  label?: string
  path?: string
}
export interface Item {
  mode?: string
  payload?: string
  size?: number
  radius?: string
  badge?: Badge
}
export interface Badge {
  color?: string
  position?: string
}
