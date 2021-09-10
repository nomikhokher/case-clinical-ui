import { Component } from '@angular/core'
import { DevGroupButtonStore } from './dev-group-button.store'

export interface DropDownMenu {
  id?: string
  name: string
}

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
        <ui-group-button [buttons]="vm.config.items.buttons"></ui-group-button>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevGroupButtonStore],
})
export class DevGroupButtonComponent {
  readonly vm$ = this.store.vm$

  constructor(private readonly store: DevGroupButtonStore) {}

  public codePreview: Array<any>
  ngOnInit(): void {
    this.vm$.subscribe((result) => {
      this.codePreview = [
        `import { WebUiGroupButtonModule } from '@schema-driven/web/ui/group-button'
        \n\n
        <ui-group-button [buttons]="vm.config.items.buttons"></ui-group-button>
     \n\n
        buttons = ${JSON.stringify(result.config.items.buttons, null, '\t')}\n
      `,
      ]
    })
  }
}
