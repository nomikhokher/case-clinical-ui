import { Component } from '@angular/core'
import { DevProductImageGalleryStore } from './dev-product-image-gallery.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-preview
        [githubURL]="vm.config.githubURL"
        [title]="vm.config.headerTitle"
        [directory]="vm.config.directory"
        [breadcrumbs]="vm.config.breadcrumbs"
        [component_inputs]="vm.config.component_inputs"
        [codeObj]="vm.config.items"
      >
        <ui-product-image-gallery [images]="vm.config.items.images"></ui-product-image-gallery>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevProductImageGalleryStore],
})
export class DevProductImageGalleryComponent {
  readonly vm$ = this.store.vm$
  public codePreview
  constructor(private readonly store: DevProductImageGalleryStore) {}

  ngOnInit(): void {
    this.vm$.subscribe((result) => {
      this.codePreview = [
        `import { WebUiRatingModule } from '@schema-driven/web/ui/rating'n\n
        <ui-product-image-gallery 
          [images]="vm.config.items.images"
        ></ui-product-image-gallery>\n\n
        {
          images: ${JSON.stringify(result.config.items.images, null, '\t')}
        }`,
      ]
    })
  }
}
