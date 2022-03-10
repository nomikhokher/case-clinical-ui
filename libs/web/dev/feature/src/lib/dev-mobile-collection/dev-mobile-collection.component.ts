import { Component } from '@angular/core'
import { DevMobileCollectionStore } from './dev-mobile-collection.store'

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
        <ui-mobile-collection></ui-mobile-collection>
      </ui-mobile-preview>
    </ng-container>
  `,
  providers: [DevMobileCollectionStore],
})
export class DevMobileCollectionComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevMobileCollectionStore) {}
  public codePreview: Array<any>
  ngOnInit(): void {
    this.vm$.subscribe((result) => {
      this.codePreview = [
        `\nimport { WebUiMobileCollectionModule } from '@schema-driven/web/ui/mobile-collection' \n
<ui-mobile-collection></ui-mobile-collection>
         \n\n
        `,
      ]
    })
  }
}
