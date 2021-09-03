import { Component } from '@angular/core'
import { DevProductListStore } from './dev-product-list.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-preview
        [code]="codePreview[0]"
        [title]="vm.config.headerTitle"
        [githubURL]="vm.config.githubURL"
        [directory]="vm.config.directory"
        [breadcrumbs]="vm.config.breadcrumbs"
        [component_inputs]="vm.config.component_inputs"
        [codeObj]="vm.config.items"
      >
        <ui-product-list
          [products]="vm.config.items.products"
          [sectionHeading]="vm.config.items.sectionHeading"
        ></ui-product-list>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevProductListStore],
})
export class DevProductListComponent {
  readonly vm$ = this.store.vm$
  public codePreview
  constructor(private readonly store: DevProductListStore) {}

  ngOnInit(): void {
    this.vm$.subscribe((result) => {
      this.codePreview = [
        `import { WebUiProductListModule } from '@schema-driven/web/ui/product-list' \n\n 
        <ui-product-list 
          [products]="vm.config.items.products"
          [sectionHeading]="vm.config.items.sectionHeading">
        </ui-newsletter> \n\n
        {
          products: ${JSON.stringify(result.config.items.products, null, '\t')}
          sectionHeading: ${JSON.stringify(result.config.items.sectionHeading, null, '\t')}
        }`,
      ]
    })
  }
}
