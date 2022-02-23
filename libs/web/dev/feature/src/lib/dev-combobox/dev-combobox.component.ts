import { Component } from '@angular/core'
import { DevComboboxStore } from './dev-combobox.store'

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
        <ui-combobox [cboxDetail]="vm.config.items.cboxDetail"></ui-combobox>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevComboboxStore],
})
export class DevComboboxComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevComboboxStore) {}

  public codePreview: Array<any>
  ngOnInit(): void {
    this.vm$.subscribe((result) => {
      this.codePreview = [
        `import { WebUiComboboxModule } from '@schema-driven/web/ui/combobox'
        \n\n
        <ui-combobox
        [cboxDetail]="vm.config.items.cboxDetail"
      ></ui-combobox>
    \n\n
    Combobox Detail = ${JSON.stringify(result.config.items.cboxDetail, null, '\t')}\n     
      `,
      ]
    })
  }
}
