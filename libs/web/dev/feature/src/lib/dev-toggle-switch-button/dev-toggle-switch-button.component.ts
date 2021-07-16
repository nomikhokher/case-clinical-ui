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
      >
        <ui-toggle-switch-button [buttons]="vm.config.items.storeToggleSwitchButton"></ui-toggle-switch-button>
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
      <ui-toggle-switch-button [buttons]="storeToggleSwitchButton"></ui-toggle-switch-button> \n\n
      storeToggleSwitchButton=[
        {
          id:1,
          height:'h-6',
          width:'w-6',
          left:'left-96',
          bgColor:'bg-green-600',
          divWidth:'w-12',
          divHeight:'h-8',
          onOff:false,
        },
    ]
      `,
  ]
}
