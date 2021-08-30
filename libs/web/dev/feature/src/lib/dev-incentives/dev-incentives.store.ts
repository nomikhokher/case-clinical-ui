import { Injectable } from '@angular/core'
import { ComponentStore } from '@ngrx/component-store'
import { ApolloAngularSDK } from '@schema-driven/web/core/data-access'
import { Crumb } from '@schema-driven/web/ui/breadcrumbs'
import { Incentives, Input as Inputs } from './model'

export interface Item {
  incentives?: Incentives[]
  direction: string
}

interface DevIncentivesState {
  config: Config
}

interface PreviewData {
  headerTitle?: string
  githubURL?: string
  breadcrumbs?: Crumb[]
  directory?: string
}

interface Config {
  previewData?: PreviewData
  items?: Item
  loading?: boolean
  component_inputs?: Inputs[]
  component_outputs?: Inputs[]
}
@Injectable()
export class DevIncentivesStore extends ComponentStore<DevIncentivesState> {
  constructor(private readonly sdk: ApolloAngularSDK) {
    super({
      config: {
        previewData: {
          headerTitle: 'Incentives',
          githubURL: 'https://github.com/Schema-Driven/metadata/tree/main/libs/web/ui/Incentives/src/lib',
          breadcrumbs: [
            { label: 'Components', path: '/dev' },
            { label: 'Incentives', path: '/dev/Incentives' },
          ],
          directory: '/libs/web/dev/feature/src/lib/dev-Incentives/dev-Incentives.component.ts',
        },
        items: {
          direction: 'vertical',
          incentives: [
            {
              name: 'Free shipping',
              imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-shipping-simple.svg',
              description:
                "It's not actually free we just price it into the products. Someone's paying for it, and it's not us.",
            },
            {
              name: '10-year warranty',
              imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg',
              description: "If it breaks in the first 10 years we'll replace it. After that you're on your own though.",
            },
            {
              name: 'Exchanges',
              imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-exchange-simple.svg',
              description:
                "If you don't like it, trade it to one of your friends for something of theirs. Don't send it here though.",
            },
          ],
        },
        component_inputs: [
          {
            label: 'Incentives',
            prop: '[incentives]',
            description: `E-commerce incentives help pave the way to getting B2B customers shopping online, building trust and customer loyalty in the process.`,
            dataType: 'Array',
            typeArray: [
              [
                { name: 'Free shipping' },
                { imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-shipping-simple.svg' },
                {
                  description: `It's not actually free we just price it into the products. Someone's paying for it, and it's not us.`,
                },
              ],
              [
                { name: '10-year warranty' },
                { imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg' },
                {
                  description: `If it breaks in the first 10 years we'll replace it. After that you're on your own though.`,
                },
              ],
              [
                { name: 'Exchanges' },
                { imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-exchange-simple.svg' },
                {
                  description: `If you don't like it, trade it to one of your friends for something of theirs. Don't send it here though.`,
                },
              ],
            ],
          },
          {
            label: 'Direction',
            prop: '[direction]',
            description: 'Incentives layout change direction horizontal or vertical',
            dataType: 'String',
            type: ['vertical', 'horizontal'],
          },
        ],
      },
    })
  }

  readonly config$ = this.select(this.state$, (s) => s.config)
  readonly vm$ = this.select(this.config$, (config) => ({ config }))
}
