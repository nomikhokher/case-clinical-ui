import { Component } from '@angular/core'
import { DevEmptyStatesWithRecommendationsStore } from './dev-empty-states-with-recommendations.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-preview
        [title]="vm.config.headerTitle"
        [githubURL]="vm.config.githubURL"
        [directory]="vm.config.directory"
        [breadcrumbs]="vm.config.breadcrumbs"
        [component_inputs]="vm.config.component_inputs"
        [code]="codePreview[0]"
        [codeObj]="vm.config.items"
      >
        <ui-empty-states-with-recommendations
          [options]="vm.config.items.options"
          [heading]="vm.config.items.heading"
          [userData]="vm.config.items.userData"
        ></ui-empty-states-with-recommendations>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevEmptyStatesWithRecommendationsStore],
})
export class DevEmptyStatesWithRecommendationsComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevEmptyStatesWithRecommendationsStore) {}
  public codePreview: Array<any>
  ngOnInit(): void {
    this.vm$.subscribe((result) => {
      this.codePreview = [
        `import { WebUiEmptyStatesWithRecommendationsModule } from '@schema-driven/web/ui/empty-states-with-recommendations'

        \n\n
        <ui-empty-states-with-recommendations [options]="vm.config.items.options" [heading]="vm.config.items.heading" [userData]="vm.config.items.userData"></ui-empty-states-with-recommendations>

     \n\n
        heading = ${JSON.stringify(result.config.items.heading, null, '\t')}\n
      userData = ${JSON.stringify(result.config.items.userData, null, '\t')}\n
      options = ${JSON.stringify(result.config.items.options, null, '\t')}\n
      `,
      ]
    })
  }
}
