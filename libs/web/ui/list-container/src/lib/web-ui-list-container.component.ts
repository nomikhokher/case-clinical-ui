import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-list-container',
  template: `
    <ng-container>
      <div class="bg-white shadow-md overflow-hidden" [ngClass]="{ 'rounded-lg': roundedDividers }">
        <div class="divide-y divide-gray-200" [ngClass]="classNames && classNames">
          <ng-content select=".content"></ng-content>
        </div>
      </div>
    </ng-container>
  `,
})
export class WebUiListContainerComponent {
  @Input() classNames: string
  @Input() roundedDividers?: string
}
