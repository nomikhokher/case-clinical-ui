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

interface DevReviewsState {
  items?: Item[]
  loading?: boolean
  config?: Configs
}

const config: Configs = {
  headerTitle: 'Reivews',
  githubURL: 'https://github.com/Schema-Driven/metadata/tree/main/libs/web/ui/reviews/src/lib',
  breadcrumbs: [
    { label: 'Components', path: '/dev' },
    { label: 'Reivews', path: '/dev/reviews' },
  ],
  directory: '/libs/web/dev/feature/src/lib/dev-reviews.component.ts',
  items: {
    reviews: {
      fiveStar: 1023,
      fourStar: 123,
      threeStar: 43,
      twoStar: 11,
      oneStar: 190,
    },

    customers: [
      {
        id: 1,
        name: 'Emily John',
        img:
          'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
        review: 4,
        comment:
          'This is the bag of my dreams. I took it on my last vacation and was able to fit an absurd amount of snacks for the many long and hungry flights.',
      },
      {
        id: 2,
        name: 'Hector Gibbons',
        img:
          'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
        review: 5,
        comment: `Before getting the Ruck Snack, I struggled my whole life with pulverized snacks, endless crumbs, and other heartbreaking snack catastrophes. Now, I can stow my snacks with confidence and style!`,
      },
    ],
  },

  component_inputs: [
    {
      label: 'Total Reviews',
      prop: '[reviews]',
      description: 'Shows the total reviews of product.',
      dataType: 'Number',
      typeObj: [{ fiveStar: '1023' }, { fourStar: '123' }, { threeStar: '43' }, { twoStar: '11' }, { oneStar: '190' }],
    },
    {
      label: "Customer's Comments",
      prop: '[customers]',
      description: 'Shows all the comment and review of customers',
      dataType: 'Array',
      typeArray: [
        [
          { name: 'Emily John' },
          {
            img:
              'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
          },
          { review: ['1', '2', '3', '4', '5'] },
          {
            comment: `'This is the bag of my dreams. I took it on my last vacation and was able to fit an absurd amount of snacks for the many long and hungry flights.`,
          },
        ],
        [
          { name: 'Hector Gibbons' },
          {
            img:
              'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
          },
          { review: ['1', '2', '3', '4', '5'] },
          {
            comment: `Before getting the Ruck Snack, I struggled my whole life with pulverized snacks, endless crumbs, and other heartbreaking snack catastrophes. Now, I can stow my snacks with confidence and style!`,
          },
        ],
      ],
    },
  ],
}

@Injectable()
export class DevReviewsStore extends ComponentStore<DevReviewsState> {
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
