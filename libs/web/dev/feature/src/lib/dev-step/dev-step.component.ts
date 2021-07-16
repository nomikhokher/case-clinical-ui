import { Component } from '@angular/core'
import { DevStepStore } from './dev-step.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-preview
        [title]="vm.config.previewData.headerTitle"
        [githubURL]="vm.config.previewData.githubURL"
        [directory]="vm.config.previewData.directory"
        [breadcrumbs]="vm.config.previewData.breadcrumbs"
        [code]="codePreview[0]"
        [component_inputs]="vm.config.component_inputs"
      >
        <ui-step [stepIems]="vm.config.items.step" [icon]="true"></ui-step>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevStepStore],
})
export class DevStepComponent {
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
