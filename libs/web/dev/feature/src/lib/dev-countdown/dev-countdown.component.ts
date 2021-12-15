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
        <ui-countdown [countDown]="60"></ui-countdown>
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
        `import { WebUicountdownModule } from '@schema-driven/web/ui/countdown'\n\n
        import { WebUicountdownModule } from '@schema-driven/web/ui/countdown'\n\n
        <div class="dark:bg-gray-800 border dark:border-indigo-700 px-6 py-4 mb-3 md:mb-6 rounded-lg shadow">
          <div>
            <span class="font-mono text-6xl countdown">
            <span style="--value:60;">{{ countDown }}<span style="font-size: 16px;">sec</span></span>
            </span>
            <!-- <code>ui-countdown</code> -->
          </div>
        </div>
        \n\n
      `,
      ]
    })
  }
}
