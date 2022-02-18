import { Component } from '@angular/core'
import { DevMobileBestSellerStore } from './dev-mobile-best-seller.store'

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
        <ui-mobile-best-seller></ui-mobile-best-seller>
      </ui-mobile-preview>
    </ng-container>
  `,
  providers: [DevMobileBestSellerStore],
})
export class DevMobileBestSellerComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevMobileBestSellerStore) {}

  public codePreview: Array<any>
  ngOnInit(): void {
    this.vm$.subscribe((result) => {
      this.codePreview = [
        `\nimport { WebUiMobileBestSellerModule } from '@schema-driven/web/ui/' \n
<ui-mobile-best-seller></ui-mobile-best-seller>
         \n\n        
        `,
      ]
    })
  }
}
