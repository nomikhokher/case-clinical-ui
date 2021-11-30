import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-empty-states-with-recommendations',
  template: `
    <div class="dark:bg-gray-800 border dark:border-indigo-700 px-6 py-4 mb-3 md:mb-6 rounded-lg shadow">
      <ui-input-select [options]="options" (sendData)="outputData($event)"></ui-input-select>
      <h3 class="text-xs mt-5 font-semibold text-gray-500 uppercase tracking-wide">{{ heading }}</h3>
      <div class="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <ng-container *ngFor="let item of userData">
          <ui-user-badge [userData]="item" (onClicked)="onUserClicked($event)"></ui-user-badge>
        </ng-container>
      </div>
    </div>
  `,
})
export class WebUiEmptyStatesWithRecommendationsComponent {
  @Input() options?: Options[]
  @Input() heading?: string
  @Input() userData?: UserData[]

  onUserClicked(e) {
    console.log(e)
  }
  outputData(e) {
    console.log(e)
  }
}
interface Options {
  opt?: string
}
interface UserData {
  name?: string
  role?: string
  img?: string
}
