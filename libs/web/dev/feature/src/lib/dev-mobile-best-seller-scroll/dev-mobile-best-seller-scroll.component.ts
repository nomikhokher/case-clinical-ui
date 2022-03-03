import { Component } from '@angular/core'
import { DevMobileBestSellerScrollStore } from './dev-mobile-best-seller-scroll.store'

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
        <ui-mobile-best-seller-scroll></ui-mobile-best-seller-scroll>
      </ui-mobile-preview>
    </ng-container>
  `,
  providers: [DevMobileBestSellerScrollStore],
})
export class DevMobileBestSellerScrollComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevMobileBestSellerScrollStore) {}
  public codePreview: Array<any>
  ngOnInit(): void {
    this.vm$.subscribe((result) => {
      this.codePreview = [
        `\nimport { WebUiMobileBestSellerScrollModule } from '@schema-driven/web/ui/' \n
<ui-mobile-best-seller-scroll></ui-mobile-best-seller-scroll>
         \n\n        
        `,
      ]
    })
  }
}
