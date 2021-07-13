import { Component } from '@angular/core'
import { DevRangeSliderStore } from './dev-range-slider.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-preview
        [code]="codePreview[0]"
        [title]="vm.config.headerTitle"
        [githubURL]="vm.config.githubURL"
        [directory]="vm.config.directory"
        [breadcrumbs]="vm.config.breadcrumbs"
        [component_outputs]="vm.config.component_outputs"
        [component_inputs]="vm.config.component_inputs"
      >
        <ui-range-slider
          [minprice]="vm.config.items.minprice"
          [maxprice]="vm.config.items.maxprice"
          [difference]="vm.config.items.difference"
        ></ui-range-slider>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevRangeSliderStore],
})
export class DevRangeSliderComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevRangeSliderStore) {}

  public codePreview = [
    `import { WebUiRangeSliderModule } from '@schema-driven/web/ui/range-slider' \n\n 
    <ui-range-slider 
    [minprice]="100"
    [maxprice]="1000"
    [difference]="50" >
    </ui-range-slider>
  `,
  ]
}
