import { Component } from '@angular/core'
import { DevWeatherUpdatesStore } from './dev-weather-updates.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-preview>
        <ui-weather-updates></ui-weather-updates>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevWeatherUpdatesStore],
})
export class DevWeatherUpdatesComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevWeatherUpdatesStore) {}
}
