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

  public codePreview = [
    `import { WebUiCarouselModule } from '@schema-driven/web/ui/carousel'
    \n\n
    <ui-carousel
      [bgColor]="vm.config.items.bgColor"
      [height]="vm.config.items.height"
      [width]="vm.config.items.width"
      [corners]="vm.config.items.corners"
      [items]="vm.config.items.images"
  ></ui-carousel> \n\n
    {
      bgColor: 'red',
      height: '96',
      width: 'full', // position = top/bottom
      corners: 't-xl', // corners = sm/md/lg/xl/2xl/3xl/full/t-none/t-sm/t
      images: [
        {
          img:'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
        },
        {
          img:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
        },
        {
          img:'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
        },
      ],
    }
  `,
  ]
}
