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

  public codePreview = [
    `import { WebUiContactCardModule } from '@schema-driven/web/ui/contact-card' \n\n 
    <ui-contact-card [contactCard]="contactCard" [buttons]="buttons"></ui-contact-card> \n\ncontactCard={
      id: 1,
      title:"Jane Cooper",
      tagLine:"Paradigm Representative",
      email:"janecooper@example.com",
      image:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
      role:"Admin",
      icon:"user",
    }\n\n
  buttons=[
    {
      text:"Email",
      icon:"email"
    },
    {
      text:"Call",
      icon:"phone"
    }
]
  `,
  ]
}
