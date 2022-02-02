import { Component } from '@angular/core'
import { DevTeamSectionStore } from './dev-team-section.store'

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
        <ui-team-section [contactCard]="vm.config.items.contactCard"></ui-team-section>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevTeamSectionStore],
})
export class DevTeamSectionComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevTeamSectionStore) {}

  public codePreview: Array<any>
  ngOnInit(): void {
    this.vm$.subscribe((result) => {
      this.codePreview = [
        `import { WebUiTeamSectionModule } from '@schema-driven/web/ui/team-section'\n
<ui-team-section [contactCard]="vm.config.items.contactCard"></ui-team-section>\n
contactCard = ${JSON.stringify(result.config.items.contactCard, null, '\t')}\n
      `,
      ]
    })
  }
}
