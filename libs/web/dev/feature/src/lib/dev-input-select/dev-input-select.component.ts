import { Component } from '@angular/core'
import { DevInputSelectStore } from './dev-input-select.store'

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
        <ui-input-select (sendData)="outputData($event)" [options]="vm.config.items.options"></ui-input-select>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevInputSelectStore],
})
export class DevInputSelectComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevInputSelectStore) {}

  public codePreview: Array<any>
  ngOnInit(): void {
    this.vm$.subscribe((result) => {
      this.codePreview = [
        `import { WebUiGroupButtonModule } from '@schema-driven/web/ui/input-select'
        \n\n
        <ui-input-select [options]="vm.config.items.options"></ui-input-select>
     \n\n
     options = ${JSON.stringify(result.config.items.options, null, '\t')}\n
      `,
      ]
    })
  }

  outputData(e): void {
    console.log(e)
  }
}
