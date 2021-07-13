import { Component } from '@angular/core'
import { DevNotificationStore } from './dev-notification.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <div class="p-4 shadow rounded-lg bg-gray-100 dark:bg-gray-800">
        <pre class="text-xs dark:text-gray-500">{{ vm.items | json }}</pre>
      </div>
      <ui-preview
        [code]="codePreview[0]"
        [title]="vm.config.headerTitle"
        [githubURL]="vm.config.githubURL"
        [directory]="vm.config.directory"
        [breadcrumbs]="vm.config.breadcrumbs"
        [component_inputs]="vm.config.component_inputs"
        [component_outputs]="vm.config.component_outputs"
      >
        <div class="inline-block mx-2">
          <ui-button color="indigo  " [label]="'Click me'" (click)="showFn()"></ui-button>
          <ui-notification
            [icon]="vm.config.items[0].icon"
            [name]="vm.config.items[0].name"
            [title]="vm.config.items[0].title"
            [closeBtn]="vm.config.items[0].closeBtn"
            [show]="show"
            [timeInSec]="vm.config.items[0].timeInSec"
            [avatarImg]="vm.config.items[0].avatarImg"
            [background]="vm.config.items[0].background"
            [leftSectionButton]="vm.config.items[0].leftSectionButton"
            [bottomSectionButton]="vm.config.items[0].bottomSectionButton"
            (closeValue)="closeAction($event)"
            (timeSec)="time($event)"
          ></ui-notification>
        </div>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevNotificationStore],
})
export class DevNotificationComponent {
  readonly vm$ = this.store.vm$

  show: boolean = false
  setTime?: number
  public subTimeout: ReturnType<typeof setTimeout> | any

  constructor(private readonly store: DevNotificationStore) {}

  public codePreview = [
    `import { WebUiNotificationModule } from '@schema-driven/web/ui/notification'\n\n
import { WebUiNotificationImageModule } from '@schema-driven/web/ui/notification-image'\n\n
import { WebUiButtonModule } from '@schema-driven/web/ui/button\n\n'<ui-button color="indigo" [label]="'click'" (click)="showFn()"></ui-button>
  <ui-notification
    [name]="'Successfully saved!'"
    [title]="'Anyone with a link can now view this file.'"
    [closeBtn]="true"
    [show]="show"
    (closeValue)="closeAction($event)"
  ></ui-notification>`,
    ,
  ]
  showFn() {
    this.show = true
    if (!this.subTimeout) {
      this.subTimeout = window.setTimeout(() => {
        this.show = false
        this.closeAction(false)
      }, this.setTime * 1000)
    }
  }

  closeAction(value: boolean) {
    this.show = value
    window.clearTimeout(this.subTimeout)
    this.subTimeout = undefined
  }

  ngOnDestroy() {
    clearTimeout(this.subTimeout)
    this.subTimeout = undefined
  }
  time(second: number) {
    this.setTime = second
  }
}
