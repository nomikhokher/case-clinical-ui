import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-list-container',
  template: `
    <ng-container *ngIf="roundedDividers">
      <div class="bg-white shadow overflow-hidden sm:rounded-md">
        <div class="divide-y divide-gray-200" [ngClass]="classNames && classNames">
          <ng-content select=".roundedDividersNot"></ng-content>
        </div>
      </div>
    </ng-container>
    <ng-container *ngIf="!roundedDividers">
      <div class="divide-y divide-gray-200" [ngClass]="classNames && classNames">
        <ng-content select=".roundedDividers"></ng-content>
      </div>
    </ng-container>
  `,
})
export class WebUiListContainerComponent {
  @Input() classNames: string
  @Input() roundedDividers?: string

  ngOnInit() {
    console.log(this.classNames)
  }
}
