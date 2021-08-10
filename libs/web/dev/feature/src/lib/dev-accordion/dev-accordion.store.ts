import { Injectable } from '@angular/core'
import { ComponentStore } from '@ngrx/component-store'
import { ApolloAngularSDK } from '@schema-driven/web/core/data-access'
import { Crumb } from '@schema-driven/web/ui/breadcrumbs'
import { Accordion, Inputs } from './model'

export interface Item {
  accordions?: any[]
}
interface PreviewData {
  headerTitle?: string
  githubURL?: string
  breadcrumbs?: Crumb[]
  directory?: string
}

interface DevAccordionState {
  config?: Config
}
interface Config {
  previewData?: PreviewData
  items?: Item
  loading?: boolean
  component_inputs?: Inputs[]
  component_outputs?: Inputs[]
}

@Injectable()
export class DevAccordionStore extends ComponentStore<DevAccordionState> {
  constructor(private readonly sdk: ApolloAngularSDK) {
    super({
      config: {
        previewData: {
          headerTitle: 'Accordion',
          githubURL: 'https://github.com/Schema-Driven/metadata/tree/main/libs/web/ui/accordion/src/lib',
          breadcrumbs: [
            { label: 'Components', path: '/dev' },
            { label: 'Accordion', path: '/dev/accordion' },
          ],
          directory: '/libs/web/dev/feature/src/lib/dev-accordion/dev-accordion.component.ts',
        },
        items: {
          accordions: [
            `ishfduh`,
            {
              id: '1',
              btnText: 'Collapsible Group Item #1',
              description: `
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon
              officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3
              wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
              Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan
              excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt
              you probably haven't heard of them accusamus labore sustainable VHS.`,
              show: false,
              icon: 'chevronRight',
            },
            {
              id: '2',
              btnText: 'Collapsible Group Item #2',
              description: `
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon
              officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3
              wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
              Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan
              excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt
              you probably haven't heard of them accusamus labore sustainable VHS.`,
              show: false,
              icon: 'chevronRight',
            },
            {
              id: '3',
              btnText: 'Collapsible Group Item #3',
              description: `
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon
              officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3
              wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
              Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan
              excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt
              you probably haven't heard of them accusamus labore sustainable VHS.`,
              show: false,
            },
          ],
        },
        component_inputs: [
          {
            label: 'Accordion',
            prop: '[accordions]',
            description:
              'The accordion is a graphical control element comprising a vertically stacked list of items, such as labels or thumbnails. Each item can be "expanded" or "collapsed" to reveal the content associated with that item.',
            dataType: 'Array',
          },
        ],
      },
    })
  }

  readonly config$ = this.select(this.state$, (s) => s.config)
  readonly vm$ = this.select(this.config$, (config) => ({ config }))
}
