import { Component } from '@angular/core'
import { DevContactCardStore } from './dev-contact-card.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <div class="p-4 shadow rounded-lg bg-gray-100 dark:bg-gray-800">
        <pre class="text-xs dark:text-gray-500">{{ vm.items | json }}</pre>
      </div>
      <code class="text-xs px-2 py-1 dark:bg-gray-800 rounded-md opacity-70">
        Component: libs/web/dev/feature/src/lib/dev-contact-card/dev-contact-card.component.ts
      </code>
      <ui-preview [code]="codePreview[0]">
        <ui-contact-card [contactCard]="contactCard" [buttons]="buttons" [toggleCard]="true"></ui-contact-card>
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

  public contactCard: Contact = {
    id: 1,
    title: 'Jane Cooper',
    tagLine: 'Paradigm Representative',
    email: 'janecooper@example.com',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    role: 'Admin',
    icon: 'user',
  }

  public buttons: Button[] = [
    {
      text: 'Email',
      icon: 'email',
    },
    {
      text: 'Call',
      icon: 'phone',
    },
  ]
}

export type Contact = {
  id: number
  title: string
  tagLine?: string
  email?: string
  role?: string
  icon?: string
  image?: string
}

export type Button = { text: string; icon?: string }
