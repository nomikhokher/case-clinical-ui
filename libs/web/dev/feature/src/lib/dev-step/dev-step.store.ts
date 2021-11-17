import { Injectable } from '@angular/core'
import { ComponentStore } from '@ngrx/component-store'
import { ApolloAngularSDK } from '@schema-driven/web/core/data-access'
import { Crumb } from '@schema-driven/web/ui/breadcrumbs'
import { UiIcon } from '@schema-driven/web/ui/icon'
import { ComponentProp, StepItems } from './model'

export interface Item {
  id?: string
  name?: string
  step?: StepItems[]
  isIcon?: boolean
  isStepTitle?: boolean
}
interface PreviewData {
  headerTitle?: string
  githubURL?: string
  breadcrumbs?: Crumb[]
  directory?: string
}

interface Config {
  previewData: PreviewData
  items?: Item
  component_inputs?: ComponentProp[]
  component_outputs?: ComponentProp[]
}

interface DevStepState {
  config?: Config
  loading?: boolean
}

@Injectable()
export class DevStepStore extends ComponentStore<DevStepState> {
  constructor(private readonly sdk: ApolloAngularSDK) {
    super({
      config: {
        previewData: {
          headerTitle: 'Step',
          githubURL: 'https://github.com/Schema-Driven/metadata/tree/main/libs/web/ui/step/src/lib',
          breadcrumbs: [
            { label: 'Components', path: '/dev' },
            { label: 'Step', path: '/dev/steps' },
          ],
          directory: '/libs/web/dev/feature/src/lib/dev-step/dev-step.component.ts',
        },
        items: {
          step: [
            {
              id: 1,
              stepActive: true,
              stepTitle: 'Step 1',
              stepDetails: 'Job details',
              icon: 'office',
            },
            {
              id: 2,
              stepActive: false,
              stepTitle: 'Step 2',
              stepDetails: 'Personal details',
              icon: 'team',
            },
            {
              id: 3,
              stepActive: false,
              stepTitle: 'Step 3',
              stepDetails: 'Educational details',
              icon: 'document',
            },
            {
              id: 4,
              stepActive: false,
              stepTitle: 'Step 4',
              stepDetails: 'Privay & Policy',
              icon: 'clipboardList',
            },
          ],
          isIcon: true,
          isStepTitle: true,
        },
        component_inputs: [
          {
            label: 'Step',
            prop: '[step]',
            description: 'Display steps in the tab.',
            dataType: 'Array',
            typeArray: [
              [
                // { stepActive: ['true', 'false'] },
                { stepTitle: 'Step 1' },
                { stepDetails: 'Job details' },
                { icon: Object.values(UiIcon) },
              ],
              [
                // { stepActive: ['false', 'true'] },
                { stepTitle: 'Step 2' },
                { stepDetails: 'Personal details' },
                { icon: Object.values(UiIcon) },
              ],
              [
                // { stepActive: ['false', 'true'] },
                { stepTitle: 'Step 3' },
                { stepDetails: 'Educational details' },
                { icon: Object.values(UiIcon) },
              ],
              [
                // { stepActive: ['false', 'true'] },
                { stepTitle: 'Step 4' },
                { stepDetails: 'Privay & Policy' },
                { icon: Object.values(UiIcon) },
              ],
            ],
          },
          {
            label: 'Step',
            prop: '[isIcon]',
            description: 'Display steps in the tab.',
            dataType: 'Array',
            type: ['true', 'false'],
          },
          {
            label: 'Step Title',
            prop: '[isStepTitle]',
            description: 'Display steps in the tab.',
            dataType: 'Array',
            type: ['true', 'false'],
          },
          // {
          //   label: 'Step Active',
          //   prop: '[stepActive]',
          //   description: 'Step active tell us where is active tab.',
          //   dataType: 'Boolean',
          // },
          // {
          //   label: 'step Title',
          //   prop: '[stepTitle]',
          //   description: 'Step title tell us what is name of steps.',
          //   dataType: 'String',
          // },
          // {
          //   label: 'Step Details',
          //   prop: '[stepDetails]',
          //   description: 'Step detail us what is detail of steps.',
          //   dataType: 'String',
          // },
          // { label: 'Icon', prop: '[icon]', description: 'Shows the icon what you want.', dataType: 'String' },
        ],
      },
    })
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
