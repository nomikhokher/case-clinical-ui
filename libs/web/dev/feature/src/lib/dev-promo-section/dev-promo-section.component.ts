import { Component } from '@angular/core'
import { DevPromoSectionStore } from './dev-promo-section.store'

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
        <ui-promo-section
          [heading]="vm.config.items.heading"
          [description]="vm.config.items.description"
          [btnText]="vm.config.items.btnText"
          [backgroundImg]="vm.config.items.backgroundImg"
          [commentHeading]="vm.config.items.commentHeading"
          [comments]="vm.config.items.comments"
        ></ui-promo-section>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevPromoSectionStore],
})
export class DevPromoSectionComponent {
  readonly vm$ = this.store.vm$
  public codePreview
  constructor(private readonly store: DevPromoSectionStore) {}

  ngOnInit(): void {
    this.vm$.subscribe((result) => {
      this.codePreview = [
        `import { WebUiPromoSectionModule } from '@schema-driven/web/ui/promo-section' \n\n 
        <ui-promo-section 
          [heading]="vm.config.items.heading"
          [description]="vm.config.items.description"
          [btnText]="vm.config.items.btnText"
          [backgroundImg]="vm.config.items.backgroundImg"
          [commentHeading]="vm.config.items.commentHeading"
          [comments]="vm.config.items.comments"
        ></ui-promo-section> \n\n
        {
          heading: ${JSON.stringify(result.config.items.heading, null, '\t')}
          description: ${JSON.stringify(result.config.items.description, null, '\t')}
          btnText:${JSON.stringify(result.config.items.btnText, null, '\t')}
          backgroundImg:${JSON.stringify(result.config.items.backgroundImg, null, '\t')}
          commentHeading:${JSON.stringify(result.config.items.commentHeading, null, '\t')}
          comments:${JSON.stringify(result.config.items.comments, null, '\t')}
        }`,
      ]
    })
  }
}
