import { Component } from '@angular/core'
import { DevContactCardStore } from './dev-contact-card.store'

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
        <ui-contact-card
          [contactCard]="vm.config.items.contactCard"
          [buttons]="vm.config.items.buttons"
          [toggleCard]="vm.config.items.toggleCard"
        ></ui-contact-card>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevContactCardStore],
})
export class DevContactCardComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevContactCardStore) {}

  public codePreview: Array<any>
  ngOnInit(): void {
    this.vm$.subscribe((result) => {
      this.codePreview = [
        `import { WebUiContactCardModule } from '@schema-driven/web/ui/contact-card'
        \n\n
        <ui-contact-card
        [contactCard]="vm.config.items.contactCard"
        [buttons]="vm.config.items.buttons"
        [toggleCard]="vm.config.items.toggleCard"
      ></ui-contact-card>
    \n\n
        contactCard = ${JSON.stringify(result.config.items.contactCard, null, '\t')}\n
      buttons = ${JSON.stringify(result.config.items.buttons, null, '\t')}\n
      toggleCard = ${JSON.stringify(result.config.items.toggleCard, null, '\t')}\n
      `,
      ]
    })
  }
}
