import { Component } from '@angular/core'
import { DevMobileHomeStore } from './dev-mobile-home.store'

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
  providers: [DevMobileHomeStore],
})
export class DevMobileHomeComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevMobileHomeStore) {}
  public codePreview: Array<any>
  ngOnInit(): void {
    this.vm$.subscribe((result) => {
      this.codePreview = [
        `\nimport { WebUiMobileHomeModule } from '@schema-driven/web/ui/mobile-home' \n
<ui-mobile-home></ui-mobile-home>
         \n\n        
        `,
      ]
    })
  }
}
