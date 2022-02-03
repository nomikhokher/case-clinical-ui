import { Component } from '@angular/core'
import { DevHeaderStore } from './dev-header.store'

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
        <ui-header [contactCard]="vm.config.items.contactCard" [buttons]="vm.config.items.buttons"></ui-header>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevHeaderStore],
})
export class DevHeaderComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevHeaderStore) {}

  public codePreview: Array<any>
  ngOnInit(): void {
    this.vm$.subscribe((result) => {
      this.codePreview = [
        `import { WebUiHeaderModule } from '@schema-driven/web/ui/header'
        \n\n
        <ui-header
        [contactCard]="vm.config.items.contactCard"
        [buttons]="vm.config.items.buttons"
      ></ui-header>
    \n\n
        contactCard = ${JSON.stringify(result.config.items.contactCard, null, '\t')}\n
        buttons = ${JSON.stringify(result.config.items.buttons, null, '\t')}\n
      `,
      ]
    })
  }
}
