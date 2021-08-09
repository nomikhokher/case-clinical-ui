import { Component } from '@angular/core'
import { DevDrawingPadStore } from './dev-drawing-pad.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-preview
        [code]="codePreview[0]"
        [title]="vm.config.headerTitle"
        [githubURL]="vm.config.githubURL"
        [directory]="vm.config.directory"
        [breadcrumbs]="vm.config.breadcrumbs"
        [component_inputs]="vm.config.component_inputs"
        [codeObj]="vm.config.items"
      >
        <ui-drawing-pad
          [width]="vm.config.items.width"
          [height]="vm.config.items.height"
          [lineWidth]="vm.config.items.lineWidth"
          [strokeStyle]="vm.config.items.strokeStyle"
          (val)="changeWidth($event)"
        ></ui-drawing-pad>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevDrawingPadStore],
})
export class DevDrawingPadComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevDrawingPadStore) {}

  changeWidth(value) {
    this.vm$.subscribe((data) => {
      console.log(data.config.items.lineWidth)
      if (value == 'minus') {
        data.config.items.lineWidth <= 5 ? (data.config.items.lineWidth = 5) : (data.config.items.lineWidth -= 5)
      } else {
        data.config.items.lineWidth >= 50 ? (data.config.items.lineWidth = 50) : (data.config.items.lineWidth += 5)
      }
    })
  }
  public codePreview = [
    `
  import { WebUiDrawingPadModule } from '@schema-driven/web/ui/drawing-pad' \n\n
  <ui-drawing-pad [width]="400" [height]="400" [lineWidth]="10" [strokeStyle]="'fff'"></ui-drawing-pad>
  `,
  ]
}
