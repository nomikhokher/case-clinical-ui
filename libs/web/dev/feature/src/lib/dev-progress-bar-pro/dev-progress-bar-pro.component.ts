import { Component } from '@angular/core'
import { DevProgressBarProStore } from './dev-progress-bar-pro.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-preview
        [code]="codePreview[0]"
        [title]="vm.config.headerTitle"
        [githubURL]="vm.config.githubURL"
        [directory]="vm.config.directory"
        [breadcrumbs]="vm.config.breadcrumbs"
        [component_outputs]="vm.config.component_outputs"
        [component_inputs]="vm.config.component_inputs"
        [codeObj]="vm.config.items"
      >
        <ui-progress-bar-pro
          [statusLevel]="vm.config.items.statusLevel"
          [barData]="vm.config.items.barData"
          [barTitle]="vm.config.items.barTitle"
        ></ui-progress-bar-pro>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevProgressBarProStore],
})
export class DevProgressBarProComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevProgressBarProStore) {}
  codePreview
  ngOnInit(): void {
    this.vm$.subscribe((result) => {
      this.codePreview = [
        `import { WebUiProgressBarProModule} from '@schema-driven/web/ui/progress-bar-pro' \n\n 
        <ui-progress-bar-pro [statusLevel]="vm.config.items.statusLevel" [barData]="vm.config.items.barData" [barTitle]="vm.config.items.barTitle"></ui-progress-bar-pro>\n\n
        
          statusLevel: ${JSON.stringify(result.config.items.statusLevel, null, '\t')}
          barData: ${JSON.stringify(result.config.items.barData, null, '\t')}
          barTitle: ${JSON.stringify(result.config.items.barTitle, null, '\t')}
        `,
      ]
    })
  }
}
