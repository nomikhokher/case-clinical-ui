import { Component } from '@angular/core'
import { DevMobileSearchArtworkStore } from './dev-mobile-search-artwork.store'

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
        <ui-mobile-search-artwork></ui-mobile-search-artwork>
      </ui-mobile-preview>
    </ng-container>
  `,
  providers: [DevMobileSearchArtworkStore],
})
export class DevMobileSearchArtworkComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevMobileSearchArtworkStore) {}
  public codePreview: Array<any>
  ngOnInit(): void {
    this.vm$.subscribe((result) => {
      this.codePreview = [
        `\nimport { WebUiMobileSearchArtworkModule } from \n'@schema-driven/web/ui/mobile-search-artwork' \n
<ui-mobile-search-artwork></ui-mobile-search-artwork>
         \n\n
        `,
      ]
    })
  }
}
