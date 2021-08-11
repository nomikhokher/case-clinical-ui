import { Injectable } from '@angular/core'
import { ComponentStore, tapResponse } from '@ngrx/component-store'
import { ApolloAngularSDK } from '@schema-driven/web/core/data-access'
import { Crumb } from '@schema-driven/web/ui/breadcrumbs'
import { UiIcon } from '@schema-driven/web/ui/icon'
import { of } from 'rxjs'
import { switchMap, tap } from 'rxjs/operators'
import { Rating, Inputs } from './model'

export interface Item {
  id?: string
  name?: string
  ratings: Rating[]
  ratingColor?: string
  iconSize?: string
  icon?: string
}

interface DevRatingState {
  config?: Config
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
export class DevRatingStore extends ComponentStore<DevRatingState> {
  constructor(private readonly sdk: ApolloAngularSDK) {
    super({
      config: {
        previewData: {
          headerTitle: 'Rating',
          githubURL: 'https://github.com/Schema-Driven/metadata/tree/main/libs/web/ui/rating/src/lib',
          breadcrumbs: [
            { label: 'Components', path: '/dev' },
            { label: 'Rating', path: '/dev/rating' },
          ],
          directory: '/libs/web/dev/feature/src/lib/dev-rating/dev-rating.component.ts',
        },
        items: {
          ratingColor: 'yellow',
          icon: 'ratingStar',
          iconSize: '12',
          ratings: [
            { amount: 1, label: 'Terrible' },
            { amount: 2, label: 'Bad' },
            { amount: 3, label: 'Okay' },
            { amount: 4, label: 'Good' },
            { amount: 5, label: 'Great' },
          ],
        },
        component_inputs: [
          {
            label: 'Color',
            prop: '[ratingColor]',
            description: 'Adjust the color of rating',
            dataType: 'Array',
          },
          {
            label: 'Icon',
            prop: '[icon]',
            description: 'Adjust the icon of rating',
            dataType: 'Array',
            type: Object.values(UiIcon),
          },
          {
            label: 'Icon Size',
            prop: '[iconSize]',
            description: 'Adjust the size of icon',
            dataType: 'Array',
          },
          {
            label: 'Ratings',
            prop: '[ratings]',
            description:
              'a rating indicated by stars (usually 1–5), the highest number of stars indicating the best quality, highest amount etc',
            dataType: 'Array',
            typeArray: [
              [{ label: 'Terrible' }],
              [{ label: 'Bad' }],
              [{ label: 'Okay' }],
              [{ label: 'Good' }],
              [{ label: 'Great' }],
            ],
          },
        ],
      },
    })
  }

  readonly config$ = this.select(this.state$, (s) => s.config)
  readonly vm$ = this.select(this.config$, (config) => ({ config }))
}
