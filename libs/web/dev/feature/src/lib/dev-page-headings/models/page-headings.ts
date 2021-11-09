export interface Config {
  meta?: Meta[]
  controls?: Controls[]
}

export type Meta = {
  icon?: string
  label?: string
}

export type Controls = {
  icon?: string
  text?: string
  color?: string
}

export interface ComponentProps {
  name?: string
  value?: any
}

export interface Input {
  label?: string
  prop?: string
  description?: string
  dataType?: string
  type?
  typeArray?
}
