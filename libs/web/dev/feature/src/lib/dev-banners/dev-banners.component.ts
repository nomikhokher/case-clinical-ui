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
  public codePreview: Array<any>
  ngOnInit(): void {
    this.vm$.subscribe((result) => {
      this.codePreview = [
        `import { WebUiBannersModule } from '@schema-driven/web/ui/banners'
        \n\n
        <ui-banners
        [text]="vm.config.items.text"
        [bgColor]="vm.config.items.bgColor"
        [icon]="vm.config.items.icon"
        [position]="vm.config.items.position"
        [buttons]="vm.config.items.buttons"
      ></ui-banners> \n\n
      text = ${JSON.stringify(result.config.items.text, null, '\t')}\n
      icon = ${JSON.stringify(result.config.items.icon, null, '\t')}\n
      bgColor = ${JSON.stringify(result.config.items.bgColor, null, '\t')}\n
      position = ${JSON.stringify(result.config.items.position, null, '\t')}\n
      buttons = ${JSON.stringify(result.config.items.buttons, null, '\t')}\n
       
      `,
      ]
    })
  }
}
