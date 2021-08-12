import { Component } from '@angular/core'
import { DevSignInAndRegistrationStore } from './dev-sign-in-and-registration.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <div class="p-4 shadow rounded-lg bg-gray-100 dark:bg-gray-800">
        <pre class="text-xs dark:text-gray-500">{{ vm.items | json }}</pre>
      </div>
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
        <ui-sign-in-and-registration
          [title]="vm.config.items.title"
          [image]="vm.config.items.image"
          [icons]="vm.config.items.icons"
        ></ui-sign-in-and-registration>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevSignInAndRegistrationStore],
})
export class DevSignInAndRegistrationComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevSignInAndRegistrationStore) {}
  public codePreview = [
    `import { WebUiSignInAndRegistrationModule } from '@schema-driven/web/ui/sign-in-and-registration' \n\n 
    <ui-sign-in-and-registration
      [title]="vm.config.items.title"
      [image]="vm.config.items.image"
      [icons]="vm.config.items.icons"
  ></ui-sign-in-and-registration> \n\n
  {
    title: 'Registration Form',
    image:
      'https://images.unsplash.com/photo-1501031170107-cfd33f0cbdcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&h=256&q=80',
    icons: [{ icon: 'github' }, { icon: 'email' }],
  }
  `,
  ]
}
