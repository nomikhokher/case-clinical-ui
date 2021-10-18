import { Component } from '@angular/core'
import { DevSignInAndRegistrationStore } from './dev-sign-in-and-registration.store'

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
  public codePreview
  constructor(private readonly store: DevSignInAndRegistrationStore) {}

  ngOnInit(): void {
    this.vm$.subscribe((result) => {
      this.codePreview = [
        `import { WebUiSignInAndRegistrationModule } from '@schema-driven/web/ui/sign-in-and-registration' \n\n 
        <ui-sign-in-and-registration
          [title]="vm.config.items.title"
          [image]="vm.config.items.image"
          [icons]="vm.config.items.icons"
      ></ui-sign-in-and-registration> \n\n
        {
          title: ${JSON.stringify(result.config.items.title, null, '\t')}
          image: ${JSON.stringify(result.config.items.image, null, '\t')}
          icons:${JSON.stringify(result.config.items.icons, null, '\t')}
        }`,
      ]
    })
  }
}
