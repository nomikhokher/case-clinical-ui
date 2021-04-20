import { Component } from '@angular/core'
import { DevNotificationStore } from './dev-notification.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <div class="p-4 shadow rounded-lg bg-gray-100 dark:bg-gray-800">
        <pre class="text-xs dark:text-gray-500">{{ vm.items | json }}</pre>
      </div>
      <code class="text-xs px-2 py-1 dark:bg-gray-800 rounded-md opacity-70">
        Component: libs/web/dev/feature/src/lib/dev-notification/dev-notification.component.ts
      </code>
      <ui-preview>
        <ui-button color="indigo" [label]="'click'" (click)="showFn()"></ui-button>
        <ui-notification
          [name]="'Successfully saved!'"
          [title]="'Anyone with a link can now view this file.'"
          [closeBtn]="true"
          [show]="show"
          (closeValue)="closeAction($event)"
        ></ui-notification>
      </ui-preview>
      <ui-preview>
        <ui-button color="indigo" [label]="'click'" (click)="showFn()"></ui-button>
        <ui-notification
          [name]="'Successfully saved!'"
          [title]="'Anyone with a link can now view this file.'"
          [icon]="'check_circle'"
          [show]="show"
        ></ui-notification>
      </ui-preview>
      <ui-preview>
        <ui-button color="indigo" [label]="'click'" (click)="showFn()"></ui-button>
        <ui-notification
          [name]="'Successfully saved!'"
          [title]="'Anyone with a link can now view this file.'"
          [icon]="'check_circle'"
          [closeBtn]="true"
          [bottomSectionButton]="bottomSectionButton"
          (closeValue)="closeAction($event)"
          [show]="show"
        ></ui-notification>
      </ui-preview>
      <ui-preview>
        <ui-button color="indigo" [label]="'click'" (click)="showFn()"></ui-button>
        <ui-notification-image
          [name]="'Successfully saved!'"
          [title]="'Anyone with a link can now view this file.'"
          [show]="show"
          [avatarImg]="
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=CSFCItvz2d&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80'
          "
        ></ui-notification-image>
      </ui-preview>
      <ui-preview>
        <ui-button color="indigo" [label]="'click'" (click)="showFn()"></ui-button>
        <ui-notification-image
          [name]="'Successfully saved!'"
          [title]="'Anyone with a link can now view this file.'"
          [closeBtn]="true"
          (closeValue)="closeAction($event)"
          [show]="show"
          [avatarImg]="
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=CSFCItvz2d&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80'
          "
        ></ui-notification-image>
      </ui-preview>
      <ui-preview>
        <ui-button color="indigo" [label]="'click'" (click)="showFn()"></ui-button>
        <ui-notification-image
          [name]="'Successfully saved!'"
          [title]="'Anyone with a link can now view this file.'"
          [leftSectionButton]="leftSectionButton"
          [show]="show"
        ></ui-notification-image>
      </ui-preview>
      <ui-preview>
        <ui-notification-image
          [name]="'Successfully saved!'"
          [title]="'Anyone with a link can now view this file.'"
          [closeBtn]="true"
          [leftSectionButton]="leftSectionButton"
          (closeValue)="closeAction($event)"
          [show]="show"
          [avatarImg]="
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=CSFCItvz2d&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80'
          "
        ></ui-notification-image>
      </ui-preview>
      <ui-preview>
        <ui-button color="indigo" [label]="'click'" (click)="showFn()"></ui-button>
        <ui-notification-image
          [name]="'Successfully saved!'"
          [title]="'Anyone with a link can now view this file.'"
          [leftSectionButton]="leftSectionButton"
          [show]="show"
          [avatarImg]="
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=CSFCItvz2d&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80'
          "
        ></ui-notification-image>
      </ui-preview>
      <ui-preview>
        <ui-button color="indigo" [label]="'click'" (click)="showFn()"></ui-button>
        <ui-notification-image
          [name]="'Successfully saved!'"
          [title]="'Anyone with a link can now view this file.'"
          [closeBtn]="true"
          (closeValue)="closeAction($event)"
          [show]="show"
          [bottomSectionButton]="bottomSectionButton"
          [avatarImg]="
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=CSFCItvz2d&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80'
          "
        ></ui-notification-image>
      </ui-preview>
      <ui-preview>
        <ui-button color="indigo" [label]="'click'" (click)="showFn()"></ui-button>
        <ui-notification-image
          [name]="'Successfully saved!'"
          [title]="'Anyone with a link can now view this file.'"
          [closeBtn]="true"
          (closeValue)="closeAction($event)"
          [show]="show"
          [bottomSectionButton]="bottomSectionButton"
          [leftSectionButton]="leftSectionButton"
          [avatarImg]="
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=CSFCItvz2d&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80'
          "
        ></ui-notification-image>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevNotificationStore],
})
export class DevNotificationComponent {
  readonly vm$ = this.store.vm$

  icon?: string
  avatarImg?: string
  name: string
  title?: string
  closeBtn?: boolean
  show: boolean = false

  public subTimeout: any

  constructor(private readonly store: DevNotificationStore) {}

  showFn() {
    this.show = true
  }

  closeAction(value: boolean) {
    this.show = value
  }

  ngDoCheck() {
    if (this.show) {
      this.subTimeout = setTimeout(() => {
        this.show = false
      }, 5000)
    }
  }

  ngOnDestroy() {
    clearTimeout(this.subTimeout)
  }

  public leftSectionButton: ButtonReply[] = [
    {
      id: 1,
      name: 'reply',
      fn: function replyFn(value: any) {
        console.log(value)
      },
    },
    {
      id: 2,
      name: 'accept',
      fn: function replyFn(value: any) {
        console.log(value)
      },
    },
    {
      id: 3,
      name: `Don't allow`,
      fn: function replyFn(value: any) {
        console.log(value)
      },
    },
  ]

  public bottomSectionButton: ButtonReply[] = [
    {
      id: 1,
      name: 'reply',
      fn: function acceptFn(value: any) {
        console.log(value)
      },
    },
    {
      id: 2,
      name: 'accept',
      fn: function acceptFn(value: any) {
        console.log(value)
      },
    },
    {
      id: 3,
      name: `Don't allow`,
      fn: function acceptFn(value: any) {
        console.log(value)
      },
    },
  ]
}

export interface ButtonReply {
  id?: number
  name: string
  fn?: (x: any) => any
}
