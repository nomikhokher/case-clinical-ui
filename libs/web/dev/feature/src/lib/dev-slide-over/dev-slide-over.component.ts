import { Component } from '@angular/core'
import { DevSlideOverStore } from './dev-slide-over.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <div class="p-4 shadow rounded-lg bg-gray-100 dark:bg-gray-800">
        <pre class="text-xs dark:text-gray-500">{{ vm.items | json }}</pre>
      </div>
      <code class="text-xs px-2 py-1 dark:bg-gray-800 rounded-md opacity-70">
        Component: libs/web/dev/feature/src/lib/dev-slide-over/dev-slide-over.component.ts
      </code>
      <!-- <ui-preview>
        <ui-slide-over
          [width]="'max-w-2xl'"
          [overlay]="'bg-gray-500 bg-opacity-75 transition-opacity'"
          [closeButtonOutSide]="closeButtonOutSide"
          [headerObj]="headerObj"
        ></ui-slide-over>
      </ui-preview> -->
      <ui-preview>
        <ui-slide-over-layout
          [width]="'max-w-2xl'"
          [headerObj]="headerObj"
          [footerObj]="footerObj"
        ></ui-slide-over-layout>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevSlideOverStore],
})
export class DevSlideOverComponent {
  readonly vm$ = this.store.vm$
  public closeButtonOutSide: boolean = true
  public headerObj: { id: string; name?: string; title: string } = {
    id: '1',
    name: '',
    title: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit aliquam ad hic recusandae soluta.',
  }

  public footerObj: SlideOverFooter[] = [
    {
      id: '1',
      type: 'button',
      name: 'save',
      color: 'indigo',
    },
    {
      id: '2',
      type: 'button',
      name: 'cancel',
      color: 'gray',
    },
    {
      id: '2',
      type: 'button',
      name: 'cancel',
      color: 'gray',
    },
  ]

  constructor(private readonly store: DevSlideOverStore) {}
}

export interface SlideOverFooter {
  id: string
  name: string
  type: string
  color: string
}
