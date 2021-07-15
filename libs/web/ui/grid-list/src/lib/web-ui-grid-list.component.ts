import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-grid-list',
  template: `
    <ul
      class="grid grid-cols-{{ cols }} gap-{{ gap }} xs:grid-cols-{{ xs }} sm:grid-cols-{{ sm }} md:grid-cols-{{
        md
      }} lg:grid-cols-{{ lg }}"
    >
      <ng-content select="#gridList"></ng-content>
      <ng-content select="#gridList1"></ng-content>
      <ng-content select="#gridList2"></ng-content>
      <ng-content select="#gridList3"></ng-content>
    </ul>
  `,
})
export class WebUiGridListComponent {
  @Input() gap?: number
  @Input() cols: number
  @Input() lg?: number
  @Input() md?: number
  @Input() sm?: number
  @Input() xs?: number
}
