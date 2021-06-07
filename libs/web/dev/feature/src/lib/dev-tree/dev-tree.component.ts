import { Component, ViewChild, ViewChildren, QueryList } from '@angular/core'
import { WebUiPreviewComponent } from '@schema-driven/web/ui/preview'
import { DevTreeStore } from './dev-tree.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <div class="p-4 shadow rounded-lg bg-gray-100 dark:bg-gray-800">
        <pre class="text-xs dark:text-gray-500">{{ __usage() | json }}</pre>
      </div>

      <div class="mb-4 mt-4">
        <ui-tree></ui-tree>
      </div>
    </ng-container>
  `,
  providers: [DevTreeStore],
})
export class DevTreeComponent {
  readonly vm$ = this.store.vm$

  @ViewChild(WebUiPreviewComponent) component_preview: WebUiPreviewComponent

  constructor(private readonly store: DevTreeStore) {}

  __usage() {
    return {
      component: 'ui-tree',
      parameters: {
        show: 'boolean',
        class: 'string',
        subject: 'string',
        message: 'string',
        list: 'string []',
        actionLink: 'Object []',
        type: 'string',
        bg_color: 'string',
        dismiss: 'boolean',
        icon_show: 'boolean',
      },
    }
  }
}
