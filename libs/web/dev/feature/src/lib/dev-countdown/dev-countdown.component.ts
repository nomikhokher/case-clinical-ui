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
        <span class="font-mono text-6xl countdown">
          <ui-countdown
            (expired)="onExpire($event)"
            [delay]="vm.config.items.delay"
            [year]="vm.config.items.year"
            [month]="vm.config.items.month"
            [days]="vm.config.items.days"
            [hours]="vm.config.items.hours"
            [minutes]="vm.config.items.minutes"
            [seconds]="vm.config.items.seconds"
            [mode]="vm.config.items.mode"
            [timestamp]="vm.config.items.timestamp"
          >
          </ui-countdown>
        </span>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevCountdownStore],
})
export class DevCountdownComponent {
  readonly vm$ = this.store.vm$
  public codePreview
  constructor(private readonly store: DevCountdownStore) {}

  time: any
  onExpire(data) {
    return data
  }

  ngOnInit(): void {
    this.vm$.subscribe((result) => {
      this.codePreview = [
        `
        import { WebUicountdownModule } from '@schema-driven/web/ui/countdown'\n
          <ui-countdown
            (expired)="onExpire($event)"
            [delay]="vm.config.items.delay"
            [year]="vm.config.items.year"
            [month]="vm.config.items.month"
            [days]="vm.config.items.days"
            [hours]="vm.config.items.hours"
            [minutes]="vm.config.items.minutes"
            [seconds]="vm.config.items.seconds"
            [mode]="vm.config.items.mode"
            [timestamp]="vm.config.items.timestamp"
        >
        </ui-countdown>\n\n
      `,
      ]
    })
  }
}
