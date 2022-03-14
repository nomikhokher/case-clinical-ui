import { Component } from '@angular/core'
import { DevMobileProfileStore } from './dev-mobile-profile.store'

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
        <ui-mobile-profile></ui-mobile-profile>
      </ui-mobile-preview>
    </ng-container>
  `,
  providers: [DevMobileProfileStore],
})
export class DevMobileProfileComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevMobileProfileStore) {}
  public codePreview: Array<any>
  ngOnInit(): void {
    this.vm$.subscribe((result) => {
      this.codePreview = [
        `\nimport { WebUiMobileProfileModule } from '@schema-driven/web/ui/mobile-profile' \n
<ui-mobile-profile></ui-mobile-profile>
         \n        
        `,
      ]
    })
  }
}
