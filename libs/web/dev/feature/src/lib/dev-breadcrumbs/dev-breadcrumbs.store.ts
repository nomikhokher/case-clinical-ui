import { Injectable } from '@angular/core'
import { ComponentStore } from '@ngrx/component-store'
import { ApolloAngularSDK } from '@schema-driven/web/core/data-access'
import { UiIcon } from '@schema-driven/web/ui/icon'
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

let icon = Object.values(UiIcon)

const config = {
  headerTitle: 'Breadcrumbs',
  githubURL: 'https://github.com/Schema-Driven/metadata/tree/main/libs/web/ui/breadcrumbs/src/lib',
  breadcrumbs: [
    { label: 'Components', path: '/dev' },
    { label: 'Breadcrumbs', path: '/dev/breadcrumbs' },
  ],
  directory: '/libs/web/dev/feature/src/lib/dev-section-headings/dev-breadcrumbs.component.ts',
  items: {
    crumbs: [
      { label: 'Home', isactive: true, icon: 'home' },
      {
        label: 'Products',
        isactive: false,
        icon: 'development',
      },
      { label: 'Variants', isactive: false, icon: 'folder' },
      { label: 'Color', isactive: false, icon: 'about' },
      { label: 'Edit', isactive: false, icon: 'key' },
    ],
    alignment: 'left',
  }, // it can be [left, right, center, full]
  component_inputs: [
    {
      label: 'Breadcrumb Items',
      prop: '[crumbs]',
      description: 'This array contains the name and icons of breadcrumbs',
      dataType: 'String',
      typeArray: [
        [{ label: 'Home' }, { isactive: 'true' }, { icon: icon }],
        [{ label: 'Products' }, { isactive: 'false' }, { icon: icon }],
        [{ label: 'Variants' }, { isactive: 'false' }, { icon: icon }],
        [{ label: 'Color' }, { isactive: 'false' }, { icon: icon }],
        [{ label: 'Edit' }, { isactive: 'false' }, { icon: icon }],
      ],
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
