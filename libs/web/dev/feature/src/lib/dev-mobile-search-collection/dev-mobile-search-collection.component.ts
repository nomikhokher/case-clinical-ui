import { Component } from '@angular/core'
import { DevMobileSearchCollectionStore } from './dev-mobile-search-collection.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-mobile-preview
        [title]="vm.headerTitle"
        [githubURL]="vm.githubURL"
        [directory]="vm.directory"
        [breadcrumbs]="vm.breadcrumbs"
        [component_props]="vm.componentProps"
        [component_inputs]="vm.component_inputs"
        [code]="codePreview[0]"
        [codeObj]="vm.items"
      >
        <ui-mobile-search-collection></ui-mobile-search-collection>
      </ui-mobile-preview>
    </ng-container>
  `,
  providers: [DevMobileSearchCollectionStore],
})
export class DevMobileSearchCollectionComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevMobileSearchCollectionStore) {}
  public codePreview: Array<any>
  ngOnInit(): void {
    this.vm$.subscribe((result) => {
      this.codePreview = [
        `\nimport { WebUiMobileSearchCollectionModule } from \n'@schema-driven/web/ui/mobile-search-collection' \n
<ui-mobile-search-collection></ui-mobile-search-collection>
         \n\n
        `,
      ]
    })
  }
}
