import { Component } from '@angular/core'
import { DevMobileDiscoveryActionStore } from './dev-mobile-discovery-action.store'

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
        <ui-mobile-discovery-action></ui-mobile-discovery-action>
      </ui-mobile-preview>
    </ng-container>
  `,
  providers: [DevMobileDiscoveryActionStore],
})
export class DevMobileDiscoveryActionComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevMobileDiscoveryActionStore) {}
  public codePreview: Array<any>
  ngOnInit(): void {
    this.vm$.subscribe((result) => {
      this.codePreview = [
        `\nimport { WebUiMobileDiscoveryActionModule } from '@schema-driven/web/ui/mobile-discovery-action' \n
<ui-mobile-discovery-action></ui-mobile-discovery-action>
         \n\n
        `,
      ]
    })
  }
}
