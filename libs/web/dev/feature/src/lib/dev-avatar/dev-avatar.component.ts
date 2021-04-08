import { Component } from '@angular/core'
import { DevAvatarStore } from './dev-avatar.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-preview>
        <ui-avatar mode="img" [payload]="payload" radius="circle" [size]="14"></ui-avatar>
      </ui-preview>
      <div class="p-4 mt-4 shadow rounded-lg">
        <ui-avatar mode="img" [payload]="payload" radius="circle" [size]="14"></ui-avatar>
      </div>
      <div class="p-4 mt-4 shadow rounded-lg">
        <ui-avatar mode="img" [payload]="payload" radius="circle" [size]="14" [badge]="badge"></ui-avatar>
      </div>
      <div class="p-4 mt-4 shadow rounded-lg">
        <ui-avatar mode="img" [payload]="payload" radius="rounded" [size]="14"></ui-avatar>
      </div>
      <div class="p-4 mt-4 shadow rounded-lg">
        <ui-avatar mode="img" [payload]="payload" radius="rounded" [size]="14" [badge]="badge"></ui-avatar>
      </div>
      <div class="p-4 mt-4 shadow rounded-lg">
        <ui-avatar mode="text" [payload]="'MB'" radius="circle" [size]="14"></ui-avatar>
      </div>
      <div class="p-4 mt-4 shadow rounded-lg">
        <ui-avatar mode="text" [payload]="'CB'" radius="circle" [size]="14" [badge]="badge"></ui-avatar>
      </div>
      <code class="text-xs px-2 py-1 dark:bg-gray-800 rounded-md opacity-70">
        Component: libs/web/dev/feature/src/lib/dev-avatar/dev-avatar.component.ts
      </code>
    </ng-container>
  `,
  providers: [DevAvatarStore],
})
export class DevAvatarComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevAvatarStore) {}
  badge = {
    color: 'red',
    position: 'top-right',
  }
  payload =
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=CSFCItvz2d&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  icon = 'check_circle'
  configs = [
    {
      mode: 'simple',
      avatars: [
        {
          type: 'img|icon|text',
          badge: {
            color: 'red', //color-name: green,red,blue
            position: 'top-right', //top-right top-left bottom-right bottom-left
          },
          payload:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=CSFCItvz2d&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          radius: 'circle', //rounded
          size: '14',
        },
      ],
    },
    {
      mode: 'stacked',
      avatars: [
        {
          type: 'img|icon|text',
          badge: {
            color: '',
            position: '',
          },
          payload: '',
        },
        {
          type: 'img|icon|text',
          badge: {
            color: '',
            position: '',
          },
          payload: '',
        },
      ],
      order: '',
    },
    {
      mode: 'simple-text',
      avatars: [
        {
          type: 'img|icon|text',
          badge: {
            color: '',
            position: '',
          },
          payload: '',
        },
      ],
    },
  ]
}
