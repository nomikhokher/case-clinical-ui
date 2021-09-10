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

interface DevWildcardPagesState {
  items?: Item[]
  loading?: boolean
  config: Configs
}

const config: Configs = {
  headerTitle: 'Wildcard Pages',
  githubURL: 'https://github.com/Schema-Driven/metadata/tree/main/libs/web/ui/wildcard-pages/src/lib',
  breadcrumbs: [
    { label: 'Components', path: '/dev' },
    { label: 'Wildcard Pages', path: '/dev/wildcard-pages' },
  ],
  directory: '/libs/web/dev/feature/src/lib/dev-wildcard-pages.component.ts',
  items: {
    pageStyle: 'simpleWithLogo', // splitWithImage, simpleWithLogo, withBackgroundImage
    logo: 'https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600',
    statusCode: 404,
    pageTitle: 'Page not found',
    message: 'Sorry, we couldn’t find the page you’re looking for.',
    btnText: 'Go back home',
    linkToRedirect: 'http://localhost:4200/dev',
    backImage:
      'https://images.unsplash.com/photo-1470847355775-e0e3c35a9a2c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1825&q=80',
  },

  component_inputs: [
    {
      label: 'Page Style',
      prop: '[pageStyle]',
      description: 'Adjust the page style.',
      dataType: 'String',
      type: ['splitWithImage', 'simpleWithLogo', 'withBackgroundImage'],
    },
    {
      label: 'Logo',
      prop: '[logo]',
      description: 'Display the logo of page.',
      dataType: 'String',
    },
    {
      label: 'Status Code',
      prop: '[statusCode]',
      description: 'Change the status code.',
      dataType: 'Number',
    },
    {
      label: 'Page Title',
      prop: '[pageTitle]',
      description: 'Display the page title.',
      dataType: 'String',
    },
    {
      label: 'Error Message',
      prop: '[message]',
      description: 'Display the page error message.',
      dataType: 'String',
    },
    {
      label: 'Button Text',
      prop: '[btnText]',
      description: 'Display the button text.',
      dataType: 'String',
    },
    {
      label: 'Link To Redirect',
      prop: '[linkToRedirect]',
      description: 'Adjust the link of route where you redirect.',
      dataType: 'String',
    },
    {
      label: 'Background Image',
      prop: '[backImage]',
      description: 'Display the background image.',
      dataType: 'String',
    },
  ],
}

@Injectable()
export class DevWildcardPagesStore extends ComponentStore<DevWildcardPagesState> {
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
