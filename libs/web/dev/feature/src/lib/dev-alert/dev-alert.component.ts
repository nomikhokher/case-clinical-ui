import { Component, ViewChild, ViewChildren, QueryList } from '@angular/core'
import { WebUiAlertComponent } from '@schema-driven/web/ui/alert'
import { WebUiPreviewComponent } from '@schema-driven/web/ui/preview'
import { DevAlertStore } from './dev-alert.store'
@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-preview
        [component_props]="[{ name: 'settings', value: {} }]"
        [codeObj]=""
        [code]="codePreview[0]"
        [title]="vm.config.previewData.header"
        [githubURL]="vm.config.previewData.githubURL"
        [directory]="vm.config.previewData.directory"
        [breadcrumbs]="vm.config.previewData.breadcrumbs"
        [component_inputs]="vm.config.items.component_inputs"
        [component_outputs]="vm.config.items.component_outputs"
      >
        <ui-alert
          [class]="vm.config.items.data.class"
          [subject]="vm.config.items.data.subject"
          [message]="vm.config.items.data.message"
          [bg_color]="vm.config.items.data.bg_color"
          [icon]="vm.config.items.data.icon"
          [icon_show]="vm.config.items.data.icon_show"
          [content_align]="vm.config.items.data.alignment"
        ></ui-alert>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevAlertStore],
})
export class DevAlertComponent {
  readonly vm$ = this.store.vm$

  @ViewChild(WebUiPreviewComponent) component_preview: WebUiPreviewComponent
  @ViewChildren(WebUiAlertComponent) items: QueryList<WebUiAlertComponent>
  public codePreview = [
    `import { WebUiAlertModule } from '@schema-driven/web/ui/alert'
    \n\n
    <ui-alert
    class="mb-4 mt-4"
    subject="Attention needed"
    message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum."
    bg_color="warning"
    icon="exclamation"
    [icon_show]="true"
  ></ui-alert>`,
  ]

  htmlstring = 'You have no credits left. <a href="#"><u>Upgrade your account to add more credits</u></a>'
  constructor(private readonly store: DevAlertStore) {}
}
