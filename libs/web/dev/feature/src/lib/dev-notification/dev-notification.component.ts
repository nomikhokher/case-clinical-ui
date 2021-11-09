import { Component } from '@angular/core'
import { Subscription, timer } from 'rxjs'
import { DevNotificationStore } from './dev-notification.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-preview
        [code]="codePreview[0]"
        [title]="vm.config.headerTitle"
        [githubURL]="vm.config.githubURL"
        [directory]="vm.config.directory"
        [breadcrumbs]="vm.config.breadcrumbs"
        [component_inputs]="vm.config.component_inputs"
        [component_outputs]="vm.config.component_outputs"
        [codeObj]="vm.config.items[0]"
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
            [bottomSectionButton]="vm.config.items[0].bottomSectionButton"
            (closeValue)="closeAction($event)"
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
  subtTime?: Subscription

  constructor(private readonly store: DevNotificationStore) {}

  public codePreview: Array<any>
  ngOnInit(): void {
    this.vm$.subscribe((result) => {
      this.codePreview = [
        `import { WebUiNotificationImageModule } from '@schema-driven/web/ui/notification-image'' \n\n 
        <ui-notification
        [icon]="vm.config.items[0].icon"
        [name]="vm.config.items[0].name"
        [title]="vm.config.items[0].title"
        [closeBtn]="vm.config.items[0].closeBtn"
        [show]="show"
        [timeInSec]="vm.config.items[0].timeInSec"
        [avatarImg]="vm.config.items[0].avatarImg"
        [background]="vm.config.items[0].background"
        [bottomSectionButton]="vm.config.items[0].bottomSectionButton"
        (closeValue)="closeAction($event)"
      ></ui-notification> \n\n
      
        icon = ${JSON.stringify(result.config.items[0].icon, null, '\t')}\n
        name = ${JSON.stringify(result.config.items[0].name, null, '\t')}\n
        title = ${JSON.stringify(result.config.items[0].title, null, '\t')}\n
        closeBtn = ${JSON.stringify(result.config.items[0].closeBtn, null, '\t')}\n
        show = ${JSON.stringify(result.config.items[0].show, null, '\t')}\n
        timeInSec = ${JSON.stringify(result.config.items[0].timeInSec, null, '\t')}\n
        avatarImg = ${JSON.stringify(result.config.items[0].avatarImg, null, '\t')}\n
        background = ${JSON.stringify(result.config.items[0].background, null, '\t')}\n
        bottomSectionButton = ${JSON.stringify(result.config.items[0].bottomSectionButton, null, '\t')}\n
        `,
      ]
    })
  }
  showFn() {
    this.show = true
    this.vm$.subscribe((x: any) => {
      this.setTime = x.config.items[0].timeInSec
    })

    this.subtTime = timer(this.setTime * 1000).subscribe(() => {
      this.show = false
      this.closeAction(false)
    })
  }

  closeAction(value: boolean) {
    this.show = value
    this.subtTime.unsubscribe()
  }

  ngOnDestroy() {
    this.subtTime.unsubscribe()
  }
}
