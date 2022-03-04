import { Component } from '@angular/core'
import { DevMobileDiscoveryStore } from './dev-mobile-discovery.store'

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
        <ui-mobile-discovery></ui-mobile-discovery>
      </ui-mobile-preview>
    </ng-container>
  `,
  providers: [DevMobileDiscoveryStore],
})
export class DevMobileDiscoveryComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevMobileDiscoveryStore) {}
  public codePreview: Array<any>
  ngOnInit(): void {
    this.vm$.subscribe((result) => {
      this.codePreview = [
        `\nimport { WebUiMobileDiscoveryModule } from '@schema-driven/web/ui/mobile-discovery' \n
<ui-mobile-discovery></ui-mobile-discovery>
         \n\n
        `,
      ]
    })
  }
}
