import { Component } from '@angular/core'
import { DevContactSectionSlideBrandPanelStore } from './dev-contact-section-slide-brand-panel.store'

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
        [codeObj]="vm.config.items"
      >
        <ui-contact-section-slide-brand-panel></ui-contact-section-slide-brand-panel>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevContactSectionSlideBrandPanelStore],
})
export class DevContactSectionSlideBrandPanelComponent {
  readonly vm$ = this.store.vm$
  public codePreview
  constructor(private readonly store: DevContactSectionSlideBrandPanelStore) {}

  ngOnInit(): void {
    this.vm$.subscribe((result) => {
      this.codePreview = [
        `
        import { WebUicontactsectionslidebrandpanelModule } from '@schema-driven/web/ui/contact-section-slide-brand-panel'\n
          <ui-contact-section-slide-brand-panel></ui-contact-section-slide-brand-panel>\n\n
      `,
      ]
    })
  }
}
