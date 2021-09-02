import { Component } from '@angular/core'
import { DevDropdownStore } from './dev-dropdown.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-preview
        [component_props]="[{ name: 'items', value: vm.config.items.data }]"
        [code]="codePreview[0]"
        [title]="vm.config.headerTitle"
        [githubURL]="vm.config.githubURL"
        [directory]="vm.config.directory"
        [breadcrumbs]="vm.config.breadcrumbs"
        [component_outputs]="vm.config.component_outputs"
        [component_inputs]="vm.config.component_inputs"
        [codeObj]="vm.config.items"
      >
        <ng-container>
          <ui-dropdown [heading]="vm.config.items.heading" [items]="vm.config.items.data"></ui-dropdown>
        </ng-container>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevDropdownStore],
})
export class DevDropdownComponent {
  readonly vm$ = this.store.vm$
  public heading: boolean = true
  constructor(private readonly store: DevDropdownStore) {}
  public codePreview: Array<any>
  ngOnInit(): void {
    this.vm$.subscribe((result) => {
      this.codePreview = [
        `import { WebUiDropdownModule } from '@schema-driven/web/ui/dropdown'
        \n\n
        <ui-dropdown [heading]="vm.config.items.heading" [items]="vm.config.items.data"></ui-dropdown> \n\n
        heading = ${JSON.stringify(result.config.items.heading, null, '\t')}\n
      data = ${JSON.stringify(result.config.items.data, null, '\t')}\n
      `,
      ]
    })
  }
}
