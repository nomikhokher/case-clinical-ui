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

interface DevCarouselState {
  items?: Item[]
  loading?: boolean
  config: Configs
}

const config: Configs = {
  headerTitle: 'Carousel',
  githubURL: 'https://github.com/Schema-Driven/metadata/tree/main/libs/web/ui/carousel/src/lib',
  breadcrumbs: [
    { label: 'Components', path: '/dev' },
    { label: 'Carousel', path: '/dev/carousel' },
  ],
  directory: '/libs/web/dev/feature/src/lib/dev-section-headings/dev-carousel.component.ts',
  items: {
    bgColor: 'red',
    height: '96',
    width: 'full', // position = top/bottom
    corners: 't-xl', // corners = sm/md/lg/xl/2xl/3xl/full/t-none/t-sm/t
    images: [
      {
        img:
          'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        img:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        img:
          'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    ],
  },
  component_inputs: [
    {
      label: 'Background Color',
      prop: '[bgColor]',
      description: 'Adjust the footer background color',
      dataType: 'String',
    },
    {
      label: 'Carousel Height',
      prop: '[height]',
      description: 'Adjust the height of carousel',
      dataType: 'String',
    },
    {
      label: 'Carousel Width',
      prop: '[width]',
      description: 'Adjust the width of carousel',
      dataType: 'String',
    },
    {
      label: 'Carousel Corners',
      prop: '[corners]',
      description: 'Displays the rounded corners of carousel',
      dataType: 'String',
      type: ['sm', 'md', 'lg', 'xl', '2xl', '3xl', 'full', 't-none', 't-sm', 't'],
    },
    {
      label: 'Images',
      prop: '[images]',
      description: 'Display Images in the carousel',
      dataType: 'Array',
      typeArray: [
        [
          {
            img:
              'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          },
        ],
        [
          {
            img:
              'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          },
        ],
        [
          {
            img:
              'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          },
        ],
      ],
    },
  ],
}

@Injectable()
export class DevCarouselStore extends ComponentStore<DevCarouselState> {
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
