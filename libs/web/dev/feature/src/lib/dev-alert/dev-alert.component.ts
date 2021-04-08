import { Component, ViewChild, ViewChildren, QueryList } from '@angular/core'
import { WebUiAlertComponent } from '@schema-driven/web/ui/alert'
import { WebUiPreviewComponent } from '@schema-driven/web/ui/preview'
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

      <ui-preview>
        <ui-alert
          class="mb-4 mt-4"
          subject="Attention needed"
          message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum."
          bg_color="warning"
          icon="exclamation"
          [icon_show]="true"
        ></ui-alert>
      </ui-preview>

      <ui-preview>
        <ui-alert
          icon="x_circle"
          [icon_show]="true"
          class="mb-4 mt-4"
          subject="There were 2 errors with your submission"
          bg_color="danger"
          [list]="_list()"
        ></ui-alert>
      </ui-preview>
      <ui-preview>
        <ui-alert
          [icon_show]="true"
          icon="check_circle"
          class="mb-4 mt-4"
          subject="Order completed"
          message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam."
          bg_color="success"
          [actionLink]="_actionLink()"
        ></ui-alert>
      </ui-preview>
      <ui-preview>
        <ui-alert
          class="mb-4 mt-4"
          [icon_show]="true"
          icon="information_circle"
          message="A new software update is available. See what’s new in version 2.0.4."
          bg_color="info"
        ></ui-alert>
      </ui-preview>
      <ui-preview [component_preview]="component_preview">
        <ui-alert
          icon="check_circle"
          [icon_show]="true"
          class="mb-4 mt-4 desh"
          [message]="htmlstring"
          bg_color="warning"
          [accent_border]="true"
        ></ui-alert>
      </ui-preview>

      <ui-preview [component_preview]="component_preview">
        <ui-alert
          icon="check_circle"
          [icon_show]="true"
          class="mb-4 mt-4"
          message="Successfully updated"
          bg_color="success"
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

  ngAfterViewInit() {
    //console.log(this.component_preview);
    console.log({
      items: this.items,
    })
    // this.render_html_code();
  }

  htmlstring = 'You have no credits left. <a href="#"><u>Upgrade your account to add more credits</u></a>'
  constructor(private readonly store: DevAlertStore) {}
  _list() {
    return [
      'Your password must be at least 8 characters',
      'Your password must include at least one pro wrestling finishing move',
    ]
  }

  _actionLink() {
    return [
      {
        title: 'View status',
        click_event: (child) => {
          console.log('event triggered')
        },
      },
      {
        title: 'Dismiss',
        click_event: (child) => {
          child.show = false
        },
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
