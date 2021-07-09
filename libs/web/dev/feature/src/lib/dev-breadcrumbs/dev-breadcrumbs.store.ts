import { Injectable } from '@angular/core'
import { ComponentStore } from '@ngrx/component-store'
import { ApolloAngularSDK } from '@schema-driven/web/core/data-access'
import { Configs } from './model'

export interface Crumbs {
  name: string
  isactive: boolean
  tabHandler?: (Crumbs) => void
  content?: any
  icon?: string
}

interface DevCrumbsState {
  crumbs?: Crumbs[]
  config?: Configs
}

const config = {
  headerTitle: 'Breadcrumbs',
  githubURL: 'https://github.com/Schema-Driven/metadata/tree/main/libs/web/ui/breadcrumbs/src/lib',
  breadcrumbs: [
    { label: 'Components', path: '/dev' },
    { label: 'Breadcrumbs', path: '/dev/Breadcrumbs' },
  ],
  directory: '/libs/web/dev/feature/src/lib/dev-section-headings/dev-breadcrumbs.component.ts',
  items: [
    { name: 'Home', isactive: true, icon: 'home' },
    {
      name: 'Products',
      isactive: false,
      icon: 'development',
    },
    { name: 'Variants', isactive: false, icon: 'folder' },
    { name: 'Color', isactive: false, icon: 'about' },
    { name: 'Edit', isactive: false, icon: 'key' },
  ],
  alignment: 'left', // it can be [left, right, center, full]
  component_inputs: [
    {
      label: 'Breadcrumb Items',
      prop: '[crumbs]',
      description: 'This array contains the name and icons of breadcrumbs',
      dataType: 'String',
    },
    {
      label: 'Alignment',
      prop: '[alignment]',
      description: 'Adjust the position of breadcrumbs',
      dataType: 'Array',
    },
  ],
  component_outputs: [
    { label: 'Click', prop: '(click)', description: 'Invoked when button is clicked', dataType: '() => void' },
  ],
}

@Injectable()
export class DevBreadcrumbsStore extends ComponentStore<DevCrumbsState> {
  constructor(private readonly sdk: ApolloAngularSDK) {
    super({
      config,
    })
  }

  readonly config$ = this.select(this.state$, (s) => s.config)
  readonly vm$ = this.select(this.config$, (config) => ({ config }))
}
