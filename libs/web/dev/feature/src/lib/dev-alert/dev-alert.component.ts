import { Component } from '@angular/core'
import { DevAlertStore } from './dev-alert.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <div class="p-4 shadow rounded-lg bg-gray-100 dark:bg-gray-800">
        <pre class="text-xs dark:text-gray-500">{{ __usage() | json }}</pre>
      </div>

      <code class="text-xs px-2 py-1 dark:bg-gray-800 rounded-md opacity-70">
        Component: libs/web/dev/feature/src/lib/dev-alert/dev-alert.component.ts
      </code>

      <ui-alert
        [dismiss]="true"
        class="mb-4 mt-4"
        subject="Attention"
        message="This is just a dummy message"
        bg_color="success"
        [list]="_list()"
        [actionLink]="_actionLink()"
      ></ui-alert>

      <ui-alert
        [show]="false"
        class="mb-4 mt-4"
        subject="Attention"
        message="This is just a dummy message"
        bg_color="bg-indigo-500"
        [list]="_list()"
      ></ui-alert>

      <ui-alert
        [icon_show]="true"
        class="mb-4 mt-4"
        subject="Done"
        message="This is just a dummy message"
        bg_color="warning"
        [list]="_list()"
      ></ui-alert>

      <ui-alert
        class="mb-4 mt-4"
        subject="Error"
        message="This is just a dummy message"
        bg_color="danger"
        [list]="_list()"
      ></ui-alert>

      <ui-alert
        class="mb-4 mt-4"
        subject="Error"
        message="This is just a dummy message"
        bg_color="info"
        [list]="_list()"
      ></ui-alert>
    </ng-container>
  `,
  providers: [DevAlertStore],
})
export class DevAlertComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevAlertStore) {}
  _list() {
    return ['This is a dummy list message', 'This is a dummy list message', 'This is a dummy list message']
  }

  _actionLink() {
    return [
      {
        title: 'View Report',
        click_event: () => {
          console.log('event triggered')
        },
      },
      {
        title: 'Delete Report',
      },
    ]
  }

  __usage() {
    return {
      component: 'ui-alert',
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
