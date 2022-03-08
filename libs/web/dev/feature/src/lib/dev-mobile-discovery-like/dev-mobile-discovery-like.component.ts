import { Component } from '@angular/core'
import { DevMobileDiscoveryLikeStore } from './dev-mobile-discovery-like.store'

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
        <ui-mobile-discovery-like></ui-mobile-discovery-like>
      </ui-mobile-preview>
    </ng-container>
  `,
  providers: [DevMobileDiscoveryLikeStore],
})
export class DevMobileDiscoveryLikeComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevMobileDiscoveryLikeStore) {}
  public codePreview: Array<any>
  ngOnInit(): void {
    this.vm$.subscribe((result) => {
      this.codePreview = [
        `\nimport { WebUiMobileDiscoveryLikeModule } from '@schema-driven/web/ui/mobile-discovery-like' \n
<ui-mobile-discovery-like></ui-mobile-discovery-like>
         \n\n
        `,
      ]
    })
  }
}
