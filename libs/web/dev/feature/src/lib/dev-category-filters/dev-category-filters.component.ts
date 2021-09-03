import { Component } from '@angular/core'
import { DevCategoryFiltersStore } from './dev-category-filters.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-preview
        [code]="codePreview[0]"
        [title]="vm.headerTitle"
        [githubURL]="vm.githubURL"
        [directory]="vm.directory"
        [breadcrumbs]="vm.breadcrumbs"
        [component_outputs]="vm.component_outputs"
        [component_inputs]="vm.component_inputs"
        [codeObj]="vm.items"
      >
        <ui-category-filters
          [sectionTitle]="vm.items.sectionTitle"
          [description]="vm.items.description"
          [products]="vm.items.products"
          [categories]="vm.items.categories"
          [colors]="vm.items.colors"
          [sizes]="vm.items.sizes"
        ></ui-category-filters>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevCategoryFiltersStore],
})
export class DevCategoryFiltersComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevCategoryFiltersStore) {}

  public codePreview: Array<any>
  ngOnInit(): void {
    this.vm$.subscribe((result) => {
      this.codePreview = [
        `import { WebUiCategoryFiltersModule } from '@schema-driven/web/ui/category-filters'
        \n\n
        <ui-category-filters
          [sectionTitle]="vm.items.sectionTitle"
          [description]="vm.items.description"
          [products]="vm.items.products"
          [categories]="vm.items.categories"
          [colors]="vm.items.colors"
          [sizes]="vm.items.sizes"
        ></ui-category-filters>\n\n
        sectionTitle = ${JSON.stringify(result.items.sectionTitle, null, '\t')}\n
      description = ${JSON.stringify(result.items.description, null, '\t')}\n
      products = ${JSON.stringify(result.items.products, null, '\t')}\n
      categories = ${JSON.stringify(result.items.categories, null, '\t')}\n
      colors = ${JSON.stringify(result.items.colors, null, '\t')}\n
      sizes = ${JSON.stringify(result.items.sizes, null, '\t')}\n
      `,
      ]
    })
  }
}
