import { Component, ViewChild, ViewChildren, QueryList } from '@angular/core'
import { WebUiAlertComponent } from '@schema-driven/web/ui/alert'
import { WebUiPreviewComponent } from '@schema-driven/web/ui/preview'
import { DevAlertStore } from './dev-alert.store'
import { ServiceCodepreview } from '../../../../../ui/codepreview.service'
@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <div class="p-4 shadow rounded-lg bg-gray-100 dark:bg-gray-800">
        <pre class="text-xs dark:text-gray-500">{{ __usage() | json }}</pre>
      </div>

      <ui-preview [component_props]="[{ name: 'settings', value: {} }]" [codeObj]="dataArr[0]" [code]="codePreview[0]">
        <ui-alert
          [class]="dataArr[0].class"
          [subject]="dataArr[0].subject"
          [message]="dataArr[0].message"
          [bg_color]="dataArr[0].bg_color"
          [icon]="dataArr[0].icon"
          [icon_show]="dataArr[0].icon_show"
        ></ui-alert>
      </ui-preview>

      <ui-preview [codeObj]="dataArr[1]" [code]="codePreview[1]">
        <ui-alert
          [icon]="dataArr[1].icon"
          [icon_show]="true"
          class="mb-4 mt-4"
          subject="There were 2 errors with your submission"
          [bg_color]="dataArr[1].bg_color"
          [list]="_list()"
        ></ui-alert>
      </ui-preview>
      <ui-preview [codeObj]="dataArr[2]" [code]="codePreview[2]">
        <ui-alert
          [icon_show]="true"
          [icon]="dataArr[2].icon"
          class="mb-4 mt-4"
          subject="Order completed"
          [message]="dataArr[2].message"
          [bg_color]="dataArr[2].bg_color"
          [actionLink]="_actionLink()"
        ></ui-alert>
      </ui-preview>
      <ui-preview [codeObj]="dataArr[3]" [code]="codePreview[3]">
        <ui-alert
          class="mb-4 mt-4"
          [icon_show]="true"
          icon="information_circle"
          message="A new software update is available. See what’s new in version 2.0.4."
          [bg_color]="dataArr[3].bg_color"
        ></ui-alert>
      </ui-preview>
      <ui-preview [codeObj]="dataArr[4]" [component_preview]="component_preview" [code]="codePreview[4]">
        <ui-alert
          icon="check_circle"
          [icon_show]="true"
          class="mb-4 mt-4 desh"
          [message]="htmlstring"
          [bg_color]="dataArr[4].bg_color"
          [accent_border]="true"
        ></ui-alert>
      </ui-preview>

      <ui-preview [codeObj]="dataArr[5]" [component_preview]="component_preview" [code]="codePreview[5]">
        <ui-alert
          icon="check_circle"
          [icon_show]="true"
          class="mb-4 mt-4"
          message="Successfully updated"
          [bg_color]="dataArr[5].bg_color"
        ></ui-alert>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevAlertStore],
})
export class DevAlertComponent {
  readonly vm$ = this.store.vm$

  public data = [
    {
      display: false,
      image: 'https://images.com/iajkrgRAa',
      zoom: {
        toggle: true,
        child_id: 244,
      },
      childs: [
        {
          hello: 'Hello World',
        },
      ],
    },
  ]
  @ViewChild(WebUiPreviewComponent) component_preview: WebUiPreviewComponent
  @ViewChildren(WebUiAlertComponent) items: QueryList<WebUiAlertComponent>
  public codePreview = [
    `import { WebUiAlertModule } from '@schema-driven/web/ui/alert'
    \n\n
    <ui-alert
    class="mb-4 mt-4"
    subject="Attention needed"
    message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum."
    bg_color="warning"
    icon="exclamation"
    [icon_show]="true"
  ></ui-alert>`,
    `import { WebUiAlertModule } from '@schema-driven/web/ui/alert'
    \n\n<ui-alert
  icon="x_circle"
  [icon_show]="true"
  class="mb-4 mt-4"
  subject="There were 2 errors with your submission"
  bg_color="danger"
  [list]="_list()"
></ui-alert>`,
    `import { WebUiAlertModule } from '@schema-driven/web/ui/alert'
    \n\n <ui-alert
[icon_show]="true"
icon="check_circle"
class="mb-4 mt-4"
subject="Order completed"
message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam."
bg_color="success"
[actionLink]="_actionLink()"
></ui-alert>`,
    ` import { WebUiAlertModule } from '@schema-driven/web/ui/alert'
    \n\n<ui-alert
class="mb-4 mt-4"
[icon_show]="true"
icon="information_circle"
message="A new software update is available. See what’s new in version 2.0.4."
bg_color="info"
></ui-alert>`,
    `import { WebUiAlertModule } from '@schema-driven/web/ui/alert'
    \n\n<ui-alert
icon="check_circle"
[icon_show]="true"
class="mb-4 mt-4 desh"
[message]="htmlstring"
bg_color="warning"
[accent_border]="true"
></ui-alert>`,
    `import { WebUiAlertModule } from '@schema-driven/web/ui/alert'
    \n\n<ui-alert
icon="check_circle"
[icon_show]="true"
class="mb-4 mt-4"
message="Successfully updated"
bg_color="success"
></ui-alert>`,
  ]
  ngAfterViewInit() {
    //console.log(this.component_preview);
    console.log({
      items: this.items,
    })
    // this.render_html_code();
  }

  htmlstring = 'You have no credits left. <a href="#"><u>Upgrade your account to add more credits</u></a>'
  constructor(private readonly store: DevAlertStore, public readonly serviceData: ServiceCodepreview) {}

  public dataArr = [
    {
      id: 0,
      class: 'mb-4 mt-4',
      subject: 'Attention needed',
      message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      bg_color: 'warning',
      icon: 'exclamation',
      icon_show: true,
    },
    {
      id: 1,
      class: 'mb-4 mt-4',
      subject: 'There were 2 errors with your submission',
      message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      bg_color: 'danger',
      icon: 'x_circle',
      icon_show: true,
    },
    {
      id: 2,
      class: 'mb-4 mt-4',
      icon_show: true,
      icon: 'information_circle',
      message: 'A new software update is available. See what’s new in version 2.0.4.',
      bg_color: 'info',
    },
    {
      id: 3,
      class: 'mb-4 mt-4',
      icon_show: true,
      icon: 'information_circle',
      message: 'A new software update is available. See what’s new in version 2.0.4.',
      bg_color: 'info',
    },
    {
      id: 4,
      icon: 'check_circle',
      icon_show: true,
      class: 'mb-4 mt-4 desh',
      message: 'htmlstring',
      bg_color: 'warning',
      accent_border: 'true',
    },
    {
      id: 5,
      icon: 'check_circle',
      icon_show: true,
      class: 'mb-4 mt-4',
      message: 'Successfully updated',
      bg_color: 'success',
    },
  ]

  ngOnInit(): void {
    this.serviceData.codePreview$.subscribe((x) => {
      this.dataArr[x.id] = x
    })
  }

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
