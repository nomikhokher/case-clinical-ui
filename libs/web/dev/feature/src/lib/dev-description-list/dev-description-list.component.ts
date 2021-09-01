import { Component } from '@angular/core'
import { DevDescriptionListStore } from './dev-description-list.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <!-- INSERT YOUR UI-COMPONENT HERE  -->

      <ui-preview
        [component_props]="[{ name: 'dataListing', value: dataListing }]"
        [code]="codePreview[0]"
        [title]="vm.config.headerTitle"
        [githubURL]="vm.config.githubURL"
        [directory]="vm.config.directory"
        [breadcrumbs]="vm.config.breadcrumbs"
        [component_outputs]="vm.config.component_outputs"
        [component_inputs]="vm.config.component_inputs"
        [codeObj]="vm.config.items"
      >
        <ui-description-list
          [data]="vm.config.items.data"
          [tagLine]="vm.config.items.tagLine"
          [formTitle]="vm.config.items.formTitle"
          [background]="vm.config.items.background"
          [showIcon]="vm.config.items.showIcon"
        >
        </ui-description-list>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevDescriptionListStore],
})
export class DevDescriptionListComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevDescriptionListStore) {}

  public codePreview: Array<any>
  ngOnInit(): void {
    this.vm$.subscribe((result) => {
      this.codePreview = [
        `import { WebUiDescriptionListModule } from '@schema-driven/web/ui/description-list'
        \n\n
        <ui-description-list
        [data]="vm.config.items.data"
        [tagLine]="vm.config.items.tagLine"
        [formTitle]="vm.config.items.formTitle"
        [background]="vm.config.items.background"
        [showIcon]="vm.config.items.showIcon"
      >
      </ui-description-list>
      \n\n
        data = ${JSON.stringify(result.config.items.data, null, '\t')}\n
      tagLine = ${JSON.stringify(result.config.items.tagLine, null, '\t')}\n
      formTitle = ${JSON.stringify(result.config.items.formTitle, null, '\t')}\n
      background = ${JSON.stringify(result.config.items.background, null, '\t')}\n
      showIcon = ${JSON.stringify(result.config.items.showIcon, null, '\t')}\n
      `,
      ]
    })
  }
}
