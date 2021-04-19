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
        <ui-notification
          [name]="'Successfully saved!'"
          [title]="'Anyone with a link can now view this file.'"
          [icon]="'check_circle'"
          [closeBtn]="true"
          [undoBtn]="true"
          [dismissBtn]="false"
          (dismissValue)="declineFn($event)"
          (undoValue)="undoFn($event)"
          (closeValue)="closeFn($event)"
        ></ui-notification>
      </ui-preview>
      <ui-preview>
        <ui-notification
          [name]="'Successfully saved!'"
          [closeBtn]="true"
          [undoBtn]="true"
          (undoValue)="undoFn($event)"
          (closeValue)="closeFn($event)"
        ></ui-notification>
      </ui-preview>
      <ui-preview>
        <ui-notification-image
          (replyValue)="replyFn($event)"
          (dismissValue)="declineFn($event)"
          (closeValue)="closeFn($event)"
          [name]="'Successfully saved!'"
          [title]="'Anyone with a link can now view this file.'"
          [replyBtn]="true"
          [dismissBtn]="true"
        ></ui-notification-image>
      </ui-preview>
      <ui-preview>
        <ui-notification-image
          (replyValue)="replyFn($event)"
          (dismissValue)="declineFn($event)"
          [name]="'Successfully saved!'"
          [title]="'Anyone with a link can now view this file.'"
          [replyBtn]="true"
          [dismissBtn]="true"
          [avatarImg]="
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=CSFCItvz2d&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80'
          "
        ></ui-notification-image>
      </ui-preview>
      <ui-preview>
        <ui-notification-image
          (acceptValue)="acceptFn($event)"
          (declineValue)="declineFn($event)"
          (closeValue)="closeFn($event)"
          [name]="'Successfully saved!'"
          [title]="'Anyone with a link can now view this file.'"
          [closeBtn]="true"
          [acceptBtn]="true"
          [declineBtn]="true"
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
  name: string
  title?: string
  closeBtn?: boolean
  undoBtn?: boolean
  dismissBtn?: boolean
  declineBtn?: boolean
  acceptBtn?: boolean
  replyBtn?: boolean
  avatarImg?: string

  constructor(private readonly store: DevNotificationStore) {}

  acceptFn(value: any) {
    console.log(value)
  }
  declineFn(value: any) {
    console.log(value)
  }
  replyFn(value: any) {
    console.log(value)
  }
  dismissFn(value: any) {
    console.log(value)
  }
  undoFn(value: any) {
    console.log(value)
  }
  closeFn(value: any) {
    console.log(value)
  }
}
