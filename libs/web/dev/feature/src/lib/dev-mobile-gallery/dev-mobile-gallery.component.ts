import { Component } from '@angular/core'
import { DevMobileGalleryStore } from './dev-mobile-gallery.store'

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
        <!-- INSERT YOUR UI-COMPONENT HERE  -->
      </ui-mobile-preview>
    </ng-container>
  `,
  providers: [DevMobileGalleryStore],
})
export class DevMobileGalleryComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevMobileGalleryStore) {}
  public codePreview: Array<any>
  ngOnInit(): void {
    this.vm$.subscribe((result) => {
      this.codePreview = [
        `\nimport { WebUiMobileGalleryModule } from '@schema-driven/web/ui/mobile-gallery' \n
<ui-mobile-gallery></ui-mobile-gallery>
         \n\n        
        `,
      ]
    })
  }
}
