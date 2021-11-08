import { Component } from '@angular/core'
import { DevProgressBarStore } from './dev-progress-bar.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-preview
        [title]="vm.config.headerTitle"
        [githubURL]="vm.config.githubURL"
        [directory]="vm.config.directory"
        [breadcrumbs]="vm.config.breadcrumbs"
        [component_inputs]="vm.config.component_inputs"
        [code]="codePreview[0]"
        [codeObj]="vm.config.items"
      >
        <ui-progress-bar
          [onCompleteColor]="vm.config.items.onCompleteColor"
          [inProgressColor]="vm.config.items.inProgressColor"
          [startingColor]="vm.config.items.startingColor"
        >
        </ui-progress-bar>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevProgressBarStore],
})
export class DevProgressBarComponent {
  readonly vm$ = this.store.vm$
  public codePreview
  constructor(private readonly store: DevProgressBarStore) {}

  ngOnInit(): void {
    this.vm$.subscribe((result) => {
      this.codePreview = [
        `import { WebUiProgressBarModule } from '@schema-driven/web/ui/progress-bar'\n\n
        <ui-progress-bar> </ui-progress-bar>`,
      ]
    })
  }
}
