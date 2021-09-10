import { Component, ViewChild, ViewChildren, QueryList } from '@angular/core'
import { WebUiAlertComponent } from '@schema-driven/web/ui/alert'
import { WebUiPreviewComponent } from '@schema-driven/web/ui/preview'
import { DevAlertStore } from './dev-alert.store'
@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-preview
        [component_props]="[{ name: 'settings', value: {} }]"
        [codeObj]="vm.config.items.data"
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
  public codePreview: Array<any>
  ngOnInit(): void {
    this.vm$.subscribe((result) => {
      this.codePreview = [
        `import { WebUiAlertModule } from '@schema-driven/web/ui/alert' \n\n 
      <ui-alert
          [class]="vm.config.items.data.class"
          [subject]="vm.config.items.data.subject"
          [message]="vm.config.items.data.message"
          [bg_color]="vm.config.items.data.bg_color"
          [icon]="vm.config.items.data.icon"
          [icon_show]="vm.config.items.data.icon_show"
          [content_align]="vm.config.items.data.alignment"
        ></ui-alert> \n\n
      
        class = ${JSON.stringify(result.config.items.data.class, null, '\t')}\n
        subject = ${JSON.stringify(result.config.items.data.subject, null, '\t')}\n
        message = ${JSON.stringify(result.config.items.data.message, null, '\t')}\n
        bg_color = ${JSON.stringify(result.config.items.data.bg_color, null, '\t')}\n
        icon = ${JSON.stringify(result.config.items.data.icon, null, '\t')}\n
        icon_show = ${JSON.stringify(result.config.items.data.icon_show, null, '\t')}\n
        content_align = ${JSON.stringify(result.config.items.data.alignment, null, '\t')}\n`,
      ]
    })
  }

  htmlstring = 'You have no credits left. <a href="#"><u>Upgrade your account to add more credits</u></a>'
  constructor(private readonly store: DevAlertStore) {}
}
