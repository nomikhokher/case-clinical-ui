import { Component, Input, TemplateRef } from '@angular/core'
import { Crumb } from '@schema-driven/web/ui/breadcrumbs'
import { Meta } from '@schema-driven/web/ui/page-header'

@Component({
  selector: 'ui-page',
  template: `
    <div
      [ngClass]="'overflow-y-auto mx-auto h-full w-full' + containerClass"
      [style.max-height]="'calc(100vh - 60px)'"
      [class.max-w-7xl]="!fluid"
      [class.px-3]="!flush"
      [class.md:px-6]="!flush"
      [class.lg:px-8]="!flush"
    >
      <ui-page-header
        [title]="headerTitle"
        [breadcrumbs]="breadcrumbs"
        [meta]="headerMeta"
        [controlsTemplate]="controlsTemplate"
      ></ui-page-header>
      <div>
        <ng-content></ng-content>
      </div>
    </div>
  `,
})
export class WebUiPageComponent {
  @Input() breadcrumbs?: Crumb[]
  @Input() headerTitle?: string
  @Input() headerMeta?: Meta[]
  @Input() controlsTemplate: TemplateRef<any>
  @Input() fluid: boolean // Disabled container max width
  @Input() flush: boolean // Disabled page padding
  @Input() containerClass: string
}
