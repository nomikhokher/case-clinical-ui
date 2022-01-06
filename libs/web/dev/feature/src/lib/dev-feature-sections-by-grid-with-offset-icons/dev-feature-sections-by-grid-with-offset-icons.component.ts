import { Component } from '@angular/core'
import { DevFeatureSectionsByGridWithOffsetIconsStore } from './dev-feature-sections-by-grid-with-offset-icons.store'

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
      >
        <ui-feature-sections-by-grid-with-offset-icons
          [tabsData]="vm.config.items.tabsData"
          [featureOverview]="vm.config.items.featureOverview"
        ></ui-feature-sections-by-grid-with-offset-icons>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevFeatureSectionsByGridWithOffsetIconsStore],
})
export class DevFeatureSectionsByGridWithOffsetIconsComponent {
  readonly vm$ = this.store.vm$
  public codePreview
  constructor(private readonly store: DevFeatureSectionsByGridWithOffsetIconsStore) {}

  ngOnInit(): void {
    this.vm$.subscribe((result) => {
      this.codePreview = [
        `
        import { WebUifeaturesectionsbygridwithoffseticonsModule } from '@schema-driven/web/ui/feature-sections-by-grid-with-offset-icons'\n
           <ui-feature-sections-by-grid-with-offset-icons
          [tabsData]="vm.config.items.tabsData"
          [featureOverview]="vm.config.items.featureOverview"
        ></ui-feature-sections-by-grid-with-offset-icons>\n\n
      `,
      ]
    })
  }
}
