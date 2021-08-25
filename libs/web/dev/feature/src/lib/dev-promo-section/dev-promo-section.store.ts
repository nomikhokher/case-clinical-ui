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

interface DevPromoSectionState {
  items?: Item[]
  loading?: boolean
  config: Configs
}

const config: Configs = {
  headerTitle: 'Promo Section',
  githubURL: 'https://github.com/Schema-Driven/metadata/tree/main/libs/web/ui/promo-section/src/lib',
  breadcrumbs: [
    { label: 'Components', path: '/dev' },
    { label: 'Promo Section', path: '/dev/promo-section' },
  ],
  directory: '/libs/web/dev/feature/src/lib/dev-promo-section.component.ts',
  items: {
    heading: 'Get 25% off during our one-time sale',
    description: `Most of our products are limited releases that won't come back. Get your favorite items while they're in stock.`,
    btnText: 'Get access to our one-time sale',
    backgroundImg: 'https://tailwindui.com/img/ecommerce-images/home-page-02-sale-full-width.jpg',
    commentHeading: 'What are people saying?',
    comments: [
      {
        userId: 1,
        text:
          'My order arrived super quickly. The product is even better than I hoped it would be. Very happy customer over here!',
        name: 'Sarah',
        location: 'New Orleans',
      },
      {
        userId: 2,
        text:
          'I had to return a purchase that didn’t fit. The whole process was so simple that I ended up ordering two new items',
        name: 'Kelly ',
        location: 'Chicago',
      },
      {
        userId: 3,
        text:
          'Now that I’m on holiday for the summer, I’ll probably order a few more shirts. It’s just so convenient, and I know the quality will always be there',
        name: 'Chris Paul',
        location: 'Phoenix',
      },
    ],
  },

  component_inputs: [
    {
      label: 'Section Heading',
      prop: '[heading]',
      description: 'Display the heading of promo section',
      dataType: 'String',
    },
    {
      label: 'Description',
      prop: '[description]',
      description: 'Display the description of promo section',
      dataType: 'String',
    },
    {
      label: 'Button Text',
      prop: '[btnText]',
      description: 'Display the text of promo section button',
      dataType: 'String',
    },
    {
      label: 'Background Image',
      prop: '[backgroundImg]',
      description: 'Display the background image of promo section',
      dataType: 'String',
    },
    {
      label: 'Comment Heading',
      prop: '[commentHeading]',
      description: 'Display the comment heading of promo section',
      dataType: 'String',
    },
    {
      label: 'Comments',
      prop: '[comments]',
      description: 'Display the comments of promo section',
      dataType: 'Array',
      typeArray: [
        [
          {
            text:
              'My order arrived super quickly. The product is even better than I hoped it would be. Very happy customer over here!',
          },
          { name: 'Sarah' },
          { location: 'New Orleans' },
        ],
        [
          {
            text:
              'I had to return a purchase that didn’t fit. The whole process was so simple that I ended up ordering two new items',
          },
          { name: 'Kelly' },
          { location: 'Chicago' },
        ],
        [
          {
            text:
              'Now that I’m on holiday for the summer, I’ll probably order a few more shirts. It’s just so convenient, and I know the quality will always be there',
          },
          { name: 'Chris Paul' },
          { location: 'Phoenix' },
        ],
      ],
    },
  ],
}

@Injectable()
export class DevPromoSectionStore extends ComponentStore<DevPromoSectionState> {
  constructor(private readonly sdk: ApolloAngularSDK) {
    super({ config })
    this.loadItemsEffect()
  }

  readonly config$ = this.select(this.state$, (s) => s.config)
  readonly vm$ = this.select(this.config$, (config) => ({ config }))

  readonly loadItemsEffect = this.effect(($) =>
    $.pipe(
      tap(() => this.patchState({ loading: true })),
      switchMap(() =>
        of([{ id: Date.now().toString(), name: 'Item 1' }]).pipe(
          tapResponse(
            (res) => this.patchState({ items: res }),
            (e: any) => console.error('An error occurred', e),
          ),
        ),
      ),
    ),
  )
}
