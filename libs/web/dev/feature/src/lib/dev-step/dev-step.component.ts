import { Component } from '@angular/core'
import { DevStepStore } from './dev-step.store'

type StepItems = {
  id: number
  stepActive?: boolean
  stepTitle: string
  stepDetails: string
}

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-preview [component_props]="[{ name: 'stepIems', value: stepIems }]" [code]="codePreview[0]">
        <ui-step [stepIems]="stepIems"></ui-step>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevStepStore],
})
export class DevStepComponent {
  demo = {
    code: '<ui-step></ui-step>',
    lang: 'html',
  }

  code_toggle = false

  public stepIems: StepItems[] = [
    {
      id: 1,
      stepActive: true,
      stepTitle: 'Step 1',
      stepDetails: 'Job details',
    },
    {
      id: 2,
      stepActive: false,
      stepTitle: 'Step 2',
      stepDetails: 'Job details',
    },
    {
      id: 3,
      stepActive: false,
      stepTitle: 'Step 3',
      stepDetails: 'Job details',
    },
    {
      id: 4,
      stepActive: false,
      stepTitle: 'Step 4',
      stepDetails: 'Job details',
    },
  ]

  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevStepStore) {}

  public codePreview = [
    `import { WebUiStepModule } from '@schema-driven/web/ui/step'\n\n<ui-step [stepIems]="stepIems"></ui-step>\n\n stepItems = [
    {
      id: 1,
      stepActive: true,
      stepTitle: 'Step 1',
      stepDetails: 'Job details',
    },
    {
      id: 2,
      stepActive: false,
      stepTitle: 'Step 2',
      stepDetails: 'Job details',
    },
    {
      id: 3,
      stepActive: false,
      stepTitle: 'Step 3',
      stepDetails: 'Job details',
    },
    {
      id: 4,
      stepActive: false,
      stepTitle: 'Step 4',
      stepDetails: 'Job details',
    },
  ]`,
  ]
}
