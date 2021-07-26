import { Injectable, ɵisListLikeIterable } from '@angular/core'
import { ComponentStore } from '@ngrx/component-store'
import { Crumb } from '@schema-driven/web/ui/breadcrumbs'
import { WebUiToastService } from '@schema-driven/web/ui/toast'
import { ComponentProp, TabsData, TabsWithIcons, TabswithBadges } from './model'

export interface Tabs {
  name: string
  active?: boolean
  content?: any
  icon?: string
  notification?: number
}

interface PreviewData {
  headerTitle?: string
  githubURL?: string
  breadcrumbs?: Crumb[]
  directory?: string
}

interface Config {
  previewData: PreviewData
  component_inputs?: ComponentProp[]
  component_outputs?: ComponentProp[]
  tabs?: TabsData[]
  tabswithBadges?: TabswithBadges[]
  tabsWithIcons?: TabsWithIcons[]
  alignment?: string
  style?: string
}

interface DevTabsState {
  config?: Config
  tabOptions?: Tabs[]
}

@Injectable()
export class DevTabsStore extends ComponentStore<DevTabsState> {
  home: string = ` <p> Home </p>`
  about: string = ` <p>About</p>`
  services: string = ` <p>Services</p>`
  carrer: string = ` <p>Carrer</p>`
  contact: string = ` <p>Contact us</p>`

  constructor(private readonly toast: WebUiToastService) {
    super({
      tabOptions: [],
      config: {
        previewData: {
          headerTitle: 'Tab',
          githubURL: 'https://github.com/Schema-Driven/metadata/tree/main/libs/web/ui/tab/src/lib',
          breadcrumbs: [
            { label: 'Components', path: '/dev' },
            { label: 'Tab', path: '/dev/tab' },
          ],
          directory: '/libs/web/dev/feature/src/lib/dev-tab/dev-tab.component.ts',
        },
        tabs: [
          { item: 'My Account', path: '/dev/tabs' },
          { item: 'Company', path: '/dev/tabs' },
          { item: 'Team Member', path: '/dev/tabs' },
          { item: 'Billing', path: '/dev/tabs' },
        ],
        tabswithBadges: [
          { item: 'My Account', badge: '4' },
          { item: 'Company' },
          { item: 'Team Member', badge: '12' },
          { item: 'Billing', badge: '3' },
        ],
        tabsWithIcons: [
          { item: 'My Account', icon: 'user' },
          { item: 'Company', icon: 'office' },
          { item: 'Team Member', icon: 'team' },
          { item: 'Billing', icon: 'credit' },
        ],

        style: 'underline',
        alignment: 'right', //alignment can be [center, right, left, full]
        component_inputs: [
          {
            label: 'Item',
            prop: '[item]',
            description: 'Item props tell us what is name of your tab.',
            dataType: 'Boolean',
          },
          {
            label: 'Path',
            prop: '[path]',
            description: 'path tell us where is navigate your tab.',
            dataType: 'String',
          },
          {
            label: 'Style',
            prop: '[style]',
            description: 'style tell us what is your anchor hover style.',
            dataType: 'String',
          },
          {
            label: 'Alignment',
            prop: '[alignment]',
            description: 'alignment tell us where is directions your tab start.',
            dataType: 'String',
          },
        ],
      },
    })

    this.patchState({
      tabOptions: [
        { name: 'Home', content: this.home, notification: 52 },
        { name: 'About', content: this.about, notification: 2 },
        { name: 'Services', content: this.services, notification: 6 },
        { name: 'Carrer', content: this.carrer },
        { name: 'Contact us', content: this.contact },
      ],
    })
  }

  readonly config$ = this.select(this.state$, (s) => s.config)
  readonly tabOptions$ = this.select(this.state$, (s) => s.tabOptions)
  readonly vm$ = this.select(this.tabOptions$, this.config$, (tabOptions, config) => ({ tabOptions, config }))
}
