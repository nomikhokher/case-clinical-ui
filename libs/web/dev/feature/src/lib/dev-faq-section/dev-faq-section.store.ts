import { Injectable } from '@angular/core'
import { ComponentStore, tapResponse } from '@ngrx/component-store'
import { ApolloAngularSDK } from '@schema-driven/web/core/data-access'
import { of } from 'rxjs'
import { switchMap, tap } from 'rxjs/operators'
import { Configs } from './model/index'

export interface Item {
  id?: string
  name?: string
}

interface DevFaqSectionState {
  items?: Item[]
  loading?: boolean
  config?: Configs
}

const config: Configs = {
  headerTitle: 'FAQs',
  githubURL: 'https://github.com/Schema-Driven/metadata/tree/main/libs/web/ui/faq-section/src/lib',
  breadcrumbs: [
    { label: 'Components', path: '/dev' },
    { label: 'FAQs', path: '/dev/faq-section' },
  ],
  directory: '/libs/web/dev/feature/src/lib/dev-faq-section/dev-faq-section.component.ts',
  items: {
    title: 'Frequently asked questions',
    description: 'Ac euismod vel sit maecenas id pellentesque eu sed consectetur.',
    faqStyle: 'hidden', // faqStyle should must be one of them [sideByside, show, hidden]
    background: 'gray', // default color is gray
    content: [
      {
        question: 'How do you make holy water?',
        answer:
          'You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat',
      },
      {
        question: `What's the best thing about Switzerland?`,
        answer: `I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat`,
      },
      {
        question: `What do you call someone with no body and no nose?`,
        answer: `Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.`,
      },
      {
        question: `Why do you never see elephants hiding in trees?`,
        answer: `Because they're so good at it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.`,
      },
    ],
  },
  component_inputs: [
    { label: 'Title', prop: '[title]', description: 'Shows the title.', dataType: 'String' },
    {
      label: 'Description/Tag Line',
      prop: '[description]',
      description: 'Shows the description under the title.',
      dataType: 'String',
    },
    {
      label: 'FAQ Section Style',
      prop: '[faqStyle]',
      description: 'Change the style of FAQ Section.',
      dataType: 'String',
      type: ['sideByside', 'show', 'hidden'],
    },
    {
      label: 'Background Color',
      prop: '[background]',
      description: 'Adjust the background color.',
      dataType: 'String',
    },
    {
      label: 'Content',
      prop: '[content]',
      description: 'Show the content in section.',
      dataType: 'Object',
      typeArray: [
        [
          { question: 'How do you make holy water?' },
          {
            answer:
              'You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat',
          },
        ],
        [
          { question: `What's the best thing about Switzerland?` },
          {
            answer: `I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat`,
          },
        ],
        [
          { question: `What do you call someone with no body and no nose?` },
          {
            answer: `Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.`,
          },
        ],
        [
          { question: `Why do you never see elephants hiding in trees?` },
          {
            answer: `Because they're so good at it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.`,
          },
        ],
      ],
    },
  ],
}

@Injectable()
export class DevFaqSectionStore extends ComponentStore<DevFaqSectionState> {
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
