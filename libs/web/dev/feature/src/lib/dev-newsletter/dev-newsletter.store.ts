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

interface DevNewsletterState {
  items?: Item[]
  loading?: boolean
  config: Configs
}

const config: Configs = {
  headerTitle: 'NewsLetter',
  githubURL: 'https://github.com/Schema-Driven/metadata/tree/main/libs/web/ui/newsletter/src/lib',
  breadcrumbs: [
    { label: 'Components', path: '/dev' },
    { label: 'NewsLetter', path: '/dev/newsletter' },
  ],
  directory: '/libs/web/dev/feature/src/lib/dev-newsletter/dev-newsletter.component.ts',
  items: {
    heading: 'Sign up for our newsletter',
    description:
      'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui Lorem cupidatat commodo. Elit sunt amet fugiat.',
    bgColor: 'indigo',
    buttonText: 'Notify me',
    tagLine: 'We care about the protection of your data. Read our',
  },
  component_inputs: [
    {
      label: 'Heading',
      prop: '[heading]',
      description: 'Display the heading of newsletter.',
      dataType: 'String',
    },
    {
      label: 'Description',
      prop: '[description]',
      description: 'Display the description of newsletter.',
      dataType: 'String',
    },
    {
      label: 'Background Color',
      prop: '[bgColor]',
      description: 'Change the background color of newsletter.',
      dataType: 'String',
    },
    {
      label: 'Button Text',
      prop: '[buttonText]',
      description: 'Display the button text.',
      dataType: 'String',
    },
    {
      label: 'Tag Line',
      prop: '[tagLine]',
      description: 'Display the tag line of newsletter.',
      dataType: 'String',
    },
  ],
}

@Injectable()
export class DevNewsletterStore extends ComponentStore<DevNewsletterState> {
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
