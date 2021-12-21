import { Component } from '@angular/core'
import { DevCountdownStore } from './dev-countdown.store'

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
        [codeObj]="vm.config.items"
      >
        <ui-countdown></ui-countdown>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevCountdownStore],
})
export class DevCountdownComponent {
  readonly vm$ = this.store.vm$
  public codePreview
  constructor(private readonly store: DevCountdownStore) {}

  ngOnInit(): void {
    this.vm$.subscribe((result) => {
      this.codePreview = [
        `
        import { WebUicountdownModule } from '@schema-driven/web/ui/countdown'\n\n
        var minutesToAdd = 30;
        var currentDate = new Date();
        <ui-countdown [countDown]="new Date((currentDate.getTime() + minutesToAdd*30000))"></ui-countdown>
        \n\n
      `,
      ]
    })
  }
}
