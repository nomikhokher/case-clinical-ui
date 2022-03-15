import { Component } from '@angular/core'
import { DevMobileProfileFollowingStore } from './dev-mobile-profile-following.store'

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
        <ui-mobile-profile-following></ui-mobile-profile-following>
      </ui-mobile-preview>
    </ng-container>
  `,
  providers: [DevMobileProfileFollowingStore],
})
export class DevMobileProfileFollowingComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevMobileProfileFollowingStore) {}
  public codePreview: Array<any>
  ngOnInit(): void {
    this.vm$.subscribe((result) => {
      this.codePreview = [
        `\nimport { WebUiMobileProfileModule } from '@schema-driven/web/ui/\n
        mobile-profile-following' \n
<ui-mobile-profile-following></ui-mobile-profile-following>
         \n\n
        `,
      ]
    })
  }
}
