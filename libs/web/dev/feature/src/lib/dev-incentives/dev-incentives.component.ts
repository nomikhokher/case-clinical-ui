import { Component } from '@angular/core'
import { stringify } from 'querystring'
import { DevIncentivesStore } from './dev-incentives.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-preview
        [code]="codePreview[0]"
        [githubURL]="vm.config.previewData.githubURL"
        [title]="vm.config.previewData.headerTitle"
        [directory]="vm.config.previewData.directory"
        [component_inputs]="vm.config.component_inputs"
        [codeObj]="vm.config.items"
      >
        <ui-incentives
          [incentives]="vm.config.items.incentives"
          [direction]="vm.config.items.direction"
        ></ui-incentives>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevIncentivesStore],
})
export class DevIncentivesComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevIncentivesStore) {}
  public codePreview: Array<any>
  ngOnInit(): void {
    this.vm$.subscribe((result) => {
      this.codePreview = [
        `import { WebUiIncentivesModule } from '@schema-driven/web/ui/incentives' \n\n 
      <ui-incentives 
        [incentives]="vm.config.items.incentives"
        [direction]="vm.config.items.direction"
      ></ui-incentives> \n\n
      
        direction = ${JSON.stringify(result.config.items.direction, null, '\t')}\n
        incentives = ${JSON.stringify(result.config.items.incentives, null, '\t')}`,
      ]
    })
  }
}
