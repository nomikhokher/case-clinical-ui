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
      <ui-preview [code]="codePreview[0]">
        <ui-button color="indigo" [label]="'click'" (click)="showFn()"></ui-button>
        <ui-notification
          [name]="'Successfully saved!'"
          [title]="'Anyone with a link can now view this file.'"
          [closeBtn]="true"
          [show]="show"
          (closeValue)="closeAction($event)"
        ></ui-notification>
      </ui-preview>
      <ui-preview [code]="codePreview[1]">
        <ui-button color="indigo" [label]="'click'" (click)="showFn()"></ui-button>
        <ui-notification
          [name]="'Successfully saved!'"
          [title]="'Anyone with a link can now view this file.'"
          [icon]="'check_circle'"
          [show]="show"
        ></ui-notification>
      </ui-preview>
      <ui-preview [code]="codePreview[2]">
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
      <ui-preview [code]="codePreview[3]">
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
      <ui-preview [code]="codePreview[4]">
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
      <ui-preview [code]="codePreview[5]">
        <ui-button color="indigo" [label]="'click'" (click)="showFn()"></ui-button>
        <ui-notification-image
          [name]="'Successfully saved!'"
          [title]="'Anyone with a link can now view this file.'"
          [leftSectionButton]="leftSectionButton"
          [show]="show"
        ></ui-notification-image>
      </ui-preview>
      <ui-preview [code]="codePreview[6]">
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
      <ui-preview [code]="codePreview[7]">
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
      <ui-preview [code]="codePreview[8]">
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
      <ui-preview [code]="codePreview[9]">
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
    `import { WebUiNotificationModule } from '@schema-driven/web/ui/notification'\n\n
import { WebUiNotificationImageModule } from '@schema-driven/web/ui/notification-image'\n\n
import { WebUiButtonModule } from '@schema-driven/web/ui/button\n\n'<ui-button color="indigo" [label]="'click'" (click)="showFn()"></ui-button>
  <ui-notification
    [name]="'Successfully saved!'"
    [title]="'Anyone with a link can now view this file.'"
    [icon]="'check_circle'"
    [show]="show"
  ></ui-notification>`,
    `import { WebUiNotificationModule } from '@schema-driven/web/ui/notification'\n\n
import { WebUiNotificationImageModule } from '@schema-driven/web/ui/notification-image'\n\n
import { WebUiButtonModule } from '@schema-driven/web/ui/button\n\n'<ui-button color="indigo" [label]="'click'" (click)="showFn()"></ui-button>
  <ui-notification
    [name]="'Successfully saved!'"
    [title]="'Anyone with a link can now view this file.'"
    [icon]="'check_circle'"
    [closeBtn]="true"
    [bottomSectionButton]="bottomSectionButton"
    (closeValue)="closeAction($event)"
    [show]="show"
  ></ui-notification>`,
    `import { WebUiNotificationModule } from '@schema-driven/web/ui/notification'\n\n
import { WebUiNotificationImageModule } from '@schema-driven/web/ui/notification-image'\n\n
import { WebUiButtonModule } from '@schema-driven/web/ui/button\n\n'<ui-button color="indigo" [label]="'click'" (click)="showFn()"></ui-button>
  <ui-notification-image
    [name]="'Successfully saved!'"
    [title]="'Anyone with a link can now view this file.'"
    [show]="show"
    [avatarImg]="
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=CSFCItvz2d&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80'
    "
  ></ui-notification-image>`,
    `import { WebUiNotificationModule } from '@schema-driven/web/ui/notification'\n\n
import { WebUiNotificationImageModule } from '@schema-driven/web/ui/notification-image'\n\n
import { WebUiButtonModule } from '@schema-driven/web/ui/button\n\n'<ui-button color="indigo" [label]="'click'" (click)="showFn()"></ui-button>
  <ui-notification-image
    [name]="'Successfully saved!'"
    [title]="'Anyone with a link can now view this file.'"
    [closeBtn]="true"
    (closeValue)="closeAction($event)"
    [show]="show"
    [avatarImg]="
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=CSFCItvz2d&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80'
    "
  ></ui-notification-image>`,
    `import { WebUiNotificationModule } from '@schema-driven/web/ui/notification'\n\n
import { WebUiNotificationImageModule } from '@schema-driven/web/ui/notification-image'\n\n
import { WebUiButtonModule } from '@schema-driven/web/ui/button\n\n'<ui-button color="indigo" [label]="'click'" (click)="showFn()"></ui-button>
  <ui-notification-image
    [name]="'Successfully saved!'"
    [title]="'Anyone with a link can now view this file.'"
    [leftSectionButton]="leftSectionButton"
    [show]="show"
  ></ui-notification-image>`,
    `import { WebUiNotificationModule } from '@schema-driven/web/ui/notification'\n\n
    import { WebUiNotificationImageModule } from '@schema-driven/web/ui/notification-image'\n\n<ui-notification-image
  [name]="'Successfully saved!'"
  [title]="'Anyone with a link can now view this file.'"
  [closeBtn]="true"
  [leftSectionButton]="leftSectionButton"
  (closeValue)="closeAction($event)"
  [show]="show"
  [avatarImg]="
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=CSFCItvz2d&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80'
  "
></ui-notification-image>`,
    `import { WebUiNotificationModule } from '@schema-driven/web/ui/notification'\n\n
import { WebUiNotificationImageModule } from '@schema-driven/web/ui/notification-image'\n\n
import { WebUiButtonModule } from '@schema-driven/web/ui/button\n\n'<ui-button color="indigo" [label]="'click'" (click)="showFn()"></ui-button>
  <ui-notification-image
    [name]="'Successfully saved!'"
    [title]="'Anyone with a link can now view this file.'"
    [leftSectionButton]="leftSectionButton"
    [show]="show"
    [avatarImg]="
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=CSFCItvz2d&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80'
    "
  ></ui-notification-image>`,
    `import { WebUiNotificationModule } from '@schema-driven/web/ui/notification'\n\n
import { WebUiNotificationImageModule } from '@schema-driven/web/ui/notification-image'\n\n
import { WebUiButtonModule } from '@schema-driven/web/ui/button\n\n'<ui-button color="indigo" [label]="'click'" (click)="showFn()"></ui-button>
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
  ></ui-notification-image>`,
    `import { WebUiNotificationModule } from '@schema-driven/web/ui/notification'\n\n
import { WebUiNotificationImageModule } from '@schema-driven/web/ui/notification-image'\n\n
import { WebUiButtonModule } from '@schema-driven/web/ui/button\n\n'<ui-button color="indigo" [label]="'click'" (click)="showFn()"></ui-button>
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
  ></ui-notification-image>`,
  ]

  showFn() {
    this.show = true
    if (!this.subTimeout) {
      this.subTimeout = window.setTimeout(() => {
        this.show = false
      }, 5000)
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
