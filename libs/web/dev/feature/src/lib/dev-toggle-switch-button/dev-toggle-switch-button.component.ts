import { Component } from '@angular/core'
import { DevToggleSwitchButtonStore } from './dev-toggle-switch-button.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-preview
        [title]="vm.config.previewData.headerTitle"
        [githubURL]="vm.config.previewData.githubURL"
        [directory]="vm.config.previewData.directory"
        [breadcrumbs]="vm.config.previewData.breadcrumbs"
        [code]="codePreview[0]"
        [component_inputs]="vm.config.component_inputs"
        [codeObj]="vm.config.items.storeToggleSwitchButton"
      >
        <ui-toggle-switch-button [button]="vm.config.items.storeToggleSwitchButton"></ui-toggle-switch-button>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevToggleSwitchButtonStore],
})
export class DevToggleSwitchButtonComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevToggleSwitchButtonStore) {}

  public codePreview = [
    `import { WebUiToggleSwitchButtonModule } from '@schema-driven/web/ui/toggle-switch-button' \n\n 
      <ui-toggle-switch-button [button]="storeToggleSwitchButton"></ui-toggle-switch-button> \n\n
      storeToggleSwitchButton:
        {
          id:1,
          height:'h-5',
          width:'w-5',
          left:'left-full',
          bgColor:'indigo',
          divWidth:'w-14',
          divHeight:'h-7',
          onOff:true,
        },
      `,
  ]
}
