import { Component } from '@angular/core'
import { DevMobileNftPreviewStore } from './dev-mobile-nft-preview.store'

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
        <ui-mobile-nft-preview></ui-mobile-nft-preview>
      </ui-mobile-preview>
    </ng-container>
  `,
  providers: [DevMobileNftPreviewStore],
})
export class DevMobileNftPreviewComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevMobileNftPreviewStore) {}
  public codePreview: Array<any>
  ngOnInit(): void {
    this.vm$.subscribe((result) => {
      this.codePreview = [
        `\nimport { WebUiMobileNftPreviewModule } from '@schema-driven/web/ui/mobile-nft-preview' \n
<ui-mobile-nft-preview></ui-mobile-nft-preview>
         \n\n
        `,
      ]
    })
  }
}
