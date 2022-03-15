import { Component } from '@angular/core'
import { DevMobileProfileHomeStore } from './dev-mobile-profile-home.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-mobile-preview
        [title]="vm.headerTitle"
        [githubURL]="vm.githubURL"
        [directory]="vm.directory"
        [breadcrumbs]="vm.breadcrumbs"
        [component_props]="[vm.componentProps]"
        [component_inputs]="vm.component_inputs"
        [code]="codePreview[0]"
        [codeObj]="vm.items"
      >
        <!-- INSERT YOUR UI-COMPONENT HERE  -->
      </ui-mobile-preview>
    </ng-container>
  `,
  providers: [DevMobileProfileHomeStore],
})
export class DevMobileProfileHomeComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevMobileProfileHomeStore) {}
  public codePreview: Array<any>
  ngOnInit(): void {
    this.vm$.subscribe((result) => {
      this.codePreview = [
        `\nimport { WebUiMobileProfileHomeModule } from '@schema-driven/web/ui/mobile-profile-home' \n
<ui-mobile-profile-home></ui-mobile-profile-home>
         \n        
        `,
      ]
    })
  }
}
