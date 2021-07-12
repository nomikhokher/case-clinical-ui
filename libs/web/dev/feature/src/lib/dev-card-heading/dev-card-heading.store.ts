import { Injectable } from '@angular/core'
import { ComponentStore } from '@ngrx/component-store'
import { ApolloAngularSDK } from '@schema-driven/web/core/data-access'
import { Crumb } from '@schema-driven/web/ui/breadcrumbs'
import { Button, ProfileLink, Input, Output } from './model'

export interface Item {
  id?: string
  name?: string
  buttons?: Button[]
  profile?: ProfileLink
  sectionToggle?: boolean
}

interface DevCardHeadingState {
  headerTitle?: string
  githubURL?: string
  breadcrumbs?: Crumb[]
  directory?: string
  items?: Item
  loading?: boolean
  component_inputs?: Input[]
  component_outputs?: Output[]
}

@Injectable()
export class DevCardHeadingStore extends ComponentStore<DevCardHeadingState> {
  constructor(private readonly sdk: ApolloAngularSDK) {
    super({
      headerTitle: 'Card Headings',
      githubURL: 'https://github.com/Schema-Driven/metadata/tree/main/libs/web/ui/card-heading/src/lib',
      breadcrumbs: [
        { label: 'Components', path: '/dev' },
        { label: 'Card Headings', path: '/dev/card/heading' },
      ],
      directory: '/libs/web/dev/feature/src/lib/dev-card-heading/dev-card-heading.component.ts',
      items: {
        buttons: [
          {
            text: 'Phone',
            color: 'white',
            icon: 'phone',
            fontColor: 'gray-700',
          },
          {
            text: 'Email',
            color: 'white',
            icon: 'email',
            fontColor: 'gray-700',
          },
        ],

        profile: {
          title: 'Tom Cook',
          image:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          tagLine: '@tom_cook',
          icon: 'user',
        },
        sectionToggle: false,
      },
      component_inputs: [
        {
          label: 'Buttons',
          prop: '[button]',
          description: `This object takes button's name, color and icon values and display it.`,
          dataType: 'Object',
        },
        {
          label: 'Profile Content',
          prop: '[profile]',
          description: 'This object takes profile details and shows it.',
          dataType: 'Object',
        },
        {
          label: 'Section Toggle',
          prop: '[sectionToggle]',
          description: 'Change the position of button and profile',
          dataType: 'Boolean',
        },
      ],
      component_outputs: [
        { label: 'Click', prop: '(click)', description: 'Invoked when button is clicked', dataType: '() => void' },
      ],
    })
  }

  readonly vm$ = this.select(this.state$, (s) => s)
}
