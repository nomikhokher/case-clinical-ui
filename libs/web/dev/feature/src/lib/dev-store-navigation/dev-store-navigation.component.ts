import { Component } from '@angular/core'
import { DevStoreNavigationStore } from './dev-store-navigation.store'

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
        <ui-store-navigation
          [products]="vm.config.items.products"
          [tabs]="vm.config.items.tabs"
          [currencies]="vm.config.items.currencies"
          [btnText]="vm.config.items.btnText"
        ></ui-store-navigation>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevStoreNavigationStore],
})
export class DevStoreNavigationComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevStoreNavigationStore) {}
  public codePreview
  ngOnInit(): void {
    this.vm$.subscribe((result) => {
      this.codePreview = [
        `import { WebUiStoreNavigationModule } from '@schema-driven/web/ui/store-navigation'\n\n
        <ui-store-navigation 
          [products]="vm.config.items.products"
          [tabs]="vm.config.items.tabs"
          [currencies]="vm.config.items.currencies"
          [btnText]="vm.config.items.btnText"
        >
        </ui-store-navigation>\n\n 
        {
          products: ${JSON.stringify(result.config.items.products, null, '\t')}
          tabs: ${JSON.stringify(result.config.items.tabs, null, '\t')}
          currencies:${JSON.stringify(result.config.items.currencies, null, '\t')}
          btnText :${result.config.items.btnText}
        }`,
      ]
    })
  }
}
