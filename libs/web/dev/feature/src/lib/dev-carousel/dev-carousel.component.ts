import { Component } from '@angular/core'
import { DevCarouselStore } from './dev-carousel.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-preview
        [code]="codePreview[0]"
        [githubURL]="vm.config.githubURL"
        [title]="vm.config.headerTitle"
        [directory]="vm.config.directory"
        [breadcrumbs]="vm.config.breadcrumbs"
        [component_inputs]="vm.config.component_inputs"
        [codeObj]="vm.config.items"
      >
        <ui-carousel
          [bgColor]="vm.config.items.bgColor"
          [height]="vm.config.items.height"
          [width]="vm.config.items.width"
          [corners]="vm.config.items.corners"
          [items]="vm.config.items.images"
        >
        </ui-carousel>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevCarouselStore],
})
export class DevCarouselComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevCarouselStore) {}

  public codePreview: Array<any>
  ngOnInit(): void {
    this.vm$.subscribe((result) => {
      this.codePreview = [
        `import { WebUiCarouselModule } from '@schema-driven/web/ui/carousel'
        \n\n
        <ui-carousel
        [bgColor]="vm.config.items.bgColor"
        [height]="vm.config.items.height"
        [width]="vm.config.items.width"
        [corners]="vm.config.items.corners"
        [items]="vm.config.items.images"
      >
      </ui-carousel> \n\n
        bgColor = ${JSON.stringify(result.config.items.bgColor, null, '\t')}\n
      height = ${JSON.stringify(result.config.items.height, null, '\t')}\n
      width = ${JSON.stringify(result.config.items.width, null, '\t')}\n
      corners = ${JSON.stringify(result.config.items.corners, null, '\t')}\n
      items = ${JSON.stringify(result.config.items.images, null, '\t')}\n
      `,
      ]
    })
  }
}
