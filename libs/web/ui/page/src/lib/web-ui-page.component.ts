import { AfterViewInit, Component, ElementRef, Input, TemplateRef, ViewChild } from '@angular/core'
import { Crumb } from '@schema-driven/web/ui/breadcrumbs'
import { Meta } from '@schema-driven/web/ui/page-header'

@Component({
  selector: 'ui-page',
  template: `
    <div
      #container
      [ngClass]="'overflow-y-auto mx-auto h-full w-full ' + containerClass"
      [style.max-height]="computedMaxHeight"
    >
      <div
        class="mx-auto"
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
    </div>
  `,
})
export class WebUiPageComponent implements AfterViewInit {
  @Input() breadcrumbs?: Crumb[]
  @Input() headerTitle?: string
  @Input() headerMeta?: Meta[]
  @Input() controlsTemplate: TemplateRef<any>
  @Input() fluid: boolean // Disabled container max width
  @Input() flush: boolean // Disabled page padding
  @Input() containerClass: string

  computedMaxHeight: string

  @ViewChild('container') container: ElementRef<HTMLDivElement>
  ngAfterViewInit() {
    if (this.container?.nativeElement) {
      const offsetTop = this.container.nativeElement.getBoundingClientRect().top
      setTimeout(() => {
        this.computedMaxHeight = `calc(100vh - ${offsetTop || 0}px)`
      })
    }
  }
}
