import { Component } from '@angular/core'
import { DevChipsStore } from './dev-chips.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-preview
        [codeObj]="vm.config.items[6]"
        [code]="codePreview[0]"
        [title]="vm.config.headerTitle"
        [githubURL]="vm.config.githubURL"
        [directory]="vm.config.directory"
        [breadcrumbs]="vm.config.breadcrumbs"
        [component_outputs]="vm.config.component_outputs"
        [component_inputs]="vm.config.component_inputs"
      >
        <ui-chips [chips]="vm.config.items"></ui-chips>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevChipsStore],
})
export class DevChipsComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevChipsStore) {}

  public codePreview: Array<any>
  ngOnInit(): void {
    this.vm$.subscribe((result) => {
      this.codePreview = [
        `import { WebUiChipsModule } from '@schema-driven/web/ui/chips'
        \n\n
        <ui-chips [chips]="vm.config.items"></ui-chips> \n\n
        chips = ${JSON.stringify(result.config.items[6], null, '\t')}\n
      `,
      ]
    })
  }
}
