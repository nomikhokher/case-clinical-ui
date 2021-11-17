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
        [codeObj]="vm.config.items"
      >
        <ui-step
          [stepIems]="vm.config.items.step"
          [isIcon]="vm.config.items.isIcon"
          [isStepTitle]="vm.config.items.isStepTitle"
        ></ui-step>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevStepStore],
})
export class DevStepComponent {
  readonly vm$ = this.store.vm$
  public codePreview
  constructor(private readonly store: DevStepStore) {}

  ngOnInit(): void {
    this.vm$.subscribe((result) => {
      this.codePreview = [
        `import { WebUiStepModule } from '@schema-driven/web/ui/step'\n\n
        <ui-step [stepIems]="vm.config.items.step"></ui-step>\n\n
        {
          stepIems: ${JSON.stringify(result.config.items.step, null, '\t')}
        }`,
      ]
    })
  }
}
