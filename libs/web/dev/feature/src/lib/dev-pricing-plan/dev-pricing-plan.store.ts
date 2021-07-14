import { Injectable } from '@angular/core'
import { ComponentStore, tapResponse } from '@ngrx/component-store'
import { ApolloAngularSDK } from '@schema-driven/web/core/data-access'
import { of } from 'rxjs'
import { switchMap, tap } from 'rxjs/operators'
import { Configs } from './model'

export interface Item {
  id?: string
  name?: string
}

interface DevPricingPlanState {
  items?: Item[]
  config?: Configs
}

const config: Configs = {
  headerTitle: 'Pricing Plans',
  githubURL: 'https://github.com/Schema-Driven/metadata/tree/main/libs/web/ui/pricing-plan/src/lib',
  breadcrumbs: [
    { label: 'Components', path: '/dev' },
    { label: 'Pricing Plans', path: '/dev/pricing-plans' },
  ],
  directory: '/libs/web/dev/feature/src/lib/dev-pricing-plan.component.ts',
  items: {
    planSections: {
      title: 'Pricing Plans',
      description:
        'Start building for free, then add a site plan to go live. Account plans unlock additional features.',
      buttons: [
        {
          label: 'Monthly billing',
          bgColor: 'white',
        },
        {
          label: 'Yearly billing',
          bgColor: 'gray',
        },
      ],
    },
    cards: [
      {
        cardHeader: {
          heading: 'Hobby',
          description:
            'Start building for free, then add a site plan to go live. Account plans unlock additional features.',
          price: 12,
          btnLabel: 'Buy Hobby',
          btnColor: 'gray', // default color is gray
        },
        cardBody: {
          heading: "WHAT'S INCLUDED",
          points: [
            {
              text: 'Potenti felis, in cras at at ligula nunc.',
              icon: 'check',
            },
            {
              text: 'Potenti felis, in cras at at ligula nunc.',
              icon: 'check',
            },
            {
              text: 'Potenti felis, in cras at at ligula nunc.',
              icon: 'check',
            },
          ],
        },
      },
      {
        cardHeader: {
          heading: 'Freelancer',
          description:
            'Start building for free, then add a site plan to go live. Account plans unlock additional features.',
          price: 24,
          btnLabel: 'Buy Freelancer',
          btnColor: 'gray', // default color is gray
        },
        cardBody: {
          heading: "WHAT'S INCLUDED",
          points: [
            {
              text: 'Potenti felis, in cras at at ligula nunc.',
              icon: 'check',
            },
            {
              text: 'Potenti felis, in cras at at ligula nunc.',
              icon: 'check',
            },
            {
              text: 'Potenti felis, in cras at at ligula nunc.',
              icon: 'check',
            },
          ],
        },
      },
      {
        cardHeader: {
          heading: 'Startup',
          description:
            'Start building for free, then add a site plan to go live. Account plans unlock additional features.',
          price: 36,
          btnLabel: 'Buy Startup',
          btnColor: 'gray', // default color is gray
        },
        cardBody: {
          heading: "WHAT'S INCLUDED",
          points: [
            {
              text: 'Potenti felis, in cras at at ligula nunc.',
              icon: 'check',
            },
            {
              text: 'Potenti felis, in cras at at ligula nunc.',
              icon: 'check',
            },
            {
              text: 'Potenti felis, in cras at at ligula nunc.',
              icon: 'check',
            },
          ],
        },
      },
      {
        cardHeader: {
          heading: 'Enterprise',
          description:
            'Start building for free, then add a site plan to go live. Account plans unlock additional features.',
          price: 48,
          btnLabel: 'Buy Enterprise',
          btnColor: 'gray', // default color is gray
        },
        cardBody: {
          heading: "WHAT'S INCLUDED",
          points: [
            {
              text: 'Potenti felis, in cras at at ligula nunc.',
              icon: 'check',
            },
            {
              text: 'Potenti felis, in cras at at ligula nunc.',
              icon: 'check',
            },
            {
              text: 'Potenti felis, in cras at at ligula nunc.',
              icon: 'check',
            },
          ],
        },
      },
    ],
  },

  component_inputs: [
    {
      label: 'Plan Section',
      prop: '[planSections]',
      description: 'Show the Section heading, description and buttons',
      dataType: 'Object',
    },
    {
      label: 'Card',
      prop: '[cards]',
      description: 'Show the cards, card heading, descriptions, price, button, card body heading and points',
      dataType: 'Object',
    },
  ],
}

@Injectable()
export class DevPricingPlanStore extends ComponentStore<DevPricingPlanState> {
  constructor(private readonly sdk: ApolloAngularSDK) {
    super({ config })
    // this.loadItemsEffect()
  }

  readonly config$ = this.select(this.state$, (s) => s.config)
  readonly vm$ = this.select(this.config$, (config) => ({ config }))

  // readonly loadItemsEffect = this.effect(($) =>
  //   $.pipe(
  //     tap(() => this.patchState({ loading: true })),
  //     switchMap(() =>
  //       of([{ id: Date.now().toString(), name: 'Item 1' }]).pipe(
  //         tapResponse(
  //           (res) => this.patchState({ items: res }),
  //           (e: any) => console.error('An error occurred', e),
  //         ),
  //       ),
  //     ),
  //   ),
  // )
}
