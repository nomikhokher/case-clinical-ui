import { Component } from '@angular/core'
import { DevWeatherUpdatesStore } from './dev-weather-updates.store'

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
        <ui-weather-updates [cardColor]="vm.config.items.cardColor" [city]="vm.config.items.city"></ui-weather-updates>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevWeatherUpdatesStore],
})
export class DevWeatherUpdatesComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevWeatherUpdatesStore) {}
  codePreview
  ngOnInit(): void {
    this.vm$.subscribe((result) => {
      this.codePreview = [
        `import { WebUiWeatherUpdatesModule } from '@schema-driven/web/ui/weather-updates' \n\n 
        <ui-weather-updates [cardColor]="vm.config.items.cardColor" [city]="vm.config.items.city"></ui-weather-updates> \n\n
        
          cardColor = ${JSON.stringify(result.config.items.cardColor, null, '\t')}
          
        `,
      ]
    })
  }
}
