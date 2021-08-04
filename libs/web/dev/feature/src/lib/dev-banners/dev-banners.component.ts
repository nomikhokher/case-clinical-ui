import { Component } from '@angular/core'
import { DevBannersStore } from './dev-banners.store'

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
        <ui-banners
          [text]="vm.config.items.text"
          [bgColor]="vm.config.items.bgColor"
          [icon]="vm.config.items.icon"
          [position]="vm.config.items.position"
          [buttons]="vm.config.items.buttons"
        ></ui-banners>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevBannersStore],
})
export class DevBannersComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevBannersStore) {}

  public codePreview = [
    `import { WebUiBannersModule } from '@schema-driven/web/ui/banners'
    \n\n
    <ui-banners
    [text]="vm.config.items.text"
    [bgColor]="vm.config.items.bgColor"
    [icon]="vm.config.items.icon"
    [position]="vm.config.items.position"
    [buttons]="vm.config.items.buttons"
  ></ui-banners> \n\n
    text:"Big news! We're excited to announce a brand new product.",
    bgColor: 'indigo',
    icon: 'speakerphone',
    position: '', // position = top/bottom
    buttons: [
      {
        text:'Learn More',
        bgColor:'red',
        textColor:'white',
      },
      {
        text:'Get Started',
        bgColor:'yellow',
        textColor:'white',
      },
    ],
  `,
  ]
}
